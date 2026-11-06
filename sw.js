/* Service worker aplikasi Bali Are Property (PWA).
   - Halaman: ambil dari internet dulu (selalu versi terbaru), simpan salinan; bila offline pakai salinan / offline.html.
   - Gambar, skrip, font: pakai salinan dulu lalu diperbarui di latar belakang.
   Naikkan VERSION bila daftar PRECACHE berubah. */
const VERSION = "bap-v1";
const PRECACHE = ["/", "/listings.html", "/offline.html", "/i18n.js", "/app.js", "/favicon.svg", "/icon-192.png", "/icon-512.png", "/logo.png"];

self.addEventListener("install", (e) => {
  e.waitUntil(caches.open(VERSION).then((c) => c.addAll(PRECACHE)).then(() => self.skipWaiting()));
});

self.addEventListener("activate", (e) => {
  e.waitUntil(caches.keys().then((keys) => Promise.all(keys.filter((k) => k !== VERSION).map((k) => caches.delete(k)))).then(() => self.clients.claim()));
});

self.addEventListener("fetch", (e) => {
  const req = e.request;
  if (req.method !== "GET") return;
  const url = new URL(req.url);
  if (url.origin !== location.origin) return;

  if (req.mode === "navigate") {
    e.respondWith(
      fetch(req).then((res) => {
        const copy = res.clone();
        caches.open(VERSION).then((c) => c.put(req, copy));
        return res;
      }).catch(() => caches.match(req).then((r) => r || caches.match("/offline.html")))
    );
    return;
  }

  if (/\.(png|jpe?g|webp|svg|ico|js|css|woff2?)$/i.test(url.pathname)) {
    e.respondWith(
      caches.open(VERSION).then((c) => c.match(req).then((hit) => {
        const net = fetch(req).then((res) => { if (res.ok) c.put(req, res.clone()); return res; }).catch(() => hit);
        return hit || net;
      }))
    );
  }
});
