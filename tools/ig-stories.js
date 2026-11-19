// Instagram Stories otomatis (1080×1920) untuk listing yang tampil & belum terjual.
// Dijalankan .github/workflows/stories.yml 2x sehari (±10.07 & 16.07 WITA):
//   node tools/ig-stories.js render  → pilih listing berikutnya, buat img/ig-story/<slug>.jpg + img/ig-story/next.json (di-commit agar online di GitHub Pages)
//   node tools/ig-stories.js post    → tunggu gambar online, posting sebagai Story (media_type=STORIES), catat di tools/stories-state.json
//   node tools/ig-stories.js preview <slug> <folder>  → cek tampilan dari container (font fallback)
// Urutan: listing yang carousel IG-nya tayang ≤3 hari lalu & belum pernah di-Story didahulukan; lalu yang Story terakhirnya paling lama.
// Story tidak bisa diberi stiker link lewat API → ajakan DM/WA + "link di bio". Butuh secret IG_TOKEN (sama dengan carousel).
// Gambar yang sama juga diposting sebagai Story Halaman Facebook (photo_stories; token seperti fb-post.js) → state.fb / state.fbErrors.
const fs = require("fs");
const path = require("path");
const ROOT = path.resolve(__dirname, "..");
const STATE = path.join(ROOT, "tools/stories-state.json");
const OUT = path.join(ROOT, "img/ig-story");
const R = require("./ig-reels.js");
const wait = (ms) => new Promise((r) => setTimeout(r, ms));

const loadState = () => { const s = fs.existsSync(STATE) ? JSON.parse(fs.readFileSync(STATE, "utf8")) : {}; s.posted = s.posted || {}; s.errors = s.errors || {}; return s; };

function pick(state, all, want) {
  const ig = JSON.parse(fs.readFileSync(path.join(ROOT, "tools/ig-state.json"), "utf8"));
  const live = all.filter((l) => !l.hidden && !l.sold && R.photosOf(l.slug).length >= 1 && (!want || l.slug === want));
  if (want) return live[0] || null;
  const now = Date.now(), last = (s) => { const a = state.posted[s]; return a && a.length ? Date.parse(a[a.length - 1].at) : 0; };
  const fresh = live.filter((l) => !last(l.slug) && ig.posted[l.slug] && now - Date.parse(ig.posted[l.slug].at) < 3 * 864e5);
  if (fresh.length) return fresh.sort((a, b) => ig.posted[b.slug].at.localeCompare(ig.posted[a.slug].at))[0];
  return live.sort((a, b) => last(a.slug) - last(b.slug) || ((ig.posted[a.slug] || {}).at || "").localeCompare((ig.posted[b.slug] || {}).at || ""))[0] || null;
}

function html(l) {
  const d = R.parse(l), ph = R.photosOf(l.slug)[0];
  const u = "data:image/jpeg;base64," + fs.readFileSync(ph).toString("base64");
  const fmt = { "Luas tanah": (v) => "tanah " + v, "Luas bangunan": (v) => "bangunan " + v, "Kamar tidur": (v) => v + " KT", "Sertifikat": (v) => v, "Zona": (v) => "zona " + v.toLowerCase(), "ITR": (v) => "ITR " + v };
  const specs = Object.keys(fmt).map((k) => { const x = d.specs.find((s) => s[0] === k); return x && fmt[k](x[1].replace(/ \(.*\)/, "")); })
    .filter((v) => v && v.length <= 28).slice(0, 3);
  const isNew = /tersedia|baru/i;
  return `<!doctype html><html><head><meta charset="utf-8">${R.FONTS}<style>${R.BASE_CSS}
.top{top:150px}.ph{top:300px;height:740px}
.panel{top:1080px}
h1{font-size:${l.title.length > 48 ? 58 : 66}px;margin-bottom:22px}
.price b{font-size:78px}
.facts{display:flex;flex-wrap:nowrap;overflow:hidden;gap:12px;margin-top:26px}
.facts span{white-space:nowrap;border:2px solid rgba(246,242,234,.35);border-radius:16px;padding:12px 20px;font-size:30px;font-weight:600;background:rgba(18,63,54,.55)}
.cta{position:absolute;left:64px;right:64px;bottom:210px;display:flex;flex-direction:column;align-items:flex-start;gap:14px}
.cta .wa{background:#1A8D4A;color:#fff;font:700 40px Figtree,sans-serif;padding:20px 34px;border-radius:999px}
.cta .web{font:500 30px "JetBrains Mono",monospace;color:#D9A441;letter-spacing:.04em}
</style></head><body>
<div class="bg" style="background-image:url('${u}')"></div><div class="ph" style="background-image:url('${u}')"></div>
<div class="top"><div class="brand">${R.MARK}<span>Bali Are Property</span></div><div class="tag">Dijual</div></div>
<div class="panel"><div class="loc">📍 ${R.esc(l.eyebrow)} · Bali</div><h1>${R.esc(l.title)}</h1>
${d.main ? `<div class="price"><b>${R.esc(d.main.value)}</b><span>${R.esc(d.main.label)}</span></div>` : ""}
${specs.length ? `<div class="facts">${specs.map((s) => `<span>${R.esc(s)}</span>`).join("")}</div>` : ""}</div>
<div class="cta"><div class="wa">DM / WA +62 812 868 080</div><div class="web">baliareproperty.com · link di bio</div></div>
</body></html>`;
}

async function renderTo(l, file) {
  const { chromium } = require("playwright");
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: R.W, height: R.H }, deviceScaleFactor: 1 });
  if (!process.env.GITHUB_ACTIONS) await page.route(/^https?:/, (r) => r.abort());
  await page.setContent(html(l), { waitUntil: "load" });
  await page.evaluate(() => document.fonts.ready).catch(() => {});
  await page.waitForTimeout(300);
  fs.mkdirSync(path.dirname(file), { recursive: true });
  await page.screenshot({ path: file, type: "jpeg", quality: 88 });
  await browser.close();
}

async function main() {
  const [cmd, a1, a2] = process.argv.slice(2);
  const IG = require("./ig-post.js");
  const all = IG.listings();
  if (cmd === "preview") {
    const l = all.find((x) => x.slug === a1) || pick(loadState(), all);
    const f = path.resolve(a2 || ".", l.slug + "-story.jpg");
    await renderTo(l, f); console.log("story:", f); return;
  }
  if (cmd === "render") {
    const state = loadState();
    const want = (process.argv.find((x) => x.startsWith("--slug=")) || "").slice(7);
    const l = pick(state, all, want);
    if (!l) { console.log("Tidak ada listing untuk Story."); return; }
    // simpan hanya gambar Story terbaru (folder kecil)
    if (fs.existsSync(OUT)) fs.readdirSync(OUT).forEach((f) => fs.rmSync(path.join(OUT, f), { force: true }));
    const name = l.slug + "-" + Date.now().toString(36) + ".jpg";
    await renderTo(l, path.join(OUT, name));
    fs.writeFileSync(path.join(OUT, "next.json"), JSON.stringify({ slug: l.slug, file: name }) + "\n");
    console.log("Story dibuat:", l.slug);
    return;
  }
  if (cmd !== "post") { console.log("Pakai: render [--slug=..] | post | preview <slug> <folder>"); return; }
  const state = loadState();
  const save = () => fs.writeFileSync(STATE, JSON.stringify(state, null, 2) + "\n");
  if (!process.env.IG_TOKEN) { console.log("Secret IG_TOKEN belum diatur — Story dilewati."); return; }
  const nf = path.join(OUT, "next.json");
  if (!fs.existsSync(nf)) { console.log("Belum ada gambar Story."); return; }
  const { slug, file } = JSON.parse(fs.readFileSync(nf, "utf8"));
  const url = IG.BASE + "img/ig-story/" + file;
  const now = () => new Date().toISOString();
  state.fb = state.fb || {}; state.fbErrors = state.fbErrors || {};
  let online = false;
  for (let i = 0; i < 40 && !online; i++) {
    try { online = (await fetch(url + "?t=" + Date.now(), { method: "HEAD" })).ok; } catch (e) {}
    if (!online) await wait(30000);
  }
  if (!online) { state.errors[slug] = { msg: "Gambar Story belum online: " + url, at: now() }; save(); process.exit(1); }
  let ok = 0;
  // Instagram Story
  try {
    const igState = JSON.parse(fs.readFileSync(path.join(ROOT, "tools/ig-state.json"), "utf8"));
    const { igId, token, username } = await IG.connect(igState, null);
    console.log("Akun Instagram: @" + username + " · Story untuk " + slug);
    const c = (await IG.api("POST", igId + "/media", { image_url: url, media_type: "STORIES" }, token)).id;
    await IG.ready(c, token);
    const pub = await IG.api("POST", igId + "/media_publish", { creation_id: c }, token);
    (state.posted[slug] = state.posted[slug] || []).push({ id: pub.id, at: now() });
    state.posted[slug] = state.posted[slug].slice(-5);
    delete state.errors[slug]; ok++;
    console.log("✓ Story IG " + slug + " → " + pub.id);
  } catch (e) {
    console.log("✗ Story IG " + slug + ": " + e.message);
    state.errors[slug] = { msg: e.message.slice(0, 300), at: now() };
  }
  // Facebook Page Story (foto diunggah tanpa terbit, lalu photo_stories)
  try {
    const FB = require("./fb-post.js");
    const pg = await FB.page();
    if (!pg) throw new Error("token Facebook belum diatur");
    const photo = (await FB.api("POST", pg.id + "/photos", { url, published: "false" }, pg.token)).id;
    const r = await FB.api("POST", pg.id + "/photo_stories", { photo_id: photo }, pg.token);
    (state.fb[slug] = state.fb[slug] || []).push({ id: r.post_id || r.id || photo, at: now() });
    state.fb[slug] = state.fb[slug].slice(-5);
    delete state.fbErrors[slug]; ok++;
    console.log("✓ Story Facebook " + slug + " (" + (pg.name || pg.id) + ")");
  } catch (e) {
    console.log("✗ Story Facebook " + slug + ": " + e.message);
    state.fbErrors[slug] = { msg: e.message.slice(0, 300), at: now() };
  }
  save();
  if (!ok) process.exit(1);
}

if (require.main === module) main().catch((e) => { console.error(e); process.exit(1); });
module.exports = { pick };
