// Kotak "Kabari saya bila ada listing baru" di halaman detail listing (permintaan pemilik 20 Nov 2026).
// Build menaruh <section class="cfn" id="cf-notify" data-t="<jenis>" data-a="<area>" data-areas='[…]'> menggantikan kotak "Cari properti".
// Jenis & area terisi otomatis dari listing ini; pesan dikirim ke WhatsApp pemilik (data tidak disimpan di website).
(function () {
  "use strict";
  var nb = document.getElementById("cf-notify");
  if (!nb || nb.childElementCount) return;
  var L = (document.documentElement.lang || "id").slice(0, 2);
  var T = {
    id: { h: "🔔 Kabari saya bila ada listing serupa", p: "Kurang cocok dengan listing ini? Tulis kebutuhan Anda, kami kabari lewat WhatsApp begitu ada yang pas.",
      type: "Jenis", area: "Area incaran", budget: "Budget", name: "Nama (opsional)", send: "Kirim lewat WhatsApp", follow: "Atau ikuti semua listing baru di", other: "Area lain",
      types: ["Tanah", "Villa", "Rumah", "Komersial"], b: ["< Rp3 M", "Rp3–5 M", "Rp5–10 M", "Rp10–25 M", "> Rp25 M"],
      msg: function (o) { return "Halo Pak Bagoes, saya baru melihat listing " + o.ref + ".\nTolong kabari saya bila ada listing serupa:\n• Jenis: " + o.type + "\n• Area: " + o.area + "\n• Budget: " + o.budget + (o.name ? "\nNama: " + o.name : "") + "\nTerima kasih."; } },
    en: { h: "🔔 Notify me about similar listings", p: "Not quite right? Tell us what you need and we'll message you on WhatsApp when a matching listing comes in.",
      type: "Type", area: "Preferred area", budget: "Budget", name: "Name (optional)", send: "Send via WhatsApp", follow: "Or follow every new listing on", other: "Other area",
      types: ["Land", "Villa", "House", "Commercial"], b: ["< IDR 3B", "IDR 3–5B", "IDR 5–10B", "IDR 10–25B", "> IDR 25B"],
      msg: function (o) { return "Hello Pak Bagoes, I just viewed the listing " + o.ref + ".\nPlease let me know about similar listings:\n• Type: " + o.type + "\n• Area: " + o.area + "\n• Budget: " + o.budget + (o.name ? "\nName: " + o.name : "") + "\nThank you."; } },
    ru: { h: "🔔 Сообщите о похожих объектах", p: "Этот объект не совсем подходит? Опишите, что ищете, — мы напишем в WhatsApp, когда появится подходящий.",
      type: "Тип", area: "Район", budget: "Бюджет", name: "Имя (необязательно)", send: "Отправить в WhatsApp", follow: "Или подписывайтесь на новые объекты:", other: "Другой район",
      types: ["Участок", "Вилла", "Дом", "Коммерция"], b: ["< 3 млрд", "3–5 млрд", "5–10 млрд", "10–25 млрд", "> 25 млрд"],
      msg: function (o) { return "Hello Pak Bagoes, I just viewed the listing " + o.ref + ".\nPlease let me know about similar listings:\n• Type: " + o.type + "\n• Area: " + o.area + "\n• Budget: " + o.budget + (o.name ? "\nName: " + o.name : "") + "\nThank you."; } }
  }[L];
  if (!T) return;
  var esc = function (s) { return String(s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); };
  var areas = []; try { areas = JSON.parse(nb.getAttribute("data-areas") || "[]"); } catch (e) {}
  var myArea = nb.getAttribute("data-a") || "";
  if (myArea && areas.indexOf(myArea) < 0) areas.unshift(myArea);
  areas.push(T.other);
  var ti = ["tanah", "villa", "rumah", "komersial"].indexOf(nb.getAttribute("data-t"));

  var css = ".cfn{margin:28px 0 0;padding:22px 20px;border-radius:18px;background:var(--sea-soft);display:grid;gap:12px}" +
    ".cfn h3{font-family:var(--display);font-size:22px;margin:0}.cfn p{margin:0;color:var(--muted)}" +
    ".cfn .row{display:flex;flex-wrap:wrap;gap:10px}.cfn .row>*{flex:1 1 160px}" +
    ".cfn select,.cfn input{font:inherit;font-size:15px;padding:8px 10px;border:1.5px solid var(--line);border-radius:10px;background:var(--bg);color:var(--ink);min-width:140px}" +
    ".cfn button{justify-self:start;border:0;border-radius:999px;background:var(--wa,#1A8D4A);color:#fff;font:inherit;font-weight:700;padding:11px 20px;cursor:pointer}" +
    "main .cta-duo.solo{grid-template-columns:1fr;margin-top:14px}" +
    "@media print{.cfn{display:none!important}}";
  var st = document.createElement("style"); st.textContent = css; document.head.appendChild(st);

  var opt = function (list, cur) { return list.map(function (x) { return "<option" + (x === cur ? " selected" : "") + ">" + esc(x) + "</option>"; }).join(""); };
  nb.setAttribute("data-noi18n", "");
  nb.innerHTML = "<h3>" + T.h + "</h3><p>" + T.p + "</p>" +
    '<div class="row"><select data-n="t" aria-label="' + T.type + '"><option value="">' + T.type + "</option>" + opt(T.types, T.types[ti]) + "</select>" +
    '<select data-n="a" aria-label="' + T.area + '"><option value="">' + T.area + "</option>" + opt(areas, myArea) + "</select>" +
    '<select data-n="b" aria-label="' + T.budget + '"><option value="">' + T.budget + "</option>" + opt(T.b, "") + "</select>" +
    '<input data-n="n" placeholder="' + T.name + '" aria-label="' + T.name + '"></div>' +
    '<button type="button">' + T.send + "</button>" +
    '<p style="font-size:14px">' + T.follow + ' <a href="https://whatsapp.com/channel/0029VbD8IGrEgGfNYeVYfD3J" target="_blank" rel="noopener">WhatsApp Channel</a> · <a href="https://t.me/baliareproperty" target="_blank" rel="noopener">Telegram</a></p>';
  nb.querySelector("button").addEventListener("click", function () {
    var g = function (k) { return nb.querySelector('[data-n="' + k + '"]').value.trim(); };
    var h1 = document.querySelector("article.card h1");
    var ref = (h1 ? h1.textContent.replace(/\s+/g, " ").trim() : document.title) + " (" + location.href.split("#")[0].split("?")[0] + ")";
    var msg = T.msg({ ref: ref, type: g("t") || "-", area: g("a") || "-", budget: g("b") || "-", name: g("n") });
    window.open("https://wa.me/62812868080?text=" + encodeURIComponent(msg), "_blank", "noopener");
  });
})();
