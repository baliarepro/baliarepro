// Simpan (♡) & Bandingkan listing — permintaan pemilik 20 Nov 2026.
// Daftar simpan hanya di browser pengunjung (localStorage, maks. 4). Tabel banding dibaca dari kartu di katalog (listings.html);
// dari halaman lain tombol bar membuka listings.html#bandingkan. Node sisipan diberi data-noi18n (teks sudah 3 bahasa).
(function () {
  "use strict";
  var KEY = "bap-fav", MAX = 4;
  var L = (document.documentElement.lang || "id").slice(0, 2);
  var T = {
    id: { save: "Simpan", saved: "Tersimpan", n: "tersimpan", cmp: "Bandingkan", title: "Bandingkan listing", clear: "Hapus semua", rm: "Hapus", wa: "Kirim ke WhatsApp", max: "Maksimal 4 listing. Hapus salah satu dulu.", one: "Simpan minimal 2 listing untuk dibandingkan.", close: "Tutup",
      rows: ["Harga", "Harga per m²", "Lokasi", "Luas tanah", "Luas bangunan", "Kamar tidur", "Kamar mandi", "Sertifikat", "Zona"], detail: "Detail", msg: "Halo Pak Bagoes, saya sedang membandingkan listing berikut:", ask: "Boleh minta info lebih lanjut dan jadwal survei?", page: "/listings.html" },
    en: { save: "Save", saved: "Saved", n: "saved", cmp: "Compare", title: "Compare listings", clear: "Clear all", rm: "Remove", wa: "Send on WhatsApp", max: "Up to 4 listings. Remove one first.", one: "Save at least 2 listings to compare.", close: "Close",
      rows: ["Price", "Price per m²", "Location", "Land size", "Building size", "Bedrooms", "Bathrooms", "Title", "Zoning"], detail: "Details", msg: "Hello Pak Bagoes, I'm comparing these listings:", ask: "Could you share more details and a viewing schedule?", page: "/en/listings.html" },
    ru: { save: "Сохранить", saved: "Сохранено", n: "сохранено", cmp: "Сравнить", title: "Сравнение объектов", clear: "Очистить", rm: "Убрать", wa: "Отправить в WhatsApp", max: "Не более 4 объектов. Сначала уберите один.", one: "Сохраните минимум 2 объекта для сравнения.", close: "Закрыть",
      rows: ["Цена", "Цена за м²", "Район", "Площадь участка", "Площадь здания", "Спальни", "Ванные", "Документ", "Зона"], detail: "Подробнее", msg: "Hello Pak Bagoes, I'm comparing these listings:", ask: "Could you share more details and a viewing schedule?", page: "/ru/listings.html" }
  }[L] || null;
  if (!T) return;
  var RX = [null, null, null, /^(Luas tanah|Land size|Площадь участка)/i, /^(Luas bangunan|Building size|Площадь здания)/i, /^(Kamar tidur|Bedrooms|Спальни)/i,
    /^(Kamar mandi|Bathrooms|Ванные)/i, /^(Sertifikat|Legalitas|Title|Legal|Документ)/i, /^(Zona|Zonasi|ITR|Zone|Zoning|Зона|Зонирование)/i];
  var HEART = '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1-1.1a5.5 5.5 0 0 0-7.8 7.8l1 1.1L12 21l7.8-7.5 1-1.1a5.5 5.5 0 0 0 0-7.8z"/></svg>';

  function get() { try { var a = JSON.parse(localStorage.getItem(KEY) || "[]"); return Array.isArray(a) ? a.slice(0, MAX) : []; } catch (e) { return []; } }
  function set(a) { try { localStorage.setItem(KEY, JSON.stringify(a)); } catch (e) {} }
  function txt(el) { return el ? el.textContent.replace(/\s+/g, " ").trim() : ""; }
  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); }
  function slugOf(card) {
    var a = card.querySelector("h4 a[href*='listing/']");
    if (a) return (/listing\/([^\/]+)\.html/.exec(a.getAttribute("href")) || [])[1];
    return document.body.getAttribute("data-listing");
  }
  function noFx(b) { if (!b) return ""; var x = b.cloneNode(true); x.querySelectorAll(".fx").forEach(function (f) { f.remove(); }); return txt(x); }

  var css = ".bap-fav{display:inline-flex;align-items:center;gap:6px}.bap-fav[aria-pressed=true]{color:#B3261E;border-color:#B3261E}.bap-fav[aria-pressed=true] svg{fill:currentColor}" +
    ".bap-fav.onc{position:absolute;right:12px;bottom:12px;width:40px;height:40px;justify-content:center;border:0;border-radius:50%;background:rgba(255,255,255,.94);color:#123F36;cursor:pointer;box-shadow:0 2px 8px rgba(0,0,0,.2)}.bap-fav.onc svg{width:20px;height:20px}" +
    ".bap-fav.onc[aria-pressed=true]{color:#B3261E}" +
    "#bap-cmpbar{position:fixed;left:50%;transform:translateX(-50%);bottom:14px;z-index:9997;display:flex;align-items:center;gap:10px;background:#123F36;color:#F6F2EA;border-radius:999px;padding:8px 8px 8px 16px;box-shadow:0 8px 24px rgba(0,0,0,.25);font:600 14px/1.2 system-ui,sans-serif;max-width:calc(100% - 140px)}" +
    "#bap-cmpbar button{border:0;background:#D9A441;color:#1C2421;font:inherit;padding:8px 14px;border-radius:999px;cursor:pointer;white-space:nowrap}#bap-cmpbar svg{fill:#F6F2EA;stroke:#F6F2EA;flex:none}" +
    "#bap-cmp{border:0;padding:0;border-radius:16px;width:min(980px,calc(100% - 16px));max-height:calc(100% - 24px);background:var(--paper,#F6F2EA);color:var(--ink,#1C2421)}#bap-cmp::backdrop{background:rgba(0,0,0,.5)}" +
    "#bap-cmp .h{display:flex;align-items:center;justify-content:space-between;gap:10px;padding:14px 16px;border-bottom:1px solid rgba(0,0,0,.12);position:sticky;top:0;background:inherit;z-index:2}#bap-cmp h2{margin:0;font-size:19px}" +
    "#bap-cmp .w{overflow-x:auto;padding:0 8px}#bap-cmp table{border-collapse:collapse;width:100%;min-width:520px;font-size:14px}" +
    "#bap-cmp th,#bap-cmp td{padding:9px 8px;border-bottom:1px solid rgba(0,0,0,.08);text-align:left;vertical-align:top}#bap-cmp tbody th{font-weight:600;color:#5b6660;white-space:nowrap;width:1%}" +
    "#bap-cmp thead td img{width:100%;aspect-ratio:4/3;object-fit:cover;border-radius:10px;display:block;background:#ddd}#bap-cmp thead a{font-weight:700;color:inherit}" +
    "#bap-cmp .p{font-weight:800;color:#123F36;font-size:15px}#bap-cmp .rm{margin-top:6px;background:none;border:0;color:#B3261E;font:inherit;font-size:13px;cursor:pointer;padding:0}" +
    "#bap-cmp .f{display:flex;flex-wrap:wrap;gap:8px;padding:14px 16px}#bap-cmp .f a,#bap-cmp .f button{border-radius:999px;padding:10px 16px;font:600 14px system-ui,sans-serif;cursor:pointer;text-decoration:none;border:1.5px solid rgba(0,0,0,.2);background:none;color:inherit}" +
    "#bap-cmp .f .wa{background:#1A8D4A;border-color:#1A8D4A;color:#fff}#bap-cmp .x{border:0;background:none;font-size:26px;line-height:1;cursor:pointer;color:inherit}" +
    "@media (prefers-color-scheme:dark){#bap-cmp{background:#16201d;color:#EDEBE5}#bap-cmp tbody th{color:#a9b3ae}#bap-cmp .p{color:#9ad3b6}#bap-cmp .h{border-color:rgba(255,255,255,.12)}#bap-cmp th,#bap-cmp td{border-color:rgba(255,255,255,.08)}}" +
    "@media print{#bap-cmpbar,.bap-fav{display:none!important}}";
  var st = document.createElement("style"); st.textContent = css; document.head.appendChild(st);

  function cards() { return [].slice.call(document.querySelectorAll("article.card")).filter(function (c) { return !c.classList.contains("sold") && c.getAttribute("data-status") !== "hidden" && slugOf(c); }); }
  function paint() {
    var fav = get();
    document.querySelectorAll(".bap-fav").forEach(function (b) {
      var on = fav.indexOf(b.getAttribute("data-slug")) >= 0;
      b.setAttribute("aria-pressed", on ? "true" : "false");
      b.setAttribute("aria-label", on ? T.saved : T.save);
      var s = b.querySelector("span"); if (s) s.textContent = on ? T.saved : T.save;
    });
    var bar = document.getElementById("bap-cmpbar");
    if (!fav.length) { if (bar) bar.remove(); return; }
    if (!bar) {
      bar = document.createElement("div"); bar.id = "bap-cmpbar"; bar.setAttribute("data-noi18n", "");
      bar.innerHTML = HEART + '<span class="t"></span><button type="button"></button>';
      bar.querySelector("button").addEventListener("click", openCmp);
      document.body.appendChild(bar);
    }
    bar.querySelector(".t").textContent = fav.length + " " + T.n;
    bar.querySelector("button").textContent = T.cmp;
  }
  function addButtons() {
    cards().forEach(function (c) {
      // Kartu ringkas (cards.js): tombol ♡ di pojok foto; selain itu di baris tombol
      var cv = c.querySelector(":scope > .cv"), act = c.querySelector(".actions"), old = c.querySelector(".bap-fav");
      var host = cv || act; if (!host || (old && host.contains(old))) return;
      if (old) old.remove();
      var b = document.createElement("button");
      b.type = "button"; b.className = cv ? "bap-fav onc" : "btn ghost bap-fav"; b.setAttribute("data-noi18n", ""); b.setAttribute("data-slug", slugOf(c));
      b.innerHTML = HEART + (cv ? "" : "<span></span>");
      host.appendChild(b);
    });
    paint();
  }
  document.addEventListener("click", function (e) {
    var b = e.target.closest && e.target.closest(".bap-fav"); if (!b) return;
    e.preventDefault(); e.stopPropagation();
    var s = b.getAttribute("data-slug"), fav = get(), i = fav.indexOf(s);
    if (i >= 0) fav.splice(i, 1);
    else { if (fav.length >= MAX) { alertMsg(T.max); return; } fav.push(s); }
    set(fav); paint();
  });
  function alertMsg(m) {
    var bar = document.getElementById("bap-cmpbar"); if (!bar) return;
    var t = bar.querySelector(".t"), old = t.textContent; t.textContent = m;
    setTimeout(function () { t.textContent = old; }, 2600);
  }

  function data(slug) {
    var a = document.querySelector("article.card h4 a[href$='listing/" + slug + ".html']");
    var c = a && a.closest("article.card"); if (!c) return null;
    var cells = [].slice.call(c.querySelectorAll(".price > div"));
    var main = c.querySelector(".price > .hl") || cells[cells.length - 1];
    var per = cells.filter(function (d) { return d !== main && /m²|м²/.test(txt(d.querySelector("small"))) && !/^(Total|Итого)/i.test(txt(d.querySelector("small"))); })[0];
    var specs = [].slice.call(c.querySelectorAll("dl.specs > div")).map(function (d) { return [txt(d.querySelector("dt")), txt(d.querySelector("dd"))]; });
    var row = function (re) { var f = specs.filter(function (s) { return re.test(s[0]); })[0]; return f ? f[1] : "–"; };
    var cv = c.querySelector(".cv"), img = cv && (/url\(['"]?([^'")]+)/.exec(cv.style.backgroundImage) || [])[1];
    var mainLbl = main ? txt(main.querySelector("small")) : "";
    return { slug: slug, title: txt(a), href: a.href, img: img || "", eb: txt(c.querySelector(".card-top .eyebrow")).replace(/\s*\d[\d.,\s]*$/, ""),
      vals: [noFx(main && main.querySelector("b")) + (mainLbl && !/^(Harga|Price|Цена)$/i.test(mainLbl) ? " (" + mainLbl + ")" : ""), per ? noFx(per.querySelector("b")) : "–", null,
        row(RX[3]), row(RX[4]), row(RX[5]), row(RX[6]), row(RX[7]), row(RX[8])] };
  }
  function openCmp() {
    if (!document.querySelector(".chip[data-j]")) { location.href = T.page + "#bandingkan"; return; }
    var list = get().map(data).filter(Boolean);
    if (list.length < 2) { alertMsg(T.one); return; }
    var dlg = document.getElementById("bap-cmp");
    if (!dlg) { dlg = document.createElement("dialog"); dlg.id = "bap-cmp"; dlg.setAttribute("data-noi18n", ""); document.body.appendChild(dlg); }
    var head = "<tr><th></th>" + list.map(function (d) {
      return '<td>' + (d.img ? '<a href="' + esc(d.href) + '"><img src="' + esc(d.img) + '" alt=""></a>' : "") + '<a href="' + esc(d.href) + '">' + esc(d.title) + '</a><br><button type="button" class="rm" data-rm="' + d.slug + '">✕ ' + esc(T.rm) + "</button></td>";
    }).join("") + "</tr>";
    var body = T.rows.map(function (r, i) {
      var vals = list.map(function (d) { return i === 2 ? d.eb : d.vals[i]; });
      if (vals.every(function (v) { return !v || v === "–"; })) return "";
      return "<tr><th>" + esc(r) + "</th>" + vals.map(function (v) { return "<td" + (i === 0 ? ' class="p"' : "") + ">" + esc(v || "–") + "</td>"; }).join("") + "</tr>";
    }).join("");
    var msg = [T.msg, ""].concat(list.map(function (d, i) { return (i + 1) + ". " + d.title + " – " + d.vals[0] + "\n" + d.href; })).concat(["", T.ask]).join("\n");
    dlg.innerHTML = '<div class="h"><h2>' + esc(T.title) + '</h2><button type="button" class="x" aria-label="' + esc(T.close) + '">×</button></div>' +
      '<div class="w"><table><thead>' + head + "</thead><tbody>" + body + "</tbody></table></div>" +
      '<div class="f"><a class="wa" target="_blank" rel="noopener" href="https://wa.me/62812868080?text=' + encodeURIComponent(msg) + '">' + esc(T.wa) + '</a><button type="button" data-clear>' + esc(T.clear) + "</button></div>";
    if (!dlg.open) dlg.showModal();
  }
  document.addEventListener("click", function (e) {
    var dlg = document.getElementById("bap-cmp"); if (!dlg || !dlg.contains(e.target)) return;
    if (e.target === dlg || e.target.closest(".x")) { dlg.close(); return; }
    var rm = e.target.closest("[data-rm]");
    if (rm) { var f = get().filter(function (s) { return s !== rm.getAttribute("data-rm"); }); set(f); paint(); if (f.length < 2) dlg.close(); else openCmp(); return; }
    if (e.target.closest("[data-clear]")) { set([]); paint(); dlg.close(); }
  });

  function start() {
    addButtons();
    // Kartu katalog disusun ulang oleh cards.js setelah foto dimuat; tombol & tabel menyusul
    setTimeout(addButtons, 1200);
    document.addEventListener("bap-cards", addButtons);
    if (location.hash === "#bandingkan") setTimeout(openCmp, 900);
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", start); else start();
})();
