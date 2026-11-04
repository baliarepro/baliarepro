// Halaman FAQ (3 bahasa). {n} = jumlah tahun sejak 2009, dihitung otomatis saat build.
const { T: HT, CSS: HOME_CSS } = require("./home.js");

const n = new Date().getFullYear() - 2009;
const ruYears = (k) => (k % 10 === 1 && k % 100 !== 11 ? "года" : "лет"); // "более N ..." (родительный падеж)

const F = {
  id: {
    title: "FAQ – Bali Are Property",
    desc: "Pertanyaan umum tentang Bali Are Property: agen properti independen di Bali sejak 2009, area Kuta Selatan & Kuta Utara, jenis properti, dan layanan untuk pembeli lokal maupun asing.",
    eyebrow: "FAQ · Bali Are Property",
    h1: "Pertanyaan yang Sering Diajukan",
    qa: [
      ["Apa itu Bali Are Property?", "Bali Are Property adalah agen real estat independen di Bali yang berdiri sejak 2009, dengan spesialisasi penjualan tanah, penjualan villa, pencarian properti, dan peluang investasi."],
      ["Sudah berapa lama Bali Are Property beroperasi di Bali?", `Bali Are Property dibangun di atas pengalaman di industri properti sejak 2009, atau lebih dari ${n} tahun di pasar properti Bali.`],
      ["Area mana yang menjadi spesialisasi Bali Are Property?", "Keahlian utama kami ada di Kuta Selatan dan Kuta Utara, termasuk Ungasan, Jimbaran, Pecatu, Uluwatu, Canggu, Berawa, dan Pererenan."],
      ["Jenis properti apa saja yang ditawarkan Bali Are Property?", "Kami fokus pada tanah dijual, tanah investasi, tanah hunian, properti komersial, villa, dan peluang investasi properti."],
      ["Apakah Bali Are Property bisa membantu investor mencari tanah di Bali?", "Bisa. Kami membantu pembeli dan investor mencari tanah sesuai lokasi yang diinginkan, luas tanah, anggaran, kebutuhan properti, dan rencana pengembangannya."],
      ["Apakah Bali Are Property melayani pembeli asing?", "Kami membantu pemasaran dan pencarian properti untuk calon pembeli lokal maupun internasional yang tertarik dengan peluang properti di Bali."]
    ],
    ask: "Masih ada pertanyaan?", askP: "Tanyakan langsung lewat WhatsApp atau isi form kebutuhan Anda.",
    wa: "Chat WhatsApp", form: "Isi form cari properti",
    waText: "Halo Pak Bagoes, saya punya pertanyaan tentang properti di Bali."
  },
  en: {
    title: "FAQ – Bali Are Property",
    desc: "Common questions about Bali Are Property: an independent property agency in Bali since 2009, South & North Kuta, property types and help for local and international buyers.",
    eyebrow: "FAQ · Bali Are Property",
    h1: "Frequently Asked Questions",
    qa: [
      ["What is Bali Are Property?", "Bali Are Property is an independent real estate agency in Bali, established in 2009, specializing in land sales, villa sales, property sourcing and investment opportunities."],
      ["How long has Bali Are Property been operating in Bali?", `Bali Are Property is built on property industry experience dating back to 2009, with more than ${n} years of experience in the Bali property market.`],
      ["Which areas does Bali Are Property specialize in?", "Our main areas of expertise are South Kuta and North Kuta, including Ungasan, Jimbaran, Pecatu, Uluwatu, Canggu, Berawa and Pererenan."],
      ["What types of properties does Bali Are Property offer?", "We specialize in land for sale, investment land, residential land, commercial properties, villas and property investment opportunities."],
      ["Can Bali Are Property help investors find land in Bali?", "Yes. We assist buyers and investors in sourcing land based on their preferred location, land size, budget, property requirements and intended development."],
      ["Does Bali Are Property serve international buyers?", "We provide property marketing and sourcing assistance for local and international prospective buyers interested in property opportunities in Bali."]
    ],
    ask: "Still have questions?", askP: "Ask us directly on WhatsApp or fill in the property request form.",
    wa: "Chat on WhatsApp", form: "Fill in the request form",
    waText: "Hello Pak Bagoes, I have a question about property in Bali."
  },
  ru: {
    title: "Частые вопросы – Bali Are Property",
    desc: "Частые вопросы о Bali Are Property: независимое агентство недвижимости на Бали с 2009 года, Южная и Северная Кута, типы объектов, помощь местным и иностранным покупателям.",
    eyebrow: "FAQ · Bali Are Property",
    h1: "Частые вопросы",
    qa: [
      ["Что такое Bali Are Property?", "Bali Are Property — независимое агентство недвижимости на Бали, основанное в 2009 году. Мы специализируемся на продаже земли и вилл, подборе недвижимости и инвестиционных возможностях."],
      ["Как давно Bali Are Property работает на Бали?", `В основе Bali Are Property — опыт работы в сфере недвижимости с 2009 года, то есть более ${n} ${ruYears(n)} на рынке Бали.`],
      ["На каких районах специализируется Bali Are Property?", "Наши основные районы — Южная и Северная Кута, включая Унгасан, Джимбаран, Пекату, Улувату, Чангу, Бераву и Перененан."],
      ["Какие объекты предлагает Bali Are Property?", "Мы специализируемся на продаже земли, инвестиционных и жилых участках, коммерческой недвижимости, виллах и инвестиционных возможностях."],
      ["Можете ли вы помочь инвестору найти землю на Бали?", "Да. Мы помогаем покупателям и инвесторам подобрать участок с учётом желаемой локации, площади, бюджета, требований к объекту и планов застройки."],
      ["Работает ли Bali Are Property с иностранными покупателями?", "Мы помогаем с продвижением и подбором недвижимости как местным, так и иностранным покупателям, которые интересуются недвижимостью на Бали."]
    ],
    ask: "Остались вопросы?", askP: "Напишите нам в WhatsApp или заполните форму запроса.",
    wa: "Написать в WhatsApp", form: "Заполнить форму запроса",
    waText: "Hello Pak Bagoes, I have a question about property in Bali. (Russian-speaking client)"
  }
};

const CSS = `<style>
.fq-hero{padding-block:56px 28px;display:grid;gap:14px}
.fq-hero h1{font-size:clamp(34px,6.4vw,60px);font-weight:800;letter-spacing:-.025em;line-height:1.04}
.qa{display:grid;border-top:1.5px solid var(--ink)}
.qa details{border-bottom:1px solid var(--line)}
.qa summary{list-style:none;cursor:pointer;display:grid;grid-template-columns:auto minmax(0,1fr) auto;gap:16px;align-items:baseline;padding:22px 4px}
.qa summary::-webkit-details-marker{display:none}
.qa summary .no{font-family:var(--mono);font-size:13px;color:var(--sea)}
.qa summary h2{font-size:clamp(19px,2.6vw,24px);font-weight:700;line-height:1.25}
.qa summary .pm{width:28px;height:28px;border-radius:50%;border:1.5px solid var(--line);display:grid;place-items:center;align-self:center;color:var(--sea);font-weight:700}
.qa summary .pm::before{content:"+"}
.qa details[open] summary .pm::before{content:"–"}
.qa summary:hover h2{color:var(--sea)}
.qa summary:focus-visible{outline:2px solid var(--sea);outline-offset:2px;border-radius:8px}
.qa .ans{margin:0;padding:0 4px 24px calc(4px + 2.6em);max-width:68ch;font-size:17px}
.ask{background:var(--sea-soft);border-radius:20px;padding:28px 24px;margin-top:40px;display:grid;gap:10px}
.ask h2{font-size:clamp(24px,3.6vw,32px)}
.ask p{margin:0;color:var(--muted)}
.ask .actions{margin-top:6px}
@media (max-width:520px){.qa .ans{padding-left:4px}}
</style>`;

function renderFaq({ L, head, seoBlock, flags, contact, footer, copyScript, i18nSrc, esc }) {
  const f = F[L], h = HT[L];
  const wa = "https://wa.me/62812868080?text=" + encodeURIComponent(f.waText);
  return `<!doctype html>
<html lang="${L}" data-static-lang="${L}">
<head>${head}<title>${esc(f.title)}</title>
${seoBlock}
${HOME_CSS}
${CSS}
</head>
<body>
<div class="wrap home">
  <div class="home-top">
    <a class="eyebrow home-link" href="./">Bali Are Property</a>
    <nav aria-label="Menu">
      <a href="about.html">${esc(h.nav[3])}</a>
      <a href="listings.html">${esc(h.nav[0])}</a>
      <a href="inquiry.html#owner">${esc(h.nav[1])}</a>
      <a href="faq.html" aria-current="page">${esc(h.nav[4])}</a>
      <a href="#kontak">${esc(h.nav[2])}</a>
    </nav>
    ${flags}
  </div>

  <header class="fq-hero">
    <div class="eyebrow">${esc(f.eyebrow)}</div>
    <h1>${esc(f.h1)}</h1>
  </header>

  <section class="qa">
    ${f.qa.map((q, i) => `<details${i === 0 ? " open" : ""}>
      <summary><span class="no">${String(i + 1).padStart(2, "0")}</span><h2>${esc(q[0])}</h2><span class="pm" aria-hidden="true"></span></summary>
      <p class="ans">${esc(q[1])}</p>
    </details>`).join("\n    ")}
  </section>

  <section class="ask" aria-labelledby="h-ask">
    <h2 id="h-ask">${esc(f.ask)}</h2>
    <p>${esc(f.askP)}</p>
    <div class="actions">
      <a class="btn wa" href="${wa}" target="_blank" rel="noopener"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 20l1.4-4.2A8 8 0 1 1 8.6 19z"/></svg>${esc(f.wa)}</a>
      <a class="btn ghost" href="inquiry.html#buyer">${esc(f.form)}</a>
    </div>
  </section>

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

module.exports = { F, renderFaq };
