// Posting teks harian ke Threads (tanpa gambar): 1 posting per hari dari tools/threads-text-content.js (urut, yang belum diposting).
// Dijalankan .github/workflows/threads-text.yml (±20.07 WITA). Token sama dengan threads-post.js (THREADS_TOKEN / token terenkripsi di threads-state.json).
// Status: tools/threads-text-state.json { posted: {id: {id, permalink, at}}, errors }.
//   node tools/threads-text.js check   → cek panjang semua teks (≤500 byte)
//   node tools/threads-text.js post [--id=...]
const fs = require("fs");
const path = require("path");
const ROOT = path.resolve(__dirname, "..");
const STATE = path.join(ROOT, "tools/threads-text-state.json");
const { POSTS } = require("./threads-text-content.js");
const bytes = (s) => Buffer.byteLength(s, "utf8");

function check() {
  const ids = new Set(); let bad = 0;
  for (const p of POSTS) {
    if (ids.has(p.id)) { console.log("ID ganda:", p.id); bad++; }
    ids.add(p.id);
    const n = bytes(p.text);
    if (n > 500) { console.log(`✗ ${p.id}: ${n} byte (maks. 500)`); bad++; }
  }
  console.log(`${POSTS.length} posting, ${bad ? bad + " bermasalah" : "semua ≤500 byte"}`);
  return !bad;
}

async function main() {
  const cmd = process.argv[2] || "post";
  if (cmd === "check") { process.exit(check() ? 0 : 1); }
  const TP = require("./threads-post.js");
  const st = TP.read("tools/threads-text-state.json", {}); st.posted = st.posted || {}; st.errors = st.errors || {};
  const save = () => fs.writeFileSync(STATE, JSON.stringify(st, null, 2) + "\n");
  if (!process.env.THREADS_TOKEN) { console.log("Secret THREADS_TOKEN belum diatur — dilewati."); return; }
  const want = (process.argv.find((a) => a.startsWith("--id=")) || "").slice(5);
  const today = new Date(Date.now() + 8 * 3600e3).toISOString().slice(0, 10);
  if (!want && Object.values(st.posted).some((r) => new Date(Date.parse(r.at) + 8 * 3600e3).toISOString().slice(0, 10) === today)) { console.log("Sudah ada posting teks hari ini."); return; }
  const p = want ? POSTS.find((x) => x.id === want) : POSTS.find((x) => !st.posted[x.id]);
  if (!p) { console.log("Semua posting teks sudah tayang — tambahkan topik baru di tools/threads-text-content.js."); return; }
  if (bytes(p.text) > 500) throw new Error(p.id + " lebih dari 500 byte");
  const ts = TP.read("tools/threads-state.json", {});
  const token = (ts.token && TP.dec(ts.token)) || process.env.THREADS_TOKEN;
  try {
    const me = await TP.api("GET", "me", { fields: "id,username" }, token);
    console.log("Akun Threads: @" + me.username + " · " + p.id);
    const mk = (topic) => TP.api("POST", me.id + "/threads", { media_type: "TEXT", text: p.text, ...(topic ? { topic_tag: topic } : {}) }, token);
    let c;
    try { c = (await mk(p.topic)).id; } catch (e) { if (p.topic && /topic/i.test(e.message)) c = (await mk(p.topic.replace(/\s+/g, ""))).id; else throw e; }
    await TP.ready(c, token);
    const pub = await TP.api("POST", me.id + "/threads_publish", { creation_id: c }, token);
    let permalink = "";
    try { permalink = (await TP.api("GET", pub.id, { fields: "permalink" }, token)).permalink || ""; } catch (e) {}
    st.posted[p.id] = { id: pub.id, permalink, at: new Date().toISOString(), cat: p.cat };
    delete st.errors[p.id];
    console.log("✓ " + p.id + " → " + (permalink || pub.id));
  } catch (e) {
    console.log("✗ " + p.id + ": " + e.message);
    st.errors[p.id] = { msg: e.message.slice(0, 300), at: new Date().toISOString() };
    save(); process.exit(1);
  }
  save();
}
main().catch((e) => { console.error(e.message); process.exit(1); });
