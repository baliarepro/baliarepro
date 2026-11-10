// Reels Instagram otomatis dari foto listing (1080×1920, ±13 detik, MP4 H.264 + audio senyap).
//   node tools/ig-reels.js render <slug> <folder>   → buat video saja (uji/pratinjau; dari container font fallback)
//   node tools/ig-reels.js post [--slug=<slug>]     → buat + unggah + publikasikan 1 Reel (dijalankan .github/workflows/reels.yml)
// Pilihan listing: tampil & belum terjual, punya ≥2 foto di img/wm/<slug>/, belum pernah dibuatkan Reel.
// Urutan: yang carousel IG-nya paling lama tayang lebih dulu, lalu yang belum pernah tayang di IG.
// Video tidak disimpan di repo: diunggah langsung ke Instagram (unggahan resumable rupload.facebook.com).
// Status: tools/reels-state.json (posted, errors).
const fs = require("fs");
const path = require("path");
const os = require("os");
const { execFileSync } = require("child_process");

const ROOT = path.resolve(__dirname, "..");
const STATE = path.join(ROOT, "tools/reels-state.json");
const W = 1080, H = 1920, FPS = 30;
const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
const strip = (s) => s.replace(/<[^>]+>/g, "").replace(/&nbsp;/g, " ").replace(/&amp;/g, "&").replace(/\s+/g, " ").trim();
const wait = (ms) => new Promise((r) => setTimeout(r, ms));
const MARK = '<svg viewBox="0 0 120 120" aria-hidden="true"><path d="M12 100V86h6V72h6V58h6V44h6V30h6V18h12v82zM108 100V86h-6V72h-6V58h-6V44h-6V30h-6V18H66v82z" fill="#F6F2EA"/><circle cx="60" cy="44" r="7" fill="#D9A441"/><path d="M8 110q13-7 26 0t26 0 26 0 26 0" fill="none" stroke="#D9A441" stroke-width="6" stroke-linecap="round"/></svg>';

const photosOf = (slug) => {
  const d = path.join(ROOT, "img/wm", slug);
  return fs.existsSync(d) ? fs.readdirSync(d).filter((f) => /\.jpe?g$/i.test(f)).sort().slice(0, 3).map((f) => path.join(d, f)) : [];
};
function parse(l) {
  const prices = [...l.html.matchAll(/<div(?: class="([^"]*)")?><small>([\s\S]*?)<\/small><b>([\s\S]*?)<\/b><\/div>/g)].map((m) => ({ hl: /\bhl\b/.test(m[1] || ""), label: strip(m[2]), value: strip(m[3]) }));
  const specs = [...l.html.matchAll(/<dt>([\s\S]*?)<\/dt><dd>([\s\S]*?)<\/dd>/g)].map((m) => [strip(m[1]), strip(m[2])]);
  const main = prices.find((p) => p.hl) || prices[prices.length - 1] || null;
  return { prices, specs, main };
}

const FONTS = '<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,700;12..96,800&family=Figtree:wght@500;600;700&family=JetBrains+Mono:wght@500&display=swap">';
const BASE_CSS = `*{box-sizing:border-box;margin:0}body{width:${W}px;height:${H}px;overflow:hidden;background:#123F36;font-family:Figtree,"Segoe UI",Arial,sans-serif;color:#F6F2EA;position:relative}
.bg{position:absolute;inset:-60px;background:center/cover no-repeat;filter:blur(38px) brightness(.55) saturate(1.1)}
.ph{position:absolute;left:0;right:0;top:300px;height:900px;background:center/contain no-repeat;filter:drop-shadow(0 30px 60px rgba(0,0,0,.45))}
.top{position:absolute;left:64px;right:64px;top:120px;display:flex;justify-content:space-between;align-items:center}
.brand{display:flex;align-items:center;gap:18px;font:500 28px "JetBrains Mono",monospace;letter-spacing:.14em;text-transform:uppercase}
.brand svg{width:76px;height:76px}
.tag{background:#D9A441;color:#1C2421;font:700 28px Figtree,sans-serif;padding:14px 28px;border-radius:999px;text-transform:uppercase;letter-spacing:.06em}
.panel{position:absolute;left:64px;right:64px;top:1250px}
.loc{font:500 30px "JetBrains Mono",monospace;letter-spacing:.12em;text-transform:uppercase;color:#D9A441;margin-bottom:18px}
h1{font:800 70px/1.04 "Bricolage Grotesque",Arial,sans-serif;letter-spacing:-.01em;text-wrap:balance;margin-bottom:26px}
.price b{font:800 84px "Bricolage Grotesque",Arial,sans-serif;color:#F2C46B;display:block;line-height:1}
.price span{font-size:30px;color:#C9D6D3;display:block;margin-top:8px}
.chips{display:flex;flex-wrap:wrap;gap:16px}
.chips div{border:2.5px solid rgba(246,242,234,.4);border-radius:20px;padding:20px 28px;font-size:44px;font-weight:600;background:rgba(18,63,54,.55)}
.chips small{display:block;font-size:24px;color:#A9BDB7;text-transform:uppercase;letter-spacing:.06em;font-weight:500;margin-bottom:4px}`;

function frames(l, d, photos) {
  const pick = ["Luas tanah", "Luas bangunan", "Kamar tidur", "Sertifikat", "Legalitas", "ITR", "ITR / Zonasi", "Zonasi", "Zona", "Posisi", "View", "Hadap", "Lingkungan", "Kontur", "Kolam renang"];
  const specs = pick.map((k) => d.specs.find((s) => s[0] === k)).filter(Boolean);
  const top = (tag) => `<div class="top"><div class="brand">${MARK}<span>Bali Are Property</span></div>${tag ? `<div class="tag">${esc(tag)}</div>` : ""}</div>`;
  const uri = (p) => "data:image/jpeg;base64," + fs.readFileSync(p).toString("base64");
  const ph = (p) => { const u = uri(p); return `<div class="bg" style="background-image:url('${u}')"></div><div class="ph" style="background-image:url('${u}')"></div>`; };
  const chips = (arr) => `<div class="chips">${arr.map((s) => `<div><small>${esc(s[0])}</small>${esc(s[1])}</div>`).join("")}</div>`;
  const others = d.prices.filter((p) => p !== d.main).slice(0, 2);
  const out = [];
  out.push(`${ph(photos[0])}${top("DIJUAL")}<div class="panel"><div class="loc">📍 ${esc(l.eyebrow)} · Bali</div><h1>${esc(l.title)}</h1>${d.main ? `<div class="price"><b>${esc(d.main.value)}</b><span>${esc(d.main.label)}</span></div>` : ""}</div>`);
  const rest = photos.slice(1);
  const groups = [specs.slice(0, 2), specs.slice(2, 4)];
  rest.forEach((p, i) => {
    const g = groups[i] && groups[i].length ? groups[i] : others.map((o) => [o.label, o.value]);
    out.push(`${ph(p)}${top("")}<div class="panel">${chips(g.length ? g : [["Lokasi", l.eyebrow]])}</div>`);
  });
  out.push(`<div style="position:absolute;inset:0;background:radial-gradient(circle at 75% 20%,#1d5a4c,#123F36 65%)"></div>
<div style="position:absolute;left:64px;right:64px;top:0;bottom:0;display:flex;flex-direction:column;justify-content:center;gap:34px">
  <div class="brand" style="font-size:30px">${MARK.replace("<svg ", '<svg style="width:110px;height:110px" ')}<span>Bali Are Property</span></div>
  <div style="font:800 92px/1 'Bricolage Grotesque',Arial,sans-serif">Jadwalkan<br>survei lokasi</div>
  <div style="font-size:38px;color:#C9D6D3;line-height:1.35">${esc(l.title)}${d.main ? `<br><b style="color:#F2C46B">${esc(d.main.value)}</b>` : ""}</div>
  <div style="display:inline-flex;align-self:flex-start;align-items:center;gap:16px;background:#1A8D4A;color:#fff;padding:24px 38px;border-radius:999px;font:700 46px Figtree,sans-serif">WhatsApp +62 812 868 080</div>
  <div style="font:500 36px 'JetBrains Mono',monospace;letter-spacing:.06em;color:#D9A441">baliareproperty.com</div>
  <div style="font-size:30px;color:#A9BDB7">Foto lengkap & PDF: link di bio</div>
</div>`);
  return out;
}

async function render(l, dir) {
  const { chromium } = require("playwright");
  const photos = photosOf(l.slug);
  if (photos.length < 2) throw new Error("foto kurang dari 2");
  const d = parse(l);
  fs.mkdirSync(dir, { recursive: true });
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: W, height: H }, deviceScaleFactor: 1 });
  if (!process.env.GITHUB_ACTIONS) await page.route(/^https?:/, (r) => r.abort());
  const fr = frames(l, d, photos);
  const pngs = [];
  for (let i = 0; i < fr.length; i++) {
    await page.setContent(`<!doctype html><html><head><meta charset="utf-8">${FONTS}<style>${BASE_CSS}</style></head><body>${fr[i]}</body></html>`, { waitUntil: "load" });
    await page.evaluate(() => document.fonts.ready);
    await page.waitForTimeout(300);
    const f = path.join(dir, `f${i + 1}.png`);
    await page.screenshot({ path: f });
    pngs.push(f);
  }
  await browser.close();
  // Durasi per adegan: pembuka 4,5 dtk, foto 3 dtk, penutup 4 dtk; transisi fade 0,5 dtk
  const D = pngs.map((_, i) => (i === 0 ? 4.5 : i === pngs.length - 1 ? 4 : 3)), X = 0.5;
  const total = D.reduce((a, b) => a + b, 0) - X * (D.length - 1);
  const args = ["-y"];
  pngs.forEach((p) => args.push("-i", p));
  args.push("-f", "lavfi", "-t", String(total), "-i", "anullsrc=r=44100:cl=stereo");
  const parts = pngs.map((_, i) => {
    const n = Math.round(D[i] * FPS), last = i === pngs.length - 1;
    const z = last ? "1" : `1+0.07*on/${n}`; // zoom pelan 1 → 1,07 (penutup diam)
    return `[${i}:v]scale=${W * 2}:${H * 2},zoompan=z='${z}':x='iw/2-(iw/zoom/2)':y='ih/2-(ih/zoom/2)':d=${n}:s=${W}x${H}:fps=${FPS},format=yuv420p,setsar=1[v${i}]`;
  });
  let chain = "", prev = "v0", off = 0;
  for (let i = 1; i < pngs.length; i++) {
    off += D[i - 1] - X;
    chain += `;[${prev}][v${i}]xfade=transition=fade:duration=${X}:offset=${off.toFixed(2)}[x${i}]`;
    prev = "x" + i;
  }
  const outFile = path.join(dir, l.slug + ".mp4");
  args.push("-filter_complex", parts.join(";") + chain, "-map", `[${prev}]`, "-map", `${pngs.length}:a`,
    "-c:v", "libx264", "-profile:v", "high", "-preset", "medium", "-crf", "21", "-pix_fmt", "yuv420p", "-r", String(FPS),
    "-c:a", "aac", "-b:a", "128k", "-shortest", "-movflags", "+faststart", outFile);
  execFileSync("ffmpeg", args, { stdio: ["ignore", "ignore", "pipe"] });
  return { file: outFile, seconds: total, frames: pngs };
}

async function upload(file, cap, ig) {
  const { api, ready } = ig;
  const c = await api("POST", ig.igId + "/media", { media_type: "REELS", upload_type: "resumable", caption: cap, share_to_feed: "true" }, ig.token);
  const size = fs.statSync(file).size;
  const r = await fetch(c.uri || `https://rupload.facebook.com/ig-api-upload/v23.0/${c.id}`, { method: "POST",
    headers: { Authorization: "OAuth " + ig.token, offset: "0", file_size: String(size) }, body: fs.readFileSync(file) });
  const j = await r.json().catch(() => ({}));
  if (!r.ok || !j.success) throw new Error("Unggah video gagal: " + JSON.stringify(j).slice(0, 200));
  for (let i = 0; i < 30; i++) { // video diproses Instagram: tunggu s.d. ±5 menit
    try { await ready(c.id, ig.token); break; } catch (e) { if (!/belum siap/.test(e.message) || i === 29) throw e; }
    await wait(1000);
  }
  const pub = await api("POST", ig.igId + "/media_publish", { creation_id: c.id }, ig.token);
  let permalink = "";
  try { permalink = (await api("GET", pub.id, { fields: "permalink" }, ig.token)).permalink || ""; } catch (e) {}
  return { id: pub.id, permalink, at: new Date().toISOString() };
}

async function main() {
  const [cmd, a1, a2] = process.argv.slice(2);
  const IG = require("./ig-post.js");
  const all = IG.listings();
  if (cmd === "render") {
    const l = all.find((x) => x.slug === a1) || all.find((x) => photosOf(x.slug).length >= 2);
    const r = await render(l, path.resolve(a2 || "reels-preview"));
    console.log("video:", r.file, r.seconds + " dtk", (fs.statSync(r.file).size / 1e6).toFixed(1) + " MB");
    return;
  }
  if (cmd !== "post") { console.log("Pakai: node tools/ig-reels.js render <slug> <folder> | post [--slug=...]"); return; }
  const state = fs.existsSync(STATE) ? JSON.parse(fs.readFileSync(STATE, "utf8")) : {};
  state.posted = state.posted || {}; state.errors = state.errors || {};
  const save = () => fs.writeFileSync(STATE, JSON.stringify(state, null, 2) + "\n");
  if (!process.env.IG_TOKEN) { console.log("Secret IG_TOKEN belum diatur — Reels dilewati."); return; }
  const igState = JSON.parse(fs.readFileSync(path.join(ROOT, "tools/ig-state.json"), "utf8"));
  const want = (process.argv.find((x) => x.startsWith("--slug=")) || "").slice(7);
  const live = all.filter((l) => !l.hidden && !l.sold && photosOf(l.slug).length >= 2 && (want ? l.slug === want : !state.posted[l.slug]));
  const igAt = (s) => (igState.posted && igState.posted[s] && igState.posted[s].at) || "9999";
  live.sort((x, y) => igAt(x.slug).localeCompare(igAt(y.slug)));
  const l = live[0];
  if (!l) { console.log("Tidak ada listing baru untuk Reel."); return; }
  const { igId, token, username } = await IG.connect(igState, null);
  console.log("Akun Instagram: @" + username + " · Reel untuk " + l.slug);
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), "reel-"));
  try {
    const v = await render(l, dir);
    console.log("video", v.seconds + " dtk,", (fs.statSync(v.file).size / 1e6).toFixed(1) + " MB");
    const SEO = require("./seo-titles.js");
    const cap = IG.caption(l, SEO[l.slug]).replace(/^🏝️ /, "🎥 ");
    const r = await upload(v.file, cap, { igId, token, api: IG.api, ready: IG.ready });
    state.posted[l.slug] = r; delete state.errors[l.slug];
    console.log(`✓ Reel ${l.slug} → ${r.permalink || r.id}`);
  } catch (e) {
    console.log(`✗ ${l.slug}: ${e.message}`);
    state.errors[l.slug] = { msg: e.message.slice(0, 300), at: new Date().toISOString() };
    process.exitCode = 0;
  }
  save();
}

if (require.main === module) main().catch((e) => { console.error(e); process.exit(1); });
module.exports = { render };
