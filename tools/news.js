// Halaman News: daftar berita (news.html) dan halaman berita (news/<slug>.html).
const { CSS, top, shell, renderBlock, fmtDate } = require("./guide.js");
const { NEWS } = require("./news-content.js");

const N = {
  id: { hubTitle: "Berita Properti Bali – Kuta Selatan & sekitarnya | Bali Are Property",
    hubDesc: "Berita properti Bali terbaru dari Bali Are Property: proyek developer, investasi, jual beli hotel dan villa, infrastruktur, dan regulasi di Kuta Selatan, Kuta Utara, dan sekitarnya.",
    eyebrow: "News · Bali Are Property", h1: "Berita properti Bali",
    intro: "Kabar terbaru untuk calon buyer dan investor: proyek developer, transaksi besar, investasi, infrastruktur, dan aturan baru. Diperbarui setiap minggu, dengan tautan ke sumber aslinya.",
    latest: "Berita minggu ini", archive: "Berita sebelumnya", read: "Baca berita", sources: "Sumber berita", more: "Berita lainnya", back: "← Semua berita", published: "Diterbitkan" },
  en: { hubTitle: "Bali Property News – South Kuta & beyond | Bali Are Property",
    hubDesc: "The latest Bali property news from Bali Are Property: developer projects, investment, hotel and villa deals, infrastructure and regulation in South Kuta, North Kuta and beyond.",
    eyebrow: "News · Bali Are Property", h1: "Bali property news",
    intro: "Updates for buyers and investors: developer projects, major deals, investment, infrastructure and new rules. Updated every week, with links to the original sources.",
    latest: "This week's news", archive: "Earlier news", read: "Read news", sources: "News sources", more: "More news", back: "← All news", published: "Published" },
  ru: { hubTitle: "Новости недвижимости Бали – Южная Кута и окрестности | Bali Are Property",
    hubDesc: "Свежие новости недвижимости Бали от Bali Are Property: проекты девелоперов, инвестиции, сделки с отелями и виллами, инфраструктура и законы в Южной и Северной Куте.",
    eyebrow: "News · Bali Are Property", h1: "Новости недвижимости Бали",
    intro: "Новости для покупателей и инвесторов: проекты девелоперов, крупные сделки, инвестиции, инфраструктура и новые правила. Обновляется каждую неделю, со ссылками на первоисточники.",
    latest: "Новости недели", archive: "Предыдущие новости", read: "Читать", sources: "Источники", more: "Другие новости", back: "← Все новости", published: "Опубликовано" }
};

function renderNewsHub(o) {
  const { L, esc } = o, n = N[L];
  const card = (a, first) => `<a class="gd-card${first ? " first" : ""}" href="news/${a.slug}.html"><span class="tag">${esc(a[L].tag)} · ${esc(fmtDate(a.date, L))}</span><h2>${esc(a[L].title)}</h2><p>${esc(a[L].summary)}</p><span class="go">${esc(n.read)} →</span></a>`;
  // Berita minggu ini = semua berita dengan tanggal terbit paling baru (maksimal 7), sisanya arsip
  const newest = NEWS.length ? NEWS[0].date : "";
  const weekStart = newest ? new Date(Date.parse(newest) - 6 * 864e5).toISOString().slice(0, 10) : "";
  const latest = NEWS.filter((a) => a.date >= weekStart).slice(0, 7);
  const archive = NEWS.filter((a) => !latest.includes(a));
  const body = `  ${top({ ...o, up: "", current: "news" })}
  <header class="gd-hero">
    <div class="eyebrow">${esc(n.eyebrow)}</div>
    <h1>${esc(n.h1)}</h1>
    <p>${esc(n.intro)}</p>
  </header>
  <h2 class="gd-sec">${esc(n.latest)}</h2>
  <section class="gd-list" aria-label="${esc(n.latest)}">
      ${latest.map((a, i) => card(a, i === 0)).join("\n      ")}
  </section>
  ${archive.length ? `<h2 class="gd-sec">${esc(n.archive)}</h2>
  <section class="gd-list" aria-label="${esc(n.archive)}">
      ${archive.map((a) => card(a, false)).join("\n      ")}
  </section>` : ""}
  <div style="margin-top:36px">${o.cta}</div>`;
  return shell({ ...o, title: n.hubTitle, body });
}

function renderNewsItem(o) {
  const { L, esc, item } = o, n = N[L], t = item[L];
  const others = NEWS.filter((a) => a.slug !== item.slug).slice(0, 3);
  const body = `  ${top({ ...o, up: "../", current: "news" })}
  <p class="crumbs"><a href="../news.html">${esc(n.back)}</a></p>
  <article class="art">
    <span class="tag">${esc(t.tag)}</span>
    <h1>${esc(t.title)}</h1>
    <div class="meta">${esc(n.published)} ${esc(fmtDate(item.date, L))} · Bali Are Property</div>
    <p class="lead">${esc(t.summary)}</p>
    <div class="body">
      ${t.body.map((b) => renderBlock(b, L, esc)).join("\n      ")}
    </div>
    <section class="src"><h2>${esc(n.sources)}</h2><ol>${item.sources.map((s) => `<li><a href="${esc(s.u)}" target="_blank" rel="noopener">${esc(s.t)}</a></li>`).join("")}</ol></section>
  </article>
  <section class="hsec" aria-labelledby="h-more">
    <h2 id="h-more">${esc(n.more)}</h2>
    <div class="feat">
      ${others.map((a) => `<a class="fc" href="${a.slug}.html"><span class="eyebrow">${esc(a[L].tag)}</span><h3>${esc(a[L].title)}</h3></a>`).join("\n      ")}
    </div>
  </section>
  <div style="margin-top:36px">${o.cta.replace(/href="inquiry\.html/g, 'href="../inquiry.html')}</div>`;
  return shell({ ...o, title: t.title + " | Bali Are Property", body });
}

module.exports = { N, NEWS, renderNewsHub, renderNewsItem };
