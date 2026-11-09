# Website Bali Are Property (baliareproperty.com)

Situs statis di GitHub Pages (repo `baliarepro/baliarepro`, cabang `main`, domain di file `CNAME`).
Pemilik: Bagoes (WhatsApp 0812868080). Bahasa kerja dengan pemilik: Bahasa Indonesia.

## File sumber (diedit tangan)
- `listings.html` — katalog listing (Bahasa Indonesia). Judul halaman (SEO): "Tanah, Villa & Rumah Dijual di Bali – Daftar Listing | Bali Are Property"; bila diubah, ubah juga kuncinya di `i18n.js`.
- `tools/seo-titles.js` — judul `<title>` & meta description SEO per listing (3 bahasa). Pola judul: kata transaksi (Dijual / for Sale / Продажа; Terjual / Sold / Продано untuk yang sudah laku) + jenis + luas/kamar + lokasi + Bali, ±50–70 karakter; deskripsi ±140–165 karakter berisi fakta utama, harga, ajakan WhatsApp. H1 tetap judul kartu.
- `inquiry.html` — form inquiry Buyer/Owner.
- `i18n.js` — kamus terjemahan EN/RU untuk listing & form (`["teks Indonesia", "English", "Русский"]`).
- `tools/home.js`, `tools/about.js`, `tools/faq.js` — teks homepage, Tentang Kami, FAQ (3 bahasa).
- `tools/guide-content.js` — artikel Bali Property Guide (3 bahasa) + tabel harga.
- `tools/guide.js` — tampilan halaman Guide.
- `tools/news-content.js` — berita properti (3 bahasa); `tools/news.js` — tampilan halaman News.

## File hasil build (JANGAN diedit tangan)
`index.html`, `about.html`, `faq.html`, `guide.html`, `guide/`, `news.html`, `news/`, `listing/`, `en/`, `ru/`, `sitemap.xml`, `robots.txt`, `og.png`.
Buat ulang dengan: `node tools/build-seo.js` (butuh Playwright/Chromium; jalankan dari root repo).

## Logo & favicon
- Logo: gerbang candi bentar + matahari + ombak (hijau #123F36, emas #D9A441). Warna website mengikuti logo: hijau hutan #123F36 (utama), krem pasir #F6F2EA (latar), emas #946410/#D9A441 (aksen). Lambang kecil di header tiap halaman ada sebagai SVG inline (`class="bap-mark"`).
- `favicon.svg` & `logo.png` dibuat oleh build. `favicon.ico`, `favicon-16/32/48.png`, `apple-touch-icon.png`, `icon-192/512.png`, `site.webmanifest` adalah file statis (dibuat sekali dari `favicon.svg`); buat ulang bila logo berubah.

## Menambah listing
1. Tambahkan kartu `<article class="card">` di `listings.html`, dikelompokkan per jenis properti (section.type) dan area (div.area). Judul di `<h4><a href="listing/<slug>.html">…</a></h4>` (slug huruf kecil, tanpa simbol).
2. Tambahkan terjemahan EN/RU untuk semua teks baru di `i18n.js`.
3. Perbarui angka di chip filter & ringkasan area bila perlu.
4. Tambahkan judul & deskripsi SEO 3 bahasa di `tools/seo-titles.js` (build memberi peringatan bila belum ada). Bila listing terjual, ganti judulnya ke pola "Terjual:".
5. `node tools/build-seo.js`, cek, commit, push ke `main`.

## SEO & GEO
- Build membuat JSON-LD `RealEstateListing` per listing (alamat, harga, ketersediaan, semua spesifikasi sebagai `additionalProperty`), breadcrumb 3 level, sitemap, dan `llms.txt` (ringkasan situs + semua listing untuk mesin AI).

## Foto & tombol PDF di halaman listing
- Foto listing disimpan di `img/listing/<slug>/` (maks. 3 file jpg/png/webp, diurutkan nama: `1.jpg`, `2.jpg`, `3.jpg`; foto pertama = foto utama & gambar preview saat link dibagikan di WhatsApp). Kecilkan dulu ke lebar ±1600 px, kualitas JPEG ±80.
- Build otomatis menampilkan galeri di halaman listing bila foldernya ada; tanpa folder, halaman tampil seperti biasa.
- **Watermark otomatis** (`tools/watermark.js`, dijalankan build): foto asli di `img/listing/<slug>/` TIDAK diubah; build membuat salinan bertanda air di `img/wm/<slug>/` (lambang + "BALI ARE PROPERTY" samar di tengah + label "baliareproperty.com" di pojok kanan bawah). Galeri, gambar preview WhatsApp/og, schema, PDF, dan foto carousel Instagram memakai versi `img/wm/`. Dibuat ulang hanya bila foto asli berubah; ubah desain → naikkan `V` di `watermark.js`. Listing baru otomatis ikut.
- Setiap halaman listing punya tombol "Download PDF" (`window.print()` + CSS cetak A4). PDF wajib **maksimal 1 halaman** dan tampil profesional: header gelap berlogo + kontak, foto, harga, spesifikasi 3 kolom, footer kontak & link listing + catatan harga dapat berubah. Lembar didesain untuk area ±180×245 mm (aman untuk A4 maupun Letter dengan margin bawaan browser); build mengukur tiap halaman dan otomatis menambah `<style id="fit">` (zoom) bila lebih panjang. Uji: PDF A4 dan Letter harus 1 halaman. Semua diatur di `tools/build-seo.js` bagian "Halaman per listing" dan "PDF listing".
- Foto bisa diambil dari folder Google Drive listing (link "Lihat Foto") lewat konektor Google Drive bila terhubung; file >±7 MB gagal diunduh lewat konektor, minta pemilik kirim versi lebih kecil.

## Halaman admin (turunkan / edit / tampilkan lagi iklan)
- `admin.html` (noindex, tidak ditautkan): login dengan token GitHub fine-grained milik pemilik (Contents: Read and write untuk repo ini; opsional Actions: Read-only), disimpan di localStorage HP-nya. Menyimpan lewat GitHub API (satu commit per aksi) ke `listings.html`, `tools/seo-titles.js`, `tools/perlu-terjemahan.json`.
- Turunkan = atribut `data-status="hidden"` pada `<article>` di `listings.html`. Kartu itu disembunyikan di katalog (skrip katalog menghapusnya + CSS cadangan), tidak masuk sitemap/llms.txt/ItemList, dan halaman detailnya diganti halaman "Iklan ini sedang tidak ditampilkan" (noindex). Tampilkan lagi = atribut dihapus. Slug/URL tidak pernah berubah.
- Edit: judul, lokasi, deskripsi, badge, baris harga, spesifikasi, keunggulan, cocok untuk, link Maps/Drive, judul & deskripsi SEO (ID). Teks EN/RU TIDAK ikut berubah otomatis: slug yang diedit dicatat di `tools/perlu-terjemahan.json`. **Setiap kali bekerja di repo ini, cek file itu**: untuk tiap slug, tambahkan/ubah terjemahan EN/RU di `i18n.js` dan judul/deskripsi SEO EN/RU di `tools/seo-titles.js` sesuai kartu ID terbaru, lalu hapus slug dari file (sisakan `{}`), build, push.
- Tab **"Bagikan ke Grup WA"** di `admin.html` (semi-otomatis; WhatsApp tidak punya API resmi untuk posting ke grup komunitas yang ada): untuk tiap listing tampil & belum terjual, plus "Berita Properti Bali Minggu Ini" (berita ≤7 hari dari berita terbaru, maks. 3), admin membuat pesan WA siap kirim (judul, lokasi, harga, spesifikasi, keunggulan, link, WA). Tombol grup (saran dari lokasi: SOUTH KUTA, NORTH KUTA, KUTA, GIANYAR, TABANAN, DENPASAR, BADUNG OTHER AREA, SINGARAJA, JEMBRANA + Announcements) membuka `wa.me/?text=…`; pemilik memilih grup di WhatsApp. Riwayat kiriman disimpan di localStorage + `wa-shared.json` di root (commit tertunda 5 detik; sengaja di luar `tools/` agar tidak memicu build). Pemetaan area→grup di array `GROUPS` di `admin.html`.
- `.github/workflows/build.yml` menjalankan `node tools/build-seo.js` otomatis di GitHub Actions setiap ada push yang mengubah file sumber, lalu meng-commit hasil build dan memicu GitHub Pages. Tetap boleh build lokal seperti biasa (hasilnya sama).

## Instagram otomatis (carousel)
- `tools/ig-images.js`: build (HANYA di GitHub Actions atau `IG_IMAGES=1`, karena butuh font asli) membuat `img/ig/<slug>/1.jpg` (slide desain 1080×1350 berlogo: foto utama, judul, harga, spesifikasi, kontak) + `2–4.jpg` (foto listing dipotong 4:5) untuk setiap listing yang tampil & belum terjual. Dibuat ulang hanya bila isi/foto berubah (hash di `meta.json`). Jangan generate & commit `img/ig/` dari container (font fallback).
- `tools/ig-post.js` + `.github/workflows/instagram.yml`: posting carousel lewat Instagram API with Instagram Login (graph.instagram.com). Listing BARU diposting otomatis setelah workflow "Build website" selesai; listing lama dari antrean (`queue` di `tools/ig-state.json`, dibuat 7 Nov 2026 berisi 34 listing) diposting 1 per jadwal, 3x sehari (±08.07, 12.07, 17.07 WITA). Listing tersembunyi/terjual tidak diposting. Caption: baris pertama (±125 karakter yang tampil di feed) = judul + harga utama + fakta kunci; lalu detail ID, ajakan viewing via DM/WA, "baliareproperty.com (link di bio)", ringkasan EN/RU (dari `seo-titles.js`), dan **maks. 5 hashtag** (batas Instagram sejak Des 2025): jenis + area (`AREA_TAG`, "Kuta Selatan/Utara" tidak dihitung sebagai Kuta) + #baliproperty #balirealestate #propertibali. Carousel mingguan juga 5 hashtag.
- Mendukung 2 jenis token: Instagram Login (graph.instagram.com, diperpanjang otomatis) dan Login Terpadu/Facebook (graph.facebook.com, mis. token pengguna sistem yang tidak kedaluwarsa; akun IG dicari lewat `me/accounts` atau secret opsional `IG_USER_ID`). Aplikasi Meta baru (Nov 2026) hanya menyediakan "API setup with Unified login".
- Butuh secret repo `IG_TOKEN` (token long-lived akun IG profesional @ pemilik, diatur pemilik di GitHub Settings → Secrets → Actions). Token diperpanjang otomatis tiap 7 hari dan hasilnya disimpan terenkripsi (AES-GCM, kunci dari secret) di `tools/ig-state.json`. Tanpa secret, workflow tidak melakukan apa-apa. `posted` mencatat id & permalink tiap post; `errors` mencatat kegagalan terakhir.
- Iklan yang sudah diposting tidak diposting ulang walau diedit.

## Instagram mingguan (berita / edukasi aturan)
- `tools/ig-weekly.js` + `.github/workflows/instagram-weekly.yml`: setiap Senin ±16.07 WITA memposting 1 carousel (sampul + isi + slide ajakan WA, 1080×1350).
- Ada berita di `tools/news-content.js` dengan `date` 7 hari terakhir yang belum diposting → "Berita Properti Bali Minggu Ini" (maks. 3 berita teratas). Tidak ada → 1 topik edukasi aturan properti dari `tools/ig-edu-content.js` (array `EDU`, diambil urut dari atas yang belum diposting; topik baru ditambah di AKHIR).
- Slide berita memakai field opsional `ig` di tiap berita (`stat`, `statL`, `h`, `pts` 3 fakta, `arti`); tanpa `ig` dibuat otomatis dari isi. Isi slide/fakta hanya dari sumber yang dibaca, seperti aturan News.
- Gambar dibuat di GitHub Actions ke `img/ig-weekly/<tanggal>/` (jangan generate & commit dari container — font fallback). Cek tampilan dari container: `node tools/ig-weekly.js preview <folder-scratch> [slug-edu]`.
- Status di `tools/ig-weekly-state.json` (`news`, `edu` = slug yang sudah diposting; `posts`; `error`). Maks. 1 carousel per minggu. Bila topik `EDU` yang belum diposting tinggal <3, tambahkan topik baru (aturan properti terbaru: PBG/SLF, pajak, zonasi/KKPR, WNA, sewa/leasehold, izin villa, dll.).

## Threads otomatis (salinan dari Instagram)
- `tools/threads-post.js` (Threads API, graph.threads.com) dijalankan setelah langkah posting di `instagram.yml` dan `instagram-weekly.yml`. Semua yang sudah tayang di IG (listing di `ig-state.json → posted`, carousel mingguan di `ig-weekly-state.json → posts`) diposting ulang ke Threads dengan gambar yang sama (listing → `tools/threads-state.json`; mingguan `--only=weekly` → `tools/threads-weekly-state.json`); maks. 2 per jalan, urut waktu tayang IG. Listing tersembunyi/terjual dilewati.
- Caption ringkas ≤500 byte (judul, lokasi, harga utama, spesifikasi, link langsung yang bisa diklik, WA, 1 tag `#PropertiBali`).
- Butuh secret `THREADS_TOKEN` (token long-lived Threads, use case "Access the Threads API" di aplikasi Meta yang sama; akun pemilik sebagai penguji). Tanpa secret: dilewati. Token diperpanjang otomatis tiap 7 hari (berlaku 60 hari), disimpan terenkripsi di `tools/threads-state.json` (`posted`, `weekly`, `errors`).

## Facebook Page otomatis (salinan dari Instagram)
- `tools/fb-post.js` dijalankan setelah Threads di `instagram.yml` (listing, status `tools/fb-state.json`) dan `instagram-weekly.yml` (`--only=weekly`, status `tools/fb-weekly-state.json`). Posting multi-foto (gambar IG yang sama), caption = caption IG dengan link langsung (link di Facebook bisa diklik). Maks. 2 per jalan, urut waktu tayang IG.
- Token: secret `FB_PAGE_TOKEN` (token Page, atau token pengguna sistem yang punya akses Page; opsional `FB_PAGE_ID`), atau turunan `IG_TOKEN` lewat `me/accounts`. Butuh izin `pages_show_list`, `pages_read_engagement`, `pages_manage_posts`. Per 9 Nov 2026 belum aktif: token IG belum punya akses Page (`errors.setup`).

## Status otomasi & pengingat pemilik
- Tab **Status** di `admin.html`: kondisi IG/Threads/Facebook (listing & mingguan), posting terakhir, error, antrean; plus daftar **pengingat** dari `pengingat.json` (root, di luar `tools/` agar tidak memicu build) dengan tombol "Selesai" (commit `done`).
- `node tools/health.js` mencetak laporan yang sama (✅/⚠️/⏸️ + pengingat yang belum selesai). Dipakai tugas harian Claude untuk mengabari pemilik bila ada masalah.
- Saat menambah tugas yang harus dikerjakan pemilik, tambahkan item `{id, text, added}` ke `pengingat.json`; tandai `done` bila pemilik bilang sudah.
- Status Threads mingguan disimpan terpisah di `tools/threads-weekly-state.json` (`threads-post.js --only=weekly`) supaya workflow harian & mingguan tidak bentrok saat commit.

## Jumlah dilihat per iklan (ikon mata)
- `views.js` (dimuat di `listings.html` dan semua halaman detail listing lewat template di `tools/build-seo.js`; halaman detail punya `<body data-listing="<slug>">`). Menambah ikon mata + angka di baris eyebrow tiap kartu (`.card-top .eyebrow`); disembunyikan di PDF.
- Penghitung gratis abacus.jasoncameron.dev, namespace `baliarepro.github.io`, kunci `v-<slug>` (gabungan ID/EN/RU). Dihitung 1x per sesi browser: buka halaman detail, atau kartu katalog terlihat ≥1 detik. Hanya domain asli yang menambah angka; angka 0 tidak ditampilkan.
- Jangan ganti slug listing yang sudah tayang (angka dilihat akan mulai dari 0).

## Aplikasi Android (PWA, gratis)
- Website bisa dipasang sebagai aplikasi di Android (Chrome: tombol "Pasang aplikasi" muncul otomatis, atau menu ⋮ → "Instal aplikasi"/"Tambahkan ke layar utama"). Tanpa Play Store, tanpa biaya.
- File: `site.webmanifest` (nama, ikon, warna, shortcut, screenshot), `sw.js` (service worker: halaman network-first + salinan offline, gambar/skrip cache), `offline.html`, `app.js` (daftar service worker + banner pasang 3 bahasa, ditutup = tidak muncul 7 hari), ikon `icon-maskable-192/512.png`, screenshot `img/app/*.jpg`.
- `app.js` dimuat di semua halaman lewat blok SEO di `tools/build-seo.js`. `app.js` juga menambah tombol **Bagikan/Share/Поделиться** di setiap kartu iklan (detail & katalog): Web Share API (WhatsApp dll.), cadangan salin link. Bila daftar PRECACHE di `sw.js` diubah, naikkan `VERSION`.
- Bila nanti ingin masuk Google Play: bungkus situs ini dengan PWABuilder (TWA); butuh akun Google Play Developer (biaya sekali bayar).

## Bali Property Guide — TETAP (tidak diupdate mingguan)
- Artikel di `tools/guide-content.js` dibiarkan seperti sekarang atas permintaan pemilik. Jangan menambah atau mengubah artikel Guide kecuali pemilik memintanya.
- Halaman Guide sengaja tanpa label mingguan ("Edisi minggu ini") dan tanpa tanggal tampil, karena isinya tetap.

## News — update mingguan (berita properti Bali)
- Menu "News/Berita/Новости" (`news.html`, `news/<slug>.html`, juga di `en/` dan `ru/`). Menu ini menggantikan menu "Sell"; tombol "List your property" tetap ada di homepage.
- Isi ada di array `NEWS` di `tools/news-content.js`, **urut dari terbaru**. Berita baru DITAMBAHKAN DI AWAL array. Halaman News menampilkan berita 7 hari terakhir (berdasarkan `date` terbaru) sebagai "Berita minggu ini" dan sisanya sebagai arsip; homepage menampilkan 3 berita teratas.
- Setiap berita: `slug` unik (huruf kecil-tanda-hubung), `date` (YYYY-MM-DD, tanggal terbit di website), `sources` (array `{t, u}`; judul + tanggal berita asli, URL yang benar-benar dibaca), lalu `id`, `en`, `ru` masing-masing berisi `tag`, `title`, `summary`, `body` (blok `{h}`, `{p}`, `{ul:[…]}`, `{note}`).
- Target pembaca: calon buyer dan investor besar. Topik prioritas: perkembangan properti di Kuta Selatan (Ungasan, Jimbaran, Pecatu, Uluwatu, Kutuh, Pandawa, Balangan, Nusa Dua/Benoa) dan sekitarnya, proyek developer & resort/hotel/branded residences, transaksi jual beli besar (hotel, villa, lahan, akuisisi, aksi korporasi emiten properti), data investasi (DPMPTSP/BKPM), pasar hotel (okupansi, tarif, pipeline), infrastruktur (jalan, air, bandara), regulasi/izin dan penertiban; lalu Kuta Utara dan area lain di Bali.
- Aturan isi:
  - Hanya berita nyata dari 7–14 hari terakhir (boleh berita sedikit lebih lama bila belum pernah dibahas dan masih relevan). Fakta (angka, tanggal, nama perusahaan/proyek, aturan) HANYA dari sumber yang dibaca; utamakan media kredibel (detik, Kompas, ANTARA, Bisnis, Kontan, CNN Indonesia, Tribun Bali, NusaBali, siaran pers resmi/pemerintah, laporan riset Colliers/Horwath/JLL/Knight Frank). Cantumkan sumbernya. Jangan mengarang angka.
  - Jangan mengulang berita yang sudah ada di `NEWS`.
  - Tiap berita 150–300 kata per bahasa: ringkas faktanya, lalu 1 paragraf "artinya bagi buyer/investor/pemilik lahan" dari sudut pandang Bali Are Property.
  - Topik hukum/regulasi diberi `{note}` bukan nasihat hukum; topik investasi/saham diberi catatan bukan nasihat investasi.
  - EN dan RU adalah terjemahan setia dari versi ID.
- Setelah menambah berita: `node tools/build-seo.js` (sitemap ikut diperbarui), cek bahwa `news.html` dan halaman berita baru terbentuk di `/`, `en/`, `ru/`, lalu commit & push ke `main`.

## Commit
- Identitas commit: `git config user.name Claude && git config user.email noreply@anthropic.com`.
- Pesan commit dalam Bahasa Indonesia, diakhiri baris atribusi sesi bila diminta oleh sistem.
- Repo ini kadang perlu `git -c safe.directory=*` saat dijalankan di container.
