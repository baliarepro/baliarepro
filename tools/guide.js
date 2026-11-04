// Halaman Bali Property Guide: daftar artikel (guide.html) dan halaman artikel (guide/<slug>.html).
const { T: HT, CSS: HOME_CSS } = require("./home.js");
const { ARTICLES, PRICE_TABLE } = require("./guide-content.js");

const G = {
  id: { hubTitle: "Bali Property Guide – Panduan Properti Bali | Bali Are Property",
    hubDesc: "Panduan dan kabar perkembangan properti di Bali dari Bali Are Property: pembangunan Kuta Selatan, area Kuta Utara, Tabanan, Ubud, aturan lahan terbaru, dan checklist membeli tanah.",
    eyebrow: "Bali Property Guide", h1: "Panduan & kabar properti Bali",
    intro: "Ringkasan perkembangan properti di Bali, ditulis dari pengalaman kami di lapangan sejak 2009 dan dilengkapi sumber berita resmi.",
    read: "Baca artikel", sources: "Sumber", more: "Artikel lainnya", back: "← Semua artikel", published: "Diterbitkan", locale: "id-ID" },
  en: { hubTitle: "Bali Property Guide | Bali Are Property",
    hubDesc: "Guides and updates on Bali's property market from Bali Are Property: South Kuta development, North Kuta, Tabanan, Ubud, the latest land rules and a land-buying checklist.",
    eyebrow: "Bali Property Guide", h1: "Bali property guides & updates",
    intro: "Updates on Bali's property market, written from our field experience since 2009 and backed by official news sources.",
    read: "Read article", sources: "Sources", more: "More articles", back: "← All articles", published: "Published", locale: "en-GB" },
  ru: { hubTitle: "Гид по недвижимости Бали | Bali Are Property",
    hubDesc: "Обзоры рынка недвижимости Бали от Bali Are Property: застройка Южной Куты, Северная Кута, Табанан, Убуд, новые правила землепользования и чек-лист покупки земли.",
    eyebrow: "Bali Property Guide", h1: "Гид по недвижимости Бали",
    intro: "Обзоры рынка недвижимости Бали — по нашему опыту работы с 2009 года и со ссылками на официальные новости.",
    read: "Читать", sources: "Источники", more: "Другие статьи", back: "← Все статьи", published: "Опубликовано", locale: "ru-RU" }
};
const NAV_GUIDE = { id: "Guide", en: "Guide", ru: "Гид" };

const CSS = `<style>
.gd-hero{padding-block:56px 28px;display:grid;gap:14px;max-width:760px}
.gd-hero h1{font-size:clamp(34px,6.4vw,60px);font-weight:800;letter-spacing:-.025em;line-height:1.04}
.gd-hero p{margin:0;font-size:18px;color:var(--muted);max-width:60ch}
.gd-list{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:14px}
.gd-card{display:flex;flex-direction:column;gap:10px;background:var(--surface);border:1px solid var(--line);border-radius:18px;padding:24px;text-decoration:none;color:var(--ink)}
.gd-card:hover{border-color:var(--sea)}
.gd-card.first{grid-column:1/-1;background:var(--sea-soft);border-color:transparent}
.gd-card.first h2{font-size:clamp(26px,3.6vw,34px)}
.gd-card h2{font-size:clamp(20px,2.6vw,24px);line-height:1.2}
.gd-card p{margin:0;color:var(--muted)}
.gd-card .go{margin-top:auto;color:var(--sea);font-weight:600}
.tag{display:inline-flex;align-self:flex-start;font-family:var(--mono);font-size:11px;letter-spacing:.12em;text-transform:uppercase;color:var(--sea)}
.art{max-width:720px;padding-block:28px 0;display:grid;gap:16px}
.crumbs{font-size:14px;margin-top:20px}
.crumbs a{color:var(--sea);font-weight:600;text-decoration:none}
.art h1{font-size:clamp(30px,5.4vw,50px);font-weight:800;letter-spacing:-.02em;line-height:1.08}
.art .meta{font-family:var(--mono);font-size:12px;color:var(--muted);letter-spacing:.04em}
.art .lead{font-size:19px;margin:0;color:var(--ink)}
.art .body{display:grid;gap:14px;border-top:1.5px solid var(--ink);padding-top:22px;font-size:17px;line-height:1.7}
.art .body h2{font-size:clamp(21px,2.8vw,26px);margin-top:14px}
.art .body p{margin:0}
.art .body ul{margin:0;padding-left:22px;display:grid;gap:8px}
.art .body li::marker{color:var(--sand)}
.tbl{overflow-x:auto}
.tbl table{border-collapse:collapse;width:100%;font-size:15px;min-width:440px}
.tbl th,.tbl td{text-align:left;padding:10px 12px;border-bottom:1px solid var(--line)}
.tbl th{font-family:var(--mono);font-size:11px;letter-spacing:.1em;text-transform:uppercase;color:var(--muted);font-weight:500}
.tbl td:nth-child(2){font-family:var(--display);font-weight:700;color:var(--sea);font-variant-numeric:tabular-nums}
.tbl td:nth-child(3){font-variant-numeric:tabular-nums}
.art .note{background:var(--sand-soft);border-radius:12px;padding:14px 16px;font-size:14px;color:var(--ink)}
.src{border-top:1px solid var(--line);padding-top:16px;display:grid;gap:8px;font-size:14px}
.src h2{font-family:var(--mono);font-size:12px;letter-spacing:.12em;text-transform:uppercase;color:var(--muted);font-weight:500}
.src ol{margin:0;padding-left:20px;display:grid;gap:6px}
.src a{color:var(--sea);word-break:break-word}
@media (max-width:760px){.gd-list{grid-template-columns:1fr}}
</style>`;

const fmtDate = (d, L) => new Date(d + "T00:00:00Z").toLocaleDateString(G[L].locale, { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" });

function top({ L, up, flags, esc, current }) {
  const h = HT[L];
  const a = (href, label, cur) => `<a href="${up}${href}"${cur ? ' aria-current="page"' : ""}>${esc(label)}</a>`;
  return `<div class="home-top">
    <a class="eyebrow home-link" href="${up || "./"}">Bali Are Property</a>
    <nav aria-label="Menu">
      ${a("about.html", h.nav[3])}
      ${a("listings.html", h.nav[0])}
      ${a("inquiry.html#owner", h.nav[1])}
      ${a("guide.html", NAV_GUIDE[L], current)}
      ${a("faq.html", h.nav[4])}
      <a href="#kontak">${esc(h.nav[2])}</a>
    </nav>
    ${flags}
  </div>`;
}

function shell({ L, head, title, seoBlock, body, contact, footer, copyScript, i18nSrc, esc }) {
  return `<!doctype html>
<html lang="${L}" data-static-lang="${L}">
<head>${head}<title>${esc(title)}</title>
${seoBlock}
${HOME_CSS}
${CSS}
</head>
<body>
<div class="wrap home">
${body}
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

function renderHub(o) {
  const { L, esc } = o, g = G[L];
  const cards = ARTICLES.map((a, i) => {
    const t = a[L];
    return `<a class="gd-card${i === 0 ? " first" : ""}" href="guide/${a.slug}.html"><span class="tag">${esc(t.tag)}</span><h2>${esc(t.title)}</h2><p>${esc(t.summary)}</p><span class="go">${esc(g.read)} →</span></a>`;
  }).join("\n      ");
  const body = `  ${top({ ...o, up: "", current: true })}
  <header class="gd-hero">
    <div class="eyebrow">${esc(g.eyebrow)}</div>
    <h1>${esc(g.h1)}</h1>
    <p>${esc(g.intro)}</p>
  </header>
  <section class="gd-list" aria-label="${esc(g.eyebrow)}">
      ${cards}
  </section>
  <div style="margin-top:36px">${o.cta}</div>`;
  return shell({ ...o, title: g.hubTitle, body });
}

function renderBlock(b, L, esc) {
  if (b.h) return `<h2>${esc(b.h)}</h2>`;
  if (b.p) return `<p>${esc(b.p)}</p>`;
  if (b.ul) return `<ul>${b.ul.map((x) => `<li>${esc(x)}</li>`).join("")}</ul>`;
  if (b.note) return `<p class="note">${esc(b.note)}</p>`;
  if (b.table) {
    const t = PRICE_TABLE[L];
    return `<div class="tbl"><table><thead><tr>${t.head.map((x) => `<th scope="col">${esc(x)}</th>`).join("")}</tr></thead><tbody>${t.rows.map((r) => `<tr>${r.map((x) => `<td>${esc(x)}</td>`).join("")}</tr>`).join("")}</tbody></table></div>`;
  }
  return "";
}

function renderArticle(o) {
  const { L, esc, article } = o, g = G[L], t = article[L];
  const others = ARTICLES.filter((a) => a.slug !== article.slug).slice(0, 3);
  const body = `  ${top({ ...o, up: "../", current: true })}
  <p class="crumbs"><a href="../guide.html">${esc(g.back)}</a></p>
  <article class="art">
    <span class="tag">${esc(t.tag)}</span>
    <h1>${esc(t.title)}</h1>
    <div class="meta">${esc(g.published)} ${esc(fmtDate(article.date, L))} · Bali Are Property</div>
    <p class="lead">${esc(t.summary)}</p>
    <div class="body">
      ${t.body.map((b) => renderBlock(b, L, esc)).join("\n      ")}
    </div>
    ${article.sources.length ? `<section class="src"><h2>${esc(g.sources)}</h2><ol>${article.sources.map((s) => `<li><a href="${esc(s.u)}" target="_blank" rel="noopener">${esc(s.t)}</a></li>`).join("")}</ol></section>` : ""}
  </article>
  <section class="hsec" aria-labelledby="h-more">
    <h2 id="h-more">${esc(g.more)}</h2>
    <div class="feat">
      ${others.map((a) => `<a class="fc" href="${a.slug}.html"><span class="eyebrow">${esc(a[L].tag)}</span><h3>${esc(a[L].title)}</h3></a>`).join("\n      ")}
    </div>
  </section>
  <div style="margin-top:36px">${o.cta.replace(/href="inquiry\.html/g, 'href="../inquiry.html')}</div>`;
  return shell({ ...o, title: t.title + " | Bali Are Property", body });
}

module.exports = { G, NAV_GUIDE, ARTICLES, renderHub, renderArticle };
