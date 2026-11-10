// Kurs IDR → USD/EUR untuk harga perkiraan di halaman English/Rusia & kalkulator.
// Di GitHub Actions kurs diambil dari open.er-api.com (gratis, tanpa kunci) bila data tersimpan
// lebih tua dari 20 jam, lalu disimpan ke tools/kurs.json (ikut ter-commit oleh build).
// Di tempat lain (container/lokal tanpa internet) dipakai angka tersimpan.
const fs = require("fs");
const path = require("path");
const FILE = path.join(__dirname, "kurs.json");

async function kurs() {
  let k = {};
  try { k = JSON.parse(fs.readFileSync(FILE, "utf8")); } catch (e) {}
  const age = k.updated ? Date.now() - Date.parse(k.updated) : Infinity;
  if (process.env.GITHUB_ACTIONS && age > 20 * 3600e3) {
    try {
      const r = await fetch("https://open.er-api.com/v6/latest/USD", { signal: AbortSignal.timeout(15000) });
      const j = await r.json();
      const idr = j && j.rates && j.rates.IDR, eur = j && j.rates && j.rates.EUR;
      if (j.result === "success" && idr > 1000 && eur > 0) {
        k = { usd: Math.round(idr), eur: Math.round(idr / eur), date: new Date().toISOString().slice(0, 10), updated: new Date().toISOString(),
          source: "open.er-api.com (ExchangeRate-API)" };
        fs.writeFileSync(FILE, JSON.stringify(k, null, 2) + "\n");
        console.log("kurs diperbarui:", k.usd, "IDR/USD,", k.eur, "IDR/EUR");
      }
    } catch (e) { console.warn("kurs gagal diambil, pakai data tersimpan:", e.message); }
  }
  return k.usd ? k : null;
}

// Format ringkas: 2470000 → "US$2.47M", 35300 → "US$35,300", 353 → "US$353"
function fmtFx(v, sym, L) {
  const dec = L === "ru" ? "," : ".";
  const grp = L === "ru" ? " " : ",";
  const fix = (x, d) => x.toFixed(d).replace(/\.0+$|(\.\d*?)0+$/, "$1").replace(".", dec);
  if (v >= 1e9) return sym + fix(v / 1e9, 2) + (L === "ru" ? " млрд" : "B");
  if (v >= 1e6) return sym + fix(v / 1e6, v >= 1e8 ? 0 : v >= 1e7 ? 1 : 2) + (L === "ru" ? " млн" : "M");
  const r = v >= 1e5 ? Math.round(v / 1000) * 1000 : v >= 1e4 ? Math.round(v / 100) * 100 : v >= 1000 ? Math.round(v / 10) * 10 : Math.round(v);
  return sym + String(r).replace(/\B(?=(\d{3})+(?!\d))/g, grp);
}
const fxLine = (idr, k, L) => (k && idr ? "≈ " + fmtFx(idr / k.usd, "US$", L) + (k.eur ? " · " + fmtFx(idr / k.eur, "€", L) : "") : "");

module.exports = { kurs, fmtFx, fxLine };
