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
// Kanal tempat iklan sudah tayang + jumlah dilihat (untuk laporan progres ke Owner di Bali Are Agen)
const rd = (f) => { try { return JSON.parse(fs.readFileSync(path.join(__dirname, "..", f), "utf8")); } catch (e) { return {}; } };
const st = { ig: rd("tools/ig-state.json"), th: rd("tools/threads-state.json"), fb: rd("tools/fb-state.json"), tg: rd("tools/tg-state.json"), reel: rd("tools/reels-state.json"), fbr: rd("tools/fb-reels-state.json"), tt: rd("tools/tiktok-state.json") };
const meta = rd("tools/listing-meta.json"), rep = (rd("laporan-dilihat.json").report || {}), rows = {};
(rep.rows || []).concat(rep.top || []).forEach((r) => { if (r && r.slug) rows[r.slug] = Object.assign(rows[r.slug] || {}, r); });
for (const o of out) {
  const ch = {};
  for (const k of ["ig", "th", "fb", "tg", "reel", "fbr"]) { const p = ((st[k].posted || {})[o.s]) || null; if (p && p.permalink) ch[k] = p.permalink; }
  if ((st.tt.posted || {})[o.s]) ch.tt = 1;
  o.ch = ch; o.ad = (meta[o.s] || {}).added || "";
  const r = rows[o.s]; if (r) { o.v = r.total || 0; o.vw = r.week || 0; if (r.wa != null) o.wa = r.wa; }
}
// Proyek developer (untuk laporan ke admin proyek/developer di Bali Are Agen)
const PJ = require("./proyek.js"), pst = rd("tools/proyek-post-state.json"), prow = {};
(rep.projects || []).forEach((r) => { prow[r.slug] = r; });
const projects = PJ.PROJECTS.map((p) => {
  const c = p.id, ch = {}, ps = (pst.posted || {})[p.slug] || {};
  for (const k of ["ig", "th", "fb", "tg", "reel", "fbr", "story"]) { const x = ps[k]; if (x) ch[k] = x.permalink || x.url || 1; }
  if (ps.tt) ch.tt = 1;
  const r = prow[p.slug] || {};
  return { s: p.slug, t: p.name, d: p.developer, e: c.area, p: (c.apt ? "Apartemen mulai " : "Villa mulai ") + PJ.rpShort(p.priceFrom, "id") + (c.priceCol && /belum/.test(c.priceCol) ? " (belum PPN)" : ""),
    k: c.card, ad: p.added || "", ch, v: r.total || 0, vw: r.week || 0, wa: r.wa || 0, waw: r.waWeek || 0 };
});
process.stdout.write(JSON.stringify({ updated: new Date().toISOString().slice(0, 10), report: rep.date || "", listings: out, projects }) + "\n");
