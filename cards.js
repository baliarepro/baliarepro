// Kartu katalog bergaya ringkas (foto besar + harga + 1 baris spesifikasi), dipakai di listings.html dan halaman area (3 bahasa).
// Teks kartu tetap dari HTML asli (ID/EN/RU hasil build); skrip ini hanya menyusun ulang tampilannya.
// Foto sampul & jumlah foto dari /img/covers.json (dibuat build). Selalu tampilan ringkas (permintaan pemilik 18 Nov 2026, tanpa tombol pilihan).
(function () {
  if (document.body.hasAttribute("data-listing")) return; // halaman detail: tidak diubah
  var cards = [].slice.call(document.querySelectorAll("article.card"));
  if (!cards.length) return;
  var L = (document.documentElement.lang || "id").slice(0, 2);
  var T = {
    id: { beds: "KT", baths: "KM", bld: "bangunan", land: "tanah", sold: "Terjual", rec: "Rekomendasi", detail: "Detail", per: "/m²", view: "Tampilan", compact: "Ringkas", full: "Lengkap", noPhoto: "Foto segera", types: { tanah: "Tanah", villa: "Villa", rumah: "Rumah", komersial: "Komersial" } },
    en: { beds: "beds", baths: "baths", bld: "building", land: "land", sold: "Sold", rec: "Recommended", detail: "Details", per: "/m²", view: "View", compact: "Compact", full: "Full", noPhoto: "Photos soon", types: { tanah: "Land", villa: "Villa", rumah: "House", komersial: "Commercial" } },
    ru: { beds: "сп.", baths: "ван.", bld: "дом", land: "участок", sold: "Продано", rec: "Рекомендуем", detail: "Подробнее", per: "/м²", view: "Вид", compact: "Кратко", full: "Подробно", noPhoto: "Фото скоро", types: { tanah: "Участок", villa: "Вилла", rumah: "Дом", komersial: "Коммерция" } }
  }[L] || null;
  if (!T) return;
  var RX = {
    land: /^(Luas tanah|Land size|Площадь участка)/i,
    bld: /^(Luas bangunan|Building size|Площадь здания)/i,
    beds: /^(Kamar tidur|Bedrooms|Спальни)/i,
    baths: /^(Kamar mandi|Bathrooms|Ванные)/i,
    legal: /^(Sertifikat|Legalitas|Status|Title|Legal|Документ|Статус)/i,
    perM2: /(m²|м²)/,
    total: /^(Total|Только|Итого)/i
  };

  var css = "" +
    ".cards-compact .area,.cards-compact .ar-type{display:grid;grid-template-columns:repeat(auto-fill,minmax(min(100%,310px),1fr));gap:18px;align-items:start}" +
    ".cards-compact .area>.area-head,.cards-compact .ar-type>h2{grid-column:1/-1}" +
    ".cards-compact article.card{margin-top:0;padding:0 0 16px;gap:0;display:flex;flex-direction:column;overflow:hidden;transition:box-shadow .2s,transform .2s}" +
    ".cards-compact article.card:hover{box-shadow:0 10px 28px rgba(18,63,54,.13);transform:translateY(-2px)}" +
    ".cards-compact article.card>*{display:none}" +
    ".cards-compact article.card>.cv,.cards-compact article.card>.cp,.cards-compact article.card>.cs,.cards-compact article.card>.card-top,.cards-compact article.card>.actions{display:flex}" +
    ".cards-compact article.card>.card-top{order:4;padding:6px 16px 0;flex-direction:column;gap:0}" +
    ".cards-compact .card-top .desc,.cards-compact .card-top>.badge,.cards-compact .card-top>.sold-stamp{display:none}" +
    ".cards-compact .card h4{font-size:19px;margin:6px 0 0;line-height:1.25}" +
    ".cards-compact .card h4 a{color:inherit;text-decoration:none}.cards-compact .card h4 a:hover{text-decoration:underline}" +
    ".cards-compact .card .eyebrow{order:2;font-size:11px;color:var(--muted);margin-top:4px}" +
    ".cards-compact .card-top>div{display:flex;flex-direction:column}.cards-compact .card-top>div>h4{order:1}" +
    ".cards-compact article.card>.actions{order:5;padding:14px 16px 0;margin-top:auto;gap:8px}" +
    ".cards-compact .actions .btn{padding:9px 12px;font-size:13.5px;gap:6px}.cards-compact .actions .btn svg{width:16px;height:16px}.cards-compact .actions .btn.wa{flex:1 1 auto;justify-content:center}" +
    ".cards-compact .actions .btn.ghost:not(.cd):not(.bap-share){display:none}" +
    ".cards-compact .actions .bap-share{padding:9px 10px}.cards-compact .actions .bap-share span{display:none}" +
    ".cards-compact .actions .pdf{display:none}" +
    ".card .cv{order:1;position:relative;display:block;aspect-ratio:4/3;background:var(--sea-soft) center/cover no-repeat;color:#fff;text-decoration:none}" +
    ".card .cv.np{background:linear-gradient(135deg,var(--sea),#0b2a24);display:flex;align-items:center;justify-content:center;flex-direction:column;gap:6px;font-family:var(--display);font-size:22px;font-weight:700}" +
    ".card .cv.np small{font-family:var(--mono);font-size:11px;letter-spacing:.12em;text-transform:uppercase;opacity:.75;font-weight:400}" +
    ".card .cv .bd{position:absolute;top:12px;left:12px;right:60px;display:flex;flex-wrap:wrap;gap:6px}" +
    ".card .cv .bd span{background:rgba(255,255,255,.94);color:#123F36;font-family:var(--mono);font-size:10.5px;letter-spacing:.06em;text-transform:uppercase;padding:5px 9px;border-radius:999px;font-weight:600;line-height:1.2}" +
    ".card .cv .bd span.g{background:#D9A441;color:#1C2421}.card .cv .bd span.r{background:#B3261E;color:#fff}.card .cv .bd span.k{background:#123F36;color:#fff}" +
    ".card .cv .n{position:absolute;top:12px;right:12px;background:rgba(0,0,0,.55);color:#fff;font-size:12px;padding:4px 9px;border-radius:999px;display:flex;gap:5px;align-items:center;font-variant-numeric:tabular-nums}" +
    ".card .cv .n svg{width:14px;height:14px}" +
    ".card.sold .cv{filter:grayscale(.75)}" +
    ".card .cp{order:2;padding:14px 16px 0;flex-direction:column;gap:2px}" +
    ".card .cp b{font-family:var(--display);font-size:24px;font-weight:800;color:var(--ink);font-variant-numeric:tabular-nums;line-height:1.15}" +
    ".card.sold .cp b{text-decoration:line-through;opacity:.55}" +
    ".card .cp .m{font-size:13px;color:var(--muted);font-variant-numeric:tabular-nums}" +
    ".card .cp .fx{font-size:12px;color:var(--muted)}" +
    ".card .cs{order:3;padding:8px 16px 0;flex-wrap:wrap;gap:4px 0;font-size:13.5px;color:var(--ink);font-weight:500}" +
    ".card .cs span{white-space:nowrap}.card .cs span:not(:last-child)::after{content:'·';margin:0 7px;color:var(--muted)}" +
    "body:not(.cards-compact) .card .cv,body:not(.cards-compact) .card .cp,body:not(.cards-compact) .card .cs,body:not(.cards-compact) .card .cd{display:none!important}";
  var st = document.createElement("style"); st.textContent = css; document.head.appendChild(st);

  var txt = function (el) { return el ? el.textContent.replace(/\s+/g, " ").trim() : ""; };
  var esc = function (s) { return String(s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); };
  var num = function (s) { var m = /^[^\d]*(\d+)/.exec(s || ""); return m ? m[1] : ""; };
  var area = function (s) { var m = /[±≈]?\d[\d.,\u00a0\u202f ]*?\s*(m²|м²)/.exec(s || ""); return m ? m[0].replace(/\s+(?=m²|м²)/, "\u00a0").trim() : ""; };
  var camera = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 8h3l2-3h6l2 3h3v11H4z"/><circle cx="12" cy="13" r="3.5"/></svg>';

  function typeOf(c) {
    var s = c.closest("section.type");
    if (s && T.types[s.dataset.type]) return T.types[s.dataset.type];
    var a = c.closest(".ar-type");
    return a ? (a.getAttribute("aria-label") || "") : "";
  }

  function build(c, covers) {
    if (c.querySelector(".cv")) return;
    var link = c.querySelector("h4 a");
    if (!link) return;
    var href = link.getAttribute("href");
    var slug = (/listing\/([^\/]+)\.html/.exec(href) || [])[1];
    var spec = {};
    c.querySelectorAll("dl.specs > div").forEach(function (d) {
      var k = txt(d.querySelector("dt")), v = txt(d.querySelector("dd"));
      for (var n in RX) if (!spec[n] && RX[n].test(k) && n !== "perM2" && n !== "total") spec[n] = v;
    });
    // Harga
    var cells = [].slice.call(c.querySelectorAll(".price > div"));
    var main = c.querySelector(".price > .hl") || cells.filter(function (d) { return !d.classList.contains("sold-note"); }).pop();
    var perM2 = cells.filter(function (d) { return d !== main && RX.perM2.test(txt(d.querySelector("small"))) && !RX.total.test(txt(d.querySelector("small"))); })[0];
    var legalTxt = (spec.legal || "") + " " + cells.map(function (d) { return txt(d.querySelector("small")); }).join(" ");
    var mainB = main && main.querySelector("b"), mainFx = main && main.querySelector(".fx");
    var mainLbl = main ? txt(main.querySelector("small")) : "";
    var mainIsPerM2 = RX.perM2.test(mainLbl) && !RX.total.test(mainLbl) && !/\d/.test(mainLbl.replace(/m²|м²/, ""));
    var bOnly = function (b) { if (!b) return ""; var x = b.cloneNode(true); x.querySelectorAll(".fx").forEach(function (f) { f.remove(); }); return txt(x); };

    // Label di atas foto
    var badges = [];
    var sold = c.classList.contains("sold");
    if (sold) badges.push(["r", T.sold]);
    if (c.classList.contains("recommended")) badges.push(["k", "★ " + T.rec]);
    var lease = /lease|аренд/i.test(legalTxt), free = /freehold|SHM|HGB|собствен/i.test(legalTxt);
    if (free && lease) badges.push(["", "Freehold / Leasehold"]); else if (lease) badges.push(["", "Leasehold"]); else if (free) badges.push(["", "Freehold"]);
    var b0 = c.querySelector(".card-top > .badge");
    if (b0 && !sold) badges.push([b0.classList.contains("sand") ? "g" : "", txt(b0)]);

    var cov = slug && covers[slug];
    var cv = document.createElement("a");
    cv.setAttribute("data-noi18n", "");
    cv.className = "cv" + (cov ? "" : " np");
    cv.href = href;
    cv.setAttribute("aria-label", txt(link));
    if (cov) {
      cv.style.backgroundImage = "url('" + cov.src + "')";
      cv.innerHTML = '<span class="n">' + camera + "1/" + cov.n + "</span>";
    } else {
      cv.innerHTML = esc(typeOf(c) || "Bali") + "<small>" + esc(T.noPhoto) + "</small>";
    }
    if (badges.length) cv.insertAdjacentHTML("afterbegin", '<span class="bd">' + badges.slice(0, 3).map(function (b) { return '<span class="' + b[0] + '">' + esc(b[1]) + "</span>"; }).join("") + "</span>");

    var cp = document.createElement("div");
    cp.className = "cp"; cp.setAttribute("data-noi18n", "");
    var mainTxt = bOnly(mainB);
    cp.innerHTML = "<b>" + esc(mainTxt) + (mainIsPerM2 && !/m²|м²/.test(mainTxt) ? '<small style="font-size:15px;font-weight:600"> ' + T.per + "</small>" : "") + "</b>" +
      (perM2 && !mainIsPerM2 ? '<span class="m">' + esc(bOnly(perM2.querySelector("b"))) + (/m²|м²/.test(txt(perM2.querySelector("b"))) ? "" : " " + T.per) + "</span>" : (!mainIsPerM2 && mainLbl && (!/^(Harga|Price|Цена)/i.test(mainLbl) || /nego|торг/i.test(mainLbl)) ? '<span class="m">' + esc(mainLbl) + "</span>" : "")) +
      (mainFx ? '<span class="fx">' + esc(txt(mainFx)) + "</span>" : "");

    var parts = [typeOf(c)];
    if (spec.beds && num(spec.beds)) parts.push(num(spec.beds) + " " + T.beds);
    if (spec.baths && num(spec.baths)) parts.push(num(spec.baths) + " " + T.baths);
    if (spec.bld && area(spec.bld)) parts.push(area(spec.bld) + " " + T.bld);
    if (spec.land && area(spec.land)) parts.push(area(spec.land) + " " + T.land);
    var cs = document.createElement("div");
    cs.className = "cs"; cs.setAttribute("data-noi18n", "");
    cs.innerHTML = parts.filter(Boolean).map(function (p) { return "<span>" + esc(p) + "</span>"; }).join("");

    c.insertBefore(cs, c.firstChild);
    c.insertBefore(cp, c.firstChild);
    c.insertBefore(cv, c.firstChild);

    var act = c.querySelector(".actions");
    if (act && !act.querySelector(".cd")) {
      var d = document.createElement("a");
      d.className = "btn ghost cd"; d.setAttribute("data-noi18n", "");
      d.href = href;
      d.textContent = T.detail;
      var wa = act.querySelector(".btn.wa");
      if (wa && wa.nextSibling) act.insertBefore(d, wa.nextSibling); else act.appendChild(d);
    }
  }

  function setMode() { document.body.classList.add("cards-compact"); }

  function run(covers) { cards.forEach(function (c) { try { build(c, covers || {}); } catch (e) {} }); setMode(); }
  setMode(); // terapkan tata letak segera; foto menyusul
  fetch("/img/covers.json").then(function (r) { return r.ok ? r.json() : {}; }).then(run, function () { run({}); });
})();
