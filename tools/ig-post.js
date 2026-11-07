// Posting otomatis listing ke Instagram (carousel) lewat Instagram API with Instagram Login.
// Dijalankan oleh .github/workflows/instagram.yml:
//   --mode=new    : posting listing BARU (belum pernah diposting & tidak ada di antrean) — setelah build website.
//   --mode=queue  : sama seperti "new" + posting 1 listing berikutnya dari antrean listing lama (3x sehari).
// Butuh secret GitHub IG_TOKEN (token Instagram long-lived). Tanpa secret: keluar diam-diam.
// Status disimpan di tools/ig-state.json (antrean, yang sudah diposting, token hasil refresh terenkripsi).
const fs = require("fs");
const path = require("path");
const crypto = require("crypto");
const { parseCard } = require("./ig-images.js");

const ROOT = path.resolve(__dirname, "..");
const BASE = "https://baliareproperty.com/";
let API = "https://graph.instagram.com/v23.0/"; // diganti ke graph.facebook.com bila token dari Login Terpadu/Facebook (token pengguna sistem)
const STATE = path.join(ROOT, "tools/ig-state.json");
const mode = (process.argv.find((a) => a.startsWith("--mode=")) || "--mode=new").slice(7);
const wait = (ms) => new Promise((r) => setTimeout(r, ms));
const strip = (s) => s.replace(/<[^>]+>/g, "").replace(/&nbsp;/g, " ").replace(/&amp;/g, "&").replace(/\s+/g, " ").trim();

// ---------- Listing dari listings.html ----------
function listings() {
  const src = fs.readFileSync(path.join(ROOT, "listings.html"), "utf8");
  const out = [];
  const secRe = /<section class="type" data-type="([^"]+)"[\s\S]*?(?=<section class="type"|<\/main>|$)/g;
  let sm;
  while ((sm = secRe.exec(src))) {
    const type = sm[1];
    const artRe = /<article\b([^>]*)>([\s\S]*?)<\/article>/g;
    let m;
    while ((m = artRe.exec(sm[0]))) {
      const attrs = m[1], html = m[2];
      const slug = (html.match(/href="listing\/([^"]+)\.html"/) || [])[1];
      if (!slug) continue;
      out.push({ slug, type, html,
        hidden: /data-status="hidden"/.test(attrs),
        sold: /class="[^"]*\bsold\b/.test(attrs),
        title: strip((html.match(/<h4>([\s\S]*?)<\/h4>/) || [])[1] || slug),
        eyebrow: strip((html.match(/class="eyebrow">([\s\S]*?)<\/div>/) || [])[1] || "") });
    }
  }
  return out;
}

// ---------- Caption ----------
function tags(l) {
  const t = { tanah: ["#tanahdijual", "#tanahbali", "#balilandforsale", "#landforsale"], villa: ["#villadijual", "#villabali", "#balivillaforsale", "#villaforsale"],
    rumah: ["#rumahdijual", "#rumahbali", "#houseforsale"], komersial: ["#investasibali", "#hotelforsale", "#guesthousebali"] }[l.type] || [];
  const areas = { ungasan: "#ungasan", jimbaran: "#jimbaran", pecatu: "#pecatu", uluwatu: "#uluwatu", "labuan sait": "#uluwatu", balangan: "#balangan", pandawa: "#pandawa", kutuh: "#pandawa",
    melasti: "#melasti", canggu: "#canggu", berawa: "#berawa", tibubeneng: "#canggu", pererenan: "#pererenan", kerobokan: "#kerobokan", dalung: "#dalung", kuta: "#kutabali",
    ubud: "#ubud", singakerta: "#ubud", "lod tunduh": "#ubud", gianyar: "#gianyar", ketewel: "#ketewel", tabanan: "#tabanan", "kaba-kaba": "#tabanan", gwk: "#ungasan", "nusa dua": "#nusadua" };
  const hay = (l.eyebrow + " " + l.title + " " + l.slug.replace(/-/g, " ")).toLowerCase();
  const a = [...new Set(Object.keys(areas).filter((k) => hay.includes(k)).map((k) => areas[k]))];
  return [...new Set([...t, ...a, "#baliproperty", "#balirealestate", "#propertibali", "#investasiproperti", "#baliinvestment", "#bukitbali", "#baliareproperty"])].slice(0, 25).join(" ");
}
function caption(l, seo) {
  const d = parseCard(l.html);
  const lines = [];
  lines.push(`🏝️ DIJUAL · ${l.title}`);
  lines.push(`📍 ${l.eyebrow}, Bali`);
  lines.push("");
  if (d.prices.length) { d.prices.forEach((p) => lines.push(`💰 ${p.label}: ${p.value}`)); lines.push(""); }
  d.specs.slice(0, 8).forEach((s) => lines.push(`▫️ ${s[0]}: ${s[1]}`));
  if (d.points.length) { lines.push(""); d.points.slice(0, 5).forEach((p) => lines.push(`✨ ${p}`)); }
  lines.push("");
  lines.push(`🔗 Detail, foto & PDF: ${BASE.replace("https://", "")}listing/${l.slug}.html (link di bio)`);
  lines.push("📲 WhatsApp Bagoes: +62 812 868 080");
  if (seo && seo.en) { lines.push(""); lines.push("🇬🇧 " + seo.en.d); }
  if (seo && seo.ru) { lines.push(""); lines.push("🇷🇺 " + seo.ru.d); }
  lines.push("");
  lines.push(tags(l));
  let c = lines.join("\n");
  if (c.length > 2150) c = c.slice(0, 2150);
  return c;
}

// ---------- Token (refresh mingguan, disimpan terenkripsi dengan kunci dari secret IG_TOKEN) ----------
const key = () => crypto.createHash("sha256").update("bap-ig:" + process.env.IG_TOKEN).digest();
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
  const u = new URL(API + p);
  const body = new URLSearchParams({ ...(params || {}), access_token: token });
  const r = method === "GET" ? await fetch(u + "?" + body) : await fetch(u, { method, body });
  const j = await r.json().catch(() => ({}));
  if (!r.ok || j.error) throw new Error(`${method} ${p}: ${(j.error && j.error.message) || r.status}`);
  return j;
}
async function ready(id, token) {
  for (let i = 0; i < 20; i++) {
    const s = await api("GET", id, { fields: "status_code" }, token);
    if (s.status_code === "FINISHED") return;
    if (s.status_code === "ERROR" || s.status_code === "EXPIRED") throw new Error("Container " + id + ": " + s.status_code);
    await wait(6000);
  }
  throw new Error("Container " + id + " belum siap");
}
async function imagesOnline(slug, tries) {
  for (let i = 0; i < tries; i++) {
    try {
      const r = await fetch(`${BASE}img/ig/${slug}/meta.json?t=${Date.now()}`);
      if (r.ok) {
        const m = await r.json();
        const ok = await fetch(`${BASE}img/ig/${slug}/1.jpg?t=${Date.now()}`, { method: "HEAD" });
        if (ok.ok) return m.images || 1;
      }
    } catch (e) {}
    if (i < tries - 1) await wait(30000);
  }
  return 0;
}

async function publish(l, igId, token, seo, tries) {
  const n = await imagesOnline(l.slug, tries);
  if (!n) { console.log(`- ${l.slug}: gambar Instagram belum online, dicoba lagi nanti`); return null; }
  const urls = Array.from({ length: n }, (_, i) => `${BASE}img/ig/${l.slug}/${i + 1}.jpg`);
  const cap = caption(l, seo);
  let creation;
  if (urls.length === 1) {
    creation = (await api("POST", igId + "/media", { image_url: urls[0], caption: cap }, token)).id;
  } else {
    const kids = [];
    for (const u of urls) kids.push((await api("POST", igId + "/media", { image_url: u, is_carousel_item: "true" }, token)).id);
    for (const k of kids) await ready(k, token);
    creation = (await api("POST", igId + "/media", { media_type: "CAROUSEL", children: kids.join(","), caption: cap }, token)).id;
  }
  await ready(creation, token);
  const pub = await api("POST", igId + "/media_publish", { creation_id: creation }, token);
  let permalink = "";
  try { permalink = (await api("GET", pub.id, { fields: "permalink" }, token)).permalink || ""; } catch (e) {}
  console.log(`✓ ${l.slug} → ${permalink || pub.id}`);
  return { id: pub.id, permalink, at: new Date().toISOString() };
}

// Hubungkan ke akun Instagram: pilih host API sesuai jenis token, perpanjang token Instagram Login bila perlu (save = simpan state).
async function connect(state, save) {
  let token = (state.token && dec(state.token)) || process.env.IG_TOKEN;
  // Jenis token: Instagram Login (graph.instagram.com) atau Login Terpadu/Facebook (graph.facebook.com, token pengguna sistem tidak kedaluwarsa)
  let igId = null, username = "";
  try {
    const me = await api("GET", "me", { fields: "user_id,username" }, token);
    igId = me.user_id || me.id; username = me.username;
  } catch (e) {
    API = "https://graph.facebook.com/v23.0/";
    if (process.env.IG_USER_ID) {
      igId = process.env.IG_USER_ID;
    } else {
      const acc = await api("GET", "me/accounts", { fields: "name,instagram_business_account{id,username}", limit: "50" }, token);
      const hit = (acc.data || []).find((p) => p.instagram_business_account);
      if (!hit) throw new Error("Token Facebook tidak terhubung ke akun Instagram bisnis (tambahkan secret IG_USER_ID atau hubungkan akun IG ke Halaman).");
      igId = hit.instagram_business_account.id;
    }
    username = (await api("GET", igId, { fields: "username" }, token)).username || "";
  }
  const isIgLogin = API.includes("graph.instagram.com");
  const age = state.tokenRefreshedAt ? Date.now() - Date.parse(state.tokenRefreshedAt) : Infinity;
  if (save && isIgLogin && age > 7 * 864e5) {
    try {
      const r = await (await fetch(`https://graph.instagram.com/refresh_access_token?grant_type=ig_refresh_token&access_token=${encodeURIComponent(token)}`)).json();
      if (r.access_token) { token = r.access_token; state.token = enc(token); state.tokenRefreshedAt = new Date().toISOString(); console.log("Token Instagram diperpanjang."); save(); }
      else console.log("Refresh token dilewati:", (r.error && r.error.message) || "tanpa token");
    } catch (e) { console.log("Refresh token gagal:", e.message); }
  }

  return { igId, token, username, isIgLogin };
}

async function main() {
  const state = JSON.parse(fs.readFileSync(STATE, "utf8"));
  state.posted = state.posted || {}; state.queue = state.queue || []; state.errors = state.errors || {};
  const save = () => fs.writeFileSync(STATE, JSON.stringify(state, null, 2) + "\n");
  if (!process.env.IG_TOKEN) { console.log("Secret IG_TOKEN belum diatur — posting Instagram dilewati."); return; }

  const { igId, token, username, isIgLogin } = await connect(state, save);
  console.log("Akun Instagram: @" + username + (isIgLogin ? " (Instagram Login)" : " (Login Terpadu/Facebook)"));

  const SEO = require("./seo-titles.js");
  const all = listings();
  const live = all.filter((l) => !l.hidden && !l.sold);
  const inQueue = new Set(state.queue);
  const todo = live.filter((l) => !state.posted[l.slug] && !inQueue.has(l.slug)).slice(0, 5);
  if (mode === "queue") {
    const next = state.queue.map((s) => live.find((l) => l.slug === s)).find((l) => l && !state.posted[l.slug]);
    if (next) todo.push(next);
  }
  if (!todo.length) { console.log("Tidak ada listing untuk diposting."); return; }
  for (const l of todo) {
    try {
      const r = await publish(l, igId, token, SEO[l.slug], mode === "new" ? 12 : 2);
      if (r) { state.posted[l.slug] = r; state.queue = state.queue.filter((s) => s !== l.slug); delete state.errors[l.slug]; }
    } catch (e) {
      console.log(`✗ ${l.slug}: ${e.message}`);
      state.errors[l.slug] = { msg: e.message.slice(0, 300), at: new Date().toISOString() };
    }
    save();
  }
}

module.exports = { listings, caption, connect, api, ready, BASE };
if (require.main === module) main().catch((e) => { console.error(e.message); process.exit(1); });
