// Kartu katalog bergaya ringkas (foto besar + harga + 1 baris spesifikasi), dipakai di listings.html dan halaman area (3 bahasa).
// Teks kartu tetap dari HTML asli (ID/EN/RU hasil build); skrip ini hanya menyusun ulang tampilannya.
// Foto sampul & jumlah foto dari /img/covers.json (dibuat build). Selalu tampilan ringkas (permintaan pemilik 18 Nov 2026, tanpa tombol pilihan).
(function () {
  if (document.body.hasAttribute("data-listing")) return; // halaman detail: tidak diubah
  var cards = [].slice.call(document.querySelectorAll("article.card"));
  if (!cards.length) return;
  var L = (document.documentElement.lang || "id").slice(0, 2);
  var T = {
    id: { beds: "KT", baths: "KM", bld: "bangunan", land: "tanah", sold: "Terjual", rec: "Rekomendasi", nw: "Baru", drop: "Harga turun", detail: "Detail", per: "/m²", view: "Tampilan", compact: "Ringkas", full: "Lengkap", noPhoto: "Foto segera", types: { tanah: "Tanah", villa: "Villa", rumah: "Rumah", komersial: "Komersial" } },
    en: { beds: "beds", baths: "baths", bld: "building", land: "land", sold: "Sold", rec: "Recommended", nw: "New", drop: "Price drop", detail: "Details", per: "/m²", view: "View", compact: "Compact", full: "Full", noPhoto: "Photos soon", types: { tanah: "Land", villa: "Villa", rumah: "House", komersial: "Commercial" } },
    ru: { beds: "сп.", baths: "ван.", bld: "дом", land: "участок", sold: "Продано", rec: "Рекомендуем", nw: "Новое", drop: "Цена снижена", detail: "Подробнее", per: "/м²", view: "Вид", compact: "Кратко", full: "Подробно", noPhoto: "Фото скоро", types: { tanah: "Участок", villa: "Вилла", rumah: "Дом", komersial: "Коммерция" } }
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
    ".cards-compact article.card .actions .btn{padding:9px 12px;font-size:13.5px;gap:6px}.cards-compact article.card .actions .btn svg{width:16px;height:16px}.cards-compact article.card .actions .btn.wa{flex:1 1 auto;justify-content:center}" +
    ".cards-compact article.card .actions .btn.ghost:not(.cd):not(.bap-share){display:none}" +
    ".cards-compact article.card .actions .bap-share{padding:9px 10px}.cards-compact article.card .actions .bap-share span{display:none}" +
    ".cards-compact article.card .actions .pdf{display:none}" +
    ".card .cv{order:1;position:relative;display:block;aspect-ratio:4/3;background:var(--sea-soft) center/cover no-repeat;color:#fff;text-decoration:none}" +
    ".card .cv.np{background:linear-gradient(135deg,var(--sea),#0b2a24);display:flex;align-items:center;justify-content:center;flex-direction:column;gap:6px;font-family:var(--display);font-size:22px;font-weight:700}" +
    ".card .cv.np small{font-family:var(--mono);font-size:11px;letter-spacing:.12em;text-transform:uppercase;opacity:.75;font-weight:400}" +
    ".card .cv .bd{position:absolute;top:12px;left:12px;right:60px;display:flex;flex-wrap:wrap;gap:6px}" +
    ".card .cv .bd span{background:rgba(255,255,255,.94);color:#123F36;font-family:var(--mono);font-size:10.5px;letter-spacing:.06em;text-transform:uppercase;padding:5px 9px;border-radius:999px;font-weight:600;line-height:1.2}" +
    ".card .cv .bd span.g{background:#D9A441;color:#1C2421}.card .cv .bd span.r{background:#B3261E;color:#fff}.card .cv .bd span.k{background:#123F36;color:#fff}.card .cv .bd span.n{background:#1A8D4A;color:#fff}.card .cv .bd span.d{background:#C2410C;color:#fff}" +
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
    var cov = slug && covers[slug], age = function (d) { return d ? (Date.now() - Date.parse(d + "T00:00:00+08:00")) / 864e5 : 1e9; };
    if (!sold && cov && age(cov.d) <= 30) badges.push(["d", "↓ " + T.drop]);
    else if (!sold && cov && age(cov.a) <= 14) badges.push(["n", T.nw]);
    if (c.classList.contains("recommended")) badges.push(["k", "★ " + T.rec]);
    var lease = /lease|аренд/i.test(legalTxt), free = /freehold|SHM|HGB|собствен/i.test(legalTxt);
    if (free && lease) badges.push(["", "Freehold / Leasehold"]); else if (lease) badges.push(["", "Leasehold"]); else if (free) badges.push(["", "Freehold"]);
    var b0 = c.querySelector(".card-top > .badge");
    if (b0 && !sold) badges.push([b0.classList.contains("sand") ? "g" : "", txt(b0)]);

    var cv = document.createElement("a");
    cv.setAttribute("data-noi18n", "");
    cv.className = "cv" + (cov && cov.src ? "" : " np");
    cv.href = href;
    cv.setAttribute("aria-label", txt(link));
    if (cov && cov.src) {
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

  function run(covers) { cards.forEach(function (c) { try { build(c, covers || {}); } catch (e) {} }); setMode(); try { document.dispatchEvent(new Event("bap-cards")); } catch (e) {} }
  setMode(); // terapkan tata letak segera; foto menyusul
  fetch("/img/covers.json").then(function (r) { return r.ok ? r.json() : {}; }).then(run, function () { run({}); });
})();

// ---------- Katalog: filter harga / luas tanah / kamar + urutan, dan "Kabari saya listing baru" (permintaan pemilik 20 Nov 2026) ----------
// Hanya di listings.html (ada chip filter). Angka dibaca dari teks kartu (ID/EN/RU). Kartu yang tidak cocok diberi class cf-out;
// area tanpa kartu tersisa ditandai data-empty lalu filter chip bawaan dijalankan ulang.
(function () {
  if (document.body.hasAttribute("data-listing") || !document.querySelector(".chip[data-j]")) return;
  var L = (document.documentElement.lang || "id").slice(0, 2);
  var T = {
    id: { price: "Budget", land: "Luas tanah", beds: "Kamar tidur", sort: "Urutkan", any: "Semua", def: "Bawaan", cheap: "Harga termurah", exp: "Harga termahal", big: "Tanah terluas",
      reset: "Reset", found: "listing cocok", none: "Belum ada listing yang cocok dengan filter ini.", wa: "Kabari saya lewat WhatsApp",
      notifyH: "🔔 Kabari saya bila ada listing baru", notifyP: "Belum ketemu yang pas? Tulis kebutuhan Anda, kami kabari lewat WhatsApp begitu ada listing yang cocok.",
      type: "Jenis", area: "Area incaran", budget: "Budget", name: "Nama (opsional)", send: "Kirim lewat WhatsApp", follow: "Atau ikuti semua listing baru di", types: ["Tanah", "Villa", "Rumah", "Komersial"],
      msg: function (o) { return "Halo Pak Bagoes, tolong kabari saya bila ada listing baru yang cocok:\n• Jenis: " + o.type + "\n• Area: " + o.area + "\n• Budget: " + o.budget + (o.land ? "\n• Luas tanah: " + o.land : "") + (o.name ? "\nNama: " + o.name : "") + "\nTerima kasih."; } },
    en: { price: "Budget", land: "Land size", beds: "Bedrooms", sort: "Sort", any: "Any", def: "Default", cheap: "Lowest price", exp: "Highest price", big: "Largest land",
      reset: "Reset", found: "matching listings", none: "No listings match these filters yet.", wa: "Notify me on WhatsApp",
      notifyH: "🔔 Notify me about new listings", notifyP: "Haven't found the right one? Tell us what you need and we'll message you on WhatsApp when a matching listing comes in.",
      type: "Type", area: "Preferred area", budget: "Budget", name: "Name (optional)", send: "Send via WhatsApp", follow: "Or follow every new listing on", types: ["Land", "Villa", "House", "Commercial"],
      msg: function (o) { return "Hello Pak Bagoes, please let me know when a new listing matches:\n• Type: " + o.type + "\n• Area: " + o.area + "\n• Budget: " + o.budget + (o.land ? "\n• Land size: " + o.land : "") + (o.name ? "\nName: " + o.name : "") + "\nThank you."; } },
    ru: { price: "Бюджет", land: "Площадь участка", beds: "Спальни", sort: "Сортировка", any: "Любая", def: "По умолчанию", cheap: "Сначала дешевле", exp: "Сначала дороже", big: "Самый большой участок",
      reset: "Сбросить", found: "подходящих объектов", none: "Пока нет объектов по этим фильтрам.", wa: "Сообщите мне в WhatsApp",
      notifyH: "🔔 Сообщите о новых объектах", notifyP: "Не нашли подходящее? Опишите, что ищете, — мы напишем в WhatsApp, когда появится подходящий объект.",
      type: "Тип", area: "Район", budget: "Бюджет", name: "Имя (необязательно)", send: "Отправить в WhatsApp", follow: "Или подписывайтесь на новые объекты:", types: ["Участок", "Вилла", "Дом", "Коммерция"],
      msg: function (o) { return "Здравствуйте, Багус! Сообщите мне, пожалуйста, о новых подходящих объектах:\n• Тип: " + o.type + "\n• Район: " + o.area + "\n• Бюджет: " + o.budget + (o.land ? "\n• Площадь участка: " + o.land : "") + (o.name ? "\nИмя: " + o.name : "") + "\nСпасибо."; } }
  }[L];
  if (!T) return;
  var B = { id: ["< Rp3 M", "Rp3–5 M", "Rp5–10 M", "Rp10–25 M", "> Rp25 M"], en: ["< IDR 3B", "IDR 3–5B", "IDR 5–10B", "IDR 10–25B", "> IDR 25B"], ru: ["< 3 млрд", "3–5 млрд", "5–10 млрд", "10–25 млрд", "> 25 млрд"] }[L];
  var PR = [[0, 3e9], [3e9, 5e9], [5e9, 1e10], [1e10, 2.5e10], [2.5e10, Infinity]];
  var LA = [[0, 300], [300, 1000], [1000, 5000], [5000, Infinity]], LAL = ["< 300 m²", "300–1.000 m²", "1.000–5.000 m²", "> 5.000 m²"];
  if (L === "en") LAL = ["< 300 m²", "300–1,000 m²", "1,000–5,000 m²", "> 5,000 m²"];
  if (L === "ru") LAL = ["< 300 м²", "300–1 000 м²", "1 000–5 000 м²", "> 5 000 м²"];

  var txt = function (el) { return el ? el.textContent.replace(/\s+/g, " ").trim() : ""; };
  function numIn(s) { // angka pertama sesuai format bahasa halaman
    var m = /\d[\d.,   ]*/.exec(s || ""); if (!m) return NaN;
    var v = m[0].replace(/[\s  ]/g, "").replace(/[.,]$/, "");
    if (L === "en") v = v.replace(/,/g, ""); else v = v.replace(/\./g, "").replace(",", ".");
    return parseFloat(v);
  }
  function priceOf(c) {
    var b = c.querySelector(".price > .hl b") || c.querySelector(".price > div:not(.sold-note) b");
    if (!b) return NaN;
    if (/us\$|usd/i.test(b.textContent)) { // harga utama dolar: pakai baris "Setara rupiah" untuk filter/urutan
      var rp = [].filter.call(c.querySelectorAll(".price > div > b"), function (x) { return /rp/i.test(x.textContent); })[0];
      if (rp) b = rp;
    }
    var x = b.cloneNode(true); [].forEach.call(x.querySelectorAll(".fx"), function (f) { f.remove(); });
    var s = txt(x).toLowerCase(), n = numIn(s);
    if (/miliar|billion|млрд|\d\s*(m|b|bn)\b/.test(s)) return n * 1e9;
    if (/\bjt\b|juta|million|млн|\d\s*mn\b/.test(s)) return n * 1e6;
    return n;
  }
  function specOf(c, rx) {
    var v = ""; [].some.call(c.querySelectorAll("dl.specs > div"), function (d) { if (rx.test(txt(d.querySelector("dt")))) { v = txt(d.querySelector("dd")); return true; } }); return v;
  }
  function landOf(c) { var s = specOf(c, /^(Luas tanah|Luas tanah total|Land size|Площадь участка)/i); if (!s) return NaN; var n = numIn(s); return /\bha\b|га/.test(s) && !/m²|м²/.test(s) ? n * 1e4 : n; }
  function bedsOf(c) { var s = specOf(c, /^(Kamar tidur|Bedrooms|Спальни)/i); var m = /\d+/.exec(s); return m ? +m[0] : NaN; }

  var cards = [].slice.call(document.querySelectorAll("section.type article.card")).map(function (c, i) {
    return { el: c, i: i, area: c.closest(".area"), price: priceOf(c), land: landOf(c), beds: bedsOf(c), sold: c.classList.contains("sold") };
  });
  var areas = [].slice.call(document.querySelectorAll("section.type .area"));
  areas.forEach(function (a) { a.dataset.cfOrig = a.hasAttribute("data-empty") ? "1" : ""; });

  var css = ".cf{display:flex;flex-wrap:wrap;gap:10px 14px;align-items:end;margin:18px 0 0;padding:14px 16px;border:1px solid var(--line);border-radius:14px;background:var(--surface)}" +
    ".cf label{display:flex;flex-direction:column;gap:4px;font-size:12px;color:var(--muted);font-family:var(--mono);letter-spacing:.06em;text-transform:uppercase}" +
    ".cf select,.cfn select,.cfn input{font:inherit;font-size:15px;padding:8px 10px;border:1.5px solid var(--line);border-radius:10px;background:var(--bg);color:var(--ink);min-width:140px}" +
    ".cf .cf-r{border:0;background:none;color:var(--sea);font-weight:700;cursor:pointer;padding:8px 4px;font:inherit}" +
    ".cf .cf-n{margin-left:auto;font-size:14px;color:var(--muted);align-self:center}" +
    "article.card.cf-out{display:none!important}" +
    ".cf-none{display:none;margin:18px 0 0;padding:18px;border:1.5px dashed var(--line);border-radius:14px;text-align:center;color:var(--muted)}" +
    ".cf-none.on{display:block}.cf-none a{display:inline-block;margin-top:10px}" +
    ".cfn{margin:28px 0 0;padding:22px 20px;border-radius:18px;background:var(--sea-soft);display:grid;gap:12px}" +
    ".cfn h3{font-family:var(--display);font-size:22px;margin:0}.cfn p{margin:0;color:var(--muted)}" +
    ".cfn .row{display:flex;flex-wrap:wrap;gap:10px}.cfn .row>*{flex:1 1 160px}" +
    ".cfn button{justify-self:start;border:0;border-radius:999px;background:var(--wa);color:#fff;font:inherit;font-weight:700;padding:11px 20px;cursor:pointer}" +
    "@media print{.cf,.cfn,.cf-none{display:none!important}}";
  var st = document.createElement("style"); st.textContent = css; document.head.appendChild(st);

  var opt = function (vals, any) { return '<option value="">' + any + "</option>" + vals.map(function (v, i) { return '<option value="' + i + '">' + v + "</option>"; }).join(""); };
  var bar = document.createElement("div");
  bar.className = "cf"; bar.setAttribute("data-noi18n", "");
  bar.innerHTML = '<label>' + T.price + '<select data-f="p">' + opt(B, T.any) + '</select></label>' +
    '<label>' + T.land + '<select data-f="l">' + opt(LAL, T.any) + '</select></label>' +
    '<label>' + T.beds + '<select data-f="b">' + opt(["2+", "3+", "4+", "5+"], T.any) + '</select></label>' +
    '<label>' + T.sort + '<select data-f="s"><option value="">' + T.def + '</option><option value="c">' + T.cheap + '</option><option value="e">' + T.exp + '</option><option value="g">' + T.big + '</option></select></label>' +
    '<button type="button" class="cf-r">' + T.reset + '</button><span class="cf-n" aria-live="polite"></span>';
  var first = document.querySelector("section.type");
  first.parentNode.insertBefore(bar, first);
  var none = document.createElement("div");
  none.className = "cf-none"; none.setAttribute("data-noi18n", "");
  none.innerHTML = T.none + '<br><a href="#cf-notify" class="btn wa">' + T.wa + '</a>';
  first.parentNode.insertBefore(none, first);

  var sel = function (k) { return bar.querySelector('[data-f="' + k + '"]').value; };
  function apply() {
    var p = sel("p"), l = sel("l"), b = sel("b"), s = sel("s"), active = p || l || b;
    var shown = 0;
    cards.forEach(function (c) {
      var ok = true;
      if (p !== "") { var r = PR[+p]; ok = ok && c.price >= r[0] && c.price < r[1]; }
      if (l !== "") { var q = LA[+l]; ok = ok && c.land >= q[0] && c.land < q[1]; }
      if (b !== "") ok = ok && c.beds >= 2 + +b;
      if (active && c.sold) ok = false;
      c.el.classList.toggle("cf-out", !ok);
      if (ok) shown++;
    });
    // urutan dalam tiap area
    areas.forEach(function (a) {
      var list = cards.filter(function (c) { return c.area === a; });
      list.sort(function (x, y) {
        if (s === "c") return (isNaN(x.price) ? 1e30 : x.price) - (isNaN(y.price) ? 1e30 : y.price) || x.i - y.i;
        if (s === "e") return (isNaN(y.price) ? -1 : y.price) - (isNaN(x.price) ? -1 : x.price) || x.i - y.i;
        if (s === "g") return (isNaN(y.land) ? -1 : y.land) - (isNaN(x.land) ? -1 : x.land) || x.i - y.i;
        return x.i - y.i;
      });
      list.forEach(function (c) { a.appendChild(c.el); });
      var vis = list.some(function (c) { return !c.el.classList.contains("cf-out"); });
      if (a.dataset.cfOrig === "1" || !vis) a.setAttribute("data-empty", ""); else a.removeAttribute("data-empty");
    });
    var chip = document.querySelector('.chip[data-j][aria-pressed="true"]'); if (chip) chip.click();
    var visible = cards.filter(function (c) { return !c.el.classList.contains("cf-out") && !c.el.closest("[hidden]"); }).length;
    bar.querySelector(".cf-n").textContent = active ? visible + " " + T.found : "";
    none.classList.toggle("on", active && !visible);
  }
  bar.addEventListener("change", apply);
  bar.querySelector(".cf-r").addEventListener("click", function () { [].forEach.call(bar.querySelectorAll("select"), function (x) { x.value = ""; }); apply(); });
  document.addEventListener("click", function (e) { if (e.target.closest(".chip")) setTimeout(function () {
    var visible = cards.filter(function (c) { return !c.el.classList.contains("cf-out") && !c.el.closest("[hidden]"); }).length;
    var active = sel("p") || sel("l") || sel("b");
    bar.querySelector(".cf-n").textContent = active ? visible + " " + T.found : ""; none.classList.toggle("on", !!active && !visible);
  }, 0); });

  // "Kabari saya" (WhatsApp ke pemilik dengan kebutuhan pembeli)
  var areaNames = [].slice.call(document.querySelectorAll(".chip[data-f]")).filter(function (c) { return c.dataset.f !== "all"; })
    .map(function (c) { var x = c.cloneNode(true); var sm = x.querySelector("small"); if (sm) sm.remove(); return txt(x); });
  var nb = document.createElement("section");
  nb.className = "cfn"; nb.id = "cf-notify"; nb.setAttribute("data-noi18n", "");
  nb.innerHTML = "<h3>" + T.notifyH + "</h3><p>" + T.notifyP + "</p>" +
    '<div class="row">' + '<select data-n="t" aria-label="' + T.type + '"><option value="">' + T.type + "</option>" + T.types.map(function (x) { return "<option>" + x + "</option>"; }).join("") + "</select>" +
    '<select data-n="a" aria-label="' + T.area + '"><option value="">' + T.area + "</option>" + areaNames.map(function (x) { return "<option>" + x + "</option>"; }).join("") + "</select>" +
    '<select data-n="b" aria-label="' + T.budget + '"><option value="">' + T.budget + "</option>" + B.map(function (x) { return "<option>" + x + "</option>"; }).join("") + "</select>" +
    '<input data-n="n" placeholder="' + T.name + '" aria-label="' + T.name + '"></div>' +
    '<button type="button">' + T.send + "</button>" +
    '<p style="font-size:14px">' + T.follow + ' <a href="https://whatsapp.com/channel/0029VbD8IGrEgGfNYeVYfD3J" target="_blank" rel="noopener">WhatsApp Channel</a> · <a href="https://t.me/baliareproperty" target="_blank" rel="noopener">Telegram</a></p>';
  var last = [].slice.call(document.querySelectorAll("section.type")).pop();
  last.parentNode.insertBefore(nb, last.nextSibling);
  nb.querySelector("button").addEventListener("click", function () {
    var g = function (k) { return nb.querySelector('[data-n="' + k + '"]').value.trim(); };
    var lsel = sel("l");
    var msg = T.msg({ type: g("t") || "-", area: g("a") || "-", budget: g("b") || (sel("p") !== "" ? B[+sel("p")] : "-"), land: lsel !== "" ? LAL[+lsel] : "", name: g("n") });
    window.open("https://wa.me/62812868080?text=" + encodeURIComponent(msg), "_blank", "noopener");
  });
  // isi otomatis dari filter yang sedang dipakai
  bar.addEventListener("change", function () {
    if (sel("p") !== "") nb.querySelector('[data-n="b"]').value = B[+sel("p")];
    var j = document.querySelector('.chip[data-j][aria-pressed="true"]');
    if (j && j.dataset.j !== "all") { var i = ["tanah", "villa", "rumah", "komersial"].indexOf(j.dataset.j); if (i >= 0) nb.querySelector('[data-n="t"]').value = T.types[i]; }
  });
})();
