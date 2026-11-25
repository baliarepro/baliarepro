# Unduh foto latar alam Bali (lisensi Unsplash, boleh dipakai bebas) → img/bg/<nama>.jpg (1920 px) + <nama>-m.jpg (900 px)
# dan img/bg/list.json. Dijalankan di GitHub Actions (workflow "Foto latar"), karena container Claude tidak bisa ke Unsplash.
import io, json, os, sys, urllib.request
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
        req = urllib.request.Request(f"https://unsplash.com/photos/{pid}/download?force=true", headers={"User-Agent": "Mozilla/5.0"})
        data = urllib.request.urlopen(req, timeout=60).read()
        im = ImageOps.exif_transpose(Image.open(io.BytesIO(data))).convert("RGB")
        for suf, w, q in (("", 1920, 74), ("-m", 900, 72)):
            r = im.copy()
            if r.width > w:
                r = r.resize((w, round(r.height * w / r.width)), Image.LANCZOS)
            r.save(f"img/bg/{name}{suf}.jpg", "JPEG", quality=q, optimize=True, progressive=True)
        out.append({"n": name, "id": pid_id, "en": pen, "ru": pru, "u": f"https://unsplash.com/photos/{pid}", "w": im.width, "h": im.height})
        print("ok", name, im.size)
    except Exception as e:
        print("GAGAL", name, e)
with open("img/bg/list.json", "w") as f:
    json.dump(out, f, ensure_ascii=False, indent=1)
