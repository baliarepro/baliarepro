// Halaman Tentang Kami (3 bahasa). Teks diedit di objek A di bawah.
const { T: HT, CSS: HOME_CSS } = require("./home.js");

const A = {
  id: {
    title: "Tentang Kami – Agen Properti Independen di Bali | Bali Are Property",
    desc: "Bali Are Property, agen real estat independen di Bali sejak 2009. Keahlian di Kuta Selatan dan Kuta Utara: penjualan properti, pencarian lahan, villa, dan tanah investasi.",
    eyebrow: "Tentang Bali Are Property",
    h1: ["Pengalaman properti lokal.", "Pemahaman pasar.", "Peluang investasi."],
    since: "Mulai berkarier di properti Bali",
    intro: [
      "Bali Are Property adalah agen real estat independen yang didirikan pada 2009 oleh seorang agen properti yang telah lama berkiprah di industri properti Bali.",
      "Sejak memulai kariernya di Bali pada 2009, pendiri kami telah membangun pengalaman praktis dan pemahaman pasar lokal di bidang penjualan properti, akuisisi lahan, transaksi villa, dan peluang properti investasi.",
      "Keahlian utama kami ada di Kuta Selatan dan Kuta Utara, dua pasar properti penting di Bali dengan beragam peluang untuk pengembangan hunian, hospitality, pariwisata, dan komersial."
    ],
    expertH: "Keahlian pasar lokal kami",
    expertP: "Kami fokus memahami karakter setiap lokasi, termasuk ketersediaan lahan, aksesibilitas, perkembangan di sekitarnya, nilai properti, dan potensi pemanfaatannya.",
    expertLead: "Pasar properti utama kami:",
    doH: "Apa yang kami lakukan",
    doP: "Bali Are Property menyediakan layanan pemasaran dan pencarian properti untuk pembeli, penjual, dan investor. Layanan kami meliputi:",
    do: ["Penjualan dan pemasaran properti", "Pencarian lahan sesuai kebutuhan pembeli", "Transaksi villa dan properti hunian", "Peluang tanah investasi", "Informasi properti dan analisis lokasi", "Mempertemukan pemilik properti dengan calon pembeli yang serius"],
    apprH: "Pendekatan kami",
    appr: [
      "Kami percaya transaksi properti yang berhasil dimulai dari informasi yang akurat, pemahaman lokasi yang jelas, dan komunikasi yang baik antara semua pihak.",
      "Kami berupaya memberikan peluang properti yang relevan dan wawasan pasar lokal yang praktis, agar klien dapat mengambil keputusan properti dengan tepat."
    ],
    missH: "Misi kami",
    miss: "Menghubungkan pemilik properti, pembeli, dan investor melalui informasi properti yang andal, pemahaman pasar lokal, dan layanan profesional.",
    closing: "Bali Are Property – Mitra properti lokal Anda di Bali sejak 2009."
  },
  en: {
    title: "About Us – Independent Property Agency in Bali | Bali Are Property",
    desc: "Bali Are Property is an independent real estate agency in Bali since 2009, focused on South Kuta and North Kuta: property sales, land sourcing, villas and investment land.",
    eyebrow: "About Bali Are Property",
    h1: ["Local property experience.", "Market knowledge.", "Investment opportunities."],
    since: "Started in Bali real estate",
    intro: [
      "Bali Are Property is an independent real estate agency founded in 2009 by a property agent with a long-standing presence in Bali's real estate industry.",
      "Since starting his career in Bali in 2009, our founder has developed practical experience and local market knowledge in property sales, land acquisition, villa transactions and investment property opportunities.",
      "Our primary areas of expertise are South Kuta and North Kuta, two important property markets in Bali with diverse opportunities for residential, hospitality, tourism and commercial property development."
    ],
    expertH: "Our local market expertise",
    expertP: "We focus on understanding the characteristics of each location, including land availability, accessibility, surrounding developments, property values and potential uses.",
    expertLead: "Our main property markets include:",
    doH: "What we do",
    doP: "Bali Are Property provides property marketing and sourcing services for buyers, sellers and investors. Our services include:",
    do: ["Property sales and marketing", "Land sourcing based on buyer requirements", "Villa and residential property transactions", "Investment land opportunities", "Property information and location analysis", "Connecting property owners with qualified prospective buyers"],
    apprH: "Our approach",
    appr: [
      "We believe successful property transactions begin with accurate information, a clear understanding of the location and good communication between all parties.",
      "We aim to provide clients with relevant property opportunities and practical local market insights to support informed property decisions."
    ],
    missH: "Our mission",
    miss: "To connect property owners, buyers and investors through reliable property information, local market knowledge and professional service.",
    closing: "Bali Are Property – Your local property partner in Bali since 2009."
  },
  ru: {
    title: "О нас – независимое агентство недвижимости на Бали | Bali Are Property",
    desc: "Bali Are Property — независимое агентство недвижимости на Бали с 2009 года. Южная и Северная Кута: продажа, подбор земли, виллы и инвестиционные участки.",
    eyebrow: "О Bali Are Property",
    h1: ["Местный опыт в недвижимости.", "Знание рынка.", "Инвестиционные возможности."],
    since: "Начало работы на рынке Бали",
    intro: [
      "Bali Are Property — независимое агентство недвижимости, основанное в 2009 году агентом, который давно работает на рынке недвижимости Бали.",
      "Начав карьеру на Бали в 2009 году, наш основатель накопил практический опыт и знание местного рынка в продаже недвижимости, покупке земли, сделках с виллами и инвестиционной недвижимости.",
      "Наша основная специализация — Южная и Северная Кута, два важных рынка недвижимости Бали с широкими возможностями для жилья, гостиничного бизнеса, туризма и коммерческих проектов."
    ],
    expertH: "Знание местного рынка",
    expertP: "Мы стремимся понимать особенности каждой локации: наличие земли, транспортную доступность, окружающую застройку, стоимость недвижимости и возможные варианты использования.",
    expertLead: "Наши основные рынки:",
    doH: "Чем мы занимаемся",
    doP: "Bali Are Property оказывает услуги по продвижению и подбору недвижимости для покупателей, продавцов и инвесторов. Наши услуги:",
    do: ["Продажа и продвижение недвижимости", "Подбор земли под требования покупателя", "Сделки с виллами и жилой недвижимостью", "Инвестиционные земельные участки", "Информация об объектах и анализ локаций", "Связь владельцев с серьёзными покупателями"],
    apprH: "Наш подход",
    appr: [
      "Мы уверены, что успешная сделка начинается с точной информации, ясного понимания локации и хорошей коммуникации между всеми сторонами.",
      "Мы предлагаем клиентам подходящие объекты и практичные знания местного рынка, чтобы они могли принимать взвешенные решения."
    ],
    missH: "Наша миссия",
    miss: "Соединять владельцев недвижимости, покупателей и инвесторов благодаря надёжной информации, знанию местного рынка и профессиональному сервису.",
    closing: "Bali Are Property — ваш местный партнёр по недвижимости на Бали с 2009 года."
  }
};

const CSS = `<style>
.ab-hero{padding-block:56px 36px;display:grid;gap:16px}
.ab-hero h1{font-size:clamp(34px,6.4vw,64px);font-weight:800;letter-spacing:-.025em;line-height:1.04}
.ab-hero h1 span{display:block}
.ab-hero h1 span:last-child{color:var(--sea)}
.ab-intro{display:grid;grid-template-columns:minmax(0,1fr) minmax(0,2fr);gap:22px 48px;align-items:start;border-top:1.5px solid var(--ink);padding-top:28px}
.yr{display:flex;flex-direction:column;gap:4px}
.yr b{font-family:var(--display);font-size:clamp(64px,10vw,104px);font-weight:800;line-height:.9;color:var(--sand);font-variant-numeric:tabular-nums}
.yr span{font-family:var(--mono);font-size:12px;letter-spacing:.12em;text-transform:uppercase;color:var(--muted)}
.ab-intro .text{display:grid;gap:14px;max-width:64ch}
.ab-intro .text p{margin:0}
.ab-intro .text p:first-child{font-size:19px}
.lead2{margin:0;max-width:64ch;color:var(--ink)}
.lead3{margin:0;font-weight:600}
.appr{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:12px 40px}
.appr p{margin:0;max-width:56ch}
.mission{background:var(--sea-soft);border-radius:20px;padding:32px 26px;margin-top:44px;display:grid;gap:12px}
.mission p{margin:0;font-family:var(--display);font-size:clamp(22px,3.4vw,32px);font-weight:700;line-height:1.2;max-width:36ch;text-wrap:balance}
.closing{margin:36px 0 0;font-family:var(--display);font-size:clamp(20px,3vw,26px);font-weight:700;text-wrap:balance}
@media (max-width:760px){.ab-intro,.appr{grid-template-columns:1fr}}
</style>`;

function renderAbout({ L, head, seoBlock, flags, cta, contact, footer, copyScript, i18nSrc, esc }) {
  const a = A[L], h = HT[L];
  return `<!doctype html>
<html lang="${L}" data-static-lang="${L}">
<head>${head}<title>${esc(a.title)}</title>
${seoBlock}
${HOME_CSS}
${CSS}
</head>
<body>
<div class="wrap home">
  <div class="home-top">
    <a class="eyebrow home-link" href="./"><svg class="bap-mark" viewBox="0 0 120 120" aria-hidden="true" style="width:32px;height:32px;vertical-align:-10px;margin-right:10px"><path d="M12 100V86h6V72h6V58h6V44h6V30h6V18h12v82zM108 100V86h-6V72h-6V58h-6V44h-6V30h-6V18H66v82z" fill="currentColor"/><circle cx="60" cy="44" r="7" fill="#D6BC84"/><path d="M8 110q13-7 26 0t26 0 26 0 26 0" fill="none" stroke="#D6BC84" stroke-width="6" stroke-linecap="round"/></svg>Bali Are Property</a>
    <nav aria-label="Menu">
      <a href="about.html" aria-current="page">${esc(h.nav[3])}</a>
      <a href="listings.html">${esc(h.nav[0])}</a>
      <a href="news.html">${esc(h.nav[1])}</a>
      <a href="guide.html">${esc(h.nav[5])}</a>
      <a href="faq.html">${esc(h.nav[4])}</a>
      <a href="#kontak">${esc(h.nav[2])}</a>
    </nav>
    ${flags}
  </div>

  <header class="ab-hero">
    <div class="eyebrow">${esc(a.eyebrow)}</div>
    <h1>${a.h1.map((x) => `<span>${esc(x)}</span>`).join("")}</h1>
  </header>

  <section class="ab-intro" aria-label="${esc(a.eyebrow)}">
    <div class="yr"><b>2009</b><span>${esc(a.since)}</span></div>
    <div class="text">${a.intro.map((p) => `<p>${esc(p)}</p>`).join("")}</div>
  </section>

  <section class="hsec" aria-labelledby="h-exp">
    <h2 id="h-exp">${esc(a.expertH)}</h2>
    <p class="lead2">${esc(a.expertP)}</p>
    <p class="lead3">${esc(a.expertLead)}</p>
    <div class="cov">
      ${h.cov.map((c) => `<article>
        <h3>${esc(c.name)}</h3>
        <ul>${c.places.map((p) => `<li>${esc(p)}</li>`).join("")}</ul>
        <a href="listings.html#${c.anchor}">${esc(c.link)} →</a>
      </article>`).join("\n      ")}
    </div>
  </section>

  <section class="hsec" aria-labelledby="h-do">
    <h2 id="h-do">${esc(a.doH)}</h2>
    <p class="lead2">${esc(a.doP)}</p>
    <ul class="spec">${a.do.map((s) => `<li>${esc(s)}</li>`).join("")}</ul>
  </section>

  <section class="hsec" aria-labelledby="h-appr">
    <h2 id="h-appr">${esc(a.apprH)}</h2>
    <div class="appr">${a.appr.map((p) => `<p>${esc(p)}</p>`).join("")}</div>
  </section>

  <section class="mission" aria-labelledby="h-miss">
    <div class="eyebrow" id="h-miss">${esc(a.missH)}</div>
    <p>${esc(a.miss)}</p>
  </section>

  <p class="closing">${esc(a.closing)}</p>
  ${cta}

  <div id="kontak">${contact}</div>
  <footer><span>© 2009–${new Date().getFullYear()} Bali Are Property · ${esc(footer)}</span></footer>
</div>
<script>
(function(){
${copyScript}
})();
</script>
<script src="${i18nSrc}"></script>
</body>
</html>
`;
}

module.exports = { A, renderAbout };
