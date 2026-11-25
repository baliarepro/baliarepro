# Unduh foto latar alam Bali (lisensi Unsplash, boleh dipakai bebas) → img/bg/<nama>.jpg (1920 px) + <nama>-m.jpg (900 px)
# dan img/bg/list.json. Dijalankan di GitHub Actions (workflow "Foto latar"), karena container Claude tidak bisa ke Unsplash.
import io, json, os, re, sys, urllib.request
from PIL import Image, ImageOps

PHOTOS = [
    # nama, id Unsplash, tempat (ID / EN / RU)
    ("kelingking", "SY7_XBjgYmo", "Pantai Kelingking, Nusa Penida", "Kelingking Beach, Nusa Penida", "Пляж Келингкинг, Нуса-Пенида"),
    ("sawah", "rf5R1qXwlDU", "Terasering sawah, Bali", "Rice terraces, Bali", "Рисовые террасы, Бали"),
    ("ulun-danu", "2-MvCdgg1tQ", "Pura Ulun Danu Beratan, Bedugul", "Ulun Danu Beratan Temple, Bedugul", "Храм Улун Дану Братан, Бедугул"),
    ("uluwatu", "10MUSwtRqDs", "Tebing & ombak Uluwatu", "Uluwatu cliffs & waves", "Скалы и волны Улувату"),
    ("batur", "1_VG0qWGrjc", "Gunung Batur, Kintamani", "Mount Batur, Kintamani", "Вулкан Батур, Кинтамани"),
    ("tanah-lot", "bTox9cScI78", "Pura Tanah Lot, Tabanan", "Tanah Lot Temple, Tabanan", "Храм Танах Лот, Табанан"),
    ("sawah-palem", "55xC2KBWE7E", "Sawah & pohon kelapa, Bali", "Rice fields & palms, Bali", "Рисовые поля и пальмы, Бали"),
    ("batur-pagi", "5nyiMctfHCY", "Matahari terbit di Batur", "Sunrise over Batur", "Рассвет над Батуром"),
]
only = set(sys.argv[1].split(",")) if len(sys.argv) > 1 and sys.argv[1] else None
os.makedirs("img/bg", exist_ok=True)
out = []
for name, pid, pid_id, pen, pru in PHOTOS:
    if only and name not in only:
        continue
    try:
        UA = {"User-Agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 Chrome/124 Safari/537.36"}
        html = urllib.request.urlopen(urllib.request.Request(f"https://unsplash.com/photos/{pid}", headers=UA), timeout=60).read().decode("utf8", "replace")
        m = re.search(r'<meta[^>]+property="og:image"[^>]+content="([^"]+)"', html) or re.search(r'content="([^"]+)"[^>]+property="og:image"', html)
        if not m:
            raise RuntimeError("og:image tidak ditemukan")
        img = m.group(1).replace("&amp;", "&").split("?")[0] + "?ixlib=rb-4.0.3&fm=jpg&q=85&w=2400"
        t = re.search(r"<title>([^<]+)</title>", html)
        by = re.search(r"by ([^|<]+?) on Unsplash", t.group(1)) if t else None
        data = urllib.request.urlopen(urllib.request.Request(img, headers=UA), timeout=60).read()
        im = ImageOps.exif_transpose(Image.open(io.BytesIO(data))).convert("RGB")
        for suf, w, q in (("", 1920, 74), ("-m", 900, 72)):
            r = im.copy()
            if r.width > w:
                r = r.resize((w, round(r.height * w / r.width)), Image.LANCZOS)
            r.save(f"img/bg/{name}{suf}.jpg", "JPEG", quality=q, optimize=True, progressive=True)
        out.append({"n": name, "id": pid_id, "en": pen, "ru": pru, "u": f"https://unsplash.com/photos/{pid}", "by": (by.group(1).strip() if by else ""), "w": im.width, "h": im.height})
        print("ok", name, im.size)
    except Exception as e:
        print("GAGAL", name, e)
with open("img/bg/list.json", "w") as f:
    json.dump(out, f, ensure_ascii=False, indent=1)
