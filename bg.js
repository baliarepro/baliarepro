/* Latar foto alam Bali bergantian (permintaan pemilik 25 Nov 2026). Daftar foto: /img/bg/list.json (tools/bg-photos.py, Wikimedia Commons, lisensi bebas; kredit fotografer + lisensi tampil di pojok kiri bawah).
   Tiap kunjungan halaman mulai dari foto berikutnya; selama halaman terbuka foto berganti tiap 12 detik dengan transisi halus
   (tidak berganti bila pengunjung memilih "kurangi gerakan" atau mode hemat data). Hanya layar; cetak/PDF tidak terpengaruh. */
(function () {
  if (!window.matchMedia || !matchMedia("screen").matches || !document.body) return;
  var lang = (document.documentElement.lang || "id").slice(0, 2);
  var mobile = matchMedia("(max-width: 700px)").matches;
  var still = matchMedia("(prefers-reduced-motion: reduce)").matches || (navigator.connection && navigator.connection.saveData);
  var KEY = "bap-bg-i";
  fetch("/img/bg/list.json").then(function (r) { return r.ok ? r.json() : []; }).then(function (list) {
    if (!list || !list.length) return;
    var i = 0;
    try { i = (parseInt(localStorage.getItem(KEY), 10) + 1) || 0; } catch (e) {}
    i = i % list.length;
    var save = function () { try { localStorage.setItem(KEY, String(i)); } catch (e) {} };
    var src = function (p) { return "/img/bg/" + p.n + (mobile ? "-m" : "") + ".jpg"; };
    var wrap = document.createElement("div");
    wrap.className = "bap-bg"; wrap.setAttribute("aria-hidden", "true");
    var a = document.createElement("i"), b = document.createElement("i");
    wrap.appendChild(a); wrap.appendChild(b);
    var cap = document.createElement("a");
    cap.className = "bap-bg-cap"; cap.setAttribute("data-noi18n", ""); cap.translate = false; cap.target = "_blank"; cap.rel = "noopener";
    var show = function (layer, p) {
      layer.style.backgroundImage = 'url("' + src(p) + '")';
      cap.href = p.u;
      cap.textContent = "📷 " + (p[lang] || p.id) + (p.by ? " · " + p.by : "") + (p.lic ? " · " + p.lic : "");
      cap.title = "Wikimedia Commons";
    };
    var first = new Image();
    first.onload = function () {
      document.body.insertBefore(wrap, document.body.firstChild);
      document.body.appendChild(cap);
      show(a, list[i]); save();
      requestAnimationFrame(function () { a.classList.add("on"); document.documentElement.classList.add("bgr"); });
      if (still || list.length < 2) return;
      var cur = a, nxt = b;
      setInterval(function () {
        if (document.hidden) return;
        var j = (i + 1) % list.length, img = new Image();
        img.onload = function () {
          i = j; save(); show(nxt, list[i]);
          nxt.classList.add("on"); cur.classList.remove("on");
          var t = cur; cur = nxt; nxt = t;
        };
        img.src = src(list[j]);
      }, 12000);
    };
    first.src = src(list[i]);
  }).catch(function () {});
})();
