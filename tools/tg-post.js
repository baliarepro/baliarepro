// Salin posting Instagram ke channel Telegram t.me/baliareproperty (Bot API) — permintaan pemilik 20 Nov 2026.
// Listing yang sudah tayang di IG (tools/ig-state.json → posted) dan carousel mingguan (tools/ig-weekly-state.json → posts)
// dikirim sebagai album foto (gambar IG yang sama) + caption ≤1024 karakter dengan link langsung. Listing yang harganya turun
// (tools/listing-meta.json → drop) dikirim ulang sekali dengan baris "🔻 HARGA TURUN".
//   node tools/tg-post.js                → listing (dari instagram.yml), status tools/tg-state.json
//   node tools/tg-post.js --only=weekly  → carousel mingguan (dari instagram-weekly.yml), status tools/tg-weekly-state.json
// Secret TELEGRAM_BOT_TOKEN (bot dari @BotFather, dijadikan admin channel dengan izin "Post messages"); opsional TELEGRAM_CHAT
// (default @baliareproperty). Tanpa token: dilewati. Urutan listing: yang tayang di IG ≤3 hari terakhir dulu (terbaru), lalu antrean lama.
const fs = require("fs");
const path = require("path");

const ROOT = path.resolve(__dirname, "..");
const BASE = "https://baliareproperty.com/";
const ONLY = ((process.argv.find((a) => a.startsWith("--only=")) || "--only=listings").slice(7));
const STATE = path.join(ROOT, ONLY === "weekly" ? "tools/tg-weekly-state.json" : "tools/tg-state.json");
const MAX_PER_RUN = 2;
const read = (f, d) => { try { return JSON.parse(fs.readFileSync(path.join(ROOT, f), "utf8")); } catch (e) { return d; } };

async function tg(method, body) {
  const r = await fetch(`https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/${method}`, {
    method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(body) });
  const j = await r.json().catch(() => ({}));
  if (!j.ok) throw new Error(`${method}: ${j.description || r.status}`);
  return j.result;
}

// Caption Telegram maks. 1024 karakter: tanpa hashtag; bila masih panjang, buang baris spesifikasi/keunggulan/harga tambahan
function tgText(cap, link, drop) {
  const { fbText } = require("./fb-post.js");
  let lines = fbText(cap, link).split("\n").filter((l) => !/^#/.test(l.trim()));
  if (drop) {
    lines[0] = lines[0].replace(/^(🏝️ DIJUAL|🏝️|✅ MASIH TERSEDIA ·)\s*/, "🔻 HARGA TURUN · ");
    if (drop.from) lines.splice(1, 0, `Sebelumnya ${drop.from.replace(/\s+/g, " ")} → sekarang ${drop.to.replace(/\s+/g, " ")}`);
  }
  const fit = () => lines.join("\n").replace(/\n{3,}/g, "\n\n").trim();
  for (const re of [/^▫️/, /^✨/, /^💰/, /^🇷🇺/, /^🇬🇧/]) {
    while (fit().length > 1024) {
      let i = -1; for (let k = lines.length - 1; k >= 0; k--) if (re.test(lines[k]) && !(re.source === "^💰" && lines.filter((x) => /^💰/.test(x)).length <= 1)) { i = k; break; }
      if (i < 0) break; lines.splice(i, 1);
    }
  }
  const t = fit();
  return t.length > 1024 ? t.slice(0, 1020) + "…" : t;
}

async function album(urls, caption) {
  const chat = process.env.TELEGRAM_CHAT || "@baliareproperty";
  const media = urls.slice(0, 10).map((u, i) => ({ type: "photo", media: u + "?v=" + Date.now().toString(36), ...(i ? {} : { caption }) }));
  const res = media.length > 1 ? await tg("sendMediaGroup", { chat_id: chat, media }) : [await tg("sendPhoto", { chat_id: chat, photo: media[0].media, caption })];
  const m = res[0], user = m.chat && m.chat.username;
  return { id: m.message_id, permalink: user ? `https://t.me/${user}/${m.message_id}` : "", at: new Date().toISOString() };
}

async function main() {
  const state = read(path.relative(ROOT, STATE), {});
  state.posted = state.posted || {}; state.drops = state.drops || {}; state.errors = state.errors || {};
  const save = () => fs.writeFileSync(STATE, JSON.stringify(state, null, 2) + "\n");
  if (!process.env.TELEGRAM_BOT_TOKEN) { console.log("Secret TELEGRAM_BOT_TOKEN belum diatur — posting Telegram dilewati."); return; }

  const todo = [];
  if (ONLY === "weekly") {
    const wk = read("tools/ig-weekly-state.json", {}).posts || {};
    for (const date of Object.keys(wk).sort()) if (!state.posted[date]) todo.push({ key: date, weekly: true });
  } else {
    const ig = read("tools/ig-state.json", {}).posted || {};
    const meta = read("tools/listing-meta.json", {});
    const { listings, caption } = require("./ig-post.js");
    const SEO = require("./seo-titles.js");
    const live = new Map(listings().filter((l) => !l.hidden && !l.sold).map((l) => [l.slug, l]));
    const now = Date.now();
    // 1) Harga turun setelah terakhir dikirim ke Telegram
    for (const [slug, m] of Object.entries(meta)) {
      const d = m.drop, sent = Math.max(Date.parse((state.posted[slug] || {}).at || 0) || 0, Date.parse((state.drops[slug] || {}).at || 0) || 0);
      if (d && live.has(slug) && state.posted[slug] && now - Date.parse(d.at) <= 30 * 864e5 && Date.parse(d.at + "T00:00:00+08:00") > sent)
        todo.push({ key: slug, drop: d, cap: () => caption(live.get(slug), SEO[slug], true) });
    }
    // 2) Listing baru di IG (≤3 hari, terbaru dulu), lalu sisanya (terlama dulu)
    const ent = Object.entries(ig).filter(([slug]) => !state.posted[slug] && live.has(slug));
    const fresh = ent.filter(([, v]) => now - Date.parse(v.at || 0) <= 3 * 864e5).sort((a, b) => (b[1].at || "").localeCompare(a[1].at || ""));
    const old = ent.filter((e) => !fresh.includes(e)).sort((a, b) => (a[1].at || "").localeCompare(b[1].at || ""));
    [...fresh, ...old].forEach(([slug]) => todo.push({ key: slug, cap: () => caption(live.get(slug), SEO[slug]) }));
  }
  if (!todo.length) { console.log("Tidak ada yang perlu diposting ke Telegram."); save(); return; }

  for (const t of todo.slice(0, MAX_PER_RUN)) {
    try {
      let urls, text;
      if (t.weekly) {
        const m = read(`img/ig-weekly/${t.key}/meta.json`, null);
        if (!m) throw new Error("meta.json carousel mingguan tidak ditemukan");
        urls = Array.from({ length: m.images }, (_, i) => `${BASE}img/ig-weekly/${t.key}/${i + 1}.jpg`);
        text = tgText(m.caption, BASE + "news.html");
      } else {
        const m = read(`img/ig/${t.key}/meta.json`, null);
        if (!m) throw new Error("gambar Instagram belum ada");
        urls = Array.from({ length: m.images || 1 }, (_, i) => `${BASE}img/ig/${t.key}/${i + 1}.jpg`);
        text = tgText(t.cap(), `${BASE}listing/${t.key}.html`, t.drop);
      }
      const r = await album(urls, text);
      if (t.drop) state.drops[t.key] = r; else state.posted[t.key] = r;
      delete state.errors[t.key];
      console.log(`✓ ${t.drop ? "harga turun " : ""}${t.key} → ${r.permalink || r.id}`);
    } catch (e) {
      console.log(`✗ ${t.key}: ${e.message}`);
      state.errors[t.key] = { msg: e.message.slice(0, 300), at: new Date().toISOString() };
    }
    save();
  }
}

module.exports = { tgText };
if (require.main === module) main().catch((e) => { console.error(e.message); process.exit(1); });
