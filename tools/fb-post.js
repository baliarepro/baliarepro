// Salin posting Instagram ke Facebook Page (Graph API, graph.facebook.com).
// Semua yang sudah tayang di Instagram — listing (tools/ig-state.json → posted) dan carousel mingguan
// (tools/ig-weekly-state.json → posts) — diposting juga ke Facebook Page sebagai posting multi-foto dengan gambar yang sama.
// Caption = caption Instagram, tetapi link "di bio" diganti link langsung (link di Facebook bisa diklik).
//   node tools/fb-post.js                 → listing (dari .github/workflows/instagram.yml), status di tools/fb-state.json
//   node tools/fb-post.js --only=weekly   → carousel mingguan (dari instagram-weekly.yml), status di tools/fb-weekly-state.json
// Token (urutan): secret FB_PAGE_TOKEN (Page access token, + opsional FB_PAGE_ID), atau turunan dari IG_TOKEN lewat me/accounts
// (butuh izin pages_show_list, pages_manage_posts, pages_read_engagement di token yang sama). Tanpa token yang bisa: dilewati.
const fs = require("fs");
const path = require("path");

const ROOT = path.resolve(__dirname, "..");
const BASE = "https://baliareproperty.com/";
const API = "https://graph.facebook.com/v23.0/";
const ONLY = ((process.argv.find((a) => a.startsWith("--only=")) || "--only=listings").slice(7));
const STATE = path.join(ROOT, ONLY === "weekly" ? "tools/fb-weekly-state.json" : "tools/fb-state.json");
const MAX_PER_RUN = 2;
const read = (f, d) => { try { return JSON.parse(fs.readFileSync(path.join(ROOT, f), "utf8")); } catch (e) { return d; } };

async function api(method, p, params, token) {
  const body = new URLSearchParams({ ...(params || {}), access_token: token });
  const r = method === "GET" ? await fetch(API + p + "?" + body) : await fetch(API + p, { method, body });
  const j = await r.json().catch(() => ({}));
  if (!r.ok || j.error) throw new Error(`${method} ${p}: ${(j.error && j.error.message) || r.status}`);
  return j;
}

// Cari Page + Page access token
async function page() {
  if (process.env.FB_PAGE_TOKEN) {
    const t = process.env.FB_PAGE_TOKEN;
    if (process.env.FB_PAGE_ID) return { id: process.env.FB_PAGE_ID, token: t, name: "" };
    const me = await api("GET", "me", { fields: "id,name" }, t); // token Page → "me" adalah Page itu sendiri
    return { id: me.id, token: t, name: me.name };
  }
  const user = process.env.IG_TOKEN;
  if (!user) return null;
  const acc = await api("GET", "me/accounts", { fields: "id,name,access_token,instagram_business_account", limit: "50" }, user);
  const list = acc.data || [];
  const hit = list.find((p) => p.instagram_business_account && p.instagram_business_account.id === process.env.IG_USER_ID)
    || list.find((p) => p.instagram_business_account) || list[0];
  if (!hit) throw new Error("Token tidak punya akses ke Facebook Page mana pun (izin pages_show_list/pages_manage_posts belum diberikan).");
  return { id: hit.id, token: hit.access_token || user, name: hit.name };
}

function fbText(cap, link) {
  return cap
    .replace(/🔗 Foto lengkap & PDF: baliareproperty\.com \(link di bio\)/, "🔗 Foto lengkap & PDF: " + link)
    .replace(/baliareproperty\.com\/news\.html \(link di bio\)/, BASE + "news.html")
    .replace(/baliareproperty\.com \(link di bio\)/g, BASE.replace(/\/$/, ""))
    .replace(/ \(link di bio\)/g, "");
}

async function publish(pg, urls, message) {
  const ids = [];
  for (const u of urls.slice(0, 10)) ids.push((await api("POST", pg.id + "/photos", { url: u, published: "false" }, pg.token)).id);
  const params = { message };
  ids.forEach((id, i) => { params[`attached_media[${i}]`] = JSON.stringify({ media_fbid: id }); });
  const r = await api("POST", pg.id + "/feed", params, pg.token);
  let permalink = "";
  try { permalink = (await api("GET", r.id, { fields: "permalink_url" }, pg.token)).permalink_url || ""; } catch (e) {}
  return { id: r.id, permalink, at: new Date().toISOString() };
}

async function main() {
  const state = read(path.relative(ROOT, STATE), {});
  state.posted = state.posted || {}; state.errors = state.errors || {};
  const save = () => fs.writeFileSync(STATE, JSON.stringify(state, null, 2) + "\n");
  if (!process.env.FB_PAGE_TOKEN && !process.env.IG_TOKEN) { console.log("Token Facebook belum diatur — posting Facebook dilewati."); return; }
  let pg;
  try { pg = await page(); } catch (e) {
    console.log("Facebook Page belum bisa dipakai: " + e.message);
    state.errors.setup = { msg: e.message.slice(0, 300), at: new Date().toISOString() }; save(); return;
  }
  if (!pg) { console.log("Token Facebook belum diatur — posting Facebook dilewati."); return; }
  delete state.errors.setup;
  console.log("Facebook Page: " + (pg.name || pg.id));

  const todo = [];
  if (ONLY === "weekly") {
    const wk = read("tools/ig-weekly-state.json", {}).posts || {};
    for (const date of Object.keys(wk).sort()) if (!state.posted[date]) todo.push({ key: date, weekly: true });
  } else {
    const ig = read("tools/ig-state.json", {}).posted || {};
    const { listings, caption } = require("./ig-post.js");
    const SEO = require("./seo-titles.js");
    const live = new Map(listings().filter((l) => !l.hidden && !l.sold).map((l) => [l.slug, l]));
    Object.entries(ig).sort((a, b) => (a[1].at || "").localeCompare(b[1].at || ""))
      .forEach(([slug]) => { if (!state.posted[slug] && live.has(slug)) todo.push({ key: slug, l: live.get(slug), cap: () => caption(live.get(slug), SEO[slug]) }); });
  }
  if (!todo.length) { console.log("Tidak ada yang perlu diposting ke Facebook."); save(); return; }

  for (const t of todo.slice(0, MAX_PER_RUN)) {
    try {
      let urls, msg;
      if (t.weekly) {
        const meta = read(`img/ig-weekly/${t.key}/meta.json`, null);
        if (!meta) throw new Error("meta.json carousel mingguan tidak ditemukan");
        urls = Array.from({ length: meta.images }, (_, i) => `${BASE}img/ig-weekly/${t.key}/${i + 1}.jpg`);
        msg = fbText(meta.caption, BASE + "news.html");
      } else {
        const meta = read(`img/ig/${t.key}/meta.json`, null);
        if (!meta) throw new Error("gambar Instagram belum ada");
        urls = Array.from({ length: meta.images || 1 }, (_, i) => `${BASE}img/ig/${t.key}/${i + 1}.jpg`);
        msg = fbText(t.cap(), `${BASE}listing/${t.key}.html`);
      }
      const r = await publish(pg, urls, msg);
      state.posted[t.key] = r; delete state.errors[t.key];
      console.log(`✓ ${t.key} → ${r.permalink || r.id}`);
    } catch (e) {
      console.log(`✗ ${t.key}: ${e.message}`);
      state.errors[t.key] = { msg: e.message.slice(0, 300), at: new Date().toISOString() };
    }
    save();
  }
}

module.exports = { fbText };
if (require.main === module) main().catch((e) => { console.error(e.message); process.exit(1); });
