// Laporan mingguan "dilihat" per iklan (angka ikon mata, penghitung abacus.jasoncameron.dev).
// Dijalankan .github/workflows/views-report.yml tiap Senin pagi: mengambil angka total tiap listing yang tampil,
// menyimpan snapshot, dan menghitung kenaikan 7 hari → laporan-dilihat.json (root, di luar tools/ agar tidak memicu build).
// Ditampilkan di tab Status admin.html dan di laporan node tools/health.js (tugas harian Claude).
const fs = require("fs");
const path = require("path");
const ROOT = path.resolve(__dirname, "..");
const FILE = path.join(ROOT, "laporan-dilihat.json");
const NS = "baliarepro.github.io";
const wait = (ms) => new Promise((r) => setTimeout(r, ms));

async function count(slug) {
  for (let i = 0; i < 3; i++) {
    try {
      const r = await fetch(`https://abacus.jasoncameron.dev/get/${NS}/v-${slug}`, { signal: AbortSignal.timeout(10000) });
      if (r.status === 404) return 0;
      const j = await r.json();
      if (typeof j.value === "number") return j.value;
    } catch (e) {}
    await wait(1500);
  }
  return null; // gagal dibaca
}

async function main() {
  const { listings } = require("./ig-post.js");
  const live = listings().filter((l) => !l.hidden && !l.sold);
  const prev = fs.existsSync(FILE) ? JSON.parse(fs.readFileSync(FILE, "utf8")) : {};
  const snaps = prev.snapshots || [];
  const counts = {};
  for (const l of live) { counts[l.slug] = await count(l.slug); await wait(350); }
  const ok = Object.values(counts).filter((v) => v !== null).length;
  if (!ok) { console.log("Penghitung tidak bisa dibaca, laporan tidak diperbarui."); return; }
  const today = new Date().toISOString().slice(0, 10);
  // pembanding: snapshot terbaru yang berumur ≥ 6 hari
  const base = [...snaps].reverse().find((s) => (Date.parse(today) - Date.parse(s.date)) / 864e5 >= 6) || null;
  const rows = live.map((l) => {
    const total = counts[l.slug] ?? null, before = base ? base.counts[l.slug] : undefined;
    return { slug: l.slug, title: l.title, eyebrow: l.eyebrow, total, week: total !== null && typeof before === "number" ? Math.max(0, total - before) : null, isNew: base ? before === undefined : false };
  });
  const byWeek = rows.filter((r) => r.week !== null).sort((a, b) => b.week - a.week || (b.total || 0) - (a.total || 0));
  const byTotal = rows.filter((r) => r.total !== null).sort((a, b) => b.total - a.total);
  const report = { date: today, since: base ? base.date : null,
    totalViews: byTotal.reduce((a, r) => a + r.total, 0), weekViews: base ? byWeek.reduce((a, r) => a + r.week, 0) : null,
    top: (base ? byWeek : byTotal).slice(0, 5).map((r) => ({ slug: r.slug, title: r.title, total: r.total, week: r.week })),
    quiet: (base ? byWeek.filter((r) => r.week === 0 && !r.isNew) : byTotal.filter((r) => r.total === 0)).map((r) => ({ slug: r.slug, title: r.title, total: r.total })),
    rows };
  snaps.push({ date: today, counts });
  const out = { updated: new Date().toISOString(), report, snapshots: snaps.filter((s, i, a) => a.findIndex((x) => x.date === s.date) === i).slice(-10) };
  fs.writeFileSync(FILE, JSON.stringify(out, null, 2) + "\n");
  console.log(text(out));
}

// Ringkasan teks (dipakai health.js)
function text(d) {
  const r = d && d.report;
  if (!r) return "";
  const L = [`LISTING TERPOPULER (${r.since ? "7 hari terakhir, " + r.since + " → " + r.date : "total sejak awal, per " + r.date})`];
  if (r.weekViews !== null) L.push(`Total dilihat minggu ini: ${r.weekViews} · total keseluruhan: ${r.totalViews}`);
  else L.push(`Total dilihat keseluruhan: ${r.totalViews} (kenaikan mingguan mulai tampil Senin depan)`);
  r.top.forEach((x, i) => L.push(`${i + 1}. ${x.title}: ${r.since ? "+" + x.week + " minggu ini, " : ""}${x.total} total`));
  if (r.quiet.length) L.push(`Sepi (${r.since ? "0 dilihat minggu ini" : "belum pernah dilihat"}): ${r.quiet.length} listing — ${r.quiet.slice(0, 5).map((x) => x.title).join("; ")}${r.quiet.length > 5 ? "; …" : ""}`);
  return L.join("\n");
}

module.exports = { text };
if (require.main === module) main().catch((e) => { console.error(e); process.exit(1); });
