# Foto latar alam Bali dari Wikimedia Commons (lisensi bebas: CC BY / CC BY-SA / CC0 / domain publik; kredit ditampilkan di pojok layar).
# Dijalankan di GitHub Actions (workflow "Foto latar"), karena container Claude tidak bisa ke Commons.
#   python tools/bg-photos.py candidates   → img/bg/raw/<tempat>-<n>.jpg (lebar 640) + img/bg/raw/candidates.json untuk dipilih
#   python tools/bg-photos.py final        → unduh pilihan di PICK → img/bg/<nama>.jpg (1920) + -m.jpg (900) + img/bg/list.json
import io, json, os, re, sys, urllib.parse, urllib.request
from PIL import Image, ImageOps

UA = {"User-Agent": "BaliAreProperty-bg/1.0 (https://baliareproperty.com; noreply@anthropic.com)"}
API = "https://commons.wikimedia.org/w/api.php?"

PLACES = [
    # nama, kata kunci pencarian, tempat (ID / EN / RU)
    ("kelingking", "Kelingking beach Nusa Penida", "Pantai Kelingking, Nusa Penida", "Kelingking Beach, Nusa Penida", "Пляж Келингкинг, Нуса-Пенида"),
    ("sawah", "Tegallalang rice terraces", "Terasering Tegallalang, Ubud", "Tegallalang rice terraces, Ubud", "Рисовые террасы Тегаллаланг, Убуд"),
    ("jatiluwih", "Jatiluwih rice terraces", "Sawah Jatiluwih, Tabanan", "Jatiluwih rice terraces, Tabanan", "Рисовые террасы Джатилувих, Табанан"),
    ("ulun-danu", "Pura Ulun Danu Bratan", "Pura Ulun Danu Beratan, Bedugul", "Ulun Danu Beratan Temple, Bedugul", "Храм Улун Дану Братан, Бедугул"),
    ("uluwatu", "Uluwatu cliff temple", "Tebing Uluwatu", "Uluwatu cliffs", "Скалы Улувату"),
    ("batur", "Mount Batur Kintamani", "Gunung Batur, Kintamani", "Mount Batur, Kintamani", "Вулкан Батур, Кинтамани"),
    ("tanah-lot", "Tanah Lot sunset", "Pura Tanah Lot, Tabanan", "Tanah Lot Temple, Tabanan", "Храм Танах Лот, Табанан"),
    ("lempuyang", "Pura Lempuyang gate Agung", "Gerbang Lempuyang & Gunung Agung", "Lempuyang gate & Mount Agung", "Врата Лемпуянг и вулкан Агунг"),
    ("melasti", "Melasti beach Ungasan", "Pantai Melasti, Ungasan", "Melasti Beach, Ungasan", "Пляж Меласти, Унгасан"),
    ("padang", "Padang Padang beach Bali", "Pantai Padang Padang, Pecatu", "Padang Padang Beach, Pecatu", "Пляж Паданг-Паданг, Пекату"),
]
# Pilihan akhir: nama → judul file Commons (diisi setelah melihat kandidat)
PICK = {}


def get(url):
    return urllib.request.urlopen(urllib.request.Request(url, headers=UA), timeout=60).read()


def strip(h):
    return re.sub(r"<[^>]+>", "", h or "").strip()


def search(q, n=6):
    p = {"action": "query", "format": "json", "generator": "search", "gsrnamespace": "6", "gsrlimit": "30",
         "gsrsearch": q + " filetype:bitmap filew:>2400", "prop": "imageinfo",
         "iiprop": "url|size|extmetadata", "iiurlwidth": "640"}
    d = json.loads(get(API + urllib.parse.urlencode(p)))
    pages = sorted((d.get("query") or {}).get("pages", {}).values(), key=lambda x: x.get("index", 99))
    out = []
    for pg in pages:
        ii = (pg.get("imageinfo") or [{}])[0]
        w, h = ii.get("width", 0), ii.get("height", 0)
        if not w or w < h * 1.25:  # hanya foto lanskap
            continue
        md = ii.get("extmetadata", {})
        lic = strip(md.get("LicenseShortName", {}).get("value"))
        if not re.search(r"CC|Public domain|PD", lic, re.I) or re.search(r"NC|ND", lic):
            continue
        out.append({"title": pg["title"], "w": w, "h": h, "thumb": ii.get("thumburl"), "lic": lic,
                    "by": strip(md.get("Artist", {}).get("value"))[:80], "page": ii.get("descriptionurl")})
        if len(out) >= n:
            break
    return out


def info(title, width):
    p = {"action": "query", "format": "json", "titles": title, "prop": "imageinfo",
         "iiprop": "url|size|extmetadata", "iiurlwidth": str(width)}
    d = json.loads(get(API + urllib.parse.urlencode(p)))
    pg = list(d["query"]["pages"].values())[0]
    ii = pg["imageinfo"][0]
    md = ii.get("extmetadata", {})
    return ii, strip(md.get("LicenseShortName", {}).get("value")), strip(md.get("Artist", {}).get("value"))[:80]


mode = sys.argv[1] if len(sys.argv) > 1 else "candidates"
if mode == "candidates":
    os.makedirs("img/bg/raw", exist_ok=True)
    allc = {}
    for name, q, *_ in PLACES:
        try:
            c = search(q)
        except Exception as e:
            print("GAGAL", name, e); continue
        for k, x in enumerate(c, 1):
            try:
                im = Image.open(io.BytesIO(get(x["thumb"]))).convert("RGB")
                im.save(f"img/bg/raw/{name}-{k}.jpg", "JPEG", quality=78)
                x["file"] = f"{name}-{k}.jpg"
            except Exception as e:
                print("gagal thumb", name, k, e)
        allc[name] = c
        print("ok", name, len(c))
    json.dump(allc, open("img/bg/raw/candidates.json", "w"), ensure_ascii=False, indent=1)
else:
    out = []
    for name, q, pid, pen, pru in PLACES:
        if name not in PICK:
            continue
        try:
            ii, lic, by = info(PICK[name], 2400)
            im = ImageOps.exif_transpose(Image.open(io.BytesIO(get(ii["thumburl"])))).convert("RGB")
            for suf, w, ql in (("", 1920, 74), ("-m", 900, 72)):
                r = im.copy()
                if r.width > w:
                    r = r.resize((w, round(r.height * w / r.width)), Image.LANCZOS)
                r.save(f"img/bg/{name}{suf}.jpg", "JPEG", quality=ql, optimize=True, progressive=True)
            out.append({"n": name, "id": pid, "en": pen, "ru": pru, "u": ii["descriptionurl"], "by": by, "lic": lic})
            print("ok", name, im.size, lic, by)
        except Exception as e:
            print("GAGAL", name, e)
    json.dump(out, open("img/bg/list.json", "w"), ensure_ascii=False, indent=1)
