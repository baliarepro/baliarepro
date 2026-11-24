// Cek kesehatan otomasi media sosial + daftar pengingat untuk pemilik.
//   node tools/health.js          → laporan teks Bahasa Indonesia (dipakai tugas harian Claude)
//   node tools/health.js --weekly → paksa tampilkan ringkasan mingguan (otomatis tiap Senin WITA)
//   node tools/health.js --json   → data mentah (dipakai tab "Status" di admin.html lewat logika yang sama)
// Exit code 0 selalu; baris yang diawali "⚠️" berarti perlu perhatian.
const fs = require("fs");
const path = require("path");
const ROOT = path.resolve(__dirname, "..");
const read = (f, d) => { try { return JSON.parse(fs.readFileSync(path.join(ROOT, f), "utf8")); } catch (e) { return d; } };
const H = 3600e3;

function lastOf(obj) {
  const v = Object.entries(obj || {}).map(([k, x]) => ({ key: k, ...x })).filter((x) => x.at);
  return v.sort((a, b) => b.at.localeCompare(a.at))[0] || null;
}
function check(now = Date.now()) {
  const ig = read("tools/ig-state.json", {}), igw = read("tools/ig-weekly-state.json", {});
  const th = read("tools/threads-state.json", {}), thw = read("tools/threads-weekly-state.json", {});
  const fb = read("tools/fb-state.json", {}), fbw = read("tools/fb-weekly-state.json", {});
  const ch = [];
  const add = (name, posted, errors, opts) => {
    const last = lastOf(posted), errs = Object.entries(errors || {}).map(([k, e]) => ({ key: k, ...e }));
    const age = last ? (now - Date.parse(last.at)) / H : Infinity;
    let ok = errs.length === 0;
    if (opts.maxAgeH && last && age > opts.maxAgeH) ok = false; // belum pernah posting = menunggu jadwal pertama
    if (opts.off) ok = null; // belum diaktifkan
    ch.push({ name, count: Object.keys(posted || {}).length, last, ageH: age, errors: errs, ok, note: opts.note || "" });
  };
  const queue = (ig.queue || []).length;
  add("Instagram (listing)", ig.posted, ig.errors, { maxAgeH: queue ? 30 : 0, note: queue + " listing lama di antrean" });
  add("Instagram (berita mingguan)", igw.posts, igw.error ? { last: igw.error } : {}, { maxAgeH: 8 * 24 });
  add("Threads (listing)", th.posted, th.errors, { maxAgeH: queue ? 30 : 0 });
  add("Threads (berita mingguan)", thw.weekly, thw.errors, { maxAgeH: 8 * 24 });
  const fbOff = !Object.keys(fb.posted || {}).length && !Object.keys(fbw.posted || {}).length;
  const rl = read("tools/reels-state.json", {});
  add("Instagram Reels (1 per hari)", rl.posted, rl.errors, { maxAgeH: Object.keys(rl.posted || {}).length ? 50 : 0 });
  add("Facebook Page (listing)", fb.posted, fb.errors, { maxAgeH: fbOff ? 0 : queue ? 30 : 0, off: fbOff });
  add("Facebook Page (berita mingguan)", fbw.posted, fbw.errors, { maxAgeH: fbOff ? 0 : 8 * 24, off: fbOff });
  const tg = read("tools/tg-state.json", {}), tgw = read("tools/tg-weekly-state.json", {});
  const tgOff = !Object.keys(tg.posted || {}).length && !Object.keys(tgw.posted || {}).length && !Object.keys(tg.errors || {}).length;
  add("Telegram (listing)", tg.posted, tg.errors, { off: tgOff, note: tgOff ? "belum aktif (secret TELEGRAM_BOT_TOKEN)" : "" });
  add("Telegram (berita mingguan)", tgw.posted, tgw.errors, { maxAgeH: tgOff ? 0 : 8 * 24, off: tgOff });
  const fr = read("tools/fb-reels-state.json", {});
  add("Facebook Reels", fr.posted, fr.errors, { maxAgeH: Object.keys(fr.posted || {}).length ? 50 : 0 });
  const tt = read("tools/tiktok-state.json", {});
  add("TikTok (draft Reel, 2x sehari)", tt.posted, tt.errors, { maxAgeH: tt.connected ? 26 : 0, off: !tt.connected, note: tt.connected ? "dikirim ke kotak masuk TikTok, diposting manual" : "belum aktif (aplikasi TikTok + secret TIKTOK_CLIENT_KEY/SECRET)" });
  const reminders = (read("pengingat.json", { items: [] }).items || []).filter((r) => !r.done);
  const pend = Object.keys(read("tools/perlu-terjemahan.json", {}));
  const views = read("laporan-dilihat.json", null);
  return { channels: ch, reminders, pendingTranslations: pend, queue, views, stale: stale(now), weekly: weekly(now) };
}

// Listing yang tampil & belum terjual, dibaca dari listings.html (judul dari <h4>)
function liveListings() {
  let html = ""; try { html = fs.readFileSync(path.join(ROOT, "listings.html"), "utf8"); } catch (e) { return []; }
  const out = [];
  for (const m of html.matchAll(/<article\b([^>]*)>([\s\S]*?)<\/article>/g)) {
    const attrs = m[1], body = m[2];
    if (/data-status="hidden"/.test(attrs) || /\bsold\b/.test((attrs.match(/class="([^"]*)"/) || [])[1] || "")) continue;
    const a = body.match(/<h4><a href="listing\/([a-z0-9-]+)\.html">([\s\S]*?)<\/a>/);
    if (a) out.push({ slug: a[1], title: a[2].replace(/<[^>]+>/g, "").replace(/&amp;/g, "&").replace(/&#39;|&rsquo;/g, "'").trim() });
  }
  return out;
}
const STALE_DAYS = 30;
// Cek ketersediaan (permintaan pemilik 24 Nov 2026): listing tayang ≥30 hari sejak tayang/konfirmasi terakhir
// → minta pemilik memastikan masih tersedia & harganya. Konfirmasi disimpan di listing-check.json {slug: "YYYY-MM-DD"}
// (tombol "Masih tersedia" di tab Status admin.html). Edit iklan di admin juga dihitung konfirmasi (lihat admin.html).
function stale(now = Date.now()) {
  const meta = read("tools/listing-meta.json", {}), conf = read("listing-check.json", {});
  return liveListings().map((l) => {
    const m = meta[l.slug] || {}, since = [m.added, conf[l.slug], m.drop && m.drop.at].filter(Boolean).sort().pop();
    return { ...l, since, days: since ? Math.floor((now - Date.parse(since + "T00:00:00+08:00")) / 864e5) : 0 };
  }).filter((l) => l.days >= STALE_DAYS).sort((a, b) => b.days - a.days);
}
// Ringkasan 7 hari terakhir (dipakai laporan Senin)
function weekly(now = Date.now()) {
  const from = now - 7 * 864e5, inWeek = (t) => t && Date.parse(t.length === 10 ? t + "T00:00:00+08:00" : t) >= from;
  const meta = read("tools/listing-meta.json", {}), live = liveListings(), title = {};
  live.forEach((l) => (title[l.slug] = l.title));
  const nm = (s) => title[s] || s;
  const added = live.filter((l) => inWeek((meta[l.slug] || {}).added)).map((l) => l.title);
  const drops = Object.entries(meta).filter(([s, m]) => m.drop && inWeek(m.drop.at) && title[s]).map(([s, m]) => `${nm(s)} (${m.drop.from} → ${m.drop.to})`);
  const sold = Object.entries(meta).filter(([, m]) => inWeek(m.sold)).map(([s]) => s.replace(/-/g, " "));
  const cnt = (obj) => Object.values(obj || {}).filter((x) => x && inWeek(x.at)).length;
  const ig = read("tools/ig-state.json", {}), posts = [
    ["Instagram carousel", cnt(ig.posted) + cnt(ig.reposts)], ["Instagram Reels", cnt(read("tools/reels-state.json", {}).posted)],
    ["Instagram Stories", Object.values(read("tools/stories-state.json", {}).posted || {}).flat().filter((x) => inWeek(x && (x.at || x))).length],
    ["Threads", cnt(read("tools/threads-state.json", {}).posted) + cnt(read("tools/threads-text-state.json", {}).posted)],
    ["Facebook", cnt(read("tools/fb-state.json", {}).posted)], ["Facebook Reels", cnt(read("tools/fb-reels-state.json", {}).posted)],
    ["Telegram", cnt(read("tools/tg-state.json", {}).posted)], ["TikTok (draft)", cnt(read("tools/tiktok-state.json", {}).posted)]];
  return { live: live.length, added, drops, sold, posts };
}
function weeklyText(w) {
  const L = ["RINGKASAN MINGGU INI (7 hari)", `• Listing tayang: ${w.live}`];
  L.push(`• Listing baru: ${w.added.length}${w.added.length ? " — " + w.added.slice(0, 6).join("; ") + (w.added.length > 6 ? `; …+${w.added.length - 6}` : "") : ""}`);
  if (w.drops.length) L.push(`• Harga turun: ${w.drops.join("; ")}`);
  if (w.sold.length) L.push(`• Terjual: ${w.sold.join("; ")}`);
  L.push("• Posting: " + w.posts.filter((p) => p[1]).map((p) => `${p[0]} ${p[1]}`).join(", "));
  return L.join("\n");
}

function report(d) {
  const L = ["STATUS OTOMASI MEDIA SOSIAL"];
  for (const c of d.channels) {
    const when = c.last ? new Date(c.last.at).toLocaleString("id-ID", { timeZone: "Asia/Makassar", dateStyle: "medium", timeStyle: "short" }) + " WITA" : "belum ada";
    const icon = c.ok === null ? "⏸️" : c.ok ? "✅" : "⚠️";
    L.push(`${icon} ${c.name}: ${c.count} posting, terakhir ${when}${c.note ? " · " + c.note : ""}`);
    if (c.ok !== null) for (const e of c.errors) L.push(`   ⚠️ ${e.key}: ${e.msg}`);
    if (c.ok === null) L.push("   ⏸️ Belum aktif (lihat pengingat).");
    if (c.ok === false && !c.errors.length) L.push("   ⚠️ Tidak ada posting baru lebih lama dari jadwal. Cek token/secret atau workflow GitHub Actions.");
  }
  if (d.pendingTranslations.length) L.push("", "⚠️ Iklan diedit di admin, terjemahan EN/RU belum dirapikan: " + d.pendingTranslations.join(", "));
  if (d.stale.length) {
    L.push("", `CEK KETERSEDIAAN (${d.stale.length} listing ≥${STALE_DAYS} hari belum dikonfirmasi)`);
    d.stale.slice(0, 10).forEach((l) => L.push(`• ${l.title} — ${l.days} hari`));
    if (d.stale.length > 10) L.push(`• …dan ${d.stale.length - 10} lainnya`);
    L.push("  → Tanyakan ke pemilik properti: masih tersedia & harga sama? Konfirmasi di admin → Status → \"Masih tersedia ✓\", atau Edit/Turunkan.");
  }
  if (process.argv.includes("--weekly") || new Date(Date.now() + 8 * 3600e3).getUTCDay() === 1) L.push("", weeklyText(d.weekly));
  if (d.views && d.views.report) {
    const age = (Date.now() - Date.parse(d.views.updated)) / 864e5;
    L.push("", require("./views-report.js").text(d.views));
    if (age > 8) L.push("⚠️ Laporan dilihat belum diperbarui lebih dari 8 hari (cek workflow \"Laporan dilihat\").");
  }
  if (d.reminders.length) {
    L.push("", "PENGINGAT UNTUK BAGOES");
    d.reminders.forEach((r, i) => L.push(`${i + 1}. ${r.text}`));
  }
  return L.join("\n");
}

module.exports = { check, report, stale, weekly, liveListings };
if (require.main === module) {
  const d = check();
  console.log(process.argv.includes("--json") ? JSON.stringify(d, null, 2) : report(d));
}
