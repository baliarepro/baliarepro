// Gambar carousel Instagram per listing: img/ig/<slug>/1.jpg (slide desain berlogo) + 2–4.jpg (foto asli, potong 4:5).
// Dipanggil dari build-seo.js HANYA di GitHub Actions (font asli tersedia) atau bila IG_IMAGES=1.
// Hanya dibuat ulang bila isi iklan/foto berubah (hash di img/ig/<slug>/meta.json).
const fs = require("fs");
const path = require("path");
const crypto = require("crypto");

const W = 1080, H = 1350;
const MARK = '<svg viewBox="0 0 120 120" aria-hidden="true"><path d="M12 100V86h6V72h6V58h6V44h6V30h6V18h12v82zM108 100V86h-6V72h-6V58h-6V44h-6V30h-6V18H66v82z" fill="#F6F2EA"/><circle cx="60" cy="44" r="7" fill="#D9A441"/><path d="M8 110q13-7 26 0t26 0 26 0 26 0" fill="none" stroke="#D9A441" stroke-width="7" stroke-linecap="round"/></svg>';
const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
const strip = (s) => s.replace(/<[^>]+>/g, "").replace(/&nbsp;/g, " ").replace(/&amp;/g, "&").replace(/\s+/g, " ").trim();

function parseCard(html) {
  const prices = [...html.matchAll(/<div(?: class="([^"]*)")?><small>([\s\S]*?)<\/small><b>([\s\S]*?)<\/b><\/div>/g)].map((m) => ({ hl: /\bhl\b/.test(m[1] || ""), label: strip(m[2]), value: strip(m[3]) }));
  const specs = [...html.matchAll(/<dt>([\s\S]*?)<\/dt><dd>([\s\S]*?)<\/dd>/g)].map((m) => [strip(m[1]), strip(m[2])]);
  const points = ((html.match(/<ul class="points">([\s\S]*?)<\/ul>/) || [])[1] || "").split(/<\/li>/).map(strip).filter(Boolean);
  const badge = strip((html.match(/<span class="badge[^"]*">([\s\S]*?)<\/span>/) || [])[1] || "");
  return { prices, specs, points, badge };
}

function slideHtml(c, d, photo) {
  const main = d.prices.find((p) => p.hl) || d.prices[d.prices.length - 1] || null;
  const others = d.prices.filter((p) => p !== main).slice(0, 2);
  const pick = ["Luas tanah", "Luas bangunan", "Kamar tidur", "Sertifikat", "Legalitas", "ITR", "ITR / Zonasi", "Zona", "Zonasi", "Posisi", "View"];
  const specs = pick.map((k) => d.specs.find((s) => s[0] === k)).filter(Boolean).slice(0, 4);
  const bg = photo
    ? `<div class="photo" style="background-image:url('${photo}')"></div><div class="shade"></div>`
    : `<div class="photo none"></div>`;
  return `<!doctype html><html><head><meta charset="utf-8">
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,700;12..96,800&family=Figtree:wght@500;600;700&family=JetBrains+Mono:wght@500&display=swap">
<style>
*{box-sizing:border-box;margin:0}
body{width:${W}px;height:${H}px;overflow:hidden;background:#123F36;font-family:Figtree,"Segoe UI",Arial,sans-serif;color:#F6F2EA}
.photo{position:absolute;inset:0 0 470px 0;background:#0f342c center/cover no-repeat}
.photo.none{background:radial-gradient(circle at 70% 30%,#1d5a4c,#123F36 70%)}
.shade{position:absolute;inset:0 0 470px 0;background:linear-gradient(180deg,rgba(9,30,25,.55) 0%,rgba(9,30,25,0) 26%,rgba(9,30,25,0) 62%,rgba(18,63,54,1) 100%)}
.top{position:absolute;left:56px;right:56px;top:48px;display:flex;justify-content:space-between;align-items:center}
.brand{display:flex;align-items:center;gap:16px;font:500 24px "JetBrains Mono",monospace;letter-spacing:.14em;text-transform:uppercase}
.brand svg{width:64px;height:64px}
.tag{background:#D9A441;color:#1C2421;font:700 24px Figtree,sans-serif;padding:12px 24px;border-radius:999px;text-transform:uppercase;letter-spacing:.06em}
.panel{position:absolute;left:0;right:0;bottom:0;height:520px;padding:0 56px 44px;display:flex;flex-direction:column;justify-content:flex-end}
.loc{font:500 24px "JetBrains Mono",monospace;letter-spacing:.12em;text-transform:uppercase;color:#D9A441;margin-bottom:14px}
h1{font:800 58px/1.05 "Bricolage Grotesque",Arial,sans-serif;letter-spacing:-.01em;text-wrap:balance;margin-bottom:22px}
.price{display:flex;align-items:baseline;gap:18px;flex-wrap:wrap;margin-bottom:8px}
.price b{font:800 64px "Bricolage Grotesque",Arial,sans-serif;color:#F2C46B}
.price span{font-size:26px;color:#C9D6D3}
.sub{font-size:24px;color:#C9D6D3;margin-bottom:22px}
.specs{display:flex;flex-wrap:wrap;gap:12px;margin-bottom:30px}
.specs div{border:2px solid rgba(246,242,234,.35);border-radius:14px;padding:10px 16px;font-size:23px;line-height:1.2}
.specs small{display:block;font-size:17px;color:#A9BDB7;text-transform:uppercase;letter-spacing:.06em}
.foot{display:flex;justify-content:space-between;align-items:center;border-top:2px solid rgba(246,242,234,.2);padding-top:22px;font-size:26px;font-weight:600}
.foot .wa{display:flex;align-items:center;gap:10px;background:#1A8D4A;color:#fff;padding:12px 22px;border-radius:999px}
</style></head><body>
${bg}
<div class="top"><div class="brand">${MARK}<span>Bali Are Property</span></div><div class="tag">${esc(d.badge && d.badge.length <= 22 ? d.badge : c.type)}</div></div>
<div class="panel">
  <div class="loc">${esc(c.eyebrow.trim())} · Bali</div>
  <h1>${esc(c.title)}</h1>
  ${main ? `<div class="price"><b>${esc(main.value)}</b><span>${esc(main.label)}</span></div>` : ""}
  ${others.length ? `<div class="sub">${others.map((p) => esc(p.label) + ": " + esc(p.value)).join(" · ")}</div>` : ""}
  <div class="specs">${specs.map((s) => `<div><small>${esc(s[0])}</small>${esc(s[1])}</div>`).join("")}</div>
  <div class="foot"><span>baliareproperty.com</span><span class="wa">WhatsApp 0812 868 080</span></div>
</div>
</body></html>`;
}

module.exports = async function igImages({ browser, ROOT, cards, photosOf, netRoute }) {
  const page = await browser.newPage({ viewport: { width: W, height: H }, deviceScaleFactor: 1 });
  await page.route(/^https?:/, netRoute);
  let made = 0;
  for (const c of cards) {
    if (c.sold) continue;
    const dir = path.join(ROOT, "img/ig", c.slug);
    const photos = photosOf(c.slug);
    const d = parseCard(c.html);
    const hash = crypto.createHash("sha1").update(JSON.stringify({ v: 3, t: c.title, e: c.eyebrow, d, ty: c.type,
      p: photos.map((p) => p + ":" + fs.statSync(path.join(ROOT, p)).size) })).digest("hex");
    const metaFile = path.join(dir, "meta.json");
    if (fs.existsSync(metaFile) && JSON.parse(fs.readFileSync(metaFile, "utf8")).hash === hash) continue;
    fs.rmSync(dir, { recursive: true, force: true });
    fs.mkdirSync(dir, { recursive: true });
    const dataUri = (p) => "data:image/jpeg;base64," + fs.readFileSync(path.join(ROOT, p)).toString("base64");
    const first = photos[0] ? dataUri(photos[0]) : "";
    await page.setContent(slideHtml(c, d, first), { waitUntil: "load" });
    await page.evaluate(() => document.fonts.ready.then(() => 0)).catch(() => {});
    await page.screenshot({ path: path.join(dir, "1.jpg"), type: "jpeg", quality: 88 });
    // Foto asli dipotong tengah 4:5
    for (let i = 0; i < photos.length && i < 3; i++) {
      await page.setContent(`<!doctype html><body style="margin:0;width:${W}px;height:${H}px;overflow:hidden;background:#123F36"><img src="${dataUri(photos[i])}" style="width:${W}px;height:${H}px;object-fit:cover;display:block"></body>`, { waitUntil: "load" });
      await page.screenshot({ path: path.join(dir, i + 2 + ".jpg"), type: "jpeg", quality: 86 });
    }
    fs.writeFileSync(metaFile, JSON.stringify({ hash, images: 1 + Math.min(photos.length, 3) }) + "\n");
    made++;
  }
  await page.close();
  return made;
};

module.exports.parseCard = parseCard;
