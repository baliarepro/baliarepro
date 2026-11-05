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
- `tools/news-content.js` — berita properti (3 bahasa); `tools/news.js` — tampilan halaman News.

## File hasil build (JANGAN diedit tangan)
`index.html`, `about.html`, `faq.html`, `guide.html`, `guide/`, `news.html`, `news/`, `listing/`, `en/`, `ru/`, `sitemap.xml`, `robots.txt`, `og.png`.
Buat ulang dengan: `node tools/build-seo.js` (butuh Playwright/Chromium; jalankan dari root repo).

## Menambah listing
1. Tambahkan kartu `<article class="card">` di `listings.html`, dikelompokkan per jenis properti (section.type) dan area (div.area). Judul di `<h4><a href="listing/<slug>.html">…</a></h4>` (slug huruf kecil, tanpa simbol).
2. Tambahkan terjemahan EN/RU untuk semua teks baru di `i18n.js`.
3. Perbarui angka di chip filter & ringkasan area bila perlu.
4. `node tools/build-seo.js`, cek, commit, push ke `main`.

## Foto & tombol PDF di halaman listing
- Foto listing disimpan di `img/listing/<slug>/` (maks. 3 file jpg/png/webp, diurutkan nama: `1.jpg`, `2.jpg`, `3.jpg`; foto pertama = foto utama & gambar preview saat link dibagikan di WhatsApp). Kecilkan dulu ke lebar ±1600 px, kualitas JPEG ±80.
- Build otomatis menampilkan galeri di halaman listing bila foldernya ada; tanpa folder, halaman tampil seperti biasa.
- Setiap halaman listing punya tombol "Download PDF" (`window.print()` + CSS cetak A4). PDF wajib **maksimal 1 halaman** dan tampil profesional: header gelap berlogo + kontak, foto, harga, spesifikasi 3 kolom, footer kontak & link listing + catatan harga dapat berubah. Build mengukur tiap halaman dan otomatis menambah `<style id="fit">` (zoom) bila isinya lebih panjang dari A4. Semua diatur di `tools/build-seo.js` bagian "Halaman per listing" dan "PDF listing".
- Foto bisa diambil dari folder Google Drive listing (link "Lihat Foto") lewat konektor Google Drive bila terhubung; file >±7 MB gagal diunduh lewat konektor, minta pemilik kirim versi lebih kecil.

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
