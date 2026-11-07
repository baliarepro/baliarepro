// Salin posting Instagram ke Threads (Meta Threads API, graph.threads.com).
// Semua yang sudah tayang di Instagram — listing (tools/ig-state.json → posted) dan carousel mingguan
// (tools/ig-weekly-state.json → posts) — diposting juga ke Threads dengan gambar yang sama, caption ringkas ≤500 karakter.
// Dijalankan setelah langkah posting di .github/workflows/instagram.yml dan instagram-weekly.yml.
// Butuh secret THREADS_TOKEN (token long-lived Threads). Tanpa secret: keluar diam-diam.
// Status: tools/threads-state.json { posted: {slug}, weekly: {tanggal}, token (terenkripsi), tokenRefreshedAt, errors }.
const fs = require("fs");
const path = require("path");
const crypto = require("crypto");
const { parseCard } = require("./ig-images.js");

const ROOT = path.resolve(__dirname, "..");
const BASE = "https://baliareproperty.com/";
const API = "https://graph.threads.com/v1.0/";
const STATE = path.join(ROOT, "tools/threads-state.json");
const MAX_PER_RUN = 2;
const wait = (ms) => new Promise((r) => setTimeout(r, ms));
const read = (f, d) => { try { return JSON.parse(fs.readFileSync(path.join(ROOT, f), "utf8")); } catch (e) { return d; } };
const BULAN = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];
const tglIndo = (d) => { const [y, m, dd] = d.split("-").map(Number); return `${dd} ${BULAN[m - 1]} ${y}`; };

// Batas Threads 500 karakter (emoji dihitung sebagai byte UTF-8) → pakai byte UTF-8 agar aman.
const bytes = (s) => Buffer.byteLength(s, "utf8");
function fit(head, body, tail) {
  // head & tail wajib; baris body dibuang dari belakang bila terlalu panjang
  let lines = body.slice();
  const join = () => [head, ...lines, tail].filter(Boolean).join("\n");
  while (lines.length && bytes(join()) > 500) lines.pop();
  let t = join();
  while (bytes(t) > 500) t = t.slice(0, -2);
  return t;
}

// ---------- Caption ----------
function listingText(l) {
  const d = parseCard(l.html);
  const main = d.prices.find((p) => p.hl) || d.prices[d.prices.length - 1];
  const pick = ["Luas tanah", "Luas bangunan", "Kamar tidur", "Sertifikat", "Legalitas", "ITR", "ITR / Zonasi", "Zona", "Zonasi", "Posisi", "View"];
  const specs = pick.map((k) => d.specs.find((s) => s[0] === k)).filter(Boolean).slice(0, 4);
  const head = `🏝️ DIJUAL · ${l.title}\n📍 ${l.eyebrow}, Bali`;
  const body = [];
  if (main) body.push(`💰 ${main.label}: ${main.value}`);
  if (specs.length) body.push(specs.map((s) => `${s[0]}: ${s[1]}`).join(" · "));
  d.points.slice(0, 2).forEach((p) => body.push(`✓ ${p}`));
  const tail = `\nDetail, foto & PDF: ${BASE}listing/${l.slug}.html\nWA Bagoes: +62 812 868 080\n#PropertiBali`;
  return fit(head, body, tail);
}

function weeklyText(date, w) {
  if (w.kind === "news") {
    const { NEWS } = require("./news-content.js");
    const items = w.items.map((s) => NEWS.find((n) => n.slug === s)).filter(Boolean);
    const head = `📰 Berita Properti Bali Minggu Ini · ${tglIndo(date)}`;
    const body = items.map((n, i) => `${i + 1}. ${n.id.title}`);
    const tail = `\nBaca lengkap: ${BASE}news.html\nRingkasan berita, bukan nasihat investasi.\n#PropertiBali`;
    return fit(head, body, tail);
  }
  const { EDU } = require("./ig-edu-content.js");
  const e = EDU.find((x) => x.slug === w.items[0]);
  if (!e) return `Aturan properti di Bali\n${BASE}`;
  const head = `📘 ${e.title}`;
  const body = e.slides.map((s) => `• ${s.h}: ${s.pts[0]}`);
  const tail = `\n${e.note}\nTanah & villa dijual di Bali: ${BASE}\nWA: +62 812 868 080\n#PropertiBali`;
  return fit(head, body, tail);
}

// ---------- Token ----------
const key = () => crypto.createHash("sha256").update("bap-th:" + process.env.THREADS_TOKEN).digest();
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

async function api(method, p, params, token) {
  const body = new URLSearchParams({ ...(params || {}), access_token: token });
  const r = method === "GET" ? await fetch(API + p + "?" + body) : await fetch(API + p, { method, body });
  const j = await r.json().catch(() => ({}));
  if (!r.ok || j.error) throw new Error(`${method} ${p}: ${(j.error && j.error.message) || r.status}`);
  return j;
}
async function ready(id, token) {
  for (let i = 0; i < 20; i++) {
    await wait(i ? 6000 : 3000);
    let s;
    try { s = (await api("GET", id, { fields: "status,error_message" }, token)); } catch (e) { await wait(30000); return; }
    if (s.status === "FINISHED" || s.status === "PUBLISHED") return;
    if (s.status === "ERROR" || s.status === "EXPIRED") throw new Error("Container " + id + ": " + (s.error_message || s.status));
  }
  throw new Error("Container " + id + " belum siap");
}

async function post(uid, token, urls, text) {
  let creation;
  if (urls.length === 1) {
    creation = (await api("POST", uid + "/threads", { media_type: "IMAGE", image_url: urls[0], text }, token)).id;
  } else {
    const kids = [];
    for (const u of urls.slice(0, 20)) kids.push((await api("POST", uid + "/threads", { media_type: "IMAGE", image_url: u, is_carousel_item: "true" }, token)).id);
    for (const k of kids) await ready(k, token);
    creation = (await api("POST", uid + "/threads", { media_type: "CAROUSEL", children: kids.join(","), text }, token)).id;
  }
  await ready(creation, token);
  const pub = await api("POST", uid + "/threads_publish", { creation_id: creation }, token);
  let permalink = "";
  try { permalink = (await api("GET", pub.id, { fields: "permalink" }, token)).permalink || ""; } catch (e) {}
  return { id: pub.id, permalink, at: new Date().toISOString() };
}

async function main() {
  const state = read("tools/threads-state.json", {});
  state.posted = state.posted || {}; state.weekly = state.weekly || {}; state.errors = state.errors || {};
  const save = () => fs.writeFileSync(STATE, JSON.stringify(state, null, 2) + "\n");
  if (!process.env.THREADS_TOKEN) { console.log("Secret THREADS_TOKEN belum diatur — posting Threads dilewati."); return; }

  let token = (state.token && dec(state.token)) || process.env.THREADS_TOKEN;
  const me = await api("GET", "me", { fields: "id,username" }, token);
  console.log("Akun Threads: @" + me.username);
  // Perpanjang token tiap 7 hari (berlaku 60 hari sejak diperpanjang; token harus berumur ≥24 jam)
  if (!state.tokenSeenAt) { state.tokenSeenAt = new Date().toISOString(); save(); }
  const since = Date.parse(state.tokenRefreshedAt || state.tokenSeenAt);
  if (Date.now() - since > 7 * 864e5) {
    try {
      const r = await (await fetch(`https://graph.threads.com/refresh_access_token?grant_type=th_refresh_token&access_token=${encodeURIComponent(token)}`)).json();
      if (r.access_token) { token = r.access_token; state.token = enc(token); state.tokenRefreshedAt = new Date().toISOString(); console.log("Token Threads diperpanjang."); }
      else console.log("Refresh token Threads dilewati:", (r.error && r.error.message) || "tanpa token");
    } catch (e) { console.log("Refresh token Threads gagal:", e.message); }
    save();
  }

  const todo = [];
  // Carousel mingguan dulu (lebih jarang & bergantung waktu)
  const wk = read("tools/ig-weekly-state.json", {}).posts || {};
  for (const date of Object.keys(wk).sort()) if (!state.weekly[date]) todo.push({ kind: "weekly", date, w: wk[date] });
  // Listing yang sudah tayang di Instagram, urut waktu posting IG
  const ig = read("tools/ig-state.json", {}).posted || {};
  const { listings } = require("./ig-post.js");
  const live = new Map(listings().filter((l) => !l.hidden && !l.sold).map((l) => [l.slug, l]));
  Object.entries(ig).sort((a, b) => (a[1].at || "").localeCompare(b[1].at || ""))
    .forEach(([slug]) => { if (!state.posted[slug] && live.has(slug)) todo.push({ kind: "listing", slug, l: live.get(slug) }); });

  if (!todo.length) { console.log("Tidak ada yang perlu diposting ke Threads."); return; }
  for (const t of todo.slice(0, MAX_PER_RUN)) {
    const k = t.kind === "weekly" ? "weekly:" + t.date : t.slug;
    try {
      let urls, text;
      if (t.kind === "weekly") {
        const meta = read(`img/ig-weekly/${t.date}/meta.json`, null);
        if (!meta) throw new Error("meta.json carousel mingguan tidak ditemukan");
        urls = Array.from({ length: meta.images }, (_, i) => `${BASE}img/ig-weekly/${t.date}/${i + 1}.jpg`);
        text = weeklyText(t.date, t.w);
      } else {
        const meta = read(`img/ig/${t.slug}/meta.json`, null);
        if (!meta) throw new Error("gambar Instagram belum ada");
        urls = Array.from({ length: meta.images || 1 }, (_, i) => `${BASE}img/ig/${t.slug}/${i + 1}.jpg`);
        text = listingText(t.l);
      }
      const r = await post(me.id, token, urls, text);
      if (t.kind === "weekly") state.weekly[t.date] = r; else state.posted[t.slug] = r;
      delete state.errors[k];
      console.log(`✓ ${k} → ${r.permalink || r.id}`);
    } catch (e) {
      console.log(`✗ ${k}: ${e.message}`);
      state.errors[k] = { msg: e.message.slice(0, 300), at: new Date().toISOString() };
    }
    save();
  }
}

module.exports = { listingText, weeklyText };
if (require.main === module) main().catch((e) => { console.error(e.message); process.exit(1); });
