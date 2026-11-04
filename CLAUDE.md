# Website Bali Are Property (baliareproperty.com)

Situs statis di GitHub Pages (repo `baliarepro/baliarepro`, cabang `main`, domain di file `CNAME`).
Pemilik: Bagoes (WhatsApp 0812868080). Bahasa kerja dengan pemilik: Bahasa Indonesia.

## File sumber (diedit tangan)
- `listings.html` — katalog listing (Bahasa Indonesia). Judul halaman tetap "Bali Are Property – Listing Tanah".
- `inquiry.html` — form inquiry Buyer/Owner.
- `i18n.js` — kamus terjemahan EN/RU untuk listing & form (`["teks Indonesia", "English", "Русский"]`).
- `tools/home.js`, `tools/about.js`, `tools/faq.js` — teks homepage, Tentang Kami, FAQ (3 bahasa).
- `tools/guide-content.js` — artikel Bali Property Guide (3 bahasa) + tabel harga.
- `tools/guide.js` — tampilan halaman Guide.

## File hasil build (JANGAN diedit tangan)
`index.html`, `about.html`, `faq.html`, `guide.html`, `guide/`, `listing/`, `en/`, `ru/`, `sitemap.xml`, `robots.txt`, `og.png`.
Buat ulang dengan: `node tools/build-seo.js` (butuh Playwright/Chromium; jalankan dari root repo).

## Menambah listing
1. Tambahkan kartu `<article class="card">` di `listings.html`, dikelompokkan per jenis properti (section.type) dan area (div.area). Judul di `<h4><a href="listing/<slug>.html">…</a></h4>` (slug huruf kecil, tanpa simbol).
2. Tambahkan terjemahan EN/RU untuk semua teks baru di `i18n.js`.
3. Perbarui angka di chip filter & ringkasan area bila perlu.
4. `node tools/build-seo.js`, cek, commit, push ke `main`.

## Bali Property Guide — update mingguan (5 artikel baru per minggu)
- Artikel ada di array `ARTICLES` di `tools/guide-content.js`, **urut dari terbaru**. Artikel baru DITAMBAHKAN DI AWAL array. Halaman Guide otomatis menampilkan 5 teratas sebagai "Edisi minggu ini" dan sisanya sebagai arsip; homepage menampilkan 3 teratas.
- Setiap artikel: `slug` unik (huruf kecil-tanda-hubung), `date` (YYYY-MM-DD, tanggal terbit), `sources` (array `{t, u}`; URL asli yang benar-benar dibaca), lalu `id`, `en`, `ru` masing-masing berisi `tag`, `title`, `summary`, `body` (blok `{h}`, `{p}`, `{ul:[…]}`, `{note}`).
- Fokus konten: perkembangan properti di Kuta Selatan (Ungasan, Jimbaran, Pecatu, Uluwatu, Kutuh, Pandawa, Balangan, Nusa Dua/Benoa) dan Kuta Utara (Canggu, Berawa, Pererenan, Tibubeneng, Kerobokan), plus area lain di Bali (Tabanan, Gianyar/Ubud, Buleleng, dll.), infrastruktur, regulasi lahan/izin, pariwisata yang memengaruhi properti, dan panduan praktis untuk pembeli/penjual.
- Aturan isi:
  - Fakta (angka, tanggal, nama proyek, aturan) HANYA dari sumber yang dibaca minggu itu (utamakan media resmi/kredibel: detik, Kompas, ANTARA, Bisnis, CNN Indonesia, Tribun Bali, situs pemerintah). Cantumkan sumbernya. Jangan mengarang angka.
  - Harga tanah hanya dari listing di `listings.html` (sebut sebagai "harga penawaran listing kami") atau dari sumber yang dikutip.
  - Jangan mengulang topik/berita yang sudah ada di artikel lama; kalau berita minggu itu sedikit, tulis panduan praktis (evergreen) yang belum pernah dibahas.
  - Topik hukum/regulasi diberi `{note}` "bukan nasihat hukum, konsultasikan notaris/PPAT". Topik investasi diberi catatan "bukan nasihat investasi".
  - Gaya: kalimat jelas dan langsung, 300–500 kata per artikel per bahasa, dari sudut pandang Bali Are Property (agen independen sejak 2009). EN dan RU adalah terjemahan setia dari versi ID.
- Setelah menambah artikel: `node tools/build-seo.js` (sitemap ikut diperbarui), cek bahwa `guide.html` dan halaman artikel baru terbentuk di `/`, `en/`, `ru/`, lalu commit & push ke `main`.

## Commit
- Identitas commit: `git config user.name Claude && git config user.email noreply@anthropic.com`.
- Pesan commit dalam Bahasa Indonesia, diakhiri baris atribusi sesi bila diminta oleh sistem.
- Repo ini kadang perlu `git -c safe.directory=*` saat dijalankan di container.
