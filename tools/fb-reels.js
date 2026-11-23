// Facebook Reels Halaman "Bali Are" (permintaan pemilik 23 Nov 2026): video Reel yang dibuat tools/ig-reels.js
// (salinan di <dir>/reel.mp4 + reel.json {slug, caption, noFb}) diunggah sebagai Reel Halaman lewat Graph API
// (video_reels: start → unggah ke rupload.facebook.com → finish PUBLISHED). Token sama dengan tools/fb-post.js.
//   node tools/fb-reels.js post --dir=/tmp/reel-out
// Dijalankan di reels.yml: Reel IG malam (baru) dan jadwal susulan FB_BACKLOG (Reel IG lama yang belum ada di Facebook).
// Status tools/fb-reels-state.json: posted[slug] = {id, permalink, at}, errors[slug].
const fs = require("fs");
const path = require("path");

const ROOT = path.resolve(__dirname, "..");
const STATE = path.join(ROOT, "tools/fb-reels-state.json");
const BASE = "https://baliareproperty.com/";
const wait = (ms) => new Promise((r) => setTimeout(r, ms));
const arg = (k) => (process.argv.find((a) => a.startsWith("--" + k + "=")) || "").slice(k.length + 3);

async function main() {
  const state = fs.existsSync(STATE) ? JSON.parse(fs.readFileSync(STATE, "utf8")) : {};
  state.posted = state.posted || {}; state.errors = state.errors || {};
  const save = () => fs.writeFileSync(STATE, JSON.stringify(state, null, 2) + "\n");
  if (!process.env.FB_PAGE_TOKEN && !process.env.IG_TOKEN) { console.log("Token Facebook belum diatur — Facebook Reels dilewati."); return; }
  const dir = arg("dir");
  const file = path.join(dir, "reel.mp4"), metaF = path.join(dir, "reel.json");
  if (!fs.existsSync(file) || !fs.existsSync(metaF)) { console.log("Tidak ada video Reel untuk Facebook."); return; }
  const { slug, caption, noFb } = JSON.parse(fs.readFileSync(metaF, "utf8"));
  if (noFb) { console.log("Video ini khusus TikTok — Facebook Reels dilewati."); return; }
  if (state.posted[slug]) { console.log(`${slug} sudah ada di Facebook Reels.`); return; }
  const FB = require("./fb-post.js");
  try {
    const pg = await FB.page();
    if (!pg) throw new Error("token Facebook belum diatur");
    const start = await FB.api("POST", pg.id + "/video_reels", { upload_phase: "start" }, pg.token);
    const size = fs.statSync(file).size;
    const up = await fetch(start.upload_url || `https://rupload.facebook.com/video-upload/v23.0/${start.video_id}`, {
      method: "POST", headers: { Authorization: "OAuth " + pg.token, offset: "0", file_size: String(size) }, body: fs.readFileSync(file) });
    const uj = await up.json().catch(() => ({}));
    if (!up.ok || uj.success === false) throw new Error("Unggah video gagal: " + JSON.stringify(uj).slice(0, 200));
    const desc = FB.fbText(caption, `${BASE}listing/${slug}.html`);
    await FB.api("POST", pg.id + "/video_reels", { upload_phase: "finish", video_id: start.video_id, video_state: "PUBLISHED", description: desc }, pg.token);
    let permalink = "";
    for (let i = 0; i < 12 && !permalink; i++) { // tunggu video selesai diproses (±2 menit) untuk mendapat link
      await wait(10000);
      try {
        const v = await FB.api("GET", start.video_id, { fields: "permalink_url,status" }, pg.token);
        if (v.status && v.status.video_status === "error") throw new Error("Facebook menolak video: " + JSON.stringify(v.status).slice(0, 200));
        if (v.permalink_url) permalink = v.permalink_url.startsWith("http") ? v.permalink_url : "https://www.facebook.com" + v.permalink_url;
      } catch (e) { if (/menolak/.test(e.message)) throw e; }
    }
    state.posted[slug] = { id: start.video_id, permalink: permalink || `https://www.facebook.com/reel/${start.video_id}`, at: new Date().toISOString() };
    delete state.errors[slug];
    console.log(`✓ Facebook Reel ${slug} → ${state.posted[slug].permalink}`);
  } catch (e) {
    console.log(`✗ Facebook Reel ${slug}: ${e.message}`);
    state.errors[slug] = { msg: e.message.slice(0, 300), at: new Date().toISOString() };
  }
  save();
}

if (require.main === module) main().catch((e) => { console.error(e.message); process.exit(1); });
