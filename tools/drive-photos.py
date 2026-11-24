# Ambil foto listing dari folder Google Drive (permintaan pemilik 24 Nov 2026).
# Dipakai workflow .github/workflows/drive-photos.yml (dipicu saat foto-drive.json berubah, mis. dari admin.html).
#   foto-drive.json = {"pending": {slug: {"url": <link folder Drive>, "replace": bool, "at": iso}}, "errors": {slug: {...}}, "done": {slug: {...}}}
# Folder harus dibagikan "Siapa saja yang memiliki link". Maks. 3 foto: foto biasa dulu (urut nama), lalu screenshot;
# video & file non-gambar dilewati. Foto dikecilkan ke lebar 1600 px JPEG 80 (HEIC didukung lewat pillow-heif),
# disimpan ke img/listing/<slug>/1.jpg … 3.jpg. Tanpa "replace", listing yang sudah punya foto tidak diubah.
import json, os, re, sys, shutil, tempfile, datetime

import gdown
from PIL import Image, ImageOps

try:
    from pillow_heif import register_heif_opener
    register_heif_opener()
except Exception:
    pass

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
REQ = os.path.join(ROOT, "foto-drive.json")
VIDEO = re.compile(r"\.(mp4|mov|avi|mkv|m4v|3gp|webm|pdf|docx?|xlsx?|zip|rar)$|(^|[-_ ])vid(eo)?([-_ .]|$)", re.I)
now = lambda: datetime.datetime.now(datetime.timezone.utc).isoformat(timespec="seconds")


def natkey(s):
    return [int(t) if t.isdigit() else t.lower() for t in re.split(r"(\d+)", s)]


def fetch(slug, url, replace):
    out = os.path.join(ROOT, "img/listing", slug)
    if not slug.startswith("test-") and os.path.isdir(out) and any(re.search(r"\.(jpe?g|png|webp)$", f, re.I) for f in os.listdir(out)) and not replace:
        return "sudah ada foto (tidak diganti)"
    try:
        entries = gdown.download_folder(url=url, skip_download=True, quiet=True, remaining_ok=True)
    except TypeError:  # gdown versi baru tidak punya remaining_ok
        entries = gdown.download_folder(url=url, skip_download=True, quiet=True)
    if not entries:
        raise RuntimeError("Folder kosong atau tidak bisa dibuka. Pastikan folder dibagikan 'Siapa saja yang memiliki link'.")
    files = [e for e in entries if not VIDEO.search(os.path.basename(e.path))]
    shot = lambda e: 1 if re.search(r"screenshot|screen ?shot|tangkapan", os.path.basename(e.path), re.I) else 0
    files.sort(key=lambda e: (shot(e), natkey(os.path.basename(e.path))))
    tmp = tempfile.mkdtemp()
    imgs = []
    try:
        for e in files[:12]:
            if len(imgs) == 3:
                break
            dst = os.path.join(tmp, "f%d" % len(os.listdir(tmp)))
            try:
                gdown.download(id=e.id, output=dst, quiet=True)
                im = Image.open(dst)
                im = ImageOps.exif_transpose(im).convert("RGB")
            except Exception as x:
                print("  lewati", e.path, "-", x)
                continue
            if im.width > 1600:
                im = im.resize((1600, round(im.height * 1600 / im.width)), Image.LANCZOS)
            imgs.append((e.path, im))
        if not imgs:
            raise RuntimeError("Tidak ada foto (jpg/png/heic) yang bisa diunduh dari folder ini.")
        if slug.startswith("test-"):  # uji coba: hanya cek folder bisa dibaca, tidak menyimpan foto
            return "uji OK: " + ", ".join("%s (%dx%d)" % (n, im.width, im.height) for n, im in imgs)
        if os.path.isdir(out):
            shutil.rmtree(out)
        os.makedirs(out)
        for i, (name, im) in enumerate(imgs):
            im.save(os.path.join(out, "%d.jpg" % (i + 1)), "JPEG", quality=80, optimize=True, progressive=True)
            print("  %d.jpg ← %s" % (i + 1, name))
        return "%d foto" % len(imgs)
    finally:
        shutil.rmtree(tmp, ignore_errors=True)


def main():
    req = json.load(open(REQ)) if os.path.exists(REQ) else {}
    pend, errs, done = req.get("pending", {}), req.get("errors", {}), req.get("done", {})
    changed = False
    for slug, r in list(pend.items()):
        if not re.match(r"^[a-z0-9-]+$", slug):
            pend.pop(slug); continue
        print("Foto dari Drive:", slug)
        try:
            msg = fetch(slug, r["url"], bool(r.get("replace")))
            done[slug] = {"at": now(), "msg": msg}
            errs.pop(slug, None)
            print("  ✓", msg)
        except Exception as x:
            errs[slug] = {"at": now(), "msg": str(x)[:300], "url": r.get("url")}
            print("  ✗", x)
        pend.pop(slug)
        changed = True
    # simpan 20 riwayat terakhir saja
    done = dict(sorted(done.items(), key=lambda kv: kv[1]["at"])[-20:])
    json.dump({"pending": pend, "errors": errs, "done": done}, open(REQ, "w"), indent=1, ensure_ascii=False)
    open(REQ, "a").write("\n")
    print("selesai" if changed else "tidak ada permintaan")


if __name__ == "__main__":
    main()
