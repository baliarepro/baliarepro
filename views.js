/* Jumlah dilihat per iklan (ikon mata) — katalog listing & halaman detail listing.
   Penghitung: abacus.jasoncameron.dev, kunci "v-<slug>" (sama untuk ID/EN/RU).
   Dihitung 1x per sesi browser: saat halaman detail dibuka, atau saat kartu di katalog terlihat ≥1 detik.
   Angka hanya ditambah di domain asli; di tempat lain hanya dibaca. */
(function () {
  var NS = "baliarepro.github.io";
  var host = location.hostname;
  var live = host === "baliareproperty.com" || host === "www.baliareproperty.com" || host === "baliarepro.github.io";
  var L = (document.documentElement.lang || "id").slice(0, 2);
  var LABEL = { id: "kali dilihat", en: "views", ru: "просмотров" }[L] || "views";
  var LOC = { id: "id-ID", en: "en-US", ru: "ru-RU" }[L] || "id-ID";
  var EYE = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/></svg>';

  var css = document.createElement("style");
  css.textContent = ".bap-views{display:inline-flex;align-items:center;gap:4px;margin-left:10px;padding-left:10px;border-left:1px solid currentColor;letter-spacing:.04em;white-space:nowrap;opacity:.9}" +
    ".bap-views[hidden]{display:none}.bap-views svg{width:14px;height:14px;flex:none}.bap-views b{font-weight:600;font-variant-numeric:tabular-nums}" +
    "@media print{.bap-views{display:none!important}}";
  document.head.appendChild(css);

  function seen(slug) { try { return sessionStorage.getItem("bapv-" + slug) === "1"; } catch (e) { return false; } }
  function markSeen(slug) { try { sessionStorage.setItem("bapv-" + slug, "1"); } catch (e) {} }

  // Antrian: maks. ±3 permintaan per detik agar tidak kena batas penghitung.
  var queue = [], busy = false;
  function pump() {
    if (busy || !queue.length) return;
    busy = true;
    var job = queue.shift();
    fetch("https://abacus.jasoncameron.dev/" + job.op + "/" + NS + "/v-" + job.slug)
      .then(function (r) { return r.ok ? r.json() : (r.status === 404 ? { value: 0 } : null); })
      .then(function (d) { if (d && typeof d.value === "number") job.done(d.value); })
      .catch(function () {})
      .then(function () { setTimeout(function () { busy = false; pump(); }, 340); });
  }
  function request(op, slug, done) { queue.push({ op: op, slug: slug, done: done }); pump(); }

  function chipFor(card) {
    var eb = card.querySelector(".card-top .eyebrow");
    if (!eb) return null;
    var c = document.createElement("span");
    c.className = "bap-views";
    c.hidden = true;
    c.innerHTML = EYE + "<b data-noi18n></b>";
    eb.appendChild(c);
    return c;
  }
  function show(chip, v) {
    if (!chip || v < 1) return;
    var txt = v.toLocaleString(LOC);
    chip.querySelector("b").textContent = txt;
    chip.title = txt + " " + LABEL;
    chip.setAttribute("aria-label", txt + " " + LABEL);
    chip.hidden = false;
  }
  function count(slug, chip) {
    var op = live && !seen(slug) ? "hit" : "get";
    if (op === "hit") markSeen(slug);
    request(op, slug, function (v) { show(chip, v); });
  }

  var detail = document.body.getAttribute("data-listing");
  if (detail) {
    var card = document.querySelector("main article.card");
    if (card) count(detail, chipFor(card));
    return;
  }

  var cards = [].slice.call(document.querySelectorAll("article.card"));
  if (!cards.length) return;
  var items = new Map();
  cards.forEach(function (card) {
    var a = card.querySelector("h4 a[href*='listing/']");
    if (!a) return;
    var slug = a.getAttribute("href").replace(/^.*listing\//, "").replace(/\.html.*$/, "");
    items.set(card, { slug: slug, chip: chipFor(card), timer: 0, done: false });
  });
  if (!("IntersectionObserver" in window)) { items.forEach(function (it) { request("get", it.slug, function (v) { show(it.chip, v); }); }); return; }
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      var it = items.get(e.target);
      if (!it || it.done) return;
      if (e.isIntersecting) {
        it.timer = setTimeout(function () { it.done = true; io.unobserve(e.target); count(it.slug, it.chip); }, 1000);
      } else clearTimeout(it.timer);
    });
  }, { threshold: 0.25 });
  items.forEach(function (it, card) { io.observe(card); });
})();
