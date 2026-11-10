// Tampilan halaman per area + halaman daftar area (dipanggil oleh build-seo.js).
const { T: HT, CSS: HOME_CSS } = require("./home.js");
const { AREAS, L10N, MIN } = require("./area-content.js");
const { fxLine } = require("./kurs.js");

const TYPE_ORDER = ["tanah", "villa", "komersial", "rumah"];
const matches = (a, c) => (a.areas && a.areas.includes(c.areaKey)) || (a.eyebrow && a.eyebrow.test(c.eyebrow));
// Area yang punya cukup listing (tersedia + terjual), beserta kartunya
function areaList(cards) {
  return AREAS.map((a) => ({ ...a, cards: cards.filter((c) => matches(a, c)) }))
    .filter((a) => a.cards.filter((c) => !c.sold).length >= MIN);
}
function fmtIdr(v, L) {
  if (!v) return "";
  const d = (x) => (Math.round(x * 100) / 100).toString().replace(".", L === "en" ? "." : ",");
  if (v >= 1e9) return L === "id" ? "Rp" + d(v / 1e9) + " Miliar" : L === "en" ? "IDR " + d(v / 1e9) + " billion" : d(v / 1e9) + " млрд IDR";
  return L === "id" ? "Rp" + Math.round(v / 1e6) + " jt" : L === "en" ? "IDR " + Math.round(v / 1e6) + " million" : Math.round(v / 1e6) + " млн IDR";
}

const CSS = `<style>
.ar-hero{padding-block:48px 8px;display:grid;gap:14px}
.ar-hero h1{font-size:clamp(32px,6vw,56px);font-weight:800;letter-spacing:-.025em;line-height:1.05;text-wrap:balance}
.ar-hero .lead{max-width:68ch;font-size:18px;margin:0;color:var(--ink)}
.ar-stats{display:flex;flex-wrap:wrap;gap:10px;margin-top:4px}
.ar-stats span{background:var(--sea-soft);color:var(--sea);border-radius:999px;padding:7px 14px;font-weight:600;font-size:14px}
.ar-stats span small{font-weight:500;color:var(--muted);margin-left:6px}
.ar-type{padding-top:26px}
.ar-type>h2{font-size:clamp(22px,3.4vw,28px);border-bottom:1.5px solid var(--ink);padding-bottom:10px}
.ar-type>h2 small{font-family:var(--mono);font-size:13px;color:var(--muted);font-weight:500;margin-left:10px}
.ar-links{display:flex;flex-wrap:wrap;gap:10px;margin:0;padding:0;list-style:none}
.ar-links a{display:inline-block;border:1.5px solid var(--line);border-radius:999px;padding:8px 16px;text-decoration:none;color:var(--ink);font-weight:600;background:var(--surface)}
.ar-links a:hover{border-color:var(--sea);color:var(--sea)}
.ar-links a small{color:var(--muted);font-weight:500;margin-left:6px}
.ar-other{padding-top:40px;display:grid;gap:14px}
.ar-other h2{font-size:22px}
.ar-hub{display:grid;grid-template-columns:repeat(auto-fill,minmax(260px,1fr));gap:14px;margin-top:10px}
.ar-hub a{display:grid;gap:6px;background:var(--surface);border:1px solid var(--line);border-radius:16px;padding:20px;text-decoration:none;color:var(--ink)}
.ar-hub a:hover{border-color:var(--sea)}
.ar-hub h2{font-size:22px}
.ar-hub p{margin:0;color:var(--muted);font-size:14px;display:-webkit-box;-webkit-line-clamp:3;-webkit-box-orient:vertical;overflow:hidden}
.ar-hub b{color:var(--sea);font-size:14px}
.ask{background:var(--sea-soft);border-radius:20px;padding:28px 24px;margin-top:40px;display:grid;gap:10px}
.ask h2{font-size:clamp(22px,3.4vw,30px)}
.ask p{margin:0;color:var(--muted)}
</style>`;

const mark = '<svg class="bap-mark" viewBox="0 0 120 120" aria-hidden="true" style="width:32px;height:32px;vertical-align:-10px;margin-right:10px"><path d="M12 100V86h6V72h6V58h6V44h6V30h6V18h12v82zM108 100V86h-6V72h-6V58h-6V44h-6V30h-6V18H66v82z" fill="currentColor"/><circle cx="60" cy="44" r="7" fill="#D6BC84"/><path d="M8 110q13-7 26 0t26 0 26 0 26 0" fill="none" stroke="#D6BC84" stroke-width="6" stroke-linecap="round"/></svg>';
const waIcon = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 20l1.4-4.2A8 8 0 1 1 8.6 19z"/></svg>';

function shell({ L, head, seoBlock, flags, root, title, body, contact, footer, copyScript, i18nSrc, esc }) {
  const h = HT[L];
  return `<!doctype html>
<html lang="${L}" data-static-lang="${L}">
<head>${head}<title>${esc(title)}</title>
${seoBlock}
${HOME_CSS}
${CSS}
</head>
<body>
<div class="wrap home">
  <div class="home-top">
    <a class="eyebrow home-link" href="${root}">${mark}Bali Are Property</a>
    <nav aria-label="Menu">
      <a href="${root}about.html">${esc(h.nav[3])}</a>
      <a href="${root}listings.html">${esc(h.nav[0])}</a>
      <a href="${root}news.html">${esc(h.nav[1])}</a>
      <a href="${root}guide.html">${esc(h.nav[5])}</a>
      <a href="${root}faq.html">${esc(h.nav[4])}</a>
      <a href="#kontak">${esc(h.nav[2])}</a>
    </nav>
    ${flags}
  </div>
${body}
  <div id="kontak">${contact}</div>
  <footer><span>© 2009–${new Date().getFullYear()} Bali Are Property · ${esc(footer)}</span></footer>
</div>
<script>
(function(){
${copyScript}
})();
</script>
<script src="/views.js" defer></script>
<script src="${i18nSrc}"></script>
</body>
</html>
`;
}

function linksBlock(list, cur, L, root, esc) {
  return `<ul class="ar-links">${list.filter((a) => a.slug !== cur).map((a) =>
    `<li><a href="${root}area/${a.slug}.html">${esc(a.name[L])}<small>${a.cards.filter((c) => !c.sold).length}</small></a></li>`).join("")}</ul>`;
}

function renderArea({ area, list, L, kurs, root, esc, ...rest }) {
  const t = L10N[L];
  const avail = area.cards.filter((c) => !c.sold), sold = area.cards.filter((c) => c.sold);
  const fixCard = (h) => h.replace(/href="listing\//g, `href="${root}listing/`).replace(/href="inquiry\.html/g, `href="${root}inquiry.html`);
  const totals = avail.map((c) => c.total).filter(Boolean);
  const min = totals.length ? Math.min(...totals) : 0;
  const byType = TYPE_ORDER.map((k) => [k, avail.filter((c) => c.typeKey === k)]).filter(([, cs]) => cs.length);
  const wa = "https://wa.me/62812868080?text=" + encodeURIComponent(t.waText + area.name.id + ".");
  const body = `
  <header class="ar-hero">
    <div class="eyebrow">${esc(t.eyebrow)} · ${esc(area.region)}</div>
    <h1>${esc(area.title[L])}</h1>
    <p class="lead">${esc(area.intro[L])}</p>
    <div class="ar-stats"><span>${avail.length} ${esc(t.avail)}</span>${byType.map(([k, cs]) => `<span>${esc(t.types[k])} · ${cs.length}</span>`).join("")}${min ? `<span>${esc(t.from)} ${esc(fmtIdr(min, L))}${L !== "id" && kurs ? `<small>${esc(fxLine(min, kurs, L))}</small>` : ""}</span>` : ""}${sold.length ? `<span>${sold.length} ${esc(t.sold)}</span>` : ""}</div>
  </header>
${byType.map(([k, cs]) => `  <section class="ar-type" aria-label="${esc(t.types[k])}">
    <h2>${esc(t.types[k])}<small>${cs.length}</small></h2>
    ${cs.map((c) => fixCard(c.cardHtml)).join("\n    ")}
  </section>`).join("\n")}
${sold.length ? `  <section class="ar-type" aria-label="${esc(t.soldH)}">
    <h2>${esc(t.soldH)}<small>${sold.length}</small></h2>
    ${sold.map((c) => fixCard(c.cardHtml)).join("\n    ")}
  </section>` : ""}
  <section class="ask" aria-labelledby="h-ask">
    <h2 id="h-ask">${esc(t.ask)} ${esc(area.name[L])}?</h2>
    <p>${esc(t.askP)}</p>
    <div class="actions">
      <a class="btn wa" href="${wa}" target="_blank" rel="noopener">${waIcon}${esc(t.wa)}</a>
      <a class="btn ghost" href="${root}inquiry.html#buyer">${esc(t.form)}</a>
    </div>
  </section>
  <section class="ar-other" aria-labelledby="h-other">
    <h2 id="h-other">${esc(t.other)}</h2>
    ${linksBlock(list, area.slug, L, root, esc)}
    <p><a class="more-link" href="${root}listings.html">${esc(t.all)} →</a></p>
  </section>`;
  return shell({ L, root, esc, title: area.title[L] + " | Bali Are Property", body, ...rest });
}

function renderAreaHub({ list, L, root, esc, ...rest }) {
  const t = L10N[L];
  const body = `
  <header class="ar-hero">
    <div class="eyebrow">${esc(t.eyebrow)}</div>
    <h1>${esc(t.hub)}</h1>
    <p class="lead">${esc(t.hubDesc)}</p>
  </header>
  <div class="ar-hub">
    ${list.map((a) => `<a href="${root}area/${a.slug}.html"><h2>${esc(a.name[L])}</h2><p>${esc(a.intro[L])}</p><b>${a.cards.filter((c) => !c.sold).length} ${esc(t.avail)} →</b></a>`).join("\n    ")}
  </div>
  <p style="margin-top:28px"><a class="more-link" href="${root}listings.html">${esc(t.all)} →</a></p>`;
  return shell({ L, root, esc, title: t.hubTitle, body, ...rest });
}

module.exports = { areaList, renderArea, renderAreaHub, L10N, fmtIdr };
