// Watermark foto listing: img/listing/<slug>/<n>.jpg (asli, tidak diubah) → img/wm/<slug>/<n>.jpg (bertanda air).
// Dipakai galeri website, gambar preview WhatsApp/og, PDF, schema, dan foto carousel Instagram.
// Tanda air: lambang + "BALI ARE PROPERTY" samar di tengah, dan label "baliareproperty.com" di pojok kanan bawah.
// Dibuat ulang hanya bila foto asli berubah (hash di img/wm/<slug>/meta.json).
const fs = require("fs");
const path = require("path");
const crypto = require("crypto");

const V = 1; // naikkan bila desain tanda air diubah → semua foto dibuat ulang
const MARK = '<path d="M12 100V86h6V72h6V58h6V44h6V30h6V18h12v82zM108 100V86h-6V72h-6V58h-6V44h-6V30h-6V18H66v82z" fill="#FFFFFF"/><circle cx="60" cy="44" r="7" fill="#D9A441"/><path d="M8 110q13-7 26 0t26 0 26 0 26 0" fill="none" stroke="#D9A441" stroke-width="7" stroke-linecap="round"/>';

module.exports = async function watermark({ browser, ROOT }) {
  const SRC = path.join(ROOT, "img/listing"), OUT = path.join(ROOT, "img/wm");
  if (!fs.existsSync(SRC)) return 0;
  const slugs = fs.readdirSync(SRC).filter((d) => fs.statSync(path.join(SRC, d)).isDirectory());
  // Bersihkan folder tanda air yang listingnya sudah tidak ada
  if (fs.existsSync(OUT)) for (const d of fs.readdirSync(OUT)) if (!slugs.includes(d)) fs.rmSync(path.join(OUT, d), { recursive: true, force: true });
  let page = null, made = 0;
  for (const slug of slugs) {
    const files = fs.readdirSync(path.join(SRC, slug)).filter((f) => /\.(jpe?g|png|webp)$/i.test(f)).sort().slice(0, 3);
    const hash = crypto.createHash("sha1").update("v" + V);
    for (const f of files) hash.update(f).update(fs.readFileSync(path.join(SRC, slug, f)));
    const h = hash.digest("hex"), dir = path.join(OUT, slug), meta = path.join(dir, "meta.json");
    if (fs.existsSync(meta) && JSON.parse(fs.readFileSync(meta, "utf8")).hash === h) continue;
    if (!page) page = await browser.newPage({ deviceScaleFactor: 1 });
    fs.rmSync(dir, { recursive: true, force: true });
    fs.mkdirSync(dir, { recursive: true });
    for (const f of files) {
      const buf = fs.readFileSync(path.join(SRC, slug, f));
      const mime = /\.png$/i.test(f) ? "image/png" : /\.webp$/i.test(f) ? "image/webp" : "image/jpeg";
      await page.setContent(`<!doctype html><body style="margin:0"><img id="i" src="data:${mime};base64,${buf.toString("base64")}" style="display:block"></body>`, { waitUntil: "load" });
      const { w, hgt } = await page.evaluate(() => { const i = document.getElementById("i"); return { w: i.naturalWidth, hgt: i.naturalHeight }; });
      const s = Math.min(w, hgt); // ukuran relatif terhadap sisi terpendek
      await page.setViewportSize({ width: w, height: hgt });
      await page.setContent(`<!doctype html><html><body style="margin:0;width:${w}px;height:${hgt}px;position:relative;overflow:hidden">
<img src="data:${mime};base64,${buf.toString("base64")}" style="display:block;width:${w}px;height:${hgt}px">
<div style="position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);display:flex;flex-direction:column;align-items:center;gap:${Math.round(s * 0.02)}px;opacity:.28;filter:drop-shadow(0 1px 3px rgba(0,0,0,.6))">
  <svg viewBox="0 0 120 120" style="width:${Math.round(s * 0.26)}px;height:${Math.round(s * 0.26)}px">${MARK}</svg>
  <div style="font:700 ${Math.round(s * 0.05)}px 'DejaVu Sans','Liberation Sans',Arial,sans-serif;letter-spacing:${Math.round(s * 0.012)}px;color:#fff;white-space:nowrap">BALI ARE PROPERTY</div>
</div>
<div style="position:absolute;right:${Math.round(s * 0.025)}px;bottom:${Math.round(s * 0.025)}px;display:flex;align-items:center;gap:${Math.round(s * 0.012)}px;background:rgba(18,63,54,.72);border-radius:${Math.round(s * 0.03)}px;padding:${Math.round(s * 0.012)}px ${Math.round(s * 0.022)}px">
  <svg viewBox="0 0 120 120" style="width:${Math.round(s * 0.045)}px;height:${Math.round(s * 0.045)}px">${MARK}</svg>
  <span style="font:600 ${Math.round(s * 0.03)}px 'DejaVu Sans','Liberation Sans',Arial,sans-serif;color:#fff;white-space:nowrap">baliareproperty.com</span>
</div>
</body></html>`, { waitUntil: "load" });
      await page.screenshot({ path: path.join(dir, f.replace(/\.(png|webp|jpeg)$/i, ".jpg")), type: "jpeg", quality: 82 });
    }
    fs.writeFileSync(meta, JSON.stringify({ hash: h }) + "\n");
    made++;
  }
  if (page) await page.close();
  return made;
};
