// Daftar listing ringkas untuk aplikasi Bali Are Agen (artifact claude.ai): node tools/agen-listings.js > listings.json
// Hanya listing tampil & belum terjual. Perbarui file artifact setiap ada listing baru/terjual.
const fs = require("fs"), path = require("path");
const s = fs.readFileSync(path.join(__dirname, "..", "listings.html"), "utf8");
const out = [];
const dec = (x) => String(x).replace(/&nbsp;/g, " ").replace(/&amp;/g, "&").replace(/\s+/g, " ").trim();
for (const sec of s.split('<section class="type" data-type="').slice(1)) {
  const type = sec.slice(0, sec.indexOf('"'));
  for (const c of sec.split("<article").slice(1)) {
    if (/data-status="hidden"/.test(c.slice(0, 200)) || /^[^>]*class="[^"]*\bsold\b/.test(c)) continue;
    const m = c.match(/<h4><a href="listing\/([^"]+)\.html">([^<]+)<\/a>/); if (!m) continue;
    const eb = (c.match(/<div class="eyebrow">([^<]+)</) || [])[1] || "";
    const hl = c.match(/<div class="hl"><small>([^<]*)<\/small><b>([^<]+)<\/b>/) || c.match(/<div[^>]*><small>([^<]*)<\/small><b>([^<]+)<\/b>/);
    const before = sec.slice(0, sec.indexOf(m[0])), ai = before.lastIndexOf('data-area="');
    const area = ai < 0 ? "" : before.slice(ai + 11, before.indexOf('"', ai + 11));
    out.push({ s: m[1], t: dec(m[2]), y: type, a: area, e: dec(eb), p: hl ? dec(hl[2]) + (/tahun|unit|per m²|per are/i.test(hl[1]) ? " " + dec(hl[1]).replace(/^Harga\s*/i, "").toLowerCase() : "") : "" });
  }
}
process.stdout.write(JSON.stringify({ updated: new Date().toISOString().slice(0, 10), listings: out }) + "\n");
