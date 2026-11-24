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
  },
  {
    slug: "suvela",
    name: "Suvela",
    developer: "Uta",
    areaSlug: "sanur",
    priceFrom: 6728956197, // Type C (price list 30 Okt 2026, belum PPN)
    priceDate: { villa: "2026-10-30" },
    units: { villa: 22 },
    rows: [
      { k: "a", beds: "3", size: "118–186 / 138 m²", price: "Rp7,02 – 9,52 M", status: "limited" },
      { k: "b", beds: "3", size: "156–164 / 152 m²", price: "Rp8,85 M", status: "limited" },
      { k: "c", beds: "3", size: "120–121 / 123 m²", price: "Rp6,73 M", status: "limited" },
      { k: "d", beds: "3", size: "123–152 / 126 m²", price: "Rp6,85 – 8,00 M", status: "limited" }
    ],
    id: {
      tagline: "Koleksi villa mewah privat di Sanur",
      intro: "22 villa tropis modern dengan 3 kamar tidur, private pool, dan rooftop deck dalam kawasan privat bertaman di Sanur, fully furnished.",
      area: "Sanur, Denpasar Selatan",
      card: "22 villa 3 kamar tidur dengan private pool & rooftop deck, fully furnished.",
      kv: [["Kamar", "3 KT · 3 KM"], ["Tipe", "A, B, C, D"], ["Pembayaran", "KPR atau cicilan 12×"]],
      badges: ["22 villa privat", "Fully furnished"],
      stats: [["22", "villa privat"], ["3 KT · 3 KM", "setiap villa"], ["±8 menit", "ke pantai"], ["Rp6,73 M", "harga mulai"]],
      villa: { h: "22 villa, 3 kamar tidur", p: "Empat tipe (A–D) dengan tata ruang dua lantai: sunken living, dapur & ruang makan menghadap kolam, tiga kamar tidur dengan kamar mandi dalam, dan rooftop deck.", a: "Luas tanah", av: "118–186 m²", b: "Luas bangunan", bv: "123–152 m²" },
      rowNames: { a: "Type A", b: "Type B", c: "Type C", d: "Type D" },
      priceCol: "Harga (belum PPN)",
      priceNote: "Harga peluncuran dari price list developer 30 Oktober 2026, belum termasuk PPN 11%, pajak pembeli, biaya notaris, dan biaya KPR. Harga dapat berubah tanpa pemberitahuan.",
      direct: "Harga langsung dari developer, belum PPN",
      pay: [["Biaya reservasi", "Rp50 jt (tidak dapat dikembalikan)"], ["DP 10%", "Sudah termasuk biaya reservasi, dibayar 15 hari setelah SPR"], ["Pelunasan 90%", "KPR bank atau cicilan 12 bulan"], ["Contoh: Villa No. 6", "DP Rp761,5 jt, lalu ±Rp571 jt/bulan × 12 (simulasi developer, tanpa bunga)"]],
      payNote: "Pembayaran langsung ke rekening perusahaan developer, tidak melalui pihak ketiga (ketentuan developer). Simulasi cicilan dari developer; angka pasti mengikuti tipe dan nomor villa.",
      pillH: "Kenyamanan, alam & privasi", pillP: "Arsitektur tropis modern dengan material hangat yang menyatu dengan lanskap.",
      pillars: [["Comfort", "Ruang yang nyaman", "Tata ruang yang dipikirkan untuk keseharian."], ["Nature", "Dekat dengan alam", "Lanskap tropis dan jalur taman di seluruh kawasan."], ["Privacy", "Terasa privat", "Kawasan villa tertutup dengan suasana tenang."], ["Material", "Hangat & alami", "Marmer Citatah, travertine, kayu, dan batu alam."]],
      wellC: "Kawasan", wellness: ["Jalur masuk bertaman", "Ruang bersama", "Lanskap tropis", "Utilitas bawah tanah"],
      featH: "Isi & spesifikasi villa",
      feats: [["Setiap villa", ["3 kamar tidur, 3 kamar mandi", "Private pool + shallow pool", "Sunken living, dapur & ruang makan", "Rooftop deck", "Outdoor shower"]], ["Material & spesifikasi", ["Lantai marmer Citatah alami", "Wastafel & bathtub travertine alami", "Pintu & jendela aluminium + kaca premium", "Dapur fitted, AC, fully furnished", "Listrik PLN 7.700 W, air PDAM"]]],
      near: ["±8 menit ke pantai", "±8 menit ke Pelabuhan Sanur", "±5 menit ke rumah sakit internasional", "±40 menit ke bandara"],
      devAbout: "PT Uway Trio Abadi — developer Suvela Luxury Villa, Sanur."
    },
    en: {
      tagline: "A private collection of luxury villas in Sanur",
      intro: "22 modern tropical villas with 3 bedrooms, a private pool and a rooftop deck in a private landscaped estate in Sanur, fully furnished.",
      area: "Sanur, South Denpasar",
      card: "22 three-bedroom villas with private pool & rooftop deck, fully furnished.",
      kv: [["Bedrooms", "3 BR · 3 BA"], ["Types", "A, B, C, D"], ["Payment", "Mortgage or 12 instalments"]],
      badges: ["22 private villas", "Fully furnished"],
      stats: [["22", "private villas"], ["3 BR · 3 BA", "every villa"], ["±8 min", "to the beach"], ["IDR 6.73B", "starting price"]],
      villa: { h: "22 villas, 3 bedrooms", p: "Four types (A–D) over two floors: a sunken living area, kitchen and dining facing the pool, three ensuite bedrooms and a rooftop deck.", a: "Land size", av: "118–186 m²", b: "Building size", bv: "123–152 m²" },
      rowNames: { a: "Type A", b: "Type B", c: "Type C", d: "Type D" },
      priceCol: "Price (excl. VAT)",
      priceNote: "Launch prices from the developer's price list of 30 October 2026, excluding 11% VAT, buyer's taxes, notary and mortgage fees. Prices may change without notice.",
      direct: "Developer pricing, excl. VAT",
      pay: [["Reservation fee", "IDR 50M (non-refundable)"], ["10% down payment", "Includes the reservation fee, due 15 days after the SPR"], ["90% balance", "Bank mortgage or 12 monthly instalments"], ["Example: Villa No. 6", "IDR 761.5M down payment, then ±IDR 571M/month × 12 (developer simulation, interest-free)"]],
      payNote: "Payments go directly to the developer company's account, never via a third party (developer terms). Instalment figures are the developer's simulation; exact amounts depend on the villa type and number.",
      pillH: "Comfort, nature & privacy", pillP: "Modern tropical architecture with warm materials that blend into the landscape.",
      pillars: [["Comfort", "Thoughtful spaces", "Layouts designed for everyday living."], ["Nature", "Close to nature", "Tropical landscaping and garden paths throughout."], ["Privacy", "Truly private", "A gated villa estate with a calm atmosphere."], ["Material", "Warm & natural", "Citatah marble, travertine, wood and natural stone."]],
      wellC: "Estate", wellness: ["Landscaped entrance", "Common space", "Tropical landscaping", "Underground utilities"],
      featH: "Villa features & specifications",
      feats: [["Every villa", ["3 bedrooms, 3 bathrooms", "Private pool + shallow pool", "Sunken living, kitchen & dining", "Rooftop deck", "Outdoor shower"]], ["Materials & specifications", ["Natural Citatah marble floors", "Natural travertine basin & bathtub", "Premium aluminium & glass doors and windows", "Fitted kitchen, air conditioning, fully furnished", "7,700 W PLN power, PDAM water"]]],
      near: ["±8 min to the beach", "±8 min to Sanur Harbour", "±5 min to an international hospital", "±40 min to the airport"],
      devAbout: "PT Uway Trio Abadi — developer of Suvela Luxury Villa, Sanur."
    },
    ru: {
      tagline: "Частная коллекция люксовых вилл в Сануре",
      intro: "22 виллы в современном тропическом стиле: 3 спальни, частный бассейн и терраса на крыше в закрытом ландшафтном комплексе в Сануре, с мебелью.",
      area: "Санур, Южный Денпасар",
      card: "22 виллы с 3 спальнями, частным бассейном и террасой на крыше, с мебелью.",
      kv: [["Спальни", "3 спальни · 3 ванные"], ["Типы", "A, B, C, D"], ["Оплата", "Ипотека или 12 платежей"]],
      badges: ["22 частные виллы", "С мебелью"],
      stats: [["22", "частные виллы"], ["3 + 3", "спальни и ванные"], ["±8 мин", "до пляжа"], ["6,73 млрд IDR", "цена от"]],
      villa: { h: "22 виллы, 3 спальни", p: "Четыре типа (A–D) на двух этажах: гостиная с понижением пола, кухня и столовая у бассейна, три спальни с ванными и терраса на крыше.", a: "Участок", av: "118–186 м²", b: "Площадь дома", bv: "123–152 м²" },
      rowNames: { a: "Тип A", b: "Тип B", c: "Тип C", d: "Тип D" },
      priceCol: "Цена (без НДС)",
      priceNote: "Стартовые цены из прайс-листа девелопера от 30 октября 2026 г., без НДС 11%, налогов покупателя, услуг нотариуса и расходов по ипотеке. Цены могут измениться без уведомления.",
      direct: "Цена девелопера, без НДС",
      pay: [["Бронирование", "50 млн IDR (невозвратно)"], ["Взнос 10%", "Включает бронь, в течение 15 дней после SPR"], ["Остаток 90%", "Банковская ипотека или 12 ежемесячных платежей"], ["Пример: вилла № 6", "Взнос 761,5 млн IDR, затем ±571 млн IDR/мес × 12 (расчёт девелопера, без процентов)"]],
      payNote: "Оплата напрямую на счёт компании-девелопера, без третьих лиц (условия девелопера). Суммы рассрочки — расчёт девелопера; точные цифры зависят от типа и номера виллы.",
      pillH: "Комфорт, природа и приватность", pillP: "Современная тропическая архитектура из тёплых материалов, вписанная в ландшафт.",
      pillars: [["Comfort", "Продуманные пространства", "Планировки для повседневной жизни."], ["Nature", "Ближе к природе", "Тропический ландшафт и садовые дорожки по всей территории."], ["Privacy", "Приватность", "Закрытый комплекс вилл со спокойной атмосферой."], ["Material", "Тёплые и натуральные", "Мрамор Читатах, травертин, дерево и натуральный камень."]],
      wellC: "Комплекс", wellness: ["Озеленённый въезд", "Общая зона", "Тропический ландшафт", "Подземные коммуникации"],
      featH: "Оснащение и спецификации",
      feats: [["Каждая вилла", ["3 спальни, 3 ванные", "Частный бассейн + мелкая зона", "Гостиная с понижением пола, кухня и столовая", "Терраса на крыше", "Уличный душ"]], ["Материалы", ["Полы из натурального мрамора Читатах", "Раковина и ванна из травертина", "Алюминиевые двери и окна с остеклением", "Встроенная кухня, кондиционеры, мебель", "Электричество PLN 7 700 Вт, вода PDAM"]]],
      near: ["±8 мин до пляжа", "±8 мин до порта Санура", "±5 мин до международной больницы", "±40 мин до аэропорта"],
      devAbout: "PT Uway Trio Abadi — девелопер Suvela Luxury Villa, Санур."
    }
  }
];

module.exports = { PROJECTS };
