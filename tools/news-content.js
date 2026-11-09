// Isi halaman News (berita properti Bali). Urut dari TERBARU. Berita baru ditambahkan di AWAL array.
// Setiap berita: slug, date (tanggal terbit di website), sources [{t,u}], lalu id/en/ru: {tag, title, summary, body:[blok]}
// Blok: {h} {p} {ul:[...]} {note}
// ig (untuk carousel Instagram mingguan, Bahasa Indonesia, singkat): {stat: angka utama ≤9 karakter, statL: keterangan angka, h: judul slide ≤60 karakter,
//    pts: [3 fakta ≤70 karakter], arti: 1 kalimat "artinya bagi Anda" ≤110 karakter}. Tanpa ig, slide dibuat otomatis dari judul & isi.
const NEWS = [
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
