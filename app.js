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

  // ---------- Bar WhatsApp tetap di atas layar (semua halaman, tetap tampil saat di-scroll) ----------
  (function () {
    if (document.getElementById("bap-wabar") || /offline\.html$/.test(location.pathname)) return;
    var L = (document.documentElement.lang || "id").slice(0, 2);
    var T = {
      id: ["Ada pertanyaan? Chat langsung", "Chat WhatsApp", "Halo Pak Bagoes, saya lihat website Bali Are Property dan ingin bertanya."],
      en: ["Questions? Chat with us", "Chat on WhatsApp", "Hello Pak Bagoes, I saw the Bali Are Property website and have a question."],
      ru: ["Есть вопросы?", "Написать в WhatsApp", "Здравствуйте, Багус! Я увидел сайт Bali Are Property и хочу задать вопрос."]
    }[L] || null;
    if (!T) return;
    // Di halaman detail listing: pakai pesan WA listing itu (sudah menyebut judulnya)
    var own = document.body.hasAttribute("data-listing") && document.querySelector('a.btn.wa[href*="wa.me"]');
    var href = own ? own.getAttribute("href") : "https://wa.me/62812868080?text=" + encodeURIComponent(T[2]);
    var css = "#bap-wabar{position:fixed;top:0;left:0;right:0;z-index:9998;display:flex;align-items:center;justify-content:center;gap:12px;" +
      "padding:7px 16px;padding-top:calc(7px + env(safe-area-inset-top));background:#123F36;color:#F6F2EA;font:500 14px/1.2 Figtree,'Helvetica Neue',Arial,sans-serif;box-shadow:0 2px 10px rgba(0,0,0,.18)}" +
      "#bap-wabar .t{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;min-width:0}" +
      "#bap-wabar a{flex:none;display:inline-flex;align-items:center;gap:7px;background:#1A8D4A;color:#fff;text-decoration:none;font-weight:700;padding:7px 14px;border-radius:999px;white-space:nowrap}" +
      "#bap-wabar a:hover{filter:brightness(1.08)}#bap-wabar svg{width:17px;height:17px;flex:none}" +
      "html{scroll-padding-top:60px}body{padding-top:calc(48px + env(safe-area-inset-top))!important}" +
      "@media (max-width:420px){#bap-wabar{font-size:13px;gap:8px;padding-inline:10px}#bap-wabar a{padding:7px 12px}}" +
      "@media (max-width:340px){#bap-wabar .t{display:none}}" +
      "@media print{#bap-wabar{display:none!important}body{padding-top:0!important}}";
    var st = document.createElement("style"); st.textContent = css; document.head.appendChild(st);
    var bar = document.createElement("div");
    bar.id = "bap-wabar";
    bar.setAttribute("data-noi18n", "");
    bar.innerHTML = '<span class="t">' + T[0] + '</span><a target="_blank" rel="noopener"><svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm5.4 14.1c-.2.6-1.3 1.2-1.8 1.3-.5.1-1 .1-1.7-.1-.4-.1-.9-.3-1.5-.6-2.6-1.1-4.3-3.8-4.5-4-.1-.2-1.1-1.4-1.1-2.7s.7-1.9.9-2.2c.2-.3.5-.3.7-.3h.5c.2 0 .4 0 .6.5l.8 2c.1.2.1.3 0 .5l-.3.5-.4.4c-.1.1-.3.3-.1.6.2.3.7 1.2 1.6 1.9 1.1 1 2 1.3 2.3 1.4.3.1.4.1.6-.1l.8-1c.2-.3.4-.2.6-.1l1.9.9c.3.1.5.2.5.3.1.2.1.7-.1 1.3z"/></svg>' + T[1] + "</a>";
    bar.querySelector("a").href = href;
    document.body.insertBefore(bar, document.body.firstChild);
  })();
})();
