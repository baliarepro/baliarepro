// Carousel Instagram mingguan (Senin sore): "Berita Properti Bali Minggu Ini" dari tools/news-content.js.
// Bila 7 hari terakhir tidak ada berita baru → 1 topik edukasi aturan properti dari tools/ig-edu-content.js.
// Dijalankan oleh .github/workflows/instagram-weekly.yml:
//   node tools/ig-weekly.js render   → img/ig-weekly/<tanggal>/1..n.jpg + meta.json (butuh Playwright; font asli hanya di GitHub Actions)
//   node tools/ig-weekly.js post     → posting carousel yang sudah dirender & online (butuh secret IG_TOKEN)
//   node tools/ig-weekly.js preview  → render ke folder scratch (argumen ke-2) tanpa mengubah status, untuk cek tampilan
// Status: tools/ig-weekly-state.json { news: [slug], edu: [slug], posts: { <tanggal>: {kind, items, id, permalink} } }
const fs = require("fs");
const path = require("path");

const ROOT = path.resolve(__dirname, "..");
const STATE = path.join(ROOT, "tools/ig-weekly-state.json");
const OUTROOT = path.join(ROOT, "img/ig-weekly");
const W = 1080, H = 1350;
const BULAN = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];
const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
const cut = (s, n) => (s.length <= n ? s : s.slice(0, n - 1).replace(/[\s,;:.–-]+\S*$/, "") + "…");
const MARK = (c) => `<svg viewBox="0 0 120 120" aria-hidden="true"><path d="M12 100V86h6V72h6V58h6V44h6V30h6V18h12v82zM108 100V86h-6V72h-6V58h-6V44h-6V30h-6V18H66v82z" fill="${c}"/><circle cx="60" cy="44" r="7" fill="#D9A441"/><path d="M8 110q13-7 26 0t26 0 26 0 26 0" fill="none" stroke="#D9A441" stroke-width="7" stroke-linecap="round"/></svg>`;

// Tanggal WITA (UTC+8)
const wita = (ms) => new Date(ms + 8 * 3600e3).toISOString().slice(0, 10);
const tglIndo = (d) => { const [y, m, dd] = d.split("-").map(Number); return `${dd} ${BULAN[m - 1]} ${y}`; };
const loadState = () => { try { return JSON.parse(fs.readFileSync(STATE, "utf8")); } catch (e) { return {}; } };

// ---------- Pilih isi minggu ini ----------
function pick(state, now) {
  delete require.cache[require.resolve("./news-content.js")];
  const { NEWS } = require("./news-content.js");
  const { EDU } = require("./ig-edu-content.js");
  const since = wita(now - 7 * 864e5);
  const fresh = NEWS.filter((n) => n.date >= since && !(state.news || []).includes(n.slug)).slice(0, 3);
  if (fresh.length) return { kind: "news", items: fresh };
  const e = EDU.find((x) => !(state.edu || []).includes(x.slug));
  return e ? { kind: "edu", items: [e] } : null;
}

// Data slide berita: pakai field ig bila ada, selain itu dibuat dari isi berita
function newsSlide(n) {
  if (n.ig) return { ...n.ig, tag: n.id.tag };
  const ul = (n.id.body.find((b) => b.ul) || {}).ul || [];
  const ps = n.id.body.filter((b) => b.p).map((b) => b.p);
  return { tag: n.id.tag, stat: "", statL: "", h: cut(n.id.title, 90),
    pts: (ul.length ? ul : [n.id.summary]).slice(0, 3).map((x) => cut(x, 95)),
    arti: cut(ps[ps.length - 1] || n.id.summary, 150) };
}
const srcShort = (sources) => cut([...new Set(sources.map((s) => s.t.split(" – ")[0].trim()))].join(", "), 60);

// ---------- HTML slide ----------
const HEAD = `<!doctype html><html><head><meta charset="utf-8">
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,700;12..96,800&family=Figtree:wght@500;600;700&family=JetBrains+Mono:wght@500;600&display=swap">
<style>
*{box-sizing:border-box;margin:0;padding:0}
body{width:${W}px;height:${H}px;overflow:hidden;position:relative;font-family:Figtree,"DejaVu Sans",Arial,sans-serif}
.disp{font-family:"Bricolage Grotesque","DejaVu Sans",Arial,sans-serif}
.mono{font-family:"JetBrains Mono","DejaVu Sans Mono",monospace}
.top{position:absolute;left:64px;right:64px;top:56px;display:flex;justify-content:space-between;align-items:center}
.brand{display:flex;align-items:center;gap:14px;font-weight:600;font-size:22px;letter-spacing:.14em;text-transform:uppercase}
.brand svg{width:58px;height:58px}
.pg{font-size:22px;font-weight:600;opacity:.7}
.foot{position:absolute;left:64px;right:64px;bottom:52px;display:flex;justify-content:space-between;align-items:center;gap:24px;font-size:24px;font-weight:600}
.pill{display:inline-block;background:#D9A441;color:#1C2421;font-weight:700;font-size:22px;padding:10px 22px;border-radius:999px;text-transform:uppercase;letter-spacing:.06em}
</style></head><body>`;
const top = (color, i, n) => `<div class="top"><div class="brand mono" style="color:${color}">${MARK(color === "#123F36" ? "#123F36" : "#F6F2EA")}<span>Bali Are Property</span></div><div class="pg mono" style="color:${color}">${i}/${n}</div></div>`;

function coverHtml({ title, sub, list, foot, n }) {
  return HEAD + `<style>
body{background:radial-gradient(circle at 80% 15%,#1f5a4c,#123F36 60%);color:#F6F2EA}
.main{position:absolute;left:64px;right:64px;top:210px;bottom:150px;display:flex;flex-direction:column}
h1{font-weight:800;font-size:${title.length > 34 ? 80 : 92}px;line-height:1.02;letter-spacing:-.02em;text-wrap:balance}
.ed{font-size:28px;color:#C9D6D3;margin-top:48px}
ol{list-style:none;display:flex;flex-direction:column;gap:22px;margin-top:40px}
li{display:flex;gap:24px;align-items:flex-start;border-top:2px solid rgba(246,242,234,.18);padding-top:22px;font-weight:600;font-size:32px;line-height:1.25}
li b{font-weight:800;font-size:40px;color:#D9A441;min-width:56px;line-height:1}
.sw{color:#D9A441}
</style>${top("#F6F2EA", 1, n)}
<div class="main"><h1 class="disp">${esc(title)}</h1><div class="ed">${esc(sub)}</div>
<ol>${list.map((t, i) => `<li><b class="disp">0${i + 1}</b><span>${esc(t)}</span></li>`).join("")}</ol></div>
<div class="foot"><span>${esc(foot)}</span><span class="sw">Geser →</span></div></body></html>`;
}

function contentHtml(s, i, n, src, disclaimer) {
  return HEAD + `<style>
body{background:#F6F2EA;color:#1C2421}
.main{position:absolute;left:64px;right:64px;top:170px;bottom:340px;display:flex;flex-direction:column}
.stat{font-weight:800;font-size:${s.stat.length > 7 ? 112 : 128}px;line-height:1;color:#123F36;letter-spacing:-.03em;margin-top:30px}
.sl{font-weight:700;font-size:24px;color:#946410;text-transform:uppercase;letter-spacing:.06em;margin:12px 0 0 4px}
h2{font-weight:800;font-size:${s.h.length > 60 ? 44 : 50}px;line-height:1.12;letter-spacing:-.01em;margin-top:34px;text-wrap:balance}
ul{list-style:none;display:flex;flex-direction:column;gap:18px;margin-top:44px}
ul li{font-weight:500;font-size:28px;line-height:1.32;padding-left:36px;position:relative}
ul li:before{content:"";position:absolute;left:0;top:13px;width:16px;height:16px;border-radius:4px;background:#D9A441}
.arti{position:absolute;left:64px;right:64px;bottom:150px;background:#123F36;color:#F6F2EA;border-radius:24px;padding:28px 32px;font-weight:500;font-size:27px;line-height:1.35}
.arti b{display:block;color:#D9A441;font-size:21px;letter-spacing:.1em;margin-bottom:8px;font-weight:600}
.foot{font-size:20px;font-weight:500;color:#5b6662}
</style>${top("#123F36", i, n)}
<div class="main"><div><span class="pill">${esc(s.tag)}</span></div>
${s.stat ? `<div class="stat disp">${esc(s.stat)}</div>` : ""}${s.statL ? `<div class="sl">${esc(s.statL)}</div>` : ""}
<h2 class="disp">${esc(s.h)}</h2>
<ul>${s.pts.map((p) => `<li>${esc(p)}</li>`).join("")}</ul></div>
<div class="arti"><b class="mono">ARTINYA BAGI ANDA</b>${esc(s.arti)}</div>
<div class="foot"><span>Sumber: ${esc(src)}</span><span>${esc(disclaimer)}</span></div></body></html>`;
}

function ctaHtml(n) {
  return HEAD + `<style>
body{background:#123F36;color:#F6F2EA}
.big{position:absolute;left:64px;right:64px;top:290px;text-align:center}.big svg{width:180px;height:180px}
h2{font-weight:800;font-size:72px;line-height:1.08;margin-top:40px;letter-spacing:-.02em}
p{font-size:32px;line-height:1.4;color:#C9D6D3;margin-top:28px}
.btns{position:absolute;left:64px;right:64px;top:930px;display:flex;flex-direction:column;gap:22px;align-items:center}
.wa{background:#1A8D4A;color:#fff;font-weight:700;font-size:36px;padding:24px 44px;border-radius:999px}
.web{border:3px solid #D9A441;color:#D9A441;font-weight:700;font-size:32px;padding:20px 40px;border-radius:999px}
.foot{justify-content:center;opacity:.8;font-size:22px}
</style>${top("#F6F2EA", n, n)}
<div class="big">${MARK("#F6F2EA")}<h2 class="disp">Cari tanah atau villa di Bali?</h2><p>Listing terverifikasi di Ungasan, Jimbaran, Pecatu, Uluwatu &amp; sekitarnya. Konsultasi gratis.</p></div>
<div class="btns"><div class="wa">WhatsApp 0812 868 080</div><div class="web">baliareproperty.com</div></div>
<div class="foot">Simpan &amp; bagikan postingan ini · Update tiap minggu</div></body></html>`;
}

function slidesFor(sel, date) {
  if (sel.kind === "news") {
    const ss = sel.items.map(newsSlide), n = ss.length + 2;
    return [coverHtml({ title: "Berita Properti Bali Minggu Ini", sub: `Edisi ${tglIndo(date)} · ${ss.length} berita penting`, list: ss.map((s) => cut(s.h, 60)), foot: "baliareproperty.com/news", n }),
      ...ss.map((s, i) => contentHtml(s, i + 2, n, srcShort(sel.items[i].sources), "Bukan nasihat investasi")),
      ctaHtml(n)];
  }
  const e = sel.items[0], n = e.slides.length + 2;
  const disc = e.tag === "Pajak" ? "Bukan nasihat pajak" : "Bukan nasihat hukum";
  return [coverHtml({ title: e.title, sub: "Aturan properti yang perlu diketahui sebelum membeli di Bali", list: e.slides.map((s) => cut(s.h, 60)), foot: "baliareproperty.com", n }),
    ...e.slides.map((s, i) => contentHtml({ ...s, tag: e.tag }, i + 2, n, srcShort(e.sources), disc)),
    ctaHtml(n)];
}

// ---------- Caption ----------
// Maks. 5 hashtag (batas Instagram sejak Des 2025)
const TAGS = "#baliproperty #propertibali #balirealestate #investasibali #beritaproperti";
// Batas caption Instagram 2.200 karakter: bila terlalu panjang, ringkasan berita lalu judul EN/RU dibuang (tidak dipotong di tengah kalimat).
function captionFor(sel, date, lvl = 0) {
  const L = [];
  if (sel.kind === "news") {
    L.push(`📰 Berita Properti Bali Minggu Ini · Edisi ${tglIndo(date)}`, "", "Ringkasan untuk calon buyer & investor:", "");
    const num = ["1️⃣", "2️⃣", "3️⃣"];
    sel.items.forEach((n, i) => { L.push(lvl ? `${num[i]} ${n.id.title}` : `${num[i]} ${n.id.title}. ${n.id.summary}`); L.push(""); });
    const s0 = newsSlide(sel.items[0]);
    L.push(`💡 ${s0.arti}`, "");
    if (lvl < 2) {
      L.push("🇬🇧 Bali property news this week: " + sel.items.map((n) => n.en.title).join(" · "));
      L.push("🇷🇺 Новости недвижимости Бали за неделю: " + sel.items.map((n) => n.ru.title).join(" · "), "");
    }
    L.push("🔗 Baca lengkap: baliareproperty.com/news.html (link di bio)");
    L.push("Sumber: " + [...new Set(sel.items.flatMap((n) => n.sources.map((s) => s.t.split(" – ")[0].trim())))].join(", ") + ".");
    L.push("Ringkasan berita, bukan nasihat investasi.");
  } else {
    const e = sel.items[0];
    L.push(`📘 ${e.title}`, "", "Yang perlu diketahui calon pembeli properti di Bali:", "");
    e.slides.forEach((s) => { L.push(`▫️ ${s.h}: ${s.pts.join("; ")}.`); });
    L.push("", `💡 ${e.slides[0].arti}`, "", "🇬🇧 " + e.en, "🇷🇺 " + e.ru, "");
    L.push("Sumber: " + e.sources.map((s) => s.t).join("; ") + ".");
    L.push(e.note);
    L.push("", "🏡 Tanah & villa dijual di Bali: baliareproperty.com (link di bio)");
  }
  L.push("📩 Ada pertanyaan soal properti di Bali? DM kami atau WhatsApp Bagoes +62 812 868 080", "", TAGS);
  const c = L.join("\n");
  if (c.length > 2150 && lvl < 2 && sel.kind === "news") return captionFor(sel, date, lvl + 1);
  return c.length > 2150 ? c.slice(0, 2150) : c;
}

// ---------- Render ----------
async function render(sel, date, dir) {
  const { chromium } = require("playwright");
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: W, height: H }, deviceScaleFactor: 1 });
  await page.route(/^https?:/, (r) => (process.env.GITHUB_ACTIONS && /^https:\/\/fonts\.(googleapis|gstatic)\.com\//.test(r.request().url()) ? r.continue() : r.abort()));
  fs.rmSync(dir, { recursive: true, force: true });
  fs.mkdirSync(dir, { recursive: true });
  const slides = slidesFor(sel, date);
  for (let i = 0; i < slides.length; i++) {
    await page.setContent(slides[i], { waitUntil: "load" });
    await page.evaluate(() => document.fonts.ready.then(() => 0)).catch(() => {});
    await page.screenshot({ path: path.join(dir, i + 1 + ".jpg"), type: "jpeg", quality: 88 });
  }
  await browser.close();
  const meta = { date, kind: sel.kind, items: sel.items.map((x) => x.slug), images: slides.length, caption: captionFor(sel, date) };
  fs.writeFileSync(path.join(dir, "meta.json"), JSON.stringify(meta, null, 2) + "\n");
  return meta;
}

async function cmdRender() {
  const state = loadState(), now = Date.now(), date = wita(now);
  const posts = state.posts || {};
  const last = Object.keys(posts).sort().pop();
  if (last && date < wita(Date.parse(last) + 6 * 864e5)) { console.log("Carousel mingguan sudah diposting " + last + " — dilewati."); return; }
  const sel = pick(state, now);
  if (!sel) { console.log("Tidak ada berita baru dan topik edukasi sudah habis — tambahkan topik di tools/ig-edu-content.js."); return; }
  // Hapus folder lama yang sudah diposting (simpan 4 terakhir)
  if (fs.existsSync(OUTROOT)) fs.readdirSync(OUTROOT).sort().slice(0, -4).forEach((d) => posts[d] && fs.rmSync(path.join(OUTROOT, d), { recursive: true, force: true }));
  const meta = await render(sel, date, path.join(OUTROOT, date));
  console.log(`Carousel ${meta.kind} ${date}: ${meta.items.join(", ")} (${meta.images} slide)`);
}

async function cmdPost() {
  const state = loadState();
  state.news = state.news || []; state.edu = state.edu || []; state.posts = state.posts || {};
  if (!process.env.IG_TOKEN) { console.log("Secret IG_TOKEN belum diatur — posting dilewati."); return; }
  const pending = fs.existsSync(OUTROOT) ? fs.readdirSync(OUTROOT).sort().filter((d) => !state.posts[d] && fs.existsSync(path.join(OUTROOT, d, "meta.json"))) : [];
  if (!pending.length) { console.log("Tidak ada carousel mingguan yang menunggu."); return; }
  const date = pending[pending.length - 1];
  const meta = JSON.parse(fs.readFileSync(path.join(OUTROOT, date, "meta.json"), "utf8"));
  const { connect, api, ready, BASE } = require("./ig-post.js");
  const igState = JSON.parse(fs.readFileSync(path.join(ROOT, "tools/ig-state.json"), "utf8"));
  const { igId, token, username } = await connect(igState, null);
  console.log("Akun Instagram: @" + username);
  const urls = Array.from({ length: meta.images }, (_, i) => `${BASE}img/ig-weekly/${date}/${i + 1}.jpg`);
  // Tunggu gambar online di GitHub Pages (maks. ±20 menit)
  let online = false;
  for (let i = 0; i < 40 && !online; i++) {
    try { online = (await fetch(urls[urls.length - 1] + "?t=" + Date.now(), { method: "HEAD" })).ok; } catch (e) {}
    if (!online) await new Promise((r) => setTimeout(r, 30000));
  }
  if (!online) throw new Error("Gambar carousel belum online di " + urls[0]);
  const kids = [];
  for (const u of urls) kids.push((await api("POST", igId + "/media", { image_url: u, is_carousel_item: "true" }, token)).id);
  for (const k of kids) await ready(k, token);
  const creation = (await api("POST", igId + "/media", { media_type: "CAROUSEL", children: kids.join(","), caption: meta.caption }, token)).id;
  await ready(creation, token);
  const pub = await api("POST", igId + "/media_publish", { creation_id: creation }, token);
  let permalink = "";
  try { permalink = (await api("GET", pub.id, { fields: "permalink" }, token)).permalink || ""; } catch (e) {}
  state.posts[date] = { kind: meta.kind, items: meta.items, id: pub.id, permalink, at: new Date().toISOString() };
  state[meta.kind] = [...new Set([...state[meta.kind], ...meta.items])];
  delete state.error;
  fs.writeFileSync(STATE, JSON.stringify(state, null, 2) + "\n");
  console.log(`✓ Carousel ${meta.kind} ${date} → ${permalink || pub.id}`);
}

async function cmdPreview(out, which) {
  const state = loadState();
  let sel = pick(state, Date.now());
  if (which) {
    const { EDU } = require("./ig-edu-content.js");
    const e = EDU.find((x) => x.slug === which);
    if (e) sel = { kind: "edu", items: [e] };
  }
  const meta = await render(sel, wita(Date.now()), out);
  console.log(meta.caption);
}

const [cmd, a1, a2] = process.argv.slice(2);
const run = cmd === "render" ? cmdRender() : cmd === "post" ? cmdPost() : cmd === "preview" ? cmdPreview(a1, a2) : Promise.reject(new Error("Pakai: render | post | preview <folder> [slug-edu]"));
run.catch((e) => {
  console.error(e.message);
  if (cmd === "post") { const s = loadState(); s.error = { msg: e.message.slice(0, 300), at: new Date().toISOString() }; fs.writeFileSync(STATE, JSON.stringify(s, null, 2) + "\n"); }
  process.exit(1);
});
