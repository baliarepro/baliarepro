// Cek kesehatan otomasi media sosial + daftar pengingat untuk pemilik.
//   node tools/health.js          → laporan teks Bahasa Indonesia (dipakai tugas harian Claude)
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
  const reminders = (read("pengingat.json", { items: [] }).items || []).filter((r) => !r.done);
  const pend = Object.keys(read("tools/perlu-terjemahan.json", {}));
  const views = read("laporan-dilihat.json", null);
  return { channels: ch, reminders, pendingTranslations: pend, queue, views };
}

function report(d) {
  const L = ["STATUS OTOMASI MEDIA SOSIAL"];
  for (const c of d.channels) {
    const when = c.last ? new Date(c.last.at).toLocaleString("id-ID", { timeZone: "Asia/Makassar", dateStyle: "medium", timeStyle: "short" }) + " WITA" : "belum ada";
    const icon = c.ok === null ? "⏸️" : c.ok ? "✅" : "⚠️";
    L.push(`${icon} ${c.name}: ${c.count} posting, terakhir ${when}${c.note ? " · " + c.note : ""}`);
    if (c.ok !== null) for (const e of c.errors) L.push(`   ⚠️ ${e.key}: ${e.msg}`);
    if (c.ok === null) L.push("   ⏸️ Belum aktif (lihat pengingat Facebook Page).");
    if (c.ok === false && !c.errors.length) L.push("   ⚠️ Tidak ada posting baru lebih lama dari jadwal. Cek token/secret atau workflow GitHub Actions.");
  }
  if (d.pendingTranslations.length) L.push("", "⚠️ Iklan diedit di admin, terjemahan EN/RU belum dirapikan: " + d.pendingTranslations.join(", "));
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

module.exports = { check, report };
if (require.main === module) {
  const d = check();
  console.log(process.argv.includes("--json") ? JSON.stringify(d, null, 2) : report(d));
}
