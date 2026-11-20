#!/usr/bin/env python3
"""HEIC/HEIF -> JPG tanpa libheif-HEVC: ambil tile HEVC dari kontainer ISOBMFF, decode pakai ffmpeg, susun grid, putar sesuai irot.
Pakai: python3 -I heic2jpg.py input.heic output.jpg [lebar_maks]"""
import struct, sys, subprocess, tempfile, os
from PIL import Image

def boxes(b, off, end):
    while off + 8 <= end:
        size, typ = struct.unpack(">I4s", b[off:off+8]); hdr = 8
        if size == 1: size = struct.unpack(">Q", b[off+8:off+16])[0]; hdr = 16
        elif size == 0: size = end - off
        yield typ.decode("latin1"), off + hdr, off + size
        off += size

def find(b, off, end, typ):
    for t, s, e in boxes(b, off, end):
        if t == typ: return s, e
    return None

def main(src, dst, maxw=1600):
    b = open(src, "rb").read()
    meta = find(b, 0, len(b), "meta"); ms, me = meta[0] + 4, meta[1]  # full box
    pitm = find(b, ms, me, "pitm"); ver = b[pitm[0]]; primary = struct.unpack(">H" if ver == 0 else ">I", b[pitm[0]+4:pitm[0]+6 if ver == 0 else pitm[0]+8])[0]
    # iinf: item types
    types = {}
    s, e = find(b, ms, me, "iinf"); v = b[s]; p = s + 4; n = struct.unpack(">H" if v == 0 else ">I", b[p:p+(2 if v == 0 else 4)])[0]; p += 2 if v == 0 else 4
    for t, cs, ce in boxes(b, p, e):
        if t != "infe": continue
        iv = b[cs]
        if iv >= 2:
            q = cs + 4; iid = struct.unpack(">H" if iv == 2 else ">I", b[q:q+(2 if iv == 2 else 4)])[0]; q += 2 if iv == 2 else 4
            q += 2; types[iid] = b[q:q+4].decode("latin1")
    idat = find(b, ms, me, "idat") or (0, 0)
    # iloc
    s, e = find(b, ms, me, "iloc"); v = b[s]; p = s + 4
    os_ls = b[p]; bo_ix = b[p+1]; off_size, len_size, base_size = os_ls >> 4, os_ls & 15, bo_ix >> 4; idx_size = bo_ix & 15 if v in (1, 2) else 0; p += 2
    def rd(n):
        nonlocal p
        val = int.from_bytes(b[p:p+n], "big") if n else 0; p += n; return val
    cnt = rd(2 if v < 2 else 4); loc = {}
    for _ in range(cnt):
        iid = rd(2 if v < 2 else 4)
        cm = rd(2) & 15 if v in (1, 2) else 0
        rd(2); base = rd(base_size); ec = rd(2); data = b""
        src0 = idat[0] if cm == 1 else 0
        for _ in range(ec):
            rd(idx_size); o = rd(off_size); l = rd(len_size); data += b[src0+base+o:src0+base+o+l]
        loc[iid] = data
    # iref dimg (grid -> tiles)
    refs = {}
    r = find(b, ms, me, "iref")
    if r:
        v = b[r[0]]
        for t, cs, ce in boxes(b, r[0] + 4, r[1]):
            q = cs; fmt = ">H" if v == 0 else ">I"; w = 2 if v == 0 else 4
            frm = struct.unpack(fmt, b[q:q+w])[0]; q += w; k = struct.unpack(">H", b[q:q+2])[0]; q += 2
            to = [struct.unpack(fmt, b[q+i*w:q+(i+1)*w])[0] for i in range(k)]
            refs.setdefault(t, {})[frm] = to
    # iprp: ipco + ipma
    iprp = find(b, ms, me, "iprp"); ipco = find(b, iprp[0], iprp[1], "ipco")
    props = [(t, cs, ce) for t, cs, ce in boxes(b, ipco[0], ipco[1])]
    ipma = find(b, iprp[0], iprp[1], "ipma"); v = b[ipma[0]]; fl = int.from_bytes(b[ipma[0]+1:ipma[0]+4], "big"); p = ipma[0] + 4
    assoc = {}
    ec = struct.unpack(">I", b[p:p+4])[0]; p += 4
    for _ in range(ec):
        iid = struct.unpack(">H" if v < 1 else ">I", b[p:p+(2 if v < 1 else 4)])[0]; p += 2 if v < 1 else 4
        k = b[p]; p += 1; lst = []
        for _ in range(k):
            if fl & 1: x = struct.unpack(">H", b[p:p+2])[0] & 0x7FFF; p += 2
            else: x = b[p] & 0x7F; p += 1
            lst.append(x)
        assoc[iid] = lst
    def prop(iid, typ):
        for i in assoc.get(iid, []):
            if i and props[i-1][0] == typ: return props[i-1]
    def hvcc_headers(iid):
        t, cs, ce = prop(iid, "hvcC"); q = cs + 22; na = b[q]; q += 1; out = b""
        for _ in range(na):
            q += 1; nn = struct.unpack(">H", b[q:q+2])[0]; q += 2
            for _ in range(nn):
                l = struct.unpack(">H", b[q:q+2])[0]; q += 2; out += b"\x00\x00\x00\x01" + b[q:q+l]; q += l
        return out
    def annexb(data):
        out = b""; q = 0
        while q + 4 <= len(data):
            l = struct.unpack(">I", data[q:q+4])[0]; out += b"\x00\x00\x00\x01" + data[q+4:q+4+l]; q += 4 + l
        return out
    def decode(iid):
        with tempfile.TemporaryDirectory() as d:
            fi, fo = os.path.join(d, "t.hevc"), os.path.join(d, "t.png")
            open(fi, "wb").write(hvcc_headers(iid) + annexb(loc[iid]))
            subprocess.run(["ffmpeg", "-loglevel", "error", "-y", "-f", "hevc", "-i", fi, "-frames:v", "1", fo], check=True)
            return Image.open(fo).convert("RGB").copy()
    if types.get(primary) == "grid":
        g = loc[primary]; fl = g[1]; rows, cols = g[2] + 1, g[3] + 1
        W, H = (struct.unpack(">HH", g[4:8]) if not fl & 1 else struct.unpack(">II", g[4:12]))
        tiles = refs["dimg"][primary]; t0 = decode(tiles[0]); tw, th = t0.size
        img = Image.new("RGB", (cols * tw, rows * th))
        for i, tid in enumerate(tiles):
            img.paste(t0 if i == 0 else decode(tid), ((i % cols) * tw, (i // cols) * th))
        img = img.crop((0, 0, W, H))
    else:
        img = decode(primary)
    ir = prop(primary, "irot")
    if ir: img = img.rotate(90 * (b[ir[1]] & 3), expand=True)
    if img.width > maxw: img = img.resize((maxw, round(img.height * maxw / img.width)), Image.LANCZOS)
    img.save(dst, quality=80)
    print(dst, img.size)

if __name__ == "__main__":
    main(sys.argv[1], sys.argv[2], int(sys.argv[3]) if len(sys.argv) > 3 else 1600)
