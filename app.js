/* Aplikasi Bali Are Property (PWA): daftarkan service worker + tombol "Pasang aplikasi" di Android. */
(function () {
  if ("serviceWorker" in navigator && (location.protocol === "https:" || location.hostname === "localhost")) {
    window.addEventListener("load", function () { navigator.serviceWorker.register("/sw.js").catch(function () {}); });
  }
  // ---------- Tombol "Bagikan" link iklan (halaman detail listing & kartu di katalog) ----------
  (function () {
    var L = (document.documentElement.lang || "id").slice(0, 2);
    var T = { id: ["Bagikan", "Link iklan disalin", "Salin link ini:"], en: ["Share", "Listing link copied", "Copy this link:"], ru: ["Поделиться", "Ссылка скопирована", "Скопируйте ссылку:"] }[L] || ["Share", "Link copied", "Copy this link:"];
    var ICON = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><path d="M8.6 13.5l6.8 4M15.4 6.5l-6.8 4"/></svg>';
    function note(msg) {
      var n = document.getElementById("bap-share-note");
      if (!n) {
        n = document.createElement("div"); n.id = "bap-share-note"; n.setAttribute("role", "status");
        n.style.cssText = "position:fixed;left:50%;bottom:calc(20px + env(safe-area-inset-bottom));transform:translateX(-50%);z-index:9999;background:#123F36;color:#F6F2EA;padding:10px 18px;border-radius:999px;font:600 14px Figtree,system-ui,sans-serif;box-shadow:0 6px 20px rgba(0,0,0,.25)";
        document.body.appendChild(n);
      }
      n.textContent = msg; n.hidden = false; clearTimeout(note.t); note.t = setTimeout(function () { n.hidden = true; }, 2200);
    }
    function copy(url) {
      var ok = function () { note(T[1]); };
      var fallback = function () {
        var ta = document.createElement("textarea"); ta.value = url; ta.setAttribute("readonly", ""); ta.style.cssText = "position:fixed;opacity:0";
        document.body.appendChild(ta); ta.select();
        var done = false; try { done = document.execCommand("copy"); } catch (e) {}
        ta.remove(); if (done) ok(); else window.prompt(T[2], url);
      };
      if (navigator.clipboard && window.isSecureContext) navigator.clipboard.writeText(url).then(ok, fallback); else fallback();
    }
    function makeBtn(url, title) {
      var b = document.createElement("button");
      b.type = "button"; b.className = "btn ghost bap-share"; b.innerHTML = ICON + "<span>" + T[0] + "</span>";
      b.setAttribute("data-noi18n", ""); b.dataset.url = url; b.dataset.title = title;
      return b;
    }
    function add() {
      var detail = document.body.getAttribute("data-listing");
      document.querySelectorAll("article.card").forEach(function (card) {
        var acts = card.querySelector(".actions");
        if (!acts || acts.querySelector(".bap-share")) return;
        var url, title;
        if (detail) {
          var canon = document.querySelector('link[rel="canonical"]');
          url = canon ? canon.href : location.href.split("#")[0];
          title = (card.querySelector("h1") || {}).textContent || document.title;
        } else {
          var a = card.querySelector("h4 a[href*='listing/']"); if (!a) return;
          url = new URL(a.getAttribute("href"), location.href).href.split("?")[0];
          title = a.textContent;
        }
        var pdf = acts.querySelector(".pdf");
        acts.insertBefore(makeBtn(url, title.replace(/\s+/g, " ").trim()), pdf ? pdf.nextSibling : null);
      });
    }
    document.addEventListener("click", function (e) {
      var b = e.target.closest && e.target.closest(".bap-share"); if (!b) return;
      var url = b.dataset.url, title = b.dataset.title;
      var h = document.querySelector("article.card h1, article.card h4");
      if (navigator.share) {
        navigator.share({ title: title + " – Bali Are Property", text: title, url: url }).catch(function (err) { if (err && err.name !== "AbortError") copy(url); });
      } else copy(url);
    });
    if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", add); else add();
  })();

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
