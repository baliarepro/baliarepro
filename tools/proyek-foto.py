# Foto proyek developer dari Google Drive (permintaan pemilik 24 Nov 2026): file besar (> 10 MB, mis. brosur PDF)
# tidak bisa diambil lewat konektor Claude, jadi diunduh di GitHub Actions (gdown, tanpa batas ukuran).
#   python tools/proyek-foto.py <slug> <id-file-atau-folder,...> [maks]
# Gambar di dalam PDF diekstrak (PyMuPDF), foto JPG/PNG/HEIC dipakai langsung. Hanya gambar besar (lebar ≥ 1200 px),
# duplikat dibuang, maks. N terbesar → img/proyek/<slug>/raw/NN.jpg (lebar 1600 px, JPEG 80) untuk dipilih Claude.
# File/folder harus dibagikan "Siapa saja yang memiliki link".
import os, sys, io, re, hashlib, tempfile, shutil
import gdown
from PIL import Image, ImageOps
try:
    from pillow_heif import register_heif_opener
    register_heif_opener()
except Exception:
    pass
import fitz  # PyMuPDF

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))


def grab(ids, tmp):
    paths = []
    for i in ids:
        if i.startswith("folder:"):
            fid = i[7:]
            try:
                try:
                    got = gdown.download_folder(id=fid, output=os.path.join(tmp, fid), quiet=True, remaining_ok=True)
                except TypeError:
                    got = gdown.download_folder(id=fid, output=os.path.join(tmp, fid), quiet=True)
                paths += [p for p in (got or []) if p]
            except Exception as e:
                print("gagal unduh folder", fid, e)
            continue
        try:
            p = gdown.download(id=i, output=os.path.join(tmp, i + ".bin"), quiet=True)
            if p: paths.append(p)
        except Exception as e:
            print("gagal unduh", i, e)
    return paths


def images_from(path):
    out = []
    try:
        doc = fitz.open(path)
        is_pdf = doc.is_pdf
    except Exception:
        is_pdf = False
    if is_pdf:
        if os.environ.get("PAGES"):  # render tiap halaman (untuk membaca teks brosur yang berupa gambar/outline)
            pd = os.path.join(ROOT, "img/proyek", os.environ["SLUG_P"], "raw", "pages"); os.makedirs(pd, exist_ok=True)
            for page in doc:
                pix = page.get_pixmap(matrix=fitz.Matrix(1400 / page.rect.width, 1400 / page.rect.width))
                Image.open(io.BytesIO(pix.tobytes("png"))).convert("RGB").save(os.path.join(pd, "p%02d.jpg" % (page.number + 1)), "JPEG", quality=75)
        for page in doc:
            for img in page.get_images(full=True):
                try:
                    pix = fitz.Pixmap(doc, img[0])
                    if pix.width < 1200: continue
                    if pix.n - pix.alpha >= 4: pix = fitz.Pixmap(fitz.csRGB, pix)
                    if pix.alpha: pix = fitz.Pixmap(pix, 0)
                    out.append((page.number + 1, Image.open(io.BytesIO(pix.tobytes("png"))).convert("RGB")))
                except Exception as e:
                    print("  lewati gambar:", e)
        return out
    try:
        im = ImageOps.exif_transpose(Image.open(path)).convert("RGB")
        if im.width >= int(os.environ.get("MIN_W") or 1200): out.append((0, im))
    except Exception:
        pass
    return out


def main():
    slug, ids = sys.argv[1], [x for x in sys.argv[2].split(",") if x]
    mx = int(sys.argv[3]) if len(sys.argv) > 3 else 40
    if not re.match(r"^[a-z0-9-]+$", slug): sys.exit("slug tidak valid")
    out = os.path.join(ROOT, "img/proyek", slug, "raw")
    shutil.rmtree(out, ignore_errors=True); os.makedirs(out)
    os.environ["SLUG_P"] = slug
    tmp = tempfile.mkdtemp()
    seen, keep = set(), []
    for p in grab(ids, tmp):
        print("file:", os.path.basename(p), os.path.getsize(p) // 1024, "KB")
        for pg, im in images_from(p):
            small = im.resize((16, 16)).convert("L").tobytes()
            h = hashlib.md5(small).hexdigest()
            if h in seen: continue
            seen.add(h)
            keep.append((im.width * im.height, os.path.basename(p), pg, im))
    keep.sort(key=lambda x: -x[0])
    for n, (_, src, pg, im) in enumerate(keep[:mx], 1):
        if im.width > 1600: im = im.resize((1600, round(im.height * 1600 / im.width)), Image.LANCZOS)
        im.save(os.path.join(out, "%02d.jpg" % n), "JPEG", quality=80, optimize=True)
        print("  %02d.jpg ← %s hal. %s (%dx%d)" % (n, src, pg, im.width, im.height))
    print("total", min(len(keep), mx), "gambar")
    shutil.rmtree(tmp, ignore_errors=True)


if __name__ == "__main__":
    main()
