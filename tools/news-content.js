// Isi halaman News (berita properti Bali). Urut dari TERBARU. Berita baru ditambahkan di AWAL array.
// Setiap berita: slug, date (tanggal terbit di website), sources [{t,u}], lalu id/en/ru: {tag, title, summary, body:[blok]}
// Blok: {h} {p} {ul:[...]} {note}
// ig (untuk carousel Instagram mingguan, Bahasa Indonesia, singkat): {stat: angka utama ≤9 karakter, statL: keterangan angka, h: judul slide ≤60 karakter,
//    pts: [3 fakta ≤70 karakter], arti: 1 kalimat "artinya bagi Anda" ≤110 karakter}. Tanpa ig, slide dibuat otomatis dari judul & isi.
const NEWS = [
  {
    slug: "investasi-bali-triwulan-3-2026",
    date: "2026-11-04",
    ig: {"stat":"Rp30,8 T","statL":"realisasi investasi Bali s.d. triwulan III 2026","h":"Badung menyerap lebih dari separuh investasi Bali","pts":["Badung (termasuk Kuta Selatan) Rp18,22 triliun, terbesar di Bali","58,8% modal asing; Prancis, Rusia, Australia teratas","Perumahan & perkantoran jadi sektor favorit PMA: Rp8,49 triliun"],"arti":"Minat investor asing ke properti hunian di Badung masih kuat."},
    sources: [{ t: "Warta Bali Online – Investasi Prancis di Bali capai Rp2,33 triliun (3 Nov 2026)", u: "https://wartabalionline.com/2026/11/03/investasi-prancis-di-bali-capai-rp233-triliun-jadi-yang-terbesar-kalahkan-rusia-dan-australia/" }],
    id: { tag: "Investasi", title: "Investasi di Bali tembus Rp30,8 triliun hingga triwulan III 2026, Badung paling besar",
      summary: "Modal asing menyumbang hampir 59%. Prancis jadi negara investor terbesar, dan sektor perumahan-perkantoran menjadi tujuan utama modal asing.",
      body: [
        { p: "DPMPTSP Provinsi Bali mencatat realisasi investasi di Bali hingga triwulan III 2026 mencapai Rp30,80 triliun, atau 64% dari target tahun ini sebesar Rp47,93 triliun. Sekitar 58,8% berasal dari penanaman modal asing (PMA) dan 41,2% dari dalam negeri (PMDN)." },
        { h: "Badung menyerap lebih dari separuh" },
        { p: "Kabupaten Badung, yang mencakup Kuta Selatan dan Kuta Utara, mencatat investasi Rp18,22 triliun, terbesar di Bali, baik untuk PMA (Rp11,13 triliun) maupun PMDN (Rp7,09 triliun). Denpasar menyusul dengan Rp4,69 triliun dan Gianyar Rp4,25 triliun. Kawasan Sarbagita (Denpasar, Badung, Gianyar, Tabanan) menyerap sekitar 92% dari total investasi." },
        { h: "Negara dan sektor teratas" },
        { ul: [
          "Negara asal PMA terbesar: Prancis Rp2,33 triliun, Rusia Rp1,95 triliun, Australia Rp1,94 triliun, Singapura Rp1,69 triliun, Amerika Serikat Rp1,24 triliun.",
          "Sektor terbesar: hotel dan restoran Rp12,49 triliun, disusul perumahan, kawasan industri, dan perkantoran Rp9,35 triliun. Sektor terakhir ini justru yang terbesar untuk PMA, yaitu Rp8,49 triliun."
        ] },
        { p: "Bagi pemilik lahan, data ini menunjukkan minat investor asing ke properti hunian dan akomodasi masih kuat, terutama di Badung." },
        { note: "Ringkasan berita, bukan nasihat investasi." }
      ] },
    en: { tag: "Investment", title: "Bali investment reaches Rp30.8 trillion through Q3 2026, led by Badung",
      summary: "Foreign capital makes up almost 59%. France is the largest investor country, and housing and offices are the top destination for foreign money.",
      body: [
        { p: "Bali's provincial investment office (DPMPTSP) recorded Rp30.80 trillion of realised investment through Q3 2026, 64% of this year's Rp47.93 trillion target. About 58.8% came from foreign direct investment (PMA) and 41.2% from domestic investors (PMDN)." },
        { h: "Badung takes more than half" },
        { p: "Badung Regency, which covers South Kuta and North Kuta, recorded Rp18.22 trillion, the most in Bali for both foreign (Rp11.13 trillion) and domestic (Rp7.09 trillion) investment. Denpasar followed with Rp4.69 trillion and Gianyar with Rp4.25 trillion. The Sarbagita area (Denpasar, Badung, Gianyar, Tabanan) took about 92% of the total." },
        { h: "Top countries and sectors" },
        { ul: [
          "Largest foreign investors: France Rp2.33 trillion, Russia Rp1.95 trillion, Australia Rp1.94 trillion, Singapore Rp1.69 trillion, United States Rp1.24 trillion.",
          "Largest sectors: hotels and restaurants Rp12.49 trillion, then housing, industrial estates and offices Rp9.35 trillion. The latter is the largest sector for foreign investment, at Rp8.49 trillion."
        ] },
        { p: "For land owners, the figures show that foreign interest in residential and accommodation property remains strong, especially in Badung." },
        { note: "News summary, not investment advice." }
      ] },
    ru: { tag: "Инвестиции", title: "Инвестиции на Бали за три квартала 2026 года — 30,8 трлн рупий, лидирует Бадунг",
      summary: "Почти 59% — иностранный капитал. Крупнейший инвестор — Франция, а главное направление для иностранных денег — жильё и офисы.",
      body: [
        { p: "По данным инвестиционного ведомства провинции Бали (DPMPTSP), за январь–сентябрь 2026 года реализовано инвестиций на 30,80 трлн рупий — 64% годового плана в 47,93 трлн. Около 58,8% — прямые иностранные инвестиции (PMA), 41,2% — внутренние (PMDN)." },
        { h: "Бадунг — больше половины" },
        { p: "Округ Бадунг, куда входят Южная и Северная Кута, получил 18,22 трлн рупий — больше всех на Бали как по иностранным (11,13 трлн), так и по внутренним (7,09 трлн) инвестициям. Далее Денпасар — 4,69 трлн и Гианьяр — 4,25 трлн. На район Сарбагита (Денпасар, Бадунг, Гианьяр, Табанан) пришлось около 92% всех вложений." },
        { h: "Страны и отрасли" },
        { ul: [
          "Крупнейшие иностранные инвесторы: Франция — 2,33 трлн, Россия — 1,95 трлн, Австралия — 1,94 трлн, Сингапур — 1,69 трлн, США — 1,24 трлн рупий.",
          "Крупнейшие отрасли: отели и рестораны — 12,49 трлн, затем жильё, промзоны и офисы — 9,35 трлн. Для иностранцев именно этот сектор — первый: 8,49 трлн рупий."
        ] },
        { p: "Для владельцев земли это сигнал: интерес иностранцев к жилой и гостиничной недвижимости остаётся высоким, особенно в Бадунге." },
        { note: "Обзор новостей, не инвестиционная рекомендация." }
      ] }
  },
  {
    slug: "buva-rights-issue-uluwatu",
    date: "2026-11-04",
    ig: {"stat":"Rp1,53 T","statL":"rights issue PT Bukit Uluwatu Villa Tbk (BUVA)","h":"Ratusan miliar mengalir ke proyek di Uluwatu","pts":["Rp426,3 miliar untuk resort baru di lahan ±3,9 ha Uluwatu","Rp390,3 miliar untuk infrastruktur Uluwatu Estate","Target rampung kuartal IV 2028–2029"],"arti":"Modal institusi masih masuk ke Uluwatu — kawasan sekitarnya ikut dilirik investor."},
    sources: [
      { t: "InvestorTrust – Emiten Hapsoro (BUVA) rancang rights issue Rp1,54 triliun (6 Okt 2026)", u: "https://investortrust.id/market/118452/emiten-hapsoro-buva-rancang-rights-issue-rp-1-54-triliun-dana-ditujukan-untuk-ini" },
      { t: "Kontan – Bukit Uluwatu (BUVA) rights issue Rp1,53 triliun, ada empat pembeli siaga (4 Agu 2026)", u: "https://investasi.kontan.co.id/news/bukit-uluwatu-buva-rights-issue-rp-153-triliun-ada-empat-pembeli-siaga" }
    ],
    id: { tag: "Developer", title: "Bukit Uluwatu Villa (BUVA) himpun Rp1,53 triliun, ratusan miliar untuk proyek di Uluwatu",
      summary: "Emiten properti dan hotel ini menyiapkan dana untuk resort baru di lahan 3,9 hektare dan infrastruktur Uluwatu Estate.",
      body: [
        { p: "PT Bukit Uluwatu Villa Tbk (BUVA), perusahaan properti dan hotel yang tercatat di Bursa Efek Indonesia, menggelar penambahan modal dengan hak memesan efek terlebih dahulu (rights issue) senilai sekitar Rp1,53 triliun. Perusahaan menerbitkan hingga 6,15 miliar saham baru dengan harga Rp250 per saham." },
        { h: "Rencana penggunaan dana di Bali" },
        { ul: [
          "Rp426,3 miliar ke PT Bukit Bali Permai. Dana ini dipakai untuk mengakuisisi PT Royal Uluwatu Residence (Rp199,3 miliar) dan menyuntik modalnya (Rp227,1 miliar) guna mengembangkan lahan sekitar 3,9 hektare di Uluwatu. Proyek \"West Resort\" ini ditargetkan rampung pada kuartal IV 2029.",
          "Rp390,3 miliar ke PT Bukit Permai Properti untuk infrastruktur Uluwatu Estate, seperti jalan, galeri seni, taman alam, dan fasilitas olahraga. Target selesai kuartal IV 2028.",
          "Rp150 miliar untuk renovasi total Alila Ubud, target selesai kuartal IV 2028."
        ] },
        { p: "Sisa dana dipakai untuk melunasi pinjaman di Bank Mandiri (Rp417,8 miliar) dan untuk infrastruktur resort terintegrasi di Lagoi, Bintan (Rp150 miliar)." },
        { h: "Kenapa ini menarik" },
        { p: "Proyek resort dan infrastruktur skala besar dari perusahaan terbuka menunjukkan modal institusi masih masuk ke Uluwatu. Kawasan di sekitar proyek seperti ini biasanya ikut mendapat perhatian investor." },
        { note: "Ringkasan berita, bukan rekomendasi saham atau nasihat investasi." }
      ] },
    en: { tag: "Developers", title: "Bukit Uluwatu Villa (BUVA) raises Rp1.53 trillion, hundreds of billions for Uluwatu projects",
      summary: "The listed property and hotel company is earmarking funds for a new resort on a 3.9-hectare site and for Uluwatu Estate infrastructure.",
      body: [
        { p: "PT Bukit Uluwatu Villa Tbk (BUVA), a property and hotel company listed on the Indonesia Stock Exchange, is running a rights issue worth about Rp1.53 trillion, offering up to 6.15 billion new shares at Rp250 each." },
        { h: "Planned use of funds in Bali" },
        { ul: [
          "Rp426.3 billion to PT Bukit Bali Permai, to acquire PT Royal Uluwatu Residence (Rp199.3 billion) and inject capital (Rp227.1 billion) to develop a roughly 3.9-hectare site in Uluwatu. The \"West Resort\" project is targeted for completion in Q4 2029.",
          "Rp390.3 billion to PT Bukit Permai Properti for Uluwatu Estate infrastructure such as roads, an art gallery, a natural park and sports facilities, targeted for Q4 2028.",
          "Rp150 billion for a full renovation of Alila Ubud, targeted for Q4 2028."
        ] },
        { p: "The rest goes to repaying a Bank Mandiri loan (Rp417.8 billion) and to infrastructure at an integrated resort in Lagoi, Bintan (Rp150 billion)." },
        { h: "Why it matters" },
        { p: "Large resort and infrastructure projects by a listed company show institutional capital is still flowing into Uluwatu. Areas around projects like this usually draw more investor attention." },
        { note: "News summary, not a stock recommendation or investment advice." }
      ] },
    ru: { tag: "Девелоперы", title: "Bukit Uluwatu Villa (BUVA) привлекает 1,53 трлн рупий, сотни миллиардов — на проекты в Улувату",
      summary: "Публичная гостиничная компания направит средства на новый курорт на участке 3,9 га и инфраструктуру Uluwatu Estate.",
      body: [
        { p: "PT Bukit Uluwatu Villa Tbk (BUVA) — компания в сфере недвижимости и отелей, торгующаяся на Индонезийской фондовой бирже, — проводит допэмиссию примерно на 1,53 трлн рупий: до 6,15 млрд новых акций по 250 рупий." },
        { h: "На что пойдут деньги на Бали" },
        { ul: [
          "426,3 млрд рупий — PT Bukit Bali Permai: покупка PT Royal Uluwatu Residence (199,3 млрд) и вложения в капитал (227,1 млрд) для освоения участка около 3,9 га в Улувату. Проект «West Resort» планируют завершить в IV квартале 2029 года.",
          "390,3 млрд рупий — PT Bukit Permai Properti на инфраструктуру Uluwatu Estate: дороги, арт-галерея, природный парк, спортивные объекты. Срок — IV квартал 2028 года.",
          "150 млрд рупий — полная реновация Alila Ubud, срок — IV квартал 2028 года."
        ] },
        { p: "Остальное — досрочное погашение кредита Bank Mandiri (417,8 млрд) и инфраструктура курорта в Лагое на острове Бинтан (150 млрд)." },
        { h: "Почему это важно" },
        { p: "Крупные курортные и инфраструктурные проекты публичной компании показывают, что институциональный капитал продолжает идти в Улувату. Районы рядом с такими проектами обычно привлекают больше внимания инвесторов." },
        { note: "Обзор новостей, не рекомендация по акциям и не инвестиционный совет." }
      ] }
  },
  {
    slug: "hotel-villa-dijual-asita-moratorium",
    date: "2026-11-04",
    ig: {"stat":"244","statL":"hotel & villa dipasarkan dijual di Bali","h":"Pasar aset hotel aktif, dari Ubud sampai Pecatu","pts":["Resort ±200 kamar di Pecatu, Uluwatu: Rp535 miliar","Hotel bintang 5 Nusa Dua, 176 kamar: Rp500 miliar","ASITA Bali usul moratorium akomodasi baru"],"arti":"Peluang membeli bisnis yang sudah berjalan — cek izin, kinerja & status lahan dengan teliti."},
    sources: [{ t: "BaliNews.id – 244 hotel dan vila Bali masuk pasar jual-beli, ASITA desak moratorium akomodasi (21 Sep 2026)", u: "https://balinews.id/244-hotel-dan-vila-bali-masuk-pasar-jual-beli-asita-desak-moratorium-akomodasi/" }],
    id: { tag: "Jual beli", title: "244 hotel dan villa di Bali dipasarkan dijual, termasuk resort Rp535 miliar di Pecatu",
      summary: "Iklan jual hotel dan villa ramai di marketplace. ASITA Bali meminta pemerintah mempertimbangkan penghentian sementara pembangunan akomodasi baru.",
      body: [
        { p: "Pemantauan BaliNews.id di marketplace OLX dengan kata kunci \"hotel\" di Bali menemukan 524 iklan properti, dan 244 di antaranya adalah hotel atau villa yang dijual. Lokasinya tersebar di Kuta, Seminyak, Canggu, Ubud, Nusa Dua, Pecatu, Sanur, dan Denpasar Selatan." },
        { h: "Contoh aset yang dipasarkan" },
        { ul: [
          "Resort di Pecatu, Uluwatu, dengan sekitar 200 kamar di bawah merek Swiss-Bel: Rp535 miliar.",
          "Hotel bintang lima di Nusa Dua dengan 176 kamar di atas lahan sekitar 22.291 m²: Rp500 miliar.",
          "Hotel bintang tiga di Ubud dengan 19 kamar yang masih beroperasi: sekitar Rp38 miliar."
        ] },
        { p: "Artikel itu menegaskan jumlah iklan bukan data resmi properti bermasalah. Penjualan aset bisa karena kebutuhan likuiditas, restrukturisasi, utang, pergantian pemilik, atau keputusan investor." },
        { h: "Sikap ASITA" },
        { p: "Ketua DPD ASITA Bali, I Putu Winastra, meminta pemerintah mempertimbangkan penghentian sementara pembangunan akomodasi baru dan menertibkan akomodasi tanpa izin. Menurutnya, pariwisata Bali sebaiknya fokus pada kualitas wisatawan, belanja, dan lama tinggal, bukan menambah kamar." },
        { p: "Bagi investor besar, pasar aset hotel yang aktif membuka peluang membeli bisnis yang sudah berjalan, bukan hanya membangun dari nol. Tetap periksa izin, kinerja, dan status lahannya dengan teliti." },
        { note: "Ringkasan berita, bukan nasihat investasi." }
      ] },
    en: { tag: "Deals", title: "244 Bali hotels and villas listed for sale, including a Rp535 billion resort in Pecatu",
      summary: "Hotel and villa sale listings are multiplying online. ASITA Bali urges the government to consider pausing new accommodation construction.",
      body: [
        { p: "BaliNews.id searched the OLX marketplace for \"hotel\" in Bali and found 524 property ads, of which 244 were hotels or villas for sale, across Kuta, Seminyak, Canggu, Ubud, Nusa Dua, Pecatu, Sanur and South Denpasar." },
        { h: "Examples on the market" },
        { ul: [
          "A resort in Pecatu, Uluwatu, with about 200 rooms under the Swiss-Bel brand: Rp535 billion.",
          "A five-star hotel in Nusa Dua with 176 rooms on about 22,291 m² of land: Rp500 billion.",
          "A three-star, 19-room hotel in Ubud, still operating: about Rp38 billion."
        ] },
        { p: "The article stresses the listing count is not official data on distressed properties. Assets can be sold for liquidity needs, restructuring, debt, ownership changes or investor decisions." },
        { h: "ASITA's position" },
        { p: "ASITA Bali chair I Putu Winastra asked the government to consider a temporary halt to new accommodation construction and to act on unlicensed accommodation. He said Bali tourism should focus on visitor quality, spending and length of stay rather than adding rooms." },
        { p: "For larger investors, an active hotel-asset market offers the chance to buy operating businesses rather than only building from scratch. Check licences, performance and land status carefully." },
        { note: "News summary, not investment advice." }
      ] },
    ru: { tag: "Сделки", title: "На продажу выставлены 244 отеля и виллы на Бали, включая курорт в Пекату за 535 млрд рупий",
      summary: "Объявлений о продаже отелей и вилл становится больше. Ассоциация ASITA Bali предлагает временно приостановить строительство нового жилья для туристов.",
      body: [
        { p: "BaliNews.id проанализировал маркетплейс OLX по запросу «hotel» на Бали: 524 объявления, из них 244 — продажа отелей и вилл. География — Кута, Семиньяк, Чангу, Убуд, Нуса-Дуа, Пекату, Санур и Южный Денпасар." },
        { h: "Примеры объектов" },
        { ul: [
          "Курорт в Пекату (Улувату), около 200 номеров под брендом Swiss-Bel: 535 млрд рупий.",
          "Пятизвёздочный отель в Нуса-Дуа, 176 номеров на участке около 22 291 м²: 500 млрд рупий.",
          "Трёхзвёздочный отель в Убуде на 19 номеров, работает: около 38 млрд рупий."
        ] },
        { p: "Издание подчёркивает: количество объявлений — не официальные данные о проблемных объектах. Причины продажи разные: потребность в деньгах, реструктуризация, долги, смена владельца или решение инвестора." },
        { h: "Позиция ASITA" },
        { p: "Глава ASITA Bali И Путу Винастра призвал власти рассмотреть временную остановку строительства новых гостиничных объектов и навести порядок с нелегальным жильём. По его словам, Бали стоит делать ставку на качество туристов, их расходы и длительность пребывания, а не на число номеров." },
        { p: "Для крупных инвесторов активный рынок гостиничных активов — возможность купить работающий бизнес, а не только строить с нуля. Но лицензии, показатели и статус земли нужно проверять очень внимательно." },
        { note: "Обзор новостей, не инвестиционная рекомендация." }
      ] }
  },
  {
    slug: "pipeline-hotel-mewah-jimbaran-uluwatu",
    date: "2026-11-04",
    ig: {"stat":"Rp4,8 jt","statL":"tarif kamar rata-rata per malam, Jimbaran–Uluwatu","h":"Jimbaran–Uluwatu catat tarif hotel tertinggi di Bali","pts":["±1.700 kamar mewah baru masuk pasar hingga 2029 (Colliers)","Pipeline 5.641 kamar di 45 hotel (Horwath HTL)","Nusa Dua: okupansi tertinggi, 79,2%"],"arti":"Lahan zona pariwisata dengan view laut di Bukit tetap diburu developer resort & villa."},
    sources: [
      { t: "Real Estate Asia – Bali to see around 1,700 new luxury hotel rooms until 2029 (21 Jul 2026)", u: "https://realestateasia.com/commercial-hotel/news/bali-see-around-1700-new-luxury-hotel-rooms-until-2029" },
      { t: "Horwath HTL – Bali Hotel & Branded Residences 2026 (Mar 2026)", u: "https://horwathhtl.com/publication/bali-hotel-branded-residences-2026/" }
    ],
    id: { tag: "Pasar hotel", title: "Hotel mewah terus bertambah: Jimbaran–Uluwatu catat tarif kamar tertinggi di Bali",
      summary: "Colliers memperkirakan sekitar 1.700 kamar mewah baru hingga 2029. Laporan Horwath HTL mencatat tarif rata-rata Jimbaran–Uluwatu Rp4,8 juta per malam.",
      body: [
        { p: "Dua laporan riset tahun ini memberi gambaran ke mana arah pembangunan hotel di Bali." },
        { h: "Colliers: 1.700 kamar mewah baru" },
        { p: "Colliers memperkirakan sekitar 1.700 kamar hotel baru masuk pasar dari semester II 2026 hingga 2029, seluruhnya di segmen mewah (bintang lima). Koridor pertumbuhan utama adalah Ubud dan Canggu, lalu Jimbaran, Uluwatu, dan Nusa Penida." },
        { h: "Horwath HTL: pipeline dan branded residences" },
        { ul: [
          "Pipeline aktif mencakup 5.641 kamar di 45 hotel, sebagian besar di Canggu, Jimbaran/Uluwatu, dan Ubud.",
          "Jimbaran dan Uluwatu mencatat tarif kamar rata-rata (ADR) tertinggi, yaitu Rp4,8 juta per malam.",
          "Nusa Dua mencatat okupansi tertinggi, 79,2%, didorong pasar MICE dan liburan.",
          "Lebih dari 70 proyek hunian yang dikelola operator hospitality sedang dipasarkan. Porsi penawaran freehold naik dari 12% menjadi 23%."
        ] },
        { h: "Artinya bagi pemilik dan investor tanah" },
        { p: "Tarif kamar yang tinggi di Jimbaran–Uluwatu menjelaskan mengapa lahan zona pariwisata dengan view laut di Bukit tetap dicari developer resort dan villa." },
        { note: "Ringkasan laporan riset pihak ketiga, bukan nasihat investasi." }
      ] },
    en: { tag: "Hotel market", title: "Luxury hotels keep coming: Jimbaran–Uluwatu has Bali's highest room rates",
      summary: "Colliers expects about 1,700 new luxury rooms by 2029. Horwath HTL puts the average rate in Jimbaran–Uluwatu at Rp4.8 million a night.",
      body: [
        { p: "Two research reports this year show where Bali's hotel development is heading." },
        { h: "Colliers: 1,700 new luxury rooms" },
        { p: "Colliers expects around 1,700 new hotel rooms to enter the market from the second half of 2026 to 2029, all in the luxury (five-star) segment. The main growth corridors are Ubud and Canggu, followed by Jimbaran, Uluwatu and Nusa Penida." },
        { h: "Horwath HTL: pipeline and branded residences" },
        { ul: [
          "The active pipeline covers 5,641 rooms in 45 hotels, mostly in Canggu, Jimbaran/Uluwatu and Ubud.",
          "Jimbaran and Uluwatu posted the highest average daily rate (ADR), at Rp4.8 million a night.",
          "Nusa Dua posted the highest occupancy, 79.2%, driven by MICE and leisure demand.",
          "More than 70 hospitality-managed residential projects are on sale, and the share of freehold offerings rose from 12% to 23%."
        ] },
        { h: "What it means for land owners and investors" },
        { p: "High room rates in Jimbaran–Uluwatu explain why tourism-zoned, ocean-view land on the Bukit remains in demand from resort and villa developers." },
        { note: "Summary of third-party research, not investment advice." }
      ] },
    ru: { tag: "Гостиничный рынок", title: "Люксовых отелей всё больше: самые высокие тарифы на Бали — в Джимбаране и Улувату",
      summary: "Colliers ожидает около 1700 новых люксовых номеров до 2029 года. По данным Horwath HTL, средний тариф в Джимбаране–Улувату — 4,8 млн рупий за ночь.",
      body: [
        { p: "Два исследования этого года показывают, куда движется гостиничное строительство на Бали." },
        { h: "Colliers: 1700 новых люксовых номеров" },
        { p: "По оценке Colliers, со второго полугодия 2026 до 2029 года на рынок выйдет около 1700 новых номеров — все в сегменте люкс (5 звёзд). Главные зоны роста — Убуд и Чангу, затем Джимбаран, Улувату и Нуса-Пенида." },
        { h: "Horwath HTL: стройки и брендированные резиденции" },
        { ul: [
          "В активной разработке — 5641 номер в 45 отелях, в основном в Чангу, Джимбаране/Улувату и Убуде.",
          "Самый высокий средний тариф (ADR) — в Джимбаране и Улувату: 4,8 млн рупий за ночь.",
          "Самая высокая загрузка — в Нуса-Дуа: 79,2% благодаря деловому и курортному спросу.",
          "В продаже более 70 жилых проектов под управлением гостиничных операторов; доля предложений во freehold выросла с 12% до 23%."
        ] },
        { h: "Что это значит для владельцев и инвесторов" },
        { p: "Высокие тарифы в Джимбаране–Улувату объясняют, почему участки с видом на океан в туристической зоне Букита по‑прежнему востребованы у девелоперов курортов и вилл." },
        { note: "Обзор сторонних исследований, не инвестиционная рекомендация." }
      ] }
  },
  {
    slug: "raffles-residences-jimbaran",
    date: "2026-11-04",
    ig: {"stat":"5,3 ha","statL":"lahan tepi laut Raffles Residences, Jimbaran","h":"28 hunian mewah bermerek Raffles di Jimbaran","pts":["Dikembangkan Accor & Kajima Development","Dikelola Raffles Hotels & Resorts (grup Accor)","Dibuka bertahap mulai kuartal II 2026"],"arti":"Branded residences menandakan Jimbaran & Bukit barat masuk radar investor kelas atas."},
    sources: [{ t: "HOTELS Magazine – Raffles Residences Bali set to open in 2026 (4 Des 2025)", u: "https://hotelsmag.com/news/raffles-residences-bali/" }],
    id: { tag: "Developer", title: "Raffles Residences Bali: 28 hunian mewah di lahan 5,3 hektare Jimbaran",
      summary: "Accor dan Kajima menghadirkan branded residences di samping Raffles Bali, dibuka bertahap mulai kuartal II 2026.",
      body: [
        { p: "Accor dan Kajima Development mengumumkan Raffles Residences Bali, proyek 28 hunian mewah di atas lahan tepi laut seluas 5,3 hektare di Jimbaran, bersebelahan dengan resort Raffles Bali." },
        { ul: [
          "Pengembang: PT Jimbaran Greenhill bersama PT Jimbaran Hijau.",
          "Pengelola: Raffles Hotels & Resorts, bagian dari grup Accor.",
          "Jadwal: dibuka mulai kuartal II 2026 secara bertahap."
        ] },
        { h: "Tren branded residences" },
        { p: "Hunian bermerek yang dikelola operator hotel internasional makin banyak di Bali. Pembeli mendapat standar layanan hotel, sementara pemilik lahan di sekitarnya mendapat sinyal bahwa kawasan Jimbaran Hijau dan Bukit bagian barat masuk radar investor kelas atas." },
        { note: "Ringkasan berita. Informasi harga tidak disebutkan oleh sumber." }
      ] },
    en: { tag: "Developers", title: "Raffles Residences Bali: 28 luxury homes on a 5.3-hectare Jimbaran estate",
      summary: "Accor and Kajima are bringing branded residences next to Raffles Bali, opening in phases from Q2 2026.",
      body: [
        { p: "Accor and Kajima Development announced Raffles Residences Bali, 28 luxury homes on a 5.3-hectare oceanfront estate in Jimbaran, next to the Raffles Bali resort." },
        { ul: [
          "Developers: PT Jimbaran Greenhill with PT Jimbaran Hijau.",
          "Manager: Raffles Hotels & Resorts, part of Accor.",
          "Timing: opening in phases from Q2 2026."
        ] },
        { h: "The branded-residence trend" },
        { p: "Branded homes managed by international hotel operators are increasingly common in Bali. Buyers get hotel-standard services, and nearby land owners get a signal that the Jimbaran Hijau area and the western Bukit are on high-end investors' radar." },
        { note: "News summary. The source does not mention prices." }
      ] },
    ru: { tag: "Девелоперы", title: "Raffles Residences Bali: 28 элитных домов на участке 5,3 га в Джимбаране",
      summary: "Accor и Kajima строят брендированные резиденции рядом с Raffles Bali; открытие поэтапно со II квартала 2026 года.",
      body: [
        { p: "Accor и Kajima Development объявили о проекте Raffles Residences Bali — 28 элитных домов на участке 5,3 га у океана в Джимбаране, рядом с курортом Raffles Bali." },
        { ul: [
          "Девелоперы: PT Jimbaran Greenhill совместно с PT Jimbaran Hijau.",
          "Управление: Raffles Hotels & Resorts (группа Accor).",
          "Сроки: поэтапное открытие со II квартала 2026 года."
        ] },
        { h: "Тренд на брендированные резиденции" },
        { p: "Брендированных домов под управлением международных гостиничных операторов на Бали становится больше. Покупатели получают гостиничный сервис, а владельцы соседней земли — сигнал, что район Jimbaran Hijau и западный Букит интересны состоятельным инвесторам." },
        { note: "Обзор новостей. Цены в источнике не указаны." }
      ] }
  },
  {
    slug: "rejuvenasi-nusa-dua-itdc",
    date: "2026-11-04",
    sources: [{ t: "ITDC – Kick-off proyek rejuvenasi The Nusa Dua (28 Jan 2026)", u: "https://www.itdc.co.id/press-release/setelah-52-tahun-the-nusa-dua-hadirkan-wajah-baru-itdc-melaksanakan-kick-off-proyek-rejuvenasi-the-nusa-dua-20260128131655" }],
    id: { tag: "Infrastruktur", title: "The Nusa Dua diremajakan: proyek tiga tahun ITDC 2026–2028",
      summary: "Transformasi terbesar kawasan Nusa Dua sejak 1973: jalan, penerangan, akses Peninsula Island, dan pulau wellness baru.",
      body: [
        { p: "ITDC, pengelola kawasan The Nusa Dua, memulai proyek peremajaan pada 28 Januari 2026. ITDC menyebutnya transformasi terbesar sejak kawasan ini mulai dikembangkan pada 1973." },
        { h: "Lingkup pekerjaan" },
        { ul: [
          "Pelapisan ulang jalan sepanjang 3,7 km dan penerangan baru di 7,5 km jalur pejalan kaki.",
          "Penataan akses ke Peninsula Island, termasuk panggung acara, akses ke Water Blow, dan area pernikahan.",
          "Pulau Nusa Dharma diubah menjadi pulau wellness dengan fasilitas yoga, meditasi, dan kebugaran.",
          "Fasilitas pengolahan sampah (TPS3R) hingga 5.000 m²."
        ] },
        { p: "Proyek dikerjakan bertahap selama tiga tahun, 2026–2028." },
        { h: "Dampak ke sekitar" },
        { p: "Nusa Dua sudah mencatat okupansi hotel tertinggi di Bali. Peremajaan kawasan ini dapat memperkuat daya tarik Kuta Selatan bagian timur, termasuk Benoa, Sawangan, dan area penyangga di sekitarnya." },
        { note: "Ringkasan siaran pers. Nilai anggaran tidak disebutkan." }
      ] },
    en: { tag: "Infrastructure", title: "The Nusa Dua gets a makeover: ITDC's three-year project, 2026–2028",
      summary: "The biggest transformation of Nusa Dua since 1973: roads, lighting, Peninsula Island access and a new wellness island.",
      body: [
        { p: "ITDC, which manages The Nusa Dua resort area, kicked off a rejuvenation project on 28 January 2026, calling it the biggest transformation since development began in 1973." },
        { h: "Scope" },
        { ul: [
          "Resurfacing 3.7 km of roads and new lighting along 7.5 km of walkways.",
          "Reorganised access to Peninsula Island, including an event stage, access to Water Blow and a wedding area.",
          "Nusa Dharma island turned into a wellness island with yoga, meditation and fitness facilities.",
          "A waste-processing facility (TPS3R) of up to 5,000 m²."
        ] },
        { p: "The project runs in phases over three years, 2026–2028." },
        { h: "Impact on the surrounding area" },
        { p: "Nusa Dua already has Bali's highest hotel occupancy. The rejuvenation could strengthen the appeal of eastern South Kuta, including Benoa, Sawangan and nearby areas." },
        { note: "Press release summary. No budget was disclosed." }
      ] },
    ru: { tag: "Инфраструктура", title: "Обновление The Nusa Dua: трёхлетний проект ITDC на 2026–2028 годы",
      summary: "Крупнейшая трансформация Нуса-Дуа с 1973 года: дороги, освещение, доступ к Peninsula Island и новый велнес-остров.",
      body: [
        { p: "ITDC, управляющая курортной зоной The Nusa Dua, 28 января 2026 года начала проект обновления — крупнейшую трансформацию с начала освоения района в 1973 году." },
        { h: "Что входит в проект" },
        { ul: [
          "Новое покрытие на 3,7 км дорог и освещение вдоль 7,5 км пешеходных дорожек.",
          "Новая организация доступа к Peninsula Island: сцена для мероприятий, подход к Water Blow, свадебная площадка.",
          "Остров Нуса-Дхарма станет велнес-островом с площадками для йоги, медитации и фитнеса.",
          "Станция переработки отходов (TPS3R) площадью до 5000 м²."
        ] },
        { p: "Работы идут поэтапно три года — с 2026 по 2028." },
        { h: "Влияние на окрестности" },
        { p: "У Нуса-Дуа и так самая высокая загрузка отелей на Бали. Обновление может усилить привлекательность восточной части Южной Куты, включая Беноа, Саванган и соседние районы." },
        { note: "Обзор пресс-релиза. Бюджет не раскрыт." }
      ] }
  },
  {
    slug: "penertiban-villa-ilegal-wna-2026",
    date: "2026-11-04",
    sources: [
      { t: "Lentera Esai – 12 WNA dideportasi dari Bali, 7 terlibat pemasaran vila ilegal (30 Okt 2026)", u: "https://lenteraesai.id/2026/10/30/12-wna-dideportasi-dari-bali-7-terlibat-pemasaran-vila-ilegal/" },
      { t: "NusaBali – Satpol PP Badung stop operasional vila di Desa Kutuh (27 Agu 2025)", u: "https://www.nusabali.com/berita/200063/satpol-pp-badung-stop-operasional-vila-di-desa-kutuh" }
    ],
    id: { tag: "Regulasi", title: "Penertiban villa ilegal berlanjut: 7 WNA dideportasi karena memasarkan villa dan wisata",
      summary: "Imigrasi Ngurah Rai mendeportasi 12 WNA pada Oktober 2026. Sebelumnya, villa milik WNA di Kutuh dihentikan karena tidak punya PBG dan SLF.",
      body: [
        { p: "Kantor Imigrasi Ngurah Rai mendeportasi 12 warga negara asing pada 13–23 Oktober 2026 setelah patroli di wilayah Badung. Tujuh di antaranya menyalahgunakan izin tinggal untuk memasarkan wisata dan akomodasi, termasuk sewa villa lewat situs web, media sosial, dan Telegram. Lima lainnya melebihi masa izin tinggal (overstay)." },
        { h: "Pelajaran dari kasus Kutuh" },
        { p: "Pada Agustus 2025, Satpol PP Badung menghentikan operasional sebuah villa milik WNA di Jalan Karang Pandawa, Desa Kutuh, dengan sembilan kamar. Villa itu tidak memiliki Persetujuan Bangunan Gedung (PBG) dan Sertifikat Laik Fungsi (SLF). Petugas menegaskan bahwa pendaftaran perusahaan PMA tidak otomatis memberi izin untuk mengoperasikan villa." },
        { h: "Yang perlu diperhatikan investor" },
        { ul: [
          "Pastikan villa yang dibeli atau dibangun memiliki PBG, SLF, dan izin usaha akomodasi yang sesuai.",
          "Pemasaran dan pengelolaan villa harus dilakukan oleh pihak dengan izin kerja atau usaha yang benar.",
          "Bekerjalah dengan agen dan notaris/PPAT lokal yang terdaftar."
        ] },
        { note: "Ringkasan berita, bukan nasihat hukum. Konsultasikan dengan notaris/PPAT dan konsultan perizinan." }
      ] },
    en: { tag: "Regulation", title: "Crackdown on illegal villas continues: 7 foreigners deported for marketing villas and tours",
      summary: "Ngurah Rai Immigration deported 12 foreigners in October 2026. Earlier, a foreign-owned villa in Kutuh was shut for lacking PBG and SLF permits.",
      body: [
        { p: "The Ngurah Rai Immigration Office deported 12 foreign nationals between 13 and 23 October 2026 after patrols in Badung. Seven had misused their stay permits to market tours and accommodation, including villa rentals via websites, social media and Telegram. Five had overstayed." },
        { h: "Lessons from the Kutuh case" },
        { p: "In August 2025, Badung's public order agency (Satpol PP) stopped a nine-room foreign-owned villa on Jalan Karang Pandawa, Kutuh, from operating. It had no building approval (PBG) or certificate of fitness for use (SLF). Officials stressed that registering a foreign-owned company (PT PMA) does not automatically permit operating a villa." },
        { h: "What investors should watch" },
        { ul: [
          "Make sure any villa you buy or build has a PBG, an SLF and the right accommodation business licence.",
          "Villa marketing and management must be done by parties with the correct work or business permits.",
          "Work with registered local agents and notaries/PPAT."
        ] },
        { note: "News summary, not legal advice. Consult a notary/PPAT and a licensing consultant." }
      ] },
    ru: { tag: "Законы", title: "Проверки нелегальных вилл продолжаются: 7 иностранцев депортированы за продвижение вилл и туров",
      summary: "Иммиграционная служба Нгурах-Рай в октябре 2026 года депортировала 12 иностранцев. Ранее виллу иностранца в Кутухе закрыли из‑за отсутствия разрешений PBG и SLF.",
      body: [
        { p: "Иммиграционная служба Нгурах-Рай с 13 по 23 октября 2026 года депортировала 12 иностранцев после проверок в Бадунге. Семеро использовали визы не по назначению — продвигали туры и жильё, в том числе аренду вилл через сайты, соцсети и Telegram. Ещё пятеро превысили срок пребывания." },
        { h: "Урок из случая в Кутухе" },
        { p: "В августе 2025 года служба общественного порядка Бадунга (Satpol PP) остановила работу виллы на девять номеров, принадлежащей иностранцу, на Jalan Karang Pandawa в Кутухе. У неё не было разрешения на строительство (PBG) и сертификата пригодности (SLF). Чиновники подчеркнули: регистрация компании PT PMA не даёт автоматического права сдавать виллу." },
        { h: "На что обратить внимание инвестору" },
        { ul: [
          "У виллы, которую вы покупаете или строите, должны быть PBG, SLF и лицензия на гостиничный бизнес.",
          "Продвижением и управлением виллой должны заниматься лица с правильными разрешениями на работу или бизнес.",
          "Работайте с зарегистрированными местными агентами и нотариусами/PPAT."
        ] },
        { note: "Обзор новостей, не юридическая консультация. Обратитесь к нотариусу/PPAT и консультанту по лицензированию." }
      ] }
  }
];

module.exports = { NEWS };
