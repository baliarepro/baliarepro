// Kalkulator biaya beli / sewa properti di Bali (3 bahasa): kalkulator.html, en/kalkulator.html, ru/kalkulator.html.
// Tarif (periksa bila aturan berubah, lalu build ulang):
// - BPHTB 5% × (nilai transaksi − NPOPTKP); NPOPTKP minimal Rp80 jt (UU 1/2022 HKPD); Badung: Perda Kab. Badung 7/2023.
// - PPh final penjual 2,5% (PP 34/2016). Sewa tanah/bangunan: PPh final 10% (PP 34/2017).
// - Honor PPAT maks. 1% nilai transaksi (PP 24/2016 Pasal 32).
// - PNBP pendaftaran peralihan hak ≈ (nilai tanah / 1.000) + Rp50.000 (PP 128/2015).
// - PPN properti baru dari developer PKP: efektif 11% (12% × DPP 11/12). PPN DTP rumah ≤ Rp5 M: 100% atas bagian harga s.d. Rp2 M,
//   berlaku s.d. 31 Des 2026 (PMK 60/2025; rencana perpanjangan 2027). Ubah PPN_DTP_UNTIL bila diperpanjang.
const { T: HT, CSS: HOME_CSS } = require("./home.js");
const PPN_DTP_UNTIL = "2026-12-31";

const C = {
  id: {
    title: "Kalkulator Biaya Beli Tanah & Villa di Bali (BPHTB, PPAT, PPh) | Bali Are Property",
    desc: "Hitung perkiraan biaya beli properti di Bali: BPHTB 5%, honor PPAT/notaris, PNBP balik nama, PPN developer, PPh penjual 2,5%, serta biaya sewa jangka panjang (leasehold).",
    eyebrow: "Alat untuk pembeli", h1: "Kalkulator Biaya Beli Properti di Bali",
    lead: "Perkiraan cepat pajak dan biaya resmi saat membeli atau menyewa jangka panjang tanah, villa, atau rumah di Bali.",
    tabBuy: "Beli (AJB / balik nama)", tabLease: "Sewa jangka panjang (leasehold)",
    price: "Harga transaksi (Rp)", npop: "NPOPTKP (Rp)", npopHint: "Nilai tidak kena BPHTB. Minimal Rp80 jt menurut UU HKPD; konfirmasi angka daerah ke PPAT.",
    ppat: "Honor PPAT/notaris (%)", ppatHint: "Maksimal 1% dari nilai transaksi (PP 24/2016). Sering bisa dinegosiasikan.",
    dev: "Properti baru dari developer (dikenai PPN)", dtp: "Rumah/villa siap huni ≤ Rp5 Miliar: insentif PPN DTP (s.d. 31 Des 2026)",
    lprice: "Total harga sewa (Rp)", years: "Lama sewa (tahun)", lnot: "Biaya akta notaris (%)", lnotHint: "Tidak diatur tarif tetap; isi sesuai penawaran notaris.",
    buyerH: "Biaya untuk pembeli", sellerH: "Kewajiban penjual (info)", leaseH: "Rincian sewa",
    bphtb: "BPHTB (5%)", ppatFee: "Honor PPAT/notaris", pnbp: "PNBP balik nama sertifikat (perkiraan)", ppn: "PPN 11%", ppnDtp: "PPN ditanggung pemerintah",
    total: "Total biaya pembeli", ofPrice: "dari harga", grand: "Total yang disiapkan (harga + biaya)",
    pph: "PPh final penjual (2,5%)", pphNote: "Dibayar penjual sebelum AJB ditandatangani.",
    perYear: "Harga sewa per tahun", pphL: "PPh final sewa (10%)", pphLNote: "Kewajiban pemberi sewa; bila penyewa badan usaha, penyewa wajib memotongnya.", lnotFee: "Akta notaris (perkiraan)", ltotal: "Total yang disiapkan penyewa",
    wnaH: "Pembeli WNA?", wna: ["WNA tidak dapat memegang SHM (hak milik). Pilihan umum: sewa jangka panjang (leasehold), Hak Pakai untuk rumah tinggal bagi WNA yang memenuhi syarat, atau HGB atas nama PT PMA.", "Leasehold biasanya 25–30 tahun dengan opsi perpanjangan yang dituangkan dalam akta notaris.", "Kami bisa merekomendasikan notaris/PPAT dan konsultan untuk struktur yang sesuai."],
    note: "Perkiraan saja, bukan nasihat pajak atau hukum. Angka akhir ditentukan PPAT/notaris dan instansi pajak berdasarkan nilai transaksi atau NJOP yang berlaku. Belum termasuk komisi agen, biaya cek sertifikat, PBB tahunan, dan biaya perizinan.",
    ask: "Mau hitungan untuk listing tertentu?", askP: "Kirim nama listing atau budget Anda, kami bantu rinciannya dan rekomendasi notaris.", wa: "Tanya via WhatsApp", list: "Lihat listing",
    waText: "Halo Pak Bagoes, saya ingin konsultasi biaya beli properti di Bali." },
  en: {
    title: "Bali Property Purchase Cost Calculator (Taxes, Notary, Leasehold) | Bali Are Property",
    desc: "Estimate the cost of buying property in Bali: 5% BPHTB transfer tax, PPAT/notary fee, title transfer fee, developer VAT, 2.5% seller tax, and long-term leasehold costs.",
    eyebrow: "Buyer tool", h1: "Bali Property Purchase Cost Calculator",
    lead: "A quick estimate of the official taxes and fees when buying or leasing land, a villa or a house in Bali.",
    tabBuy: "Buy (freehold transfer)", tabLease: "Long-term lease (leasehold)",
    price: "Transaction price (IDR)", npop: "Tax-free threshold NPOPTKP (IDR)", npopHint: "Value exempt from BPHTB. At least IDR 80M under the regional tax law; confirm the local figure with your PPAT.",
    ppat: "PPAT/notary fee (%)", ppatHint: "Maximum 1% of the transaction value (Government Regulation 24/2016). Often negotiable.",
    dev: "New property from a developer (VAT applies)", dtp: "Ready house/villa ≤ IDR 5 billion: government VAT incentive (until 31 Dec 2026)",
    lprice: "Total lease price (IDR)", years: "Lease term (years)", lnot: "Notary deed fee (%)", lnotHint: "No fixed tariff; use your notary's quote.",
    buyerH: "Buyer's costs", sellerH: "Seller's obligations (info)", leaseH: "Lease breakdown",
    bphtb: "BPHTB transfer tax (5%)", ppatFee: "PPAT/notary fee", pnbp: "Title transfer fee, PNBP (estimate)", ppn: "VAT 11%", ppnDtp: "VAT borne by the government",
    total: "Total buyer costs", ofPrice: "of price", grand: "Total to prepare (price + costs)",
    pph: "Seller's final income tax (2.5%)", pphNote: "Paid by the seller before the deed (AJB) is signed.",
    perYear: "Lease price per year", pphL: "Final tax on lease (10%)", pphLNote: "The lessor's obligation; if the lessee is a company, the lessee must withhold it.", lnotFee: "Notary deed (estimate)", ltotal: "Total to prepare (lessee)",
    wnaH: "Foreign buyer?", wna: ["Foreigners cannot hold SHM (freehold) title. Common options: a long-term lease (leasehold), Hak Pakai (right of use) for a residence for eligible foreigners, or HGB held by a PT PMA company.", "Leaseholds usually run 25–30 years with extension options written into the notarial deed.", "We can recommend a notary/PPAT and advisers for the right structure."],
    note: "Estimate only, not tax or legal advice. Final figures are set by the PPAT/notary and the tax office based on the transaction value or the applicable NJOP. Excludes agent commission, title checks, annual land tax (PBB) and permits.",
    ask: "Want a breakdown for a specific listing?", askP: "Send us the listing or your budget and we'll prepare the numbers and recommend a notary.", wa: "Ask on WhatsApp", list: "See listings",
    waText: "Hello Pak Bagoes, I'd like advice on the costs of buying property in Bali." },
  ru: {
    title: "Калькулятор расходов на покупку недвижимости на Бали (налоги, нотариус, лизхолд) | Bali Are Property",
    desc: "Расчёт расходов при покупке недвижимости на Бали: налог BPHTB 5%, услуги PPAT/нотариуса, переоформление сертификата, НДС застройщика, налог продавца 2,5% и долгосрочная аренда (лизхолд).",
    eyebrow: "Инструмент покупателя", h1: "Калькулятор расходов на покупку недвижимости на Бали",
    lead: "Быстрая оценка официальных налогов и сборов при покупке или долгосрочной аренде земли, виллы или дома на Бали.",
    tabBuy: "Покупка (переоформление)", tabLease: "Долгосрочная аренда (лизхолд)",
    price: "Цена сделки (IDR)", npop: "Необлагаемый минимум NPOPTKP (IDR)", npopHint: "Сумма, не облагаемая BPHTB. Не менее 80 млн IDR по закону о региональных налогах; уточните у PPAT.",
    ppat: "Услуги PPAT/нотариуса (%)", ppatHint: "Не более 1% от суммы сделки (Постановление 24/2016). Часто обсуждается.",
    dev: "Новый объект от застройщика (облагается НДС)", dtp: "Готовый дом/вилла ≤ 5 млрд IDR: льгота по НДС (до 31.12.2026)",
    lprice: "Общая сумма аренды (IDR)", years: "Срок аренды (лет)", lnot: "Нотариальный договор (%)", lnotHint: "Фиксированного тарифа нет; укажите по предложению нотариуса.",
    buyerH: "Расходы покупателя", sellerH: "Обязательства продавца (справочно)", leaseH: "Расчёт аренды",
    bphtb: "Налог BPHTB (5%)", ppatFee: "Услуги PPAT/нотариуса", pnbp: "Сбор за переоформление, PNBP (оценка)", ppn: "НДС 11%", ppnDtp: "НДС за счёт государства",
    total: "Итого расходы покупателя", ofPrice: "от цены", grand: "Всего подготовить (цена + расходы)",
    pph: "Окончательный налог продавца (2,5%)", pphNote: "Оплачивается продавцом до подписания акта (AJB).",
    perYear: "Аренда в год", pphL: "Окончательный налог на аренду (10%)", pphLNote: "Обязанность арендодателя; если арендатор — компания, она удерживает налог.", lnotFee: "Нотариальный договор (оценка)", ltotal: "Всего подготовить (арендатор)",
    wnaH: "Покупатель-иностранец?", wna: ["Иностранцы не могут владеть SHM (полная собственность). Распространённые варианты: долгосрочная аренда (лизхолд), Hak Pakai (право пользования) жильём для иностранцев, отвечающих требованиям, или HGB на компанию PT PMA.", "Лизхолд обычно 25–30 лет с правом продления, прописанным в нотариальном договоре.", "Мы порекомендуем нотариуса/PPAT и консультантов для подходящей схемы."],
    note: "Только оценка, не налоговая и не юридическая консультация. Итоговые суммы определяют PPAT/нотариус и налоговая служба по цене сделки или действующему NJOP. Без комиссии агента, проверки сертификата, ежегодного налога PBB и разрешений.",
    ask: "Нужен расчёт по конкретному объекту?", askP: "Пришлите объект или бюджет — подготовим расчёт и порекомендуем нотариуса.", wa: "Написать в WhatsApp", list: "Смотреть объекты",
    waText: "Hello Pak Bagoes, I'd like advice on the costs of buying property in Bali. (Russian-speaking client)" }
};

const CSS = `<style>
.kc-hero{padding-block:48px 18px;display:grid;gap:12px}
.kc-hero h1{font-size:clamp(30px,5.6vw,52px);font-weight:800;letter-spacing:-.025em;line-height:1.05;text-wrap:balance}
.kc-hero .lead{max-width:62ch;font-size:18px;margin:0}
.kc{display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1fr);gap:20px;align-items:start}
@media (max-width:760px){.kc{grid-template-columns:1fr}}
.kc-box{background:var(--surface);border:1px solid var(--line);border-radius:18px;padding:22px;display:grid;gap:16px}
.kc-tabs{display:flex;gap:6px;background:var(--sea-soft);border-radius:999px;padding:4px}
.kc-tabs button{flex:1;border:0;background:transparent;border-radius:999px;padding:10px 12px;font:inherit;font-weight:600;color:var(--sea);cursor:pointer}
.kc-tabs button[aria-selected="true"]{background:var(--sea);color:#fff}
.kc label{display:grid;gap:6px;font-weight:600;font-size:15px}
.kc input[type=text]{font:inherit;font-size:18px;font-variant-numeric:tabular-nums;padding:12px 14px;border:1.5px solid var(--line);border-radius:12px;background:var(--bg);color:var(--ink);width:100%;box-sizing:border-box}
.kc input[type=text]:focus{outline:2px solid var(--sea);outline-offset:1px}
.kc .hint{font-weight:400;font-size:13px;color:var(--muted)}
.kc .chk{display:flex;gap:10px;align-items:flex-start;font-weight:500}
.kc .chk input{margin-top:4px;width:18px;height:18px;accent-color:var(--sea)}
.kc-res h2{font-size:20px;margin:0}
.kc-res table{width:100%;border-collapse:collapse;font-variant-numeric:tabular-nums}
.kc-res td{padding:9px 0;border-bottom:1px solid var(--line);vertical-align:top}
.kc-res td:last-child{text-align:right;font-weight:600;white-space:nowrap;padding-left:12px}
.kc-res tr.neg td:last-child{color:#1A8D4A}
.kc-res tr.sum td{border-bottom:0;border-top:1.5px solid var(--ink);font-weight:800;font-size:17px;padding-top:12px}
.kc-res tr.sum td:last-child{color:var(--sea);font-size:20px}
.kc-res .fx{display:block;font-size:12px;font-weight:500;color:var(--muted)}
.kc-res .sub{font-size:13px;color:var(--muted);display:block;font-weight:400}
.kc-grand{background:var(--sea);color:#fff;border-radius:14px;padding:16px 18px;display:grid;gap:2px}
.kc-grand small{opacity:.8}
.kc-grand b{font-size:clamp(22px,4vw,28px);font-family:var(--display)}
.kc-grand .fx{color:#D9E5DF;font-size:13px}
.kc-wna{background:var(--sand-soft);border-radius:18px;padding:22px;margin-top:20px;display:grid;gap:8px}
.kc-wna h2{font-size:20px}
.kc-wna ul{margin:0;padding-left:20px;display:grid;gap:6px}
.kc-note{font-size:13px;color:var(--muted);margin-top:16px;max-width:80ch}
.ask{background:var(--sea-soft);border-radius:20px;padding:28px 24px;margin-top:30px;display:grid;gap:10px}
.ask h2{font-size:clamp(22px,3.4vw,30px)}
.ask p{margin:0;color:var(--muted)}
</style>`;

function renderCalc({ L, head, seoBlock, flags, contact, footer, copyScript, i18nSrc, esc, kurs }) {
  const c = C[L], h = HT[L];
  const wa = "https://wa.me/62812868080?text=" + encodeURIComponent(c.waText);
  const fx = L !== "id" && kurs ? { usd: kurs.usd, eur: kurs.eur || 0 } : null;
  return `<!doctype html>
<html lang="${L}" data-static-lang="${L}">
<head>${head}<title>${esc(c.title)}</title>
${seoBlock}
${HOME_CSS}
${CSS}
</head>
<body>
<div class="wrap home">
  <div class="home-top">
    <a class="eyebrow home-link" href="./"><svg class="bap-mark" viewBox="0 0 120 120" aria-hidden="true" style="width:32px;height:32px;vertical-align:-10px;margin-right:10px"><path d="M12 100V86h6V72h6V58h6V44h6V30h6V18h12v82zM108 100V86h-6V72h-6V58h-6V44h-6V30h-6V18H66v82z" fill="currentColor"/><circle cx="60" cy="44" r="7" fill="#D6BC84"/><path d="M8 110q13-7 26 0t26 0 26 0 26 0" fill="none" stroke="#D6BC84" stroke-width="6" stroke-linecap="round"/></svg>Bali Are Property</a>
    <nav aria-label="Menu">
      <a href="about.html">${esc(h.nav[3])}</a>
      <a href="listings.html">${esc(h.nav[0])}</a>
      <a href="news.html">${esc(h.nav[1])}</a>
      <a href="guide.html">${esc(h.nav[5])}</a>
      <a href="faq.html">${esc(h.nav[4])}</a>
      <a href="#kontak">${esc(h.nav[2])}</a>
    </nav>
    ${flags}
  </div>

  <header class="kc-hero">
    <div class="eyebrow">${esc(c.eyebrow)}</div>
    <h1>${esc(c.h1)}</h1>
    <p class="lead">${esc(c.lead)}</p>
  </header>

  <div class="kc" data-noi18n>
    <form class="kc-box" id="kcf" onsubmit="return false">
      <div class="kc-tabs" role="tablist">
        <button type="button" role="tab" id="tb-buy" aria-selected="true">${esc(c.tabBuy)}</button>
        <button type="button" role="tab" id="tb-lease" aria-selected="false">${esc(c.tabLease)}</button>
      </div>
      <div id="f-buy" style="display:grid;gap:16px">
        <label>${esc(c.price)}<input type="text" inputmode="numeric" id="price" value="5.000.000.000" autocomplete="off"></label>
        <label>${esc(c.npop)}<input type="text" inputmode="numeric" id="npop" value="80.000.000" autocomplete="off"><span class="hint">${esc(c.npopHint)}</span></label>
        <label>${esc(c.ppat)}<input type="text" inputmode="decimal" id="ppat" value="1" autocomplete="off"><span class="hint">${esc(c.ppatHint)}</span></label>
        <label class="chk"><input type="checkbox" id="dev"><span>${esc(c.dev)}</span></label>
        <label class="chk" id="dtp-row" hidden><input type="checkbox" id="dtp" checked><span>${esc(c.dtp)}</span></label>
      </div>
      <div id="f-lease" style="display:none;gap:16px">
        <label>${esc(c.lprice)}<input type="text" inputmode="numeric" id="lprice" value="2.500.000.000" autocomplete="off"></label>
        <label>${esc(c.years)}<input type="text" inputmode="numeric" id="years" value="25" autocomplete="off"></label>
        <label>${esc(c.lnot)}<input type="text" inputmode="decimal" id="lnot" value="1" autocomplete="off"><span class="hint">${esc(c.lnotHint)}</span></label>
      </div>
    </form>
    <div class="kc-box kc-res" id="res" aria-live="polite"></div>
  </div>

  <section class="kc-wna" aria-labelledby="h-wna">
    <h2 id="h-wna">${esc(c.wnaH)}</h2>
    <ul>${c.wna.map((x) => `<li>${esc(x)}</li>`).join("")}</ul>
  </section>
  <p class="kc-note">${esc(c.note)}</p>

  <section class="ask" aria-labelledby="h-ask">
    <h2 id="h-ask">${esc(c.ask)}</h2>
    <p>${esc(c.askP)}</p>
    <div class="actions">
      <a class="btn wa" href="${wa}" target="_blank" rel="noopener"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 20l1.4-4.2A8 8 0 1 1 8.6 19z"/></svg>${esc(c.wa)}</a>
      <a class="btn ghost" href="listings.html">${esc(c.list)}</a>
    </div>
  </section>

  <div id="kontak">${contact}</div>
  <footer><span>© 2009–${new Date().getFullYear()} Bali Are Property · ${esc(footer)}</span></footer>
</div>
<script>
(function(){
${copyScript}
})();
(function(){
  var T=${JSON.stringify({ buyerH: c.buyerH, sellerH: c.sellerH, leaseH: c.leaseH, bphtb: c.bphtb, ppatFee: c.ppatFee, pnbp: c.pnbp, ppn: c.ppn, ppnDtp: c.ppnDtp, total: c.total, ofPrice: c.ofPrice, grand: c.grand, pph: c.pph, pphNote: c.pphNote, perYear: c.perYear, pphL: c.pphL, pphLNote: c.pphLNote, lnotFee: c.lnotFee, ltotal: c.ltotal })};
  var FX=${JSON.stringify(fx)}, L=${JSON.stringify(L)}, DTP_UNTIL=${JSON.stringify(PPN_DTP_UNTIL)};
  var $=function(id){return document.getElementById(id)};
  var num=function(id){return parseFloat(($(id).value||"").replace(/[^0-9,.]/g,"").replace(/\\.(?=\\d{3}(\\D|$))/g,"").replace(",","."))||0};
  var grp=function(n){return Math.round(n).toString().replace(/\\B(?=(\\d{3})+(?!\\d))/g,".")};
  var rp=function(n){return (n<0?"−":"")+"Rp"+grp(Math.abs(n))};
  var fx=function(n){if(!FX||!n)return"";return '<span class="fx">≈ '+fmt(n/FX.usd,"US$")+(FX.eur?" · "+fmt(n/FX.eur,"€"):"")+"</span>"};
  var fmt=function(v,s){var d=L==="ru"?",":".";if(v>=1e6)return s+(v/1e6).toFixed(v>=1e7?1:2).replace(/\\.?0+$/,"").replace(".",d)+(L==="ru"?"\\u00a0млн":"M");
    var r=v>=1e4?Math.round(v/100)*100:Math.round(v);return s+String(r).replace(/\\B(?=(\\d{3})+(?!\\d))/g,L==="ru"?"\\u00a0":",")};
  var row=function(k,v,sub,cls){return '<tr'+(cls?' class="'+cls+'"':'')+'><td>'+k+(sub?'<span class="sub">'+sub+'</span>':'')+'</td><td>'+rp(v)+fx(Math.abs(v))+'</td></tr>'};
  var mode="buy";
  function calc(){
    var o="";
    if(mode==="buy"){
      var p=num("price"),np=num("npop"),pp=Math.min(num("ppat"),100)/100,dev=$("dev").checked;
      $("dtp-row").hidden=!dev||p>5e9||new Date().toISOString().slice(0,10)>DTP_UNTIL;
      var bphtb=Math.max(0,p-np)*0.05,ppat=p*pp,pnbp=p>0?p/1000+50000:0,ppn=dev?p*0.11:0;
      var dtp=(dev&&!$("dtp-row").hidden&&$("dtp").checked)?Math.min(p,2e9)*0.11:0;
      var tot=bphtb+ppat+pnbp+ppn-dtp;
      o+='<h2>'+T.buyerH+'</h2><table>'+row(T.bphtb,bphtb)+row(T.ppatFee,ppat)+row(T.pnbp,pnbp)+(dev?row(T.ppn,ppn):"")+(dtp?row(T.ppnDtp,-dtp,"","neg"):"")
        +row(T.total,tot,p?(tot/p*100).toFixed(1).replace(".",L==="en"?".":",")+"% "+T.ofPrice:"","sum")+'</table>';
      o+='<div class="kc-grand"><small>'+T.grand+'</small><b>'+rp(p+tot)+'</b>'+fx(p+tot)+'</div>';
      o+='<h2>'+T.sellerH+'</h2><table>'+row(T.pph,p*0.025,T.pphNote)+'</table>';
    } else {
      var lp=num("lprice"),y=Math.max(1,num("years")),ln=Math.min(num("lnot"),100)/100;
      var nf=lp*ln;
      o+='<h2>'+T.leaseH+'</h2><table>'+row(T.perYear,lp/y)+row(T.lnotFee,nf)+row(T.ltotal,lp+nf,"","sum")+'</table>';
      o+='<h2>'+T.sellerH+'</h2><table>'+row(T.pphL,lp*0.1,T.pphLNote)+'</table>';
    }
    $("res").innerHTML=o;
  }
  function tab(m){mode=m;$("tb-buy").setAttribute("aria-selected",m==="buy");$("tb-lease").setAttribute("aria-selected",m!=="buy");
    $("f-buy").style.display=m==="buy"?"grid":"none";$("f-lease").style.display=m==="buy"?"none":"grid";calc();}
  $("tb-buy").onclick=function(){tab("buy")};$("tb-lease").onclick=function(){tab("lease")};
  ["price","npop","lprice"].forEach(function(id){$(id).addEventListener("input",function(e){var el=e.target,v=el.value.replace(/\\D/g,"");el.value=v?grp(+v):"";calc()})});
  ["ppat","years","lnot"].forEach(function(id){$(id).addEventListener("input",calc)});
  ["dev","dtp"].forEach(function(id){$(id).addEventListener("change",calc)});
  var q=new URLSearchParams(location.search),h=parseInt(q.get("harga")||q.get("price")||"",10);
  if(h>0)$("price").value=grp(h);
  if(q.get("mode")==="lease")tab("lease");else calc();
})();
</script>
<script src="${i18nSrc}"></script>
</body>
</html>
`;
}

module.exports = { C, renderCalc };
