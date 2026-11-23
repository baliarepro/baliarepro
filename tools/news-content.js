// Isi halaman News (berita properti Bali). Urut dari TERBARU. Berita baru ditambahkan di AWAL array.
// Setiap berita: slug, date (tanggal terbit di website), sources [{t,u}], lalu id/en/ru: {tag, title, summary, body:[blok]}
// Blok: {h} {p} {ul:[...]} {note}
// ig (untuk carousel Instagram mingguan, Bahasa Indonesia, singkat): {stat: angka utama ≤9 karakter, statL: keterangan angka, h: judul slide ≤60 karakter,
//    pts: [3 fakta ≤70 karakter], arti: 1 kalimat "artinya bagi Anda" ≤110 karakter}. Tanpa ig, slide dibuat otomatis dari judul & isi.
const NEWS = [
  {
    "slug": "ump-bali-2027-naik-42-persen-hotel-villa",
    "date": "2026-11-23",
    "ig": {
      "stat": "+42,15%",
      "statL": "UMP Bali 2027: Rp4.559.287 per bulan, berlaku 1 Januari 2027",
      "h": "UMP Bali 2027 naik 42,15%, hotel berbintang Rp4,64 juta",
      "pts": [
        "Naik Rp1.351.828 dari UMP 2026 sebesar Rp3.207.459",
        "Upah minimum sektor hotel berbintang: Rp4.644.907 per bulan",
        "Badung bahas UMK 2027 mulai 23 Nov; UMK Badung 2026 Rp3,79 juta"
      ],
      "arti": "Biaya staf villa dan hotel naik mulai 2027: hitung ulang proyeksi imbal hasil sewa sebelum membeli."
    },
    "sources": [
      {
        "t": "ANTARA News Bali – UMP Bali 2027 naik drastis jadi Rp4,55 juta, ini pertimbangan yang dilakukan Gubernur Koster (20 Nov 2026)",
        "u": "https://bali.antaranews.com/berita/419511/ump-bali-2027-naik-drastis-jadi-rp455-juta-ini-pertimbangan-yang-dilakukan-gubernur-koster"
      },
      {
        "t": "Bali Post – UMP Bali 2027 tembus Rp4,55 juta, Disperinaker Badung segera bahas UMK dan UMSK (22 Nov 2026)",
        "u": "https://www.balipost.com/news/2026/11/22/598725/UMP-Bali-2027-Tembus-Rp4,55...html"
      }
    ],
    "id": {
      "tag": "Regulasi",
      "title": "UMP Bali 2027 naik 42,15% jadi Rp4.559.287, upah minimum hotel berbintang Rp4.644.907",
      "summary": "Gubernur Bali Wayan Koster menetapkan UMP 2027 sebesar Rp4.559.287 per bulan, naik 42,15% dari 2026, serta upah minimum sektor hotel berbintang Rp4.644.907. Keduanya berlaku 1 Januari 2027; Badung mulai membahas UMK 2027.",
      "body": [
        {
          "p": "Pemprov Bali menetapkan Upah Minimum Provinsi (UMP) 2027 sebesar Rp4.559.287 per bulan lewat Keputusan Gubernur Bali Nomor 995/03-M/HK/2026 yang ditandatangani Jumat, 20 November 2026. Angka ini naik Rp1.351.828 atau 42,15% dari UMP 2026 sebesar Rp3.207.459, dan berlaku mulai 1 Januari 2027."
        },
        {
          "h": "Fakta utama"
        },
        {
          "ul": [
            "Gubernur juga menetapkan Upah Minimum Sektoral Provinsi (UMSP) 2027 untuk hotel berbintang sebesar Rp4.644.907 per bulan.",
            "Menurut ANTARA, penetapan merujuk pada berita acara Dewan Pengupahan Provinsi tertanggal 18 November 2026. Kebutuhan hidup layak (KHL) 2027 ditetapkan Rp5.604.481, sehingga UMP setara 81,35% KHL.",
            "Disperinaker Badung menjadwalkan sidang Dewan Pengupahan pada Senin, 23 November 2026, untuk rekomendasi UMK dan UMSK Badung 2027; angkanya belum diketahui.",
            "Sebagai pembanding, Bali Post mencatat UMK Badung 2026 sebesar Rp3.791.002,57 dan UMSK hotel bintang 4 dan 5 di Badung Rp3.828.912,60, tertinggi di Bali."
          ]
        },
        {
          "h": "Artinya bagi buyer, investor, dan pemilik villa"
        },
        {
          "p": "Gaji staf adalah salah satu biaya terbesar villa sewaan dan hotel. Dengan kenaikan upah minimum sebesar ini, biaya operasional properti sewaan di Bali, termasuk Kuta Selatan, akan naik mulai 2027, sementara UMK Badung yang biasanya lebih tinggi dari UMP masih akan ditetapkan. Bagi calon buyer villa investasi, Bali Are Property (agen independen sejak 2009) menyarankan meminta rincian biaya staf dalam proyeksi imbal hasil dari developer atau pengelola, dan memastikan angkanya sudah memakai upah 2027. Pemilik villa sebaiknya meninjau tarif sewa dan struktur staf sebelum tahun depan."
        },
        {
          "note": "Catatan: ringkasan ini bukan nasihat hukum maupun nasihat investasi. Besaran UMK/UMSK Badung 2027 masih menunggu penetapan resmi."
        }
      ]
    },
    "en": {
      "tag": "Regulation",
      "title": "Bali's 2027 minimum wage rises 42.15% to Rp4,559,287; star-hotel minimum set at Rp4,644,907",
      "summary": "Bali Governor Wayan Koster set the 2027 provincial minimum wage (UMP) at Rp4,559,287 per month, up 42.15% from 2026, plus a star-hotel sector minimum of Rp4,644,907. Both take effect on 1 January 2027; Badung has started discussing its 2027 regency wage.",
      "body": [
        {
          "p": "The Bali provincial government set the 2027 Provincial Minimum Wage (UMP) at Rp4,559,287 per month through Bali Governor Decree No. 995/03-M/HK/2026, signed on Friday, 20 November 2026. This is an increase of Rp1,351,828, or 42.15%, from the 2026 UMP of Rp3,207,459, and applies from 1 January 2027."
        },
        {
          "h": "Key facts"
        },
        {
          "ul": [
            "The governor also set the 2027 Provincial Sectoral Minimum Wage (UMSP) for star hotels at Rp4,644,907 per month.",
            "According to ANTARA, the decision refers to the minutes of the Provincial Wage Council dated 18 November 2026. The 2027 decent living needs figure (KHL) was set at Rp5,604,481, so the UMP equals 81.35% of KHL.",
            "Badung's Manpower Office scheduled a Wage Council session on Monday, 23 November 2026, for its 2027 regency (UMK) and sectoral (UMSK) wage recommendations; the figures are not yet known.",
            "For comparison, Bali Post reports Badung's 2026 UMK at Rp3,791,002.57 and the 2026 UMSK for 4- and 5-star hotels in Badung at Rp3,828,912.60, the highest in Bali."
          ]
        },
        {
          "h": "What it means for buyers, investors and villa owners"
        },
        {
          "p": "Staff salaries are one of the largest costs of rental villas and hotels. With a minimum-wage increase of this size, operating costs for rental properties in Bali, including South Kuta, will rise from 2027, while Badung's UMK, which is usually higher than the UMP, is still to be set. For buyers of investment villas, Bali Are Property (an independent agency since 2009) recommends asking developers or managers for the staff-cost breakdown in their yield projections and checking that it already uses 2027 wages. Villa owners should review rental rates and staffing before next year."
        },
        {
          "note": "Note: this summary is not legal or investment advice. Badung's 2027 UMK/UMSK is still awaiting official determination."
        }
      ]
    },
    "ru": {
      "tag": "Регулирование",
      "title": "Минимальная зарплата на Бали в 2027 году вырастет на 42,15% до Rp4 559 287; для звёздных отелей — Rp4 644 907",
      "summary": "Губернатор Бали Ваян Костер установил минимальную зарплату провинции (UMP) на 2027 год в Rp4 559 287 в месяц, на 42,15% выше 2026 года, а также отраслевой минимум для звёздных отелей Rp4 644 907. Оба действуют с 1 января 2027 года; Бадунг начал обсуждать свой минимум на 2027 год.",
      "body": [
        {
          "p": "Правительство провинции Бали установило минимальную зарплату провинции (UMP) на 2027 год в размере Rp4 559 287 в месяц решением губернатора Бали № 995/03-M/HK/2026, подписанным в пятницу, 20 ноября 2026 года. Это рост на Rp1 351 828, или 42,15%, по сравнению с UMP 2026 года (Rp3 207 459); новая ставка действует с 1 января 2027 года."
        },
        {
          "h": "Основные факты"
        },
        {
          "ul": [
            "Губернатор также установил отраслевую минимальную зарплату провинции (UMSP) на 2027 год для звёздных отелей — Rp4 644 907 в месяц.",
            "По данным ANTARA, решение основано на протоколе Совета по заработной плате провинции от 18 ноября 2026 года. Прожиточный уровень (KHL) на 2027 год определён в Rp5 604 481, то есть UMP составляет 81,35% KHL.",
            "Управление труда Бадунга назначило заседание Совета по заработной плате на понедельник, 23 ноября 2026 года, для рекомендаций по UMK и UMSK Бадунга на 2027 год; цифры пока неизвестны.",
            "Для сравнения, по данным Bali Post, UMK Бадунга в 2026 году — Rp3 791 002,57, а UMSK для отелей 4 и 5 звёзд в Бадунге — Rp3 828 912,60, самые высокие на Бали."
          ]
        },
        {
          "h": "Что это значит для покупателей, инвесторов и владельцев вилл"
        },
        {
          "p": "Зарплата персонала — одна из крупнейших статей расходов арендных вилл и отелей. При таком росте минимальной зарплаты операционные расходы арендной недвижимости на Бали, включая Южную Куту, вырастут с 2027 года, а UMK Бадунга, обычно выше UMP, ещё предстоит установить. Покупателям инвестиционных вилл Bali Are Property (независимое агентство с 2009 года) советует запрашивать у девелопера или управляющей компании расшифровку расходов на персонал в прогнозе доходности и проверять, что в расчёте уже используются зарплаты 2027 года. Владельцам вилл стоит пересмотреть арендные ставки и штат до следующего года."
        },
        {
          "note": "Примечание: этот обзор не является юридической или инвестиционной консультацией. UMK/UMSK Бадунга на 2027 год ещё ожидают официального утверждения."
        }
      ]
    }
  },
  {
    "slug": "bi-indeks-sewa-apartemen-bali-triwulan-3-2026",
    "date": "2026-11-23",
    "ig": {
      "stat": "+23,18%",
      "statL": "kenaikan tahunan indeks harga sewa apartemen Bali, triwulan III 2026 (BI)",
      "h": "BI: sewa apartemen naik, harga properti komersial turun",
      "pts": [
        "Indeks harga properti komersial Bali turun 6,16% dari triwulan II",
        "Permintaan sewa apartemen, hotel, dan kantor turun 3,52%",
        "Colliers: 41% apartemen Bali di Nusa Dua, 16% di Uluwatu"
      ],
      "arti": "Unit kecil sewaan di Nusa Dua–Uluwatu menarik, tapi persaingan akomodasi ketat: hitung okupansi realistis."
    },
    "sources": [
      {
        "t": "ANTARA News Bali – Segmentasi sewa apartemen saat ini jadi pilihan wisatawan di Bali (20 Nov 2026)",
        "u": "https://bali.antaranews.com/berita/419479/segmentasi-sewa-apartemen-saat-ini-jadi-pilihan-wisatawan-di-bali"
      },
      {
        "t": "detikProperti – Apartemen kalah pamor, vila tetap jadi primadona di Bali (8 Jan 2026)",
        "u": "https://www.detik.com/properti/berita/d-8296895/apartemen-kalah-pamor-vila-tetap-jadi-primadona-di-bali"
      }
    ],
    "id": {
      "tag": "Data Pasar",
      "title": "BI: indeks harga sewa apartemen di Bali naik 23,18%, harga properti komersial turun 6,16% di triwulan III 2026",
      "summary": "Bank Indonesia Bali mencatat indeks harga sewa apartemen naik 23,18% secara tahunan pada triwulan III 2026, sementara indeks harga properti komersial turun 6,16% dibanding triwulan sebelumnya. Permintaan sewa apartemen, hotel, dan kantor turun 3,52%.",
      "body": [
        {
          "p": "Kepala Perwakilan Bank Indonesia Provinsi Bali, Achris Sarwani, di Denpasar pada Jumat, 20 November 2026, menyebut segmen sewa apartemen kini menjadi pilihan wisatawan. Indeks harga sewanya tumbuh 23,18% secara tahunan (yoy) pada triwulan III 2026. Menurut Achris, kondisi ini menandakan perubahan preferensi konsumen."
        },
        {
          "h": "Data triwulan III 2026"
        },
        {
          "ul": [
            "Indeks harga properti komersial di Bali terkontraksi 6,16% dibanding triwulan II 2026; penyesuaian harga masih terjadi di segmen hotel, ritel sewa, dan perkantoran sewa.",
            "Permintaan apartemen sewa, hotel, dan perkantoran sewa tercatat turun 3,52%. Kantor sewa tertekan oleh pergeseran ke ruang kerja yang lebih fleksibel; hotel dan apartemen terdampak ketatnya persaingan penyedia akomodasi dan perubahan pola perjalanan.",
            "Mengutip BPS Bali, ekonomi Bali tumbuh 5,85% pada triwulan III 2026, didorong konsumsi rumah tangga, investasi, pariwisata, dan konstruksi.",
            "Sebagai konteks, data Colliers Indonesia yang dipaparkan Januari 2026 (detikProperti) mencatat sekitar 3.200 unit apartemen di Bali pada 2025: 41% di Nusa Dua, 25% di Canggu, dan 16% di Uluwatu. Permintaan didominasi unit leasehold (hak sewa) 25–35 tahun; studio dan satu kamar paling laku, dan villa tetap mendominasi pasar tinggal lama."
          ]
        },
        {
          "h": "Artinya bagi buyer dan investor"
        },
        {
          "p": "Kenaikan indeks sewa apartemen menunjukkan ada permintaan untuk unit kecil yang harganya lebih terjangkau dari villa, dan lebih dari separuh pasokan apartemen Bali ada di Kuta Selatan (Nusa Dua dan Uluwatu). Namun turunnya permintaan hotel dan apartemen serta koreksi harga properti komersial adalah sinyal persaingan yang ketat. Bali Are Property (agen independen sejak 2009) menyarankan buyer unit sewaan menilai lokasi, sisa masa leasehold, dan pengelola, serta memakai asumsi okupansi yang realistis, bukan angka promosi."
        },
        {
          "note": "Catatan: ringkasan data ini bukan nasihat investasi."
        }
      ]
    },
    "en": {
      "tag": "Market Data",
      "title": "Bank Indonesia: Bali apartment rental price index up 23.18%, commercial property prices down 6.16% in Q3 2026",
      "summary": "Bank Indonesia's Bali office recorded a 23.18% year-on-year rise in the apartment rental price index in Q3 2026, while the commercial property price index fell 6.16% from the previous quarter. Demand for rental apartments, hotels and offices fell 3.52%.",
      "body": [
        {
          "p": "The head of Bank Indonesia's Bali representative office, Achris Sarwani, said in Denpasar on Friday, 20 November 2026, that the apartment rental segment has become a choice for tourists. Its rental price index grew 23.18% year on year (yoy) in Q3 2026. According to Achris, this signals a change in consumer preferences."
        },
        {
          "h": "Q3 2026 data"
        },
        {
          "ul": [
            "Bali's commercial property price index contracted 6.16% compared with Q2 2026; price adjustments continued in the hotel, retail rental and office rental segments.",
            "Demand for rental apartments, hotels and rental offices fell 3.52%. Rental offices were hit by a shift to more flexible workspaces; hotels and apartments were affected by tight competition among accommodation providers and changing travel patterns.",
            "Citing BPS Bali, Bali's economy grew 5.85% in Q3 2026, driven by household consumption, investment, tourism and construction.",
            "For context, Colliers Indonesia data presented in January 2026 (detikProperti) counted about 3,200 apartment units in Bali in 2025: 41% in Nusa Dua, 25% in Canggu and 16% in Uluwatu. Demand is dominated by leasehold units of 25–35 years; studios and one-bedroom units sell best, and villas still dominate the long-stay market."
          ]
        },
        {
          "h": "What it means for buyers and investors"
        },
        {
          "p": "The rise in the apartment rental index shows demand for small units that are more affordable than villas, and more than half of Bali's apartment supply is in South Kuta (Nusa Dua and Uluwatu). However, falling hotel and apartment demand and the correction in commercial property prices signal tight competition. Bali Are Property (an independent agency since 2009) recommends that buyers of rental units assess the location, the remaining leasehold term and the operator, and use realistic occupancy assumptions rather than promotional figures."
        },
        {
          "note": "Note: this data summary is not investment advice."
        }
      ]
    },
    "ru": {
      "tag": "Данные рынка",
      "title": "Банк Индонезии: индекс арендных ставок апартаментов на Бали вырос на 23,18%, цены коммерческой недвижимости снизились на 6,16% в III квартале 2026",
      "summary": "Представительство Банка Индонезии на Бали зафиксировало рост индекса арендных ставок апартаментов на 23,18% в годовом выражении в III квартале 2026 года, тогда как индекс цен коммерческой недвижимости снизился на 6,16% к предыдущему кварталу. Спрос на аренду апартаментов, отели и офисы упал на 3,52%.",
      "body": [
        {
          "p": "Глава представительства Банка Индонезии на Бали Ахрис Сарвани заявил в Денпасаре в пятницу, 20 ноября 2026 года, что сегмент аренды апартаментов стал выбором туристов. Индекс арендных ставок вырос на 23,18% в годовом выражении (yoy) в III квартале 2026 года. По словам Ахриса, это говорит об изменении предпочтений потребителей."
        },
        {
          "h": "Данные за III квартал 2026"
        },
        {
          "ul": [
            "Индекс цен коммерческой недвижимости на Бали снизился на 6,16% по сравнению со II кварталом 2026 года; корректировка цен продолжилась в сегментах отелей, арендной торговой недвижимости и арендных офисов.",
            "Спрос на арендные апартаменты, отели и арендные офисы снизился на 3,52%. На офисы повлиял переход к более гибким рабочим пространствам; на отели и апартаменты — жёсткая конкуренция среди поставщиков жилья и изменение моделей путешествий.",
            "Со ссылкой на BPS Бали: экономика Бали выросла на 5,85% в III квартале 2026 года благодаря потреблению домохозяйств, инвестициям, туризму и строительству.",
            "Для контекста: по данным Colliers Indonesia, представленным в январе 2026 года (detikProperti), в 2025 году на Бали было около 3 200 апартаментов: 41% в Нуса-Дуа, 25% в Чангу и 16% в Улувату. Спрос формируют юниты на праве аренды (leasehold) на 25–35 лет; лучше всего продаются студии и однокомнатные, а на рынке долгосрочного проживания по-прежнему доминируют виллы."
          ]
        },
        {
          "h": "Что это значит для покупателей и инвесторов"
        },
        {
          "p": "Рост индекса аренды апартаментов показывает спрос на небольшие юниты, более доступные, чем виллы, причём более половины предложения апартаментов Бали находится в Южной Куте (Нуса-Дуа и Улувату). Однако снижение спроса на отели и апартаменты и коррекция цен коммерческой недвижимости указывают на жёсткую конкуренцию. Bali Are Property (независимое агентство с 2009 года) советует покупателям арендных юнитов оценивать локацию, оставшийся срок leasehold и управляющую компанию и закладывать реалистичную загрузку, а не рекламные цифры."
        },
        {
          "note": "Примечание: этот обзор данных не является инвестиционной консультацией."
        }
      ]
    }
  },
  {
    "slug": "fodors-no-list-2027-bali-dispar",
    "date": "2026-11-23",
    "ig": {
      "stat": "8",
      "statL": "destinasi di Fodor's No List 2027, salah satunya Bali",
      "h": "Bali masuk Fodor's No List 2027, Dispar: Bali tetap aman",
      "pts": [
        "Alasan: polusi bakar sampah, alih fungsi lahan pertanian, tekanan air",
        "Daftar lain: Amalfi, Kyoto, Edinburgh, Corsica, Sedona, dan lainnya",
        "Dispar Bali: Bali sangat aman dan sangat layak dikunjungi"
      ],
      "arti": "Air, sampah, dan tata ruang makin disorot: cek sumber air dan zonasi sebelum membeli lahan atau villa."
    },
    "sources": [
      {
        "t": "ANTARA News Bali – Disorot media asing, Dinas Pariwisata tegaskan Bali tetap layak dikunjungi (19 Nov 2026)",
        "u": "https://bali.antaranews.com/berita/419383/disorot-media-asing-dinas-pariwisata-tegaskan-bali-tetap-layak-dikunjungi"
      }
    ],
    "id": {
      "tag": "Pasar",
      "title": "Bali masuk Fodor's \"No List 2027\", Dinas Pariwisata tegaskan Bali tetap aman dan layak dikunjungi",
      "summary": "Media perjalanan Fodor's Travel memasukkan Bali ke \"No List 2027\" bersama tujuh destinasi lain, dengan alasan polusi pembakaran sampah, menyusutnya lahan pertanian, dan tekanan pada sumber air. Dinas Pariwisata Bali menegaskan Bali tetap aman.",
      "body": [
        {
          "p": "Fodor's Travel merilis \"No List 2027\" pada November 2026, daftar delapan destinasi yang disarankan untuk dipertimbangkan ulang sebagai tujuan wisata pada 2027. Bali termasuk di dalamnya, bersama Riviera Albania, Pantai Amalfi (Italia), Corsica (Prancis), Edinburgh (Skotlandia), Kyoto (Jepang), Kawasan Konservasi Ngorongoro (Tanzania), dan Sedona, Arizona (AS)."
        },
        {
          "h": "Alasan dan tanggapan"
        },
        {
          "ul": [
            "Untuk Bali, Fodor's menyoroti polusi udara dari pembakaran sampah, menyusutnya lahan pertanian akibat alih fungsi lahan, dan tekanan terhadap sumber daya air.",
            "Kepala Dinas Pariwisata Bali I Wayan Sumarajaya di Denpasar, Kamis (19/11), menegaskan Bali sangat aman, sangat layak dikunjungi, dan tetap salah satu destinasi terbaik dunia.",
            "Menurutnya, pemerintah dan pelaku industri sudah menangani isu lingkungan, pengelolaan sampah, dan kemacetan. Ia juga menyebut sejumlah penghargaan World Travel Awards 2026 tingkat Asia untuk Bali, antara lain Asia's Leading Wedding Destination dan Asia's Leading Green Resort.",
            "Sumarajaya menegaskan pertumbuhan pariwisata harus diimbangi tata kelola yang lebih baik, perlindungan alam, dan pelestarian budaya sesuai visi Nangun Sat Kerthi Loka Bali."
          ]
        },
        {
          "h": "Artinya bagi buyer dan investor"
        },
        {
          "p": "Daftar seperti ini lebih memengaruhi persepsi daripada data kunjungan, tetapi isu yang diangkat, yaitu air, sampah, dan alih fungsi lahan, juga yang mendorong pengetatan izin dan tata ruang di Bali. Bagi buyer, ini pengingat untuk memeriksa sumber air (PDAM atau sumur bor berizin), pengelolaan limbah, dan zonasi sebelum membeli lahan atau villa, terutama di area yang berkembang cepat seperti Kuta Selatan dan Kuta Utara. Bali Are Property (agen independen sejak 2009) melihat properti dengan izin dan infrastruktur dasar yang jelas akan makin bernilai bila aturan terus diperketat."
        }
      ]
    },
    "en": {
      "tag": "Market",
      "title": "Bali makes Fodor's \"No List 2027\"; Tourism Office insists Bali remains safe and worth visiting",
      "summary": "Travel media Fodor's Travel put Bali on its \"No List 2027\" alongside seven other destinations, citing air pollution from waste burning, shrinking farmland and pressure on water resources. Bali's Tourism Office insists the island remains safe.",
      "body": [
        {
          "p": "Fodor's Travel published its \"No List 2027\" in November 2026, a list of eight destinations travellers are advised to reconsider for 2027. Bali is on it, together with the Albanian Riviera, the Amalfi Coast (Italy), Corsica (France), Edinburgh (Scotland), Kyoto (Japan), the Ngorongoro Conservation Area (Tanzania) and Sedona, Arizona (USA)."
        },
        {
          "h": "Reasons and response"
        },
        {
          "ul": [
            "For Bali, Fodor's highlighted air pollution from waste burning, shrinking farmland due to land conversion, and pressure on water resources.",
            "The head of the Bali Tourism Office, I Wayan Sumarajaya, said in Denpasar on Thursday (19/11) that Bali is very safe, very much worth visiting, and still one of the world's best destinations.",
            "He said the government and industry have been addressing the environment, waste management and traffic congestion. He also cited several 2026 World Travel Awards (Asia) for Bali, including Asia's Leading Wedding Destination and Asia's Leading Green Resort.",
            "Sumarajaya stressed that tourism growth must be matched by better governance, protection of nature and preservation of culture, in line with the Nangun Sat Kerthi Loka Bali vision."
          ]
        },
        {
          "h": "What it means for buyers and investors"
        },
        {
          "p": "Lists like this affect perception more than visitor data, but the issues raised (water, waste and land conversion) are the same ones driving tighter permits and spatial planning in Bali. For buyers, it is a reminder to check the water source (PDAM mains or a licensed borehole), waste management and zoning before buying land or a villa, especially in fast-growing areas such as South Kuta and North Kuta. Bali Are Property (an independent agency since 2009) expects properties with clear permits and basic infrastructure to become more valuable as rules keep tightening."
        }
      ]
    },
    "ru": {
      "tag": "Рынок",
      "title": "Бали попал в «No List 2027» Fodor's; туристическое управление настаивает, что остров безопасен и достоин посещения",
      "summary": "Туристическое издание Fodor's Travel включило Бали в «No List 2027» вместе с семью другими направлениями, указав на загрязнение воздуха от сжигания мусора, сокращение сельхозугодий и нагрузку на водные ресурсы. Туристическое управление Бали заявляет, что остров остаётся безопасным.",
      "body": [
        {
          "p": "Fodor's Travel опубликовал «No List 2027» в ноябре 2026 года — список из восьми направлений, поездки в которые на 2027 год предлагается пересмотреть. В него вошёл Бали, а также Албанская Ривьера, Амальфитанское побережье (Италия), Корсика (Франция), Эдинбург (Шотландия), Киото (Япония), заповедник Нгоронгоро (Танзания) и Седона, Аризона (США)."
        },
        {
          "h": "Причины и ответ"
        },
        {
          "ul": [
            "Для Бали Fodor's указал на загрязнение воздуха от сжигания мусора, сокращение сельхозугодий из-за смены назначения земель и нагрузку на водные ресурсы.",
            "Глава туристического управления Бали И Ваян Сумараджая заявил в Денпасаре в четверг (19/11), что Бали очень безопасен, очень достоин посещения и остаётся одним из лучших направлений мира.",
            "По его словам, власти и отрасль уже занимаются экологией, обращением с отходами и пробками. Он также упомянул ряд азиатских наград World Travel Awards 2026 для Бали, в том числе Asia's Leading Wedding Destination и Asia's Leading Green Resort.",
            "Сумараджая подчеркнул, что рост туризма должен сопровождаться лучшим управлением, защитой природы и сохранением культуры в соответствии с концепцией Nangun Sat Kerthi Loka Bali."
          ]
        },
        {
          "h": "Что это значит для покупателей и инвесторов"
        },
        {
          "p": "Подобные списки влияют скорее на восприятие, чем на данные о прибытиях, но поднятые темы — вода, мусор и смена назначения земель — те же, что ведут к ужесточению разрешений и территориального планирования на Бали. Для покупателей это напоминание проверять источник воды (водопровод PDAM или скважину с разрешением), утилизацию отходов и зонирование перед покупкой земли или виллы, особенно в быстро растущих районах, таких как Южная и Северная Кута. Bali Are Property (независимое агентство с 2009 года) ожидает, что объекты с понятными разрешениями и базовой инфраструктурой будут дорожать по мере ужесточения правил."
        }
      ]
    }
  },
  {
    "slug": "satpol-pp-badung-hentikan-event-vila-seminyak",
    "date": "2026-11-23",
    "ig": {
      "stat": "80 dB",
      "statL": "kebisingan terukur warga; batas kawasan 70 dB(A)",
      "h": "Satpol PP Badung hentikan event di villa Seminyak",
      "pts": [
        "KBLI villa tidak mencakup event maupun minuman beralkohol",
        "Pemilik diminta mengurus izin tambahan dan SLF",
        "Dilarang event, DJ, prewedding, dan aktivitas bising"
      ],
      "arti": "Beli villa untuk usaha? Pastikan KBLI, PBG, dan SLF sesuai kegiatannya agar tidak dihentikan."
    },
    "sources": [
      {
        "t": "Bali Post – Diduga vila disulap jadi THM, Satpol PP Badung hentikan aktivitas akomodasi di Seminyak (19 Nov 2026)",
        "u": "https://www.balipost.com/news/2026/11/19/598289/Diduga-Vila-Disulap-Jadi-THM,...html"
      }
    ],
    "id": {
      "tag": "Regulasi",
      "title": "Diduga jadi tempat hiburan, Satpol PP Badung hentikan event di sebuah villa di Seminyak",
      "summary": "Tim perizinan terpadu Badung menghentikan aktivitas event di sebuah villa di Jalan Abimanyu, Seminyak, pada 19 November 2026 setelah keluhan kebisingan warga. KBLI villa itu tidak mencakup event dan minuman beralkohol; pemilik diminta mengurus izin tambahan dan SLF.",
      "body": [
        {
          "p": "Sebuah villa di Jalan Abimanyu, Seminyak, Kuta, diduga beroperasi seperti tempat hiburan malam (THM) dan mengganggu warga. Warga dan pemilik villa di sekitarnya mengadu ke Satpol PP Badung pada 10 September 2026. Menurut Bali Post, villa itu disebut milik WNA asal Irlandia dan kebisingannya dikeluhkan sejak 2021."
        },
        {
          "h": "Fakta penindakan"
        },
        {
          "ul": [
            "Pengukuran warga dari rumahnya mencatat kebisingan sekitar 80 desibel, di atas batas 70 dB(A) untuk kawasan tersebut. Sejumlah event disebut digelar tanpa izin keramaian dari kepolisian.",
            "Kamis (19/11), tim perizinan terpadu Badung sebagai leading sector bersama DLHK, Dinas PU, Satpol PP bidang pariwisata, dan Dinas Pariwisata meninjau lokasi dan menghentikan aktivitas karena ada event yang menimbulkan kebisingan.",
            "Menurut I Wayan Sukanta, Pol PP Ahli Madya bidang penegakan perda yang ditugaskan Kasatpol PP Badung IGK Suryanegara, KBLI villa tersebut tidak mencakup kegiatan event dan tidak mencantumkan minuman beralkohol.",
            "Selama izin belum lengkap, tidak boleh ada event, DJ, prewedding, atau kegiatan yang menimbulkan suara. Pemilik diminta mengurus izin di luar izin villa yang sudah dimiliki, termasuk Sertifikat Laik Fungsi (SLF). Petugas menjadwalkan pengecekan lanjutan minggu berikutnya."
          ]
        },
        {
          "h": "Artinya bagi buyer dan pemilik villa"
        },
        {
          "p": "Kasus ini menunjukkan izin villa tidak otomatis mencakup semua kegiatan usaha. Event, pesta, atau penjualan minuman beralkohol butuh KBLI dan izin sendiri, dan bangunan perlu SLF. Bagi calon buyer villa yang akan disewakan atau dipakai untuk acara, Bali Are Property (agen independen sejak 2009) menyarankan memeriksa KBLI di OSS, PBG, SLF, dan riwayat keluhan lingkungan sebelum transaksi, serta menanyakan kepada banjar setempat. Villa dengan izin yang cocok dengan rencana usahanya lebih aman dan lebih mudah dijual kembali."
        },
        {
          "note": "Catatan: ringkasan berita ini bukan nasihat hukum. Untuk kasus tertentu, konsultasikan dengan notaris/PPAT, konsultan perizinan, atau instansi terkait."
        }
      ]
    },
    "en": {
      "tag": "Regulation",
      "title": "Suspected of operating as a nightlife venue, a Seminyak villa has its events halted by Badung's Satpol PP",
      "summary": "Badung's integrated permit team halted event activity at a villa on Jalan Abimanyu, Seminyak, on 19 November 2026 after residents complained about noise. The villa's KBLI business code does not cover events or alcohol; the owner was told to obtain additional permits and an SLF.",
      "body": [
        {
          "p": "A villa on Jalan Abimanyu, Seminyak, Kuta, is suspected of operating like a nightlife venue (THM) and disturbing residents. Residents and nearby villa owners complained to Badung's Public Order Agency (Satpol PP) on 10 September 2026. According to Bali Post, the villa is reportedly owned by an Irish national, and its noise has been the subject of complaints since 2021."
        },
        {
          "h": "Enforcement facts"
        },
        {
          "ul": [
            "Residents' own measurement from a home recorded about 80 decibels, above the 70 dB(A) limit for the area. Several events were reportedly held without a police crowd permit.",
            "On Thursday (19/11), Badung's integrated permit team, as lead sector, together with the Environment and Sanitation Agency (DLHK), the Public Works Agency, Satpol PP's tourism unit and the Tourism Office inspected the site and halted activity because an event causing noise was being held.",
            "According to I Wayan Sukanta, a senior Satpol PP officer for bylaw enforcement assigned by Badung Satpol PP head IGK Suryanegara, the villa's KBLI does not cover events and does not list alcoholic beverages.",
            "Until permits are complete, no events, DJs, pre-wedding shoots or other noisy activities are allowed. The owner was told to obtain permits beyond the existing villa permit, including a Certificate of Building Worthiness (SLF). Officers scheduled a follow-up check for the following week."
          ]
        },
        {
          "h": "What it means for buyers and villa owners"
        },
        {
          "p": "This case shows that a villa permit does not automatically cover every business activity. Events, parties or selling alcohol need their own KBLI and permits, and the building needs an SLF. For buyers of villas to be rented out or used for events, Bali Are Property (an independent agency since 2009) recommends checking the KBLI in the OSS system, the PBG, the SLF and any history of neighbourhood complaints before the transaction, and asking the local banjar. A villa whose permits match its business plan is safer and easier to resell."
        },
        {
          "note": "Note: this news summary is not legal advice. For specific cases, consult a notary/PPAT, a licensing consultant, or the relevant authority."
        }
      ]
    },
    "ru": {
      "tag": "Регулирование",
      "title": "Сатпол ПП Бадунга остановила мероприятия на вилле в Семиньяке, подозреваемой в работе как ночной клуб",
      "summary": "Объединённая разрешительная группа Бадунга 19 ноября 2026 года остановила проведение мероприятий на вилле на улице Абиманью в Семиньяке после жалоб жителей на шум. Код деятельности KBLI виллы не охватывает мероприятия и алкоголь; владельцу велено оформить дополнительные разрешения и SLF.",
      "body": [
        {
          "p": "Вилла на улице Абиманью в Семиньяке (Кута) подозревается в работе как место ночных развлечений (THM) и мешает жителям. Жители и владельцы соседних вилл пожаловались в службу общественного порядка Бадунга (Satpol PP) 10 сентября 2026 года. По данным Bali Post, вилла, как сообщается, принадлежит гражданину Ирландии, а жалобы на шум поступают с 2021 года."
        },
        {
          "h": "Факты проверки"
        },
        {
          "ul": [
            "Собственный замер жителей из дома показал около 80 децибел при норме 70 дБ(А) для района. Ряд мероприятий, по сообщениям, проводился без разрешения полиции на массовые мероприятия.",
            "В четверг (19/11) объединённая разрешительная группа Бадунга (ведущий орган) вместе с управлением экологии и санитарии (DLHK), управлением общественных работ, туристическим отделом Satpol PP и управлением туризма проверила объект и остановила деятельность, так как там проходило шумное мероприятие.",
            "По словам И Ваяна Суканты, старшего сотрудника Satpol PP по исполнению местных законов, назначенного главой Satpol PP Бадунга IGK Сурьянегарой, KBLI виллы не охватывает проведение мероприятий и не включает алкогольные напитки.",
            "Пока разрешения не оформлены, запрещены мероприятия, DJ, предсвадебные съёмки и любая шумная деятельность. Владельцу велено получить разрешения помимо уже имеющегося разрешения на виллу, в том числе сертификат пригодности здания к эксплуатации (SLF). Повторная проверка назначена на следующую неделю."
          ]
        },
        {
          "h": "Что это значит для покупателей и владельцев вилл"
        },
        {
          "p": "Случай показывает, что разрешение на виллу не охватывает автоматически любую коммерческую деятельность. Для мероприятий, вечеринок или продажи алкоголя нужны отдельные KBLI и разрешения, а зданию — SLF. Покупателям вилл под аренду или мероприятия Bali Are Property (независимое агентство с 2009 года) советует до сделки проверить KBLI в системе OSS, PBG, SLF и историю жалоб соседей, а также поговорить с местным банджаром. Вилла, разрешения которой соответствуют бизнес-плану, безопаснее и легче перепродаётся."
        },
        {
          "note": "Примечание: этот обзор новостей не является юридической консультацией. В конкретных случаях обратитесь к нотариусу/PPAT, консультанту по лицензированию или в соответствующее ведомство."
        }
      ]
    }
  },
  {
    "slug": "kadin-bali-tol-gilimanuk-mengwi-bandara-buleleng",
    "date": "2026-11-23",
    "ig": {
      "stat": "5–6 jam",
      "statL": "antrean di Pelabuhan Gilimanuk–Ketapang menurut Kadin Bali",
      "h": "Kadin Bali desak percepat Tol Gilimanuk–Mengwi",
      "pts": [
        "Tol masuk PSN; dilelang ulang setelah perjanjian lama diakhiri 2023",
        "Rencana 3 seksi: Gilimanuk–Pekutatan–Soka–Mengwi",
        "Kadin juga usul bandara baru di Buleleng untuk kargo"
      ],
      "arti": "Lahan koridor Tabanan–Jembrana prospektif jangka panjang, tol belum dibangun: jangan bayar premi berlebih."
    },
    "sources": [
      {
        "t": "ANTARA News Bali – Kadin Bali usul percepatan realisasi Tol Gilimanuk-Mengwi dan Bandara Buleleng (20 Nov 2026)",
        "u": "https://bali.antaranews.com/berita/419455/kadin-bali-usul-percepatan-realisasi-tol-gilimanuk-mengwi-dan-bandara-buleleng"
      },
      {
        "t": "Petromindo – Bali's longest toll road project to be re-tendered after previous deal collapses (19 Feb 2026)",
        "u": "https://www.petromindo.com/news/article/bali-s-longest-toll-road-project-to-be-re-tendered-after-previous-deal-collapses"
      }
    ],
    "id": {
      "tag": "Infrastruktur",
      "title": "Kadin Bali desak percepatan Tol Gilimanuk–Mengwi dan bandara di Buleleng",
      "summary": "Kadin Bali meminta pembangunan Tol Gilimanuk–Mengwi dan bandara baru di Buleleng dipercepat untuk memperlancar logistik. Tol sepanjang tiga seksi ini berstatus Proyek Strategis Nasional dan sedang disiapkan untuk lelang ulang.",
      "body": [
        {
          "p": "Wakil Ketua Bidang Organisasi Kadin Bali, Agung Bagus Tri Candra Arka, dalam Musyawarah Wilayah VI ALFI (asosiasi logistik dan forwarder) Bali di Badung, Jumat, 20 November 2026, meminta pembangunan Tol Gilimanuk–Mengwi dan bandara di Bali utara dipercepat. Menurutnya, tol adalah satu-satunya solusi agar distribusi barang lebih lancar."
        },
        {
          "h": "Fakta utama"
        },
        {
          "ul": [
            "Kadin menyebut antrean di Pelabuhan Gilimanuk–Ketapang bisa 5–6 jam, dan perjalanan Denpasar–Gilimanuk dengan angkutan umum 4–5 jam. Menambah dermaga dinilai tidak cukup tanpa akses jalan kedua.",
            "Kadin mendukung bandara baru di Buleleng untuk kargo udara karena Bandara Ngurah Rai dinilai sulit diperluas (menjorok ke laut dan padat), serta mengusulkan tol laut lewat Pelabuhan Benoa dari Surabaya.",
            "Latar belakang (Petromindo, Februari 2026): Kementerian PU menyiapkan lelang ulang paket tol ini setelah perjanjian pengusahaan jalan tol yang lama diakhiri pada 3 Agustus 2023 karena pengadaan lahan dan financial close gagal. Tol ini Proyek Strategis Nasional (Permenko Perekonomian No. 16/2025).",
            "Rencananya melintasi 3 kabupaten, 13 kecamatan, dan 58 desa dalam 3 seksi: Gilimanuk–Pekutatan 53,6 km, Pekutatan–Soka 24,3 km, dan Soka–Mengwi 18,9 km."
          ]
        },
        {
          "h": "Artinya bagi buyer dan pemilik lahan"
        },
        {
          "p": "Tol Gilimanuk–Mengwi akan memperpendek akses ke Tabanan dan Jembrana, sehingga lahan di sekitar koridornya punya prospek jangka panjang. Namun proyek ini belum punya investor baru dan belum dibangun. Bali Are Property (agen independen sejak 2009) menyarankan buyer tidak membayar premi besar hanya karena label \"dekat rencana tol\", dan memastikan lahan tidak masuk trase yang akan dibebaskan. Untuk Kuta Selatan, dampaknya tidak langsung, tetapi logistik yang lebih lancar bisa menekan biaya bahan bangunan dan pasokan di seluruh Bali."
        }
      ]
    },
    "en": {
      "tag": "Infrastructure",
      "title": "Kadin Bali urges faster Gilimanuk–Mengwi toll road and an airport in Buleleng",
      "summary": "The Bali Chamber of Commerce (Kadin Bali) has asked for faster construction of the Gilimanuk–Mengwi toll road and a new airport in Buleleng to ease logistics. The three-section toll road is a National Strategic Project being prepared for re-tender.",
      "body": [
        {
          "p": "Kadin Bali's deputy chairman for organisation, Agung Bagus Tri Candra Arka, speaking at the 6th Regional Meeting of ALFI Bali (the logistics and forwarders association) in Badung on Friday, 20 November 2026, asked for faster construction of the Gilimanuk–Mengwi toll road and an airport in northern Bali. He said the toll road is the only solution for smoother distribution of goods."
        },
        {
          "h": "Key facts"
        },
        {
          "ul": [
            "Kadin says queues at the Gilimanuk–Ketapang port can reach 5–6 hours, and the Denpasar–Gilimanuk trip by public transport takes 4–5 hours. Adding berths is not seen as enough without a second road access.",
            "Kadin backs a new airport in Buleleng for air cargo, as Ngurah Rai Airport is seen as hard to expand (it juts into the sea and is busy), and proposed a sea toll route via Benoa Port from Surabaya.",
            "Background (Petromindo, February 2026): the Ministry of Public Works is preparing to re-tender the toll road package after the previous toll road concession agreement was terminated on 3 August 2023 because land acquisition and financial close failed. The road is a National Strategic Project (Coordinating Minister for Economic Affairs Regulation No. 16/2025).",
            "It is planned to cross 3 regencies, 13 districts and 58 villages in 3 sections: Gilimanuk–Pekutatan 53.6 km, Pekutatan–Soka 24.3 km and Soka–Mengwi 18.9 km."
          ]
        },
        {
          "h": "What it means for buyers and landowners"
        },
        {
          "p": "The Gilimanuk–Mengwi toll road would shorten access to Tabanan and Jembrana, so land around its corridor has long-term prospects. However, the project has no new investor yet and has not been built. Bali Are Property (an independent agency since 2009) advises buyers not to pay a large premium just for a \"near the planned toll road\" label, and to make sure the land is not on the route to be acquired. For South Kuta the impact is indirect, but smoother logistics could lower the cost of building materials and supplies across Bali."
        }
      ]
    },
    "ru": {
      "tag": "Инфраструктура",
      "title": "Kadin Bali призывает ускорить платную трассу Гилиманук–Менгви и аэропорт в Булеленге",
      "summary": "Торгово-промышленная палата Бали (Kadin Bali) призвала ускорить строительство платной трассы Гилиманук–Менгви и нового аэропорта в Булеленге для улучшения логистики. Трасса из трёх участков имеет статус национального стратегического проекта и готовится к повторному тендеру.",
      "body": [
        {
          "p": "Заместитель председателя Kadin Bali по организационным вопросам Агунг Багус Три Чандра Арка на VI региональном собрании ALFI Bali (ассоциации логистических и экспедиторских компаний) в Бадунге в пятницу, 20 ноября 2026 года, призвал ускорить строительство платной трассы Гилиманук–Менгви и аэропорта на севере Бали. По его словам, трасса — единственное решение для более плавной доставки грузов."
        },
        {
          "h": "Основные факты"
        },
        {
          "ul": [
            "По данным Kadin, очереди в порту Гилиманук–Кетапанг достигают 5–6 часов, а поездка Денпасар–Гилиманук на общественном транспорте занимает 4–5 часов. Добавление причалов не решит проблему без второй дороги.",
            "Kadin поддерживает новый аэропорт в Булеленге для авиагрузов, так как аэропорт Нгурах-Рай сложно расширить (он выдаётся в море и перегружен), и предложил морской маршрут через порт Беноа из Сурабаи.",
            "Предыстория (Petromindo, февраль 2026): Министерство общественных работ готовит повторный тендер по трассе после расторжения прежнего концессионного соглашения 3 августа 2023 года из-за срыва изъятия земли и финансового закрытия. Трасса — национальный стратегический проект (постановление координирующего министра экономики № 16/2025).",
            "Она должна пройти через 3 округа, 13 районов и 58 деревень тремя участками: Гилиманук–Пекутатан 53,6 км, Пекутатан–Сока 24,3 км и Сока–Менгви 18,9 км."
          ]
        },
        {
          "h": "Что это значит для покупателей и владельцев земли"
        },
        {
          "p": "Трасса Гилиманук–Менгви сократит путь в Табанан и Джембрану, поэтому у земли вдоль её коридора есть долгосрочные перспективы. Однако у проекта пока нет нового инвестора, и он не построен. Bali Are Property (независимое агентство с 2009 года) советует не переплачивать только за ярлык «рядом с планируемой трассой» и убедиться, что участок не попадает в полосу изъятия. Для Южной Куты влияние косвенное, но более плавная логистика может снизить стоимость стройматериалов и поставок по всему Бали."
        }
      ]
    }
  },
  {
    "slug": "bus-listrik-trans-sarbagita-gwk-jimbaran",
    "date": "2026-11-16",
    "ig": {
      "stat": "Gratis",
      "statL": "1 tahun: bus listrik GOR Ngurah Rai–Jimbaran–GWK",
      "h": "Bus listrik gratis Denpasar–Jimbaran–GWK mulai jalan",
      "pts": [
        "11 bus listrik (10 beroperasi, 1 cadangan), dioperasikan DAMRI",
        "Lewat Dewa Ruci, Kedonganan, Jimbaran, kampus Unud, sampai GWK",
        "Diluncurkan 9 Nov 2026, keberangkatan pertama 06.15 Wita"
      ],
      "arti": "Akses angkutan umum ke Jimbaran dan GWK membaik, nilai tambah bagi rumah, kos, dan villa dekat jalurnya."
    },
    "sources": [
      {
        "t": "ANTARA News Bali – Melaju tanpa emisi: gaya hidup baru anak muda Bali dengan bus listrik (9 Nov 2026)",
        "u": "https://bali.antaranews.com/berita/418415/melaju-tanpa-emisi-gaya-hidup-baru-anak-muda-bali-dengan-bus-listrik"
      },
      {
        "t": "Bali.live – Free electric buses now connect Denpasar and GWK (9 Nov 2026)",
        "u": "https://bali.live/p/free-electric-buses-launched-between-denpasar-and-gwk"
      },
      {
        "t": "What's New Indonesia – Bali launches free electric Trans Sarbagita bus service for one year (11 Nov 2026)",
        "u": "https://whatsnewindonesia.com/bali/bali-launches-free-electric-trans-sarbagita-bus-service-for-one-year"
      }
    ],
    "id": {
      "tag": "Infrastruktur",
      "title": "Bus listrik Trans Sarbagita gratis setahun: GOR Ngurah Rai–Jimbaran–GWK",
      "summary": "Gubernur Bali Wayan Koster meluncurkan 11 bus listrik Trans Sarbagita pada 9 November 2026. Rute GOR Ngurah Rai–GWK melewati Kedonganan, Jimbaran, dan kampus Unud, gratis selama satu tahun uji coba.",
      "body": [
        {
          "p": "Pemprov Bali mulai mengoperasikan bus listrik Trans Sarbagita pada 9 November 2026. Peluncuran dilakukan Gubernur Wayan Koster di area parkir utara GOR Ngurah Rai, Denpasar. Bus dioperasikan Perum DAMRI dan gratis selama masa uji coba satu tahun; penumpang tetap menempelkan kartu uang elektronik agar jumlah penumpang tercatat."
        },
        {
          "h": "Fakta layanan"
        },
        {
          "ul": [
            "11 bus listrik buatan Hyundai dari kerja sama dengan Pemerintah Korea Selatan: 10 beroperasi setiap hari, 1 cadangan.",
            "Rute GOR Ngurah Rai–GWK: Renon (Bajra Sandhi), Jalan Sudirman, Bypass Ngurah Rai, Simpang Dewa Ruci, Kelan, Kedonganan, Jimbaran, kampus Universitas Udayana, hingga GWK. Rute ini tidak masuk terminal bandara, pusat Kuta, atau Nusa Dua.",
            "20 perjalanan per hari mulai pukul 06.15 Wita; tiap bus berkapasitas 20 kursi plus sekitar 10 penumpang berdiri.",
            "Menurut ANTARA, nilai proyek sekitar Rp50 miliar: Rp45,6 miliar untuk bus dan Rp5 miliar untuk fasilitas pengisian daya. Biaya energi operasional disebut lebih hemat lebih dari 60% dibanding kendaraan BBM."
          ]
        },
        {
          "h": "Artinya bagi buyer dan investor"
        },
        {
          "p": "Jimbaran dan kawasan GWK di gerbang Bukit kini terhubung angkutan umum gratis ke pusat Denpasar. Bagi pemilik rumah sewa, kos, dan villa di sekitar Kedonganan, Jimbaran, dan kampus Unud, jalur ini menambah daya tarik bagi penyewa pelajar dan pekerja. Dampaknya pada harga masih terbatas karena frekuensinya belum tinggi dan rutenya belum masuk Ungasan atau Nusa Dua, tetapi kedekatan dengan halte layak dicatat saat menilai lokasi. Bali Are Property (agen independen sejak 2009) akan memantau apakah rute ini diperpanjang setelah masa uji coba."
        }
      ]
    },
    "en": {
      "tag": "Infrastructure",
      "title": "Free Trans Sarbagita electric buses for one year: GOR Ngurah Rai–Jimbaran–GWK",
      "summary": "Bali Governor Wayan Koster launched 11 Trans Sarbagita electric buses on 9 November 2026. The GOR Ngurah Rai–GWK route passes Kedonganan, Jimbaran and the Udayana University campus and is free during a one-year trial.",
      "body": [
        {
          "p": "The Bali provincial government began running Trans Sarbagita electric buses on 9 November 2026. Governor Wayan Koster launched the service at the northern car park of GOR Ngurah Rai in Denpasar. The buses are operated by state-owned Perum DAMRI and are free during the one-year trial; passengers still tap an e-money card so ridership can be counted."
        },
        {
          "h": "Service facts"
        },
        {
          "ul": [
            "11 Hyundai electric buses from cooperation with the South Korean government: 10 run daily, 1 is a backup.",
            "GOR Ngurah Rai–GWK route: Renon (Bajra Sandhi), Jalan Sudirman, the Ngurah Rai Bypass, Dewa Ruci junction, Kelan, Kedonganan, Jimbaran, the Udayana University campus and GWK. It does not enter the airport terminals, central Kuta or Nusa Dua.",
            "20 trips a day from 06:15 WITA; each bus has 20 seats plus room for about 10 standing passengers.",
            "According to ANTARA, the project is worth about IDR 50 billion: IDR 45.6 billion for the buses and IDR 5 billion for charging facilities. Operating energy costs are said to be more than 60% lower than for fuel vehicles."
          ]
        },
        {
          "h": "What it means for buyers and investors"
        },
        {
          "p": "Jimbaran and the GWK area at the gateway to the Bukit are now linked to central Denpasar by free public transport. For owners of rental houses, boarding rooms (kos) and villas around Kedonganan, Jimbaran and the Udayana campus, the route adds appeal for student and worker tenants. The price impact is still limited because frequency is not yet high and the route does not reach Ungasan or Nusa Dua, but proximity to a stop is worth noting when assessing a location. Bali Are Property (an independent agency since 2009) will watch whether the route is extended after the trial."
        }
      ]
    },
    "ru": {
      "tag": "Инфраструктура",
      "title": "Бесплатные электробусы Trans Sarbagita на год: GOR Нгурах-Рай – Джимбаран – GWK",
      "summary": "Губернатор Бали Ваян Костер 9 ноября 2026 года запустил 11 электробусов Trans Sarbagita. Маршрут GOR Нгурах-Рай – GWK проходит через Кедонганан, Джимбаран и кампус Университета Удаяна и бесплатен в течение годового тестового периода.",
      "body": [
        {
          "p": "Правительство провинции Бали 9 ноября 2026 года запустило электробусы Trans Sarbagita. Губернатор Ваян Костер открыл движение на северной парковке GOR Нгурах-Рай в Денпасаре. Перевозчик — государственная компания Perum DAMRI; в течение годового тестового периода проезд бесплатный, но пассажиры прикладывают карту электронных денег, чтобы вести учёт."
        },
        {
          "h": "Факты о маршруте"
        },
        {
          "ul": [
            "11 электробусов Hyundai, полученных в рамках сотрудничества с правительством Южной Кореи: 10 работают ежедневно, 1 резервный.",
            "Маршрут GOR Нгурах-Рай – GWK: Ренон (Баджра Сандхи), улица Судирман, байпас Нгурах-Рай, развязка Дева Ручи, Келан, Кедонганан, Джимбаран, кампус Университета Удаяна и GWK. Терминалы аэропорта, центр Кута и Нуса-Дуа в маршрут не входят.",
            "20 рейсов в день с 06:15 по местному времени; в каждом автобусе 20 сидячих мест и около 10 стоячих.",
            "По данным ANTARA, стоимость проекта — около 50 млрд рупий: 45,6 млрд на автобусы и 5 млрд на зарядную инфраструктуру. Расходы на энергию, по оценке, более чем на 60% ниже, чем у машин на топливе."
          ]
        },
        {
          "h": "Что это значит для покупателей и инвесторов"
        },
        {
          "p": "Джимбаран и район GWK у въезда на Букит теперь связаны с центром Денпасара бесплатным общественным транспортом. Для владельцев сдаваемых домов, комнат (кос) и вилл в районе Кедонгана, Джимбарана и кампуса Удаяна маршрут повышает привлекательность для арендаторов-студентов и работников. Влияние на цены пока ограничено: частота рейсов невысока, а маршрут не доходит до Унгасана и Нуса-Дуа, но близость к остановке стоит учитывать при оценке локации. Bali Are Property (независимое агентство с 2009 года) будет следить, продлят ли маршрут после тестового периода."
        }
      ]
    }
  },
  {
    "slug": "ekonomi-bali-triwulan-3-2026-bandara-oktober",
    "date": "2026-11-16",
    "ig": {
      "stat": "5,85%",
      "statL": "pertumbuhan ekonomi Bali triwulan III 2026",
      "h": "Ekonomi Bali tumbuh 5,85%, bandara 19,7 juta penumpang",
      "pts": [
        "Sektor akomodasi & makan-minum tumbuh 6,23%",
        "Oktober: 2,1 juta penumpang di Ngurah Rai, naik 2,5% dari September",
        "BI Bali proyeksikan ekonomi Bali 2026 tumbuh 5,9%"
      ],
      "arti": "Permintaan wisata tetap kuat menjelang Nataru, kabar baik bagi pemilik villa sewa yang berizin."
    },
    "sources": [
      {
        "t": "ANTARA News Bali – BI: Konsumsi masyarakat jadi kontributor utama pertumbuhan ekonomi Bali di triwulan IV (9 Nov 2026)",
        "u": "https://bali.antaranews.com/berita/418403/bi-konsumsi-masyarakat-jadi-kontributor-utama-pertumbuhan-ekonomi-bali-di-triwulan-iv"
      },
      {
        "t": "ANTARA News Bali – Lalu lintas penumpang di Bandara Ngurah Rai pada Oktober naik 2,5 persen (13 Nov 2026)",
        "u": "https://bali.antaranews.com/berita/418911/lalu-lintas-penumpang-di-bandara-ngurah-rai-pada-oktober-naik-25-persen"
      }
    ],
    "id": {
      "tag": "Data Pasar",
      "title": "Ekonomi Bali tumbuh 5,85% di triwulan III 2026, Bandara Ngurah Rai layani 19,7 juta penumpang hingga Oktober",
      "summary": "Bank Indonesia Bali mencatat ekonomi Bali tumbuh 5,85% pada triwulan III 2026, dengan sektor akomodasi dan makan-minum tumbuh 6,23%. Bandara Ngurah Rai melayani 2,1 juta penumpang pada Oktober, naik 2,5% dari September.",
      "body": [
        {
          "p": "Menurut Kepala Perwakilan Bank Indonesia Provinsi Bali Achris Sarwani (ANTARA, 9 November 2026), ekonomi Bali tumbuh 5,85% pada triwulan III 2026, naik dari 5,78% pada triwulan sebelumnya. Sektor akomodasi dan makan-minum tumbuh 6,23% berkat kenaikan kunjungan wisatawan. Realisasi belanja proyek konstruksi APBN dan APBD mencapai Rp344 miliar, hampir dua kali lipat dari Rp186 miliar pada periode pembanding. BI memperkirakan pertumbuhan tetap tinggi di triwulan IV dan memproyeksikan ekonomi Bali 2026 tumbuh 5,9%."
        },
        {
          "h": "Data Bandara Ngurah Rai"
        },
        {
          "ul": [
            "Oktober 2026: sekitar 2,1 juta pergerakan penumpang (1,3 juta internasional, 756.000 domestik), naik 2,5% dari September; pergerakan pesawat 12.900, naik 8,5%.",
            "Januari–Oktober 2026: 19,7 juta penumpang, termasuk 12,7 juta penumpang internasional.",
            "Rute internasional terpadat Januari–Oktober: Singapura 2,2 juta penumpang (18%), Kuala Lumpur 1,2 juta, Perth 1 juta, Melbourne 928.000, Sydney 734.000.",
            "Rute baru: Starlux Taipei–Bali (mulai 1 Oktober) dan TransNusa Bali–Melbourne (mulai 19 Oktober)."
          ]
        },
        {
          "h": "Artinya bagi buyer dan investor"
        },
        {
          "p": "Data ini menunjukkan permintaan wisata ke Bali tetap kuat menjelang musim Natal dan Tahun Baru, dan pemerintah juga menyiapkan diskon tiket transportasi senilai Rp883 miliar untuk periode itu. Bagi pemilik villa sewa harian, terutama yang izinnya lengkap, ini sinyal positif untuk okupansi akhir tahun. Bagi calon investor, pertumbuhan sektor akomodasi di atas pertumbuhan ekonomi Bali secara umum menegaskan bahwa properti wisata masih menjadi motor utama, tetapi pilih lokasi dan legalitas dengan cermat karena pasokan juga terus bertambah."
        },
        {
          "note": "Ringkasan data resmi dari media. Bukan nasihat investasi."
        }
      ]
    },
    "en": {
      "tag": "Market Data",
      "title": "Bali's economy grows 5.85% in Q3 2026, Ngurah Rai Airport handles 19.7 million passengers through October",
      "summary": "Bank Indonesia's Bali office says the provincial economy grew 5.85% in Q3 2026, with accommodation and food & beverage up 6.23%. Ngurah Rai Airport handled 2.1 million passengers in October, up 2.5% from September.",
      "body": [
        {
          "p": "According to Achris Sarwani, head of Bank Indonesia's Bali office (ANTARA, 9 November 2026), Bali's economy grew 5.85% in Q3 2026, up from 5.78% in the previous quarter. The accommodation and food & beverage sector grew 6.23% on higher tourist visits. Spending on construction projects funded by the state and regional budgets reached IDR 344 billion, almost double the IDR 186 billion in the comparison period. BI expects growth to stay high in Q4 and projects Bali's 2026 growth at 5.9%."
        },
        {
          "h": "Ngurah Rai Airport data"
        },
        {
          "ul": [
            "October 2026: about 2.1 million passenger movements (1.3 million international, 756,000 domestic), up 2.5% from September; 12,900 aircraft movements, up 8.5%.",
            "January–October 2026: 19.7 million passengers, including 12.7 million international passengers.",
            "Busiest international routes January–October: Singapore 2.2 million passengers (18%), Kuala Lumpur 1.2 million, Perth 1 million, Melbourne 928,000, Sydney 734,000.",
            "New routes: Starlux Taipei–Bali (from 1 October) and TransNusa Bali–Melbourne (from 19 October)."
          ]
        },
        {
          "h": "What it means for buyers and investors"
        },
        {
          "p": "The data show tourist demand for Bali remains strong ahead of the Christmas and New Year season, and the government has also set aside IDR 883 billion in transport fare discounts for that period. For owners of daily-rental villas, especially those with complete permits, this is a positive signal for year-end occupancy. For prospective investors, accommodation growing faster than Bali's overall economy confirms that tourism property remains the main engine, but choose location and legal status carefully because supply keeps rising too."
        },
        {
          "note": "Summary of official data reported in the media. Not investment advice."
        }
      ]
    },
    "ru": {
      "tag": "Данные рынка",
      "title": "Экономика Бали выросла на 5,85% в III квартале 2026 года, аэропорт Нгурах-Рай обслужил 19,7 млн пассажиров за январь–октябрь",
      "summary": "По данным представительства Банка Индонезии на Бали, экономика провинции в III квартале 2026 года выросла на 5,85%, сектор размещения и общепита — на 6,23%. В октябре аэропорт Нгурах-Рай обслужил 2,1 млн пассажиров, на 2,5% больше, чем в сентябре.",
      "body": [
        {
          "p": "Как сообщил глава представительства Банка Индонезии на Бали Ахрис Сарвани (ANTARA, 9 ноября 2026 года), экономика Бали в III квартале 2026 года выросла на 5,85% после 5,78% кварталом ранее. Сектор размещения и общепита вырос на 6,23% благодаря росту турпотока. Расходы на строительные проекты из государственного и регионального бюджетов составили 344 млрд рупий — почти вдвое больше, чем 186 млрд рупий в сравниваемом периоде. Банк ожидает, что рост останется высоким и в IV квартале, и прогнозирует рост экономики Бали за 2026 год на уровне 5,9%."
        },
        {
          "h": "Данные аэропорта Нгурах-Рай"
        },
        {
          "ul": [
            "Октябрь 2026 года: около 2,1 млн пассажиров (1,3 млн международных, 756 000 внутренних), +2,5% к сентябрю; 12 900 самолётовылетов и посадок, +8,5%.",
            "Январь–октябрь 2026 года: 19,7 млн пассажиров, в том числе 12,7 млн международных.",
            "Самые загруженные международные направления за январь–октябрь: Сингапур — 2,2 млн пассажиров (18%), Куала-Лумпур — 1,2 млн, Перт — 1 млн, Мельбурн — 928 000, Сидней — 734 000.",
            "Новые рейсы: Starlux Тайбэй–Бали (с 1 октября) и TransNusa Бали–Мельбурн (с 19 октября)."
          ]
        },
        {
          "h": "Что это значит для покупателей и инвесторов"
        },
        {
          "p": "Данные показывают, что туристический спрос на Бали остаётся высоким перед рождественским и новогодним сезоном; правительство также выделило 883 млрд рупий на скидки на транспорт в этот период. Для владельцев вилл посуточной аренды, особенно с полным пакетом разрешений, это позитивный сигнал для загрузки в конце года. Для потенциальных инвесторов то, что сектор размещения растёт быстрее экономики Бали в целом, подтверждает: туристическая недвижимость остаётся главным драйвером, но локацию и юридический статус нужно выбирать внимательно, так как предложение тоже растёт."
        },
        {
          "note": "Обзор официальных данных по сообщениям СМИ. Не является инвестиционной рекомендацией."
        }
      ]
    }
  },
  {
    "slug": "izin-akomodasi-zona-rawan-sempadan-pantai-2026",
    "date": "2026-11-16",
    "ig": {
      "stat": "Sempadan",
      "statL": "pantai & lereng rawan longsor jadi sorotan",
      "h": "Izin bangunan di lereng & tepi pantai makin disorot",
      "pts": [
        "Bupati Badung evaluasi akomodasi wisata di daerah rawan bencana",
        "DPRD Bali sidak Lovina: dermaga beton diduga langgar sempadan",
        "Sanksi: henti kegiatan, cabut izin, hingga tutup sementara"
      ],
      "arti": "Beli lahan di tebing, lereng, atau tepi pantai? Cek KKPR, garis sempadan, dan risiko longsor sebelum DP."
    },
    "sources": [
      {
        "t": "ANTARA News Bali – Pemkab Badung evaluasi keamanan akomodasi wisata antisipasi longsor (2 Nov 2026)",
        "u": "https://bali.antaranews.com/berita/417683/pemkab-badung-evaluasi-keamanan-akomodasi-wisata-antisipasi-longsor"
      },
      {
        "t": "Bali Post – Sidak ke Buleleng, Supartha soroti sejumlah bangunan di sepanjang Pantai Lovina (13 Nov 2026)",
        "u": "https://www.balipost.com/news/2026/11/13/596869/Sidak-ke-Buleleng,Supartha-Soroti...html"
      }
    ],
    "id": {
      "tag": "Regulasi",
      "title": "Usai longsor di Pelaga dan sidak Pantai Lovina, izin bangunan di lereng dan tepi pantai makin disorot",
      "summary": "Longsor yang menimpa unit glamping di Pelaga, Badung, membuat Bupati Badung mengevaluasi keamanan akomodasi wisata di daerah rawan bencana. Pada 13 November 2026, Komisi I DPRD Bali menyidak bangunan di Pantai Lovina yang diduga melanggar sempadan pantai.",
      "body": [
        {
          "p": "Longsor di Pelaga Eco Park, Desa Pelaga, Badung, pada awal November 2026 menimbun satu unit tenda glamping. Bupati Badung I Wayan Adi Arnawa menyatakan Pemkab Badung akan mengevaluasi keamanan akomodasi wisata dan lingkungannya, terutama di daerah rawan bencana. Menurutnya, izin sudah diterbitkan dan diproses, tetapi kondisi lapangan tetap perlu ditinjau. Badung utara memang sedang dikembangkan untuk wisata alam dan agrowisata."
        },
        {
          "h": "Sidak di Lovina"
        },
        {
          "ul": [
            "Pada 13 November 2026, Komisi I DPRD Bali, termasuk I Made Supartha (mantan Ketua Pansus TRAP), menyidak dua properti di Lovina, Buleleng: rumah pribadi yang diduga melewati batas lahan ke arah laut, dan Villa Baba Sunset dengan dermaga beton permanen yang diduga melanggar sempadan pantai.",
            "Supartha menyebut banyak bangunan di pesisir Lovina belum berizin dan meminta Dinas PUPR, instansi pemberi PKKPR, dan Satpol PP lebih aktif turun ke lapangan.",
            "Sanksi dalam perda mencakup penghentian kegiatan, evaluasi kegiatan, pencabutan izin, dan penutupan sementara.",
            "Ia juga menyoroti pembangunan di daerah rawan bencana, dugaan bangunan di sawah Jatiluwih, serta pembelian lahan oleh investor di Munggu dan Pererenan."
          ]
        },
        {
          "h": "Artinya bagi buyer dan pemilik lahan"
        },
        {
          "p": "Pengawasan terhadap bangunan di lereng, tebing, dan tepi pantai makin ketat, termasuk terhadap proyek yang izinnya sudah terbit. Ini relevan untuk kawasan seperti tebing Uluwatu, Ungasan, dan Pecatu. Sebelum membeli lahan atau villa, cek kesesuaian tata ruang (KKPR), garis sempadan pantai atau jurang, kajian kestabilan tanah, serta PBG dan SLF. Bali Are Property menyarankan memasukkan pemeriksaan ini sebelum membayar uang muka."
        },
        {
          "note": "Informasi umum, bukan nasihat hukum. Konsultasikan dengan notaris/PPAT atau konsultan perizinan."
        }
      ]
    },
    "en": {
      "tag": "Regulation",
      "title": "After the Pelaga landslide and a Lovina beach inspection, permits on slopes and beachfronts face more scrutiny",
      "summary": "A landslide that buried a glamping unit in Pelaga, Badung, led Badung's regent to review the safety of tourist accommodation in disaster-prone areas. On 13 November 2026, Commission I of the Bali DPRD inspected buildings on Lovina Beach suspected of breaching the coastal setback.",
      "body": [
        {
          "p": "A landslide at Pelaga Eco Park, Pelaga Village, Badung, in early November 2026 buried a glamping tent. Badung Regent I Wayan Adi Arnawa said the regency will evaluate the safety of tourist accommodation and its surroundings, especially in disaster-prone areas. He said permits had been issued and processed, but field conditions still need to be reviewed. North Badung is being developed for nature tourism and agrotourism."
        },
        {
          "h": "Inspection in Lovina"
        },
        {
          "ul": [
            "On 13 November 2026, Commission I of the Bali DPRD, including I Made Supartha (former chair of the TRAP special committee), inspected two properties in Lovina, Buleleng: a private house suspected of extending beyond its plot toward the sea, and Villa Baba Sunset, whose permanent concrete pier may breach the coastal setback.",
            "Supartha said many buildings along the Lovina coast lack permits and asked the public works office, the agency issuing PKKPR spatial approvals, and Satpol PP to carry out more active field checks.",
            "Sanctions under regional regulations include halting activities, evaluating activities, revoking permits and temporary closure.",
            "He also highlighted construction in disaster-prone areas, suspected building on Jatiluwih rice fields, and land purchases by investors in Munggu and Pererenan."
          ]
        },
        {
          "h": "What it means for buyers and landowners"
        },
        {
          "p": "Oversight of buildings on slopes, cliffs and beachfronts is tightening, including for projects whose permits have already been issued. This matters for areas such as the Uluwatu, Ungasan and Pecatu clifftops. Before buying land or a villa, check spatial compliance (KKPR), the coastal or ravine setback line, a soil-stability assessment, and the PBG and SLF. Bali Are Property recommends doing these checks before paying a deposit."
        },
        {
          "note": "General information, not legal advice. Consult a notary/PPAT or a licensing consultant."
        }
      ]
    },
    "ru": {
      "tag": "Регулирование",
      "title": "После оползня в Пелаге и проверки на пляже Ловина разрешения на склонах и у моря под пристальным вниманием",
      "summary": "Оползень, засыпавший глэмпинг-палатку в Пелаге (Бадунг), заставил главу Бадунга проверить безопасность туристического жилья в опасных зонах. 13 ноября 2026 года Комиссия I парламента Бали проверила постройки на пляже Ловина, предположительно нарушающие прибрежную охранную зону.",
      "body": [
        {
          "p": "В начале ноября 2026 года оползень в Pelaga Eco Park (деревня Пелага, Бадунг) засыпал глэмпинг-палатку. Глава округа Бадунг И Ваян Ади Арнава заявил, что власти проверят безопасность туристического жилья и его окружения, особенно в зонах риска стихийных бедствий. По его словам, разрешения были выданы и оформлены, но условия на месте всё равно нужно проверить. Север Бадунга развивается как зона природного и агротуризма."
        },
        {
          "h": "Проверка в Ловине"
        },
        {
          "ul": [
            "13 ноября 2026 года Комиссия I парламента Бали, в том числе И Маде Супартха (бывший председатель специального комитета TRAP), проверила два объекта в Ловине (Булеленг): частный дом, предположительно выходящий за границы участка в сторону моря, и Villa Baba Sunset с постоянным бетонным причалом, который может нарушать прибрежную охранную зону.",
            "Супартха отметил, что многие постройки на побережье Ловины не имеют разрешений, и призвал управление общественных работ, ведомство, выдающее согласования PKKPR, и Satpol PP активнее выезжать на места.",
            "Санкции по региональным нормам: приостановка деятельности, её проверка, отзыв разрешения и временное закрытие.",
            "Он также указал на строительство в опасных зонах, возможную застройку рисовых террас Джатилувих и покупку земли инвесторами в Мунггу и Перерене."
          ]
        },
        {
          "h": "Что это значит для покупателей и владельцев земли"
        },
        {
          "p": "Контроль за постройками на склонах, обрывах и у моря усиливается, в том числе за проектами с уже выданными разрешениями. Это важно для таких районов, как скалы Улувату, Унгасан и Печату. Перед покупкой земли или виллы проверьте соответствие зонированию (KKPR), линию отступа от берега или обрыва, оценку устойчивости грунта, а также PBG и SLF. Bali Are Property рекомендует проводить эти проверки до внесения задатка."
        },
        {
          "note": "Общая информация, не юридическая консультация. Обратитесь к нотариусу/PPAT или консультанту по разрешениям."
        }
      ]
    }
  },
  {
    "slug": "icon-21-denpasar-level-21-mall",
    "date": "2026-11-16",
    "ig": {
      "stat": "Rp100 M+",
      "statL": "investasi transformasi Level 21 Mall jadi ICON 21",
      "h": "Level 21 Mall Denpasar berganti jadi ICON 21",
      "pts": [
        "Luas sewa bersih (NLA) naik sekitar 20%, okupansi tenant 100%",
        "Digarap tim Retail First Indonesia, pengembang ICON Bali Sanur",
        "Peluncuran resmi dijadwalkan 27 Februari 2027"
      ],
      "arti": "Investasi ritel baru di pusat Denpasar menambah daya tarik hunian dan ruko di sekitarnya."
    },
    "sources": [
      {
        "t": "ANTARA News Bali – Level 21 Mall bertransformasi menjadi ICON 21 Denpasar (11 Nov 2026)",
        "u": "https://bali.antaranews.com/berita/418647/level-21-mall-bertransformasi-menjadi-icon-21-denpasar"
      }
    ],
    "id": {
      "tag": "Komersial",
      "title": "Level 21 Mall Denpasar bertransformasi jadi ICON 21 dengan investasi lebih dari Rp100 miliar",
      "summary": "Setelah sepuluh tahun beroperasi, Level 21 Mall di pusat Denpasar berganti nama menjadi ICON 21 Denpasar. Investasi transformasinya lebih dari Rp100 miliar, luas sewa bersih naik sekitar 20%, dan peluncuran resmi dijadwalkan 27 Februari 2027.",
      "body": [
        {
          "p": "Level 21 Mall di pusat Denpasar bertransformasi menjadi ICON 21 Denpasar, dilaporkan ANTARA pada 11 November 2026. Transformasi ini bagian dari strategi Retail First Indonesia (RFI), yang sebelumnya mengembangkan ICON Bali di Sanur. Presiden Direktur ICON 21 Denpasar, Heru Nasution, memimpin proyek dengan nilai investasi lebih dari Rp100 miliar."
        },
        {
          "h": "Fakta proyek"
        },
        {
          "ul": [
            "Luas sewa bersih (Net Leasable Area) naik sekitar 20%; okupansi tenant disebut sudah 100%.",
            "Kapasitas parkir 840 kendaraan; kunjungan diproyeksikan naik 33%.",
            "Desain baru oleh McKingley & Team Architect (perancang ICON Bali Sanur): fasad dengan elemen air, LED Tunnel, lantai marmer, dan lantai dua dengan plafon setinggi 7 meter.",
            "Pengelola memetakan lebih dari 676.383 penduduk di area tangkapan, sekitar 400.000 wisatawan asing dan 550.000 wisatawan domestik, serta 39 kantor pemerintahan.",
            "Peluncuran resmi (Unveiling) dijadwalkan 27 Februari 2027."
          ]
        },
        {
          "h": "Artinya bagi buyer dan investor"
        },
        {
          "p": "Investasi ritel lebih dari Rp100 miliar di pusat Denpasar, setelah ICON Bali di Sanur, menunjukkan pengembang ritel masih yakin pada daya beli warga dan wisatawan di Denpasar. Bagi pemilik ruko, rumah sewa, dan kos di sekitar pusat kota, mal yang diperbarui biasanya menambah arus pengunjung dan daya tarik lingkungan. Bagi pembeli rumah tinggal di Denpasar, akses ke pusat belanja modern menjadi nilai tambah. Bali Are Property tetap menyarankan menilai harga berdasarkan data transaksi sekitar, bukan hanya rencana proyek."
        },
        {
          "note": "Ringkasan pemberitaan media. Bukan nasihat investasi."
        }
      ]
    },
    "en": {
      "tag": "Commercial",
      "title": "Denpasar's Level 21 Mall transforms into ICON 21 with an investment of over IDR 100 billion",
      "summary": "After ten years in operation, Level 21 Mall in central Denpasar is being renamed ICON 21 Denpasar. The transformation costs over IDR 100 billion, net leasable area rises by about 20%, and the official launch is scheduled for 27 February 2027.",
      "body": [
        {
          "p": "Level 21 Mall in central Denpasar is transforming into ICON 21 Denpasar, ANTARA reported on 11 November 2026. The transformation is part of the strategy of Retail First Indonesia (RFI), which previously developed ICON Bali in Sanur. ICON 21 Denpasar President Director Heru Nasution leads the project, with an investment of more than IDR 100 billion."
        },
        {
          "h": "Project facts"
        },
        {
          "ul": [
            "Net leasable area increases by about 20%; tenant occupancy is said to have reached 100%.",
            "Parking for 840 vehicles; visitor traffic is projected to grow 33%.",
            "New design by McKingley & Team Architect (designer of ICON Bali Sanur): a facade with water elements, an LED Tunnel, marble flooring and a second floor with a 7-metre ceiling.",
            "Management cites more than 676,383 residents in the catchment area, about 400,000 foreign and 550,000 domestic tourists, and 39 government offices.",
            "The official Unveiling is scheduled for 27 February 2027."
          ]
        },
        {
          "h": "What it means for buyers and investors"
        },
        {
          "p": "A retail investment of over IDR 100 billion in central Denpasar, following ICON Bali in Sanur, shows retail developers remain confident in the spending power of Denpasar residents and visitors. For owners of shophouses, rental houses and boarding rooms near the city centre, a refreshed mall usually brings more foot traffic and neighbourhood appeal. For home buyers in Denpasar, access to a modern shopping centre is an added benefit. Bali Are Property still recommends valuing property on nearby transaction data, not just on project plans."
        },
        {
          "note": "Summary of media reports. Not investment advice."
        }
      ]
    },
    "ru": {
      "tag": "Коммерческая",
      "title": "Level 21 Mall в Денпасаре превращается в ICON 21: инвестиции более 100 млрд рупий",
      "summary": "После десяти лет работы Level 21 Mall в центре Денпасара получает новое имя — ICON 21 Denpasar. Инвестиции в преобразование превышают 100 млрд рупий, арендопригодная площадь вырастет примерно на 20%, официальное открытие запланировано на 27 февраля 2027 года.",
      "body": [
        {
          "p": "Level 21 Mall в центре Денпасара преобразуется в ICON 21 Denpasar, сообщило агентство ANTARA 11 ноября 2026 года. Преобразование — часть стратегии Retail First Indonesia (RFI), ранее построившей ICON Bali в Сануре. Проект возглавляет президент-директор ICON 21 Denpasar Херу Насутион; объём инвестиций — более 100 млрд рупий."
        },
        {
          "h": "Факты о проекте"
        },
        {
          "ul": [
            "Арендопригодная площадь (NLA) увеличится примерно на 20%; заполняемость арендаторами, по данным управляющих, уже 100%.",
            "Парковка на 840 машин; посещаемость, по прогнозу, вырастет на 33%.",
            "Новый дизайн от McKingley & Team Architect (автора ICON Bali Sanur): фасад с водными элементами, LED-туннель, мраморные полы и второй этаж с потолками высотой 7 метров.",
            "Управляющие называют зону охвата: более 676 383 жителей, около 400 000 иностранных и 550 000 внутренних туристов, 39 государственных учреждений.",
            "Официальное открытие (Unveiling) запланировано на 27 февраля 2027 года."
          ]
        },
        {
          "h": "Что это значит для покупателей и инвесторов"
        },
        {
          "p": "Инвестиции в ритейл более 100 млрд рупий в центре Денпасара вслед за ICON Bali в Сануре показывают, что девелоперы торговой недвижимости по-прежнему уверены в покупательской способности жителей и гостей города. Для владельцев торговых помещений (ruko), сдаваемых домов и комнат рядом с центром обновлённый молл обычно означает больший поток людей и привлекательность района. Для покупателей жилья в Денпасаре доступ к современному торговому центру — дополнительное преимущество. Bali Are Property рекомендует оценивать объекты по данным о сделках поблизости, а не только по планам проектов."
        },
        {
          "note": "Обзор публикаций СМИ. Не является инвестиционной рекомендацией."
        }
      ]
    }
  },
  {
    "slug": "harga-properti-residensial-triwulan-3-2026-bi",
    "date": "2026-11-16",
    "ig": {
      "stat": "0,58%",
      "statL": "kenaikan harga rumah primer (yoy) triwulan III 2026",
      "h": "Survei BI: harga rumah naik tipis, penjualan turun",
      "pts": [
        "Penjualan rumah primer turun 8,43% yoy, lebih dalam dari triwulan II",
        "KPR dipakai pada 70,68% pembelian rumah primer",
        "73,94% pembiayaan proyek berasal dari dana internal pengembang"
      ],
      "arti": "Pasar sedang tenang: pembeli punya ruang negosiasi lebih besar, terutama pada stok rumah baru."
    },
    "sources": [
      {
        "t": "Bank Indonesia – Survei Harga Properti Residensial Triwulan III 2026: Harga properti residensial tumbuh terbatas (6 Nov 2026)",
        "u": "https://www.bi.go.id/id/publikasi/ruang-media/news-release/Pages/sp_2824426.aspx"
      },
      {
        "t": "Bank Indonesia – Laporan Survei Harga Properti Residensial Triwulan III 2026 (PDF, Nov 2026)",
        "u": "https://www.bi.go.id/id/publikasi/laporan/Documents/SHPR_Tw_III_2026.pdf"
      },
      {
        "t": "Industry.co.id – Harga properti residensial kuartal III 2026 tumbuh 0,58%, penjualan rumah masih lesu (10 Nov 2026)",
        "u": "https://www.industry.co.id/read/158965/harga-properti-residensial-kuartal-iii-2026-tumbuh-058-penjualan-rumah-masih-lesu"
      }
    ],
    "id": {
      "tag": "Data Pasar",
      "title": "Survei BI triwulan III 2026: harga rumah baru naik 0,58%, penjualan turun 8,43%",
      "summary": "Bank Indonesia mencatat Indeks Harga Properti Residensial di pasar primer naik 0,58% (yoy) pada triwulan III 2026, melambat dari 0,69%. Penjualan rumah primer turun 8,43% dan KPR tetap menjadi skema pembelian utama.",
      "body": [
        {
          "p": "Bank Indonesia merilis Survei Harga Properti Residensial (SHPR) triwulan III 2026 pada 6 November 2026. Survei ini memantau rumah baru (pasar primer) di sejumlah kota besar, termasuk Denpasar. Hasilnya, Indeks Harga Properti Residensial naik 0,58% secara tahunan (yoy), sedikit melambat dari 0,69% pada triwulan II 2026."
        },
        {
          "h": "Angka utama"
        },
        {
          "ul": [
            "Penjualan rumah di pasar primer turun 8,43% (yoy), lebih dalam dibanding kontraksi 2,36% pada triwulan II 2026; penurunan terjadi di semua tipe rumah.",
            "Kredit Pemilikan Rumah (KPR) dipakai pada 70,68% total pembelian rumah primer.",
            "Dari sisi pengembang, 73,94% kebutuhan pembiayaan proyek berasal dari dana internal."
          ]
        },
        {
          "h": "Artinya bagi buyer dan investor"
        },
        {
          "p": "Harga rumah baru secara nasional hampir datar, sementara penjualan melemah. Kondisi seperti ini biasanya memberi pembeli ruang negosiasi lebih besar, terutama untuk stok rumah yang sudah jadi, dan pengembang cenderung menawarkan promo atau cicilan bertahap. Pasar Bali punya karakter sendiri karena banyak pembeli villa dan lahan membayar tunai dan dipengaruhi pariwisata, tetapi untuk rumah tinggal di Denpasar dan sekitarnya, tren nasional ini tetap relevan. Bali Are Property menyarankan membandingkan beberapa penawaran dan menghitung total biaya beli (pajak, notaris, BPHTB) sebelum memutuskan."
        },
        {
          "note": "Ringkasan data Bank Indonesia. Bukan nasihat investasi."
        }
      ]
    },
    "en": {
      "tag": "Market Data",
      "title": "BI survey for Q3 2026: new-home prices up 0.58%, sales down 8.43%",
      "summary": "Bank Indonesia reports its Residential Property Price Index for the primary market rose 0.58% (yoy) in Q3 2026, slowing from 0.69%. Primary-market home sales fell 8.43%, and mortgages remain the main way to buy.",
      "body": [
        {
          "p": "Bank Indonesia released its Residential Property Price Survey (SHPR) for Q3 2026 on 6 November 2026. The survey tracks new homes (the primary market) in a number of major cities, including Denpasar. The Residential Property Price Index rose 0.58% year-on-year, slightly slower than 0.69% in Q2 2026."
        },
        {
          "h": "Key figures"
        },
        {
          "ul": [
            "Primary-market home sales fell 8.43% (yoy), deeper than the 2.36% contraction in Q2 2026; sales fell across all house types.",
            "Mortgages (KPR) were used in 70.68% of all primary-market purchases.",
            "On the developer side, 73.94% of project financing needs came from internal funds."
          ]
        },
        {
          "h": "What it means for buyers and investors"
        },
        {
          "p": "Nationally, new-home prices are almost flat while sales are weakening. Conditions like these usually give buyers more room to negotiate, especially on completed stock, and developers tend to offer promotions or staged payments. Bali's market has its own character because many villa and land buyers pay cash and demand is driven by tourism, but for homes in and around Denpasar this national trend is still relevant. Bali Are Property recommends comparing several offers and calculating the total cost of buying (taxes, notary, BPHTB) before deciding."
        },
        {
          "note": "Summary of Bank Indonesia data. Not investment advice."
        }
      ]
    },
    "ru": {
      "tag": "Данные рынка",
      "title": "Опрос Банка Индонезии за III квартал 2026 года: цены на новое жильё +0,58%, продажи −8,43%",
      "summary": "По данным Банка Индонезии, индекс цен на жилую недвижимость на первичном рынке в III квартале 2026 года вырос на 0,58% (г/г) после 0,69%. Продажи на первичном рынке снизились на 8,43%, ипотека остаётся основным способом покупки.",
      "body": [
        {
          "p": "Банк Индонезии 6 ноября 2026 года опубликовал Обзор цен на жилую недвижимость (SHPR) за III квартал 2026 года. Обзор отслеживает новое жильё (первичный рынок) в ряде крупных городов, включая Денпасар. Индекс цен на жилую недвижимость вырос на 0,58% в годовом выражении — чуть медленнее, чем 0,69% во II квартале 2026 года."
        },
        {
          "h": "Ключевые цифры"
        },
        {
          "ul": [
            "Продажи на первичном рынке снизились на 8,43% (г/г) — сильнее, чем на 2,36% во II квартале 2026 года; снижение затронуло все типы домов.",
            "Ипотека (KPR) использовалась в 70,68% всех покупок на первичном рынке.",
            "У девелоперов 73,94% потребности в финансировании проектов покрывалось собственными средствами."
          ]
        },
        {
          "h": "Что это значит для покупателей и инвесторов"
        },
        {
          "p": "В масштабах страны цены на новое жильё почти не меняются, а продажи слабеют. В таких условиях у покупателей обычно больше пространства для торга, особенно по готовым объектам, а девелоперы чаще предлагают акции или рассрочку. У рынка Бали свой характер: многие покупатели вилл и земли платят наличными, а спрос определяется туризмом, но для жилья в Денпасаре и окрестностях общенациональная тенденция остаётся актуальной. Bali Are Property рекомендует сравнить несколько предложений и рассчитать полную стоимость покупки (налоги, нотариус, BPHTB) перед решением."
        },
        {
          "note": "Обзор данных Банка Индонезии. Не является инвестиционной рекомендацией."
        }
      ]
    }
  },
  {
    "slug": "air-bersih-badung-selatan-rp150-miliar",
    "date": "2026-11-09",
    "ig": {
      "stat": "Rp150 M",
      "statL": "tambahan modal PDAM Badung 2027–2029",
      "h": "Krisis air Badung Selatan, Rp150 miliar disiapkan",
      "pts": [
        "Pasokan 1.083 liter/detik, kebutuhan 2.198 liter/detik",
        "Reservoir 2.000 m³ di Uluwatu–Pecatu senilai Rp27,3 miliar",
        "Pipa Tukad Mati: tambahan hingga 300 liter/detik"
      ],
      "arti": "Membeli di Bukit? Cek sumber air (PDAM, sumur berizin, tangki) sebelum transaksi."
    },
    "sources": [
      {
        "t": "Bali Tribune – PDAM Badung bidik tambahan pasokan air 300 liter per detik (26 Okt 2026)",
        "u": "https://balitribune.co.id/content/pdam-badung-bidik-tambahan-pasokan-air-300-liter-detik"
      },
      {
        "t": "LenteraEsai – DPRD Badung setujui suntikan modal Rp150 miliar untuk Perumda Air Minum Tirta Mangutama (23 Okt 2026)",
        "u": "https://lenteraesai.id/2026/10/23/dprd-badung-setujui-suntikan-modal-rp150-miliar-untuk-perumda-air-minum-tirta-mangutama/"
      },
      {
        "t": "Jarrak Pos Bali – PDI Perjuangan Badung setujui RAPBD 2027, krisis air Pecatu jadi sorotan (5 Nov 2026)",
        "u": "https://jarrakposbali.com/pdi-perjuangan-badung-setujui-rapbd-2027-krisis-air-pecatu-jadi-sorotan/"
      }
    ],
    "id": {
      "tag": "Infrastruktur",
      "title": "Krisis air Badung Selatan: Rp150 miliar disiapkan, termasuk reservoir di Uluwatu–Pecatu",
      "summary": "DPRD Badung menyetujui tambahan modal Rp150 miliar untuk PDAM Badung pada 2027–2029. Ada delapan proyek, dari pipa air baku Tukad Mati hingga reservoir 2.000 m³ di Uluwatu–Pecatu.",
      "body": [
        {
          "p": "Rapat paripurna DPRD Badung pada 23 Oktober 2026 menyetujui ranperda penyertaan modal tambahan Rp150 miliar untuk Perumda Air Minum Tirta Mangutama (PDAM Badung). Dana disalurkan bertahap pada 2027, 2028, dan 2029, dengan alokasi Rp37 miliar untuk 2027. Bila terealisasi penuh, total modal daerah di PDAM Badung menjadi sekitar Rp484 miliar."
        },
        {
          "p": "Menurut Direktur PDAM Badung I Wayan Suyasa, kapasitas pasokan saat ini 1.082,83 liter per detik, sedangkan kebutuhan mencapai 2.198,25 liter per detik, sehingga kurang sekitar 1.115 liter per detik. Dalam rapat paripurna 5 November 2026, Fraksi PDI Perjuangan DPRD Badung menyoroti krisis air bersih di Ungasan, Pecatu, dan sekitarnya."
        },
        {
          "h": "Proyek utama yang direncanakan"
        },
        {
          "ul": [
            "Pipa air baku Tukad Mati–IPA Estuary (Rp37,02 miliar): tambahan hingga 300 liter per detik, terutama untuk Badung Selatan.",
            "Reservoir Uluwatu–Pecatu 2.000 m³ dengan pipa 3.180 m (Rp27,30 miliar).",
            "Reservoir Sawangan dan Nuansa Bukit, masing-masing 1.000 m³ (Rp10,81 miliar per proyek).",
            "Penggantian pipa di Bypass Ngurah Rai Nusa Dua (Rp36,57 miliar) untuk mengurangi kebocoran."
          ]
        },
        {
          "p": "Target keseluruhan: kebocoran berkurang lebih dari 40 liter per detik dan lebih dari 15.000 sambungan pelanggan baru."
        },
        {
          "h": "Artinya bagi buyer dan investor"
        },
        {
          "p": "Air masih menjadi titik lemah kawasan Bukit. Sebelum membeli tanah atau villa di Ungasan, Pecatu, Kutuh, atau Uluwatu, cek apakah ada sambungan PDAM, sumur bor berizin, atau tangki penampung, dan hitung biaya air truk saat kemarau. Proyek ini bisa memperbaiki pasokan secara bertahap, tetapi baru berjalan mulai 2027 dan masih harus melewati proses anggaran. Properti dengan sumber air yang andal tetap punya nilai lebih."
        },
        {
          "note": "Ringkasan berita. Rencana dan anggaran proyek masih dapat berubah. Bukan nasihat investasi."
        }
      ]
    },
    "en": {
      "tag": "Infrastructure",
      "title": "South Badung water crisis: IDR 150 billion set aside, including a reservoir in Uluwatu–Pecatu",
      "summary": "The Badung council approved an extra IDR 150 billion in capital for the Badung water utility over 2027–2029. Eight projects are planned, from a Tukad Mati raw-water pipeline to a 2,000 m³ reservoir in Uluwatu–Pecatu.",
      "body": [
        {
          "p": "At a plenary session on 23 October 2026, the Badung Regional Council (DPRD) approved a draft regulation for an additional IDR 150 billion capital injection into Perumda Air Minum Tirta Mangutama (the Badung water utility, PDAM Badung). The money will be paid in stages in 2027, 2028 and 2029, with IDR 37 billion allocated for 2027. If fully realised, the regency's total capital in the utility will reach about IDR 484 billion."
        },
        {
          "p": "According to PDAM Badung director I Wayan Suyasa, current supply capacity is 1,082.83 litres per second while demand reaches 2,198.25 litres per second, a shortfall of about 1,115 litres per second. At a plenary session on 5 November 2026, the PDI Perjuangan faction in the Badung council highlighted the clean-water crisis in Ungasan, Pecatu and surrounding areas."
        },
        {
          "h": "Main planned projects"
        },
        {
          "ul": [
            "Tukad Mati–IPA Estuary raw-water pipeline (IDR 37.02 billion): up to 300 litres per second of extra supply, mainly for South Badung.",
            "Uluwatu–Pecatu reservoir of 2,000 m³ with a 3,180 m pipeline (IDR 27.30 billion).",
            "Sawangan and Nuansa Bukit reservoirs of 1,000 m³ each (IDR 10.81 billion per project).",
            "Pipe replacement on the Ngurah Rai Bypass in Nusa Dua (IDR 36.57 billion) to reduce leaks."
          ]
        },
        {
          "p": "Overall targets: cut leakage by more than 40 litres per second and add more than 15,000 new customer connections."
        },
        {
          "h": "What it means for buyers and investors"
        },
        {
          "p": "Water is still the Bukit's weak point. Before buying land or a villa in Ungasan, Pecatu, Kutuh or Uluwatu, check whether there is a PDAM connection, a licensed bore well or a storage tank, and budget for trucked water in the dry season. These projects could improve supply step by step, but they only start in 2027 and still have to pass the budget process. Property with a reliable water source keeps an extra edge in value."
        },
        {
          "note": "News summary. Project plans and budgets may change. Not investment advice."
        }
      ]
    },
    "ru": {
      "tag": "Инфраструктура",
      "title": "Нехватка воды на юге Бадунга: выделяют 150 млрд рупий, включая резервуар в Улувату–Печату",
      "summary": "Совет округа Бадунг одобрил дополнительный капитал 150 млрд рупий для водоканала Бадунга на 2027–2029 годы. Запланировано восемь проектов — от водовода из Тукад-Мати до резервуара на 2000 м³ в Улувату–Печату.",
      "body": [
        {
          "p": "На пленарном заседании 23 октября 2026 года Совет округа Бадунг (DPRD) одобрил проект постановления о дополнительном взносе в капитал 150 млрд рупий для Perumda Air Minum Tirta Mangutama (водоканал Бадунга, PDAM Badung). Средства будут выделяться поэтапно в 2027, 2028 и 2029 годах, на 2027 год предусмотрено 37 млрд рупий. При полной реализации общий капитал округа в водоканале составит около 484 млрд рупий."
        },
        {
          "p": "По словам директора PDAM Badung И Ваяна Суясы, текущая мощность подачи — 1082,83 литра в секунду, а потребность — 2198,25 литра в секунду, то есть дефицит около 1115 литров в секунду. На пленарном заседании 5 ноября 2026 года фракция PDI Perjuangan в совете Бадунга обратила внимание на нехватку чистой воды в Унгасане, Печату и окрестностях."
        },
        {
          "h": "Основные запланированные проекты"
        },
        {
          "ul": [
            "Водовод сырой воды Тукад-Мати – IPA Estuary (37,02 млрд рупий): до 300 литров в секунду дополнительно, в основном для юга Бадунга.",
            "Резервуар Улувату–Печату на 2000 м³ с трубопроводом 3180 м (27,30 млрд рупий).",
            "Резервуары в Саванган и Нуанса-Букит по 1000 м³ (по 10,81 млрд рупий каждый).",
            "Замена труб на Байпасе Нгурах-Рай в Нуса-Дуа (36,57 млрд рупий) для сокращения утечек."
          ]
        },
        {
          "p": "Общие цели: сократить утечки более чем на 40 литров в секунду и подключить более 15 000 новых абонентов."
        },
        {
          "h": "Что это значит для покупателей и инвесторов"
        },
        {
          "p": "Вода по-прежнему слабое место полуострова Букит. Перед покупкой земли или виллы в Унгасане, Печату, Кутухе или Улувату проверьте, есть ли подключение к PDAM, скважина с разрешением или накопительный бак, и заложите расходы на привозную воду в сухой сезон. Эти проекты могут постепенно улучшить снабжение, но начнутся только в 2027 году и ещё должны пройти бюджетный процесс. Недвижимость с надёжным источником воды сохраняет преимущество в цене."
        },
        {
          "note": "Обзор новостей. Планы и бюджеты проектов могут измениться. Не является инвестиционной рекомендацией."
        }
      ]
    }
  },
  {
    "slug": "the-one-by-almal-nusa-dua-pbg",
    "date": "2026-11-09",
    "ig": {
      "stat": "154 unit",
      "statL": "hunian bermerek The One by Almal, Nusa Dua",
      "h": "Branded residences di Nusa Dua kantongi PBG",
      "pts": [
        "PBG dari Pemkab Badung terbit 14 Oktober 2026",
        "Apartemen, townhouse, villa; merek Registry Collection (Wyndham)",
        "Harga & jadwal selesai belum diumumkan pengembang"
      ],
      "arti": "Beli off-plan? Pastikan PBG sudah terbit, lalu cek status tanah, jadwal serah terima, dan skema sewa."
    },
    "sources": [
      {
        "t": "ANTARA News – Almal Real Estate Development secures building permit and announces next phase of The One by Almal Bali Nusa Dua (16 Okt 2026)",
        "u": "https://en.antaranews.com/amp/news/435845/almal-real-estate-development-secures-building-permit-and-announces-next-phase-of-the-one-by-almal-bali-nusa-dua"
      }
    ],
    "id": {
      "tag": "Proyek",
      "title": "The One by Almal di Nusa Dua kantongi PBG, 154 unit hunian bermerek masuk fase konstruksi berikutnya",
      "summary": "Pengembang asal Dubai, Almal, menerima Persetujuan Bangunan Gedung (PBG) dari Pemkab Badung pada 14 Oktober 2026 untuk proyek 154 unit di Nusa Dua di bawah merek Registry Collection Hotels dari Wyndham.",
      "body": [
        {
          "p": "Almal Real Estate Development, pengembang properti yang berkantor pusat di Dubai, mengumumkan bahwa proyek The One by Almal Bali Nusa Dua, a Registry Collection Hotel, telah memperoleh Persetujuan Bangunan Gedung (PBG) resmi. PBG bernomor SK-PBG-510305-14102026-001 diterbitkan Pemkab Badung pada 14 Oktober 2026 melalui entitas Indonesia proyek ini, PT Magical Bali Villas. Siaran pers dimuat ANTARA pada 16 Oktober 2026."
        },
        {
          "h": "Fakta proyek"
        },
        {
          "ul": [
            "154 unit hunian berupa apartemen, townhouse, dan villa pribadi, dilengkapi fasilitas kuliner, rekreasi, dan resort.",
            "Memakai merek Registry Collection Hotels dari Wyndham Hotels & Resorts, dengan akses program Wyndham Rewards.",
            "Menurut pengembang, PBG ini membuka jalan bagi fase konstruksi berikutnya.",
            "Harga, jadwal selesai, dan nilai investasi tidak diungkapkan."
          ]
        },
        {
          "p": "Siaran pers mengutip pendiri Almal, Dmytro Starovoitov, dan Matt Holmes, Vice President of Development Asia Tenggara & Pacific Rim di Wyndham. Proyek ini juga meraih penghargaan di International Property Awards Asia Pacific 2026–2027."
        },
        {
          "h": "Artinya bagi buyer dan investor"
        },
        {
          "p": "Hunian bermerek di Nusa Dua terus bertambah. Bagi pembeli unit off-plan, PBG yang sudah terbit adalah tanda penting bahwa proyek dibangun sesuai izin, hal yang sering terlewat oleh pembeli. Tetap cek status tanah (jenis hak dan masa sewa), jadwal serah terima, perjanjian pengelolaan dan bagi hasil sewa, serta Sertifikat Laik Fungsi (SLF) sebelum bangunan beroperasi. Bagi pemilik villa di sekitar Nusa Dua dan Bukit, proyek bermerek seperti ini menambah pesaing di pasar sewa premium."
        },
        {
          "note": "Ringkasan siaran pers pengembang. Bukan nasihat hukum atau investasi."
        }
      ]
    },
    "en": {
      "tag": "Projects",
      "title": "The One by Almal in Nusa Dua secures its PBG building approval, 154 branded homes move to the next construction phase",
      "summary": "Dubai-based developer Almal received a Building Approval (PBG) from Badung Regency on 14 October 2026 for a 154-unit project in Nusa Dua under Wyndham's Registry Collection Hotels brand.",
      "body": [
        {
          "p": "Almal Real Estate Development, a property developer headquartered in Dubai, announced that The One by Almal Bali Nusa Dua, a Registry Collection Hotel, has obtained its official Building Approval (Persetujuan Bangunan Gedung, PBG). PBG No. SK-PBG-510305-14102026-001 was issued by Badung Regency on 14 October 2026 through the project's Indonesian entity, PT Magical Bali Villas. The press release was published by ANTARA on 16 October 2026."
        },
        {
          "h": "Project facts"
        },
        {
          "ul": [
            "154 residential units: apartments, townhouses and private villas, with dining, leisure and resort facilities.",
            "Branded under Registry Collection Hotels by Wyndham Hotels & Resorts, with access to Wyndham Rewards.",
            "According to the developer, the permit clears the way for the next construction phase.",
            "Prices, completion date and investment value were not disclosed."
          ]
        },
        {
          "p": "The release quotes Almal founder Dmytro Starovoitov and Matt Holmes, Wyndham's Vice President of Development for Southeast Asia & Pacific Rim. The project was also recognised at the International Property Awards Asia Pacific 2026–2027."
        },
        {
          "h": "What it means for buyers and investors"
        },
        {
          "p": "Branded residences in Nusa Dua keep multiplying. For off-plan buyers, an issued PBG is an important sign that the project is being built with the right permit, something buyers often overlook. Still check the land status (type of title and lease term), the handover schedule, the management and rental-share agreement, and the Certificate of Fitness (SLF) before the building operates. For villa owners around Nusa Dua and the Bukit, branded projects like this add competition in the premium rental market."
        },
        {
          "note": "Summary of a developer press release. Not legal or investment advice."
        }
      ]
    },
    "ru": {
      "tag": "Проекты",
      "title": "The One by Almal в Нуса-Дуа получил разрешение PBG: 154 брендированных объекта переходят к следующему этапу строительства",
      "summary": "Девелопер из Дубая Almal 14 октября 2026 года получил от округа Бадунг разрешение на строительство (PBG) для проекта на 154 объекта в Нуса-Дуа под брендом Registry Collection Hotels от Wyndham.",
      "body": [
        {
          "p": "Almal Real Estate Development, девелопер со штаб-квартирой в Дубае, объявил, что проект The One by Almal Bali Nusa Dua, a Registry Collection Hotel, получил официальное разрешение на строительство (Persetujuan Bangunan Gedung, PBG). Разрешение № SK-PBG-510305-14102026-001 выдано администрацией округа Бадунг 14 октября 2026 года через индонезийскую компанию проекта PT Magical Bali Villas. Пресс-релиз опубликовало агентство ANTARA 16 октября 2026 года."
        },
        {
          "h": "Факты о проекте"
        },
        {
          "ul": [
            "154 жилых объекта: апартаменты, таунхаусы и частные виллы, с ресторанами, зонами отдыха и курортной инфраструктурой.",
            "Бренд Registry Collection Hotels от Wyndham Hotels & Resorts, с доступом к программе Wyndham Rewards.",
            "По словам девелопера, разрешение открывает путь к следующему этапу строительства.",
            "Цены, срок завершения и объём инвестиций не раскрыты."
          ]
        },
        {
          "p": "В релизе цитируются основатель Almal Дмитрий Старовойтов и Мэтт Холмс, вице-президент Wyndham по развитию в Юго-Восточной Азии и Тихоокеанском регионе. Проект также отмечен на International Property Awards Asia Pacific 2026–2027."
        },
        {
          "h": "Что это значит для покупателей и инвесторов"
        },
        {
          "p": "Брендированных резиденций в Нуса-Дуа становится всё больше. Для покупателей на этапе строительства выданное PBG — важный признак того, что объект строится по разрешению, а это покупатели часто упускают. Всё равно проверьте статус земли (вид права и срок аренды), график передачи, договор управления и распределения арендного дохода, а также сертификат пригодности (SLF) до начала эксплуатации. Для владельцев вилл вокруг Нуса-Дуа и Букита такие проекты означают больше конкуренции на рынке премиальной аренды."
        },
        {
          "note": "Обзор пресс-релиза девелопера. Не является юридической или инвестиционной рекомендацией."
        }
      ]
    }
  },
  {
    "slug": "wisman-bali-september-2026-okupansi-hotel",
    "date": "2026-11-09",
    "ig": {
      "stat": "66,42%",
      "statL": "okupansi hotel bintang Bali, September 2026",
      "h": "Wisman turun musiman, okupansi Bali tetap tertinggi",
      "pts": [
        "650.169 wisman pada September, turun 5,22% dari Agustus",
        "Januari–September 2026: 5,24 juta kunjungan, turun 1,15%",
        "Australia teratas: 165.100 kunjungan pada September"
      ],
      "arti": "Hitung hasil sewa villa dengan asumsi okupansi konservatif dan perhitungkan musim sepi."
    },
    "sources": [
      {
        "t": "detikBali – Kunjungan turis asing ke Bali susut 5,22% pada September 2026 (2 Nov 2026)",
        "u": "https://www.detik.com/bali/bisnis/d-8735304/kunjungan-turis-asing-ke-bali-susut-5-22-pada-september-2026"
      },
      {
        "t": "ANTARA Bali – Dalam tiga bulan terakhir, kedatangan wisman di Bali meningkat (2 Nov 2026)",
        "u": "https://bali.antaranews.com/berita/417671/dalam-tiga-bulan-terakhir-kedatangan-wisman-di-bali-meningkat"
      },
      {
        "t": "Kontan – BPS: tingkat hunian hotel berbintang turun, hanya 51,78% pada September 2026 (2 Nov 2026)",
        "u": "https://nasional.kontan.co.id/news/bps-tingkat-hunian-hotel-berbintang-turun-hanya-5178-pada-september-2026"
      }
    ],
    "id": {
      "tag": "Pasar",
      "title": "Wisman ke Bali turun 5,22% pada September 2026, okupansi hotel bintang tetap tertinggi nasional",
      "summary": "BPS mencatat 650.169 kunjungan wisman ke Bali pada September 2026, turun dari Agustus karena faktor musiman. Tingkat hunian hotel bintang di Bali 66,42%, tertinggi di Indonesia.",
      "body": [
        {
          "p": "BPS Provinsi Bali mencatat 650.169 kunjungan wisatawan mancanegara pada September 2026, turun 5,22% dibanding Agustus 2026 (685.994 kunjungan). Kepala BPS Bali Agus Gede Hendrayana Hermawan menyebut penurunan ini bersifat musiman, pola yang juga terlihat dua tahun sebelumnya. Hampir seluruh wisman masuk lewat Bandara Ngurah Rai."
        },
        {
          "h": "Data utama"
        },
        {
          "ul": [
            "Lima negara asal teratas pada September: Australia 165.100, Tiongkok 54.284, India 41.645, Jepang 30.322, dan Prancis 28.405 kunjungan. Kelimanya menyumbang hampir 50% kunjungan.",
            "Kumulatif Januari–September 2026: 5.237.128 kunjungan, turun 1,15% dibanding periode yang sama 2025.",
            "Dibanding Agustus, kunjungan dari Eropa turun 18,1%, sedangkan dari Oseania naik 1,4%.",
            "Tingkat penghunian kamar (TPK) hotel bintang di Bali pada September 2026 mencapai 66,42%, tertinggi di antara semua provinsi. Rata-rata nasional 51,78%."
          ]
        },
        {
          "h": "Artinya bagi investor"
        },
        {
          "p": "Permintaan di Bali masih yang terkuat di Indonesia, tetapi jumlah wisman tahun ini relatif datar dibanding 2025, sementara pasokan kamar hotel dan villa terus bertambah. Investor villa sewa sebaiknya memakai asumsi okupansi yang konservatif, memperhitungkan bulan-bulan sepi, dan memilih lokasi serta konsep yang jelas berbeda dari pesaing. Ketergantungan pada beberapa pasar utama, terutama Australia, juga perlu masuk perhitungan risiko."
        },
        {
          "note": "Ringkasan data BPS dari pemberitaan media. Bukan nasihat investasi."
        }
      ]
    },
    "en": {
      "tag": "Market",
      "title": "Foreign arrivals to Bali fall 5.22% in September 2026, star-hotel occupancy still the highest in Indonesia",
      "summary": "Statistics Indonesia (BPS) recorded 650,169 foreign visits to Bali in September 2026, down from August due to seasonal factors. Star-hotel occupancy in Bali was 66.42%, the highest in the country.",
      "body": [
        {
          "p": "BPS Bali recorded 650,169 foreign tourist visits in September 2026, down 5.22% from August 2026 (685,994 visits). BPS Bali head Agus Gede Hendrayana Hermawan said the decline is seasonal, a pattern also seen in the previous two years. Almost all foreign visitors arrived through Ngurah Rai Airport."
        },
        {
          "h": "Key data"
        },
        {
          "ul": [
            "Top five source countries in September: Australia 165,100, China 54,284, India 41,645, Japan 30,322 and France 28,405 visits. Together they made up almost 50% of visits.",
            "January–September 2026 cumulative: 5,237,128 visits, down 1.15% from the same period of 2025.",
            "Compared with August, visits from Europe fell 18.1%, while visits from Oceania rose 1.4%.",
            "Star-hotel room occupancy (TPK) in Bali reached 66.42% in September 2026, the highest of any province. The national average was 51.78%."
          ]
        },
        {
          "h": "What it means for investors"
        },
        {
          "p": "Demand in Bali is still the strongest in Indonesia, but foreign arrivals this year are broadly flat against 2025, while hotel and villa supply keeps growing. Rental-villa investors should use conservative occupancy assumptions, factor in low-season months, and choose a location and concept that clearly stand out from the competition. Reliance on a few key markets, especially Australia, should also be part of the risk assessment."
        },
        {
          "note": "Summary of BPS data as reported by the media. Not investment advice."
        }
      ]
    },
    "ru": {
      "tag": "Рынок",
      "title": "Поток иностранных туристов на Бали в сентябре 2026 года снизился на 5,22%, загрузка звёздных отелей — по-прежнему самая высокая в стране",
      "summary": "Статистическое управление (BPS) зафиксировало 650 169 визитов иностранных туристов на Бали в сентябре 2026 года — меньше, чем в августе, из-за сезонности. Загрузка звёздных отелей на Бали составила 66,42%, это максимум по Индонезии.",
      "body": [
        {
          "p": "BPS провинции Бали зафиксировало 650 169 визитов иностранных туристов в сентябре 2026 года — на 5,22% меньше, чем в августе 2026 года (685 994 визита). Глава BPS Бали Агус Геде Хендраяна Хермаван назвал снижение сезонным: такая же картина наблюдалась и в два предыдущих года. Почти все иностранные туристы прибыли через аэропорт Нгурах-Рай."
        },
        {
          "h": "Основные данные"
        },
        {
          "ul": [
            "Пять ведущих стран в сентябре: Австралия — 165 100, Китай — 54 284, Индия — 41 645, Япония — 30 322 и Франция — 28 405 визитов. Вместе на них пришлось почти 50% визитов.",
            "За январь–сентябрь 2026 года: 5 237 128 визитов, на 1,15% меньше, чем за тот же период 2025 года.",
            "По сравнению с августом поток из Европы снизился на 18,1%, а из Океании вырос на 1,4%.",
            "Загрузка номеров (TPK) звёздных отелей на Бали в сентябре 2026 года составила 66,42% — самый высокий показатель среди всех провинций. Средний показатель по стране — 51,78%."
          ]
        },
        {
          "h": "Что это значит для инвесторов"
        },
        {
          "p": "Спрос на Бали по-прежнему самый сильный в Индонезии, но число иностранных туристов в этом году в целом на уровне 2025 года, тогда как предложение отелей и вилл продолжает расти. Инвесторам в арендные виллы стоит закладывать консервативную загрузку, учитывать месяцы низкого сезона и выбирать локацию и концепцию, заметно отличающиеся от конкурентов. Зависимость от нескольких ключевых рынков, особенно Австралии, тоже стоит учитывать при оценке рисков."
        },
        {
          "note": "Обзор данных BPS по сообщениям СМИ. Не является инвестиционной рекомендацией."
        }
      ]
    }
  },
  {
    "slug": "terowongan-gatsu-canggu-pinjaman-ditunda",
    "date": "2026-11-09",
    "ig": {
      "stat": "Rp1,67 T",
      "statL": "rencana pinjaman Badung yang ditunda dari APBD 2027",
      "h": "Terowongan Gatsu–Canggu ditunda, target mulai 2028",
      "pts": [
        "Pembebasan lahan sulit, jalan diubah menjadi terowongan",
        "2027: kajian dan dokumen dibiayai PAD Badung",
        "Rencana: terowongan utama 2,4 km, biaya ±Rp3,5 triliun"
      ],
      "arti": "Macet Canggu–Kerobokan belum akan cepat terurai; nilai properti dari akses saat ini, bukan janji proyek."
    },
    "sources": [
      {
        "t": "Majalah Fakta – Tak ada relokasi, Pemkab Badung batalkan rencana utang daerah Rp1,67 triliun di APBD 2027 (29 Okt 2026)",
        "u": "https://majalahfakta.id/tak-ada-relokasi-pemkab-badung-batalkan-rencana-utang-daerah-rp167-triliun-di-apbd-2027/"
      },
      {
        "t": "Bali Post – DPRD Badung dukung penundaan pinjaman Rp1,6 triliun, minta proyek infrastruktur dikaji lebih matang (1 Nov 2026)",
        "u": "https://www.balipost.com/news/2026/11/01/593566/DPRD-Badung-Dukung-Penundaan-Pinjaman...html"
      },
      {
        "t": "Warta Bali – Terowongan ruas Gatsu Barat–Canggu diperkirakan telan Rp3,5 triliun (22 Sep 2026)",
        "u": "https://wartabalionline.com/2026/09/22/terowongan-ruas-gatsu-barat-canggu-diperkirakan-telan-rp35-triliun/"
      }
    ],
    "id": {
      "tag": "Infrastruktur",
      "title": "Badung tunda pinjaman Rp1,67 triliun, terowongan Gatsu Barat–Canggu ditargetkan mulai dibangun 2028",
      "summary": "Pemkab Badung batal memasukkan pinjaman baru Rp1,67 triliun ke RAPBD 2027 karena proyek jalan Gatsu–Canggu, yang kini dirancang menjadi terowongan, belum siap dibangun. Persiapan 2027 dibiayai PAD.",
      "body": [
        {
          "p": "Dalam rapat paripurna DPRD Badung pada 29 Oktober 2026, Pemkab Badung menunda rencana pinjaman daerah baru Rp1,67 triliun di RAPBD 2027. Dana itu semula untuk mengurai kemacetan parah di koridor Gatot Subroto Barat–Canggu yang melintasi Kuta Utara dan Mengwi. Bupati Badung I Wayan Adi Arnawa menyebut proyek belum bisa dieksekusi pada 2027, sehingga meminjam pada tahun itu hanya menambah beban bunga dan cicilan. \"Buat apa kami pinjam uang?\" katanya."
        },
        {
          "p": "Pembebasan lahan di kawasan padat ternyata sulit karena banyak rumah dan usaha tidak bisa direlokasi. Karena itu konsep proyek diubah dari jalan biasa menjadi jaringan terowongan bawah tanah. Pada 2027, kajian teknis, studi kelayakan, dan dokumen administrasi dibiayai PAD Badung, sementara konstruksi fisik ditargetkan bertahap mulai 2028. Ketua DPRD Badung I Gusti Anom Gumanti mendukung penundaan ini dan meminta persiapan tetap berjalan."
        },
        {
          "h": "Gambaran rencana (masih kajian)"
        },
        {
          "ul": [
            "Ruas Gatsu Barat–Canggu sekitar 3,2 km, dengan terowongan utama 2,4 km di kedalaman sekitar 15 meter (PUPR Badung, September 2026).",
            "Biaya terowongan diperkirakan sekitar Rp3,5 triliun. Badung menjajaki kerja sama dengan perusahaan Tiongkok Shanghai Tunnel Engineering Co. (STEC).",
            "Bila jadi dibangun, Badung berencana menerapkan jalan berbayar elektronik (ERP) di ruas ini."
          ]
        },
        {
          "h": "Artinya bagi buyer dan investor"
        },
        {
          "p": "Solusi macet Canggu–Kerobokan belum akan terasa dalam waktu dekat: konstruksi paling cepat dimulai 2028 dan masih bergantung pada pinjaman baru. Nilai properti di Canggu, Berawa, dan Kerobokan sebaiknya dinilai dari akses yang ada saat ini, bukan dari janji infrastruktur. Pemilik lahan di sepanjang koridor sebaiknya memantau penetapan trase final, karena terowongan dan jalan aksesnya bisa memengaruhi lahan di sekitarnya."
        },
        {
          "note": "Ringkasan berita. Rencana, biaya, dan jadwal proyek masih dapat berubah. Bukan nasihat investasi."
        }
      ]
    },
    "en": {
      "tag": "Infrastructure",
      "title": "Badung postpones IDR 1.67 trillion loan, Gatsu Barat–Canggu tunnel now targeted to start in 2028",
      "summary": "Badung Regency dropped a new IDR 1.67 trillion loan from its draft 2027 budget because the Gatsu–Canggu road project, now redesigned as a tunnel, is not ready for construction. Preparation in 2027 will be funded from local revenue.",
      "body": [
        {
          "p": "At a Badung council plenary session on 29 October 2026, the regency government postponed a planned new regional loan of IDR 1.67 trillion in the draft 2027 budget. The money was originally meant to ease severe congestion on the Gatot Subroto Barat–Canggu corridor through North Kuta and Mengwi. Badung Regent I Wayan Adi Arnawa said the project cannot be executed in 2027, so borrowing that year would only add interest and repayment costs. \"Why would we borrow money?\" he said."
        },
        {
          "p": "Land acquisition in the densely built area proved difficult because many homes and businesses cannot be relocated. The concept was therefore changed from a conventional road to an underground tunnel network. In 2027, technical studies, a feasibility study and administrative documents will be funded from Badung's own revenue (PAD), while physical construction is targeted to start in stages from 2028. Badung council chair I Gusti Anom Gumanti backed the postponement and asked that preparations continue."
        },
        {
          "h": "Outline of the plan (still under study)"
        },
        {
          "ul": [
            "The Gatsu Barat–Canggu segment is about 3.2 km, with a 2.4 km main tunnel roughly 15 metres underground (Badung Public Works, September 2026).",
            "The tunnel is estimated to cost about IDR 3.5 trillion. Badung is exploring cooperation with Chinese firm Shanghai Tunnel Engineering Co. (STEC).",
            "If built, Badung plans electronic road pricing (ERP) on this segment."
          ]
        },
        {
          "h": "What it means for buyers and investors"
        },
        {
          "p": "Relief from Canggu–Kerobokan traffic will not come soon: construction starts in 2028 at the earliest and still depends on a new loan. Property in Canggu, Berawa and Kerobokan should be valued on today's access, not on promised infrastructure. Landowners along the corridor should watch for the final alignment, as the tunnel and its access roads could affect nearby land."
        },
        {
          "note": "News summary. Project plans, costs and timelines may change. Not investment advice."
        }
      ]
    },
    "ru": {
      "tag": "Инфраструктура",
      "title": "Бадунг откладывает заём 1,67 трлн рупий, строительство тоннеля Гатсу-Барат – Чангу планируют начать в 2028 году",
      "summary": "Округ Бадунг исключил новый заём 1,67 трлн рупий из проекта бюджета на 2027 год: проект дороги Гатсу – Чангу, переделанный в тоннель, ещё не готов к строительству. Подготовку в 2027 году профинансируют из собственных доходов.",
      "body": [
        {
          "p": "На пленарном заседании совета Бадунга 29 октября 2026 года администрация округа отложила планируемый новый заём 1,67 трлн рупий в проекте бюджета на 2027 год. Средства предназначались для решения проблемы сильных пробок в коридоре Гатот-Суброто-Барат – Чангу через Северную Куту и Менгви. Глава округа Бадунг И Ваян Ади Арнава заявил, что в 2027 году проект реализовать нельзя, поэтому заём в этом году лишь добавит расходов на проценты и погашение. «Зачем нам брать деньги в долг?» — сказал он."
        },
        {
          "p": "Изъятие земли в плотной застройке оказалось сложным: многие дома и предприятия невозможно переселить. Поэтому концепцию изменили с обычной дороги на сеть подземных тоннелей. В 2027 году технические исследования, ТЭО и административные документы будут оплачены из собственных доходов Бадунга (PAD), а строительство планируется начинать поэтапно с 2028 года. Председатель совета Бадунга И Густи Аном Гуманти поддержал отсрочку и попросил продолжать подготовку."
        },
        {
          "h": "Контуры плана (пока на стадии исследований)"
        },
        {
          "ul": [
            "Участок Гатсу-Барат – Чангу длиной около 3,2 км, основной тоннель 2,4 км на глубине около 15 метров (управление общественных работ Бадунга, сентябрь 2026 года).",
            "Стоимость тоннеля оценивается примерно в 3,5 трлн рупий. Бадунг изучает сотрудничество с китайской компанией Shanghai Tunnel Engineering Co. (STEC).",
            "Если тоннель построят, Бадунг планирует ввести на участке электронную плату за проезд (ERP)."
          ]
        },
        {
          "h": "Что это значит для покупателей и инвесторов"
        },
        {
          "p": "Облегчения пробок между Чангу и Керобоканом в ближайшее время не будет: строительство начнётся не раньше 2028 года и всё ещё зависит от нового займа. Недвижимость в Чангу, Бераве и Керобокане стоит оценивать по нынешней доступности, а не по обещанной инфраструктуре. Владельцам земли вдоль коридора стоит следить за утверждением окончательной трассы: тоннель и подъездные дороги могут затронуть соседние участки."
        },
        {
          "note": "Обзор новостей. Планы, стоимость и сроки проекта могут измениться. Не является инвестиционной рекомендацией."
        }
      ]
    }
  },
  {
    "slug": "anantara-residences-ubud-payangan",
    "date": "2026-11-09",
    "ig": {
      "stat": "US$700rb",
      "statL": "harga indikatif mulai, villa Anantara di Payangan",
      "h": "Villa bermerek Anantara di Ubud mulai dipasarkan",
      "pts": [
        "15 villa berkolam pribadi, tipe 1 dan 2 kamar",
        "Dikembangkan Minor International bersama WIKA Realty",
        "Ada program sewa yang dikelola penuh oleh Anantara"
      ],
      "arti": "Patokan baru villa bermerek non-pantai; bandingkan premi merek dengan villa biasa yang lebih luas."
    },
    "sources": [
      {
        "t": "Yahoo News Singapore – Anantara-branded villas in Bali up for sale with prices from US$700,000 (19 Okt 2026)",
        "u": "https://sg.news.yahoo.com/anantara-branded-villas-bali-sale-083747648.html"
      },
      {
        "t": "TheFinance.sg – These 15 new Bali villas start from S$897K (18 Okt 2026)",
        "u": "https://thefinance.sg/2026/10/18/these-15-new-bali-villas-start-from-s897k-each-comes-with-a-private-pool-and-5-star-resort-services/"
      }
    ],
    "id": {
      "tag": "Proyek",
      "title": "Anantara Residences Ubud dipasarkan: 15 villa di Payangan mulai sekitar US$700.000",
      "summary": "Minor International dan WIKA Realty meluncurkan penjualan 15 villa berkolam pribadi bermerek Anantara di Payangan, Gianyar, dengan harga indikatif mulai sekitar US$700.000.",
      "body": [
        {
          "p": "Minor International, pemilik merek Anantara, bersama pengembang BUMN PT Wijaya Karya Realty (WIKA Realty) meluncurkan penjualan Anantara Residences Ubud Bali pada Oktober 2026, seperti dilaporkan Yahoo News Singapore pada 19 Oktober 2026. Proyek berada di Payangan, Gianyar, sekitar 35 menit di utara pusat Ubud, bersebelahan dengan resort Anantara Ubud Bali berkapasitas 85 kamar yang dibuka pada Oktober 2024."
        },
        {
          "h": "Fakta proyek"
        },
        {
          "ul": [
            "15 villa berkolam pribadi: tipe 1 kamar (1.163 sq ft, sekitar 108 m²) dan 2 kamar (1.765 sq ft, sekitar 164 m²).",
            "Harga indikatif mulai sekitar US$700.000.",
            "Pemilik mendapat akses fasilitas resort (spa, pusat kebugaran, kids club, butler 24 jam) dan bisa ikut program sewa yang dikelola penuh oleh Anantara.",
            "Desain oleh Aboday (Jakarta), interior oleh EDC International (Malaysia)."
          ]
        },
        {
          "p": "Menurut Micah Tamthai, Group COO Lifestyle & Real Estate Minor International, minat datang dari pembeli Jakarta dan Surabaya, serta dari Singapura, Hong Kong, Australia, Amerika Serikat, dan Inggris. Status kepemilikan (hak milik atau sewa) dan jadwal selesai tidak disebutkan dalam laporan."
        },
        {
          "h": "Artinya bagi buyer dan investor"
        },
        {
          "p": "Harga ini menjadi patokan baru villa bermerek di luar kawasan pantai: sekitar US$700.000 untuk villa 1 kamar seluas sekitar 108 m². Pembeli perlu membandingkan premi merek dengan villa non-merek di Ubud atau Bukit yang bisa jadi lebih luas untuk anggaran serupa. Sebelum membeli, minta kejelasan status tanah dan masa sewa, biaya pengelolaan, serta skema bagi hasil program sewa."
        },
        {
          "note": "Ringkasan berita. Bukan nasihat investasi."
        }
      ]
    },
    "en": {
      "tag": "Projects",
      "title": "Anantara Residences Ubud launched: 15 villas in Payangan from about US$700,000",
      "summary": "Minor International and WIKA Realty have launched sales of 15 Anantara-branded private-pool villas in Payangan, Gianyar, with indicative prices from about US$700,000.",
      "body": [
        {
          "p": "Minor International, owner of the Anantara brand, and state-owned developer PT Wijaya Karya Realty (WIKA Realty) launched sales of Anantara Residences Ubud Bali in October 2026, Yahoo News Singapore reported on 19 October 2026. The project is in Payangan, Gianyar, about 35 minutes north of central Ubud, next to the 85-key Anantara Ubud Bali Resort, which opened in October 2024."
        },
        {
          "h": "Project facts"
        },
        {
          "ul": [
            "15 private-pool villas: one-bedroom (1,163 sq ft, about 108 m²) and two-bedroom (1,765 sq ft, about 164 m²).",
            "Indicative prices from about US$700,000.",
            "Owners get access to resort facilities (spa, fitness centre, kids' club, 24-hour butler) and can join a rental programme fully managed by Anantara.",
            "Design by Aboday (Jakarta), interiors by EDC International (Malaysia)."
          ]
        },
        {
          "p": "According to Micah Tamthai, Minor International's Group COO of Lifestyle & Real Estate, interest comes from buyers in Jakarta and Surabaya as well as Singapore, Hong Kong, Australia, the United States and the United Kingdom. Tenure (freehold or leasehold) and the completion date were not stated in the report."
        },
        {
          "h": "What it means for buyers and investors"
        },
        {
          "p": "This price sets a new benchmark for branded villas away from the beach: about US$700,000 for a one-bedroom villa of about 108 m². Buyers should weigh the brand premium against non-branded villas in Ubud or the Bukit, which may offer more space for a similar budget. Before buying, get clarity on the land status and lease term, management fees and the rental-programme revenue split."
        },
        {
          "note": "News summary. Not investment advice."
        }
      ]
    },
    "ru": {
      "tag": "Проекты",
      "title": "Старт продаж Anantara Residences Ubud: 15 вилл в Паянгане от примерно 700 000 долларов США",
      "summary": "Minor International и WIKA Realty начали продажи 15 вилл с собственными бассейнами под брендом Anantara в Паянгане (Гианьяр) по ориентировочной цене от примерно 700 000 долларов США.",
      "body": [
        {
          "p": "Minor International, владелец бренда Anantara, и государственный девелопер PT Wijaya Karya Realty (WIKA Realty) в октябре 2026 года начали продажи Anantara Residences Ubud Bali, сообщило Yahoo News Singapore 19 октября 2026 года. Проект находится в Паянгане (Гианьяр), примерно в 35 минутах к северу от центра Убуда, рядом с курортом Anantara Ubud Bali на 85 номеров, открытым в октябре 2024 года."
        },
        {
          "h": "Факты о проекте"
        },
        {
          "ul": [
            "15 вилл с собственными бассейнами: с одной спальней (1163 кв. фута, около 108 м²) и с двумя спальнями (1765 кв. футов, около 164 м²).",
            "Ориентировочная цена — от примерно 700 000 долларов США.",
            "Владельцы получают доступ к инфраструктуре курорта (спа, фитнес-центр, детский клуб, круглосуточный дворецкий) и могут участвовать в программе аренды под полным управлением Anantara.",
            "Архитектура — Aboday (Джакарта), интерьеры — EDC International (Малайзия)."
          ]
        },
        {
          "p": "По словам Мики Тамтая, группового операционного директора Minor International по направлению Lifestyle & Real Estate, интерес проявляют покупатели из Джакарты и Сурабаи, а также из Сингапура, Гонконга, Австралии, США и Великобритании. Форма владения (собственность или аренда) и срок завершения в материале не указаны."
        },
        {
          "h": "Что это значит для покупателей и инвесторов"
        },
        {
          "p": "Эта цена задаёт новый ориентир для брендированных вилл вдали от пляжа: около 700 000 долларов за виллу с одной спальней площадью около 108 м². Покупателям стоит сравнить премию за бренд с небрендированными виллами в Убуде или на Буките, которые за сопоставимый бюджет могут быть просторнее. Перед покупкой уточните статус земли и срок аренды, расходы на управление и распределение дохода в программе аренды."
        },
        {
          "note": "Обзор новостей. Не является инвестиционной рекомендацией."
        }
      ]
    }
  },
  {
    "slug": "trem-bandara-ngurah-rai-canggu",
    "date": "2026-11-08",
    "ig": {
      "stat": "30 menit",
      "statL": "target waktu tempuh trem Bandara Ngurah Rai–Canggu",
      "h": "Trem listrik Bandara–Canggu disiapkan KAI",
      "pts": [
        "±12 km lewat Kuta, Legian, Seminyak; tiap 10 menit",
        "Target groundbreaking Maret 2027, rute penuh 2029",
        "Anggaran sekitar Rp2 triliun lebih (Dirut KAI)"
      ],
      "arti": "Akses Canggu–bandara bisa jauh lebih cepat, tapi rute & lokasi stasiun final masih dikaji."
    },
    "sources": [
      {
        "t": "Katadata – KAI bakal bangun kereta di Bali, rute Ngurah Rai sampai Canggu (5 Nov 2026)",
        "u": "https://katadata.co.id/berita/industri/6aec6297e4e9d/kai-bakal-bangun-kereta-di-bali-rute-ngurah-rai-sampai-canggu"
      },
      {
        "t": "ANTARA Bali – Pemprov Bali dan KAI kerja sama kembangkan trem berbasis baterai rute Bandara–Canggu (2 Sep 2026)",
        "u": "https://bali.antaranews.com/berita/412671/pemprov-bali-dan-kai-kerja-sama-kembangkan-trem-berbasis-baterai-rute-bandara-canggu"
      },
      {
        "t": "Investortrust – Menhub wanti-wanti proyek trem Bali: jangan cuma di atas kertas (15 Sep 2026)",
        "u": "https://investortrust.id/business/116335/menhub-wanti-wanti-proyek-trem-bali-jangan-cuma-di-atas-kertas"
      },
      {
        "t": "detikBali – Proyek trem Bali dimulai 2027 (6 Agu 2026)",
        "u": "https://www.detik.com/bali/bisnis/d-8607144/proyek-trem-bali-dimulai-2027"
      }
    ],
    "id": {
      "tag": "Infrastruktur",
      "title": "Trem listrik Bandara Ngurah Rai–Canggu disiapkan, anggaran sekitar Rp2 triliun",
      "summary": "KAI menyiapkan trem listrik berbasis baterai sepanjang ±12 km dari bandara lewat Kuta, Legian, dan Seminyak ke Canggu. Groundbreaking ditargetkan Maret 2027.",
      "body": [
        {
          "p": "PT Kereta Api Indonesia (KAI) menyiapkan layanan kereta di Bali dari Bandara I Gusti Ngurah Rai ke utara, melewati Kuta, Legian, dan Seminyak, dengan ujung di Canggu. Dalam konferensi pers di Istana Kepresidenan pada 5 November 2026, Direktur Utama KAI Bobby Rasyidin menyebut anggarannya sekitar Rp2 triliun lebih dan proyek akan dikerjakan langsung oleh KAI."
        },
        {
          "p": "Sebelumnya, pada 1 September 2026 di Denpasar, Pemprov Bali, Pemkab Badung, dan KAI menandatangani nota kesepahaman untuk kajian dan koordinasi proyek ini."
        },
        {
          "h": "Rencana yang sudah diumumkan"
        },
        {
          "ul": [
            "Moda: trem listrik berbasis baterai, tanpa kabel di atas, sepanjang sekitar 12 km.",
            "Tahap 1: Ngurah Rai–Legian. Tahap 2: dilanjutkan ke Canggu.",
            "Target: groundbreaking Maret 2027, segmen pertama beroperasi 2028, rute penuh 2029.",
            "Waktu tempuh sekitar 30 menit, trem tiap 10 menit, hingga 60.000 penumpang per hari."
          ]
        },
        {
          "p": "Langkah berikutnya adalah kajian teknis, konsultasi publik, dan pelibatan desa adat. Menteri Perhubungan Dudy Purwagandhi mendukung rencana ini dan meminta proyek berjalan cepat, \"jangan di atas kertas saja\". Koridor Canggu–bandara saat ini kerap macet hingga hampir 15 km. Pemkab Badung juga berencana melebarkan jalan utama menjadi 24 meter."
        },
        {
          "h": "Artinya bagi buyer dan pemilik lahan"
        },
        {
          "p": "Bila terwujud, akses dari Canggu, Berawa, dan sekitarnya ke bandara akan jauh lebih mudah, dan properti di dekat koridor bisa makin diminati. Namun proyek masih tahap kajian, sementara rute detail dan lokasi stasiun belum ditetapkan. Jangan membeli hanya karena rencana ini. Pemilik lahan di tepi jalan utama sebaiknya ikut memantau rencana pelebaran jalan."
        },
        {
          "note": "Ringkasan berita. Rencana dan jadwal proyek masih dapat berubah. Bukan nasihat investasi."
        }
      ]
    },
    "en": {
      "tag": "Infrastructure",
      "title": "Battery tram planned from Ngurah Rai Airport to Canggu, budget around IDR 2 trillion",
      "summary": "KAI is preparing a battery-powered electric tram of about 12 km from the airport through Kuta, Legian and Seminyak to Canggu. Groundbreaking is targeted for March 2027.",
      "body": [
        {
          "p": "State railway company PT Kereta Api Indonesia (KAI) is preparing a rail service in Bali running north from I Gusti Ngurah Rai Airport through Kuta, Legian and Seminyak, ending in Canggu. At a press conference at the Presidential Palace on 5 November 2026, KAI President Director Bobby Rasyidin said the budget is a little over IDR 2 trillion and that KAI will build the project itself."
        },
        {
          "p": "Earlier, on 1 September 2026 in Denpasar, the Bali Provincial Government, the Badung Regency Government and KAI signed a memorandum of understanding to study and coordinate the project."
        },
        {
          "h": "What has been announced"
        },
        {
          "ul": [
            "Mode: a battery-powered electric tram without overhead wires, about 12 km long.",
            "Phase 1: Ngurah Rai–Legian. Phase 2: extended to Canggu.",
            "Targets: groundbreaking in March 2027, first segment operating in 2028, full route in 2029.",
            "Travel time around 30 minutes, a tram every 10 minutes, up to 60,000 passengers per day."
          ]
        },
        {
          "p": "Next steps are technical studies, public consultation and the involvement of customary villages. Transport Minister Dudy Purwagandhi supports the plan and has asked for quick progress, saying it must not stay \"just on paper\". The Canggu–airport corridor is often jammed for almost 15 km. Badung Regency also plans to widen the main road to 24 metres."
        },
        {
          "h": "What it means for buyers and landowners"
        },
        {
          "p": "If it goes ahead, getting from Canggu, Berawa and nearby areas to the airport will become much easier, and property near the corridor could see stronger demand. However, the project is still at the study stage, and the detailed route and station locations have not been set. Do not buy on the strength of this plan alone. Owners of land along the main road should also keep an eye on the road-widening plan."
        },
        {
          "note": "News summary. Project plans and timelines may change. Not investment advice."
        }
      ]
    },
    "ru": {
      "tag": "Инфраструктура",
      "title": "Трамвай на батареях от аэропорта Нгурах-Рай до Чангу: бюджет около 2 трлн рупий",
      "summary": "KAI готовит электрический трамвай на батареях длиной около 12 км от аэропорта через Куту, Легиан и Семиньяк до Чангу. Начало строительства запланировано на март 2027 года.",
      "body": [
        {
          "p": "Государственная железнодорожная компания PT Kereta Api Indonesia (KAI) готовит на Бали железнодорожное сообщение от аэропорта И Густи Нгурах-Рай на север через Куту, Легиан и Семиньяк с конечной точкой в Чангу. На пресс-конференции в Президентском дворце 5 ноября 2026 года президент-директор KAI Бобби Расьидин сообщил, что бюджет составит чуть более 2 трлн рупий и KAI будет строить проект самостоятельно."
        },
        {
          "p": "Ранее, 1 сентября 2026 года в Денпасаре, правительство провинции Бали, администрация округа Бадунг и KAI подписали меморандум о взаимопонимании для изучения и координации проекта."
        },
        {
          "h": "Что объявлено"
        },
        {
          "ul": [
            "Вид транспорта: электрический трамвай на батареях без контактной сети, длина около 12 км.",
            "Этап 1: Нгурах-Рай – Легиан. Этап 2: продление до Чангу.",
            "Сроки: начало строительства в марте 2027 года, первый участок в 2028 году, весь маршрут в 2029 году.",
            "Время в пути около 30 минут, трамвай каждые 10 минут, до 60 000 пассажиров в день."
          ]
        },
        {
          "p": "Следующие шаги: технические исследования, общественные консультации и участие традиционных деревень. Министр транспорта Дуди Пурвагандхи поддерживает план и призывает двигаться быстро, «а не только на бумаге». Коридор Чангу – аэропорт часто стоит в пробке длиной почти 15 км. Округ Бадунг также планирует расширить главную дорогу до 24 метров."
        },
        {
          "h": "Что это значит для покупателей и владельцев земли"
        },
        {
          "p": "Если проект будет реализован, добираться из Чангу, Берава и окрестностей до аэропорта станет гораздо проще, а спрос на недвижимость рядом с коридором может вырасти. Однако проект пока на стадии исследований, точный маршрут и расположение станций ещё не определены. Не покупайте только из-за этого плана. Владельцам земли вдоль главной дороги стоит также следить за планом расширения дороги."
        },
        {
          "note": "Обзор новостей. Планы и сроки проекта могут измениться. Не является инвестиционной рекомендацией."
        }
      ]
    }
  },
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
