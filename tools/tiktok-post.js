// TikTok (opsi B, permintaan pemilik 23 Nov 2026): video Reel harian (tools/ig-reels.js) dikirim ke KOTAK MASUK / draft TikTok
// pemilik lewat Content Posting API "Upload" (scope video.upload, FILE_UPLOAD). Pemilik membuka notifikasi di aplikasi TikTok,
// memilih lagu, menempel caption (tombol "Salin caption" di tab Status admin.html), lalu memposting sendiri.
//   node tools/tiktok-post.js auth --code=<kode>   → tukar kode login (dari tiktok.html) jadi token; dijalankan workflow "TikTok: hubungkan akun"
//   node tools/tiktok-post.js post --dir=<folder>  → kirim <folder>/reel.mp4 + reel.json {slug, caption} ke draft TikTok (dari reels.yml)
// Secret TIKTOK_CLIENT_KEY + TIKTOK_CLIENT_SECRET (aplikasi di developers.tiktok.com). Token akses (24 jam) & refresh token (365 hari)
// disimpan terenkripsi (AES-GCM, kunci dari secret) di tools/tiktok-state.json; diperbarui otomatis tiap kali dipakai.
// Status: posted[slug] = {publish_id, at, caption, status}, errors[slug].
const fs = require("fs");
const path = require("path");
const crypto = require("crypto");

const ROOT = path.resolve(__dirname, "..");
const STATE = path.join(ROOT, "tools/tiktok-state.json");
const API = "https://open.tiktokapis.com/v2/";
const REDIRECT = "https://baliareproperty.com/tiktok.html";
const wait = (ms) => new Promise((r) => setTimeout(r, ms));
const arg = (k) => (process.argv.find((a) => a.startsWith("--" + k + "=")) || "").slice(k.length + 3);

const key = () => crypto.createHash("sha256").update("bap-tt:" + process.env.TIKTOK_CLIENT_SECRET).digest();
function enc(t) {
  const iv = crypto.randomBytes(12), c = crypto.createCipheriv("aes-256-gcm", key(), iv);
  const data = Buffer.concat([c.update(t, "utf8"), c.final()]);
  return { iv: iv.toString("base64"), tag: c.getAuthTag().toString("base64"), data: data.toString("base64") };
}
function dec(o) {
  try {
    const d = crypto.createDecipheriv("aes-256-gcm", key(), Buffer.from(o.iv, "base64"));
    d.setAuthTag(Buffer.from(o.tag, "base64"));
    return Buffer.concat([d.update(Buffer.from(o.data, "base64")), d.final()]).toString("utf8");
  } catch (e) { return null; }
}

async function oauth(params) {
  const r = await fetch(API + "oauth/token/", { method: "POST", headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({ client_key: process.env.TIKTOK_CLIENT_KEY, client_secret: process.env.TIKTOK_CLIENT_SECRET, ...params }) });
  const j = await r.json().catch(() => ({}));
  if (!j.access_token) throw new Error("Token TikTok gagal: " + (j.error_description || j.error || r.status));
  return j;
}
function keep(state, j) {
  state.token = enc(JSON.stringify({ access: j.access_token, refresh: j.refresh_token, open_id: j.open_id,
    exp: Date.now() + (j.expires_in || 86400) * 1000, rexp: Date.now() + (j.refresh_expires_in || 365 * 86400) * 1000 }));
  state.connected = { at: new Date().toISOString(), scope: j.scope || "", refreshUntil: new Date(Date.now() + (j.refresh_expires_in || 0) * 1000).toISOString().slice(0, 10) };
}
async function access(state) {
  const t = state.token && dec(state.token) && JSON.parse(dec(state.token));
  if (!t) throw new Error("Akun TikTok belum dihubungkan (buka baliareproperty.com/tiktok.html)");
  if (t.exp - Date.now() > 10 * 60e3) return t.access;
  const j = await oauth({ grant_type: "refresh_token", refresh_token: t.refresh });
  keep(state, j);
  return j.access_token;
}
async function call(p, body, token) {
  const r = await fetch(API + p, { method: "POST", headers: { Authorization: "Bearer " + token, "Content-Type": "application/json; charset=UTF-8" }, body: JSON.stringify(body) });
  const j = await r.json().catch(() => ({}));
  if (!j.error || j.error.code !== "ok") throw new Error(`${p}: ${(j.error && (j.error.code + " " + j.error.message)) || r.status}`);
  return j.data || {};
}

async function main() {
  const cmd = process.argv[2];
  const state = fs.existsSync(STATE) ? JSON.parse(fs.readFileSync(STATE, "utf8")) : {};
  state.posted = state.posted || {}; state.errors = state.errors || {};
  const save = () => fs.writeFileSync(STATE, JSON.stringify(state, null, 2) + "\n");
  if (!process.env.TIKTOK_CLIENT_KEY || !process.env.TIKTOK_CLIENT_SECRET) { console.log("Secret TIKTOK_CLIENT_KEY/TIKTOK_CLIENT_SECRET belum diatur — TikTok dilewati."); return; }

  if (cmd === "auth") {
    const code = decodeURIComponent(arg("code") || process.env.TIKTOK_CODE || "").trim();
    if (!code) throw new Error("Kode login kosong");
    const j = await oauth({ grant_type: "authorization_code", code, redirect_uri: REDIRECT });
    keep(state, j); delete state.errors.auth; save();
    console.log("✓ Akun TikTok terhubung · scope:", j.scope);
    return;
  }
  if (cmd !== "post") { console.log("Pakai: node tools/tiktok-post.js auth --code=… | post --dir=<folder>"); return; }

  const dir = arg("dir");
  const file = path.join(dir, "reel.mp4"), meta = path.join(dir, "reel.json");
  if (!fs.existsSync(file) || !fs.existsSync(meta)) { console.log("Tidak ada video Reel baru untuk TikTok."); return; }
  const { slug, caption, noTiktok } = JSON.parse(fs.readFileSync(meta, "utf8"));
  if (noTiktok) { console.log("Video ini khusus Facebook Reels — TikTok dilewati."); return; }
  if (state.posted[slug] && !process.argv.includes("--force") && !(Date.now() - Date.parse(state.posted[slug].at) >= 14 * 864e5)) { console.log(`${slug} sudah pernah dikirim ke TikTok.`); return; }
  try {
    const token = await access(state); save();
    const size = fs.statSync(file).size;
    if (size > 64e6) throw new Error("Video terlalu besar untuk 1 bagian (" + (size / 1e6).toFixed(1) + " MB)");
    const init = await call("post/publish/inbox/video/init/", { source_info: { source: "FILE_UPLOAD", video_size: size, chunk_size: size, total_chunk_count: 1 } }, token);
    const up = await fetch(init.upload_url, { method: "PUT", headers: { "Content-Type": "video/mp4", "Content-Length": String(size), "Content-Range": `bytes 0-${size - 1}/${size}` }, body: fs.readFileSync(file) });
    if (!up.ok) throw new Error("Unggah video ke TikTok gagal: HTTP " + up.status + " " + (await up.text()).slice(0, 150));
    let status = "PROCESSING_UPLOAD";
    for (let i = 0; i < 40 && /PROCESSING/.test(status); i++) {
      await wait(6000);
      let s;
      // Setelah unggah berhasil, TikTok kadang menjawab "invalid_publish_id" untuk cek status (25 Nov 2026) → video tetap terkirim ke kotak masuk
      try { s = await call("post/publish/status/fetch/", { publish_id: init.publish_id }, token); }
      catch (e) { if (/invalid_publish_id/.test(e.message) && i >= 2) { status = "UPLOADED"; break; } if (/invalid_publish_id/.test(e.message)) continue; throw e; }
      status = s.status || status;
      if (status === "FAILED") throw new Error("TikTok menolak video: " + (s.fail_reason || "tanpa alasan"));
    }
    state.posted[slug] = { publish_id: init.publish_id, status, at: new Date().toISOString(), caption };
    delete state.errors[slug];
    console.log(`✓ ${slug} → draft TikTok (${status}). Buka notifikasi kotak masuk di aplikasi TikTok untuk memposting.`);
  } catch (e) {
    console.log(`✗ ${slug}: ${e.message}`);
    state.errors[slug] = { msg: e.message.slice(0, 300), at: new Date().toISOString() };
  }
  save();
}

if (require.main === module) main().catch((e) => {
  console.error(e.message);
  try {
    const s = fs.existsSync(STATE) ? JSON.parse(fs.readFileSync(STATE, "utf8")) : {};
    s.errors = s.errors || {}; s.errors.auth = { msg: e.message.slice(0, 300), at: new Date().toISOString() };
    fs.writeFileSync(STATE, JSON.stringify(s, null, 2) + "\n");
  } catch (x) {}
  process.exit(1);
});
