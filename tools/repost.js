// Posting ulang 1 listing di semua kanal (mis. bila posting pertama tayang tanpa foto) — permintaan pemilik 24 Nov 2026.
//   node tools/repost.js <slug>
// Dijalankan workflow "Posting ulang listing" (repost.yml). Langkah:
//   1. hapus posting lama: Instagram (bila API mengizinkan), Threads, Facebook Page, Telegram;
//   2. hapus catatan slug di ig/threads/fb/tg-state.json → jalan instagram.yml berikutnya memposting ulang dengan gambar terbaru.
// Posting yang gagal dihapus lewat API dicatat di tools/repost-log.json (field manual) supaya pemilik menghapusnya sendiri di aplikasi.
const fs = require("fs");
const path = require("path");
const ROOT = path.resolve(__dirname, "..");
const P = (f) => path.join(ROOT, f);
const readJ = (f) => { try { return JSON.parse(fs.readFileSync(P(f), "utf8")); } catch (e) { return {}; } };
const writeJ = (f, j) => fs.writeFileSync(P(f), JSON.stringify(j, null, 2) + "\n");

async function main() {
  const slug = (process.argv[2] || "").trim();
  if (!/^[a-z0-9-]+$/.test(slug)) throw new Error("Slug tidak valid");
  const log = { slug, at: new Date().toISOString(), deleted: [], manual: [] };
  const note = (ch, ok, url, err) => { (ok ? log.deleted : log.manual).push({ ch, url: url || "", err: err ? String(err).slice(0, 200) : undefined }); console.log((ok ? "✓ dihapus " : "✗ hapus manual ") + ch + " " + (url || "") + (err ? " — " + err : "")); };

  // Instagram
  const igs = readJ("tools/ig-state.json"), ig = (igs.posted || {})[slug];
  if (ig) {
    try {
      const IG = require("./ig-post.js");
      const { token } = await IG.connect(igs, () => {});
      await IG.api("DELETE", ig.id, {}, token);
      note("Instagram", true, ig.permalink);
    } catch (e) { note("Instagram", false, ig.permalink, e.message); }
    delete igs.posted[slug]; delete (igs.errors || {})[slug];
    writeJ("tools/ig-state.json", igs);
  }
  // Threads
  const ths = readJ("tools/threads-state.json"), th = (ths.posted || {})[slug];
  if (th) {
    try {
      const T = require("./threads-post.js");
      const token = (ths.token && T.dec(ths.token)) || process.env.THREADS_TOKEN;
      if (!token) throw new Error("token Threads tidak ada");
      await T.api("DELETE", th.id, {}, token);
      note("Threads", true, th.permalink);
    } catch (e) { note("Threads", false, th.permalink, e.message); }
    delete ths.posted[slug]; delete (ths.errors || {})[slug];
    writeJ("tools/threads-state.json", ths);
  }
  // Facebook Page
  const fbs = readJ("tools/fb-state.json"), fb = (fbs.posted || {})[slug];
  if (fb) {
    try {
      const FB = require("./fb-post.js");
      const pg = await FB.page();
      if (!pg) throw new Error("token Facebook tidak ada");
      await FB.api("DELETE", fb.id, {}, pg.token);
      note("Facebook", true, fb.permalink);
    } catch (e) { note("Facebook", false, fb.permalink, e.message); }
    delete fbs.posted[slug]; delete (fbs.errors || {})[slug];
    writeJ("tools/fb-state.json", fbs);
  }
  // Telegram (album: id pesan pertama s.d. id + jumlah foto − 1)
  const tgs = readJ("tools/tg-state.json"), tg = (tgs.posted || {})[slug];
  if (tg) {
    try {
      if (!process.env.TELEGRAM_BOT_TOKEN) throw new Error("token Telegram tidak ada");
      const ids = Array.from({ length: tg.n || 1 }, (_, i) => tg.id + i);
      const r = await fetch(`https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/deleteMessages`, { method: "POST", headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ chat_id: process.env.TELEGRAM_CHAT || "@baliareproperty", message_ids: ids }) });
      const j = await r.json();
      if (!j.ok) throw new Error(j.description || r.status);
      note("Telegram", true, tg.permalink);
    } catch (e) { note("Telegram", false, tg.permalink, e.message); }
    delete tgs.posted[slug]; delete (tgs.errors || {})[slug]; delete (tgs.drops || {})[slug];
    writeJ("tools/tg-state.json", tgs);
  }
  const all = readJ("tools/repost-log.json"); (all.items = all.items || []).unshift(log); all.items = all.items.slice(0, 20);
  writeJ("tools/repost-log.json", all);
}

main().catch((e) => { console.error(e.message); process.exit(1); });
