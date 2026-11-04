// Isi Bali Property Guide. Setiap artikel: slug, tanggal, judul/ringkasan/isi dalam id, en, ru, dan sumber.
// Blok isi: {h:"subjudul"} {p:"paragraf"} {ul:[...]} {table:{head:[...], rows:[[...]]}} {note:"catatan"}
const SRC = {
  jls: { t: "detikBali – Pemkab Badung groundbreaking JLS Segmen 4 di Kuta Selatan (27 Jul 2026)", u: "https://www.detik.com/bali/berita/d-8592387/pemkab-badung-groundbreaking-jls-segmen-4-di-kuta-selatan/amp" },
  lingkar: { t: "Bisnis Bali – Badung bangun Jalan Lingkar Barat 10 km (20 Jul 2026)", u: "https://bali.bisnis.com/read/20260720/537/1989280/badung-bangun-jalan-lingkar-barat-10-km-urai-kemacetan-di-kuta-selatan" },
  rekayasa: { t: "detikBali – Dishub Badung rekayasa 6 titik lalu lintas ke Uluwatu mulai Juni 2026 (14 Mei 2026)", u: "https://www.detik.com/bali/berita/d-8488518/dishub-badung-bakal-rekayasa-6-titik-lalu-lintas-ke-uluwatu-mulai-juni-2026" },
  permanen: { t: "Warta Bali Online – Rekayasa lalin Pecatu–Uluwatu ditetapkan permanen (2 Jul 2026)", u: "https://wartabalionline.com/2026/07/02/efektif-kurangi-kemacetan-rekayasa-lalin-pecatu-uluwatu-ditetapkan-permanen/" },
  wisman: { t: "ANTARA Bali – Kunjungan wisman ke Bali 2025 tembus 7 juta (1 Jan 2026)", u: "https://bali.antaranews.com/berita/395311/kunjungan-wisatawan-mancanegara-ke-bali-tahun-2025-tembus-7-juta" },
  koster: { t: "CNN Indonesia – Koster larang alih fungsi lahan untuk hotel, vila, dan restoran (13 Sep 2025)", u: "https://www.cnnindonesia.com/nasional/20250913212846-20-1273418/koster-larang-alih-fungsi-lahan-untuk-hotel-vila-dan-restoran-di-bali" },
  perda: { t: "Lingkari News – Pemprov Bali resmikan Perda No. 4 Tahun 2026 (12 Mar 2026)", u: "https://lingkarinews.id/berita/read/pemprov-bali-resmikan-perda-no-4-tahun-2026-praktik-alih-fungsi-lahan-sawah-jadi-vila-bisa-dipidana" },
  tol: { t: "InvestorTrust – Proyek Tol Gilimanuk–Mengwi dipangkas jadi 42 km (5 Jun 2026)", u: "https://investortrust.id/business/105481/proyek-tol-gilimanuk-mengwi-dipangkas-jadi-42-km-kementerian-pu-siapkan-lelang-baru" },
  bandara: { t: "detikBali – Bandara Bali Utara diproyeksikan untuk pesawat berbadan lebar (6 Agu 2026)", u: "https://www.detik.com/bali/berita/d-8606692/bandara-bali-utara-diproyeksikan-untuk-pesawat-berbadan-lebar/amp" }
};

const ARTICLES = [
  // 1 ────────────────────────────────────────────────
  {
    slug: "kuta-selatan-pembangunan-masif",
    date: "2026-11-04",
    sources: [SRC.wisman, SRC.jls, SRC.lingkar, SRC.rekayasa, SRC.permanen],
    id: {
      tag: "Kuta Selatan",
      title: "Kuta Selatan: kenapa pembangunannya paling masif di Bali",
      summary: "Wisatawan rekor, villa baru di hampir setiap desa, dan proyek jalan Rp2,9 triliun. Ini gambaran perkembangan Bukit dari Jimbaran sampai Uluwatu.",
      body: [
        { p: "Kuta Selatan, atau semenanjung Bukit, mencakup Jimbaran, Ungasan, Pecatu, Kutuh, Benoa, dan Tanjung Benoa. Dalam beberapa tahun terakhir, kawasan ini menjadi salah satu titik pembangunan tercepat di Bali: villa sewa, resort, beach club, dan kavling hunian bermunculan di sepanjang tebing dan jalan utama menuju Uluwatu." },
        { h: "Permintaan terus naik" },
        { p: "Menurut Pemprov Bali, kunjungan wisatawan mancanegara ke Bali pada 2025 mencapai lebih dari 7,05 juta, tertinggi dalam sepuluh tahun terakhir dan naik sekitar 11,3% dari 2024. Pantai-pantai di Bukit seperti Melasti, Pandawa, Padang Padang, dan Bingin termasuk tujuan favorit, sehingga kebutuhan akomodasi dan lahan di sekitarnya ikut naik." },
        { h: "Proyek jalan besar sedang berjalan" },
        { p: "Pertumbuhan yang cepat membuat jalan utama, terutama Jalan Raya Uluwatu dari Simpang Nirmala ke Pecatu, sering macet. Pemerintah Kabupaten Badung menjawabnya dengan beberapa proyek:" },
        { ul: [
          "Jalan Lingkar Selatan (JLS) Segmen 4, Jimbaran–Uluwatu, lebih dari 10 km, melewati Pecatu Graha, Jimbaran Hijau, dan Labuan Sait. Lebar badan jalan 24 meter dengan trotoar 3 meter di kedua sisi. Groundbreaking 27 Juli 2026, nilai lebih dari Rp2,9 triliun, target selesai akhir 2027.",
          "Pelebaran jalan Pecatu–Melasti/Siligita dari 6 meter menjadi 10 meter, ditambah lampu lalu lintas di Simpang Siligita.",
          "Akses satu arah Simpang Wanagiri–Unud (pembebasan lahan 2026, target beroperasi 2027) dan trase baru Unud–GWK–Goa Gong.",
          "Rekayasa lalu lintas di titik-titik Ungasan dan Pecatu (Simpang Nirmala, Jalan Blimbing, Blimbing Sari, Toya Ning) sejak 1 Juni 2026, yang kemudian ditetapkan permanen."
        ] },
        { p: "Proyek jalan ini juga disertai pemasangan pipa air bersih. Bupati Badung menyebut masalah air di Badung Selatan sebagai hal mendesak." },
        { h: "Apa artinya bagi pemilik dan pembeli tanah" },
        { ul: [
          "Lahan di dekat jalur JLS dan ruas yang dilebarkan berpotensi lebih mudah diakses setelah proyek selesai. Namun, pastikan bidang tanah tidak terkena rencana trase.",
          "Kemacetan dan air bersih masih menjadi tantangan. Akses jalan, sumber air, dan jarak ke jalan utama sebaiknya dicek langsung sebelum membeli.",
          "Lahan datar dengan akses mobil, zonasi pariwisata, dan view laut tetap paling dicari untuk villa sewa."
        ] },
        { note: "Artikel ini adalah rangkuman berita dan pengalaman lapangan, bukan nasihat investasi. Detail proyek bisa berubah; cek kabar terbaru dari Pemkab Badung." }
      ]
    },
    en: {
      tag: "South Kuta",
      title: "South Kuta: why it is Bali's fastest-building area",
      summary: "Record visitor numbers, new villas in almost every village and a Rp2.9 trillion road project. An overview of the Bukit from Jimbaran to Uluwatu.",
      body: [
        { p: "South Kuta, the Bukit peninsula, covers Jimbaran, Ungasan, Pecatu, Kutuh, Benoa and Tanjung Benoa. In recent years it has become one of the fastest-developing parts of Bali: rental villas, resorts, beach clubs and residential plots are going up along the cliffs and the main road to Uluwatu." },
        { h: "Demand keeps rising" },
        { p: "According to the Bali provincial government, foreign tourist visits to Bali reached more than 7.05 million in 2025, the highest in ten years and about 11.3% above 2024. Bukit beaches such as Melasti, Pandawa, Padang Padang and Bingin are among the most visited, which drives demand for accommodation and land around them." },
        { h: "Major road projects under way" },
        { p: "Fast growth means the main road, especially Jalan Raya Uluwatu from Simpang Nirmala to Pecatu, is often congested. Badung Regency is responding with several projects:" },
        { ul: [
          "South Ring Road (JLS) Segment 4, Jimbaran–Uluwatu: more than 10 km via Pecatu Graha, Jimbaran Hijau and Labuan Sait, with a 24 m carriageway and 3 m sidewalks on both sides. Groundbreaking on 27 July 2026, value over Rp2.9 trillion, target completion end of 2027.",
          "Widening of the Pecatu–Melasti/Siligita road from 6 to 10 metres, plus traffic lights at Simpang Siligita.",
          "A one-way access road from Simpang Wanagiri to Udayana University (land acquisition 2026, operation targeted for 2027) and a new Unud–GWK–Goa Gong alignment.",
          "Traffic engineering at points in Ungasan and Pecatu (Simpang Nirmala, Jalan Blimbing, Blimbing Sari, Toya Ning) since 1 June 2026, later made permanent."
        ] },
        { p: "The road works also include new clean-water pipes; the Badung Regent called water supply in South Badung an urgent issue." },
        { h: "What it means for land owners and buyers" },
        { ul: [
          "Land near the JLS route and the widened roads may become easier to reach once the works are finished, but check that a plot is not affected by the planned alignment.",
          "Traffic and water supply are still challenges. Check road access, water source and distance to the main road in person before buying.",
          "Flat land with car access, tourism zoning and an ocean view remains the most sought-after for rental villas."
        ] },
        { note: "This article summarises news reports and our field experience. It is not investment advice. Project details may change; check the latest updates from Badung Regency." }
      ]
    },
    ru: {
      tag: "Южная Кута",
      title: "Южная Кута: почему здесь строят больше всего на Бали",
      summary: "Рекордный поток туристов, новые виллы почти в каждой деревне и дорожный проект на 2,9 трлн рупий. Обзор Букита от Джимбарана до Улувату.",
      body: [
        { p: "Южная Кута — полуостров Букит: Джимбаран, Унгасан, Пекату, Кутух, Беноа и Танджунг-Беноа. За последние годы это один из самых быстро застраиваемых районов Бали: арендные виллы, курорты, бич-клубы и жилые участки появляются вдоль обрывов и главной дороги на Улувату." },
        { h: "Спрос продолжает расти" },
        { p: "По данным правительства провинции Бали, в 2025 году остров принял более 7,05 млн иностранных туристов — максимум за десять лет и примерно на 11,3% больше, чем в 2024 году. Пляжи Букита — Меласти, Пандава, Паданг-Паданг, Бинджин — среди самых популярных, поэтому растёт спрос на жильё и землю рядом с ними." },
        { h: "Крупные дорожные проекты" },
        { p: "Из‑за быстрого роста главная дорога — особенно Jalan Raya Uluwatu от Симпанг-Нирмала до Пекату — часто стоит в пробках. Округ Бадунг запустил несколько проектов:" },
        { ul: [
          "Южная кольцевая дорога (JLS), сегмент 4, Джимбаран–Улувату: более 10 км через Pecatu Graha, Jimbaran Hijau и Лабуан-Саит, проезжая часть 24 м и тротуары по 3 м. Начало работ — 27 июля 2026 года, стоимость — более 2,9 трлн рупий, завершение — к концу 2027 года.",
          "Расширение дороги Пекату–Меласти/Силигита с 6 до 10 м и светофоры на перекрёстке Силигита.",
          "Односторонний подъезд Симпанг-Ванагири–университет Удаяна (выкуп земли в 2026 году, запуск в 2027 году) и новая трасса Unud–GWK–Goa Gong.",
          "Изменение схемы движения в Унгасане и Пекату (Simpang Nirmala, Jalan Blimbing, Blimbing Sari, Toya Ning) с 1 июня 2026 года — позже её сделали постоянной."
        ] },
        { p: "Вместе с дорогами прокладывают водопровод: глава округа Бадунг назвал водоснабжение Южного Бадунга срочной задачей." },
        { h: "Что это значит для владельцев и покупателей" },
        { ul: [
          "Участки рядом с трассой JLS и расширяемыми дорогами могут стать доступнее после окончания работ — но проверьте, не попадает ли участок под трассу.",
          "Пробки и вода пока остаются проблемой. Перед покупкой проверьте подъезд, источник воды и расстояние до главной дороги на месте.",
          "Ровные участки с подъездом для машины, туристической зоной и видом на океан по‑прежнему самые востребованные для арендных вилл."
        ] },
        { note: "Статья основана на новостях и нашем опыте и не является инвестиционной рекомендацией. Детали проектов могут меняться — следите за новостями администрации Бадунга." }
      ]
    }
  },
  // 2 ────────────────────────────────────────────────
  {
    slug: "peta-area-kuta-selatan",
    date: "2026-11-04",
    sources: [SRC.jls],
    priceTable: true,
    id: {
      tag: "Kuta Selatan",
      title: "Peta area Kuta Selatan: Jimbaran, Ungasan, Pecatu, dan Pandawa",
      summary: "Karakter tiap desa di Bukit dan gambaran harga tanah dari listing kami, dari Rp5,5 juta sampai Rp14,5 juta per m².",
      body: [
        { p: "Kuta Selatan tidak seragam. Setiap desa punya karakter, kepadatan, dan kisaran harga sendiri. Berikut ringkasan dari pengalaman kami memasarkan tanah dan villa di kawasan ini." },
        { h: "Jimbaran & Balangan" },
        { p: "Paling mapan dan paling dekat dengan bandara. Jimbaran punya hotel besar, restoran tepi pantai, dan kawasan perumahan lama. Balangan di sisi barat dikenal dengan villa mewah dan pemandangan laut terbuka. Jalan Goa Gong dan area GWK ikut berkembang seiring rencana trase baru Unud–GWK–Goa Gong." },
        { h: "Ungasan & Melasti" },
        { p: "Desa dengan pilihan tanah terbanyak di listing kami. Di bagian tengah (Central Ungasan, Bali Cliff, Jalan Tulip) banyak kavling hunian dan villa kecil. Di sisi selatan, kawasan Pantai Melasti dan Karma Kandara diisi resort, beach club, dan villa kelas atas. Ruas Pecatu–Melasti/Siligita sedang direncanakan untuk dilebarkan menjadi 10 meter." },
        { h: "Pecatu, Uluwatu & Labuan Sait" },
        { p: "Pusat wisata selancar dan kawasan villa terpadat di Bukit, mulai dari Bingin, Padang Padang, Labuan Sait, sampai Suluban. Lahan kosong makin terbatas sehingga harganya paling tinggi di Kuta Selatan. JLS Segmen 4 akan melewati Labuan Sait dan Pecatu Graha." },
        { h: "Kutuh & Pandawa" },
        { p: "Kawasan yang relatif lebih baru berkembang, di sekitar Pantai Pandawa, Tanah Barak, dan Cangkringan. Masih ada bidang luas, sebagian dengan view laut, dengan harga di bawah Pecatu. Cocok untuk kompleks villa atau kavling." },
        { h: "Gambaran harga tanah dari listing kami" },
        { table: true },
        { note: "Harga di atas adalah harga penawaran listing Bali Are Property per November 2026, bukan harga transaksi atau rata-rata pasar. Harga tiap bidang sangat dipengaruhi view, akses jalan, zonasi, dan luas." }
      ]
    },
    en: {
      tag: "South Kuta",
      title: "South Kuta area map: Jimbaran, Ungasan, Pecatu and Pandawa",
      summary: "What each Bukit village is like, plus land price ranges from our own listings: Rp5.5 million to Rp14.5 million per m².",
      body: [
        { p: "South Kuta is not one market. Each village has its own character, density and price range. Here is a summary from our experience marketing land and villas in the area." },
        { h: "Jimbaran & Balangan" },
        { p: "The most established area and the closest to the airport. Jimbaran has large hotels, beachfront restaurants and older residential areas. Balangan on the west side is known for luxury villas and open ocean views. Jalan Goa Gong and the GWK area are growing along with the planned Unud–GWK–Goa Gong road." },
        { h: "Ungasan & Melasti" },
        { p: "The village with the widest choice of land in our listings. The centre (Central Ungasan, Bali Cliff, Jalan Tulip) has many residential plots and small villas. In the south, the Melasti Beach and Karma Kandara area is home to resorts, beach clubs and high-end villas. The Pecatu–Melasti/Siligita road is planned to be widened to 10 metres." },
        { h: "Pecatu, Uluwatu & Labuan Sait" },
        { p: "The surf hub and the densest villa area on the Bukit, from Bingin and Padang Padang to Labuan Sait and Suluban. Vacant land is increasingly scarce, so prices are the highest in South Kuta. JLS Segment 4 will pass through Labuan Sait and Pecatu Graha." },
        { h: "Kutuh & Pandawa" },
        { p: "A more recently developing area around Pandawa, Tanah Barak and Cangkringan beaches. Larger plots are still available, some with ocean views, at prices below Pecatu. Suited to villa complexes or subdivision." },
        { h: "Land price ranges from our listings" },
        { table: true },
        { note: "These are asking prices from Bali Are Property listings as of November 2026, not transaction prices or market averages. Each plot's price depends heavily on view, road access, zoning and size." }
      ]
    },
    ru: {
      tag: "Южная Кута",
      title: "Карта Южной Куты: Джимбаран, Унгасан, Пекату и Пандава",
      summary: "Чем отличаются деревни Букита и какие цены на землю в наших объявлениях: от 5,5 до 14,5 млн рупий за м².",
      body: [
        { p: "Южная Кута — не единый рынок. У каждой деревни свой характер, плотность застройки и уровень цен. Ниже — краткий обзор по нашему опыту продажи земли и вилл в этом районе." },
        { h: "Джимбаран и Баланган" },
        { p: "Самый освоенный район и ближайший к аэропорту. В Джимбаране крупные отели, рестораны на пляже и старые жилые кварталы. Баланган на западе известен элитными виллами и открытым видом на океан. Район Jalan Goa Gong и GWK развивается вместе с планируемой трассой Unud–GWK–Goa Gong." },
        { h: "Унгасан и Меласти" },
        { p: "Деревня с самым большим выбором земли в наших объявлениях. В центре (Central Ungasan, Bali Cliff, Jalan Tulip) — жилые участки и небольшие виллы. На юге, у пляжа Меласти и Karma Kandara, — курорты, бич-клубы и виллы высокого класса. Дорогу Пекату–Меласти/Силигита планируют расширить до 10 м." },
        { h: "Пекату, Улувату и Лабуан-Саит" },
        { p: "Центр сёрфинга и самый плотный район вилл на Буките — от Бинджина и Паданг-Паданга до Лабуан-Саит и Сулубана. Свободной земли всё меньше, поэтому цены здесь самые высокие в Южной Куте. Через Лабуан-Саит и Pecatu Graha пройдёт сегмент 4 трассы JLS." },
        { h: "Кутух и Пандава" },
        { p: "Район, который начал активно развиваться позже, — вокруг пляжей Пандава, Танах-Барак и Чангкринган. Здесь ещё есть крупные участки, часть с видом на океан, по ценам ниже, чем в Пекату. Подходит для комплекса вилл или нарезки участков." },
        { h: "Цены на землю в наших объявлениях" },
        { table: true },
        { note: "Это цены предложения в объявлениях Bali Are Property на ноябрь 2026 года, а не цены сделок или средние по рынку. Цена участка сильно зависит от вида, подъезда, зонирования и площади." }
      ]
    }
  },
  // 3 ────────────────────────────────────────────────
  {
    slug: "kuta-utara-tabanan-ubud",
    date: "2026-11-04",
    sources: [SRC.jls, SRC.perda, SRC.tol, SRC.bandara],
    id: {
      tag: "Area lain",
      title: "Di luar Bukit: Canggu, Pererenan, Tabanan, Ubud, dan Bali Utara",
      summary: "Kuta Utara tetap jadi magnet, pembangunan bergeser ke barat, dan ada proyek besar di Bali Utara. Ringkasan area lain yang patut diperhatikan.",
      body: [
        { h: "Kuta Utara: Canggu, Berawa, Pererenan, Tibubeneng, Kerobokan" },
        { p: "Kuta Utara adalah pasar villa dan bisnis wisata paling ramai di luar Bukit. Tanah di jalan utama Canggu termasuk yang termahal di Bali; listing kami di Jalan Umah Buluh ditawarkan sekitar Rp21 juta per m². Untuk mengurai macet, Pemkab Badung membangun jalan Berawa–Teuku Umar Barat sepanjang 4,7 km dan lebar 10 meter, dengan target selesai Desember 2026." },
        { h: "Bergeser ke barat: Pererenan, Seseh, Cemagi, sampai Tabanan" },
        { p: "Karena Canggu makin padat, pembangunan villa bergerak ke barat: Pererenan, Seseh, Munggu, dan Cemagi di Mengwi, lalu ke Tabanan seperti Kaba-Kaba, Nyanyi, Tanah Lot, dan Kedungu. Harga tanah di sini masih jauh di bawah Canggu; listing kami di Kaba-Kaba sekitar Rp3,8 juta per m²." },
        { p: "Perlu dicatat, banyak lahan di Tabanan dan Mengwi berupa sawah. Perda Bali No. 4 Tahun 2026 melarang alih fungsi sawah produktif (LP2B) menjadi villa atau bangunan komersial, dan pengawasan diprioritaskan di Tabanan, Gianyar, serta sekitar koridor tol Gilimanuk–Mengwi. Pastikan status lahan sebelum membeli." },
        { p: "Tol Gilimanuk–Mengwi sendiri dirancang ulang menjadi ruas Pekutatan–Soka–Mengwi sekitar 42 km. Lelang badan usaha diharapkan dimulai 2027, dengan target operasi 2031." },
        { h: "Ubud" },
        { p: "Ubud tetap diminati untuk villa retreat dan wellness dengan view sawah, sungai, atau lembah. Listing kami di Singakerta dan Lod Tunduh ditawarkan sekitar Rp6 juta per m². Sebagian besar Gianyar juga termasuk wilayah pengawasan LP2B, jadi cek zonasi dan status sawah dengan teliti." },
        { h: "Bali Utara: rencana bandara baru" },
        { p: "Bandara Bali Utara di Kubutambahan, Buleleng, masuk Proyek Prioritas Nasional RPJMN 2025–2029 dan direncanakan dengan skema KPBU. Per Agustus 2026, pemerintah menyatakan ingin mempercepat proyek ini dengan target sekitar tiga tahun, tetapi konstruksi fisik belum dipastikan dimulai. Bagi investor jangka panjang, ini kabar yang patut dipantau, bukan dasar keputusan jangka pendek." },
        { note: "Fokus Bali Are Property adalah Kuta Selatan dan Kuta Utara, tetapi kami juga membantu peluang di area lain sesuai ketersediaan. Hubungi kami untuk informasi lahan di area tertentu." }
      ]
    },
    en: {
      tag: "Other areas",
      title: "Beyond the Bukit: Canggu, Pererenan, Tabanan, Ubud and North Bali",
      summary: "North Kuta is still a magnet, development is moving west, and a major project is planned in North Bali. A summary of other areas worth watching.",
      body: [
        { h: "North Kuta: Canggu, Berawa, Pererenan, Tibubeneng, Kerobokan" },
        { p: "North Kuta is the busiest villa and tourism-business market outside the Bukit. Land on Canggu's main roads is among the most expensive in Bali; our listing on Jalan Umah Buluh is offered at about Rp21 million per m². To ease traffic, Badung Regency is building a 4.7 km, 10 m-wide Berawa–Teuku Umar Barat road, targeted for completion in December 2026." },
        { h: "Moving west: Pererenan, Seseh, Cemagi and on to Tabanan" },
        { p: "As Canggu fills up, villa development is moving west: Pererenan, Seseh, Munggu and Cemagi in Mengwi, then into Tabanan, including Kaba-Kaba, Nyanyi, Tanah Lot and Kedungu. Land prices here are still far below Canggu; our Kaba-Kaba listing is about Rp3.8 million per m²." },
        { p: "Note that much of the land in Tabanan and Mengwi is rice field. Bali Regional Regulation No. 4 of 2026 bans converting protected productive rice fields (LP2B) into villas or commercial buildings, with enforcement prioritised in Tabanan, Gianyar and around the Gilimanuk–Mengwi toll corridor. Check a plot's status before buying." },
        { p: "The Gilimanuk–Mengwi toll road itself has been rescoped to a Pekutatan–Soka–Mengwi section of about 42 km. The tender is expected to start in 2027, with operation targeted for 2031." },
        { h: "Ubud" },
        { p: "Ubud remains popular for retreat and wellness villas with rice-field, river or valley views. Our listings in Singakerta and Lod Tunduh are offered at about Rp6 million per m². Much of Gianyar is also an LP2B enforcement priority, so check zoning and rice-field status carefully." },
        { h: "North Bali: a planned new airport" },
        { p: "The North Bali Airport in Kubutambahan, Buleleng, is a National Priority Project in the 2025–2029 national medium-term plan and is planned as a public-private partnership. As of August 2026 the government said it wants to accelerate the project, with a target of about three years, but physical construction had not been confirmed. For long-term investors it is worth watching, not a basis for short-term decisions." },
        { note: "Bali Are Property focuses on South Kuta and North Kuta, but we also help with opportunities in other areas depending on availability. Contact us about land in a specific area." }
      ]
    },
    ru: {
      tag: "Другие районы",
      title: "За пределами Букита: Чангу, Перененан, Табанан, Убуд и Северный Бали",
      summary: "Северная Кута по‑прежнему притягивает инвесторов, застройка смещается на запад, а на севере острова планируют крупный проект. Обзор других районов.",
      body: [
        { h: "Северная Кута: Чангу, Берава, Перененан, Тибубененг, Керобокан" },
        { p: "Северная Кута — самый оживлённый рынок вилл и туристического бизнеса за пределами Букита. Земля на главных дорогах Чангу — одна из самых дорогих на Бали: наш участок на Jalan Umah Buluh предлагается примерно за 21 млн рупий за м². Чтобы разгрузить движение, округ Бадунг строит дорогу Берава–Teuku Umar Barat длиной 4,7 км и шириной 10 м; завершение запланировано на декабрь 2026 года." },
        { h: "Сдвиг на запад: Перененан, Сесех, Чемаги и дальше в Табанан" },
        { p: "Чангу становится плотнее, и строительство вилл уходит на запад: Перененан, Сесех, Мунггу и Чемаги в районе Менгви, затем Табанан — Каба-Каба, Ньяньи, Танах-Лот и Кедунгу. Цены здесь значительно ниже, чем в Чангу: наш участок в Каба-Каба — около 3,8 млн рупий за м²." },
        { p: "Важно: значительная часть земли в Табанане и Менгви — рисовые поля. Региональный закон Бали № 4 от 2026 года запрещает переводить охраняемые продуктивные рисовые поля (LP2B) под виллы и коммерческие здания; контроль в первую очередь — в Табанане, Гианьяре и вдоль коридора платной дороги Гилиманук–Менгви. Проверяйте статус участка до покупки." },
        { p: "Саму платную дорогу Гилиманук–Менгви сократили до участка Пекутатан–Сока–Менгви длиной около 42 км. Тендер ожидается в 2027 году, запуск — в 2031 году." },
        { h: "Убуд" },
        { p: "Убуд остаётся популярным для ретритов и велнес-вилл с видом на рисовые поля, реку или долину. Наши участки в Сингакерте и Лод-Тундух предлагаются примерно по 6 млн рупий за м². Большая часть Гианьяра тоже в приоритете контроля LP2B, поэтому внимательно проверяйте зонирование и статус земли." },
        { h: "Северный Бали: новый аэропорт" },
        { p: "Аэропорт Северного Бали в Кубутамбахане (округ Булеленг) включён в список национальных приоритетных проектов на 2025–2029 годы и планируется по схеме государственно-частного партнёрства. В августе 2026 года правительство заявило о намерении ускорить проект (цель — около трёх лет), но начало строительства не подтверждено. Для долгосрочных инвесторов за этим стоит следить, но не принимать на этой основе краткосрочных решений." },
        { note: "Bali Are Property специализируется на Южной и Северной Куте, но помогает и с объектами в других районах при наличии. Свяжитесь с нами, если вас интересует конкретный район." }
      ]
    }
  },
  // 4 ────────────────────────────────────────────────
  {
    slug: "aturan-lahan-bali-2026",
    date: "2026-11-04",
    sources: [SRC.koster, SRC.perda],
    id: {
      tag: "Regulasi",
      title: "Aturan lahan Bali 2025–2026 yang perlu diketahui pembeli",
      summary: "Setelah banjir besar September 2025, Bali memperketat alih fungsi lahan. Ini poin penting Perda No. 4 Tahun 2026 dan dampaknya untuk villa.",
      body: [
        { h: "Latar belakang" },
        { p: "Banjir besar pada 10 September 2025 menewaskan 17 orang menurut BPBD Bali. Tak lama setelahnya, Gubernur Wayan Koster mengumumkan larangan alih fungsi lahan produktif untuk fasilitas komersial seperti hotel, villa, dan restoran, serta meminta bupati dan wali kota memperketat izin. Izin perumahan disebut akan selektif, dengan pengecualian bagi warga yang membangun di tanah sendiri." },
        { h: "Perda Bali No. 4 Tahun 2026" },
        { p: "Larangan ini kemudian dikuatkan dengan Perda No. 4 Tahun 2026 yang ditandatangani 24 Februari 2026. Menurut pemberitaan, poin utamanya:" },
        { ul: [
          "Melarang alih fungsi sawah produktif yang termasuk Lahan Pertanian Pangan Berkelanjutan (LP2B) menjadi villa dan bangunan komersial, dengan ancaman pidana.",
          "Sanksi lain berupa pembatalan izin, denda administratif, dan kewajiban membongkar bangunan.",
          "Melarang praktik nominee, yaitu WNA yang memiliki tanah dengan meminjam nama warga lokal. Perantara dan fasilitatornya juga bisa dipidana.",
          "Pengawasan diprioritaskan di Tabanan, Gianyar, dan sekitar koridor tol Gilimanuk–Mengwi."
        ] },
        { p: "Luas sawah Bali disebut turun dari 70.996 hektare pada 2019 menjadi sekitar 64.474 hektare pada Februari 2026." },
        { h: "Dampaknya untuk Kuta Selatan" },
        { p: "Sebagian besar lahan di semenanjung Bukit adalah lahan kering berkapur, bukan sawah, sehingga larangan alih fungsi sawah tidak berdampak langsung pada kebanyakan bidang di Kuta Selatan. Meski begitu, setiap bidang tetap harus dicek zonasi dan statusnya, karena aturan tata ruang Badung tetap berlaku." },
        { h: "Yang perlu dilakukan pembeli" },
        { ul: [
          "Cek zonasi (ITR/RDTR) dan pastikan bidang tidak termasuk LP2B.",
          "Untuk pembeli asing, gunakan struktur yang sah seperti hak sewa (leasehold), Hak Pakai, atau PT PMA, didampingi notaris/PPAT. Jangan memakai skema nominee.",
          "Simpan dokumen izin (PBG/IMB) bila membeli bangunan."
        ] },
        { note: "Ringkasan ini berdasarkan pemberitaan media, bukan naskah resmi perda dan bukan nasihat hukum. Untuk kepastian, rujuk naskah Perda dan konsultasikan dengan notaris/PPAT." }
      ]
    },
    en: {
      tag: "Regulation",
      title: "Bali land rules 2025–2026 that buyers should know",
      summary: "After major floods in September 2025, Bali tightened land conversion. Key points of Regional Regulation No. 4 of 2026 and what they mean for villas.",
      body: [
        { h: "Background" },
        { p: "Severe flooding on 10 September 2025 killed 17 people, according to Bali's disaster agency. Shortly afterwards, Governor Wayan Koster announced a ban on converting productive land for commercial facilities such as hotels, villas and restaurants, and asked regents and mayors to tighten permits. Housing permits would be selective, with an exception for residents building on their own land." },
        { h: "Bali Regional Regulation No. 4 of 2026" },
        { p: "The ban was then formalised in Regional Regulation (Perda) No. 4 of 2026, signed on 24 February 2026. According to news reports, its main points are:" },
        { ul: [
          "A ban, with criminal penalties, on converting productive rice fields designated as Sustainable Food Agricultural Land (LP2B) into villas and commercial buildings.",
          "Other sanctions include cancelled permits, administrative fines and an obligation to demolish buildings.",
          "A ban on nominee arrangements, where foreigners hold land in a local's name. Intermediaries and facilitators can also face criminal penalties.",
          "Enforcement prioritised in Tabanan, Gianyar and around the Gilimanuk–Mengwi toll corridor."
        ] },
        { p: "Bali's rice-field area is reported to have fallen from 70,996 hectares in 2019 to about 64,474 hectares in February 2026." },
        { h: "What it means for South Kuta" },
        { p: "Most land on the Bukit peninsula is dry limestone, not rice fields, so the rice-field conversion ban does not directly affect most plots in South Kuta. Even so, every plot still needs its zoning and status checked, as Badung's spatial planning rules continue to apply." },
        { h: "What buyers should do" },
        { ul: [
          "Check the zoning (ITR/RDTR) and make sure the plot is not LP2B land.",
          "Foreign buyers should use a legal structure such as leasehold, Hak Pakai (right of use) or a PT PMA company, with a notary/PPAT. Do not use nominee arrangements.",
          "Keep the building permit documents (PBG/IMB) when buying a built property."
        ] },
        { note: "This summary is based on media reports, not the official text of the regulation, and is not legal advice. For certainty, refer to the regulation itself and consult a notary/PPAT." }
      ]
    },
    ru: {
      tag: "Законы",
      title: "Правила использования земли на Бали 2025–2026: что важно покупателю",
      summary: "После сильных наводнений в сентябре 2025 года Бали ужесточил перевод земель. Главное о региональном законе № 4 от 2026 года и его влиянии на виллы.",
      body: [
        { h: "Предыстория" },
        { p: "Сильное наводнение 10 сентября 2025 года унесло жизни 17 человек, по данным агентства по ЧС Бали. Вскоре губернатор Ваян Костер объявил запрет на перевод продуктивных земель под коммерческие объекты — отели, виллы, рестораны — и поручил главам округов ужесточить выдачу разрешений. Разрешения на жильё обещали выдавать выборочно, с исключением для местных жителей, строящих на своей земле." },
        { h: "Региональный закон Бали № 4 от 2026 года" },
        { p: "Запрет закрепили законом (Perda) № 4 от 2026 года, подписанным 24 февраля 2026 года. По сообщениям СМИ, главное в нём:" },
        { ul: [
          "Запрет под угрозой уголовной ответственности на перевод продуктивных рисовых полей со статусом LP2B под виллы и коммерческие здания.",
          "Другие санкции — отмена разрешений, штрафы и обязанность снести постройки.",
          "Запрет номинальных схем, когда иностранец владеет землёй на имя местного жителя. Посредникам также грозит уголовная ответственность.",
          "Приоритетный контроль — в Табанане, Гианьяре и вдоль коридора платной дороги Гилиманук–Менгви."
        ] },
        { p: "Площадь рисовых полей на Бали, по сообщениям, сократилась с 70 996 га в 2019 году до примерно 64 474 га в феврале 2026 года." },
        { h: "Что это значит для Южной Куты" },
        { p: "Большая часть земли на полуострове Букит — сухие известняковые участки, а не рисовые поля, поэтому запрет напрямую не касается большинства участков в Южной Куте. Тем не менее зонирование и статус каждого участка нужно проверять: правила территориального планирования Бадунга продолжают действовать." },
        { h: "Что делать покупателю" },
        { ul: [
          "Проверить зонирование (ITR/RDTR) и убедиться, что участок не относится к LP2B.",
          "Иностранцам использовать законные схемы — аренду (leasehold), право пользования (Hak Pakai) или компанию PT PMA — с нотариусом/PPAT. Не использовать номинальные схемы.",
          "При покупке дома сохранить документы о разрешении на строительство (PBG/IMB)."
        ] },
        { note: "Обзор основан на публикациях СМИ, а не на официальном тексте закона, и не является юридической консультацией. Для точности обратитесь к тексту закона и к нотариусу/PPAT." }
      ]
    }
  },
  // 5 ────────────────────────────────────────────────
  {
    slug: "checklist-beli-tanah-bali",
    date: "2026-11-04",
    sources: [SRC.perda],
    id: {
      tag: "Panduan",
      title: "Checklist sebelum membeli tanah di Bali",
      summary: "Sepuluh hal yang kami cek untuk setiap bidang tanah: sertifikat, zonasi, akses jalan, air, sampai status pajak.",
      body: [
        { p: "Harga dan view sering jadi alasan utama membeli tanah, tetapi yang menentukan aman tidaknya transaksi adalah dokumen dan kondisi lapangan. Berikut daftar yang kami cek untuk setiap listing." },
        { h: "Dokumen" },
        { ul: [
          "Jenis sertifikat: SHM (hak milik), HGB, atau hak sewa. Cocokkan nama pemilik dan luas dengan data di BPN.",
          "Bebas sengketa dan tidak sedang dijaminkan di bank.",
          "PBB (pajak bumi dan bangunan) tahun berjalan sudah lunas.",
          "Untuk tanah berbangunan: PBG/IMB dan, untuk villa sewa, izin usaha akomodasi."
        ] },
        { h: "Tata ruang" },
        { ul: [
          "Zonasi (ITR/RDTR): pariwisata (pink) untuk villa sewa dan akomodasi, permukiman (kuning) untuk hunian, dan jalur hijau atau pertanian yang umumnya tidak bisa dibangun.",
          "Pastikan bidang tidak termasuk LP2B (sawah dilindungi), terutama di Tabanan dan Gianyar.",
          "Cek apakah bidang terkena rencana jalan, misalnya trase JLS di Kuta Selatan."
        ] },
        { h: "Kondisi lapangan" },
        { ul: [
          "Akses jalan: lebar jalan, bisa dilalui mobil atau truk material, dan statusnya jalan umum atau jalan pribadi.",
          "Air dan listrik: ketersediaan PDAM atau sumur bor, dan jarak ke tiang PLN.",
          "Kontur, view, dan arah hadap, yang memengaruhi biaya bangun dan nilai jual kembali."
        ] },
        { h: "Untuk pembeli asing" },
        { p: "WNA tidak bisa memiliki tanah berstatus hak milik. Struktur yang umum dipakai adalah hak sewa jangka panjang (leasehold), Hak Pakai, atau melalui PT PMA. Skema nominee dilarang dan sejak Perda Bali No. 4 Tahun 2026 bisa berujung pidana. Selalu gunakan notaris/PPAT yang terdaftar." },
        { note: "Checklist ini bersifat umum dan bukan nasihat hukum. Bali Are Property dapat membantu mengumpulkan data lapangan dan dokumen awal untuk setiap listing kami." }
      ]
    },
    en: {
      tag: "Guide",
      title: "Checklist before buying land in Bali",
      summary: "Ten things we check on every plot: title, zoning, road access, water and tax status.",
      body: [
        { p: "Price and view are often the main reasons to buy, but documents and site conditions decide whether a deal is safe. Here is what we check for every listing." },
        { h: "Documents" },
        { ul: [
          "Title type: SHM (freehold), HGB (right to build) or leasehold. Match the owner's name and land size with the land office (BPN) records.",
          "Free of disputes and not mortgaged to a bank.",
          "Current year's land and building tax (PBB) paid.",
          "For built property: a building permit (PBG/IMB) and, for rental villas, an accommodation business licence."
        ] },
        { h: "Zoning" },
        { ul: [
          "Zoning (ITR/RDTR): tourism (pink) for rental villas and accommodation, residential (yellow) for homes, and green belt or agricultural land that generally cannot be built on.",
          "Make sure the plot is not LP2B (protected rice field), especially in Tabanan and Gianyar.",
          "Check whether the plot is affected by a planned road, such as the JLS route in South Kuta."
        ] },
        { h: "On site" },
        { ul: [
          "Road access: width, whether cars or construction trucks can get in, and whether it is a public or private road.",
          "Water and electricity: mains water (PDAM) or a bore well, and distance to the nearest PLN pole.",
          "Terrain, view and orientation, which affect building costs and resale value."
        ] },
        { h: "For foreign buyers" },
        { p: "Foreigners cannot hold freehold (hak milik) land. Common structures are long-term leasehold, Hak Pakai (right of use) or ownership through a PT PMA company. Nominee arrangements are illegal and, since Bali Regional Regulation No. 4 of 2026, can lead to criminal penalties. Always use a registered notary/PPAT." },
        { note: "This checklist is general and not legal advice. Bali Are Property can help gather site information and initial documents for each of our listings." }
      ]
    },
    ru: {
      tag: "Гид",
      title: "Чек-лист перед покупкой земли на Бали",
      summary: "Десять пунктов, которые мы проверяем по каждому участку: документы, зонирование, подъезд, вода и налоги.",
      body: [
        { p: "Цена и вид часто главные причины покупки, но безопасность сделки определяют документы и состояние участка. Вот что мы проверяем по каждому объекту." },
        { h: "Документы" },
        { ul: [
          "Тип права: SHM (собственность), HGB (право застройки) или аренда. Сверьте имя владельца и площадь с данными земельного ведомства (BPN).",
          "Нет споров и участок не в залоге у банка.",
          "Земельный налог (PBB) за текущий год оплачен.",
          "Для участка с домом — разрешение на строительство (PBG/IMB), а для арендной виллы — лицензия на гостиничный бизнес."
        ] },
        { h: "Зонирование" },
        { ul: [
          "Зонирование (ITR/RDTR): туристическая зона (розовая) — для арендных вилл, жилая (жёлтая) — для домов, зелёная или сельхоз — обычно без права застройки.",
          "Убедитесь, что участок не относится к LP2B (охраняемые рисовые поля), особенно в Табанане и Гианьяре.",
          "Проверьте, не попадает ли участок под планируемую дорогу, например трассу JLS в Южной Куте."
        ] },
        { h: "На месте" },
        { ul: [
          "Подъезд: ширина дороги, проезд для машин и грузовиков, общественная или частная дорога.",
          "Вода и электричество: водопровод (PDAM) или скважина, расстояние до опоры PLN.",
          "Рельеф, вид и ориентация — они влияют на стоимость строительства и перепродажи."
        ] },
        { h: "Для иностранных покупателей" },
        { p: "Иностранцы не могут владеть землёй на праве собственности (hak milik). Обычно используют долгосрочную аренду (leasehold), право пользования (Hak Pakai) или компанию PT PMA. Номинальные схемы незаконны, а после закона Бали № 4 от 2026 года могут повлечь уголовную ответственность. Всегда работайте с зарегистрированным нотариусом/PPAT." },
        { note: "Чек-лист носит общий характер и не является юридической консультацией. Bali Are Property поможет собрать данные и первичные документы по каждому нашему объекту." }
      ]
    }
  }
];

// Tabel harga (artikel 2) — dari listing Bali Are Property, harga penawaran per m², November 2026
const PRICE_TABLE = {
  id: { head: ["Area", "Kisaran harga penawaran per m²", "Jumlah listing"], rows: [
    ["Jimbaran / Balangan", "Rp7 – 14,5 juta", "2"], ["Ungasan / Melasti", "Rp5,5 – 10 juta", "6"],
    ["Pecatu / Labuan Sait", "Rp10 – 14,5 juta", "3"], ["Kutuh / Pandawa", "Rp6 – 9,5 juta", "3"] ] },
  en: { head: ["Area", "Asking price range per m²", "Listings"], rows: [
    ["Jimbaran / Balangan", "Rp7 – 14.5 million", "2"], ["Ungasan / Melasti", "Rp5.5 – 10 million", "6"],
    ["Pecatu / Labuan Sait", "Rp10 – 14.5 million", "3"], ["Kutuh / Pandawa", "Rp6 – 9.5 million", "3"] ] },
  ru: { head: ["Район", "Цена предложения за м²", "Объектов"], rows: [
    ["Джимбаран / Баланган", "7 – 14,5 млн рупий", "2"], ["Унгасан / Меласти", "5,5 – 10 млн рупий", "6"],
    ["Пекату / Лабуан-Саит", "10 – 14,5 млн рупий", "3"], ["Кутух / Пандава", "6 – 9,5 млн рупий", "3"] ] }
};

module.exports = { ARTICLES, PRICE_TABLE };
