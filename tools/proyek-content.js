// Proyek developer (halaman proyek.html + proyek/<slug>.html, 3 bahasa) — permintaan pemilik 24 Nov 2026.
// Isi HANYA dari materi resmi developer (brosur, spesifikasi, price list). Lokasi detail TIDAK ditampilkan (cukup area);
// calon buyer diarahkan ke WhatsApp Bagoes. Ketersediaan ditulis "Unit terbatas" (tanpa jumlah sisa unit).
// Foto: img/proyek/<slug>/1.jpg … (dipilih dari img/proyek/<slug>/raw/, hasil workflow "Foto proyek developer").
const PROJECTS = [
  {
    slug: "the-ease",
    name: "The Ease",
    developer: "Murino Group",
    areaSlug: "kuta-utara",
    completion: "Q1 2027",
    priceFrom: 3281850000, // apartemen 1 KT (price list 6 Okt 2026)
    villaFrom: 10124532000, // villa Type 8 (price list 4 Sep 2026)
    priceDate: { villa: "2026-09-04", apt: "2026-10-06" },
    units: { villa: 25, apt: 24, land: 6800 },
    rows: [
      { k: "villa8", beds: "2–3", size: "140–175 / 284–335 m²", price: "Rp10,12 – 11,96 M", status: "limited" },
      { k: "villa10", beds: "3", size: "200–220 / 392 m²", price: "Rp14,34 M", status: "limited" },
      { k: "villa12", beds: "4", size: "242–296 / 546 m²", price: "", status: "sold" },
      { k: "apt1", beds: "1", size: "59–68 m² net", price: "Rp3,28 – 4,09 M", status: "limited" },
      { k: "apt2", beds: "2", size: "97–103 m² net", price: "Rp5,31 M", status: "limited" }
    ],
    team: [["dev", "Murino Group"], ["contractor", "PT Total Graha Dunia Konstruksi"], ["architect", "Studiokian"], ["landscape", "Rimba Bali"], ["structure", "Struclab"]],
    id: {
      tagline: "Hunian wellness berkonsep hutan eucalyptus di Canggu",
      intro: "Villa freehold dan apartemen fully furnished di lahan 6.800 m², sekitar 800 m dari pantai, dengan wellness center dan layanan hospitality bintang lima.",
      area: "Canggu, Kuta Utara",
      card: "25 villa freehold & 24 apartemen fully furnished, ±800 m ke pantai.",
      villa: { h: "25 villa, 2–4 kamar tidur", own: "Freehold", p: "Rumah bertingkat mengikuti kontur: kamar privat di bawah, ruang sosial dan kolam di atas, garasi pribadi di basement. Setiap kamar adalah master bedroom dengan kamar mandi dalam.", a: "Luas tanah", av: "140–296 m²", b: "Luas bangunan", bv: "284–546 m²" },
      apt: { h: "24 suite, 1–2 kamar tidur", own: "Extensive leasehold", p: "Suite dengan balkon pribadi, jendela setinggi plafon, pantry SMEG, dan bathtub di setiap unit. Bangunan lima lantai dengan rooftop.", a: "Luas bersih", av: "59–103 m²", b: "Lantai", bv: "1–5 + rooftop" },
      rowNames: { villa8: "Villa Type 8", villa10: "Villa Type 10", villa12: "Villa Type 12", apt1: "Apartemen 1 KT", apt2: "Apartemen 2 KT" },
      pillars: [["Alam", "Hutan eucalyptus", "Lanskap eucalyptus dan jalur jalan kaki di dalam kawasan."], ["Air", "Air murni terpusat", "Sistem pemurnian air untuk seluruh keran di kawasan."], ["Cahaya", "Pencahayaan biofilik", "Lembut, tidak langsung, mengikuti waktu."], ["Udara", "Sirkulasi alami", "Desain indoor-outdoor di setiap ruang."], ["Nutrisi", "All day dining", "Restoran makanan sehat di dalam kawasan."]],
      wellness: ["Rooftop pool", "Sauna", "Cold plunge", "Gym & studio", "Ruang pijat", "Hospitality bintang lima"],
      feats: [["Semua tipe villa", ["Private pool & garasi pribadi", "Dapur lengkap SMEG", "Kamar mandi dalam di tiap kamar", "Ruang laundry, intercom", "Air murni & pencahayaan biofilik"]], ["Type 10 & 12", ["Sunken lounge", "Water jet pool", "Study lounge"]], ["Type 12", ["Rooftop lounge & jacuzzi", "Area BBQ", "Yoga deck"]]],
      pay: [["Biaya reservasi", "Villa Rp200 jt · apartemen Rp100 jt (tidak dapat dikembalikan)"], ["DP 20%", "Dikurangi biaya reservasi, dibayar dalam 14 hari"], ["Cicilan 80%", "Bulanan sampai serah terima"], ["Serah terima", "Target Q1 2027, unit fully furnished"]],
      payNote: "KPR dimungkinkan, persetujuan tergantung bank. Bila jadwal pembayaran tidak diikuti, pembelian batal dan dana yang dibayar tidak dikembalikan (ketentuan developer).",
      rental: { p: "Dikelola penuh oleh tim hospitality. Pemilik bisa menginap kapan saja; saat tidak menginap, unit masuk rental pool dan pendapatan dibagi berdasarkan poin per unit, dengan laporan dan pencairan lewat aplikasi pemilik.", villa: "mulai Rp63,4 jt/bulan · ROI 8–10%/tahun", apt: "mulai Rp29,6 jt/bulan · ROI 10–12%/tahun" },
      devAbout: "Developer butik lokal untuk properti dan hospitality di Bali."
    },
    en: {
      tagline: "Eucalyptus wellness living in Canggu",
      intro: "Freehold villas and fully furnished apartments on 6,800 m² of land, about 800 m from the beach, with a wellness centre and five-star hospitality services.",
      area: "Canggu, North Kuta",
      card: "25 freehold villas & 24 fully furnished apartments, ±800 m to the beach.",
      villa: { h: "25 villas, 2–4 bedrooms", own: "Freehold", p: "Homes tiered to follow the land: private bedrooms below, social spaces and pool above, and a private basement garage. Every bedroom is a master suite with its own bathroom.", a: "Land size", av: "140–296 m²", b: "Building size", bv: "284–546 m²" },
      apt: { h: "24 suites, 1–2 bedrooms", own: "Extensive leasehold", p: "Suites with a private balcony, full-height windows, a SMEG pantry and a bathtub in every unit. A five-storey building with a rooftop.", a: "Net size", av: "59–103 m²", b: "Floors", bv: "1–5 + rooftop" },
      rowNames: { villa8: "Villa Type 8", villa10: "Villa Type 10", villa12: "Villa Type 12", apt1: "Apartment 1 BR", apt2: "Apartment 2 BR" },
      pillars: [["Nature", "Eucalyptus forest", "A eucalyptus landscape with a forest walk inside the estate."], ["Water", "Central purification", "Purified water from every tap across the estate."], ["Light", "Biophilic lighting", "Soft, indirect lighting that follows the time of day."], ["Air", "Natural airflow", "Indoor-outdoor design in every space."], ["Nourishment", "All-day dining", "A healthy on-site restaurant."]],
      wellness: ["Rooftop pool", "Sauna", "Cold plunge", "Gym & studio", "Massage room", "Five-star hospitality"],
      feats: [["All villa types", ["Private pool & private garage", "SMEG equipped kitchen", "Ensuite bathroom in every bedroom", "Laundry room, intercom", "Purified water & biophilic lighting"]], ["Type 10 & 12", ["Sunken lounge", "Water jet pool", "Study lounge"]], ["Type 12", ["Rooftop lounge & jacuzzi", "BBQ area", "Yoga deck"]]],
      pay: [["Reservation fee", "Villa IDR 200M · apartment IDR 100M (non-refundable)"], ["20% down payment", "Less the reservation fee, within 14 days"], ["80% instalments", "Monthly until handover"], ["Handover", "Target Q1 2027, fully furnished"]],
      payNote: "Mortgage (KPR) possible, subject to bank approval. If the payment schedule is not followed, the purchase is void and paid amounts are non-refundable (developer terms).",
      rental: { p: "Fully managed by a hospitality team. Owners can stay whenever they like; when they don't, the unit joins the rental pool and income is shared by points per unit, with reporting and cash-out through the owner app.", villa: "from IDR 63.4M/month · ROI 8–10%/year", apt: "from IDR 29.6M/month · ROI 10–12%/year" },
      devAbout: "A local boutique developer for real estate and hospitality in Bali."
    },
    ru: {
      tagline: "Wellness-резиденции в эвкалиптовом лесу, Чангу",
      intro: "Виллы в собственности (freehold) и полностью меблированные апартаменты на участке 6 800 м², примерно в 800 м от пляжа, с wellness-центром и сервисом уровня пятизвёздочного отеля.",
      area: "Чангу, Северная Кута",
      card: "25 вилл freehold и 24 меблированных апартамента, ±800 м до пляжа.",
      villa: { h: "25 вилл, 2–4 спальни", own: "Freehold", p: "Дома на нескольких уровнях по рельефу: спальни внизу, гостиная и бассейн наверху, частный гараж в подвале. Каждая спальня — мастер-спальня с собственной ванной.", a: "Участок", av: "140–296 м²", b: "Площадь дома", bv: "284–546 м²" },
      apt: { h: "24 сьюта, 1–2 спальни", own: "Долгосрочная аренда (leasehold)", p: "Сьюты с балконом, панорамными окнами, кухней SMEG и ванной в каждом номере. Пятиэтажное здание с крышей-террасой.", a: "Чистая площадь", av: "59–103 м²", b: "Этажи", bv: "1–5 + крыша" },
      rowNames: { villa8: "Вилла Type 8", villa10: "Вилла Type 10", villa12: "Вилла Type 12", apt1: "Апартаменты 1 спальня", apt2: "Апартаменты 2 спальни" },
      pillars: [["Природа", "Эвкалиптовый лес", "Эвкалиптовый ландшафт и прогулочная тропа на территории."], ["Вода", "Центральная очистка", "Очищенная вода из каждого крана на территории."], ["Свет", "Биофильное освещение", "Мягкий непрямой свет, меняющийся в течение дня."], ["Воздух", "Естественная вентиляция", "Дизайн «дом–улица» в каждом помещении."], ["Питание", "Ресторан весь день", "Здоровая кухня на территории."]],
      wellness: ["Бассейн на крыше", "Сауна", "Холодная купель", "Спортзал и студия", "Массажный кабинет", "Сервис 5*"],
      feats: [["Все виллы", ["Частный бассейн и гараж", "Кухня SMEG", "Ванная при каждой спальне", "Прачечная, домофон", "Очищенная вода и биофильный свет"]], ["Type 10 и 12", ["Sunken lounge", "Бассейн с гидромассажем", "Кабинет-лаунж"]], ["Type 12", ["Лаунж и джакузи на крыше", "Зона барбекю", "Площадка для йоги"]]],
      pay: [["Бронирование", "Вилла 200 млн IDR · апартаменты 100 млн IDR (невозвратно)"], ["Взнос 20%", "За вычетом брони, в течение 14 дней"], ["Рассрочка 80%", "Ежемесячно до сдачи"], ["Сдача", "План: 1 кв. 2027, с мебелью"]],
      payNote: "Возможна ипотека (KPR) — по решению банка. При нарушении графика платежей покупка аннулируется, оплаченные суммы не возвращаются (условия девелопера).",
      rental: { p: "Полное управление командой отельного сервиса. Владелец живёт, когда хочет; в остальное время объект входит в арендный пул, доход делится по баллам каждого объекта, отчёты и вывод средств — в приложении владельца.", villa: "от 63,4 млн IDR/мес · ROI 8–10% в год", apt: "от 29,6 млн IDR/мес · ROI 10–12% в год" },
      devAbout: "Локальный бутик-девелопер недвижимости и гостеприимства на Бали."
    }
  }
];

module.exports = { PROJECTS };
