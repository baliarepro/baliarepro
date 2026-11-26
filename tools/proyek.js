// Halaman Proyek Developer: daftar (proyek.html) dan detail (proyek/<slug>.html), 3 bahasa.
// Data: tools/proyek-content.js. Header/kontak/footer memakai shell & top dari guide.js.
const fs = require("fs");
const path = require("path");
const { top, shell } = require("./guide.js");
const { PROJECTS } = require("./proyek-content.js");

const WA = "62812868080";
const P = {
  id: { nav: "Proyek", hubTitle: "Proyek Developer di Bali – Villa & Apartemen Baru | Bali Are Property",
    hubDesc: "Proyek villa dan apartemen baru dari developer di Bali: harga langsung dari developer, skema cicilan sampai serah terima, didampingi Bali Are Property.",
    eyebrow: "Proyek Developer · Bali", h1: "Villa & apartemen baru dari developer pilihan",
    intro: "Proyek off-plan dan siap huni dengan harga langsung dari developer. Kami bantu bandingkan, jadwalkan kunjungan show unit, dan dampingi sampai serah terima.",
    from: "Mulai", aptFrom: "Apartemen mulai", villaFrom: "Villa mulai", done: "Target selesai", see: "Lihat proyek", limited: "Unit terbatas", sold: "Terjual",
    why: "Kenapa lewat Bali Are Property", whyH: "Beli proyek baru dengan tenang",
    whyP: "Harga sama dengan harga developer, tanpa biaya tambahan untuk pembeli. Kami bantu dari survei sampai serah terima.",
    whyItems: [["Dokumen diperiksa", "Sertifikat, izin bangunan, dan perjanjian kami periksa bersama Anda sebelum reservasi."], ["Perbandingan jujur", "Kami bandingkan dengan listing dan proyek lain di area yang sama."], ["Update progres", "Kabar progres pembangunan kami teruskan sampai serah terima."], ["Didampingi sampai AJB", "PPJB, jadwal pembayaran, notaris, hingga serah terima kunci."]],
    devH: "Untuk developer", devT: "Pasarkan proyek Anda ke buyer lokal & internasional",
    devP: "Halaman proyek 3 bahasa (Indonesia, English, Русский), posting di Instagram, Facebook, Threads, Telegram, video Reels/TikTok, dan laporan peminat rutin.", devBtn: "Daftarkan proyek",
    crumb: "Proyek Developer", two: "Pilihan unit", types: "Tipe unit & harga", typeCols: ["Tipe", "Kamar", "Tanah / bangunan", "Harga (incl. PPN)", "Status"],
    priceNote: "Harga termasuk PPN dan diserahkan fully furnished (interior lengkap; linen & peralatan makan tidak termasuk). Belum termasuk BPHTB 5%, notaris, dan biaya balik nama. Harga dapat berubah sewaktu-waktu oleh developer.",
    priceSrc: "Price list developer", payH: "Skema pembayaran", wellH: "Dirancang untuk hidup sehat", wellP: "Lima pilar wellness yang menjadi dasar seluruh kawasan.", wellC: "Wellness center",
    featH: "Fasilitas villa", rentH: "Investasi dengan rental pool", rentV: "Villa · proyeksi pendapatan bersih", rentA: "Apartemen · proyeksi pendapatan bersih",
    rentNote: "Angka di atas adalah proyeksi dari developer, bukan jaminan hasil. Bukan nasihat investasi.",
    teamH: "Tim proyek", team: { dev: "Developer", contractor: "Kontraktor utama", architect: "Arsitek & interior", landscape: "Lanskap", structure: "Sipil & struktur" },
    locH: "Lokasi", locP: "Detail lokasi, siteplan, dan jadwal kunjungan show unit kami berikan langsung lewat WhatsApp.", locBtn: "Tanya lokasi via WhatsApp",
    waBtn: "Minta price list & brosur", visit: "Jadwalkan kunjungan show unit", calc: "Hitung biaya beli →", direct: "Harga langsung dari developer, termasuk PPN",
    land: "luas lahan", unitsL: "villa + apartemen", beach: "ke pantai", gallery: "Galeri",
    disclaimer: "Informasi dari materi pemasaran developer (brosur, spesifikasi, dan price list). Render dan ilustrasi adalah gambaran artis. Konfirmasi ketersediaan unit via WhatsApp sebelum reservasi.",
    waMsg: (n) => `Halo Pak Bagoes, saya tertarik dengan proyek ${n}. Boleh minta price list, brosur, dan info lokasinya?`,
    visitMsg: (n) => `Halo Pak Bagoes, saya ingin menjadwalkan kunjungan show unit proyek ${n}.`,
    locMsg: (n) => `Halo Pak Bagoes, boleh info lokasi proyek ${n}?`,
    devMsg: "Halo Pak Bagoes, saya developer dan ingin memasarkan proyek kami lewat Bali Are Property." },
  en: { nav: "Projects", hubTitle: "Developer Projects in Bali – New Villas & Apartments | Bali Are Property",
    hubDesc: "New villa and apartment projects from developers in Bali: developer pricing, instalments until handover, with guidance from Bali Are Property.",
    eyebrow: "Developer Projects · Bali", h1: "New villas & apartments from selected developers",
    intro: "Off-plan and ready projects at developer prices. We help you compare, arrange show-unit visits, and guide you all the way to handover.",
    from: "From", aptFrom: "Apartments from", villaFrom: "Villas from", done: "Target completion", see: "View project", limited: "Limited units", sold: "Sold out",
    why: "Why buy through Bali Are Property", whyH: "Buy new projects with peace of mind",
    whyP: "Same price as buying from the developer, no extra fee for buyers. We help from site visit to handover.",
    whyItems: [["Documents checked", "We review the title, building permit and agreement with you before reservation."], ["Honest comparison", "We compare with other listings and projects in the same area."], ["Progress updates", "We pass on construction updates until handover."], ["Guided to the deed", "PPJB, payment schedule, notary and key handover."]],
    devH: "For developers", devT: "Market your project to local & international buyers",
    devP: "A project page in 3 languages (Indonesian, English, Russian), posts on Instagram, Facebook, Threads, Telegram, Reels/TikTok videos, and regular enquiry reports.", devBtn: "List your project",
    crumb: "Developer Projects", two: "Unit options", types: "Unit types & prices", typeCols: ["Type", "Bedrooms", "Land / building", "Price (incl. VAT)", "Status"],
    priceNote: "Prices include VAT and units are delivered fully furnished (linen and cutlery excluded). Excludes 5% BPHTB transfer tax, notary and title transfer fees. Prices may change at the developer's discretion.",
    priceSrc: "Developer price list", payH: "Payment plan", wellH: "Designed for well-being", wellP: "Five wellness pillars shape the whole estate.", wellC: "Wellness centre",
    featH: "Villa features", rentH: "Investment with a rental pool", rentV: "Villa · projected net income", rentA: "Apartment · projected net income",
    rentNote: "These figures are the developer's projections, not guaranteed returns. Not investment advice.",
    teamH: "Project team", team: { dev: "Developer", contractor: "Main contractor", architect: "Architecture & interior", landscape: "Landscape", structure: "Civil & structure" },
    locH: "Location", locP: "We share the exact location, site plan and show-unit visit times directly on WhatsApp.", locBtn: "Ask for the location on WhatsApp",
    waBtn: "Get price list & brochure", visit: "Book a show-unit visit", calc: "Calculate buying costs →", direct: "Developer pricing, VAT included",
    land: "land area", unitsL: "villas + apartments", beach: "to the beach", gallery: "Gallery",
    disclaimer: "Information from the developer's marketing materials (brochure, specifications and price list). Renders and illustrations are artist impressions. Please confirm availability on WhatsApp before reserving.",
    waMsg: (n) => `Hi Bagoes, I'm interested in the ${n} project. Could you send the price list, brochure and location details?`,
    visitMsg: (n) => `Hi Bagoes, I'd like to book a show-unit visit for ${n}.`,
    locMsg: (n) => `Hi Bagoes, could you share the location of ${n}?`,
    devMsg: "Hi Bagoes, I'm a developer and would like to market our project with Bali Are Property." },
  ru: { nav: "Проекты", hubTitle: "Проекты девелоперов на Бали – новые виллы и апартаменты | Bali Are Property",
    hubDesc: "Новые виллы и апартаменты от девелоперов Бали: цены девелопера, рассрочка до сдачи, сопровождение Bali Are Property.",
    eyebrow: "Проекты девелоперов · Бали", h1: "Новые виллы и апартаменты от надёжных девелоперов",
    intro: "Проекты на стадии строительства и готовые объекты по ценам девелопера. Поможем сравнить, организуем показ шоу-юнита и сопроводим до сдачи.",
    from: "От", aptFrom: "Апартаменты от", villaFrom: "Виллы от", done: "Плановая сдача", see: "Смотреть проект", limited: "Лоты ограничены", sold: "Продано",
    why: "Почему через Bali Are Property", whyH: "Покупка новостройки без лишних рисков",
    whyP: "Цена такая же, как у девелопера, без доплат для покупателя. Помогаем от просмотра до сдачи.",
    whyItems: [["Проверка документов", "Вместе с вами проверяем права на землю, разрешение на строительство и договор до брони."], ["Честное сравнение", "Сравниваем с другими объектами и проектами в том же районе."], ["Ход строительства", "Передаём новости о ходе строительства до сдачи."], ["Сопровождение до сделки", "PPJB, график платежей, нотариус и передача ключей."]],
    devH: "Девелоперам", devT: "Продвигайте проект среди местных и иностранных покупателей",
    devP: "Страница проекта на 3 языках (индонезийский, английский, русский), публикации в Instagram, Facebook, Threads, Telegram, видео Reels/TikTok и регулярные отчёты о запросах.", devBtn: "Разместить проект",
    crumb: "Проекты девелоперов", two: "Варианты", types: "Типы и цены", typeCols: ["Тип", "Спальни", "Участок / дом", "Цена (с НДС)", "Статус"],
    priceNote: "Цены с НДС, объекты сдаются полностью меблированными (бельё и посуда не входят). Не включены налог BPHTB 5%, услуги нотариуса и переоформление. Девелопер может изменить цены.",
    priceSrc: "Прайс-лист девелопера", payH: "График оплаты", wellH: "Создано для здоровья", wellP: "Пять принципов wellness лежат в основе всей территории.", wellC: "Wellness-центр",
    featH: "Оснащение вилл", rentH: "Инвестиции с арендным пулом", rentV: "Вилла · прогноз чистого дохода", rentA: "Апартаменты · прогноз чистого дохода",
    rentNote: "Цифры — прогноз девелопера, а не гарантия дохода. Не является инвестиционной рекомендацией.",
    teamH: "Команда проекта", team: { dev: "Девелопер", contractor: "Генподрядчик", architect: "Архитектура и интерьер", landscape: "Ландшафт", structure: "Конструкции" },
    locH: "Расположение", locP: "Точное местоположение, генплан и время показа шоу-юнита сообщаем в WhatsApp.", locBtn: "Узнать адрес в WhatsApp",
    waBtn: "Получить прайс и брошюру", visit: "Записаться на показ", calc: "Рассчитать расходы →", direct: "Цена девелопера, НДС включён",
    land: "площадь участка", unitsL: "виллы + апартаменты", beach: "до пляжа", gallery: "Галерея",
    disclaimer: "Информация из маркетинговых материалов девелопера (брошюра, спецификации, прайс-лист). Рендеры и иллюстрации — художественное изображение. Уточняйте наличие в WhatsApp перед бронированием.",
    waMsg: (n) => `Здравствуйте, Багус! Меня интересует проект ${n}. Пришлите, пожалуйста, прайс-лист, брошюру и расположение.`,
    visitMsg: (n) => `Здравствуйте, Багус! Хочу записаться на показ шоу-юнита ${n}.`,
    locMsg: (n) => `Здравствуйте, Багус! Подскажите расположение проекта ${n}.`,
    devMsg: "Здравствуйте, Багус! Я девелопер и хочу продвигать наш проект через Bali Are Property." }
};
const wa = (t) => `https://wa.me/${WA}?text=${encodeURIComponent(t)}`;
const rpShort = (n, L) => {
  const v = (n / 1e9).toFixed(2).replace(/0$/, "");
  return L === "id" ? "Rp" + v.replace(".", ",") + " M" : L === "ru" ? v.replace(".", ",") + " млрд IDR" : "IDR " + v + "B";
};
const priceTxt = (s, L) => (L === "id" ? s : L === "en" ? s.replace("Rp", "IDR ").replace(/ – /, "–").replace(/(\d),(\d+) M/g, "$1.$2B").replace(/(\d),(\d+)/g, "$1.$2") : s.replace("Rp", "").replace(/ M$/, " млрд IDR").replace(/ – /, "–"));
const COMPLETION = { id: (q) => q.replace(/Q(\d) /, "Kuartal $1 "), en: (q) => q, ru: (q) => q.replace(/Q(\d) /, "$1 кв. ") };

function imagesOf(root, slug) {
  const dir = path.join(root, "img/proyek", slug);
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir).filter((f) => /^\d+\.(jpe?g|png|webp)$/i.test(f)).sort((a, b) => parseInt(a) - parseInt(b)).map((f) => "img/proyek/" + slug + "/" + f);
}

const CSS = `<style>
.pj{--g:#123F36;--gold:#946410;--gold2:#D9A441;--ln:#E2DACB;--mut:#59625D;--card:#fff;--fill:#F0EADF;--fill2:#EDE6D8;--body:#3B4541;--gt:#123F36;--gt2:#7A520C}
@media (prefers-color-scheme: dark){:root:not([data-theme="light"]) .pj{--ln:#24392F;--mut:#A3B1A8;--card:#12241D;--fill:#173528;--fill2:#24392F;--body:#C9D3CC;--gt:#8CC9AE;--gt2:#D9A441;--gold:#D9A441}}
:root[data-theme="dark"] .pj{--ln:#24392F;--mut:#A3B1A8;--card:#12241D;--fill:#173528;--fill2:#24392F;--body:#C9D3CC;--gt:#8CC9AE;--gt2:#D9A441;--gold:#D9A441}
.pj h1,.pj h2,.pj h3,.pj h4{color:inherit}
.pj h2{font-family:"Bricolage Grotesque",Arial,sans-serif}
.pj-hero{background:var(--g);color:#F6F2EA;border-radius:22px;padding:44px 36px;margin:18px 0 26px;display:flex;flex-wrap:wrap;gap:28px;align-items:flex-end}
.pj-hero .eyebrow{color:var(--gold2)}
.pj-hero h1{font-family:"Bricolage Grotesque",Arial,sans-serif;font-size:clamp(34px,5vw,54px);line-height:1.03;margin:10px 0 12px;color:#F6F2EA}
.pj-hero p{color:#DCE7E1;max-width:620px;margin:0;font-size:17px}
.pj-feat+.pj-feat{margin-top:18px}
.pj-feat{display:flex;flex-wrap:wrap;background:var(--card);border:1px solid var(--ln);border-radius:22px;overflow:hidden;text-decoration:none;color:inherit}
.pj-feat .ph{flex:1 1 520px;min-height:340px;position:relative;background:var(--fill2)}
.pj-feat .ph img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover}
.pj-feat .tx{flex:1 1 380px;padding:30px;display:flex;flex-direction:column;gap:14px}
.pj-badge{display:inline-block;background:var(--g);color:#F6F2EA;font-size:12px;font-weight:600;padding:5px 11px;border-radius:999px}
.pj-badge.l{background:#F6F2EA;color:#123F36}
.pj-ph-tags{position:absolute;top:16px;left:16px;display:flex;gap:8px;flex-wrap:wrap}
.pj-dev{font-family:"JetBrains Mono",monospace;font-size:12px;letter-spacing:.12em;text-transform:uppercase;color:var(--gold)}
.pj-feat h2,.pj-h1{font-family:"Bricolage Grotesque",Arial,sans-serif;font-size:clamp(28px,3.4vw,38px);line-height:1.06;margin:4px 0 0}
.pj-kv{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:12px 18px;border-top:1px solid var(--ln);padding-top:14px;margin:0}
.pj-kv dt{font-size:12px;color:var(--mut)}.pj-kv dd{margin:2px 0 0;font-weight:600}
.pj-kv dd.big{font-family:"Bricolage Grotesque",Arial,sans-serif;font-size:24px;font-weight:700;color:var(--gt)}
.pj-btn{display:inline-flex;align-items:center;justify-content:center;gap:8px;min-height:48px;padding:0 20px;border-radius:12px;background:var(--g);color:#F6F2EA;text-decoration:none;font-weight:600}
.pj-btn.wa{background:#1F8F55;color:#fff}.pj-btn.o{background:transparent;border:1.5px solid var(--gt);color:var(--gt)}.pj-btn.gold{background:var(--gold2);color:#123F36;font-weight:700}
.pj-why{background:var(--card);border:1px solid var(--ln);border-radius:22px;padding:30px;margin-top:34px;display:flex;flex-wrap:wrap;gap:28px}
.pj-why>div:first-child{flex:1 1 280px}.pj-why .gr{flex:2 1 480px;display:grid;grid-template-columns:repeat(auto-fill,minmax(220px,1fr));gap:18px}
.pj-why b{display:block}.pj-why span{font-size:14px;color:var(--mut)}
.pj-dev-cta{background:var(--g);color:#F6F2EA;border-radius:22px;padding:34px;margin-top:34px;display:flex;flex-wrap:wrap;gap:22px;align-items:center;justify-content:space-between}
.pj-dev-cta h2{color:#F6F2EA;font-size:28px;margin:8px 0}.pj-dev-cta p{color:#DCE7E1;margin:0;max-width:640px}
.pj-dhero{position:relative;border-radius:22px;overflow:hidden;min-height:440px;display:flex;align-items:flex-end;background:#1B1612;margin:16px 0 0}
.pj-dhero img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;opacity:.7}
.pj-dhero .in{position:relative;padding:34px;color:#F6F2EA}
.pj-dhero h1{font-family:"Bricolage Grotesque",Arial,sans-serif;font-size:clamp(48px,8vw,84px);line-height:.95;margin:10px 0 12px;color:#fff;letter-spacing:-.02em}
.pj-dhero p{font-size:19px;max-width:640px;margin:0 0 18px;color:#F3ECE0}
.pj-dhero .eyebrow{color:#E9C27A}
.pj-stats{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));background:var(--g);color:#F6F2EA;border-radius:0 0 18px 18px;margin-bottom:30px}
.pj-stats div{padding:18px 20px;border-right:1px solid #2C5A4F}.pj-stats div:last-child{border:0}
.pj-stats b{display:block;font-family:"Bricolage Grotesque",Arial,sans-serif;font-size:26px}.pj-stats span{font-size:13px;color:#B9CCC4}
.pj-cols{display:flex;flex-wrap:wrap;gap:30px;align-items:flex-start}
.pj-main{flex:999 1 600px;min-width:0;display:flex;flex-direction:column;gap:40px}
.pj-side{flex:1 1 300px;min-width:0;position:sticky;top:70px;display:flex;flex-direction:column;gap:14px}
.pj-box{background:var(--card);border:1px solid var(--ln);border-radius:18px;padding:22px}
.pj-two{display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:16px}
.pj-two article{background:var(--card);border:1px solid var(--ln);border-radius:18px;padding:22px;display:flex;flex-direction:column;gap:12px}
.pj-two h3{font-family:"Bricolage Grotesque",Arial,sans-serif;font-size:24px;margin:0;line-height:1.15}
.pj-two p{margin:0;font-size:15px;color:var(--body)}
.pj-tw{overflow-x:auto;border:1px solid var(--ln);border-radius:16px;background:var(--card)}
.pj-tw table{width:100%;border-collapse:collapse;font-size:15px;min-width:600px}
.pj-tw th{background:var(--fill);text-align:left;padding:12px 16px;font-weight:600}.pj-tw td{padding:12px 16px;border-top:1px solid var(--ln)}
.pj-st{font-size:12px;font-weight:600;padding:4px 10px;border-radius:999px;background:#F6EAD0;color:#7A520C;white-space:nowrap}.pj-st.s{background:var(--fill2);color:var(--mut)}
.pj-note{font-size:13px;color:var(--mut);margin:10px 0 0}
.pj-steps{list-style:none;margin:0;padding:0;display:grid;grid-template-columns:repeat(auto-fit,minmax(150px,1fr));gap:12px}
.pj-steps li{background:var(--card);border:1px solid var(--ln);border-radius:16px;padding:16px}.pj-steps li:last-child{background:var(--g);color:#F6F2EA;border-color:var(--gt)}
.pj-steps small{font-family:"JetBrains Mono",monospace;color:var(--gold)}.pj-steps li:last-child small{color:var(--gold2)}
.pj-steps b{display:block;margin-top:4px}.pj-steps span{font-size:14px;color:var(--mut)}.pj-steps li:last-child span{color:#DCE7E1}
.pj-pill5{display:grid;grid-template-columns:repeat(auto-fit,minmax(150px,1fr));gap:12px}
.pj-pill5 div{background:var(--card);border:1px solid var(--ln);border-radius:16px;padding:16px}
.pj-pill5 small{font-family:"JetBrains Mono",monospace;font-size:11px;letter-spacing:.12em;text-transform:uppercase;color:var(--gold)}
.pj-pill5 b{display:block;margin:6px 0 4px}.pj-pill5 span{font-size:13px;color:var(--mut)}
.pj-band{margin-top:14px;background:var(--g);color:#F6F2EA;border-radius:16px;padding:18px 22px;display:flex;flex-wrap:wrap;gap:8px 20px}
.pj-band em{font-style:normal;font-family:"JetBrains Mono",monospace;font-size:12px;letter-spacing:.14em;text-transform:uppercase;color:var(--gold2)}
.pj-gal{display:grid;grid-template-columns:repeat(auto-fill,minmax(220px,1fr));gap:10px}
.pj-gal img{width:100%;aspect-ratio:4/3;object-fit:cover;border-radius:14px;display:block}
.pj-team{display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:1px;background:var(--ln);border:1px solid var(--ln);border-radius:16px;overflow:hidden;margin:0}
.pj-team div{background:var(--card);padding:14px 16px}.pj-team dt{font-size:12px;color:var(--mut)}.pj-team dd{margin:2px 0 0;font-weight:600}
.pj-side .pj-btn{width:100%;box-sizing:border-box}
@media(max-width:700px){.pj-stats{grid-template-columns:repeat(2,minmax(0,1fr))}.pj-stats div:nth-child(2){border-right:0}.pj-hero,.pj-dhero .in{padding:26px 20px}.pj-side{position:static}}
</style>`;
const IC_WA = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 20l1.4-4.2A8 8 0 1 1 8.6 19z"/></svg>';

const APT = { id: "Apartemen", en: "Apartments", ru: "Апартаменты" };
// Ringkasan harga/fakta per proyek (kartu daftar & kotak samping). c.kv (opsional) menimpa bawaan.
function kvOf(p, L) {
  const t = P[L], c = p[L];
  if (c.kv) return [[t.from, rpShort(p.priceFrom, L), 1], ...c.kv];
  const out = [[c.apt ? t.aptFrom : t.villaFrom, rpShort(p.priceFrom, L), 1]];
  if (c.apt && p.villaFrom) out.push([t.villaFrom, rpShort(p.villaFrom, L), 1]);
  if (p.completion) out.push([t.done, COMPLETION[L](p.completion)]);
  if (c.villa && c.apt) out.push([`Villa · ${APT[L].toLowerCase()}`, `${c.villa.own} · ${c.apt.own}`]);
  return out;
}

function renderProyekHub(o) {
  const { L, esc, root } = o, t = P[L];
  const cards = PROJECTS.map((p) => {
    const c = p[L], img0 = imagesOf(root, p.slug)[0], img = img0 && (L === "id" ? "" : "../") + img0;
    return `<a class="pj-feat" href="proyek/${p.slug}.html">
    <div class="ph">${img ? `<img src="${img}" alt="${esc(p.name)}" loading="lazy">` : ""}<div class="pj-ph-tags"><span class="pj-badge">${esc(t.limited)}</span></div></div>
    <div class="tx"><div><div class="pj-dev">${esc(p.developer)}</div><h2>${esc(p.name)} — ${esc(c.tagline)}</h2><div style="color:var(--mut)">${esc(c.area)}</div></div>
      <p style="margin:0">${esc(c.intro)}</p>
      <dl class="pj-kv">${kvOf(p, L).map((x) => `<div><dt>${esc(x[0])}</dt><dd${x[2] ? ' class="big"' : ""}>${esc(x[1])}</dd></div>`).join("")}</dl>
      <span class="pj-btn" style="align-self:flex-start;margin-top:auto">${esc(t.see)} →</span></div></a>`;
  }).join("\n");
  const body = `  ${top({ ...o, up: "", current: "proyek" })}
  ${CSS}
  <div class="pj">
  <section class="pj-hero"><div style="flex:1 1 480px"><div class="eyebrow">${esc(t.eyebrow)}</div><h1>${esc(t.h1)}</h1><p>${esc(t.intro)}</p></div></section>
  ${cards}
  <section class="pj-why"><div><div class="pj-dev">${esc(t.why)}</div><h2 style="font-size:28px;margin:8px 0">${esc(t.whyH)}</h2><p style="margin:0;color:var(--body)">${esc(t.whyP)}</p></div>
    <div class="gr">${t.whyItems.map((w) => `<div><b>${esc(w[0])}</b><span>${esc(w[1])}</span></div>`).join("")}</div></section>
  <section class="pj-dev-cta"><div><div class="pj-dev" style="color:var(--gold2)">${esc(t.devH)}</div><h2>${esc(t.devT)}</h2><p>${esc(t.devP)}</p></div><a class="pj-btn gold" href="${wa(t.devMsg)}" target="_blank" rel="noopener">${esc(t.devBtn)}</a></section>
  </div>`;
  return shell({ ...o, title: t.hubTitle, body });
}

function renderProyek(o) {
  const { L, esc, project: p, root } = o, t = P[L], c = p[L];
  const imgs = imagesOf(root, p.slug).map((x) => (L === "id" ? "../" : "../../") + x);
  const row = (r) => `<tr><td><b>${esc(c.rowNames[r.k])}</b></td><td>${esc(r.beds)}</td><td>${esc(L === "ru" ? r.size.replace(/m²/g, "м²").replace("net", "чистая") : L === "en" ? r.size.replace(/(\d),(\d)/g, "$1.$2") : r.size)}</td><td style="font-weight:700;color:var(--gt)">${r.price ? esc(typeof r.price === "object" ? r.price[L] : priceTxt(r.price, L)) : "–"}</td><td><span class="pj-st${r.status === "sold" ? " s" : ""}">${esc(r.status === "sold" ? t.sold : t.limited)}</span></td></tr>`;
  const prod = (x, from) => `<article><div style="display:flex;justify-content:space-between;align-items:center;gap:8px"><span class="pj-dev">${x === c.villa ? "Villa" : APT[L]}</span>${x.own ? `<span class="pj-badge l" style="border:1px solid var(--ln)">${esc(x.own)}</span>` : ""}</div>
      <h3>${esc(x.h)}</h3><p>${esc(x.p)}</p>
      <dl class="pj-kv"><div><dt>${esc(x.a)}</dt><dd>${esc(x.av)}</dd></div><div><dt>${esc(x.b)}</dt><dd>${esc(x.bv)}</dd></div><div><dt>${esc(t.from)}</dt><dd class="big">${esc(rpShort(from, L))}</dd></div><div><dt>Status</dt><dd style="color:var(--gt2)">${esc(t.limited)}</dd></div></dl></article>`;
  const body = `  ${top({ ...o, up: "../", current: "proyek" })}
  ${CSS}
  <div class="pj">
  <p class="crumbs"><a href="../proyek.html">← ${esc(t.crumb)}</a></p>
  <section class="pj-dhero">${imgs[0] ? `<img src="${imgs[0]}" alt="${esc(p.name)}">` : ""}<div class="in">
    <div class="eyebrow">${esc(p.developer)} · ${esc(c.area)}</div><h1>${esc(p.name)}</h1><p>${esc(c.intro)}</p>
    <div style="display:flex;flex-wrap:wrap;gap:8px">${(c.badges || [`Villa · ${c.villa.own}`, `${APT[L]} · ${c.apt.own}`]).map((b) => `<span class="pj-badge l">${esc(b)}</span>`).join("")}${p.completion ? `<span class="pj-badge" style="background:var(--gold2);color:#123F36">${esc(t.done)} ${esc(COMPLETION[L](p.completion))}</span>` : ""}<span class="pj-badge">${esc(t.limited)}</span></div></div></section>
  <div class="pj-stats">${(c.stats || [[`${p.units.land.toLocaleString(L === "en" ? "en-US" : "id-ID")} ${L === "ru" ? "м²" : "m²"}`, t.land], [`${p.units.villa} + ${p.units.apt}`, t.unitsL], ["±800 m", t.beach], [rpShort(p.priceFrom, L), t.aptFrom]]).map((x) => `<div><b>${esc(x[0])}</b><span>${esc(x[1])}</span></div>`).join("")}</div>
  <div class="pj-cols"><div class="pj-main">
    <section><h2>${esc(t.two)}</h2><div class="pj-two">${c.villa ? prod(c.villa, p.villaFrom || p.priceFrom) : ""}${c.apt ? prod(c.apt, p.priceFrom) : ""}</div></section>
    <section><h2>${esc(t.types)}</h2><div class="pj-tw"><table><thead><tr>${t.typeCols.map((h, i) => (i === 3 && c.priceCol) || h).map((h) => `<th scope="col">${esc(h)}</th>`).join("")}</tr></thead><tbody>${p.rows.map(row).join("")}</tbody></table></div><p class="pj-note">${esc(c.priceNote || t.priceNote)}</p></section>
    <section><h2>${esc(t.payH)}</h2><ol class="pj-steps">${c.pay.map((s, i) => `<li><small>0${i + 1}</small><b>${esc(s[0])}</b><span>${esc(s[1])}</span></li>`).join("")}</ol><p class="pj-note">${esc(c.payNote)}</p></section>
    ${imgs.length > 1 ? `<section><h2>${esc(t.gallery)}</h2><div class="pj-gal">${imgs.slice(1).map((x) => `<img src="${x}" alt="${esc(p.name)}" loading="lazy">`).join("")}</div><p class="pj-note">${esc(L === "id" ? "Render dan ilustrasi adalah gambaran artis dari developer." : L === "en" ? "Renders and illustrations are the developer's artist impressions." : "Рендеры и иллюстрации — художественное изображение девелопера.")}</p></section>` : ""}
    ${c.pillars ? `<section><h2>${esc(c.pillH || t.wellH)}</h2><p style="margin:-6px 0 14px;color:var(--body)">${esc(c.pillP || t.wellP)}</p><div class="pj-pill5">${c.pillars.map((x) => `<div><small>${esc(x[0])}</small><b>${esc(x[1])}</b><span>${esc(x[2])}</span></div>`).join("")}</div>
      ${c.wellness ? `<div class="pj-band"><em>${esc(c.wellC || t.wellC)}</em>${c.wellness.map((w) => `<span>${esc(w)}</span>`).join('<span style="color:#4E7A6E">·</span>')}</div>` : ""}</section>` : ""}
    <section><h2>${esc(c.featH || t.featH)}</h2><div class="pj-two">${c.feats.map((f) => `<article><h3 style="font-size:18px">${esc(f[0])}</h3><ul style="margin:0;padding-left:18px;font-size:14px;color:var(--body)">${f[1].map((x) => `<li>${esc(x)}</li>`).join("")}</ul></article>`).join("")}</div></section>
    ${c.rental ? `<section><h2>${esc(t.rentH)}</h2><p style="margin:-6px 0 14px;color:var(--body)">${esc(c.rental.p)}</p><div class="pj-two"><div class="pj-box"><div style="font-size:13px;color:var(--mut)">${esc(t.rentV)}</div><div style="font-family:'Bricolage Grotesque',Arial,sans-serif;font-size:22px;font-weight:700;color:var(--gt)">${esc(c.rental.villa)}</div></div><div class="pj-box"><div style="font-size:13px;color:var(--mut)">${esc(t.rentA)}</div><div style="font-family:'Bricolage Grotesque',Arial,sans-serif;font-size:22px;font-weight:700;color:var(--gt)">${esc(c.rental.apt)}</div></div></div><p class="pj-note">${esc(t.rentNote)}</p></section>` : ""}
    ${p.team ? `<section><h2>${esc(t.teamH)}</h2><dl class="pj-team">${p.team.map((x) => `<div><dt>${esc(t.team[x[0]])}</dt><dd>${esc(x[1])}</dd></div>`).join("")}</dl></section>` : ""}
  </div>
  <aside class="pj-side">
    <div class="pj-box" style="display:flex;flex-direction:column;gap:12px">
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px">${kvOf(p, L).filter((x) => x[2]).map((x) => `<div><div style="font-size:12px;color:var(--mut)">${esc(x[0])}</div><div style="font-family:'Bricolage Grotesque',Arial,sans-serif;font-size:24px;font-weight:700;color:var(--gt)">${esc(x[1])}</div></div>`).join("")}</div>
      <div style="font-size:13px;color:var(--mut)">${esc(c.direct || t.direct)}</div>
      <a class="pj-btn wa" href="${wa(t.waMsg(p.name))}" target="_blank" rel="noopener">${IC_WA}${esc(t.waBtn)}</a>
      <a class="pj-btn o" href="${wa(t.visitMsg(p.name))}" target="_blank" rel="noopener">${esc(t.visit)}</a>
      <a href="../kalkulator.html?harga=${p.priceFrom}" style="text-align:center;font-weight:600">${esc(t.calc)}</a>
    </div>
    <div class="pj-box"><b>${esc(t.locH)}</b><p style="margin:6px 0 10px;font-size:14px;color:var(--body)">${esc(c.area)}. ${esc(t.locP)}</p>${c.near ? `<ul style="margin:0 0 10px;padding-left:18px;font-size:14px;color:var(--body)">${c.near.map((x) => `<li>${esc(x)}</li>`).join("")}</ul>` : ""}<a href="${wa(t.locMsg(p.name))}" target="_blank" rel="noopener" style="font-weight:600">${esc(t.locBtn)} →</a></div>
    <div class="pj-box" style="background:var(--g);color:#F6F2EA;border-color:var(--gt)"><div style="font-size:12px;color:#B9CCC4">Developer</div><div style="font-family:'Bricolage Grotesque',Arial,sans-serif;font-size:20px;font-weight:700">${esc(p.developer)}</div><div style="font-size:13px;color:#DCE7E1">${esc(c.devAbout)}</div></div>
  </aside></div>
  <p class="pj-note" style="margin-top:34px;border-top:1px solid var(--ln);padding-top:14px">${esc(t.disclaimer)}</p>
  </div>`;
  return shell({ ...o, title: `${p.name} – ${c.tagline} | Bali Are Property`, body });
}

module.exports = { P, PROJECTS, renderProyekHub, renderProyek, imagesOf, rpShort };
