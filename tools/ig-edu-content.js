// Topik edukasi aturan properti untuk carousel Instagram mingguan (tools/ig-weekly.js).
// Dipakai HANYA bila dalam 7 hari terakhir tidak ada berita baru di tools/news-content.js.
// Urutan = urutan posting (yang belum pernah diposting diambil dari atas). Topik baru boleh ditambahkan di AKHIR array.
// Fakta HANYA dari sumber yang dibaca (cantumkan di sources). Tulis singkat agar muat di slide:
//   title ≤45 karakter, slides: 3 × {stat ≤9 karakter, statL, h ≤60, pts: [3 × ≤70], arti ≤110}
//   en / ru: 1–2 kalimat ringkasan untuk caption.
const EDU = [
  {
    slug: "pbg-pengganti-imb",
    title: "PBG: Izin Bangunan Pengganti IMB",
    tag: "Aturan",
    slides: [
      { stat: "PBG", statL: "Persetujuan Bangunan Gedung", h: "IMB sudah diganti PBG",
        pts: ["Dasar: UU Cipta Kerja & PP 16/2021", "IMB yang terbit sebelum aturan baru tetap berlaku", "PBG bisa untuk bangunan dengan fungsi campuran"],
        arti: "Saat membeli villa atau rumah, minta salinan IMB/PBG-nya dan cocokkan fungsi bangunannya." },
      { stat: "10", statL: "langkah pengurusan lewat SIMBG", h: "Diurus online di simbg.pu.go.id",
        pts: ["Unggah dokumen teknis & administrasi", "Konsultasi Tim Profesi Ahli: arsitektur, struktur, MEP", "Bayar retribusi daerah, lalu PBG terbit"],
        arti: "Mau membangun di tanah yang baru dibeli? Masukkan waktu & biaya PBG ke rencana proyek." },
      { stat: "3", statL: "jenis sanksi administratif", h: "Ubah fungsi bangunan wajib dilaporkan",
        pts: ["Peringatan tertulis", "Pembatasan kegiatan pembangunan", "Penghentian sementara pembangunan"],
        arti: "Berencana mengubah rumah tinggal jadi villa sewa? Konsultasikan dulu ke dinas perizinan." }
    ],
    en: "Bali property rules: the PBG building approval has replaced the IMB (Government Regulation 16/2021). What buyers should check.",
    ru: "Правила недвижимости на Бали: разрешение PBG заменило IMB (Постановление 16/2021). Что проверить покупателю.",
    sources: [{ t: "detikProperti – PBG adalah Persetujuan Bangunan Gedung, ketahui perbedaannya dengan IMB (20 Nov 2023)", u: "https://www.detik.com/properti/tips-dan-panduan/d-7047030/pbg-adalah-persetujuan-bangunan-gedung-ketahui-perbedaannya-dengan-imb" }],
    note: "Informasi umum, bukan nasihat hukum."
  },
  {
    slug: "slf-sertifikat-laik-fungsi",
    title: "SLF: Bukti Bangunan Layak Dipakai",
    tag: "Aturan",
    slides: [
      { stat: "SLF", statL: "Sertifikat Laik Fungsi", h: "Diterbitkan pemda sebelum bangunan dipakai",
        pts: ["Dasar: PP 16/2021", "Bangunan untuk usaha wajib punya SLF (PP 28/2025)", "Bangunan lama dicek lewat pemeriksaan teknis"],
        arti: "Villa yang dibeli untuk disewakan sebaiknya sudah punya SLF. Tanyakan sejak awal." },
      { stat: "20 thn", statL: "masa berlaku SLF rumah tinggal", h: "Masa berlaku beda tiap jenis bangunan",
        pts: ["Rumah tinggal tunggal & deret: 20 tahun", "Bangunan gedung lainnya: 5 tahun", "Perpanjangan diajukan min. 60 hari sebelum habis"],
        arti: "Membeli bangunan komersial? Cek tanggal SLF-nya agar tidak kedaluwarsa." },
      { stat: "PBG→SLF", statL: "urutan izin bangunan", h: "Tanpa SLF, risikonya besar",
        pts: ["Peringatan tertulis hingga penghentian pemakaian", "Pembekuan atau pencabutan PBG/SLF", "Hingga perintah pembongkaran"],
        arti: "Dokumen lengkap (sertifikat, PBG, SLF) membuat properti lebih mudah dijual kembali." }
    ],
    en: "Bali property rules: the SLF certificate of fitness for use, required before a building is used, especially for business.",
    ru: "Правила недвижимости на Бали: сертификат SLF о пригодности здания, обязательный перед использованием, особенно для бизнеса.",
    sources: [{ t: "SmartLegal – Mengenal apa itu Sertifikat Laik Fungsi (SLF) (10 Okt 2025)", u: "https://smartlegal.id/perizinan/2025/10/10/mengenal-apa-itu-sertifikat-laik-fungsi-slf-bagaimana-ketentuannya-sl/" }],
    note: "Informasi umum, bukan nasihat hukum."
  },
  {
    slug: "pajak-jual-beli-tanah",
    title: "Pajak Jual Beli Tanah: Siapa Bayar Apa?",
    tag: "Pajak",
    slides: [
      { stat: "5%", statL: "BPHTB, ditanggung pembeli", h: "Pajak saat memperoleh tanah/bangunan",
        pts: ["Dari nilai transaksi atau NJOP, mana yang lebih tinggi", "Dikurangi NPOPTKP (min. Rp80 juta, diatur tiap daerah)", "Diatur UU Hubungan Keuangan Pusat & Daerah"],
        arti: "Pembeli: siapkan dana ±5% di luar harga properti untuk BPHTB." },
      { stat: "2,5%", statL: "PPh final atas pengalihan, dari penjual", h: "PPh final penjual bukan 5% lagi",
        pts: ["Tarif umum 2,5% dari nilai pengalihan (PP 34/2016)", "1% untuk rumah sederhana & rusun sederhana", "0% untuk pengalihan ke pemerintah"],
        arti: "Pemilik lahan: hitung 2,5% ini saat menentukan harga jual bersih." },
      { stat: "Rp5 M", statL: "contoh harga tanah", h: "Contoh hitungan kasar",
        pts: ["BPHTB pembeli: 5% × (Rp5 M − Rp80 jt) ≈ Rp246 juta", "PPh penjual: 2,5% × Rp5 M = Rp125 juta", "Belum termasuk biaya PPAT/notaris"],
        arti: "Sepakati sejak awal siapa menanggung pajak & biaya, lalu tulis di perjanjian." }
    ],
    en: "Bali land purchase taxes: BPHTB 5% paid by the buyer and final income tax 2.5% paid by the seller, with a simple example.",
    ru: "Налоги при покупке земли на Бали: BPHTB 5% платит покупатель, налог 2,5% платит продавец. Простой пример расчёта.",
    sources: [
      { t: "Ortax – BPHTB: objek dan cara menghitungnya (28 Apr 2023)", u: "https://ortax.org/ketentuan-bphtb-dan-cara-menghitung" },
      { t: "DDTCNews – Kantor pajak ingatkan PPh final atas PHTB sudah tidak lagi 5 persen (10 Sep 2024)", u: "https://news.ddtc.co.id/berita/daerah/1805410/kantor-pajak-ingatkan-pph-final-atas-phtb-sudah-tidak-lagi-5-persen" }
    ],
    note: "Contoh memakai NPOPTKP minimum Rp80 juta; nilai di Badung bisa berbeda. Bukan nasihat pajak."
  },
  {
    slug: "wna-beli-rumah-di-bali",
    title: "Bisakah WNA Membeli Rumah di Bali?",
    tag: "Aturan",
    slides: [
      { stat: "Hak Pakai", statL: "hak atas tanah untuk WNA", h: "WNA boleh punya rumah dengan Hak Pakai",
        pts: ["30 tahun + perpanjangan 20 tahun + pembaruan 30 tahun", "Bisa diwariskan dan dialihkan", "Cukup paspor & visa, tidak wajib KITAS/KITAP"],
        arti: "Ada jalur resmi untuk WNA, jadi hindari skema pinjam nama (nominee)." },
      { stat: "Rp5 M", statL: "harga minimum rumah tapak WNA di Bali", h: "Ada batas harga minimum per provinsi",
        pts: ["Bali, rumah tapak: Rp5 miliar", "Bali, rumah susun/apartemen: Rp2 miliar", "Dasar: Kepmen ATR/BPN 1241/2022"],
        arti: "Villa di atas Rp5 miliar memenuhi syarat harga untuk dibeli WNA dengan Hak Pakai." },
      { stat: "2.000 m²", statL: "luas tanah maksimal rumah tapak WNA", h: "Batas luas dan jumlah bidang",
        pts: ["Maks. 2.000 m²; lebih luas butuh izin Menteri", "Satu bidang tanah per orang/keluarga", "Dasar: Permen ATR/BPN 18/2021 pasal 186"],
        arti: "Untuk investasi lebih besar, konsultasikan struktur yang tepat dengan notaris." }
    ],
    en: "Can foreigners buy a house in Bali? Yes, under Hak Pakai (right of use): minimum IDR 5 billion for a landed house, max 2,000 m².",
    ru: "Может ли иностранец купить дом на Бали? Да, на праве Hak Pakai: от 5 млрд рупий за дом, участок до 2000 м².",
    sources: [
      { t: "Hukumonline – Foreigners may purchase residential houses with the following minimum prices (14 Feb 2023)", u: "https://www.hukumonline.com/klinik/a/foreigners-may-purchase-residential-houses-with-the-following-minimum-prices-lt63eb7faade8c6" },
      { t: "detikFinance – WNA boleh beli rumah-apartemen di RI, begini aturannya (16 Mei 2023)", u: "https://finance.detik.com/properti/d-6723693/wna-boleh-beli-rumah-apartemen-di-ri-begini-aturannya" }
    ],
    note: "Informasi umum, bukan nasihat hukum."
  }
];

module.exports = { EDU };
