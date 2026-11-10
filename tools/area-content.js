// Halaman per area (SEO): area/<slug>.html, en/area/<slug>.html, ru/area/<slug>.html.
// Listing dipilih otomatis dari listings.html: cocok bila data-area kartu ada di `areas`
// ATAU teks eyebrow kartu cocok dengan `eyebrow` (regex). Halaman hanya dibuat bila ada ≥ MIN listing.
// Menambah area baru: tambahkan objek di sini (3 bahasa), build ulang. Urutan = urutan tampil di menu area.
const MIN = 2;
const AREAS = [
  { slug: "kuta-selatan", areas: ["kuta-selatan"], region: "Badung",
    name: { id: "Kuta Selatan", en: "South Kuta", ru: "Южная Кута" },
    title: { id: "Tanah & Villa Dijual di Kuta Selatan (Bukit), Bali", en: "Land & Villas for Sale in South Kuta (Bukit), Bali", ru: "Земля и виллы на продажу в Южной Куте (Букит), Бали" },
    intro: {
      id: "Kuta Selatan adalah semenanjung Bukit di ujung selatan Bali: Ungasan, Jimbaran, Pecatu–Uluwatu, Kutuh–Pandawa, Balangan, sampai Nusa Dua. Kawasan tebing dan pantai ini menjadi pusat villa, resort, dan beach club, dekat Bandara Ngurah Rai lewat Jalan Tol Bali Mandara dan by pass. Inilah area utama Bali Are Property sejak 2009.",
      en: "South Kuta is the Bukit peninsula at Bali's southern tip: Ungasan, Jimbaran, Pecatu–Uluwatu, Kutuh–Pandawa, Balangan and Nusa Dua. Its clifftops and beaches are home to villas, resorts and beach clubs, close to Ngurah Rai Airport via the Bali Mandara toll road and the bypass. It has been Bali Are Property's core area since 2009.",
      ru: "Южная Кута — полуостров Букит на юге Бали: Унгасан, Джимбаран, Пекату–Улувату, Кутух–Пандава, Баланган и Нуса-Дуа. На скалах и у пляжей расположены виллы, курорты и бич-клубы, рядом аэропорт Нгурах-Рай (платная дорога Bali Mandara и объездная). Это основной район Bali Are Property с 2009 года." } },
  { slug: "ungasan", eyebrow: /Ungasan/i, region: "Kuta Selatan, Badung",
    name: { id: "Ungasan", en: "Ungasan", ru: "Унгасан" },
    title: { id: "Tanah & Villa Dijual di Ungasan, Bali", en: "Land & Villas for Sale in Ungasan, Bali", ru: "Земля и виллы на продажу в Унгасане, Бали" },
    intro: {
      id: "Ungasan berada di tengah Bukit, Kuta Selatan: dekat Pantai Melasti, Karma Kandara, GWK, dan deretan beach club di tebing selatan. Lingkungannya didominasi villa dan kompleks hunian, dengan banyak lahan berperuntukan permukiman. Cocok untuk villa pribadi, villa sewa, maupun pengembangan kompleks.",
      en: "Ungasan sits in the middle of the Bukit, South Kuta: close to Melasti Beach, Karma Kandara, GWK and the clifftop beach clubs of the south coast. The area is mostly villas and small residential complexes, with plenty of residential-zoned land. It suits a private villa, a rental villa or a complex development.",
      ru: "Унгасан находится в центре Букита, Южная Кута: рядом пляж Меласти, Karma Kandara, GWK и бич-клубы на южных скалах. Здесь в основном виллы и небольшие жилые комплексы, много земли с жилым зонированием. Подходит для личной виллы, виллы под аренду или строительства комплекса." } },
  { slug: "jimbaran", eyebrow: /Jimbaran|Balangan/i, region: "Kuta Selatan, Badung",
    name: { id: "Jimbaran & Balangan", en: "Jimbaran & Balangan", ru: "Джимбаран и Баланган" },
    title: { id: "Tanah & Villa Dijual di Jimbaran & Balangan, Bali", en: "Land & Villas for Sale in Jimbaran & Balangan, Bali", ru: "Земля и виллы на продажу в Джимбаране и Баланган, Бали" },
    intro: {
      id: "Jimbaran adalah gerbang Bukit yang paling dekat ke bandara, terkenal dengan teluk pantainya, resort besar, dan area perbukitan dengan pemandangan laut. Pantai Balangan di sisi baratnya menjadi kawasan villa dan surf yang tenang. Pilihan baik untuk hunian, villa sewa, dan aset jangka panjang.",
      en: "Jimbaran is the gateway to the Bukit and the closest part of it to the airport, known for its bay, large resorts and hillside areas with ocean views. Balangan Beach on its western side is a quieter villa and surf area. A good choice for a home, a rental villa or a long-term asset.",
      ru: "Джимбаран — ворота на Букит и ближайший к аэропорту район, известный заливом, крупными курортами и холмами с видом на океан. Пляж Баланган на западе — более тихий район вилл и сёрфинга. Хороший выбор для жилья, виллы под аренду или долгосрочного актива." } },
  { slug: "pecatu-uluwatu", eyebrow: /Pecatu|Uluwatu|Labuan Sait|Bingin|Padang/i, region: "Kuta Selatan, Badung",
    name: { id: "Pecatu & Uluwatu", en: "Pecatu & Uluwatu", ru: "Пекату и Улувату" },
    title: { id: "Tanah & Villa Dijual di Pecatu & Uluwatu, Bali", en: "Land & Villas for Sale in Pecatu & Uluwatu, Bali", ru: "Земля и виллы на продажу в Пекату и Улувату, Бали" },
    intro: {
      id: "Pecatu meliputi kawasan Uluwatu, Labuan Sait, Padang-Padang, dan Bingin di sisi barat daya Bukit: tebing, ombak kelas dunia, dan villa mewah dengan pemandangan samudra. Permintaan sewa wisatawan di area ini tinggi, sehingga lahan dan villa di sini banyak dicari investor.",
      en: "Pecatu covers Uluwatu, Labuan Sait, Padang-Padang and Bingin on the south-west of the Bukit: clifftops, world-class surf and luxury villas with ocean views. Tourist rental demand here is strong, which keeps land and villas in this area in demand with investors.",
      ru: "Пекату включает Улувату, Лабуан-Саит, Паданг-Паданг и Бингин на юго-западе Букита: скалы, сёрфинг мирового уровня и элитные виллы с видом на океан. Спрос туристов на аренду здесь высокий, поэтому земля и виллы востребованы у инвесторов." } },
  { slug: "pandawa-kutuh", eyebrow: /Pandawa|Kutuh|Tanah Barak/i, region: "Kuta Selatan, Badung",
    name: { id: "Pandawa & Kutuh", en: "Pandawa & Kutuh", ru: "Пандава и Кутух" },
    title: { id: "Tanah Dijual di Pandawa & Kutuh, Bali", en: "Land for Sale in Pandawa & Kutuh, Bali", ru: "Земля на продажу в Пандаве и Кутухе, Бали" },
    intro: {
      id: "Desa Kutuh dengan Pantai Pandawa dan Pantai Tanah Barak berada di sisi timur Bukit, antara Ungasan dan Nusa Dua. Banyak lahan di sini berpemandangan laut dan sebagian berada di zona pariwisata, menarik untuk villa, resort kecil, maupun investasi lahan.",
      en: "Kutuh village, with Pandawa Beach and Tanah Barak Beach, lies on the eastern side of the Bukit between Ungasan and Nusa Dua. Many plots here have ocean views and some are in the tourism zone, attractive for villas, small resorts or land investment.",
      ru: "Деревня Кутух с пляжами Пандава и Танах-Барак находится на востоке Букита, между Унгасаном и Нуса-Дуа. Многие участки здесь с видом на океан, часть — в туристической зоне; интересно для вилл, небольших курортов или инвестиций в землю." } },
  { slug: "kuta-utara", areas: ["kuta-utara"], region: "Badung",
    name: { id: "Canggu & Kuta Utara", en: "Canggu & North Kuta", ru: "Чангу и Северная Кута" },
    title: { id: "Properti Dijual di Canggu & Kuta Utara, Bali", en: "Property for Sale in Canggu & North Kuta, Bali", ru: "Недвижимость на продажу в Чангу и Северной Куте, Бали" },
    intro: {
      id: "Kuta Utara mencakup Canggu, Berawa, Pererenan, Tibubeneng, Kerobokan, dan Dalung: kawasan paling ramai untuk ekspatriat, digital nomad, kafe, dan beach club di Bali barat daya. Permintaan sewa harian dan bulanan tinggi, cocok untuk villa sewa dan properti komersial.",
      en: "North Kuta covers Canggu, Berawa, Pererenan, Tibubeneng, Kerobokan and Dalung: Bali's busiest area for expats, digital nomads, cafés and beach clubs on the south-west coast. Daily and monthly rental demand is high, suiting rental villas and commercial property.",
      ru: "Северная Кута включает Чангу, Берава, Перененан, Тибубененг, Керобокан и Далунг — самый оживлённый район Бали для экспатов, цифровых кочевников, кафе и бич-клубов. Высокий спрос на посуточную и помесячную аренду — подходит для вилл под аренду и коммерческой недвижимости." } },
  { slug: "kuta", areas: ["kuta"], region: "Badung",
    name: { id: "Kuta", en: "Kuta", ru: "Кута" },
    title: { id: "Properti Dijual di Kuta, Bali", en: "Property for Sale in Kuta, Bali", ru: "Недвижимость на продажу в Куте, Бали" },
    intro: {
      id: "Kecamatan Kuta mencakup Kuta, Legian, Seminyak, Tuban, dan area Dewi Sri–Sunset Road, paling dekat dengan Bandara Ngurah Rai. Pusat wisata dan komersial yang sudah matang, cocok untuk usaha, villa sewa, dan hunian di tengah kota.",
      en: "Kuta district covers Kuta, Legian, Seminyak, Tuban and the Dewi Sri–Sunset Road area, closest to Ngurah Rai Airport. A mature tourism and commercial hub, suited to businesses, rental villas and central living.",
      ru: "Район Кута включает Куту, Легиан, Семиньяк, Тубан и район Деви Шри–Сансет-роуд, ближе всего к аэропорту Нгурах-Рай. Сложившийся туристический и деловой центр — для бизнеса, вилл под аренду и жизни в центре." } },
  { slug: "ubud", areas: ["ubud", "abiansemal"], region: "Gianyar & Badung",
    name: { id: "Ubud & sekitarnya", en: "Ubud & surroundings", ru: "Убуд и окрестности" },
    title: { id: "Tanah & Villa Dijual di Ubud & Sekitarnya, Bali", en: "Land & Villas for Sale in Ubud & Surroundings, Bali", ru: "Земля и виллы на продажу в Убуде и окрестностях, Бали" },
    intro: {
      id: "Ubud dan desa-desa di sekitarnya (Singakerta, Lod Tunduh, Sayan, sampai Blahkiuh–Abiansemal) menawarkan pemandangan sawah, sungai, dan hutan dengan suasana yang lebih tenang. Diminati untuk villa retreat, wellness, dan hunian jangka panjang.",
      en: "Ubud and its surrounding villages (Singakerta, Lod Tunduh, Sayan, out to Blahkiuh–Abiansemal) offer rice-field, river and jungle views in a calmer setting. Popular for retreat villas, wellness and long-term living.",
      ru: "Убуд и окрестные деревни (Сингакерта, Лод-Тундух, Саян, до Блахкиух–Абиансемал) — виды на рисовые поля, реки и джунгли в спокойной атмосфере. Популярны для вилл-ретритов, велнеса и долгосрочного проживания." } },
  { slug: "gianyar", areas: ["sukawati", "blahbatuh"], region: "Gianyar",
    name: { id: "Gianyar", en: "Gianyar", ru: "Гианьяр" },
    title: { id: "Villa & Rumah Dijual di Gianyar, Bali", en: "Villas & Houses for Sale in Gianyar, Bali", ru: "Виллы и дома на продажу в Гианьяре, Бали" },
    intro: {
      id: "Kabupaten Gianyar di timur Denpasar meliputi Sukawati, Ketewel, Blahbatuh, dan pesisir timur dengan pantai berpasir hitam serta pemandangan Nusa Penida. Harga lebih terjangkau dibanding Badung, dengan akses mudah lewat by pass Ida Bagus Mantra.",
      en: "Gianyar regency, east of Denpasar, covers Sukawati, Ketewel, Blahbatuh and an east coast of black-sand beaches with views of Nusa Penida. Prices are more affordable than in Badung, with easy access via the Ida Bagus Mantra bypass.",
      ru: "Округ Гианьяр к востоку от Денпасара включает Сукавати, Кетевел, Блахбатух и восточное побережье с чёрным песком и видом на Нуса-Пениду. Цены доступнее, чем в Бадунге; удобный доступ по объездной Ида Багус Мантра." } }
];

const L10N = {
  id: { eyebrow: "Properti per area", avail: "listing tersedia", sold: "terjual", from: "Mulai", lead: "Listing di area ini", soldH: "Sudah terjual di area ini", other: "Area lain", all: "Lihat semua listing", hub: "Cari properti per area", hubDesc: "Daftar listing tanah, villa, dan rumah dijual di Bali per area: Ungasan, Jimbaran, Pecatu–Uluwatu, Pandawa, Canggu, Kuta, Ubud, Gianyar.", hubTitle: "Properti Dijual di Bali per Area | Bali Are Property", ask: "Cari properti di", askP: "Belum menemukan yang cocok? Sebutkan budget dan kebutuhan Anda, kami carikan dari jaringan pemilik langsung.", wa: "Tanya via WhatsApp", form: "Isi form cari properti", waText: "Halo Pak Bagoes, saya mencari properti di area ", types: { tanah: "Tanah", villa: "Villa", komersial: "Komersial", rumah: "Rumah" } },
  en: { eyebrow: "Property by area", avail: "listings available", sold: "sold", from: "From", lead: "Listings in this area", soldH: "Recently sold in this area", other: "Other areas", all: "See all listings", hub: "Find property by area", hubDesc: "Land, villas and houses for sale in Bali by area: Ungasan, Jimbaran, Pecatu–Uluwatu, Pandawa, Canggu, Kuta, Ubud, Gianyar.", hubTitle: "Property for Sale in Bali by Area | Bali Are Property", ask: "Looking for property in", askP: "Haven't found the right one? Tell us your budget and needs and we'll search our network of direct owners.", wa: "Ask on WhatsApp", form: "Fill in the request form", waText: "Hello Pak Bagoes, I'm looking for property in ", types: { tanah: "Land", villa: "Villas", komersial: "Commercial", rumah: "Houses" } },
  ru: { eyebrow: "Недвижимость по районам", avail: "объектов в продаже", sold: "продано", from: "От", lead: "Объекты в этом районе", soldH: "Недавно проданы в этом районе", other: "Другие районы", all: "Все объекты", hub: "Недвижимость по районам", hubDesc: "Земля, виллы и дома на продажу на Бали по районам: Унгасан, Джимбаран, Пекату–Улувату, Пандава, Чангу, Кута, Убуд, Гианьяр.", hubTitle: "Недвижимость на продажу на Бали по районам | Bali Are Property", ask: "Ищете недвижимость в районе", askP: "Не нашли подходящий вариант? Напишите бюджет и пожелания — мы подберём из нашей сети собственников.", wa: "Написать в WhatsApp", form: "Заполнить форму запроса", waText: "Hello Pak Bagoes, I'm looking for property in ", types: { tanah: "Земля", villa: "Виллы", komersial: "Коммерческая", rumah: "Дома" } }
};

module.exports = { AREAS, L10N, MIN };
