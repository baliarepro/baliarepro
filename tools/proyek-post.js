// Posting proyek developer (tools/proyek-content.js) ke semua kanal — permintaan pemilik 24–25 Nov 2026.
//   node tools/proyek-post.js preview <slug> <folder>  → buat gambar saja ke folder (uji dari container; font fallback)
//   node tools/proyek-post.js render <slug>            → img/proyek-ig/<slug>/1..N.jpg (carousel 1080×1350) + story.jpg + meta.json (di-commit agar online)
//   node tools/proyek-post.js post <slug>              → Instagram carousel, Threads, Facebook Page, Telegram, Story IG + FB (yang belum tayang saja)
//   node tools/proyek-post.js reel <slug>              → Reel Instagram (+ salinan di $REEL_KEEP untuk tools/tiktok-post.js & tools/fb-reels.js, slug "proyek-<slug>")
// Dijalankan .github/workflows/proyek-post.yml (manual: Actions → "Posting proyek developer" → isi slug).
// Status: tools/proyek-post-state.json → posted[slug].{ig,th,fb,tg,story,fbStory,reel} = {id, permalink, at}; errors[slug:kanal].
// Aturan isi: lokasi hanya area (tanpa jalan/pantai/Maps/siteplan) → tanya via WhatsApp; ketersediaan hanya "Unit terbatas";
// tanpa kontak/rekening/website developer; proyeksi sewa diberi catatan bukan jaminan/nasihat investasi.
const fs = require("fs");
const path = require("path");
const os = require("os");
const { execFileSync } = require("child_process");

const ROOT = path.resolve(__dirname, "..");
const BASE = "https://baliareproperty.com/";
const STATE = path.join(ROOT, "tools/proyek-post-state.json");
const PJ = require("./proyek.js");
const R = require("./ig-reels.js");
const W = 1080, H = 1350;
const esc = R.esc;
const wait = (ms) => new Promise((r) => setTimeout(r, ms));
const now = () => new Date().toISOString();
const loadState = () => { const s = fs.existsSync(STATE) ? JSON.parse(fs.readFileSync(STATE, "utf8")) : {}; s.posted = s.posted || {}; s.errors = s.errors || {}; return s; };

function project(slug) {
  const p = PJ.PROJECTS.find((x) => x.slug === slug);
  if (!p) throw new Error("Proyek tidak ditemukan: " + slug);
  return p;
}
const photos = (p) => PJ.imagesOf(ROOT, p.slug).map((f) => path.join(ROOT, f));
const uri = (f) => "data:image/jpeg;base64," + fs.readFileSync(f).toString("base64");
const exVat = (c) => c.priceCol && /belum/i.test(c.priceCol);
const fromLabel = (p) => (p.id.apt ? "Apartemen mulai" : "Villa mulai");
const priceLine = (p) => `${fromLabel(p)} ${PJ.rpShort(p.priceFrom, "id")}${exVat(p.id) ? " (belum PPN)" : ""}`;
const pageUrl = (p) => `${BASE}proyek/${p.slug}.html`;

// ---------- Caption ----------
const AREA_TAG = { "kuta-utara": "#canggu", sanur: "#sanur" };
function caption(p, opts = {}) {
  const c = p.id, L = [];
  L.push(`🏗️ PROYEK BARU · ${p.name} – ${c.area.split(",")[0]} · ${priceLine(p)}`);
  L.push(c.card);
  L.push(`📍 ${c.area}, Bali · developer ${p.developer}`, "");
  p.rows.forEach((r) => L.push(`💰 ${c.rowNames[r.k]}${/KT/.test(c.rowNames[r.k]) ? "" : ` (${r.beds} KT)`}: ${r.status === "sold" ? "Terjual" : (typeof r.price === "object" ? r.price.id : r.price)}`));
  L.push(c.postNote || (exVat(c) ? "Harga peluncuran belum termasuk PPN 11%. Harga dapat berubah." : "Harga termasuk PPN, unit fully furnished. Harga dapat berubah."), "");
  ((c.feats && c.feats[0] && c.feats[0][1]) || []).slice(0, 4).forEach((x) => L.push(`✨ ${x}`));
  if (c.pay) L.push("", "💳 " + c.pay.slice(0, 3).map((s) => `${s[0]}: ${s[1].split(",")[0]}`).join(" · "));
  if (c.rental) L.push(`📈 Proyeksi sewa dari developer: villa ${c.rental.villa}; apartemen ${c.rental.apt} (proyeksi, bukan jaminan hasil & bukan nasihat investasi)`);
  L.push("", "🔒 Unit terbatas · price list lengkap, lokasi & jadwal show unit via WhatsApp");
  L.push("📩 DM atau WhatsApp Bagoes +62 812 868 080");
  L.push(opts.link ? `🔗 Detail proyek (3 bahasa): ${pageUrl(p)}` : "🔗 Detail proyek (3 bahasa): baliareproperty.com (link di bio)");
  L.push("", `🇬🇧 ${p.name} — ${p.en.tagline}. ${p.en.card}`, `🇷🇺 ${p.name} — ${p.ru.tagline}. ${p.ru.card}`);
  if (!opts.noTags) L.push("", ["#villabali", AREA_TAG[p.areaSlug] || "#bali", "#baliproperty", "#balirealestate", "#investasibali"].join(" "));
  let t = L.join("\n");
  return t.length > 2150 ? t.slice(0, 2150) : t;
}
function threadsText(p) {
  const c = p.id, bytes = (s) => Buffer.byteLength(s, "utf8");
  const head = `🏗️ PROYEK BARU · ${p.name} (${p.developer})\n📍 ${c.area}, Bali`;
  const tail = `\nDetail proyek: ${pageUrl(p)}\nWA Bagoes: +62 812 868 080`;
  const body = [`💰 ${priceLine(p)}`, c.card, "🔒 Unit terbatas · lokasi & price list via WhatsApp"];
  let lines = body.slice(); const join = () => [head, ...lines, tail].join("\n");
  while (lines.length && bytes(join()) > 500) lines.pop();
  return join();
}
function tgText(p) { let t = caption(p, { link: true, noTags: true }); if (t.length > 1024) { const cut = t.split("\n").filter((l) => !/^✨|^💳|^🇷🇺/.test(l)).join("\n"); t = cut.length > 1024 ? cut.slice(0, 1020) + "…" : cut; } return t; }

// ---------- Gambar ----------
const CSS = `*{box-sizing:border-box;margin:0}body{width:${W}px;height:${H}px;overflow:hidden;background:#123F36;font-family:Figtree,"Segoe UI",Arial,sans-serif;color:#F6F2EA;position:relative}
.full{position:absolute;inset:0;background:center/cover no-repeat}
.shade{position:absolute;inset:0;background:linear-gradient(180deg,rgba(10,30,25,.55) 0%,rgba(10,30,25,0) 26%,rgba(10,30,25,0) 42%,rgba(10,30,25,.92) 78%)}
.top{position:absolute;left:56px;right:56px;top:52px;display:flex;justify-content:space-between;align-items:center}
.brand{display:flex;align-items:center;gap:16px;font:500 24px "JetBrains Mono",monospace;letter-spacing:.14em;text-transform:uppercase}
.brand svg{width:64px;height:64px}
.tag{background:#D9A441;color:#1C2421;font:700 24px Figtree,sans-serif;padding:12px 24px;border-radius:999px;text-transform:uppercase;letter-spacing:.06em}
.low{position:absolute;left:56px;right:56px;bottom:64px}
.dev{font:500 24px "JetBrains Mono",monospace;letter-spacing:.14em;text-transform:uppercase;color:#E9C27A;margin-bottom:12px}
h1{font:800 112px/0.95 "Bricolage Grotesque",Arial,sans-serif;letter-spacing:-.02em;margin-bottom:14px}
h2{font:800 64px/1.02 "Bricolage Grotesque",Arial,sans-serif;letter-spacing:-.01em;margin-bottom:26px}
.sub{font-size:34px;line-height:1.3;color:#E6EDE9;margin-bottom:26px}
.price{display:flex;align-items:baseline;gap:18px;flex-wrap:wrap}
.price b{font:800 70px "Bricolage Grotesque",Arial,sans-serif;color:#F2C46B}
.price span{font-size:28px;color:#C9D6D3}
.pill{display:inline-block;margin-top:22px;border:2px solid rgba(246,242,234,.55);border-radius:999px;padding:10px 22px;font-size:26px;font-weight:600}
.corner{position:absolute;left:40px;bottom:40px;display:flex;align-items:center;gap:12px;background:rgba(18,63,54,.82);padding:12px 20px;border-radius:999px;font:500 20px "JetBrains Mono",monospace;letter-spacing:.12em;text-transform:uppercase}
.corner svg{width:38px;height:38px}
.cap{position:absolute;right:40px;bottom:40px;background:rgba(246,242,234,.92);color:#123F36;padding:12px 22px;border-radius:999px;font:700 24px Figtree,sans-serif}
.pad{position:absolute;inset:0;padding:120px 64px 70px;display:flex;flex-direction:column;background:radial-gradient(circle at 80% 10%,#1d5a4c,#123F36 60%)}
table{width:100%;border-collapse:collapse;font-size:32px}
td{padding:22px 0;border-bottom:2px solid rgba(246,242,234,.16);vertical-align:top}
td small{display:block;font-size:22px;color:#A9BDB7;margin-top:4px}
td.p{text-align:right;font-weight:700;color:#F2C46B;white-space:nowrap}
td.s{text-align:right;color:#A9BDB7}
.note{font-size:24px;color:#A9BDB7;margin-top:22px;line-height:1.35}
ul{list-style:none;padding:0;display:flex;flex-direction:column;gap:18px}
li{font-size:34px;padding-left:44px;position:relative;line-height:1.25}
li:before{content:"";position:absolute;left:0;top:13px;width:20px;height:20px;border-radius:50%;background:#D9A441}
.steps{display:grid;grid-template-columns:1fr 1fr;gap:14px;margin-top:auto}
.steps div{border:2px solid rgba(246,242,234,.25);border-radius:20px;padding:18px 20px;font-size:24px;color:#C9D6D3;line-height:1.3}
.steps b{display:block;color:#F6F2EA;font-size:28px;margin-bottom:4px}`;
const top = (tag) => `<div class="top"><div class="brand">${R.MARK}<span>Bali Are Property</span></div>${tag ? `<div class="tag">${esc(tag)}</div>` : ""}</div>`;

function slides(p) {
  const c = p.id, ph = photos(p), out = [];
  if (!ph.length) throw new Error("Foto proyek belum ada di img/proyek/" + p.slug);
  out.push(`<div class="full" style="background-image:url('${uri(ph[0])}')"></div><div class="shade"></div>${top("Proyek baru")}
<div class="low"><div class="dev">${esc(p.developer)} · ${esc(c.area)}</div><h1>${esc(p.name)}</h1><div class="sub">${esc(c.tagline)}</div>
<div class="price"><b>${esc(PJ.rpShort(p.priceFrom, "id"))}</b><span>${esc(fromLabel(p).toLowerCase())}${exVat(c) ? " · belum PPN" : c.priceTag != null ? c.priceTag : " · termasuk PPN"}</span></div><span class="pill">Unit terbatas</span></div>`);
  const labels = [c.stats ? c.stats[0] : null];
  ph.slice(1, 5).forEach((f, i) => {
    const st = (c.stats || [])[i];
    out.push(`<div class="full" style="background-image:url('${uri(f)}')"></div><div class="corner">${R.MARK}<span>${esc(p.name)}</span></div>${st ? `<div class="cap">${esc(st[0])} · ${esc(st[1])}</div>` : ""}`);
  });
  out.push(`<div class="pad">${top("")}<div class="dev" style="margin-top:20px">${esc(p.name)} · ${esc(c.area)}</div><h2>Tipe unit & harga</h2>
<table>${p.rows.map((r) => `<tr><td><b>${esc(c.rowNames[r.k])}</b><small>${esc(r.beds)} kamar tidur · ${esc(r.size)}</small></td>${r.status === "sold" ? '<td class="s">Terjual</td>' : `<td class="p">${esc(typeof r.price === "object" ? r.price.id : r.price)}</td>`}</tr>`).join("")}</table>
<div class="note">${esc(c.postNote || ((exVat(c) ? "Harga peluncuran dari price list developer, belum termasuk PPN 11%." : "Harga termasuk PPN, unit fully furnished.") + " Harga dapat berubah."))} Unit terbatas.</div></div>`);
  const feats = ((c.feats && c.feats[0] && c.feats[0][1]) || []).slice(0, 5);
  out.push(`<div class="pad">${top("")}<div class="dev" style="margin-top:20px">${esc(p.name)}</div><h2>${esc(c.feats ? c.feats[0][0] : "Fasilitas")}</h2>
<ul>${feats.map((x) => `<li>${esc(x)}</li>`).join("")}</ul>
${c.pay ? `<div class="steps">${c.pay.slice(0, 4).map((s) => `<div><b>${esc(s[0])}</b>${esc(s[1].split("(")[0].trim())}</div>`).join("")}</div>` : ""}</div>`);
  out.push(`<div class="pad" style="justify-content:center;gap:30px">${top("")}
<div style="font:800 86px/1 'Bricolage Grotesque',Arial,sans-serif">Minta price list,<br>brosur & lokasi</div>
<div style="font-size:36px;color:#C9D6D3;line-height:1.35">${esc(p.name)} · ${esc(c.area)}<br><b style="color:#F2C46B">${esc(priceLine(p))}</b></div>
<div style="display:inline-flex;align-self:flex-start;background:#1A8D4A;color:#fff;padding:22px 36px;border-radius:999px;font:700 42px Figtree,sans-serif">WhatsApp +62 812 868 080</div>
<div style="font:500 32px 'JetBrains Mono',monospace;letter-spacing:.06em;color:#D9A441">baliareproperty.com/proyek</div>
<div style="font-size:28px;color:#A9BDB7">Unit terbatas · jadwal show unit didampingi Bali Are Property</div></div>`);
  return out;
}
function storyHtml(p) {
  const c = p.id, ph = photos(p)[0], u = uri(ph);
  const facts = (c.stats || []).slice(0, 3).map((s) => `${s[0]} ${s[1]}`);
  return `<!doctype html><html><head><meta charset="utf-8">${R.FONTS}<style>${R.BASE_CSS}
.top{top:150px}.ph{top:300px;height:740px}.panel{top:1080px}h1{font-size:96px;margin-bottom:14px}.sub2{font-size:36px;color:#E6EDE9;margin-bottom:22px}
.price b{font-size:78px}.facts{display:flex;flex-wrap:wrap;gap:12px;margin-top:24px}
.facts span{white-space:nowrap;border:2px solid rgba(246,242,234,.35);border-radius:16px;padding:12px 20px;font-size:28px;font-weight:600;background:rgba(18,63,54,.55)}
.cta{position:absolute;left:64px;right:64px;bottom:200px;display:flex;flex-direction:column;align-items:flex-start;gap:14px}
.cta .wa{background:#1A8D4A;color:#fff;font:700 40px Figtree,sans-serif;padding:20px 34px;border-radius:999px}.cta .web{font:500 30px "JetBrains Mono",monospace;color:#D9A441}
</style></head><body><div class="bg" style="background-image:url('${u}')"></div><div class="ph" style="background-image:url('${u}')"></div>
<div class="top"><div class="brand">${R.MARK}<span>Bali Are Property</span></div><div class="tag">Proyek baru</div></div>
<div class="panel"><div class="loc">${esc(p.developer)} · ${esc(c.area)}</div><h1>${esc(p.name)}</h1><div class="sub2">${esc(c.tagline)}</div>
<div class="price"><b>${esc(PJ.rpShort(p.priceFrom, "id"))}</b><span>${esc(fromLabel(p).toLowerCase())}${exVat(c) ? " · belum PPN" : ""} · unit terbatas</span></div>
<div class="facts">${facts.map((f) => `<span>${esc(f)}</span>`).join("")}</div></div>
<div class="cta"><div class="wa">DM / WA +62 812 868 080</div><div class="web">baliareproperty.com · link di bio</div></div></body></html>`;
}

async function renderAll(p, dir) {
  const { chromium } = require("playwright");
  fs.mkdirSync(dir, { recursive: true });
  fs.readdirSync(dir).forEach((f) => fs.rmSync(path.join(dir, f), { force: true }));
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: W, height: H }, deviceScaleFactor: 1 });
  if (!process.env.GITHUB_ACTIONS) await page.route(/^https?:/, (r) => r.abort());
  const sl = slides(p);
  for (let i = 0; i < sl.length; i++) {
    await page.setContent(`<!doctype html><html><head><meta charset="utf-8">${R.FONTS}<style>${CSS}</style></head><body>${sl[i]}</body></html>`, { waitUntil: "load" });
    await page.evaluate(() => document.fonts.ready).catch(() => {});
    await page.waitForTimeout(250);
    await page.screenshot({ path: path.join(dir, `${i + 1}.jpg`), type: "jpeg", quality: 88 });
  }
  await page.setViewportSize({ width: R.W, height: R.H });
  await page.setContent(storyHtml(p), { waitUntil: "load" });
  await page.evaluate(() => document.fonts.ready).catch(() => {});
  await page.waitForTimeout(250);
  await page.screenshot({ path: path.join(dir, "story.jpg"), type: "jpeg", quality: 88 });
  await browser.close();
  const meta = { slug: p.slug, images: sl.length, story: "story.jpg", caption: caption(p), v: Date.now().toString(36) };
  fs.writeFileSync(path.join(dir, "meta.json"), JSON.stringify(meta, null, 2) + "\n");
  return meta;
}

// ---------- Reel ----------
async function renderReel(p, dir) {
  const { chromium } = require("playwright");
  const c = p.id, ph = photos(p).slice(0, 4);
  if (ph.length < 2) throw new Error("foto proyek kurang dari 2");
  const top2 = (tag) => `<div class="top"><div class="brand">${R.MARK}<span>Bali Are Property</span></div>${tag ? `<div class="tag">${esc(tag)}</div>` : ""}</div>`;
  const bg = (f) => { const u = uri(f); return `<div class="bg" style="background-image:url('${u}')"></div><div class="ph" style="background-image:url('${u}')"></div>`; };
  const st = c.stats || [];
  const fr = [`${bg(ph[0])}${top2("Proyek baru")}<div class="panel"><div class="loc">${esc(p.developer)} · ${esc(c.area)}</div><h1 style="font-size:110px">${esc(p.name)}</h1><div class="price"><b>${esc(PJ.rpShort(p.priceFrom, "id"))}</b><span>${esc(fromLabel(p).toLowerCase())}${exVat(c) ? " · belum PPN" : ""}</span></div></div>`];
  ph.slice(1).forEach((f, i) => {
    const g = st.slice(i * 2, i * 2 + 2);
    fr.push(`${bg(f)}${top2("")}<div class="panel"><div class="chips">${(g.length ? g : [[c.area, "Bali"]]).map((s) => `<div><small>${esc(s[1])}</small>${esc(s[0])}</div>`).join("")}</div></div>`);
  });
  fr.push(`<div style="position:absolute;inset:0;background:radial-gradient(circle at 75% 20%,#1d5a4c,#123F36 65%)"></div>
<div style="position:absolute;left:64px;right:64px;top:0;bottom:0;display:flex;flex-direction:column;justify-content:center;gap:34px">
<div class="brand" style="font-size:30px">${R.MARK.replace("<svg ", '<svg style="width:110px;height:110px" ')}<span>Bali Are Property</span></div>
<div style="font:800 88px/1 'Bricolage Grotesque',Arial,sans-serif">Minta price list<br>& jadwal show unit</div>
<div style="font-size:38px;color:#C9D6D3;line-height:1.35">${esc(p.name)} · ${esc(c.area)}<br><b style="color:#F2C46B">${esc(priceLine(p))}</b><br>Unit terbatas</div>
<div style="display:inline-flex;align-self:flex-start;background:#1A8D4A;color:#fff;padding:24px 38px;border-radius:999px;font:700 46px Figtree,sans-serif">WhatsApp +62 812 868 080</div>
<div style="font:500 36px 'JetBrains Mono',monospace;color:#D9A441">baliareproperty.com</div></div>`);
  fs.mkdirSync(dir, { recursive: true });
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: R.W, height: R.H }, deviceScaleFactor: 1 });
  if (!process.env.GITHUB_ACTIONS) await page.route(/^https?:/, (r) => r.abort());
  const pngs = [];
  for (let i = 0; i < fr.length; i++) {
    await page.setContent(`<!doctype html><html><head><meta charset="utf-8">${R.FONTS}<style>${R.BASE_CSS}</style></head><body>${fr[i]}</body></html>`, { waitUntil: "load" });
    await page.evaluate(() => document.fonts.ready).catch(() => {});
    await page.waitForTimeout(250);
    const f = path.join(dir, `f${i + 1}.png`); await page.screenshot({ path: f }); pngs.push(f);
  }
  await browser.close();
  const FPS = 30, D = pngs.map((_, i) => (i === 0 ? 4.5 : i === pngs.length - 1 ? 4 : 3)), X = 0.5;
  const total = D.reduce((a, b) => a + b, 0) - X * (D.length - 1);
  const tracksDir = path.join(ROOT, "audio/reels");
  const tracks = fs.existsSync(tracksDir) ? fs.readdirSync(tracksDir).filter((f) => /\.(mp3|m4a|aac|wav)$/i.test(f)).sort().map((f) => path.join(tracksDir, f)) : [];
  const track = tracks.length ? tracks[Math.floor(Date.now() / 864e5) % tracks.length] : null;
  const args = ["-y"]; pngs.forEach((f) => args.push("-i", f));
  if (track) args.push("-stream_loop", "-1", "-i", track); else args.push("-f", "lavfi", "-t", String(total), "-i", "anullsrc=r=44100:cl=stereo");
  const afx = track ? `;[${pngs.length}:a]atrim=0:${total},asetpts=N/SR/TB,afade=t=in:d=0.6,afade=t=out:st=${(total - 1.8).toFixed(2)}:d=1.8,volume=0.85,aresample=44100[aud]` : "";
  const parts = pngs.map((_, i) => { const n = Math.round(D[i] * FPS), z = i === pngs.length - 1 ? "1" : `1+0.07*on/${n}`;
    return `[${i}:v]scale=${R.W * 2}:${R.H * 2},zoompan=z='${z}':x='iw/2-(iw/zoom/2)':y='ih/2-(ih/zoom/2)':d=${n}:s=${R.W}x${R.H}:fps=${FPS},format=yuv420p,setsar=1[v${i}]`; });
  let chain = "", prev = "v0", off = 0;
  for (let i = 1; i < pngs.length; i++) { off += D[i - 1] - X; chain += `;[${prev}][v${i}]xfade=transition=fade:duration=${X}:offset=${off.toFixed(2)}[x${i}]`; prev = "x" + i; }
  const out = path.join(dir, p.slug + ".mp4");
  args.push("-filter_complex", parts.join(";") + chain + afx, "-map", `[${prev}]`, "-map", track ? "[aud]" : `${pngs.length}:a`,
    "-c:v", "libx264", "-profile:v", "high", "-preset", "medium", "-crf", "21", "-pix_fmt", "yuv420p", "-r", String(FPS), "-c:a", "aac", "-b:a", "128k", "-shortest", "-movflags", "+faststart", out);
  execFileSync("ffmpeg", args, { stdio: ["ignore", "ignore", "pipe"] });
  return { file: out, seconds: total, track: track ? path.basename(track) : null };
}

// ---------- Posting ----------
async function online(url, tries = 40) {
  for (let i = 0; i < tries; i++) {
    try { if ((await fetch(url + "?t=" + Date.now(), { method: "HEAD" })).ok) return true; } catch (e) {}
    await wait(30000);
  }
  return false;
}
async function post(p) {
  const state = loadState(), S = (state.posted[p.slug] = state.posted[p.slug] || {});
  const save = () => fs.writeFileSync(STATE, JSON.stringify(state, null, 2) + "\n");
  const meta = JSON.parse(fs.readFileSync(path.join(ROOT, "img/proyek-ig", p.slug, "meta.json"), "utf8"));
  const dirUrl = `${BASE}img/proyek-ig/${p.slug}/`, q = "?v=" + meta.v;
  const urls = Array.from({ length: meta.images }, (_, i) => `${dirUrl}${i + 1}.jpg${q}`);
  if (!(await online(`${dirUrl}${meta.images}.jpg`)) || !(await online(`${dirUrl}story.jpg`, 4))) throw new Error("Gambar proyek belum online di " + dirUrl);
  const fail = (k, e) => { console.log(`✗ ${k}: ${e.message}`); state.errors[p.slug + ":" + k] = { msg: e.message.slice(0, 300), at: now() }; };
  const okk = (k, r) => { S[k] = r; delete state.errors[p.slug + ":" + k]; console.log(`✓ ${k} → ${r.permalink || r.id}`); save(); };
  const IG = require("./ig-post.js");
  let ig = null;
  if (process.env.IG_TOKEN) {
    try { ig = await IG.connect(JSON.parse(fs.readFileSync(path.join(ROOT, "tools/ig-state.json"), "utf8")), null); console.log("Instagram @" + ig.username); } catch (e) { fail("ig", e); }
  }
  // Instagram carousel
  if (ig && !S.ig) {
    try {
      const kids = [];
      for (const u of urls) kids.push((await IG.api("POST", ig.igId + "/media", { image_url: u, is_carousel_item: "true" }, ig.token)).id);
      for (const k of kids) await IG.ready(k, ig.token);
      const cr = (await IG.api("POST", ig.igId + "/media", { media_type: "CAROUSEL", children: kids.join(","), caption: caption(p) }, ig.token)).id;
      await IG.ready(cr, ig.token);
      const pub = await IG.api("POST", ig.igId + "/media_publish", { creation_id: cr }, ig.token);
      let permalink = ""; try { permalink = (await IG.api("GET", pub.id, { fields: "permalink" }, ig.token)).permalink || ""; } catch (e) {}
      okk("ig", { id: pub.id, permalink, at: now() });
    } catch (e) { fail("ig", e); }
  }
  // Threads
  if (process.env.THREADS_TOKEN && !S.th) {
    try {
      const TH = require("./threads-post.js"), ts = TH.read("tools/threads-state.json", {});
      const token = (ts.token && TH.dec(ts.token)) || process.env.THREADS_TOKEN;
      const me = await TH.api("GET", "me", { fields: "id" }, token);
      const kids = [];
      for (const u of urls) kids.push((await TH.api("POST", me.id + "/threads", { media_type: "IMAGE", image_url: u, is_carousel_item: "true" }, token)).id);
      for (const k of kids) await TH.ready(k, token);
      const cr = (await TH.api("POST", me.id + "/threads", { media_type: "CAROUSEL", children: kids.join(","), text: threadsText(p), topic_tag: "Bali" }, token)).id;
      await TH.ready(cr, token);
      const pub = await TH.api("POST", me.id + "/threads_publish", { creation_id: cr }, token);
      let permalink = ""; try { permalink = (await TH.api("GET", pub.id, { fields: "permalink" }, token)).permalink || ""; } catch (e) {}
      okk("th", { id: pub.id, permalink, at: now() });
    } catch (e) { fail("th", e); }
  }
  // Facebook Page (multi-foto) + Story Halaman
  let FB = null, pg = null;
  if (process.env.FB_PAGE_TOKEN || process.env.IG_TOKEN) { try { FB = require("./fb-post.js"); pg = await FB.page(); } catch (e) { fail("fb", e); } }
  if (pg && !S.fb) {
    try {
      const ids = [];
      for (const u of urls.slice(0, 10)) ids.push((await FB.api("POST", pg.id + "/photos", { url: u, published: "false" }, pg.token)).id);
      const params = { message: caption(p, { link: true }) };
      ids.forEach((id, i) => { params[`attached_media[${i}]`] = JSON.stringify({ media_fbid: id }); });
      const r = await FB.api("POST", pg.id + "/feed", params, pg.token);
      let permalink = ""; try { permalink = (await FB.api("GET", r.id, { fields: "permalink_url" }, pg.token)).permalink_url || ""; } catch (e) {}
      okk("fb", { id: r.id, permalink, at: now() });
    } catch (e) { fail("fb", e); }
  }
  // Telegram
  if (process.env.TELEGRAM_BOT_TOKEN && !S.tg) {
    try {
      const chat = process.env.TELEGRAM_CHAT || "@baliareproperty";
      const media = urls.slice(0, 10).map((u, i) => ({ type: "photo", media: u, ...(i === 0 ? { caption: tgText(p) } : {}) }));
      const r = await fetch(`https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/sendMediaGroup`, { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify({ chat_id: chat, media }) });
      const j = await r.json();
      if (!j.ok) throw new Error(j.description || "Telegram gagal");
      const m = j.result[0], user = (m.chat && m.chat.username) || chat.replace(/^@/, "");
      okk("tg", { id: m.message_id, permalink: `https://t.me/${user}/${m.message_id}`, at: now() });
    } catch (e) { fail("tg", e); }
  }
  // Story Instagram + Facebook
  const storyUrl = `${dirUrl}story.jpg${q}`;
  if (ig && !S.story) {
    try {
      const cr = (await IG.api("POST", ig.igId + "/media", { image_url: storyUrl, media_type: "STORIES" }, ig.token)).id;
      await IG.ready(cr, ig.token);
      const pub = await IG.api("POST", ig.igId + "/media_publish", { creation_id: cr }, ig.token);
      okk("story", { id: pub.id, permalink: "https://www.instagram.com/stories/bali.are/", at: now() });
    } catch (e) { fail("story", e); }
  }
  if (pg && !S.fbStory) {
    try {
      const photo = (await FB.api("POST", pg.id + "/photos", { url: storyUrl, published: "false" }, pg.token)).id;
      const r = await FB.api("POST", pg.id + "/photo_stories", { photo_id: photo }, pg.token);
      okk("fbStory", { id: r.post_id || r.id || photo, at: now() });
    } catch (e) { fail("fbStory", e); }
  }
  save();
  return S;
}

async function reel(p) {
  const state = loadState(), S = (state.posted[p.slug] = state.posted[p.slug] || {});
  const save = () => fs.writeFileSync(STATE, JSON.stringify(state, null, 2) + "\n");
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), "pjreel-"));
  const v = await renderReel(p, dir);
  console.log("video", v.seconds + " dtk,", (fs.statSync(v.file).size / 1e6).toFixed(1) + " MB");
  const cap = caption(p).replace(/^🏗️ /, "🎥 ");
  if (process.env.REEL_KEEP) {
    fs.mkdirSync(process.env.REEL_KEEP, { recursive: true });
    fs.copyFileSync(v.file, path.join(process.env.REEL_KEEP, "reel.mp4"));
    // caption dengan link langsung (Facebook Reels & TikTok tidak memakai "link di bio")
    fs.writeFileSync(path.join(process.env.REEL_KEEP, "reel.json"), JSON.stringify({ slug: "proyek-" + p.slug, caption: caption(p, { link: true }).replace(/^🏗️ /, "🎥 ") }));
  }
  if (S.reel) { console.log("Reel Instagram sudah ada."); return; }
  if (!process.env.IG_TOKEN) { console.log("IG_TOKEN belum ada — Reel Instagram dilewati."); return; }
  const IG = require("./ig-post.js");
  try {
    const ig = await IG.connect(JSON.parse(fs.readFileSync(path.join(ROOT, "tools/ig-state.json"), "utf8")), null);
    const r = await R.upload(v.file, cap, { igId: ig.igId, token: ig.token, api: IG.api, ready: IG.ready });
    S.reel = { ...r, music: v.track }; delete state.errors[p.slug + ":reel"];
    console.log(`✓ reel → ${r.permalink || r.id}`);
  } catch (e) { console.log(`✗ reel: ${e.message}`); state.errors[p.slug + ":reel"] = { msg: e.message.slice(0, 300), at: now() }; }
  save();
}

async function main() {
  const [cmd, slug, out] = process.argv.slice(2);
  const p = project(slug || "");
  if (cmd === "preview") { const m = await renderAll(p, path.resolve(out || "proyek-preview")); console.log(m.images + " slide + story →", path.resolve(out || "proyek-preview")); console.log(m.caption); console.log("---TH---\n" + threadsText(p)); return; }
  if (cmd === "render") { const m = await renderAll(p, path.join(ROOT, "img/proyek-ig", p.slug)); console.log(m.images + " slide + story dibuat untuk " + p.slug); return; }
  if (cmd === "post") { await post(p); return; }
  if (cmd === "reel") { await reel(p); return; }
  if (cmd === "reelpreview") { const v = await renderReel(p, path.resolve(out || "reel-preview")); console.log(v.file, v.seconds); return; }
  console.log("Pakai: preview|render|post|reel <slug>");
}

module.exports = { caption, threadsText, tgText };
if (require.main === module) main().catch((e) => { console.error(e.message); process.exit(1); });
