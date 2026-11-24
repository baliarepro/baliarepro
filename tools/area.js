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
      <a href="${root}proyek.html">${esc({id:"Proyek",en:"Projects",ru:"Проекты"}[L])}</a>
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
<script src="/cards.js" defer></script>
<script src="/simpan.js" defer></script>
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

// Halaman "Sudah terjual" (bukti transaksi): kartu listing berstatus terjual + ajakan untuk pemilik & pembeli.
const SOLD = {
  id: { title: "Properti yang Sudah Terjual | Bali Are Property", eyebrow: "Rekam jejak", h1: "Sudah terjual lewat Bali Are Property",
    lead: "Sebagian properti yang sudah terjual lewat kami. Ingin properti Anda menyusul? Titipkan ke kami — listing tayang di website 3 bahasa dan dipromosikan ke Instagram, Threads & Facebook.",
    desc: "Daftar tanah dan villa di Bali yang sudah terjual lewat Bali Are Property. Titip jual properti Anda atau cari yang serupa via WhatsApp.",
    n: "terjual", owner: "Titip jual properti", buyer: "Cari properti serupa", wa: "Tanya via WhatsApp", all: "Lihat listing yang masih tersedia",
    waText: "Halo Pak Bagoes, saya lihat halaman properti terjual di website. Saya ingin " },
  en: { title: "Sold Properties | Bali Are Property", eyebrow: "Track record", h1: "Sold through Bali Are Property",
    lead: "Some of the properties we have sold. Want yours to be next? List it with us — your listing goes live on our 3-language website and is promoted on Instagram, Threads & Facebook.",
    desc: "Land and villas in Bali sold through Bali Are Property. List your property with us or find something similar on WhatsApp.",
    n: "sold", owner: "List your property", buyer: "Find something similar", wa: "Ask on WhatsApp", all: "See available listings",
    waText: "Hello Pak Bagoes, I saw the sold properties page on your website. I would like to " },
  ru: { title: "Проданные объекты | Bali Are Property", eyebrow: "Наши сделки", h1: "Продано через Bali Are Property",
    lead: "Некоторые объекты, проданные через нас. Хотите продать свой? Разместите его у нас — объявление появится на сайте на 3 языках и в Instagram, Threads и Facebook.",
    desc: "Земля и виллы на Бали, проданные через Bali Are Property. Разместите свой объект или найдите похожий через WhatsApp.",
    n: "продано", owner: "Разместить объект", buyer: "Найти похожий", wa: "Написать в WhatsApp", all: "Объекты в продаже",
    waText: "Здравствуйте, Багус! Я посмотрел страницу проданных объектов на сайте. Я хочу " }
};
function renderSold({ cards, L, root, esc, ...rest }) {
  const t = SOLD[L];
  const fixCard = (h) => h.replace(/href="listing\//g, `href="${root}listing/`).replace(/href="inquiry\.html/g, `href="${root}inquiry.html`);
  const wa = "https://wa.me/62812868080?text=" + encodeURIComponent(t.waText);
  const body = `
  <header class="ar-hero">
    <div class="eyebrow">${esc(t.eyebrow)}</div>
    <h1>${esc(t.h1)}</h1>
    <p class="lead">${esc(t.lead)}</p>
    <div class="ar-stats"><span>${cards.length} ${esc(t.n)}</span></div>
  </header>
  <section class="ar-type" aria-label="${esc(t.h1)}">
    ${cards.map((c) => fixCard(c.cardHtml)).join("\n    ")}
  </section>
  <section class="ask">
    <h2>${esc(t.owner)} / ${esc(t.buyer)}</h2>
    <p>${esc(t.lead.split(". ").slice(1).join(". "))}</p>
    <div class="actions">
      <a class="btn wa" href="${wa}" target="_blank" rel="noopener">${waIcon}${esc(t.wa)}</a>
      <a class="btn ghost" href="${root}inquiry.html#owner">${esc(t.owner)}</a>
      <a class="btn ghost" href="${root}inquiry.html#buyer">${esc(t.buyer)}</a>
    </div>
  </section>
  <p style="margin-top:28px"><a class="more-link" href="${root}listings.html">${esc(t.all)} →</a></p>`;
  return shell({ L, root, esc, title: t.title, body, ...rest });
}

// ---------- Halaman "Harga tanah per m² per area" (permintaan pemilik 20 Nov 2026) ----------
// Dari harga PENAWARAN listing tanah yang tersedia (bukan harga transaksi/NJOP). rows: [{name, href, n, min, med, max, items:[{title,href,v}]}]
const PRICES = {
  id: { title: "Harga Tanah per m² di Bali per Area (2026) | Bali Are Property", eyebrow: "Data harga tanah", h1: "Harga tanah per m² di Bali, per area",
    lead: "Kisaran harga tanah per meter persegi di Ungasan, Jimbaran, Pecatu–Uluwatu, Pandawa, Canggu, Ubud dan area lain, dihitung dari listing tanah yang sedang kami pasarkan.",
    desc: "Kisaran harga tanah per m² di Bali per area (Ungasan, Jimbaran, Pecatu, Uluwatu, Pandawa, Canggu, Ubud) dari listing Bali Are Property. Diperbarui otomatis.",
    upd: "Diperbarui", th: ["Area", "Listing", "Termurah", "Median", "Termahal"], per: "/m²", see: "Lihat listing", note: "Catatan: angka di atas adalah harga penawaran (asking price) listing tanah yang sedang tersedia di Bali Are Property, bukan harga transaksi atau NJOP. Harga sebenarnya sangat bergantung pada lokasi persis, lebar akses jalan, zona/ITR, view, kontur, dan legalitas. Gunakan sebagai gambaran awal, bukan penilaian (appraisal) resmi.",
    own: "Punya tanah di Bali?", ownP: "Ingin tahu kisaran harga tanah Anda atau ingin menjualnya? Konsultasi gratis dengan Bagoes — kami bandingkan dengan listing sekitar dan bantu pasarkan ke buyer lokal & internasional.", ownBtn: "Titip jual tanah", wa: "Tanya harga via WhatsApp",
    waText: "Halo Pak Bagoes, saya lihat halaman harga tanah per area di website. Saya ingin tahu kisaran harga tanah saya di ", all: "Lihat semua listing tanah", items: "listing" },
  en: { title: "Bali Land Prices per m² by Area (2026) | Bali Are Property", eyebrow: "Land price data", h1: "Bali land prices per m², by area",
    lead: "Price ranges per square metre for land in Ungasan, Jimbaran, Pecatu–Uluwatu, Pandawa, Canggu, Ubud and other areas, calculated from the land listings we are currently marketing.",
    desc: "Bali land price ranges per m² by area (Ungasan, Jimbaran, Pecatu, Uluwatu, Pandawa, Canggu, Ubud) from Bali Are Property listings. Updated automatically.",
    upd: "Updated", th: ["Area", "Listings", "Lowest", "Median", "Highest"], per: "/m²", see: "See listings", note: "Note: the figures above are asking prices of land listings currently available at Bali Are Property, not transaction prices or the government tax value (NJOP). Actual prices depend heavily on exact location, road access width, zoning, view, slope and legal status. Use them as a first indication, not an official appraisal.",
    own: "Own land in Bali?", ownP: "Want to know what your land is worth or planning to sell? Free consultation with Bagoes — we compare it with nearby listings and market it to local and international buyers.", ownBtn: "List your land", wa: "Ask about prices on WhatsApp",
    waText: "Hello Pak Bagoes, I saw the land price by area page on your website. I'd like to know the price range for my land in ", all: "See all land listings", items: "listings" },
  ru: { title: "Цены на землю на Бали за м² по районам (2026) | Bali Are Property", eyebrow: "Цены на землю", h1: "Цены на землю на Бали за м², по районам",
    lead: "Диапазон цен за квадратный метр земли в Унгасане, Джимбаране, Пекату–Улувату, Пандаве, Чангу, Убуде и других районах — по участкам, которые мы сейчас продаём.",
    desc: "Цены на землю на Бали за м² по районам (Унгасан, Джимбаран, Пекату, Улувату, Пандава, Чангу, Убуд) по объектам Bali Are Property. Обновляется автоматически.",
    upd: "Обновлено", th: ["Район", "Объекты", "Мин.", "Медиана", "Макс."], per: "/м²", see: "Смотреть объекты", note: "Примечание: это цены предложения (asking price) участков, которые сейчас продаёт Bali Are Property, а не цены сделок и не кадастровая стоимость (NJOP). Реальная цена сильно зависит от точного расположения, ширины подъезда, зонирования, вида, рельефа и документов. Используйте как ориентир, а не официальную оценку.",
    own: "Есть земля на Бали?", ownP: "Хотите узнать стоимость участка или продать его? Бесплатная консультация с Багусом — сравним с соседними предложениями и предложим покупателям из Индонезии и других стран.", ownBtn: "Разместить участок", wa: "Спросить о цене в WhatsApp",
    waText: "Здравствуйте, Багус! Я посмотрел страницу цен на землю по районам. Хочу узнать стоимость моего участка в районе ", all: "Все участки", items: "объектов" }
};
const PRICE_CSS = `<style>
.pt{width:100%;border-collapse:collapse;font-size:15px;margin-top:8px}
.pt th,.pt td{padding:12px 10px;border-bottom:1px solid var(--line);text-align:left;vertical-align:top}
.pt thead th{font-family:var(--mono);font-size:12px;letter-spacing:.06em;text-transform:uppercase;color:var(--muted);font-weight:600}
.pt a{color:var(--sea);font-weight:700}.pt td.n{white-space:nowrap}.pt td b{color:var(--sea)}
.pt details{margin-top:6px;font-size:14px}.pt summary{cursor:pointer;color:var(--muted)}
.pt details ul{margin:6px 0 0;padding-left:18px}.pt details li{margin:3px 0}
.pt-w{overflow-x:auto}.pt-note{background:var(--surface);border:1px solid var(--line);border-radius:14px;padding:14px 16px;color:var(--muted);font-size:14px;margin-top:18px}
@media (max-width:620px){.pt thead{display:none}.pt,.pt tbody,.pt tr,.pt td{display:block;width:100%}.pt tr{border-bottom:1px solid var(--line);padding:10px 0}.pt td{border:0;padding:3px 0}
.pt td[data-l]::before{content:attr(data-l) ": ";color:var(--muted);font-size:13px}.pt td:first-child{font-weight:700;font-size:17px}}
</style>`;
function renderPrices({ rows, L, root, esc, date, ...rest }) {
  const t = PRICES[L];
  const fmt = (v) => (L === "id" ? "Rp" + (v / 1e6).toLocaleString("id-ID", { maximumFractionDigits: 1 }) + " jt" : L === "en" ? "IDR " + (v / 1e6).toLocaleString("en-US", { maximumFractionDigits: 1 }) + "M" : (v / 1e6).toLocaleString("ru-RU", { maximumFractionDigits: 1 }) + " млн IDR") + t.per;
  const wa = "https://wa.me/62812868080?text=" + encodeURIComponent(t.waText);
  const body = `
  ${PRICE_CSS}
  <header class="ar-hero">
    <div class="eyebrow">${esc(t.eyebrow)}</div>
    <h1>${esc(t.h1)}</h1>
    <p class="lead">${esc(t.lead)}</p>
    <div class="ar-stats"><span>${rows.reduce((a, r) => a + r.n, 0)} ${esc(t.items)}<small>${esc(t.upd)} ${esc(date)}</small></span></div>
  </header>
  <section class="ar-type">
    <div class="pt-w"><table class="pt"><thead><tr>${t.th.map((h) => `<th>${esc(h)}</th>`).join("")}</tr></thead><tbody>
    ${rows.map((r) => `<tr><td>${r.href ? `<a href="${root}${r.href}">${esc(r.name)}</a>` : esc(r.name)}
      <details><summary>${esc(t.see)}</summary><ul>${r.items.map((i) => `<li><a href="${root}${i.href}">${esc(i.title)}</a> — ${esc(fmt(i.v))}</li>`).join("")}</ul></details></td>
      <td data-l="${esc(t.th[1])}">${r.n}</td><td class="n" data-l="${esc(t.th[2])}">${esc(fmt(r.min))}</td><td class="n" data-l="${esc(t.th[3])}"><b>${esc(fmt(r.med))}</b></td><td class="n" data-l="${esc(t.th[4])}">${esc(fmt(r.max))}</td></tr>`).join("\n    ")}
    </tbody></table></div>
    <p class="pt-note">${esc(t.note)}</p>
  </section>
  <section class="ask">
    <h2>${esc(t.own)}</h2>
    <p>${esc(t.ownP)}</p>
    <div class="actions">
      <a class="btn wa" href="${wa}" target="_blank" rel="noopener">${waIcon}${esc(t.wa)}</a>
      <a class="btn ghost" href="${root}inquiry.html#owner">${esc(t.ownBtn)}</a>
    </div>
  </section>
  <p style="margin-top:28px"><a class="more-link" href="${root}listings.html#t-tanah">${esc(t.all)} →</a></p>`;
  return shell({ L, root, esc, title: t.title, body, ...rest });
}

module.exports = { areaList, renderArea, renderAreaHub, renderSold, SOLD, renderPrices, PRICES, AREAS, matches, L10N, fmtIdr };
