/* Aplikasi Bali Are Property (PWA): daftarkan service worker + tombol "Pasang aplikasi" di Android. */
(function () {
  if ("serviceWorker" in navigator && (location.protocol === "https:" || location.hostname === "localhost")) {
    window.addEventListener("load", function () { navigator.serviceWorker.register("/sw.js").catch(function () {}); });
  }
  var standalone = window.matchMedia("(display-mode: standalone)").matches || navigator.standalone;
  if (standalone) return;
  var L = (document.documentElement.lang || "id").slice(0, 2);
  var T = {
    id: ["Pasang aplikasi Bali Are Property", "Pasang", "Tutup"],
    en: ["Install the Bali Are Property app", "Install", "Close"],
    ru: ["Установить приложение Bali Are Property", "Установить", "Закрыть"]
  }[L] || ["Install the Bali Are Property app", "Install", "Close"];
  var KEY = "bap-install-dismissed";
  function dismissed() { try { return Date.now() - (+localStorage.getItem(KEY) || 0) < 7 * 864e5; } catch (e) { return false; } }
  var deferred;
  window.addEventListener("beforeinstallprompt", function (ev) {
    ev.preventDefault();
    deferred = ev;
    if (dismissed() || document.getElementById("bap-install")) return;
    var bar = document.createElement("div");
    bar.id = "bap-install";
    bar.setAttribute("role", "dialog");
    bar.setAttribute("aria-label", T[0]);
    bar.innerHTML = '<img src="/icon-192.png" alt="" width="36" height="36"><span>' + T[0] + '</span><button type="button" class="ok">' + T[1] + '</button><button type="button" class="x" aria-label="' + T[2] + '">×</button>';
    var css = document.createElement("style");
    css.textContent = "#bap-install{position:fixed;left:12px;right:12px;bottom:calc(12px + env(safe-area-inset-bottom));z-index:9999;display:flex;align-items:center;gap:10px;max-width:520px;margin:0 auto;padding:10px 10px 10px 12px;border-radius:14px;background:#123F36;color:#F6F2EA;box-shadow:0 8px 28px rgba(0,0,0,.28);font:500 14px/1.3 Figtree,system-ui,sans-serif}" +
      "#bap-install img{border-radius:8px;flex:none}#bap-install span{flex:1;min-width:0}" +
      "#bap-install .ok{flex:none;border:0;border-radius:999px;padding:9px 16px;background:#D9A441;color:#1C2421;font:700 14px Figtree,system-ui,sans-serif;cursor:pointer}" +
      "#bap-install .x{flex:none;border:0;background:transparent;color:#F6F2EA;font-size:22px;line-height:1;padding:4px 8px;cursor:pointer}" +
      "@media print{#bap-install{display:none!important}}";
    document.head.appendChild(css);
    document.body.appendChild(bar);
    bar.querySelector(".ok").onclick = function () {
      bar.remove();
      deferred.prompt();
      deferred.userChoice.finally(function () { deferred = null; });
    };
    bar.querySelector(".x").onclick = function () {
      bar.remove();
      try { localStorage.setItem(KEY, String(Date.now())); } catch (e) {}
    };
  });
  window.addEventListener("appinstalled", function () { var b = document.getElementById("bap-install"); if (b) b.remove(); });
})();
