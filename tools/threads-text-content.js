// Posting teks harian Threads (tools/threads-text.js, 1 per hari). Diambil urut dari atas yang belum diposting.
// Kategori: brand (personal branding Bali Are Property), buyer (menarik calon pembeli), owner (menarik pemilik yang mau jual),
// diskusi (memancing komentar), edukasi (aturan/tips properti), tips (lain-lain).
// Batas Threads 500 karakter (dihitung byte UTF-8; emoji ±4 byte) — skrip menolak teks yang terlalu panjang.
// Fakta aturan/pajak hanya yang sudah dipakai di website (kalkulator, carousel edukasi). Topik: "Real Estate" atau "Bali".
// Topik baru: tambahkan di AKHIR array dengan id unik.
const POSTS = [
  { id: "brand-perkenalan", cat: "brand", topic: "Real Estate", text:
`Halo Threads 👋 Kami Bali Are Property, agen properti independen di Bali sejak 2009.

Fokus kami: tanah, villa & rumah di Kuta Selatan (Ungasan, Jimbaran, Pecatu, Uluwatu, Pandawa) dan Kuta Utara (Canggu, Berawa, Pererenan).

Di sini kami akan berbagi listing, info aturan properti, dan cerita lapangan.

Follow ya kalau sedang cari properti di Bali 🏝️` },

  { id: "buyer-cari-apa", cat: "buyer", topic: "Real Estate", text:
`Sedang cari properti di Bali? Ceritakan kebutuhanmu di kolom komentar 👇

• Tanah, villa, atau rumah?
• Area incaran?
• Budget kisaran?

Kami bantu carikan yang cocok, termasuk listing yang belum tayang di website.
Atau langsung WA: +62 812 868 080` },

  { id: "owner-titip-jual", cat: "owner", topic: "Real Estate", text:
`Punya tanah atau villa di Bali dan ingin dijual? 🏡

Listing di Bali Are Property tayang di website 3 bahasa (Indonesia, English, Русский) dan otomatis dipromosikan ke Instagram, Threads & Facebook.

Kirim data & foto propertinya ke WA +62 812 868 080 atau isi form "List your property" di baliareproperty.com` },

  { id: "diskusi-area-favorit", cat: "diskusi", topic: "Bali", text:
`Kalau punya budget untuk 1 villa di Bali, kamu pilih tinggal di mana? 🤔

1️⃣ Canggu / Pererenan — ramai, kafe & beach club
2️⃣ Uluwatu / Ungasan — tebing, laut, lebih tenang
3️⃣ Ubud — sawah, hutan, budaya
4️⃣ Nusa Dua / Jimbaran — rapi, dekat bandara

Tulis jawaban + alasannya di komentar 👇` },

  { id: "edu-shm-hgb-leasehold", cat: "edukasi", topic: "Real Estate", text:
`Beda SHM, HGB & leasehold, singkatnya:

📗 SHM (Hak Milik) — kepemilikan terkuat, hanya untuk WNI perorangan.
📘 HGB — hak membangun dengan jangka waktu, umum dipakai perusahaan/PT.
📙 Leasehold — sewa jangka panjang (mis. 20–30 tahun) lewat akta notaris; tanah tetap milik pemilik.

Sebelum DP, pastikan jenis hak & masa berlakunya sesuai rencanamu.
Informasi umum, bukan nasihat hukum.` },

  { id: "brand-cara-kerja", cat: "brand", topic: "Real Estate", text:
`Cara kami bekerja di Bali Are Property:

✅ Cek lokasi & dokumen dasar sebelum listing tayang
✅ Harga & spesifikasi ditulis jelas, bisa diunduh PDF
✅ Survei lokasi ditemani langsung
✅ Pendampingan sampai notaris/PPAT

Tidak ada yang lebih penting dari buyer & owner yang sama-sama tenang.
baliareproperty.com` },

  { id: "tips-cek-sebelum-dp", cat: "tips", topic: "Real Estate", text:
`5 hal yang wajib dicek sebelum bayar DP tanah di Bali:

1. Sertifikat asli & cek di BPN
2. Zona/peruntukan lahan (RDTR)
3. Akses jalan: lebar & statusnya
4. Batas tanah sesuai patok & ukuran
5. Tidak dalam sengketa / jaminan bank

Simpan postingan ini untuk nanti 📌` },

  { id: "buyer-villa-sewa", cat: "buyer", topic: "Bali", text:
`Cari villa untuk disewakan harian di Bali? 💡

Yang paling menentukan hasil sewa biasanya: lokasi, jumlah kamar, kolam renang, dan izin usaha akomodasi.

Kami punya pilihan villa siap huni & siap sewa di Ungasan, Jimbaran, Canggu, Pererenan.
Lihat daftarnya: baliareproperty.com/listings.html` },

  { id: "diskusi-tanah-atau-villa", cat: "diskusi", topic: "Real Estate", text:
`Pertanyaan klasik investor Bali:

Lebih baik beli TANAH lalu bangun sendiri, atau beli VILLA jadi? 🏗️🏡

Tanah: lebih fleksibel, tapi butuh waktu & urus izin.
Villa jadi: langsung bisa dipakai/disewakan.

Kamu tim yang mana? Tulis di komentar 👇` },

  { id: "edu-biaya-beli", cat: "edukasi", topic: "Real Estate", text:
`Beli properti di Bali, siapkan biaya di luar harga:

🧾 BPHTB (pembeli): 5% × (harga − NPOPTKP)
🧾 PPh (penjual): 2,5% dari harga
🧾 Honor PPAT: maksimal 1%
🧾 PNBP balik nama di BPN

Hitung cepat dengan kalkulator gratis di baliareproperty.com/kalkulator.html
Bukan nasihat pajak — cek lagi ke notaris/PPAT.` },

  { id: "owner-foto-bagus", cat: "owner", topic: "Real Estate", text:
`Tips untuk pemilik yang ingin propertinya cepat laku 📸

• Foto saat cahaya bagus (pagi/sore), tampak depan + semua ruangan
• Siapkan salinan sertifikat & PBG/IMB
• Tentukan harga realistis sesuai pasar sekitar
• Cantumkan luas tanah, bangunan & lebar jalan

Mau dibantu pasarkan? WA +62 812 868 080` },

  { id: "brand-kuta-selatan", cat: "brand", topic: "Bali", text:
`Kenapa kami fokus di Kuta Selatan? 🌊

Ungasan, Jimbaran, Pecatu, Uluwatu & Pandawa terus berkembang: villa, resort, beach club, dan akses jalan makin baik.

Sejak 2009 kami bolak-balik di area ini, jadi kami tahu jalan kecilnya, harga wajarnya, dan lahan mana yang punya view laut.

Ada pertanyaan soal area ini? Tanya saja 👇` },

  { id: "diskusi-budget", cat: "diskusi", topic: "Real Estate", text:
`Jujur-jujuran 😄

Menurutmu berapa budget minimal untuk punya villa kecil dengan kolam renang di Bali sekarang?

A. < Rp3 M
B. Rp3–5 M
C. Rp5–10 M
D. > Rp10 M

Jawab di komentar, nanti kami share contoh listing nyata di tiap kisaran.` },

  { id: "edu-zona", cat: "edukasi", topic: "Real Estate", text:
`Warna zona di peta tata ruang Bali (panduan umum):

🌸 Pink — pariwisata (hotel, resort, villa sewa)
💛 Kuning — permukiman
❤️ Merah — perdagangan & jasa
💚 Hijau — lahan pertanian, dilindungi
🤎 Cokelat — cagar budaya

Cek zona di RDTR sebelum membeli. Yang berlaku tetap dokumen tata ruang resmi.` },

  { id: "buyer-wna", cat: "buyer", topic: "Bali", text:
`Untuk teman-teman WNA yang ingin punya rumah di Bali 🌏

Ada jalur resmi: Hak Pakai. Untuk rumah tapak di Bali, harga minimal Rp5 miliar (Kepmen ATR/BPN 1241/2022).

Hindari skema pinjam nama (nominee). Kami bantu cari properti & hubungkan dengan notaris.
English/Russian? Welcome — DM us. Bukan nasihat hukum.` },

  { id: "tips-survei", cat: "tips", topic: "Real Estate", text:
`Checklist saat survei lokasi properti 🔍

☐ Datang pagi & malam (cek suasana & penerangan)
☐ Coba akses jalan pakai mobil
☐ Cek sumber air & daya listrik
☐ Lihat bangunan sekitar & rencana proyek di dekatnya
☐ Tanya warga soal banjir/genangan

Mau survei listing kami? Jadwalkan via WA +62 812 868 080` },

  { id: "owner-harga", cat: "owner", topic: "Real Estate", text:
`Pemilik tanah sering bertanya: "Berapa harga wajar tanah saya?" 🤔

Yang memengaruhi: lokasi & akses, lebar depan, zona, view, legalitas, dan harga tanah sekitar yang benar-benar terjual.

Kirim lokasi (Google Maps) & luas tanahmu ke WA +62 812 868 080 — kami bantu gambaran harga pasarnya.` },

  { id: "diskusi-pengalaman", cat: "diskusi", topic: "Real Estate", text:
`Buat yang sudah pernah beli properti di Bali:

Apa satu hal yang kamu harap sudah tahu SEBELUM membeli? 🙏

Ceritamu bisa sangat membantu yang baru mau mulai. Tulis di komentar 👇` },

  { id: "edu-pbg", cat: "edukasi", topic: "Real Estate", text:
`IMB sudah diganti PBG (Persetujuan Bangunan Gedung) sejak PP 16/2021.

✔️ IMB lama tetap berlaku
✔️ PBG diurus online lewat SIMBG
✔️ Setelah bangunan jadi, ada SLF (Sertifikat Laik Fungsi)

Saat membeli villa/rumah, minta salinan IMB/PBG & cek fungsi bangunannya sesuai rencanamu.
Informasi umum, bukan nasihat hukum.` },

  { id: "brand-3-bahasa", cat: "brand", topic: "Real Estate", text:
`Pembeli properti Bali datang dari mana saja 🌍

Karena itu website kami tersedia dalam 3 bahasa: Indonesia, English & Русский — lengkap dengan harga perkiraan dalam USD/EUR, foto, dan PDF 1 halaman tiap listing.

Cek di baliareproperty.com dan bagikan ke teman yang sedang cari properti di Bali 🙌` },

  { id: "buyer-tanah-kecil", cat: "buyer", topic: "Real Estate", text:
`Cari tanah kecil untuk bangun villa pribadi di Bukit? 🏝️

Ada kavling mulai ±1 are di kompleks villa Labuan Sait dan ±2 are di Ungasan, sampai lahan besar untuk proyek resort.

Lihat semua tanah tersedia: baliareproperty.com/listings.html
Atau DM kami luas & budget yang kamu cari.` },

  { id: "diskusi-canggu-uluwatu", cat: "diskusi", topic: "Bali", text:
`Debat santai 🔥

Untuk investasi villa sewa 5 tahun ke depan, mana yang lebih menjanjikan:

🏄 Canggu / Pererenan
🌅 Uluwatu / Ungasan

Kasih alasanmu di komentar. Kami juga akan share pandangan kami dari lapangan.` },

  { id: "edu-sempadan", cat: "edukasi", topic: "Real Estate", text:
`Mau beli tanah dekat pantai atau tebing? Kenali dulu "sempadan" 🌊

Sempadan adalah jarak dari garis pantai/tebing/sungai yang dibatasi untuk bangunan. Aturannya bisa membuat sebagian lahan tidak bisa dibangun.

Selalu cek RDTR & ketentuan sempadan di lokasi sebelum membeli.
Informasi umum, bukan nasihat hukum.` },

  { id: "owner-eksklusif", cat: "owner", topic: "Real Estate", text:
`Kenapa memasarkan properti lewat satu agen terpercaya bisa lebih efektif? 🤝

• Harga tidak simpang siur di banyak grup
• Data & foto konsisten
• Calon pembeli disaring dulu sebelum survei
• Pemilik cukup satu pintu komunikasi

Ingin propertimu kami pasarkan? WA +62 812 868 080` },

  { id: "tips-negosiasi", cat: "tips", topic: "Real Estate", text:
`Tips negosiasi harga properti yang sehat 💬

1. Riset harga sekitar dulu
2. Tunjukkan keseriusan (siap DP / sudah survei)
3. Tawar dengan alasan, bukan asal potong
4. Sepakati juga siapa bayar biaya apa (pajak, notaris)
5. Tuangkan semua kesepakatan secara tertulis

Ada tips lain? Tambahkan di komentar 👇` },

  { id: "brand-terima-kasih", cat: "brand", topic: "Real Estate", text:
`Terima kasih untuk semua buyer & owner yang sudah mempercayakan propertinya kepada kami sejak 2009 🙏

Setiap transaksi berawal dari satu pesan WA atau satu komentar seperti di sini.

Kalau kamu sedang mencari atau ingin menjual properti di Bali, mulai obrolannya hari ini: +62 812 868 080` },

  { id: "diskusi-kebutuhan", cat: "diskusi", topic: "Real Estate", text:
`Isi titik-titik ini 👇

"Kalau punya properti di Bali, saya ingin ____."

Tinggal sendiri? Disewakan? Untuk pensiun? Usaha kafe?
Jawaban paling unik akan kami bahas di postingan berikutnya 😄` },

  { id: "edu-cek-sertifikat", cat: "edukasi", topic: "Real Estate", text:
`Cara aman cek sertifikat tanah sebelum transaksi 📄

1. Minta salinan sertifikat dari penjual
2. Cocokkan nama, luas & lokasi dengan kondisi lapangan
3. Cek keabsahan melalui PPAT/notaris di BPN setempat
4. Pastikan tidak ada blokir atau hak tanggungan

Di Bali Are Property, langkah ini kami dampingi.
Informasi umum, bukan nasihat hukum.` },

  { id: "buyer-pdf", cat: "buyer", topic: "Real Estate", text:
`Tahu tidak? Setiap listing di baliareproperty.com bisa diunduh sebagai PDF 1 halaman 📄

Praktis untuk dikirim ke pasangan, keluarga, atau partner investasi sebelum survei.

Buka listing yang kamu suka → tekan "Download PDF".` },

  { id: "owner-cara-listing", cat: "owner", topic: "Real Estate", text:
`Cara listing properti di Bali Are Property, cukup 3 langkah:

1️⃣ Kirim lokasi (Google Maps), luas tanah/bangunan & harga
2️⃣ Kirim foto (boleh langsung dari HP) atau link Google Drive
3️⃣ Kami susun listing 3 bahasa & promosikan

WA: +62 812 868 080` },

  { id: "buyer-utas-kuta-selatan-7", cat: "buyer", topic: "Real Estate", text:
`Daftar tanah & villa di Jimbaran, Ungasan, Pecatu, Uluwatu, Pandawa, Balangan (lengkap foto, harga, sertifikat & zonasi):
👉 baliareproperty.com

Viewing gratis, chat WA 0812 868 080.
Repost kalau ada temanmu yang "cuma liburan" tapi tiap hari buka listing tanah 😂` }
];

module.exports = { POSTS };
