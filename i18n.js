/* Bali Are Property — pilihan bahasa (Indonesia / English / Русский).
   Teks asli di halaman tetap Bahasa Indonesia; skrip ini menukar teks saat bahasa lain dipilih.
   Menambah terjemahan: tambahkan baris ["teks Indonesia", "English", "Русский"] di daftar D. */
(function () {
  var D = [
    // ---------- Umum / header ----------
    ["Bali Are Property – Listing Tanah", "Bali Are Property – Property Listings", "Bali Are Property – Недвижимость на Бали"],
    ["Listing Properti", "Property Listings", "Объекты недвижимости"],
    ["Tanah, villa, rumah, dan properti komersial siap transaksi di Bali. Dikelompokkan per jenis properti dan area.", "Land, villas, houses and commercial property ready to buy in Bali. Grouped by property type and area.", "Земля, виллы, дома и коммерческая недвижимость на Бали, готовые к сделке. Сгруппированы по типу и району."],
    ["Untuk buyer", "For buyers", "Для покупателей"],
    ["Cari properti", "Find a property", "Найти недвижимость"],
    ["Belum ketemu yang cocok? Isi kebutuhan Anda, kami carikan.", "Can't find the right one? Tell us what you need and we'll search for you.", "Не нашли подходящий вариант? Расскажите, что вам нужно, и мы подберём."],
    ["Untuk pemilik", "For owners", "Для владельцев"],
    ["Titip jual properti", "List your property", "Продать недвижимость"],
    ["Pasang tanah, villa, atau rumah Anda di listing kami.", "Put your land, villa or house on our listings.", "Разместите вашу землю, виллу или дом в нашем каталоге."],
    ["Jenis properti", "Property type", "Тип недвижимости"],
    ["Semua", "All", "Все"],
    ["Tanah", "Land", "Земля"],
    ["Villa", "Villa", "Виллы"],
    ["Komersial", "Commercial", "Коммерческая"],
    ["Rumah", "House", "Дома"],
    ["Area", "Area", "Район"],
    ["Recommended to buy", "Recommended to buy", "Рекомендуем"],
    ["SOLD", "SOLD", "ПРОДАНО"],
    ["Sold", "Sold", "Продано"],
    ["Sold by Bali Are Property", "Sold by Bali Are Property", "Продано Bali Are Property"],
    ["by Bali Are Property", "by Bali Are Property", "Bali Are Property"],
    ["Tanya via WhatsApp", "Ask on WhatsApp", "Написать в WhatsApp"],
    ["Lihat Lokasi", "View location", "Локация"],
    ["Lihat Foto", "View photos", "Фото"],
    ["Cari tanah serupa", "Find similar land", "Найти похожий участок"],
    ["Info & survey lokasi", "Info & site visits", "Информация и просмотры"],
    ["Chat WhatsApp", "Chat on WhatsApp", "Написать в WhatsApp"],
    ["Salin nomor", "Copy number", "Скопировать номер"],
    ["Nomor disalin", "Number copied", "Номер скопирован"],
    ["Form cari properti", "Property request form", "Форма запроса"],
    ["Form titip jual", "Owner listing form", "Форма для владельцев"],
    ["Harga dapat berubah sewaktu-waktu. Sketsa hanya ilustrasi; data resmi mengikuti sertifikat.", "Prices may change at any time. Sketches are illustrations only; official data follows the land certificate.", "Цены могут меняться. Схемы носят иллюстративный характер; официальные данные — по сертификату."],
    ["kali dikunjungi", "visits", "посещений"],
    ["Pilih bahasa", "Choose language", "Выберите язык"],

    // ---------- Label spesifikasi ----------
    ["Harga per m²", "Price per m²", "Цена за м²"],
    ["Harga per m² (nego)", "Price per m² (negotiable)", "Цена за м² (торг)"],
    ["Harga per are (Rp6,5 jt/m²)", "Price per are (Rp6.5 million/m²)", "Цена за ар (Rp6,5 млн/м²)"],
    ["Harga per are (≈Rp21 jt/m²)", "Price per are (≈Rp21 million/m²)", "Цена за ар (≈Rp21 млн/м²)"],
    ["Harga per m² (Rp600 jt/are)", "Price per m² (Rp600 million/are)", "Цена за м² (Rp600 млн/ар)"],
    ["Harga per m² (Rp380 jt/are)", "Price per m² (Rp380 million/are)", "Цена за м² (Rp380 млн/ар)"],
    ["Harga (nego)", "Price (negotiable)", "Цена (торг)"],
    ["Harga nego", "Negotiable price", "Цена обсуждается"],
    ["Harga", "Price", "Цена"],
    ["Nego", "Negotiable", "Торг"],
    ["Per are", "Per are", "За ар"],
    ["Per bidang / sekaligus", "Per plot / together", "По отдельности / вместе"],
    ["Luas tanah", "Land size", "Площадь участка"],
    ["Luas tanah total", "Total land size", "Общая площадь участка"],
    ["Total luas", "Total size", "Общая площадь"],
    ["Luas bangunan", "Building size", "Площадь здания"],
    ["Sertifikat", "Title", "Документ"],
    ["SHM per bidang", "SHM per plot", "SHM на каждый участок"],
    ["SHM (hak milik)", "SHM (freehold)", "SHM (собственность)"],
    ["Pecahan SHM", "SHM split", "Деление SHM"],
    ["ITR / Zonasi", "Zoning", "Зонирование"],
    ["Zonasi", "Zoning", "Зонирование"],
    ["Zona", "Zone", "Зона"],
    ["ITR", "Zoning", "Зонирование"],
    ["RDTR", "Zoning plan", "Зонирование"],
    ["Pariwisata", "Tourism", "Туристическая"],
    ["Zona pariwisata", "Tourism zone", "Туристическая зона"],
    ["Kuning", "Yellow (residential)", "Жёлтая (жилая)"],
    ["Zona kuning", "Yellow zone (residential)", "Жёлтая зона (жилая)"],
    ["Kuning / Pemukiman", "Yellow / residential", "Жёлтая / жилая"],
    ["Pemukiman, zona kuning", "Residential, yellow zone", "Жилая, жёлтая зона"],
    ["Pink (pariwisata)", "Pink (tourism)", "Розовая (туристическая)"],
    ["Perumahan", "Residential", "Жилая"],
    ["Hunian", "Residential", "Жилая"],
    ["Zona campuran", "Mixed-use zone", "Смешанная зона"],
    ["Campuran (mixed-use)", "Mixed-use", "Смешанная"],
    ["Holti / P2", "Holti / P2", "Holti / P2"],
    ["Peruntukan", "Permitted use", "Назначение"],
    ["Bisa dibangun, ketentuan khusus", "Buildable, special conditions", "Можно строить, особые условия"],
    ["Lebar depan", "Frontage", "Ширина по фасаду"],
    ["Muka lebar 23 m", "23 m frontage", "Фасад 23 м"],
    ["Bentuk", "Shape", "Форма"],
    ["Memanjang ikut jalan", "Long, following the road", "Вытянут вдоль дороги"],
    ["Lokasi", "Location", "Локация"],
    ["Dimensi", "Dimensions", "Размеры"],
    ["Dimensi per bidang", "Dimensions per plot", "Размеры участка"],
    ["Hadap", "Facing", "Ориентация"],
    ["Selatan", "South", "Юг"],
    ["Utara", "North", "Север"],
    ["Barat", "West", "Запад"],
    ["Timur", "East", "Восток"],
    ["View", "View", "Вид"],
    ["Ocean view", "Ocean view", "Вид на океан"],
    ["Ocean view tanpa halangan", "Unobstructed ocean view", "Открытый вид на океан"],
    ["Ocean view · hook", "Ocean view · corner plot", "Вид на океан · угловой"],
    ["Kontur", "Terrain", "Рельеф"],
    ["Datar", "Flat", "Ровный"],
    ["Datar, siap bangun", "Flat, ready to build", "Ровный, готов к застройке"],
    ["Tebing", "Cliff", "Обрыв"],
    ["Akses jalan", "Road access", "Подъезд"],
    ["Akses", "Access", "Доступ"],
    ["Akses mobil", "Car access", "Подъезд на машине"],
    ["Jalan mobil", "Car-width road", "Дорога для машин"],
    ["Paving, lebar 5 m", "Paved, 5 m wide", "Мощёная, ширина 5 м"],
    ["Paving", "Paved", "Мощёная"],
    ["Jalan", "Road", "Дорога"],
    ["Jalan lebar, mudah dilalui mobil", "Wide road, easy car access", "Широкая дорога, удобный подъезд"],
    ["Jalan memadai", "Adequate road", "Нормальная дорога"],
    ["Jalan simpangan", "Side road", "Боковая дорога"],
    ["Lebar jalan", "Road width", "Ширина дороги"],
    ["Lebar", "Wide", "Широкая"],
    ["2 jalan", "2 roads", "2 дороги"],
    ["2 akses jalan", "2 road accesses", "2 подъезда"],
    ["Tiga akses jalan", "Three road accesses", "Три подъезда"],
    ["Depan dan belakang", "Front and back", "Спереди и сзади"],
    ["Hook, 2 muka jalan", "Corner plot, 2 road frontages", "Угловой, 2 фасада"],
    ["Ke Pantai Balangan", "To Balangan Beach", "До пляжа Баланган"],
    ["Ke Pantai Melasti", "To Melasti Beach", "До пляжа Меласти"],
    ["Ke Pantai Pandawa", "To Pandawa Beach", "До пляжа Пандава"],
    ["Ke bandara", "To the airport", "До аэропорта"],
    ["Ke Westin Ubud", "To The Westin Ubud", "До The Westin Ubud"],
    ["Ke Savaya", "To Savaya", "До Savaya"],
    ["Pantai terdekat", "Nearest beach", "Ближайший пляж"],
    ["Posisi", "Position", "Расположение"],
    ["Hook", "Corner plot", "Угловой"],
    ["Posisi hook", "Corner plot", "Угловой участок"],
    ["Strategis, mudah dijangkau", "Strategic, easy to reach", "Удобное, легко добраться"],
    ["Lingkungan", "Surroundings", "Окружение"],
    ["Villa & kawasan premium", "Villas & premium area", "Виллы, премиальный район"],
    ["Utilitas", "Utilities", "Коммуникации"],
    ["PLN, PDAM, Wi-Fi", "Electricity, mains water, Wi-Fi", "Электричество, водопровод, Wi-Fi"],
    ["Kondisi", "Condition", "Состояние"],
    ["Tembok keliling", "Walled all around", "Обнесён стеной"],
    ["Dekat", "Near", "Рядом"],
    ["Sekitar", "Nearby", "Рядом"],
    ["Sebelah proyek hotel", "Next to a hotel project", "Рядом с проектом отеля"],
    ["Status", "Status", "Статус"],
    ["Terjual", "Sold", "Продано"],
    ["Transaksi", "Deal", "Сделка"],
    ["Jual atau sewa", "Sale or lease", "Продажа или аренда"],
    ["Jual / Sewa", "Sale / Lease", "Продажа / аренда"],
    ["Jual per m²", "Sale price per m²", "Продажа за м²"],
    ["Sewa per are/tahun", "Lease per are/year", "Аренда за ар/год"],
    ["Sewa 5,5 are/tahun", "Lease 5.5 are/year", "Аренда 5,5 ар/год"],
    ["Total jual 550 m²", "Total sale 550 m²", "Итого продажа 550 м²"],
    ["Satuan / gandeng", "Single / combined", "По отдельности / вместе"],
    ["Kavling A", "Plot A", "Участок A"],
    ["Kavling B", "Plot B", "Участок B"],
    ["Bidang A", "Plot A", "Участок A"],
    ["Bidang B", "Plot B", "Участок B"],
    ["Kawasan villa mewah", "Luxury villa area", "Район элитных вилл"],
    ["Langsung pemilik", "Direct from owner", "От собственника"],
    ["Siap bangun", "Ready to build", "Готов к застройке"],
    ["Skala besar", "Large scale", "Крупный участок"],
    ["Eksklusif", "Exclusive", "Эксклюзив"],
    ["Siap disewakan", "Rental-ready", "Готова к сдаче"],
    ["Berdiri sendiri", "Detached", "Отдельно стоящая"],
    ["Bisnis berjalan", "Operating business", "Действующий бизнес"],
    ["IMB lengkap", "Full building permit", "Полное разрешение на строительство"],
    ["Jual / Sewa 25 th", "Sale / 25-yr lease", "Продажа / аренда 25 лет"],
    ["Jual (nego)", "Sale (negotiable)", "Продажа (торг)"],
    ["Sewa 25 tahun (nego)", "25-year lease (negotiable)", "Аренда 25 лет (торг)"],
    ["View sawah", "Rice field view", "Вид на рисовые поля"],
    ["Sawah", "Rice fields", "Рисовые поля"],
    ["Tenang dan asri", "Quiet and green", "Тихо и зелено"],
    ["View sungai & lembah", "River & valley view", "Вид на реку и долину"],
    ["Sungai dan lembah hutan", "River and forested valley", "Река и лесная долина"],
    ["±3 menit ke Melasti", "±3 min to Melasti", "±3 мин до Меласти"],
    ["Setara per m² tanah", "Equivalent per m² of land", "В пересчёте на м² земли"],
    ["IMB", "Building permit", "Разрешение (IMB)"],
    ["Sudah ada", "Available", "Есть"],
    ["Kamar tidur", "Bedrooms", "Спальни"],
    ["Kamar mandi", "Bathrooms", "Ванные"],
    ["Parkir", "Parking", "Парковка"],
    ["3 area, hingga 5 mobil", "3 areas, up to 5 cars", "3 зоны, до 5 машин"],
    ["Listrik", "Electricity", "Электричество"],
    ["Air", "Water", "Вода"],
    ["Sumur bor 120 m", "Bore well 120 m", "Скважина 120 м"],
    ["Diberikan saat survei", "Shared at the site visit", "Сообщим при просмотре"],
    ["Konfigurasi", "Layout", "Планировка"],
    ["3 lantai, 3 villa", "3 floors, 3 villas", "3 этажа, 3 виллы"],
    ["Renovasi total dan diperluas", "Fully renovated and extended", "Полностью реновирована и расширена"],
    ["Villa utama", "Main villa", "Главная вилла"],
    ["Villa kedua", "Second villa", "Вторая вилла"],
    ["Villa ketiga", "Third villa", "Третья вилла"],
    ["5 KT en-suite", "5 en-suite bedrooms", "5 спален с ванными"],
    ["6 KT en-suite", "6 en-suite bedrooms", "6 спален с ванными"],
    ["4 KT en-suite", "4 en-suite bedrooms", "4 спальни с ванными"],
    ["15 KT en-suite", "15 en-suite bedrooms", "15 спален с ванными"],
    ["4 (en-suite)", "4 (en-suite)", "4 (с ванными)"],
    ["Total kamar tidur", "Total bedrooms", "Всего спален"],
    ["Garasi 5 + carport 15 mobil", "Garage for 5 + carport for 15 cars", "Гараж на 5 + навес на 15 машин"],
    ["23.000 kWh + genset", "23,000 kWh + generator", "23 000 кВт·ч + генератор"],
    ["PDAM + micro-filter", "Mains water + micro-filter", "Водопровод + микрофильтр"],
    ["PDAM", "Mains water", "Водопровод"],
    ["Estimasi sewa per malam", "Estimated rent per night", "Оценка аренды за ночь"],
    ["Kawasan", "Area", "Район"],
    ["Office & mess staf", "Office & staff quarters", "Офис и жильё персонала"],
    ["3 (AC, TV)", "3 (AC, TV)", "3 (кондиционер, ТВ)"],
    ["3 (bathtub) + 1 toilet tamu", "3 (bathtub) + 1 guest toilet", "3 (с ванной) + 1 гостевой туалет"],
    ["Kolam renang", "Swimming pool", "Бассейн"],
    ["Private, 32 m²", "Private, 32 m²", "Частный, 32 м²"],
    ["Private, 10 × 5 m", "Private, 10 × 5 m", "Частный, 10 × 5 м"],
    ["Carport", "Carport", "Навес для машин"],
    ["3 mobil", "3 cars", "3 машины"],
    ["1 mobil", "1 car", "1 машина"],
    ["Garasi", "Garage", "Гараж"],
    ["Legalitas", "Legal status", "Документы"],
    ["SHM, PBG/SLF, izin villa", "SHM, building permit (PBG/SLF), villa licence", "SHM, разрешения PBG/SLF, лицензия виллы"],
    ["SHM, IMB lengkap", "SHM, full building permit", "SHM, полное разрешение"],
    ["Kemenpar", "Ministry of Tourism", "Минтуризма"],
    ["Terdaftar", "Registered", "Зарегистрирована"],
    ["Lantai", "Floors", "Этажи"],
    ["Kapasitas", "Capacity", "Вместимость"],
    ["18 kamar · 46 bed", "18 rooms · 46 beds", "18 номеров · 46 мест"],
    ["Bangunan", "Buildings", "Здания"],
    ["11 unit", "11 units", "11 зданий"],
    ["Kamar", "Rooms", "Номера"],
    ["Tempat tidur", "Beds", "Кровати"],
    ["Leasehold s/d 2032", "Leasehold until 2032", "Аренда до 2032"],
    ["Leasehold s/d 2036", "Leasehold until 2036", "Аренда до 2036"],
    ["Perpanjangan", "Extension", "Продление"],
    ["Sudah dibayar sesuai kontrak", "Paid per contract", "Оплачено по договору"],
    ["Transfer leasehold", "Leasehold transfer", "Передача аренды"],
    ["Over contract", "Contract takeover", "Переуступка договора"],
    ["3 SHM", "3 SHM titles", "3 сертификата SHM"],
    ["2 SHM (608 + 628 m²)", "2 SHM titles (608 + 628 m²)", "2 SHM (608 + 628 м²)"],
    ["2 SHM (2 are + 2 are)", "2 SHM titles (2 are + 2 are)", "2 SHM (2 ар + 2 ар)"],
    ["Lebar 4 m", "4 m wide", "Ширина 4 м"],
    ["Lebar 5 m", "5 m wide", "Ширина 5 м"],
    ["Lebar 6 m", "6 m wide", "Ширина 6 м"],
    ["Nirmala, GWK", "Nirmala, GWK", "Nirmala, GWK"],

    // ---------- Sketsa ----------
    ["JALAN", "ROAD", "ДОРОГА"],
    ["JALAN PAVING 5 M", "PAVED ROAD 5 M", "МОЩЁНАЯ ДОРОГА 5 М"],
    ["JALAN MOBIL", "CAR ROAD", "ДОРОГА ДЛЯ МАШИН"],
    ["JALAN 6 M", "ROAD 6 M", "ДОРОГА 6 М"],
    ["JALAN SIMPANGAN", "SIDE ROAD", "БОКОВАЯ ДОРОГА"],
    ["JALAN LEBAR", "WIDE ROAD", "ШИРОКАЯ ДОРОГА"],
    ["S", "S", "Ю"],
    ["U", "N", "С"],
    ["B ← hadap barat", "W ← faces west", "З ← на запад"],
    ["lebar depan 23 m", "23 m frontage", "фасад 23 м"],
    ["Muka 28 m ke jalan · datar", "28 m road frontage · flat", "Фасад 28 м · ровный"],
    ["±65 × 96 m · Datar", "±65 × 96 m · Flat", "±65 × 96 м · ровный"],
    ["muka ±14 m", "±14 m frontage", "фасад ±14 м"],
    ["SHM · ITR Pariwisata", "SHM · Tourism zoning", "SHM · туристическая зона"],
    ["SHM · ITR Kuning · Hook", "SHM · Yellow zoning · Corner", "SHM · жёлтая зона · угловой"],
    ["SHM · ITR Perumahan", "SHM · Residential zoning", "SHM · жилая зона"],
    ["SHM · Kompleks villa", "SHM · Villa complex", "SHM · комплекс вилл"],
    ["Sketsa ilustrasi, bukan gambar ukur.", "Illustrative sketch, not a survey drawing.", "Иллюстративная схема, не план замеров."],
    ["Sketsa ilustrasi posisi dua bidang, bukan gambar ukur. Batas pasti mengikuti sertifikat.", "Illustrative sketch of the two plots, not a survey drawing. Exact boundaries follow the certificate.", "Схема расположения двух участков, не план замеров. Точные границы — по сертификату."],
    ["Sketsa ilustrasi posisi hook (dua sisi jalan), bukan gambar ukur.", "Illustrative sketch of the corner position (two road sides), not a survey drawing.", "Схема углового участка (две дороги), не план замеров."],
    ["Sketsa ilustrasi, bukan gambar ukur. Garis tebal menandakan tembok keliling.", "Illustrative sketch, not a survey drawing. The thick line marks the perimeter wall.", "Иллюстративная схема, не план замеров. Толстая линия — ограждающая стена."],
    ["Sketsa ilustrasi posisi gandeng, bukan gambar ukur. Batas pasti mengikuti sertifikat.", "Illustrative sketch of the combined plots, not a survey drawing. Exact boundaries follow the certificate.", "Схема смежных участков, не план замеров. Точные границы — по сертификату."],

    // ---------- Kegunaan ----------
    ["Kompleks villa", "Villa complex", "Комплекс вилл"],
    ["Boutique resort / hotel", "Boutique resort / hotel", "Бутик-курорт / отель"],
    ["Proyek hospitality", "Hospitality project", "Гостиничный проект"],
    ["Properti komersial", "Commercial property", "Коммерческая недвижимость"],
    ["Luxury villa", "Luxury villa", "Элитная вилла"],
    ["Villa rental", "Villa rental", "Аренда вилл"],
    ["Investasi", "Investment", "Инвестиции"],
    ["Cafe", "Café", "Кафе"],
    ["Guest house", "Guest house", "Гостевой дом"],
    ["Tanah kavling", "Subdivided plots", "Нарезка на участки"],
    ["Rumah tinggal", "Family home", "Жилой дом"],
    ["Villa pribadi", "Private villa", "Частная вилла"],
    ["Investasi jangka panjang", "Long-term investment", "Долгосрочные инвестиции"],
    ["Villa eksklusif", "Exclusive villa", "Эксклюзивная вилла"],
    ["Boutique hotel", "Boutique hotel", "Бутик-отель"],
    ["Boutique resort", "Boutique resort", "Бутик-курорт"],
    ["Akomodasi wisata", "Tourist accommodation", "Туристическое жильё"],
    ["Hotel / resort", "Hotel / resort", "Отель / курорт"],
    ["Hotel dan villa mewah", "Hotels and luxury villas", "Отели и элитные виллы"],
    ["Villa dan hotel", "Villas and hotels", "Виллы и отели"],
    ["Villa komersial", "Commercial villa", "Коммерческая вилла"],
    ["Usaha pariwisata", "Tourism business", "Туристический бизнес"],
    ["Sewa jangka panjang", "Long-term lease", "Долгосрочная аренда"],
    ["Villa & akomodasi wisata", "Villas & tourist accommodation", "Виллы и туристическое жильё"],
    ["Resort", "Resort", "Курорт"],
    ["Private residence", "Private residence", "Частная резиденция"],
    ["Ruko / retail", "Shophouse / retail", "Магазин / ритейл"],
    ["Hotel / villa", "Hotel / villa", "Отель / вилла"],
    ["Usaha", "Business", "Бизнес"],
    ["Villa mewah", "Luxury villa", "Элитная вилла"],
    ["Luxury private villa", "Luxury private villa", "Элитная частная вилла"],
    ["Boutique villa complex", "Boutique villa complex", "Бутик-комплекс вилл"],
    ["Wellness retreat / healing resort", "Wellness retreat / healing resort", "Велнес-ретрит / курорт"],
    ["Villa dan hunian privat", "Villas and private homes", "Виллы и частные дома"],
    ["Hunian pribadi mewah", "Luxury private home", "Элитное частное жильё"],
    ["Hunian mewah", "Luxury home", "Элитное жильё"],
    ["Villa rental / hospitality", "Villa rental / hospitality", "Аренда вилл / гостиничный бизнес"],
    ["Hunian pribadi", "Private home", "Личное проживание"],
    ["Villa rental / Airbnb", "Villa rental / Airbnb", "Аренда вилл / Airbnb"],
    ["Bisnis villa rental", "Villa rental business", "Бизнес по аренде вилл"],
    ["Guest house / homestay", "Guest house / homestay", "Гостевой дом / хоумстей"],
    ["Hotel / villa rental", "Hotel / villa rental", "Отель / аренда вилл"],
    ["Restoran", "Restaurant", "Ресторан"],
    ["Pengembangan hospitality", "Hospitality development", "Развитие гостиничного бизнеса"],
    ["Investasi dekat bandara", "Investment near the airport", "Инвестиции рядом с аэропортом"],

    // ---------- Lokasi ----------
    ["Pantai Melasti", "Melasti Beach", "Пляж Меласти"],
    ["Pantai Melasti · Ungasan", "Melasti Beach · Ungasan", "Пляж Меласти · Унгасан"],
    ["Dekat Pantai Melasti · Ungasan", "Near Melasti Beach · Ungasan", "У пляжа Меласти · Унгасан"],
    ["Perumahan kecil · Ungasan", "Small residential estate · Ungasan", "Небольшой жилой комплекс · Унгасан"],
    ["Dekat Bandara Ngurah Rai · Kuta", "Near Ngurah Rai Airport · Kuta", "У аэропорта Нгурах-Рай · Кута"],
    ["Kompleks Airis · Ungasan", "Airis estate · Ungasan", "Комплекс Airis · Унгасан"],
    ["Pantai Tanah Barak · Kutuh", "Tanah Barak Beach · Kutuh", "Пляж Танах-Барак · Кутух"],
    ["Tanah Barak, Pandawa", "Tanah Barak, Pandawa", "Танах-Барак, Пандава"],
    ["Jl. Pura Mesuka, Ungasan", "Jl. Pura Mesuka, Ungasan", "Jl. Pura Mesuka, Унгасан"],
    ["Seseh, Tanah Lot, Kedungu", "Seseh, Tanah Lot, Kedungu", "Сесех, Танах-Лот, Кедунгу"],

    // ---------- Judul & deskripsi listing ----------
    ["Tanah 6.000 m² dekat Pantai Balangan", "6,000 m² land near Balangan Beach", "Участок 6 000 м² у пляжа Баланган"],
    ["Lahan zona pariwisata dengan muka jalan ±120 meter, memanjang mengikuti jalan. Cocok untuk kompleks villa, boutique resort, atau hotel.", "Tourism-zoned land with about 120 m of road frontage, running along the road. Suits a villa complex, boutique resort or hotel.", "Участок в туристической зоне с фасадом около 120 м вдоль дороги. Подходит для комплекса вилл, бутик-курорта или отеля."],
    ["Tanah ocean view 2 × 650 m² di Balangan", "Ocean-view land, 2 × 650 m² in Balangan", "Участки с видом на океан, 2 × 650 м² в Баланган"],
    ["Dua bidang bersebelahan di kawasan villa mewah Balangan dengan pemandangan laut tanpa halangan. Kontur datar, bisa dibeli per bidang.", "Two adjoining plots in Balangan's luxury villa area with an unobstructed ocean view. Flat terrain; plots can be bought separately.", "Два смежных участка в районе элитных вилл Баланган с открытым видом на океан. Ровный рельеф, можно купить по отдельности."],
    ["Tanah hook 300 m² di Jalan Tulip", "300 m² corner plot on Jalan Tulip", "Угловой участок 300 м² на Jalan Tulip"],
    ["Posisi hook memberi keleluasaan untuk desain bangunan, akses, sirkulasi, dan area parkir. Berada di lingkungan villa kawasan Ungasan yang terus berkembang.", "The corner position gives flexibility for building design, access, circulation and parking. Located among villas in fast-growing Ungasan.", "Угловое расположение даёт свободу в планировке, подъезде и парковке. Среди вилл в развивающемся районе Унгасан."],
    ["Tanah 1,5 ha di Jalan Pura Mesuka", "1.5 ha land on Jalan Pura Mesuka", "Участок 1,5 га на Jalan Pura Mesuka"],
    ["Lahan luas di lingkungan villa Ungasan, Kuta Selatan. Cocok dipecah menjadi tanah kavling atau dikembangkan menjadi kawasan hunian.", "A large site among villas in Ungasan, South Kuta. Suits subdivision into plots or a residential development.", "Большой участок среди вилл Унгасана (Южная Кута). Подходит для нарезки на участки или жилого проекта."],
    ["Tanah 400 m² di kawasan Bali Cliff", "400 m² land in the Bali Cliff area", "Участок 400 м² в районе Bali Cliff"],
    ["Tanah peruntukan perumahan dengan lebar depan 23 meter dan akses mobil. Ideal untuk hunian pribadi maupun aset investasi di Ungasan.", "Residential-zoned land with 23 m frontage and car access. Ideal for a private home or as an investment in Ungasan.", "Участок под жилую застройку, фасад 23 м, подъезд на машине. Идеален для собственного дома или инвестиций в Унгасане."],
    ["Tanah 830 m² siap bangun di Central Ungasan", "830 m² build-ready land in Central Ungasan", "Участок 830 м² под застройку в центре Унгасана"],
    ["Tanah datar sudah ditembok keliling di lingkungan villa mewah, dekat Nirmala Supermarket dan GWK. Listrik PLN, air PDAM, dan Wi-Fi sudah tersedia.", "Flat, fully walled land among luxury villas, near Nirmala Supermarket and GWK. Electricity, mains water and Wi-Fi are already connected.", "Ровный участок, обнесённый стеной, среди элитных вилл, рядом с супермаркетом Nirmala и GWK. Электричество, водопровод и Wi-Fi подключены."],
    ["Tanah 1.000 m² di kawasan Pantai Melasti", "1,000 m² land in the Melasti Beach area", "Участок 1 000 м² в районе пляжа Меласти"],
    ["Lahan zona pariwisata di lingkungan hotel dan villa mewah kawasan Pantai Melasti. Cocok untuk villa eksklusif, boutique hotel, atau investasi jangka panjang.", "Tourism-zoned land among hotels and luxury villas near Melasti Beach. Suits an exclusive villa, boutique hotel or long-term investment.", "Участок в туристической зоне среди отелей и элитных вилл у пляжа Меласти. Для эксклюзивной виллы, бутик-отеля или долгосрочных инвестиций."],
    ["Tanah 1.990 m² dekat Pantai Melasti di Jalan Karma Kandara", "1,990 m² land near Melasti Beach on Jalan Karma Kandara", "Участок 1 990 м² у пляжа Меласти на Jalan Karma Kandara"],
    ["Tanah datar zona pariwisata, ±3 menit ke Pantai Melasti, dikelilingi kompleks villa dan hotel eksklusif. Cocok untuk villa, boutique resort, atau akomodasi wisata.", "Flat tourism-zoned land, about 3 minutes to Melasti Beach, surrounded by exclusive villas and hotels. Suits a villa, boutique resort or tourist accommodation.", "Ровный участок в туристической зоне, ~3 минуты до пляжа Меласти, среди эксклюзивных вилл и отелей. Для виллы, бутик-курорта или туристического жилья."],
    ["Tanah 6.015 m² dekat Karma Kandara", "6,015 m² land near Karma Kandara", "Участок 6 015 м² рядом с Karma Kandara"],
    ["Lahan zona pariwisata di sebelah proyek hotel dan dekat Pantai Melasti, dengan tiga akses jalan.", "Tourism-zoned land next to a hotel project near Melasti Beach, with three road accesses.", "Участок в туристической зоне рядом с проектом отеля у пляжа Меласти, три подъезда."],
    ["Tanah 200 m² di kompleks Airis Ungasan", "200 m² land in the Airis estate, Ungasan", "Участок 200 м² в комплексе Airis, Унгасан"],
    ["Kavling kosong peruntukan hunian dengan dua akses jalan di depan dan belakang. Jalan lebar.", "Vacant residential plot with road access front and back. Wide roads.", "Свободный участок под жильё с подъездом спереди и сзади. Широкие дороги."],
    ["Tanah 197 m² di kompleks Airis Ungasan", "197 m² land in the Airis estate, Ungasan", "Участок 197 м² в комплексе Airis, Унгасан"],
    ["Tanah 5.300 m² zona pariwisata dekat Pantai Pandawa", "5,300 m² tourism-zoned land near Pandawa Beach", "Участок 5 300 м² в туристической зоне у пляжа Пандава"],
    ["Lahan datar siap bangun, sekitar 3 km dari Pantai Pandawa. Cocok untuk villa komersial atau dipecah menjadi tanah kavling.", "Flat, build-ready land about 3 km from Pandawa Beach. Suits a commercial villa or subdivision into plots.", "Ровный участок под застройку, около 3 км от пляжа Пандава. Для коммерческой виллы или нарезки на участки."],
    ["Tanah 550 m² dekat Pantai Tanah Barak, Pandawa", "550 m² land near Tanah Barak Beach, Pandawa", "Участок 550 м² у пляжа Танах-Барак, Пандава"],
    ["Tanah ITR pink (zona pariwisata) di kawasan Pantai Tanah Barak, Pandawa. Bisa dibeli atau disewa, untuk investasi maupun pengembangan sesuai ketentuan tata ruang.", "Pink-zoned (tourism) land in the Tanah Barak Beach area, Pandawa. Available to buy or lease, for investment or development within zoning rules.", "Участок в розовой (туристической) зоне у пляжа Танах-Барак, Пандава. Продажа или аренда — для инвестиций или застройки по правилам зонирования."],
    ["Tanah ocean view 3.000 m² posisi hook di Pandawa", "3,000 m² ocean-view corner plot in Pandawa", "Угловой участок 3 000 м² с видом на океан в Пандаве"],
    ["Bidang luas dengan pemandangan laut terbuka, posisi hook dengan dua muka jalan dan lebar depan 62 meter. Ideal untuk kompleks villa, perumahan, atau properti komersial.", "A large plot with open ocean views, on a corner with two road frontages and 62 m of frontage. Ideal for a villa complex, housing or commercial property.", "Большой угловой участок с открытым видом на океан, два фасада, ширина 62 м. Идеален для комплекса вилл, жилья или коммерции."],
    ["Tanah 395 m² gandeng di Labuan Sait", "395 m² combined plots in Labuan Sait", "Смежные участки 395 м² в Лабуан-Саит"],
    ["Dua bidang bersebelahan di kawasan villa dan akomodasi wisata Uluwatu. Bisa dibeli satuan atau sekaligus.", "Two adjoining plots in Uluwatu's villa and tourist accommodation area. Buy one or both.", "Два смежных участка в районе вилл и туристического жилья Улувату. Можно купить один или оба."],
    ["Tanah 9.025 m² di kawasan villa mewah Labuan Sait", "9,025 m² land in Labuan Sait's luxury villa area", "Участок 9 025 м² в районе элитных вилл Лабуан-Саит"],
    ["Lahan luas di koridor pariwisata utama Bali Selatan, dikelilingi villa luxury, resort, dan private residence. Cocok untuk villa eksklusif atau resort.", "A large site in South Bali's main tourism corridor, surrounded by luxury villas, resorts and private residences. Suits an exclusive villa or resort.", "Большой участок в главном туристическом коридоре Южного Бали, среди элитных вилл, курортов и частных резиденций. Для эксклюзивной виллы или курорта."],
    ["Dekat pantai Padang Padang, Bingin, Suluban, dan Dreamland", "Near Padang Padang, Bingin, Suluban and Dreamland beaches", "Рядом с пляжами Паданг-Паданг, Бинджин, Сулубан и Дримленд"],
    ["Kawasan favorit wisatawan internasional dan expat", "A favourite area for international visitors and expats", "Любимый район иностранных туристов и экспатов"],
    ["Dekat restoran, beach club, dan pusat lifestyle", "Near restaurants, beach clubs and lifestyle spots", "Рядом рестораны, бич-клубы и места отдыха"],
    ["Lingkungan tenang dan privat", "Quiet and private surroundings", "Тихое и уединённое окружение"],
    ["Potensi capital gain dan rental yield", "Capital gain and rental yield potential", "Потенциал роста стоимости и арендного дохода"],
    ["Infrastruktur dan konektivitas terus berkembang", "Infrastructure and connectivity keep improving", "Инфраструктура и транспорт развиваются"],
    ["Tanah 215 m² di kompleks villa Labuan Sait", "215 m² land in a Labuan Sait villa complex", "Участок 215 м² в комплексе вилл Лабуан-Саит"],
    ["Kavling di dalam kompleks villa dengan muka ±14 meter menghadap utara. Akses jalan lebar dan mudah dilalui kendaraan. Dijual langsung dari pemilik.", "A plot inside a villa complex with about 14 m of north-facing frontage. Wide, easy road access. Sold directly by the owner.", "Участок в комплексе вилл, фасад ~14 м на север. Широкая дорога, удобный подъезд. Продаёт собственник."],
    ["Tanah 1.000 m² ocean view di Blimbingsari", "1,000 m² ocean-view land in Blimbingsari", "Участок 1 000 м² с видом на океан в Блимбингсари"],
    ["Lahan zona pariwisata dengan pemandangan laut dan lebar depan ±54 meter. Ideal untuk villa eksklusif atau boutique resort.", "Tourism-zoned land with ocean views and about 54 m of frontage. Ideal for an exclusive villa or boutique resort.", "Участок в туристической зоне с видом на океан, фасад ~54 м. Идеален для эксклюзивной виллы или бутик-курорта."],
    ["Tanah 1.620 m² di Jalan Dewi Sri, area Nakula", "1,620 m² land on Jalan Dewi Sri, Nakula area", "Участок 1 620 м² на Jalan Dewi Sri, район Накула"],
    ["Lahan zona campuran di jalur Dewi Sri – Jalan Pandawa, area Nakula. Bentuk 30 × 54 m, cocok untuk pengembangan komersial maupun hunian.", "Mixed-use land on the Dewi Sri – Jalan Pandawa route, Nakula area. A 30 × 54 m shape, suited to commercial or residential development.", "Участок смешанной зоны на линии Dewi Sri – Jalan Pandawa, район Накула. Форма 30 × 54 м, для коммерческой или жилой застройки."],
    ["Jl. Dewi Sri, Nakula", "Jl. Dewi Sri, Nakula", "Jl. Dewi Sri, Накула"],
    ["Tanah 350 m² di jalan utama Canggu", "350 m² land on a main road in Canggu", "Участок 350 м² на главной дороге Чангу"],
    ["Tanah langka di kawasan premium Canggu, berada di jalan utama selebar 12 meter dengan dua akses jalan. Cocok untuk villa, hunian, atau usaha sesuai ketentuan tata ruang.", "A rare plot in premium Canggu on a 12 m-wide main road with two road accesses. Suits a villa, home or business within zoning rules.", "Редкий участок в премиальном Чангу на главной дороге шириной 12 м, два подъезда. Для виллы, дома или бизнеса по правилам зонирования."],
    ["Tanah 2.802 m² view sawah di Singakerta", "2,802 m² rice-field-view land in Singakerta", "Участок 2 802 м² с видом на рисовые поля в Сингакерте"],
    ["Lahan zona pariwisata dengan pemandangan sawah di lingkungan yang tenang dan asri. Sangat cocok untuk villa mewah atau resort.", "Tourism-zoned land overlooking rice fields in quiet, green surroundings. Ideal for a luxury villa or resort.", "Участок в туристической зоне с видом на рисовые поля, в тихом зелёном месте. Отлично для элитной виллы или курорта."],
    ["Tanah tebing 1.236 m² view sungai dan hutan di Lod Tunduh", "1,236 m² cliff-edge land with river and forest views in Lod Tunduh", "Участок на обрыве 1 236 м² с видом на реку и лес в Лод-Тундух"],
    ["Tanah tebing langka dengan pemandangan sungai dan lembah hutan, ±2 km dari The Westin Resort Ubud. Lingkungan tenang dan alami, cocok untuk villa mewah, boutique villa, atau wellness retreat.", "Rare cliff-edge land overlooking a river and forested valley, about 2 km from The Westin Resort Ubud. Quiet, natural surroundings, suited to a luxury villa, boutique villa or wellness retreat.", "Редкий участок на обрыве с видом на реку и лесную долину, ~2 км от The Westin Resort Ubud. Тихая природа — для элитной виллы, бутик-виллы или велнес-ретрита."],
    ["Kawasan villa premium low-density, lebih tenang dari pusat Ubud", "Premium low-density villa area, quieter than central Ubud", "Премиальный малоэтажный район вилл, тише центра Убуда"],
    ["Diminati expat long-stay dan wisatawan kelas atas", "Sought after by long-stay expats and high-end travellers", "Популярен у экспатов и состоятельных туристов"],
    ["Tanah dengan view tebing dan sungai makin terbatas", "Land with cliff and river views is increasingly scarce", "Участков с видом на обрыв и реку всё меньше"],
    ["Potensi capital gain dan yield kuat bila dikembangkan", "Strong capital gain and yield potential once developed", "Высокий потенциал роста и доходности после застройки"],
    ["Tanah 450 m² di lingkungan villa Kaba-Kaba", "450 m² land among villas in Kaba-Kaba", "Участок 450 м² среди вилл в Каба-Каба"],
    ["Tanah di lingkungan villa dan hunian privat yang tenang, dengan akses mudah ke Pantai Seseh, Tanah Lot, dan Kedungu. Infrastruktur terus berkembang dan akses jalan memadai.", "Land in a quiet area of villas and private homes, with easy access to Seseh Beach, Tanah Lot and Kedungu. Infrastructure is growing and road access is good.", "Участок в тихом районе вилл и частных домов, легко добраться до пляжа Сесех, Танах-Лот и Кедунгу. Инфраструктура развивается, подъезд хороший."],
    ["Villa mewah 4 kamar tidur di Jalan Goa Gong", "Luxury 4-bedroom villa on Jalan Goa Gong", "Элитная вилла с 4 спальнями на Jalan Goa Gong"],
    ["Villa di atas tanah 2.460 m² dengan bangunan ±1.200 m², kolam renang infinity, gym, ruang spa, dan paviliun staf. Untuk hunian pribadi mewah maupun investasi jangka panjang di Jimbaran.", "A villa on 2,460 m² of land with about 1,200 m² of buildings, an infinity pool, gym, spa room and staff pavilion. For a luxury private home or long-term investment in Jimbaran.", "Вилла на участке 2 460 м², около 1 200 м² построек, инфинити-бассейн, спортзал, спа и домик для персонала. Для элитного проживания или долгосрочных инвестиций в Джимбаране."],
    ["Kolam renang infinity", "Infinity pool", "Инфинити-бассейн"],
    ["Ruang tamu dan ruang makan luas", "Spacious living and dining rooms", "Просторные гостиная и столовая"],
    ["Dapur modern konsep terbuka", "Modern open-plan kitchen", "Современная кухня открытой планировки"],
    ["Ruang spa/pijat dan ruang kantor", "Spa/massage room and office", "Спа/массажная комната и кабинет"],
    ["Gym lengkap dan ruang hiburan", "Fully equipped gym and entertainment room", "Оборудованный спортзал и зона отдыха"],
    ["2 gazebo dan 2 kolam ikan", "2 gazebos and 2 fish ponds", "2 беседки и 2 пруда с рыбами"],
    ["Paviliun staf: 2 KT, dapur/ruang makan, KM", "Staff pavilion: 2 bedrooms, kitchen/dining, bathroom", "Домик персонала: 2 спальни, кухня-столовая, санузел"],
    ["Ruang penyimpanan dan 2 ruang pompa", "Storage room and 2 pump rooms", "Кладовая и 2 насосные"],
    ["Estate 3 villa ocean view di bukit Labuan Sait", "Estate of 3 ocean-view villas on the Labuan Sait hill", "Поместье из 3 вилл с видом на океан на холме Лабуан-Саит"],
    ["Kompleks tiga lantai berisi tiga villa di puncak bukit Labuan Sait, 5 menit dari Pantai Padang Padang. Pemandangan Samudra Hindia, Teluk Jimbaran, dan pesisir barat Bali tanpa halangan. Sudah direnovasi total dan diperluas.", "A three-storey complex of three villas on the Labuan Sait hilltop, 5 minutes from Padang Padang Beach. Unobstructed views of the Indian Ocean, Jimbaran Bay and Bali's west coast. Fully renovated and extended.", "Трёхэтажный комплекс из трёх вилл на вершине холма Лабуан-Саит, 5 минут до пляжа Паданг-Паданг. Открытый вид на Индийский океан, залив Джимбаран и западное побережье Бали. Полностью реновирован и расширен."],
    ["Teras lantai jati dengan panorama laut", "Teak-floored terraces with ocean panoramas", "Террасы из тика с панорамой океана"],
    ["Beberapa kolam renang", "Several swimming pools", "Несколько бассейнов"],
    ["Dapur modern lengkap", "Fully equipped modern kitchen", "Полностью оборудованная современная кухня"],
    ["Gym dan jacuzzi", "Gym and jacuzzi", "Спортзал и джакузи"],
    ["Veranda dan taman tropis", "Verandas and tropical gardens", "Веранды и тропический сад"],
    ["Furnitur jati bleached buatan tangan", "Handmade bleached-teak furniture", "Мебель ручной работы из беленого тика"],
    ["Jendela kaca tempered dari lantai ke plafon", "Floor-to-ceiling tempered glass windows", "Панорамные окна из закалённого стекла"],
    ["Sistem alarm keamanan", "Security alarm system", "Охранная сигнализация"],
    ["Paviliun staf: 2 KT, dapur, KM, laundry, 4 gudang", "Staff pavilion: 2 bedrooms, kitchen, bathroom, laundry, 4 storerooms", "Домик персонала: 2 спальни, кухня, санузел, прачечная, 4 кладовые"],
    ["Villa modern 3 kamar tidur dekat GWK (Type 1)", "Modern 3-bedroom villa near GWK (Type 1)", "Современная вилла с 3 спальнями у GWK (тип 1)"],
    ["Villa modern 3 kamar tidur dekat GWK (Type 2)", "Modern 3-bedroom villa near GWK (Type 2)", "Современная вилла с 3 спальнями у GWK (тип 2)"],
    ["Villa modern di kawasan villa berkembang Uluwatu – GWK. Cocok untuk hunian pribadi maupun investasi villa rental atau Airbnb.", "A modern villa in the growing Uluwatu – GWK villa area. Suits a private home or a villa rental / Airbnb investment.", "Современная вилла в развивающемся районе Улувату – GWK. Для жизни или инвестиций в аренду / Airbnb."],
    ["Kawasan villa berkembang di Uluwatu", "A growing villa area in Uluwatu", "Развивающийся район вилл в Улувату"],
    ["Cocok untuk villa rental / Airbnb", "Suits villa rental / Airbnb", "Подходит для аренды / Airbnb"],
    ["Dekat GWK, Melasti, Pandawa, dan beach club Uluwatu", "Near GWK, Melasti, Pandawa and Uluwatu beach clubs", "Рядом GWK, Меласти, Пандава и бич-клубы Улувату"],
    ["Akses ke bandara relatif mudah", "Fairly easy airport access", "Удобная дорога в аэропорт"],
    ["Akses ke Bandara Ngurah Rai relatif mudah", "Fairly easy access to Ngurah Rai Airport", "Удобная дорога в аэропорт Нгурах-Рай"],
    ["Nilai properti di Uluwatu terus naik", "Property values in Uluwatu keep rising", "Цены на недвижимость в Улувату растут"],
    ["Villa 3 kamar tidur dengan rooftop view laut di Ungasan", "3-bedroom villa with an ocean-view rooftop in Ungasan", "Вилла с 3 спальнями и крышей с видом на океан в Унгасане"],
    ["Villa modern fully furnished dengan private pool, rooftop berpemandangan lembah dan laut, serta ruang office dan mess staf. Legalitas lengkap dan terdaftar di Kementerian Pariwisata, siap untuk bisnis villa.", "A modern, fully furnished villa with a private pool, a rooftop overlooking the valley and ocean, plus an office and staff quarters. Full legal papers and registered with the Ministry of Tourism, ready for a villa business.", "Современная вилла с мебелью, частным бассейном, крышей с видом на долину и океан, офисом и жильём для персонала. Все документы, регистрация в Минтуризма — готова к арендному бизнесу."],
    ["Fully furnished, total 4 unit AC", "Fully furnished, 4 AC units in total", "Полностью меблирована, 4 кондиционера"],
    ["Ruang tamu luas dengan Smart TV, AC, kipas", "Spacious living room with Smart TV, AC and fan", "Просторная гостиная со Smart TV, кондиционером и вентилятором"],
    ["Dapur lengkap", "Fully equipped kitchen", "Оборудованная кухня"],
    ["Rooftop dengan view lembah dan laut", "Rooftop with valley and ocean views", "Крыша с видом на долину и океан"],
    ["Area mini sepak bola dan sepeda statis di lantai 2", "Mini football area and exercise bike on the 2nd floor", "Мини-футбол и велотренажёр на 2-м этаже"],
    ["Dekat pantai, kafe, dan pusat belanja", "Near beaches, cafés and shops", "Рядом пляжи, кафе и магазины"],
    ["Lingkungan tenang, dekat jalan utama", "Quiet area close to the main road", "Тихий район рядом с главной дорогой"],
    ["Villa 3 lantai dengan pool dan jacuzzi di Ungasan", "3-storey villa with pool and jacuzzi in Ungasan", "Трёхэтажная вилла с бассейном и джакузи в Унгасане"],
    ["Villa berdiri sendiri, tidak menempel rumah lain, di perumahan kecil yang tenang. Kolam renang luas 10 × 5 m dan jacuzzi pribadi. Cocok untuk hunian maupun investasi.", "A detached villa, not attached to other houses, in a small quiet estate. Large 10 × 5 m pool and private jacuzzi. Suits living or investment.", "Отдельно стоящая вилла в небольшом тихом комплексе. Большой бассейн 10 × 5 м и частное джакузи. Для жизни или инвестиций."],
    ["Jacuzzi pribadi", "Private jacuzzi", "Частное джакузи"],
    ["Teras depan dan belakang, balkon", "Front and back terraces, balcony", "Террасы спереди и сзади, балкон"],
    ["±10 menit ke Pepito Supermarket", "±10 min to Pepito Supermarket", "±10 мин до супермаркета Pepito"],
    ["±15 menit ke Pantai Pandawa", "±15 min to Pandawa Beach", "±15 мин до пляжа Пандава"],
    ["±15 menit ke Pantai Melasti", "±15 min to Melasti Beach", "±15 мин до пляжа Меласти"],
    ["Lingkungan tenang dengan privasi lebih", "Quiet surroundings with extra privacy", "Тихое место с высокой приватностью"],
    ["Properti hospitality 20 are dengan 18 kamar di Tibubeneng", "20-are hospitality property with 18 rooms in Tibubeneng", "Гостиничный объект 20 ар с 18 номерами в Тибубененге"],
    ["Properti komersial berisi rumah, penginapan, restoran, dan tiga kolam renang di kawasan Tibubeneng – Canggu, dikelilingi villa, akomodasi wisata, dan area komersial. Siap untuk dioperasikan atau dikembangkan.", "A commercial property with a house, guest lodging, restaurant and three pools in Tibubeneng – Canggu, surrounded by villas, tourist accommodation and shops. Ready to operate or develop.", "Коммерческий объект: дом, гостевые номера, ресторан и три бассейна в Тибубененг – Чангу, среди вилл, туристического жилья и магазинов. Готов к работе или развитию."],
    ["Restoran / warung", "Restaurant / warung", "Ресторан / варунг"],
    ["Lounge dan gazebo", "Lounge and gazebo", "Лаунж и беседка"],
    ["Parkir mobil dan motor", "Car and motorbike parking", "Парковка для машин и байков"],
    ["Area staf dan gudang", "Staff area and storage", "Зона персонала и склад"],
    ["Rumah 5 kamar tidur dekat Bandara Ngurah Rai", "5-bedroom house near Ngurah Rai Airport", "Дом с 5 спальнями рядом с аэропортом Нгурах-Рай"],
    ["Rumah di atas tanah 400 m² (20 × 20 m) dengan carport untuk 3 mobil. Terdiri dari 2 SHM masing-masing 2 are.", "A house on 400 m² of land (20 × 20 m) with a carport for 3 cars. Made up of 2 SHM titles of 2 are each.", "Дом на участке 400 м² (20 × 20 м) с навесом на 3 машины. Два сертификата SHM по 2 ара."],

    ["Villa modern 3 kamar tidur di Berawa", "Modern 3-bedroom villa in Berawa", "Современная вилла с 3 спальнями в Берава"],
    ["Berawa · Tibubeneng", "Berawa · Tibubeneng", "Берава · Тибубененг"],
    ["Villa modern mewah yang selesai dibangun September 2025, fully furnished, dengan private pool dan balkon sunset view. Bangunan 160 cm lebih tinggi dari jalan sehingga lebih privat dan sirkulasi udaranya lebih baik.", "A luxury modern villa completed in September 2025, fully furnished, with a private pool and a sunset-view balcony. The building sits 160 cm above the road for more privacy and better airflow.", "Роскошная современная вилла, построена в сентябре 2025 года, полностью меблирована, с частным бассейном и балконом с видом на закат. Дом на 160 см выше дороги — больше приватности и лучше проветривание."],
    ["Baru selesai 2025", "Completed 2025", "Построена в 2025"],
    ["Freehold / SHM (nego)", "Freehold / SHM (negotiable)", "Freehold / SHM (торг)"],
    ["Leasehold 25 tahun (nego)", "25-year leasehold (negotiable)", "Аренда на 25 лет (торг)"],
    ["3 ensuite", "3 ensuite", "3 с ванной"],
    ["3 ensuite + 1 powder room", "3 ensuite + 1 powder room", "3 с ванной + 1 гостевой туалет"],
    ["Private, 4 × 7 m", "Private, 4 × 7 m", "Частный, 4 × 7 м"],
    ["Selesai dibangun", "Completed", "Год постройки"],
    ["September 2025", "September 2025", "Сентябрь 2025"],
    ["SHM (freehold)", "SHM (freehold)", "SHM (freehold)"],
    ["Perizinan", "Permits", "Разрешения"],
    ["PBG Pondok Wisata", "PBG guesthouse permit (Pondok Wisata)", "PBG, лицензия гостевого дома (Pondok Wisata)"],
    ["Ke pantai", "To the beach", "До пляжа"],
    ["Fully furnished dengan interior modern mewah", "Fully furnished with a luxury modern interior", "Полностью меблирована, роскошный современный интерьер"],
    ["Kamar ART (maid's quarter)", "Maid's quarters", "Комната для персонала"],
    ["Balkon dengan sitting area dan sunset view", "Balcony with seating area and sunset view", "Балкон с зоной отдыха и видом на закат"],
    ["Parkir luas untuk beberapa kendaraan", "Ample parking for several vehicles", "Просторная парковка на несколько машин"],
    ["Konstruksi dan finishing berkualitas tinggi", "High-quality construction and finishing", "Качественное строительство и отделка"],
    ["±500 m ke Pepito dan Prestige Supermarket", "±500 m to Pepito and Prestige supermarkets", "±500 м до супермаркетов Pepito и Prestige"],
    ["±300 m ke pasar tradisional dan Alpha Gym", "±300 m to the local market and Alpha Gym", "±300 м до местного рынка и Alpha Gym"],
    ["Dikelilingi restoran, kafe, dan pusat belanja", "Surrounded by restaurants, cafés and shops", "Рядом рестораны, кафе и магазины"],
    ["Rumah modern Victorian 2 lantai di Dalung Tegal Jaya", "2-storey modern Victorian house in Dalung Tegal Jaya", "Двухэтажный дом в стиле модерн-викториан в Далунг Тегал Джая"],
    ["Dalung Tegal Jaya · Kuta Utara", "Dalung Tegal Jaya · North Kuta", "Далунг Тегал Джая · Северная Кута"],
    ["Rumah bergaya modern Victorian dengan pilar elegan dan finishing premium, dua lantai yang nyaman. Akses mudah ke Canggu. Bisa dibeli (freehold) atau disewa jangka panjang (leasehold).", "A modern Victorian-style home with elegant pillars, premium finishes and a comfortable two-storey layout. Easy access to Canggu. Available freehold or as a long-term leasehold.", "Дом в стиле модерн-викториан с элегантными колоннами, премиальной отделкой и удобной двухэтажной планировкой. Удобная дорога в Чангу. Продажа (freehold) или долгосрочная аренда (leasehold)."],
    ["Leasehold 15 tahun", "15-year leasehold", "Аренда на 15 лет"],
    ["Leasehold 20 tahun", "20-year leasehold", "Аренда на 20 лет"],
    ["Pajak sewa", "Lease tax", "Налог на аренду"],
    ["Dibagi 50:50", "Split 50:50", "Пополам 50:50"],
    ["3 + 1", "3 + 1", "3 + 1"],
    ["SHM, IMB", "SHM, IMB (building permit)", "SHM, IMB (разрешение на строительство)"],
    ["Lantai kayu dan granit", "Wood and granite floors", "Полы из дерева и гранита"],
    ["Kitchen set bergaya Victorian", "Victorian-style kitchen set", "Кухня в викторианском стиле"],
    ["Balkon", "Balcony", "Балкон"],
    ["Taman kecil dan kolam ikan", "Small garden and fish pond", "Небольшой сад и пруд с рыбками"],
    ["Pagar dan pintu gerbang besi tempa", "Wrought-iron fence and gate", "Кованый забор и ворота"],
    ["Akses mudah ke Canggu", "Easy access to Canggu", "Удобная дорога в Чангу"],
    ["Villa baru 3 lantai ocean view Nusa Penida di Ketewel", "New 3-storey villa with Nusa Penida ocean views in Ketewel", "Новая трёхэтажная вилла с видом на океан и Нуса Пениду в Кетевеле"],
    ["Pantai Pabean · Ketewel", "Pabean Beach · Ketewel", "Пляж Пабеан · Кетевел"],
    ["Villa baru dengan pemandangan laut tanpa halangan ke arah Nusa Penida, hanya 100 meter dari Pantai Pabean. Pagi hari terlihat panorama Gunung Batukaru. Berada di lingkungan villa mewah, zona pariwisata (pink zone).", "A new villa with unobstructed ocean views towards Nusa Penida, just 100 metres from Pabean Beach. In the morning you can see Mount Batukaru. Set among luxury villas in a tourism (pink) zone.", "Новая вилла с открытым видом на океан и Нуса Пениду, всего 100 метров до пляжа Пабеан. По утрам видна гора Батукару. Район роскошных вилл, туристическая (розовая) зона."],
    ["Ocean view · 100 m ke pantai", "Ocean view · 100 m to the beach", "Вид на океан · 100 м до пляжа"],
    ["3 + 1 powder room", "3 + 1 powder room", "3 + 1 гостевой туалет"],
    ["1 mobil + 2 motor", "1 car + 2 motorbikes", "1 машина + 2 байка"],
    ["Bangunan baru, non-furnished", "New build, unfurnished", "Новый дом, без мебели"],
    ["Pink zone (pariwisata)", "Pink zone (tourism)", "Розовая зона (туризм)"],
    ["SHM, SLF dalam proses", "SHM; SLF in progress", "SHM; SLF в процессе"],
    ["Lantai 1: master bedroom menghadap pool, ruang keluarga, dapur terpisah dengan akses ke pool", "Floor 1: master bedroom facing the pool, family room, separate kitchen opening to the pool", "1-й этаж: главная спальня с видом на бассейн, гостиная, отдельная кухня с выходом к бассейну"],
    ["Lantai 2: dua kamar tidur dengan view laut dan Nusa Penida", "Floor 2: two bedrooms with views of the ocean and Nusa Penida", "2-й этаж: две спальни с видом на океан и Нуса Пениду"],
    ["Lantai 3: rooftop luas untuk ±20 orang, bisa ditambah mini bar dan jacuzzi", "Floor 3: large rooftop for about 20 people, room to add a mini bar and jacuzzi", "3-й этаж: большая крыша примерно на 20 человек, можно добавить мини-бар и джакузи"],
    ["±15 menit ke RS internasional Sanur dan ICON Bali Mall", "±15 min to the international hospital in Sanur and ICON Bali Mall", "±15 мин до международной больницы в Сануре и ICON Bali Mall"],
    ["±15 menit ke pusat pemerintahan dan Plaza Renon", "±15 min to the government centre and Plaza Renon", "±15 мин до правительственного центра и Plaza Renon"],
    ["±35 menit ke Bandara Ngurah Rai", "±35 min to Ngurah Rai Airport", "±35 мин до аэропорта Нгурах-Рай"],
    ["Rumah 2 kamar tidur di perumahan one gate Pering", "2-bedroom house in a gated estate in Pering", "Дом с 2 спальнями в охраняемом комплексе в Перинге"],
    ["Pering · Blahbatuh", "Pering · Blahbatuh", "Перинг · Блахбату"],
    ["Rumah di perumahan dengan sistem one gate yang nyaman dan aman, di atas tanah 210 m² sehingga masih ada ruang untuk dikembangkan. Cocok untuk tempat tinggal maupun investasi. Sewa jangka panjang juga bisa.", "A house in a comfortable, secure one-gate estate, on 210 m² of land with room to expand. Suits living or investment. Long-term lease is also possible.", "Дом в уютном охраняемом комплексе с одним въездом, на участке 210 м² с местом для расширения. Для жизни или инвестиций. Возможна долгосрочная аренда."],
    ["Bisa, tanya harga", "Available, ask for price", "Возможна, цена по запросу"],
    ["Perumahan one gate system", "One-gate residential estate", "Комплекс с одним въездом"],
    // ---------- Form inquiry ----------
    ["Form Inquiry – Bali Are Property", "Inquiry Form – Bali Are Property", "Форма запроса – Bali Are Property"],
    ["← Lihat semua listing", "← See all listings", "← Все объекты"],
    ["Bali Are Property · Seluruh Bali", "Bali Are Property · All of Bali", "Bali Are Property · Весь Бали"],
    ["Form Inquiry Properti", "Property Inquiry Form", "Форма запроса"],
    ["Form Inquiry Buyer", "Buyer Inquiry Form", "Запрос покупателя"],
    ["Form Titip Jual Properti", "List Your Property", "Продать недвижимость"],
    ["Isi kebutuhan Anda, lalu kirim langsung ke WhatsApp kami. Tim kami akan membalas dengan pilihan properti yang cocok.", "Fill in what you need and send it straight to our WhatsApp. We'll reply with matching properties.", "Заполните форму и отправьте её нам в WhatsApp. Мы ответим подходящими вариантами."],
    ["Ceritakan properti yang Anda cari di Bali. Pesan langsung terkirim ke WhatsApp kami dan kami balas dengan pilihan yang cocok.", "Tell us what property you're looking for in Bali. Your message goes straight to our WhatsApp and we'll reply with matching options.", "Расскажите, какую недвижимость на Бали вы ищете. Сообщение придёт нам в WhatsApp, и мы ответим подходящими вариантами."],
    ["Isi spesifikasi properti Anda. Data lengkap membuat listing lebih cepat tayang dan lebih mudah dicocokkan dengan buyer.", "Fill in your property's details. Complete information gets your listing published faster and matched with buyers more easily.", "Укажите параметры вашего объекта. Полные данные ускоряют публикацию и подбор покупателя."],
    ["Saya mencari properti", "I'm looking for a property", "Ищу недвижимость"],
    ["Buyer · beli atau sewa tanah / villa", "Buyer · buy or lease land / villa", "Покупатель · купить или арендовать"],
    ["Saya ingin menjual properti", "I want to sell my property", "Хочу продать недвижимость"],
    ["Owner · titip jual atau sewakan", "Owner · sell or lease through us", "Владелец · продать или сдать через нас"],
    ["Pesan WhatsApp", "WhatsApp message", "Сообщение в WhatsApp"],
    ["pratinjau", "preview", "просмотр"],
    ["Kirim via WhatsApp", "Send via WhatsApp", "Отправить в WhatsApp"],
    ["Salin", "Copy", "Копировать"],
    ["Tersalin", "Copied", "Скопировано"],
    ["Teks dipilih", "Text selected", "Текст выделен"],
    ["Kosongkan form", "Clear form", "Очистить форму"],
    ["WhatsApp:", "WhatsApp:", "WhatsApp:"],
    ["Wajib diisi", "Required", "Обязательно"],
    ["Pilih…", "Choose…", "Выберите…"],
    ["Pilih kecamatan…", "Choose district…", "Выберите район…"],
    ["Pilih kabupaten dulu", "Choose a regency first", "Сначала выберите округ"],
    ["Siap dikirim. Tekan tombol di bawah untuk membuka WhatsApp.", "Ready to send. Tap the button below to open WhatsApp.", "Готово. Нажмите кнопку ниже, чтобы открыть WhatsApp."],
    ["Setelah pesan terkirim, Anda bisa langsung kirim referensi foto atau lokasi yang Anda suka di chat yang sama.", "Once the message is sent, you can share reference photos or locations you like in the same chat.", "После отправки можете прислать в тот же чат фото или локации, которые вам нравятся."],
    ["Setelah pesan terkirim, kirim foto/video lokasi dan foto sertifikat di chat yang sama agar listing bisa segera dipasang.", "Once the message is sent, share photos/videos of the site and the certificate in the same chat so we can publish your listing quickly.", "После отправки пришлите в тот же чат фото/видео объекта и сертификата, чтобы мы быстрее опубликовали объявление."],
    ["Halo Bali Are Property, saya sedang *mencari properti* di Bali. Berikut kebutuhan saya:", "Hello Bali Are Property, I'm *looking for a property* in Bali. Here is what I need:", "Hello Bali Are Property, I'm *looking for a property* in Bali. Here is what I need:"],
    ["Halo Bali Are Property, saya ingin *menawarkan properti* saya. Berikut detailnya:", "Hello Bali Are Property, I'd like to *offer my property*. Here are the details:", "Hello Bali Are Property, I'd like to *offer my property*. Here are the details:"],
    ["Terima kasih.", "Thank you.", "Спасибо."],
    ["Data diri", "Your details", "Ваши данные"],
    ["Data pemilik", "Owner details", "Данные владельца"],
    ["Properti yang dicari", "Property wanted", "Что вы ищете"],
    ["Kriteria lahan & legalitas", "Land & legal criteria", "Участок и документы"],
    ["Budget & waktu", "Budget & timing", "Бюджет и сроки"],
    ["Properti & lokasi", "Property & location", "Объект и локация"],
    ["Spesifikasi lahan", "Land specifications", "Характеристики участка"],
    ["Lewati jika tanah kosong.", "Skip if it's vacant land.", "Пропустите, если это пустой участок."],
    ["Harga & kerja sama", "Price & terms", "Цена и условия"],
    ["Nama lengkap", "Full name", "Полное имя"],
    ["No. WhatsApp", "WhatsApp number", "Номер WhatsApp"],
    ["Sertakan kode negara jika di luar Indonesia", "Include the country code if outside Indonesia", "Укажите код страны, если вы не в Индонезии"],
    ["Email", "Email", "Email"],
    ["Kewarganegaraan", "Nationality", "Гражданство"],
    ["WNA umumnya lewat leasehold atau PT PMA", "Foreigners usually buy via leasehold or a PT PMA company", "Иностранцы обычно покупают через аренду (leasehold) или компанию PT PMA"],
    ["Tanah kosong", "Vacant land", "Пустой участок"],
    ["Ruko / Komersial", "Shophouse / Commercial", "Магазин / коммерция"],
    ["Apartemen / Kondotel", "Apartment / Condotel", "Апартаменты / кондотель"],
    ["Hotel / Resort", "Hotel / Resort", "Отель / курорт"],
    ["Ingin", "I want to", "Хочу"],
    ["Beli (freehold / hak milik)", "Buy (freehold)", "Купить (в собственность)"],
    ["Sewa jangka panjang (leasehold)", "Long-term lease (leasehold)", "Долгосрочная аренда (leasehold)"],
    ["Terbuka keduanya", "Open to both", "Рассмотрю оба"],
    ["Tujuan", "Purpose", "Цель"],
    ["Bangun villa sewa", "Build a rental villa", "Построить виллу для аренды"],
    ["Kavling / pengembangan", "Subdivision / development", "Нарезка / девелопмент"],
    ["Kabupaten / kota yang diminati", "Preferred regencies / city", "Желаемые округа / город"],
    ["Pilih satu atau lebih, lalu persempit ke kecamatan di bawahnya", "Choose one or more, then narrow down to districts below", "Выберите один или несколько, затем уточните районы ниже"],
    ["Terbuka, di mana saja", "Open, anywhere", "Где угодно"],
    ["Kecamatan", "District", "Район"],
    ["Kosongkan jika terbuka di seluruh kabupaten yang dipilih", "Leave empty if any district in the chosen regency is fine", "Оставьте пустым, если подходит весь округ"],
    ["Kawasan spesifik (opsional)", "Specific area (optional)", "Конкретное место (необязательно)"],
    ["mis. Canggu, Ubud, Uluwatu, Amed", "e.g. Canggu, Ubud, Uluwatu, Amed", "напр. Чангу, Убуд, Улувату, Амед"],
    ["Luas tanah minimal", "Minimum land size", "Мин. площадь участка"],
    ["Luas tanah maksimal", "Maximum land size", "Макс. площадь участка"],
    ["Kamar tidur (jika bangunan)", "Bedrooms (if built)", "Спальни (если есть дом)"],
    ["Tidak perlu", "Not needed", "Не нужно"],
    ["Studio", "Studio", "Студия"],
    ["Lebar jalan akses minimal", "Minimum access road width", "Мин. ширина подъезда"],
    ["Bebas", "Any", "Любая"],
    ["± 3 m (mobil kecil)", "± 3 m (small car)", "± 3 м (малолитражка)"],
    ["± 4 m (2 mobil)", "± 4 m (2 cars)", "± 4 м (2 машины)"],
    ["≥ 6 m (truk material)", "≥ 6 m (trucks)", "≥ 6 м (грузовики)"],
    ["View / lokasi", "View / location", "Вид / расположение"],
    ["Sunset view", "Sunset view", "Вид на закат"],
    ["Tepi tebing", "Cliff edge", "У обрыва"],
    ["Dekat pantai (< 2 km)", "Near the beach (< 2 km)", "Рядом с пляжем (< 2 км)"],
    ["Tidak harus", "Not required", "Не обязательно"],
    ["Sertifikat yang diterima", "Accepted titles", "Подходящие документы"],
    ["SHM (hak milik)", "SHM (freehold)", "SHM (собственность)"],
    ["HGB", "HGB (right to build)", "HGB (право застройки)"],
    ["Hak sewa / leasehold", "Leasehold", "Аренда (leasehold)"],
    ["Hak sewa (leasehold)", "Leasehold", "Аренда (leasehold)"],
    ["Belum paham", "Not sure yet", "Пока не разбираюсь"],
    ["Pariwisata (pink)", "Tourism (pink)", "Туристическая (розовая)"],
    ["Permukiman (kuning)", "Residential (yellow)", "Жилая (жёлтая)"],
    ["Pertanian / jalur hijau", "Agricultural / green belt", "Сельхоз / зелёная зона"],
    ["Belum tahu", "Don't know yet", "Пока не знаю"],
    ["Villa sewa / usaha akomodasi butuh zonasi pariwisata", "Rental villas / accommodation businesses need tourism zoning", "Для аренды вилл и гостиничного бизнеса нужна туристическая зона"],
    ["Budget minimal", "Minimum budget", "Мин. бюджет"],
    ["Budget maksimal", "Maximum budget", "Макс. бюджет"],
    ["Cara bayar", "Payment method", "Способ оплаты"],
    ["Cash keras", "Cash in full", "Полная оплата"],
    ["Cash bertahap", "Cash in instalments", "Рассрочка"],
    ["KPR / pembiayaan bank", "Mortgage / bank financing", "Ипотека / банк"],
    ["Rencana transaksi", "Planned timing", "Сроки сделки"],
    ["Secepatnya (< 1 bulan)", "As soon as possible (< 1 month)", "Как можно скорее (< 1 месяца)"],
    ["1–3 bulan", "1–3 months", "1–3 месяца"],
    ["3–6 bulan", "3–6 months", "3–6 месяцев"],
    ["Masih survei harga", "Still comparing prices", "Пока изучаю цены"],
    ["Survei lokasi", "Site visit", "Просмотр"],
    ["Bisa datang survei", "Can visit in person", "Могу приехать"],
    ["Video call dulu", "Video call first", "Сначала видеозвонок"],
    ["Tahu kami dari", "How did you find us", "Откуда вы о нас узнали"],
    ["Website", "Website", "Сайт"],
    ["Teman / referensi", "Friend / referral", "Друзья / рекомендация"],
    ["Lainnya", "Other", "Другое"],
    ["Catatan tambahan", "Additional notes", "Дополнительно"],
    ["Mis. harus bisa dibangun 3 lantai, dekat sekolah internasional, dsb.", "E.g. must allow 3 storeys, near an international school, etc.", "Напр. можно строить 3 этажа, рядом международная школа и т.п."],
    ["Mis. alasan jual, bisa bayar bertahap, ada bangunan semi permanen, dsb.", "E.g. reason for selling, instalments possible, semi-permanent structures on site, etc.", "Напр. причина продажи, возможна рассрочка, есть временные постройки и т.п."],
    ["Anda sebagai", "You are", "Вы"],
    ["Pemilik langsung", "The owner", "Собственник"],
    ["Keluarga / ahli waris", "Family / heir", "Родственник / наследник"],
    ["Kuasa pemilik", "Owner's representative", "Представитель владельца"],
    ["Agen / perantara", "Agent / broker", "Агент / посредник"],
    ["Ditawarkan untuk", "Offered for", "Предлагается"],
    ["Dijual (freehold)", "Sale (freehold)", "Продажа (в собственность)"],
    ["Disewakan (leasehold)", "Lease (leasehold)", "Аренда (leasehold)"],
    ["Dijual atau disewakan", "Sale or lease", "Продажа или аренда"],
    ["Kabupaten / kota", "Regency / city", "Округ / город"],
    ["Desa / kelurahan", "Village", "Деревня"],
    ["mis. Pererenan", "e.g. Pererenan", "напр. Перененан"],
    ["Nama jalan / banjar", "Street / banjar", "Улица / банджар"],
    ["Link Google Maps", "Google Maps link", "Ссылка Google Maps"],
    ["Buka Google Maps, tekan lokasi, pilih Bagikan, lalu tempel di sini", "Open Google Maps, tap the location, choose Share, then paste it here", "Откройте Google Maps, нажмите на точку, выберите «Поделиться» и вставьте сюда"],
    ["Ukuran lebar × panjang", "Width × length", "Ширина × длина"],
    ["mis. 15 × 20 m", "e.g. 15 × 20 m", "напр. 15 × 20 м"],
    ["Lebar jalan akses", "Access road width", "Ширина подъезда"],
    ["< 3 m (gang / motor)", "< 3 m (lane / motorbike)", "< 3 м (переулок / байк)"],
    ["3–4 m (1 mobil)", "3–4 m (1 car)", "3–4 м (1 машина)"],
    ["4–6 m (2 mobil)", "4–6 m (2 cars)", "4–6 м (2 машины)"],
    ["> 6 m (truk masuk)", "> 6 m (trucks fit)", "> 6 м (проезд грузовиков)"],
    ["Jarak ke pantai terdekat", "Distance to nearest beach", "До ближайшего пляжа"],
    ["mis. 1,5 km ke Balangan", "e.g. 1.5 km to Balangan", "напр. 1,5 км до Баланган"],
    ["Sedikit berkontur", "Slightly sloped", "Небольшой уклон"],
    ["Berkontur / tebing", "Sloped / cliff", "Уклон / обрыв"],
    ["View GWK / perbukitan", "GWK / hill view", "Вид на GWK / холмы"],
    ["Tanpa view khusus", "No particular view", "Без особого вида"],
    ["Utilitas tersedia", "Available utilities", "Коммуникации"],
    ["Listrik PLN", "Grid electricity", "Электричество"],
    ["Air PDAM", "Mains water", "Водопровод"],
    ["Sumur bor", "Bore well", "Скважина"],
    ["Internet / fiber", "Internet / fibre", "Интернет / оптика"],
    ["Jumlah lantai", "Floors", "Этажей"],
    ["Tahun dibangun", "Year built", "Год постройки"],
    ["Fasilitas", "Facilities", "Удобства"],
    ["Full furnished", "Fully furnished", "С мебелью"],
    ["Semi furnished", "Semi-furnished", "Частично с мебелью"],
    ["Carport / garasi", "Carport / garage", "Навес / гараж"],
    ["Rooftop", "Rooftop", "Крыша-терраса"],
    ["Taman", "Garden", "Сад"],
    ["PBG / IMB", "Building permit (PBG / IMB)", "Разрешение (PBG / IMB)"],
    ["Ada", "Yes", "Есть"],
    ["Sedang proses", "In progress", "В процессе"],
    ["Belum ada", "Not yet", "Пока нет"],
    ["Kondisi saat ini", "Current status", "Текущее состояние"],
    ["Kosong", "Vacant", "Свободна"],
    ["Ditempati pemilik", "Owner-occupied", "Живёт владелец"],
    ["Sedang disewakan", "Currently rented", "Сдаётся"],
    ["SHM (hak milik)", "SHM (freehold)", "SHM (собственность)"],
    ["Girik / Petok D", "Girik / Petok D (customary)", "Girik / Petok D (традиционный)"],
    ["Sertifikat atas nama", "Title in the name of", "Документ оформлен на"],
    ["Nama sendiri", "Myself", "На меня"],
    ["Pihak lain", "Someone else", "Другое лицо"],
    ["Bebas sengketa & tidak dijaminkan di bank", "Free of disputes & not mortgaged", "Без споров и не в залоге"],
    ["Ya", "Yes", "Да"],
    ["Tidak", "No", "Нет"],
    ["PBB tahun ini", "This year's land tax (PBB)", "Налог (PBB) за этот год"],
    ["Lunas", "Paid", "Оплачен"],
    ["Belum lunas", "Not paid", "Не оплачен"],
    ["Harga yang Anda isi", "Price you're entering", "Вы указываете цену"],
    ["Harga per are", "Price per are", "Цена за ар"],
    ["Harga total", "Total price", "Общая цена"],
    ["Durasi sewa (leasehold)", "Lease term (leasehold)", "Срок аренды (leasehold)"],
    ["Sifat harga", "Price type", "Тип цены"],
    ["Masih nego", "Negotiable", "Торг возможен"],
    ["Nett / harga pas", "Net / fixed price", "Фиксированная цена"],
    ["Bersedia memberi fee marketing", "Willing to pay a marketing fee", "Готовы платить комиссию"],
    ["Ya, sesuai kesepakatan", "Yes, as agreed", "Да, по договорённости"],
    ["Perlu dibicarakan", "To be discussed", "Обсудим"],
    ["Foto / video tersedia", "Photos / video available", "Фото / видео"],
    ["Foto dan video", "Photos and video", "Фото и видео"],
    ["Foto saja", "Photos only", "Только фото"],
    ["Investasi jangka panjang", "Long-term investment", "Долгосрочные инвестиции"],
    ["tahun", "years", "лет"],
    ["thn", "yr", "г."],
    ["Total", "Total", "Общая"],
    ["Estimasi total", "Estimated total", "Estimated total"],
    ["Setara per are", "Equivalent per are", "Equivalent per are"],
    ["1 are = 100 m²", "1 are = 100 m²", "1 ар = 100 м²"],
    ["Nomor terpilih, tekan salin", "Number selected, press copy", "Номер выделен, нажмите «Копировать»"],
    ["Detail listing", "Listing details", "Подробнее"],
    ["Listing lainnya di area ini", "More listings in this area", "Другие объекты в этом районе"],
    ["Land, villas and houses for sale in Bali", "Land, villas and houses for sale in Bali", "Земля, виллы и дома на Бали"]
  ];

  // Pola dengan angka (bagian $1, $2 ikut diformat angkanya)
  var P = [
    [/^(\d+) listing · (\d+) area$/, "$1 listings · $2 areas", "Объектов: $1 · районов: $2"],
    [/^Area (.+)$/, "$1 area", "Район $1"],
    [/^Kabupaten (.+) · (\d+) listing$/, "$1 Regency · $2 listings", "Округ $1 · объектов: $2"],
    [/^Total (.+) \(nego\)$/, "Total $1 (negotiable)", "Итого $1 (торг)"],
    [/^Total (.+)$/, "Total $1", "Итого $1"],
    [/^Per bidang · (.+)$/, "Per plot · $1", "За участок · $1"],
    [/^Dua bidang · (.+)$/, "Both plots · $1", "Два участка · $1"],
    [/^Kavling ([AB]) · (.+)$/, "Plot $1 · $2", "Участок $1 · $2"],
    [/^Gandeng · (.+)$/, "Combined · $1", "Вместе · $1"],
    // form inquiry
    [/^(\d+) isian wajib \(\*\) belum lengkap$/, "$1 required fields (*) still empty", "Не заполнено обязательных полей (*): $1"],
    [/^Lengkapi (\d+) isian bertanda merah dulu\.$/, "Please complete the $1 fields marked in red.", "Заполните отмеченные красным поля: $1."],
    [/^= (.+) are$/, "= $1 are", "= $1 ар"],
    [/^Estimasi total: (.+)$/, "Estimated total: $1", "Итого примерно: $1"],
    [/^Setara per are: (.+)$/, "Equivalent per are: $1", "В пересчёте на ар: $1"]
  ];

  var MAP = {};
  D.forEach(function (r) { MAP[r[0]] = r; });
  var LANGS = ["id", "en", "ru"];
  var lang = "id";

  function num(s, l) {
    if (l === "id") return s;
    s = s.replace(/\d[\d.,]*\d|\d/g, function (n) {
      if (/^\d{4}$/.test(n)) return n;
      return l === "en" ? n.replace(/[.,]/g, function (c) { return c === "." ? "," : "."; })
                        : n.replace(/\./g, " ");
    });
    if (l === "en") {
      s = s.replace(/(\d) M\b/g, "$1B").replace(/\bMiliar\b/g, "billion").replace(/\bjt\b/g, "million")
           .replace(/\bmenit\b/g, "min").replace(/\btahun\b/g, "years");
    } else {
      s = s.replace(/(\d) M\b/g, "$1 млрд").replace(/\bMiliar\b/g, "млрд").replace(/\bjt\b/g, "млн")
           .replace(/m²/g, "м²").replace(/\bare\b/g, "ар").replace(/\bha\b/g, "га").replace(/\bkm\b/g, "км")
           .replace(/(\d) m\b/g, "$1 м").replace(/\bmenit\b/g, "мин").replace(/\bwatt\b/g, "Вт").replace(/\btahun\b/g, "лет");
    }
    return s;
  }

  function tr(s, l) {
    l = l || lang;
    if (l === "id" || !s) return s;
    var i = l === "en" ? 1 : 2;
    var key = s.replace(/\s+/g, " ").trim();
    if (MAP[key]) return MAP[key][i];
    for (var k = 0; k < P.length; k++) {
      var m = key.match(P[k][0]);
      if (m) return P[k][i].replace(/\$(\d)/g, function (_, d) { return num(m[d], l); });
    }
    return num(key, l);
  }

  var store = new WeakMap();
  function swapText(node) {
    var rec = store.get(node);
    if (!rec || node.data !== rec.last) { rec = { orig: node.data }; store.set(node, rec); }
    var o = rec.orig, t = o.trim();
    if (!t) return;
    var out = lang === "id" ? o : o.replace(t, tr(t));
    if (node.data !== out) node.data = out;
    rec.last = out;
  }
  function swapAttr(el, a) {
    var k = "i18n" + a;
    if (el[k] === undefined || el.getAttribute(a) !== el[k + "Last"]) el[k] = el.getAttribute(a);
    var v = lang === "id" ? el[k] : tr(el[k]);
    el.setAttribute(a, v); el[k + "Last"] = v;
  }

  function waLinks(root) {
    root.querySelectorAll('a[href*="wa.me/"]').forEach(function (a) {
      if (a.closest("[data-noi18n]")) return;
      if (!a.dataset.hrefId) a.dataset.hrefId = a.getAttribute("href");
      if (lang === "id") { a.setAttribute("href", a.dataset.hrefId); return; }
      var card = a.closest("article, .card");
      var h = card && card.querySelector("h4, h3");
      var orig = decodeURIComponent((a.dataset.hrefId.split("text=")[1] || ""));
      var title = h ? tr(h.dataset.i18nOrig || h.textContent.trim(), "en") : "";
      var msg = !title ? "Hello Pak Bagoes, I'd like information about your property listings."
        : /SOLD/.test(orig) ? "Hello Pak Bagoes, I saw the listing \"" + title + "\" is sold. Do you have similar land available?"
        : "Hello Pak Bagoes, I'm interested in the listing \"" + title + "\". Could you send me more details?";
      if (lang === "ru") msg += " (Russian-speaking client)";
      a.setAttribute("href", a.dataset.hrefId.split("?")[0] + "?text=" + encodeURIComponent(msg));
    });
  }

  function apply(root) {
    root = root || document.body;
    root.querySelectorAll("h4, h3").forEach(function (h) { if (!h.dataset.i18nOrig) h.dataset.i18nOrig = h.textContent.trim(); });
    var w = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
      acceptNode: function (n) {
        var p = n.parentNode;
        if (!p || /^(SCRIPT|STYLE|NOSCRIPT)$/.test(p.nodeName) || (p.closest && p.closest("[data-noi18n]"))) return NodeFilter.FILTER_REJECT;
        return NodeFilter.FILTER_ACCEPT;
      }
    });
    var n; while ((n = w.nextNode())) swapText(n);
    root.querySelectorAll("[placeholder]").forEach(function (el) { if (!el.closest("[data-noi18n]")) swapAttr(el, "placeholder"); });
    waLinks(root);
  }

  function setLang(l, save) {
    if (LANGS.indexOf(l) < 0) l = "id";
    lang = l;
    document.documentElement.lang = l;
    if (!document.i18nTitle) document.i18nTitle = document.title;
    document.title = lang === "id" ? document.i18nTitle : tr(document.i18nTitle);
    document.querySelectorAll(".lang-btn").forEach(function (b) { b.setAttribute("aria-pressed", b.dataset.lang === l ? "true" : "false"); });
    if (save) { try { localStorage.setItem("bap_lang", l); } catch (e) {} }
    apply(document.body);
    document.dispatchEvent(new CustomEvent("bap:lang", { detail: l }));
  }

  window.BAP_I18N = { tr: tr, apply: apply, setLang: setLang, get lang() { return lang; } };

  function init() {
    var root = document.documentElement;
    var st = root.getAttribute("data-static-lang");   // halaman sudah diterjemahkan (untuk Google)
    var pl = root.getAttribute("data-page-lang");     // halaman diterjemahkan saat dibuka (form)
    var q = (location.search.match(/[?&]lang=(id|en|ru)/) || [])[1], saved;
    try { saved = localStorage.getItem("bap_lang"); } catch (e) {}
    var fixed = st || pl;
    if (fixed) {
      // Bendera = link ke versi bahasa lain; simpan pilihan sebelum pindah halaman
      document.querySelectorAll("a.lang-btn").forEach(function (b) {
        b.addEventListener("click", function () {
          try { localStorage.setItem("bap_lang", b.dataset.lang); } catch (e) {}
          if (location.hash) b.href = b.href.split("#")[0] + location.hash;
        });
      });
      var want = q || saved;
      if (want && want !== fixed) {
        var alt = document.querySelector('a.lang-btn[data-lang="' + want + '"]');
        if (alt && alt.href) { location.replace(alt.href.split("#")[0] + location.hash); return; }
      }
      if (q) { try { localStorage.setItem("bap_lang", q); } catch (e) {} }
      if (st) {
        lang = st;
        document.querySelectorAll(".lang-btn").forEach(function (b) { b.setAttribute("aria-current", b.dataset.lang === st ? "true" : "false"); });
      } else setLang(pl, false);
    } else {
      document.querySelectorAll(".lang-btn").forEach(function (b) {
        b.addEventListener("click", function (e) { e.preventDefault(); setLang(b.dataset.lang, true); });
      });
      setLang(q || saved || "id", !!q);
    }
    // Teks yang berubah setelah halaman dimuat (form, tombol salin) ikut diterjemahkan
    var ok = function (n) {
      var p = n.parentNode;
      return p && !/^(SCRIPT|STYLE|NOSCRIPT)$/.test(p.nodeName) && !(p.closest && p.closest("[data-noi18n]"));
    };
    new MutationObserver(function (muts) {
      if (lang === "id") return;
      muts.forEach(function (m) {
        if (m.type === "characterData") { if (ok(m.target)) swapText(m.target); return; }
        m.addedNodes.forEach(function (n) {
          if (n.nodeType === 3) { if (ok(n)) swapText(n); }
          else if (n.nodeType === 1 && !(n.closest && n.closest("[data-noi18n]"))) apply(n);
        });
      });
    }).observe(document.body, { subtree: true, childList: true, characterData: true });
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init); else init();
})();
