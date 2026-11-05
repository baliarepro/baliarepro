// Membuat halaman English/Rusia, halaman per listing, sitemap, dan tag SEO.
// Jalankan dari folder repo:  node tools/build-seo.js
// Sumber yang diedit tangan: index.html, inquiry.html, i18n.js. File lain di en/, ru/, listing/ dibuat ulang otomatis.
const fs = require("fs");
const path = require("path");
const { chromium } = require("playwright");

const ROOT = path.resolve(__dirname, "..");
const BASE = "https://baliareproperty.com/";
const LANGS = ["id", "en", "ru"];
const LOCALE = { id: "id_ID", en: "en_US", ru: "ru_RU" };
const DESC = {
  id: "Jual tanah, villa, dan rumah di Bali: Jimbaran, Uluwatu, Ungasan, Pandawa, Canggu, Ubud. Sertifikat jelas, harga transparan, tanya langsung via WhatsApp.",
  en: "Land, villas and houses for sale in Bali: Jimbaran, Uluwatu, Ungasan, Pandawa, Canggu, Ubud. Clear titles, transparent prices, ask directly on WhatsApp.",
  ru: "Продажа земли, вилл и домов на Бали: Джимбаран, Улувату, Унгасан, Пандава, Чангу, Убуд. Понятные документы и цены, пишите в WhatsApp."
};
const INQ_DESC = {
  id: "Form inquiry Bali Are Property: cari properti atau titip jual properti Anda di seluruh Bali, langsung terhubung ke WhatsApp.",
  en: "Bali Are Property inquiry form: find a property or list yours anywhere in Bali, sent straight to WhatsApp.",
  ru: "Форма запроса Bali Are Property: найти недвижимость или продать свою на Бали — сразу в WhatsApp."
};

const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
const read = (f) => fs.readFileSync(path.join(ROOT, f), "utf8");
const write = (f, s) => { fs.mkdirSync(path.dirname(path.join(ROOT, f)), { recursive: true }); fs.writeFileSync(path.join(ROOT, f), s); };
const langDir = (L) => (L === "id" ? "" : L + "/");
const url = (L, p) => BASE + langDir(L) + p;

const AGENT = { "@type": "RealEstateAgent", "@id": BASE + "#agent", name: "Bali Are Property", url: BASE,
  telephone: "+62812868080", image: BASE + "og.png", logo: BASE + "favicon.svg",
  areaServed: { "@type": "Place", name: "Bali, Indonesia" }, address: { "@type": "PostalAddress", addressRegion: "Bali", addressCountry: "ID" } };

const ogFile = (L) => (L === "id" ? "og.png" : "og-" + L + ".png");
function seo({ L, pageUrl, alts, desc, ogTitle, jsonld, image }) {
  const link = LANGS.map((k) => `<link rel="alternate" hreflang="${k}" href="${alts[k]}">`).join("\n");
  return `<!--seo-->
<meta name="description" content="${esc(desc)}">
<link rel="canonical" href="${pageUrl}">
${link}
<link rel="alternate" hreflang="x-default" href="${alts.id}">
<link rel="icon" href="${BASE}favicon.svg" type="image/svg+xml">
<meta property="og:type" content="website">
<meta property="og:site_name" content="Bali Are Property">
<meta property="og:title" content="${esc(ogTitle)}">
<meta property="og:description" content="${esc(desc)}">
<meta property="og:url" content="${pageUrl}">
${image ? `<meta property="og:image" content="${image}">` : `<meta property="og:image" content="${BASE}${ogFile(L)}">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">`}
<meta property="og:locale" content="${LOCALE[L]}">
<meta name="twitter:card" content="summary_large_image">
<script type="application/ld+json">${JSON.stringify(jsonld).replace(/</g, "\\u003c")}</script>
<!--/seo-->`;
}
const putSeo = (html, block) => html.replace(/<!--seo-->[\s\S]*?<!--\/seo-->/, block);

function setFlags(html, hrefs, cur) {
  return html.replace(/<a class="lang-btn" data-lang="(id|en|ru)" hreflang="\1" href="[^"]*"([^>]*?) aria-current="(?:true|false)"/g,
    (m, k, mid) => `<a class="lang-btn" data-lang="${k}" hreflang="${k}" href="${hrefs[k]}"${mid} aria-current="${k === cur}"`)
    .replace(/(<a class="lang-btn"[^>]*?) aria-pressed="(?:true|false)"/g, "$1");
}
const rel = (from, to) => { // relatif dari folder halaman "from" ke file "to" (keduanya relatif ke root situs)
  let r = path.posix.relative(path.posix.dirname("/" + from), "/" + to);
  if (to.endsWith("/") || to === "") r = r ? r + "/" : "./";
  return r || "./";
};

function parseRp(t) {
  t = (t || "").replace(/\s|±|≈/g, "");
  const m = t.match(/Rp([\d.,]+)(Miliar|M|jt)?/);
  if (!m) return null;
  if (m[2]) return Math.round(parseFloat(m[1].replace(/\./g, "").replace(",", ".")) * (m[2] === "jt" ? 1e6 : 1e9));
  return parseInt(m[1].replace(/\./g, ""), 10);
}

(async () => {
  const srcIndex = read("listings.html");
  const srcInq = read("inquiry.html");
  const head = srcIndex.split("<head>")[1].split("</head>")[0]
    .replace(/<title>[\s\S]*?<\/title>\n?/, "").replace(/<!--seo-->[\s\S]*?<!--\/seo-->\n?/, "");
  const copyScript = (srcIndex.match(/  var btn=document\.getElementById\('copy'\);[\s\S]*?\n  \}\);/) || [""])[0];

  // Versi runtime sementara untuk diterjemahkan oleh i18n.js di browser
  const tmp = ".build-tmp.html";
  write(tmp, srcIndex.replace(' data-static-lang="id"', "").replace(/(<script>\n\(function\(\)\{\n  var box=document.getElementById\('visits'\))/, "<script type=\"text/plain\">\n(function(){\n  var box=document.getElementById('visits')"));
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.route(/^https?:/, (r) => r.abort());
  const out = {};
  for (const L of LANGS) {
    await page.goto("file://" + path.join(ROOT, tmp) + "?lang=" + L);
    await page.waitForFunction(() => window.BAP_I18N);
    out[L] = await page.evaluate((L) => {
      const T = (s) => window.BAP_I18N.tr(s, L);
      const cards = [...document.querySelectorAll("article.card")].map((c) => {
        const h4 = c.querySelector("h4"), a = h4.querySelector("a");
        const slug = a.getAttribute("href").replace(/^listing\//, "").replace(/\.html$/, "");
        const area = c.closest(".area"), sec = c.closest("section.type");
        const clone = c.cloneNode(true);
        const h1 = document.createElement("h1"); h1.innerHTML = clone.querySelector("h4 a").innerHTML;
        clone.querySelector("h4").replaceWith(h1);
        const pb = c.querySelector(".price .hl b") || c.querySelector(".price b");
        return { slug, title: h4.textContent.trim().replace(/\s+/g, " "),
          desc: (c.querySelector(".desc") || {}).textContent || "",
          eyebrow: (c.querySelector(".eyebrow") || {}).textContent || "",
          type: sec.querySelector("h2").textContent.trim(), areaTitle: area.querySelector(".area-head h3").textContent.trim(),
          areaSub: area.querySelector(".area-head p").textContent.trim(),
          rec: c.classList.contains("recommended"),
          sold: c.classList.contains("sold") || /SOLD/.test(c.innerHTML), priceText: pb ? pb.textContent : "",
          html: clone.outerHTML };
      });
      document.documentElement.setAttribute("lang", L);
      return { cards, html: "<!doctype html>\n" + document.documentElement.outerHTML,
        title: document.title, back: T("← Lihat semua listing"), detail: T("Detail listing"),
        typeNames: [...document.querySelectorAll("section.type h2")].map((h) => h.textContent.trim()),
        cta: document.querySelector(".cta-duo").outerHTML, contact: document.querySelector("section.contact").outerHTML,
        footer: document.querySelector("footer > span").textContent };
    }, L);
  }
  fs.unlinkSync(path.join(ROOT, tmp));

  const idCards = out.id.cards;
  const prices = Object.fromEntries(idCards.map((c) => [c.slug, parseRp(c.priceText)]));

  // ---------- Halaman utama (3 bahasa) ----------
  for (const L of LANGS) {
    const file = langDir(L) + "listings.html";
    const alts = Object.fromEntries(LANGS.map((k) => [k, url(k, "listings.html")]));
    const jsonld = { "@context": "https://schema.org", "@graph": [AGENT,
      { "@type": "ItemList", name: L === "id" ? "Listing Properti Bali" : out[L].title,
        itemListElement: out[L].cards.map((c, i) => ({ "@type": "ListItem", position: i + 1, url: url(L, "listing/" + c.slug + ".html"), name: c.title })) }] };
    const block = seo({ L, pageUrl: alts[L], alts, desc: DESC[L], ogTitle: out[L].title, jsonld });
    let html;
    if (L === "id") html = putSeo(srcIndex, block);
    else {
      html = putSeo(out[L].html, block)
        .replace('<html lang="' + L + '"', '<html lang="' + L + '" data-static-lang="' + L + '"')
        .replace(/ data-page-lang="[^"]*"/, "")
        .replace('src="i18n.js"', 'src="../i18n.js"')
        .replace('<script type="text/plain">', "<script>");
    }
    html = setFlags(html, Object.fromEntries(LANGS.map((k) => [k, rel(file, langDir(k) + "listings.html")])), L);
    write(file, html);
  }

  // ---------- Form inquiry (3 bahasa) ----------
  for (const L of LANGS) {
    const file = langDir(L) + "inquiry.html";
    const alts = Object.fromEntries(LANGS.map((k) => [k, url(k, "inquiry.html")]));
    const block = seo({ L, pageUrl: alts[L], alts, desc: INQ_DESC[L], ogTitle: "Bali Are Property – Inquiry",
      jsonld: { "@context": "https://schema.org", "@graph": [AGENT, { "@type": "ContactPage", url: alts[L], inLanguage: L, about: { "@id": BASE + "#agent" } }] } });
    let html = putSeo(srcInq, block).replace('data-page-lang="id"', 'data-page-lang="' + L + '"');
    if (L !== "id") html = html.replace('<html lang="id"', '<html lang="' + L + '"').replace('src="i18n.js"', 'src="../i18n.js"');
    html = setFlags(html, Object.fromEntries(LANGS.map((k) => [k, rel(file, langDir(k) + "inquiry.html")])), L);
    write(file, html);
  }

  // ---------- Halaman per listing ----------
  const pageCss = `<style>
.lp-head{display:flex;flex-direction:column;gap:6px;padding-block:28px 18px}
a.eyebrow{text-decoration:none}
.back{align-self:flex-start;margin-top:12px;color:var(--sea);font-weight:600;text-decoration:none}
.back:hover{text-decoration:underline}
.crumb{color:var(--muted);font-size:14px;margin:0}
.card h1{font-family:var(--display);font-size:clamp(26px,5.5vw,34px);font-weight:700;margin:4px 0 0;line-height:1.15;text-wrap:balance}
main{display:flex;flex-direction:column;gap:22px}
main .cta-duo{margin-top:0}
.gallery{display:grid;grid-template-columns:2fr 1fr;grid-auto-rows:1fr;gap:8px;margin:0}
.gallery a{display:block;border-radius:12px;overflow:hidden;background:var(--line)}
.gallery img{width:100%;height:100%;object-fit:cover;display:block;aspect-ratio:4/3}
.gallery a:first-child{grid-row:span 2}
.gallery a:first-child img{aspect-ratio:auto}
.gallery.n1{grid-template-columns:1fr}.gallery.n1 a:first-child{grid-row:auto}.gallery.n1 a:first-child img{aspect-ratio:16/9}
.gallery.n2{grid-template-columns:1fr 1fr}.gallery.n2 a:first-child{grid-row:auto}.gallery.n2 a:first-child img{aspect-ratio:4/3}
@media (max-width:560px){.gallery{grid-template-columns:1fr 1fr;grid-auto-rows:auto}.gallery a:first-child{grid-column:1/-1;grid-row:auto}.gallery a:first-child img{aspect-ratio:16/10}.gallery.n2 a:first-child{grid-column:auto}}
.print-only{display:none}
@media print{
  @page{size:A4;margin:14mm 14mm 16mm}
  html,body{background:#fff !important;color:#111 !important}
  .wrap{max-width:none;padding:0}
  .lp-head,.langs,main .cta-duo,section.contact,footer,.actions,.back{display:none !important}
  .print-only{display:block}
  .print-head{display:flex;justify-content:space-between;align-items:baseline;border-bottom:2px solid #111;padding-bottom:6px;margin-bottom:10px;font-size:11pt}
  .print-head b{font-family:var(--display);font-size:15pt}
  .print-foot{margin-top:12px;padding-top:8px;border-top:1px solid #999;font-size:10pt}
  .card{border:0;padding:0;margin:0;gap:12px;box-shadow:none;background:#fff}
  .card h1{font-size:20pt}
  .gallery{break-inside:avoid;height:68mm;grid-auto-rows:auto}
  .gallery img{aspect-ratio:auto !important;height:100%}
  .gallery.n3{grid-template-rows:1fr 1fr}
  .gallery a{border-radius:6px}
  .price,.specs,.plot,.uses{break-inside:avoid}
  a{color:inherit;text-decoration:none}
  *{-webkit-print-color-adjust:exact;print-color-adjust:exact}
}
</style>`;
  const PDF = { id: "Download PDF", en: "Download PDF", ru: "Скачать PDF" };
  const PHOTOS = { id: "Foto", en: "Photo", ru: "Фото" };
  const CONTACT = {
    id: "Info & survei lokasi: Bagoes · WhatsApp +62 812 868 080 · baliareproperty.com",
    en: "Info & site visit: Bagoes · WhatsApp +62 812 868 080 · baliareproperty.com",
    ru: "Информация и просмотр: Багус · WhatsApp +62 812 868 080 · baliareproperty.com" };
  const pdfIcon = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v12"/><path d="M7 10l5 5 5-5"/><path d="M5 21h14"/></svg>';
  // Foto listing: img/listing/<slug>/ (maks. 3 file jpg/jpeg/png/webp, urut nama file)
  const photosOf = (slug) => {
    const dir = path.join(ROOT, "img/listing", slug);
    if (!fs.existsSync(dir)) return [];
    return fs.readdirSync(dir).filter((f) => /\.(jpe?g|png|webp)$/i.test(f)).sort().slice(0, 3).map((f) => "img/listing/" + slug + "/" + f);
  };
  for (const L of LANGS) {
    for (const c of out[L].cards) {
      const file = langDir(L) + "listing/" + c.slug + ".html";
      const alts = Object.fromEntries(LANGS.map((k) => [k, url(k, "listing/" + c.slug + ".html")]));
      const home = rel(file, langDir(L));
      const list = rel(file, langDir(L) + "listings.html");
      const desc = (c.desc.trim() || c.title).replace(/\s+/g, " ");
      const offer = { "@type": "Offer", priceCurrency: "IDR", availability: c.sold ? "https://schema.org/SoldOut" : "https://schema.org/InStock", seller: { "@id": BASE + "#agent" } };
      if (prices[c.slug]) offer.price = prices[c.slug];
      const jsonld = { "@context": "https://schema.org", "@graph": [AGENT,
        { "@type": "RealEstateListing", name: c.title, description: desc, url: alts[L], inLanguage: L, image: photosOf(c.slug).length ? photosOf(c.slug).map((p) => BASE + p) : BASE + ogFile(L),
          contentLocation: { "@type": "Place", name: c.eyebrow.trim() + ", Bali, Indonesia" }, offers: offer },
        { "@type": "BreadcrumbList", itemListElement: [
          { "@type": "ListItem", position: 1, name: "Bali Are Property", item: url(L, "") },
          { "@type": "ListItem", position: 2, name: c.title, item: alts[L] }] }] };
      const flags = (out[L].html.match(/<div class="langs"[\s\S]*?<\/div>/) || [""])[0];
      const fix = (s) => s.replace(/href="inquiry\.html/g, 'href="' + rel(file, langDir(L) + "inquiry.html"));
      const photos = photosOf(c.slug);
      const gallery = photos.length ? `<div class="gallery n${photos.length}">` + photos.map((p, i) =>
        `<a href="${rel(file, p)}" target="_blank" rel="noopener"><img src="${rel(file, p)}" alt="${esc(PHOTOS[L] + " " + (i + 1) + " – " + c.title)}" loading="${i ? "lazy" : "eager"}" decoding="async"></a>`).join("") + `</div>\n        ` : "";
      const cardHtml = c.html
        .replace('<div class="price"', gallery + '<div class="price"')
        .replace(/(<div class="actions">[\s\S]*?)(<\/div>\s*<\/article>\s*)$/, `$1  <button class="btn ghost pdf" type="button" onclick="window.print()">${pdfIcon}${esc(PDF[L])}</button>\n        $2`);
      let html = `<!doctype html>
<html lang="${L}" data-static-lang="${L}">
<head>${head}<title>${esc(c.title)} – Bali Are Property</title>
${seo({ L, pageUrl: alts[L], alts, desc, ogTitle: c.title, jsonld, image: photos[0] ? BASE + photos[0] : "" })}
${pageCss}
</head>
<body>
<div class="wrap">
  <header class="lp-head">
    <div class="top-row">
      <a class="eyebrow" href="${home}">Bali Are Property</a>
      ${flags}
    </div>
    <a class="back" href="${list}">${esc(out[L].back)}</a>
    <p class="crumb">${esc(c.type)} · ${esc(c.areaTitle)} · ${esc(c.areaSub)}</p>
  </header>
  <main>
    <div class="print-only print-head"><b>Bali Are Property</b><span>baliareproperty.com</span></div>
    ${cardHtml}
    <p class="print-only print-foot">${esc(CONTACT[L])}</p>
    ${fix(out[L].cta)}
  </main>
  ${out[L].contact}
  <footer><span>${esc(out[L].footer)}</span></footer>
</div>
<script>
(function(){
${copyScript}
})();
</script>
<script src="${rel(file, "i18n.js")}"></script>
</body>
</html>
`;
      html = setFlags(html, Object.fromEntries(LANGS.map((k) => [k, rel(file, langDir(k) + "listing/" + c.slug + ".html")])), L);
      write(file, html);
    }
  }

  // ---------- Bali Property Guide (3 bahasa) ----------
  const GD = require("./guide.js");
  for (const L of LANGS) {
    const flags = (out[L].html.match(/<div class="langs"[\s\S]*?<\/div>/) || [""])[0];
    const common = { L, head, esc, flags, cta: out[L].cta, contact: out[L].contact, footer: out[L].footer, copyScript };
    { // halaman daftar artikel
      const file = langDir(L) + "guide.html";
      const alts = Object.fromEntries(LANGS.map((k) => [k, url(k, "guide.html")]));
      const jsonld = { "@context": "https://schema.org", "@graph": [AGENT, { "@type": "CollectionPage", name: GD.G[L].hubTitle, url: alts[L], inLanguage: L,
        hasPart: GD.ARTICLES.map((a) => ({ "@type": "Article", headline: a[L].title, url: url(L, "guide/" + a.slug + ".html") })) }] };
      let html = GD.renderHub({ ...common, i18nSrc: rel(file, "i18n.js"),
        seoBlock: seo({ L, pageUrl: alts[L], alts, desc: GD.G[L].hubDesc, ogTitle: GD.G[L].hubTitle, jsonld }) });
      html = setFlags(html, Object.fromEntries(LANGS.map((k) => [k, rel(file, langDir(k) + "guide.html")])), L);
      write(file, html);
    }
    for (const a of GD.ARTICLES) {
      const file = langDir(L) + "guide/" + a.slug + ".html";
      const alts = Object.fromEntries(LANGS.map((k) => [k, url(k, "guide/" + a.slug + ".html")]));
      const jsonld = { "@context": "https://schema.org", "@graph": [AGENT,
        { "@type": "Article", headline: a[L].title, description: a[L].summary, inLanguage: L, url: alts[L], mainEntityOfPage: alts[L],
          datePublished: a.date, dateModified: a.date, image: BASE + ogFile(L),
          author: { "@id": BASE + "#agent" }, publisher: { "@id": BASE + "#agent" } },
        { "@type": "BreadcrumbList", itemListElement: [
          { "@type": "ListItem", position: 1, name: "Bali Are Property", item: url(L, "") },
          { "@type": "ListItem", position: 2, name: "Bali Property Guide", item: url(L, "guide.html") },
          { "@type": "ListItem", position: 3, name: a[L].title, item: alts[L] }] }] };
      let html = GD.renderArticle({ ...common, article: a, i18nSrc: rel(file, "i18n.js"),
        seoBlock: seo({ L, pageUrl: alts[L], alts, desc: a[L].summary, ogTitle: a[L].title, jsonld }) });
      html = setFlags(html, Object.fromEntries(LANGS.map((k) => [k, rel(file, langDir(k) + "guide/" + a.slug + ".html")])), L);
      write(file, html);
    }
  }

  // ---------- News (3 bahasa) ----------
  const NW = require("./news.js");
  for (const L of LANGS) {
    const flags = (out[L].html.match(/<div class="langs"[\s\S]*?<\/div>/) || [""])[0];
    const common = { L, head, esc, flags, cta: out[L].cta, contact: out[L].contact, footer: out[L].footer, copyScript };
    {
      const file = langDir(L) + "news.html";
      const alts = Object.fromEntries(LANGS.map((k) => [k, url(k, "news.html")]));
      const jsonld = { "@context": "https://schema.org", "@graph": [AGENT, { "@type": "CollectionPage", name: NW.N[L].hubTitle, url: alts[L], inLanguage: L,
        hasPart: NW.NEWS.map((a) => ({ "@type": "NewsArticle", headline: a[L].title, url: url(L, "news/" + a.slug + ".html"), datePublished: a.date })) }] };
      let html = NW.renderNewsHub({ ...common, i18nSrc: rel(file, "i18n.js"),
        seoBlock: seo({ L, pageUrl: alts[L], alts, desc: NW.N[L].hubDesc, ogTitle: NW.N[L].hubTitle, jsonld }) });
      html = setFlags(html, Object.fromEntries(LANGS.map((k) => [k, rel(file, langDir(k) + "news.html")])), L);
      write(file, html);
    }
    for (const a of NW.NEWS) {
      const file = langDir(L) + "news/" + a.slug + ".html";
      const alts = Object.fromEntries(LANGS.map((k) => [k, url(k, "news/" + a.slug + ".html")]));
      const jsonld = { "@context": "https://schema.org", "@graph": [AGENT,
        { "@type": "NewsArticle", headline: a[L].title, description: a[L].summary, inLanguage: L, url: alts[L], mainEntityOfPage: alts[L],
          datePublished: a.date, dateModified: a.date, image: BASE + ogFile(L),
          author: { "@id": BASE + "#agent" }, publisher: { "@id": BASE + "#agent" }, isBasedOn: a.sources.map((s) => s.u) },
        { "@type": "BreadcrumbList", itemListElement: [
          { "@type": "ListItem", position: 1, name: "Bali Are Property", item: url(L, "") },
          { "@type": "ListItem", position: 2, name: "News", item: url(L, "news.html") },
          { "@type": "ListItem", position: 3, name: a[L].title, item: alts[L] }] }] };
      let html = NW.renderNewsItem({ ...common, item: a, i18nSrc: rel(file, "i18n.js"),
        seoBlock: seo({ L, pageUrl: alts[L], alts, desc: a[L].summary, ogTitle: a[L].title, jsonld }) });
      html = setFlags(html, Object.fromEntries(LANGS.map((k) => [k, rel(file, langDir(k) + "news/" + a.slug + ".html")])), L);
      write(file, html);
    }
  }

  // ---------- Homepage (3 bahasa) ----------
  const { T: HT, renderHome } = require("./home.js");
  const visitsSrc = (srcIndex.match(/<script>\n\(function\(\)\{\n  var box=document\.getElementById\('visits'\)[\s\S]*?<\/script>/) || [""])[0]
    .replace("'get'+'/baliarepro", "(live?'hit':'get')+'/baliarepro");
  for (const L of LANGS) {
    const file = langDir(L) + "index.html";
    const alts = Object.fromEntries(LANGS.map((k) => [k, url(k, "")]));
    const agent = Object.assign({}, AGENT, { description: HT[L].about[0], foundingDate: "2009",
      areaServed: ["Kuta Selatan, Badung, Bali", "Kuta Utara, Badung, Bali", "Bali, Indonesia"].map((n) => ({ "@type": "Place", name: n })),
      knowsAbout: HT.en.spec });
    const jsonld = { "@context": "https://schema.org", "@graph": [agent,
      { "@type": "WebSite", name: "Bali Are Property", url: BASE, inLanguage: ["id", "en", "ru"], publisher: { "@id": BASE + "#agent" } }] };
    const flags = (out[L].html.match(/<div class="langs"[\s\S]*?<\/div>/) || [""])[0];
    const GDh = require("./guide.js");
    let html = renderHome({ news: require("./news.js").NEWS.slice(0, 3).map((a) => ({ slug: a.slug, ...a[L] })),
      newsLabels: { h: { id: "Berita properti terbaru", en: "Latest property news", ru: "Свежие новости" }[L], all: { id: "Semua berita", en: "All news", ru: "Все новости" }[L] },
      guide: GDh.ARTICLES.slice(0, 3).map((a) => ({ slug: a.slug, ...a[L] })),
      guideLabels: { all: { id: "Semua artikel", en: "All articles", ru: "Все статьи" }[L] }, L, head, esc, flags, cards: out[L].cards, cta: out[L].cta, contact: out[L].contact, footer: out[L].footer,
      seoBlock: seo({ L, pageUrl: alts[L], alts, desc: HT[L].desc, ogTitle: HT[L].title, jsonld }),
      visitsScript: visitsSrc, copyScript, i18nSrc: rel(file, "i18n.js") });
    html = setFlags(html, Object.fromEntries(LANGS.map((k) => [k, rel(file, langDir(k))])), L);
    write(file, html);
  }

  // ---------- Tentang Kami (3 bahasa) ----------
  const { A: AT, renderAbout } = require("./about.js");
  for (const L of LANGS) {
    const file = langDir(L) + "about.html";
    const alts = Object.fromEntries(LANGS.map((k) => [k, url(k, "about.html")]));
    const jsonld = { "@context": "https://schema.org", "@graph": [Object.assign({}, AGENT, { foundingDate: "2009", description: AT[L].intro[0] }),
      { "@type": "AboutPage", url: alts[L], name: AT[L].title, inLanguage: L, about: { "@id": BASE + "#agent" } }] };
    const flags = (out[L].html.match(/<div class="langs"[\s\S]*?<\/div>/) || [""])[0];
    let html = renderAbout({ L, head, esc, flags, cta: out[L].cta, contact: out[L].contact, footer: out[L].footer, copyScript,
      seoBlock: seo({ L, pageUrl: alts[L], alts, desc: AT[L].desc, ogTitle: AT[L].title, jsonld }), i18nSrc: rel(file, "i18n.js") });
    html = setFlags(html, Object.fromEntries(LANGS.map((k) => [k, rel(file, langDir(k) + "about.html")])), L);
    write(file, html);
  }

  // ---------- FAQ (3 bahasa) ----------
  const { F: FT, renderFaq } = require("./faq.js");
  for (const L of LANGS) {
    const file = langDir(L) + "faq.html";
    const alts = Object.fromEntries(LANGS.map((k) => [k, url(k, "faq.html")]));
    const jsonld = { "@context": "https://schema.org", "@graph": [AGENT,
      { "@type": "FAQPage", url: alts[L], inLanguage: L,
        mainEntity: FT[L].qa.map((q) => ({ "@type": "Question", name: q[0], acceptedAnswer: { "@type": "Answer", text: q[1] } })) }] };
    const flags = (out[L].html.match(/<div class="langs"[\s\S]*?<\/div>/) || [""])[0];
    let html = renderFaq({ L, head, esc, flags, contact: out[L].contact, footer: out[L].footer, copyScript,
      seoBlock: seo({ L, pageUrl: alts[L], alts, desc: FT[L].desc, ogTitle: FT[L].title, jsonld }), i18nSrc: rel(file, "i18n.js") });
    html = setFlags(html, Object.fromEntries(LANGS.map((k) => [k, rel(file, langDir(k) + "faq.html")])), L);
    write(file, html);
  }

  // ---------- Sitemap & robots ----------
  const today = new Date().toISOString().slice(0, 10);
  const pages = ["", "about.html", "faq.html", "news.html", ...require("./news.js").NEWS.map((a) => "news/" + a.slug + ".html"), "guide.html", ...require("./guide.js").ARTICLES.map((a) => "guide/" + a.slug + ".html"), "listings.html", "inquiry.html", ...idCards.map((c) => "listing/" + c.slug + ".html")];
  const urls = pages.flatMap((p) => LANGS.map((L) => `  <url>
    <loc>${url(L, p)}</loc>
    <lastmod>${today}</lastmod>
${LANGS.map((k) => `    <xhtml:link rel="alternate" hreflang="${k}" href="${url(k, p)}"/>`).join("\n")}
    <xhtml:link rel="alternate" hreflang="x-default" href="${url("id", p)}"/>
  </url>`));
  write("sitemap.xml", `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls.join("\n")}
</urlset>
`);
  write("robots.txt", `User-agent: *\nAllow: /\n\nSitemap: ${BASE}sitemap.xml\n`);

  // ---------- Gambar pratinjau per bahasa (og.png, og-en.png, og-ru.png) ----------
  const OG = {
    id: { a: "Tanah · Villa · Rumah", b: "di Bali", c: "Jimbaran · Uluwatu · Ungasan · Pandawa · Canggu · Ubud", wa: "WhatsApp 0812 868 080", since: "Agen properti sejak 2009" },
    en: { a: "Land · Villas · Houses", b: "in Bali", c: "Jimbaran · Uluwatu · Ungasan · Pandawa · Canggu · Ubud", wa: "WhatsApp +62 812 868 080", since: "Property agent since 2009" },
    ru: { a: "Земля · Виллы · Дома", b: "на Бали", c: "Джимбаран · Улувату · Унгасан · Пандава · Чангу · Убуд", wa: "WhatsApp +62 812 868 080", since: "Агентство с 2009 года" }
  };
  const og = await browser.newPage({ viewport: { width: 1200, height: 630 }, deviceScaleFactor: 1 });
  for (const L of LANGS) {
    const o = OG[L];
    await og.setContent(`<html><body style="margin:0">
<div style="width:1200px;height:630px;box-sizing:border-box;padding:72px 80px;background:#10282C;color:#F3F4F0;font-family:'Inter Display','Inter',sans-serif;display:flex;flex-direction:column;justify-content:space-between">
  <div style="display:flex;justify-content:space-between;align-items:baseline"><span style="font:600 22px 'DejaVu Sans Mono',monospace;letter-spacing:.18em;color:#4FC2B4">BALI ARE PROPERTY</span><span style="font-size:22px;color:#B9C8C6">${o.since}</span></div>
  <div>
    <div style="font-weight:800;font-size:${L === "ru" ? 84 : 92}px;line-height:1;letter-spacing:-.02em">${o.a}</div>
    <div style="font-weight:800;font-size:92px;line-height:1.05;letter-spacing:-.02em;color:#D6BC84">${o.b}</div>
    <div style="margin-top:26px;font-size:30px;color:#B9C8C6">${o.c}</div>
  </div>
  <div style="display:flex;justify-content:space-between;align-items:center;font-size:26px">
    <span style="background:#1A8D4A;color:#fff;padding:14px 26px;border-radius:999px;font-weight:600">${o.wa}</span>
    <span style="color:#B9C8C6">baliareproperty.com</span>
  </div>
</div></body></html>`);
    await og.screenshot({ path: path.join(ROOT, ogFile(L)) });
  }
  write("favicon.svg", `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><rect width="64" height="64" rx="14" fill="#13706E"/><path d="M10 44 L26 22 L36 34 L42 27 L54 44 Z" fill="#F3F4F0"/><circle cx="46" cy="18" r="5" fill="#D6BC84"/></svg>\n`);

  await browser.close();
  console.log("listing:", idCards.length, "· halaman listing:", idCards.length * 3, "· url sitemap:", urls.length);
})().catch((e) => { console.error(e); process.exit(1); });
