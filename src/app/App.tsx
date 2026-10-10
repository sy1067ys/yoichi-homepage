import { useState, useEffect } from "react";
import yoichiLogo from "../assets/yoichi-logo.png";
import meishiImg from "../assets/meishi.png";
import sakuraBoxImg from "../assets/sakura-box-ad.png";
import meishiSampleImg from "../assets/meishi-sample.png";
import samplesHeroImg from "../assets/samples-hero.png";
import bannerCafe from "../assets/banner-cafe.png";
import bannerSale from "../assets/banner-sale.png";
import bannerRestaurant from "../assets/banner-restaurant.png";
import bannerSalon from "../assets/banner-salon.png";
import bannerEc from "../assets/banner-ec.png";
import logo01 from "../assets/logo-01.png";
import logo02 from "../assets/logo-02.png";
import logo03 from "../assets/logo-03.png";
import logo04 from "../assets/logo-04.png";
import logo05 from "../assets/logo-05.png";
import logo06 from "../assets/logo-06.png";
import logo07 from "../assets/logo-07.png";
import logo08 from "../assets/logo-08.png";
import logo09 from "../assets/logo-09.png";
import logo10 from "../assets/logo-10.png";
import uiux01 from "../assets/uiux-01.png";
import uiux02 from "../assets/uiux-02.png";
import uiux03 from "../assets/uiux-03.png";
import uiux04 from "../assets/uiux-04.png";
import uiux05 from "../assets/uiux-05.png";
import sample01 from "../assets/sample-01.png";
import sample02 from "../assets/sample-02.png";
import sample03 from "../assets/sample-03.png";
import sample04 from "../assets/sample-04.png";
import sample05 from "../assets/sample-05.png";
import sample06 from "../assets/sample-06.png";
import sample07 from "../assets/sample-07.png";
import sample08 from "../assets/sample-08.png";
import sample09 from "../assets/sample-09.png";
import sample10 from "../assets/sample-10.png";
import web01 from "../assets/web-01.png";
import web02 from "../assets/web-02.png";
import web03 from "../assets/web-03.png";
import web04 from "../assets/web-04.png";
import web05 from "../assets/web-05.png";
import app01 from "../assets/app-01.png";
import app02 from "../assets/app-02.png";
import app03 from "../assets/app-03.png";
import app04 from "../assets/app-04.png";
import app05 from "../assets/app-05.png";
import tmpl01 from "../assets/tmpl-01.png";
import tmpl02 from "../assets/tmpl-02.png";
import tmpl03 from "../assets/tmpl-03.png";
import tmpl04 from "../assets/tmpl-04.png";
import tmpl05 from "../assets/tmpl-05.png";
import keychainPhoto from "../assets/keychain-photo.jpg";
import goodsCollage from "../assets/goods-collage.png";
import layout01 from "../assets/layout-01.png";
import layout02 from "../assets/layout-02.png";
import layout03 from "../assets/layout-03.png";
import layout04 from "../assets/layout-04.png";
import layout05 from "../assets/layout-05.png";
import diagram01 from "../assets/diagram-01.png";
import diagram02 from "../assets/diagram-02.png";
import diagram03 from "../assets/diagram-03.png";
import diagram04 from "../assets/diagram-04.png";
import diagram05 from "../assets/diagram-05.png";
import focusLogo from "../assets/focus-logo.png";
import focusSymbol from "../assets/focus-symbol.png";
import representativePhoto from "../assets/representative.jpg";

const IconArrowRight = () => (<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>);
const IconArrowLeft = () => (<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>);
const IconMail = ({ color = "currentColor", size = 20 }) => (<svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>);
const IconPhone = ({ color = "currentColor", size = 20 }) => (<svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.16 6.16l.95-.95a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>);
const IconMapPin = ({ color = "currentColor", size = 20 }) => (<svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>);
const IconInstagram = ({ color = "currentColor", size = 20 }) => (<svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>);
const IconTwitter = ({ color = "currentColor", size = 20 }) => (<svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/></svg>);
const IconTikTok = ({ color = "currentColor", size = 20 }) => (<svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"/></svg>);
const IconLine = ({ color = "currentColor", size = 20 }) => (<svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2C6.48 2 2 5.81 2 10.5c0 3.77 3.05 6.93 7.16 7.94-.1.56-.64 3.37-.67 3.56 0 0-.01.11.05.15.07.05.14.02.14.02.19-.03 2.19-1.44 3.1-2.12.73.1 1.48.15 2.22.15 5.52 0 10-3.81 10-8.5S17.52 2 12 2z"/></svg>);
const IconMenu = () => (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></svg>);
const IconX = () => (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>);
const IconExternalLink = ({ size = 13 }) => (<svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>);

const C = { bg:"#f5f2ed", white:"#ffffff", dark:"#3a3230", primary:"#8b4f47", accent:"#c4504a", deep:"#6d3d37", border:"#d4c5b0", textMuted:"#6b7280" };


function YagasuriBg({ className = "" }) {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
      <defs>
        <pattern id="yagasuri" x="0" y="0" width="40" height="80" patternUnits="userSpaceOnUse">
          <rect width="40" height="80" fill="transparent"/>
          <path d="M 20 0 L 10 20 L 20 20 L 30 20 Z" fill="currentColor" opacity="0.15"/>
          <path d="M 20 20 L 10 40 L 20 40 L 30 40 Z" fill="currentColor" opacity="0.08"/>
          <path d="M 20 40 L 10 60 L 20 60 L 30 60 Z" fill="currentColor" opacity="0.15"/>
          <path d="M 20 60 L 10 80 L 20 80 L 30 80 Z" fill="currentColor" opacity="0.08"/>
          <path d="M 0 0 L 10 20 L 0 20 Z" fill="currentColor" opacity="0.1"/>
          <path d="M 0 20 L 10 40 L 0 40 Z" fill="currentColor" opacity="0.05"/>
          <path d="M 0 40 L 10 60 L 0 60 Z" fill="currentColor" opacity="0.1"/>
          <path d="M 0 60 L 10 80 L 0 80 Z" fill="currentColor" opacity="0.05"/>
          <path d="M 40 0 L 30 20 L 40 20 Z" fill="currentColor" opacity="0.1"/>
          <path d="M 40 20 L 30 40 L 40 40 Z" fill="currentColor" opacity="0.05"/>
          <path d="M 40 40 L 30 60 L 40 60 Z" fill="currentColor" opacity="0.1"/>
          <path d="M 40 60 L 30 80 L 40 80 Z" fill="currentColor" opacity="0.05"/>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#yagasuri)"/>
    </svg>
  );
}

function YoichiMark({ size = 48, dark = false }) {
  return <img src={yoichiLogo} alt="YOICHI" width={size} height={size} style={{ objectFit:"contain", display:"block" }} />;
}

function SectionHeading({ en, ja }) {
  return (
    <div style={{ textAlign:"center", marginBottom:"4rem", position:"relative" }}>
      <div style={{ position:"absolute", left:"50%", transform:"translateX(-50%)", top:-16, width:128, height:128, color:C.accent, opacity:0.1, pointerEvents:"none" }}><YagasuriBg /></div>
      <p style={{ fontSize:"0.75rem", color:C.textMuted, marginBottom:"0.5rem", letterSpacing:"0.25em", position:"relative" }}>{en}</p>
      <h2 style={{ fontSize:"clamp(2rem,5vw,3rem)", marginBottom:"1rem", fontFamily:"serif", position:"relative", fontWeight:400 }}>{ja}</h2>
      <div style={{ width:64, height:4, background:C.accent, margin:"0 auto", position:"relative" }} />
    </div>
  );
}

function ContactCard({ icon: Icon, title, children }) {
  return (
    <div style={{ display:"flex", gap:"1rem", background:C.white, padding:"1.5rem", border:`1px solid ${C.border}`, position:"relative", overflow:"hidden" }}>
      <div style={{ position:"absolute", top:0, right:0, width:96, height:96, color:C.primary, opacity:0.05, pointerEvents:"none" }}><YagasuriBg /></div>
      <div style={{ width:48, height:48, background:C.primary, display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0 }}><Icon color="#fff" size={20} /></div>
      <div><h3 style={{ fontSize:"1.1rem", marginBottom:"0.5rem", letterSpacing:"0.1em" }}>{title}</h3>{children}</div>
    </div>
  );
}

// ── FOCUSブランド紹介ページ ──
function FocusPage({ onBack }) {
  const font = "'Helvetica Neue',Arial,'Hiragino Kaku Gothic ProN','Noto Sans JP',sans-serif";
  const ink = "#111";
  const sub = "#777";
  const line = "#e5e5e5";
  const points = [
    { no:"01", title:"ミニマル", desc:"白と黒、余白、細い線。引き算で、着る人そのものが際立つ服を目指します。" },
    { no:"02", title:"集点", desc:"数ある選択肢の中から、本当に大切な一点に意識を向ける。FOCUSはそのきっかけになる服です。" },
    { no:"03", title:"日常に", desc:"特別な日だけでなく、毎日の中で自然に着られること。静かに寄り添うデザインです。" },
  ];
  return (
    <div className="page-animate" style={{ minHeight:"100vh", background:"#fff", fontFamily:font, color:ink }}>
      <header style={{ position:"fixed", top:0, left:0, right:0, zIndex:50, background:"rgba(255,255,255,0.94)", backdropFilter:"blur(8px)", borderBottom:`1px solid ${line}` }}>
        <nav style={{ maxWidth:1200, margin:"0 auto", padding:"1rem 1.5rem", display:"flex", alignItems:"center", gap:"1rem" }}>
          <button onClick={onBack} style={{ background:"none", border:"none", cursor:"pointer", display:"flex", alignItems:"center", gap:"0.5rem", color:ink, fontSize:"0.85rem", letterSpacing:"0.12em", fontFamily:font }}><IconArrowLeft /> ホームに戻る</button>
          <div style={{ width:1, height:20, background:line }} />
          <img src={focusLogo} alt="FOCUS" style={{ height:28, width:"auto", display:"block" }} />
          <span style={{ color:sub, fontSize:"0.8rem", letterSpacing:"0.15em" }}>/ OUR BRAND</span>
        </nav>
      </header>

      <div style={{ paddingTop:"5rem" }}>
        {/* ヒーロー */}
        <div style={{ padding:"6rem 1.5rem 5rem", textAlign:"center" }}>
          <p style={{ fontSize:"0.7rem", color:sub, letterSpacing:"0.4em", marginBottom:"3rem" }}>APPAREL BRAND</p>
          <div style={{ display:"flex", justifyContent:"center", marginBottom:"2rem" }}>
            <img src={focusLogo} alt="FOCUS" style={{ width:"min(520px,88%)", height:"auto", display:"block" }} />
          </div>
          <div style={{ width:1, height:48, background:ink, margin:"0 auto 2rem" }} />
          <p style={{ fontSize:"clamp(1rem,2.4vw,1.3rem)", fontWeight:300, letterSpacing:"0.2em", lineHeight:2 }}>Focus point on life…</p>
        </div>

        {/* コンセプト */}
        <div style={{ borderTop:`1px solid ${line}`, padding:"5rem 1.5rem" }}>
          <div style={{ maxWidth:700, margin:"0 auto", textAlign:"center" }}>
            <p style={{ fontSize:"0.7rem", color:sub, letterSpacing:"0.4em", marginBottom:"1.5rem" }}>CONCEPT</p>
            <h2 style={{ fontSize:"clamp(1.3rem,3vw,1.8rem)", fontWeight:300, letterSpacing:"0.15em", marginBottom:"2.5rem" }}>Focus point on life…</h2>
            <p style={{ color:"#444", lineHeight:2.4, fontSize:"0.95rem", fontWeight:300 }}>
              FOCUSは、アパレルブランドです。<br />
              余計なものを削ぎ落とし、大切なものに意識を向ける。<br />
              そんな毎日を、服からはじめるブランドです。
            </p>
          </div>
        </div>

        {/* ロゴ */}
        <div style={{ borderTop:`1px solid ${line}`, background:"#fafafa", padding:"5rem 1.5rem" }}>
          <div style={{ maxWidth:900, margin:"0 auto" }}>
            <p style={{ textAlign:"center", fontSize:"0.7rem", color:sub, letterSpacing:"0.4em", marginBottom:"3rem" }}>LOGO</p>
            <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(260px,1fr))", gap:"1.5rem" }}>
              <div style={{ background:"#fff", border:`1px solid ${line}`, padding:"3rem 1.5rem", display:"flex", flexDirection:"column", alignItems:"center", gap:"1.5rem" }}>
                <img src={focusLogo} alt="FOCUS ロゴタイプ" style={{ width:"min(320px,90%)", height:"auto", display:"block" }} />
                <p style={{ fontSize:"0.75rem", color:sub, letterSpacing:"0.15em" }}>ロゴタイプ</p>
              </div>
              <div style={{ background:"#fff", border:`1px solid ${line}`, padding:"3rem 1.5rem", display:"flex", flexDirection:"column", alignItems:"center", gap:"1.5rem" }}>
                <img src={focusSymbol} alt="FOCUS シンボルマーク" style={{ width:140, height:"auto", display:"block" }} />
                <p style={{ fontSize:"0.75rem", color:sub, letterSpacing:"0.15em" }}>シンボルマーク</p>
              </div>
            </div>
            <p style={{ textAlign:"center", color:sub, fontSize:"0.85rem", lineHeight:2, marginTop:"2.5rem", fontWeight:300 }}>
              「O」に重なる照準の十字線。<br />視線が一点に定まる瞬間を、ロゴにしています。
            </p>
          </div>
        </div>

        {/* 3つのポイント */}
        <div style={{ borderTop:`1px solid ${line}`, padding:"5rem 1.5rem" }}>
          <div style={{ maxWidth:900, margin:"0 auto" }}>
            <p style={{ textAlign:"center", fontSize:"0.7rem", color:sub, letterSpacing:"0.4em", marginBottom:"3rem" }}>PHILOSOPHY</p>
            <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(240px,1fr))", gap:"2.5rem" }}>
              {points.map(p => (
                <div key={p.no} style={{ borderTop:`1px solid ${ink}`, paddingTop:"1.5rem" }}>
                  <p style={{ fontSize:"0.75rem", color:sub, letterSpacing:"0.2em", marginBottom:"1rem" }}>{p.no}</p>
                  <h3 style={{ fontSize:"1.1rem", fontWeight:400, letterSpacing:"0.2em", marginBottom:"1rem" }}>{p.title}</h3>
                  <p style={{ fontSize:"0.88rem", color:"#555", lineHeight:2, fontWeight:300 }}>{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 商品 */}
        <div style={{ borderTop:`1px solid ${line}`, background:"#fafafa", padding:"5rem 1.5rem" }}>
          <div style={{ maxWidth:700, margin:"0 auto", textAlign:"center" }}>
            <p style={{ fontSize:"0.7rem", color:sub, letterSpacing:"0.4em", marginBottom:"1.5rem" }}>COLLECTION</p>
            <p style={{ fontSize:"1.2rem", fontWeight:200, letterSpacing:"0.4em", marginBottom:"1.5rem" }}>COMING SOON</p>
            <p style={{ color:sub, fontSize:"0.88rem", lineHeight:2, fontWeight:300 }}>商品情報は準備中です。公開までしばらくお待ちください。</p>
          </div>
        </div>

        {/* CTA */}
        <div style={{ background:ink, padding:"4rem 1.5rem", textAlign:"center" }}>
          <p style={{ color:"#fff", fontSize:"1.05rem", fontWeight:300, letterSpacing:"0.2em", marginBottom:"0.6rem" }}>FOCUSについてのお問い合わせ</p>
          <p style={{ color:"#aaa", fontSize:"0.82rem", marginBottom:"2rem" }}>ブランドに関するご相談はお気軽にどうぞ</p>
          <button onClick={() => { onBack(); setTimeout(() => document.getElementById("contact")?.scrollIntoView({ behavior:"smooth" }), 100); }} style={{ padding:"1rem 2.5rem", background:"#fff", color:ink, border:"none", cursor:"pointer", fontSize:"0.9rem", letterSpacing:"0.2em", fontFamily:font }}>お問い合わせはこちら →</button>
        </div>

        <footer style={{ background:"#000", padding:"2rem 1.5rem", textAlign:"center" }}>
          <p style={{ fontSize:"0.75rem", color:"#777", letterSpacing:"0.12em" }}>© 令和八年 YOICHI</p>
        </footer>
      </div>
    </div>
  );
}

// ── 雑貨デザインサンプルページ ──
function GoodsSamplesPage({ onBack }) {
  const goodsItems = [
    { icon:"🔑", title:"アクリルキーホルダー", desc:"丸型・四角型の2パターン。桜モチーフやブランドロゴを入れたオリジナルデザイン。透明アクリルで軽量&高発色。ノベルティや記念品に人気です。", tag:"キーホルダー" },
    { icon:"👜", title:"トートバッグ", desc:"ナチュラルなキャンバス地にタイポグラフィをあしらったデザイン。5色のカラーバリエーション展開。イベント配布やショップバッグに最適。", tag:"トートバッグ" },
    { icon:"☕", title:"マグカップ", desc:"モーニング用とカフェ風の2デザイン。オリジナルメッセージやロゴを入れて、世界にひとつだけのマグカップを制作できます。", tag:"マグカップ" },
    { icon:"🏷️", title:"丸型ステッカー", desc:"漢字×カラーの和モダンなステッカーセット。ノートPC・スマホ・手帳にぴったりのサイズ感。6種のモチーフから選べます。", tag:"ステッカー" },
    { icon:"📱", title:"スマホケース", desc:"桜フラワー・ゴールドジオメトリック・クロスラインの3パターン。iPhone/Android対応。クリアケースで端末デザインも活かせます。", tag:"スマホケース" },
  ];

  return (
    <div className="page-animate" style={{ minHeight:"100vh", background:C.bg, fontFamily:"'Georgia','Hiragino Mincho ProN',serif", color:C.dark }}>
      <header style={{ position:"fixed", top:0, left:0, right:0, zIndex:50, background:`${C.bg}f5`, backdropFilter:"blur(8px)", borderBottom:`2px solid ${C.primary}33` }}>
        <nav style={{ maxWidth:1200, margin:"0 auto", padding:"1rem 1.5rem", display:"flex", alignItems:"center", gap:"1rem" }}>
          <button onClick={onBack} style={{ background:"none", border:"none", cursor:"pointer", display:"flex", alignItems:"center", gap:"0.5rem", color:C.primary, fontSize:"0.9rem", letterSpacing:"0.1em" }}><IconArrowLeft /> ホームに戻る</button>
          <div style={{ width:1, height:20, background:C.border }} />
          <div style={{ display:"flex", alignItems:"center", gap:"0.6rem" }}><YoichiMark size={36} /><span style={{ fontSize:"1.2rem", fontWeight:700, letterSpacing:"0.2em" }}>YOICHI<span style={{ color:C.accent }}>.</span></span></div>
          <span style={{ color:C.textMuted, fontSize:"0.85rem", letterSpacing:"0.15em" }}>/ GOODS DESIGN</span>
        </nav>
      </header>

      <div style={{ paddingTop:"5rem" }}>
        <div style={{ background:C.dark, padding:"4rem 1.5rem", position:"relative", overflow:"hidden" }}>
          <div style={{ position:"absolute", inset:0, color:C.primary, opacity:0.06 }}><YagasuriBg /></div>
          <div style={{ maxWidth:1100, margin:"0 auto", position:"relative", zIndex:1 }}>
            <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(300px,1fr))", gap:"3rem", alignItems:"center" }}>
              <div>
                <p style={{ fontSize:"0.75rem", color:C.accent, letterSpacing:"0.3em", marginBottom:"1rem" }}>GOODS DESIGN</p>
                <h2 style={{ fontSize:"clamp(1.8rem,4vw,2.8rem)", fontFamily:"serif", fontWeight:400, color:C.bg, lineHeight:1.7, marginBottom:"1.5rem" }}>想いを込めた<br />オリジナル雑貨</h2>
                <div style={{ width:48, height:3, background:C.accent, marginBottom:"1.5rem" }} />
                <p style={{ color:"rgba(255,255,255,0.8)", lineHeight:2.2, fontSize:"0.95rem", marginBottom:"1rem" }}>YOICHIでは、キーホルダーやトートバッグなどのオリジナル雑貨のデザインを制作しています。</p>
                <p style={{ color:"rgba(255,255,255,0.8)", lineHeight:2.2, fontSize:"0.95rem", marginBottom:"1rem" }}>写真はYOICHIが実際に制作したアクリルキーホルダーです。矢絣（やがすり）模様をあしらったYOICHIロゴデザインと、ゴールドの高級感あるデザインの2種類をご用意しました。</p>
                <p style={{ color:"rgba(255,255,255,0.6)", lineHeight:2, fontSize:"0.88rem" }}>ノベルティ・販促品・記念品・オリジナルグッズなど、用途に合わせたデザインをご提案いたします。</p>
              </div>
              <div style={{ position:"relative" }}>
                <div style={{ position:"absolute", top:-8, left:-8, right:8, bottom:8, border:"2px solid rgba(196,80,74,0.4)" }} />
                <img src={keychainPhoto} alt="YOICHIオリジナルアクリルキーホルダー" style={{ width:"100%", display:"block", position:"relative" }} />
              </div>
            </div>
          </div>
        </div>

        <div style={{ background:C.white, padding:"4rem 1.5rem" }}>
          <div style={{ maxWidth:900, margin:"0 auto" }}>
            <div style={{ textAlign:"center", marginBottom:"3rem" }}>
              <p style={{ fontSize:"0.75rem", color:C.textMuted, letterSpacing:"0.3em", marginBottom:"0.5rem" }}>ACTUAL PRODUCT</p>
              <h3 style={{ fontSize:"clamp(1.4rem,3vw,2rem)", fontFamily:"serif", fontWeight:400, color:C.dark, marginBottom:"1rem" }}>制作実績：アクリルキーホルダー</h3>
              <div style={{ width:48, height:3, background:C.accent, margin:"0 auto" }} />
            </div>
            <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(250px,1fr))", gap:"1.5rem", marginBottom:"3rem" }}>
              {[
                { title:"矢絣×YOICHIロゴ（丸型）", desc:"日本の伝統文様「矢絣」を背景に、YOICHIのブランドロゴを配置。和モダンな雰囲気を演出しています。" },
                { title:"ゴールド×YOICHIロゴ（角型）", desc:"黒地にゴールドの矢絣模様とYOICHIロゴを組み合わせた高級感あるデザイン。特別なノベルティに最適です。" },
                { title:"アクリル素材の特徴", desc:"透明度の高いアクリル素材を使用。軽くて丈夫なため、カバンやポーチ、鍵につけて日常使いできます。" },
              ].map((item, i) => (
                <div key={i} style={{ background:C.bg, border:`1px solid ${C.border}`, padding:"1.5rem", position:"relative" }}>
                  <div style={{ width:28, height:3, background:C.accent, marginBottom:"1rem" }} />
                  <h4 style={{ fontSize:"1rem", fontFamily:"serif", fontWeight:400, color:C.dark, marginBottom:"0.6rem" }}>{item.title}</h4>
                  <p style={{ fontSize:"0.85rem", color:"#777", lineHeight:1.8 }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div style={{ background:C.bg, padding:"4rem 1.5rem" }}>
          <div style={{ maxWidth:1100, margin:"0 auto" }}>
            <SectionHeading en="DESIGN SAMPLES" ja="雑貨デザインサンプル" />
            <p style={{ textAlign:"center", color:"#555", marginBottom:"3rem", lineHeight:1.9 }}>キーホルダー以外にも、さまざまな雑貨のデザインに対応しています。<br />下記はYOICHIが制作したデザインサンプルの一覧です。</p>

            <div className="anim-item" style={{ background:C.white, border:`1px solid ${C.border}`, overflow:"hidden", marginBottom:"3rem" }}>
              <img src={goodsCollage} alt="YOICHIの雑貨デザインサンプル一覧" style={{ width:"100%", display:"block" }} />
            </div>

            <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(280px,1fr))", gap:"1.5rem" }}>
              {goodsItems.map((item, i) => (
                <div key={i} className="anim-item" style={{ background:C.white, border:`1px solid ${C.border}`, padding:"1.5rem", transition:"all 0.3s", position:"relative", overflow:"hidden" }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor=C.accent; e.currentTarget.style.transform="translateY(-4px)"; e.currentTarget.style.boxShadow="0 12px 32px rgba(0,0,0,0.1)"; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor=C.border; e.currentTarget.style.transform="none"; e.currentTarget.style.boxShadow="none"; }}
                >
                  <div style={{ position:"absolute", top:0, right:0, width:80, height:80, color:C.primary, opacity:0.05, pointerEvents:"none" }}><YagasuriBg /></div>
                  <div style={{ display:"flex", alignItems:"center", gap:"0.6rem", marginBottom:"0.8rem" }}>
                    <span style={{ fontSize:"1.5rem" }}>{item.icon}</span>
                    <span style={{ background:C.accent, color:"#fff", fontSize:"0.65rem", padding:"0.15rem 0.5rem", letterSpacing:"0.08em" }}>{item.tag}</span>
                  </div>
                  <h3 style={{ fontSize:"1.05rem", fontFamily:"serif", fontWeight:400, marginBottom:"0.5rem", color:C.dark }}>{item.title}</h3>
                  <p style={{ fontSize:"0.85rem", color:"#777", lineHeight:1.8 }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div style={{ background:C.white, padding:"4rem 1.5rem" }}>
          <div style={{ maxWidth:900, margin:"0 auto", textAlign:"center" }}>
            <p style={{ fontSize:"0.75rem", color:C.textMuted, letterSpacing:"0.3em", marginBottom:"0.5rem" }}>AVAILABLE ITEMS</p>
            <h3 style={{ fontSize:"clamp(1.4rem,3vw,2rem)", fontFamily:"serif", fontWeight:400, color:C.dark, marginBottom:"1rem" }}>対応可能な雑貨アイテム</h3>
            <div style={{ width:48, height:3, background:C.accent, margin:"0 auto", marginBottom:"2rem" }} />
            <div style={{ display:"flex", flexWrap:"wrap", justifyContent:"center", gap:"0.75rem", marginBottom:"2rem" }}>
              {["アクリルキーホルダー","トートバッグ","マグカップ","ステッカー","スマホケース","缶バッジ","ポストカード","クリアファイル","Tシャツ","タオル","エコバッグ","ノート・手帳"].map(item => (
                <span key={item} style={{ padding:"0.5rem 1.2rem", border:`1px solid ${C.border}`, fontSize:"0.85rem", letterSpacing:"0.08em", background:C.bg }}>{item}</span>
              ))}
            </div>
            <p style={{ color:"#777", fontSize:"0.88rem", lineHeight:1.8 }}>上記以外のアイテムもご相談ください。素材やサイズ、ロット数に合わせて最適なデザインをご提案いたします。</p>
          </div>
        </div>

        <div style={{ background:C.primary, padding:"3rem 1.5rem", textAlign:"center", position:"relative", overflow:"hidden" }}>
          <div style={{ position:"absolute", inset:0, color:"#fff", opacity:0.06 }}><YagasuriBg /></div>
          <div style={{ position:"relative" }}>
            <p style={{ color:"#fff", fontSize:"1.2rem", fontFamily:"serif", marginBottom:"0.5rem" }}>オリジナル雑貨、作りませんか？</p>
            <p style={{ color:"rgba(255,255,255,0.7)", fontSize:"0.88rem", marginBottom:"1.5rem" }}>ノベルティ・販促品・記念品など、お気軽にご相談ください</p>
            <button onClick={() => { onBack(); setTimeout(() => document.getElementById("contact")?.scrollIntoView({ behavior:"smooth" }), 100); }} style={{ padding:"1rem 2.5rem", background:"#fff", color:C.primary, border:"none", cursor:"pointer", fontSize:"1rem", letterSpacing:"0.12em", fontFamily:"inherit", fontWeight:700 }}>雑貨デザインのご相談はこちら →</button>
          </div>
        </div>

        <footer style={{ background:C.dark, padding:"2rem 1.5rem", textAlign:"center" }}>
          <p style={{ fontSize:"0.8rem", color:"#9ca3af", letterSpacing:"0.12em" }}>© 令和八年 YOICHI</p>
        </footer>
      </div>
    </div>
  );
}

// ── テンプレートサンプルページ ──
function TemplateSamplesPage({ onBack }) {
  const samples = [
    { img: tmpl01, title:"請求書テンプレート", desc:"ネイビーのヘッダーで品格ある請求書。品目・数量・金額を見やすく整理したレイアウト。", tag:"ビジネス書類" },
    { img: tmpl02, title:"履歴書テンプレート", desc:"グリーンのアクセントカラーで爽やかな印象。学歴・職歴・資格を整理しやすい構成。", tag:"就職・転職" },
    { img: tmpl03, title:"プレゼン表紙テンプレート", desc:"ダークな背景にブルーのアクセント。事業計画書・提案資料の表紙に最適。", tag:"プレゼン資料" },
    { img: tmpl04, title:"ショップカードテンプレート", desc:"表面にお店情報、裏面にスタンプカード。カフェ・飲食店に人気のデザイン。", tag:"ショップカード" },
    { img: tmpl05, title:"SNS投稿テンプレート", desc:"Instagram・X(Twitter)の投稿用テンプレート。セール告知や新商品紹介に活用。", tag:"SNS運用" },
  ];
  return (
    <div className="page-animate" style={{ minHeight:"100vh", background:C.bg, fontFamily:"'Georgia','Hiragino Mincho ProN',serif", color:C.dark }}>
      <header style={{ position:"fixed", top:0, left:0, right:0, zIndex:50, background:`${C.bg}f5`, backdropFilter:"blur(8px)", borderBottom:`2px solid ${C.primary}33` }}>
        <nav style={{ maxWidth:1200, margin:"0 auto", padding:"1rem 1.5rem", display:"flex", alignItems:"center", gap:"1rem" }}>
          <button onClick={onBack} style={{ background:"none", border:"none", cursor:"pointer", display:"flex", alignItems:"center", gap:"0.5rem", color:C.primary, fontSize:"0.9rem", letterSpacing:"0.1em" }}><IconArrowLeft /> ホームに戻る</button>
          <div style={{ width:1, height:20, background:C.border }} />
          <div style={{ display:"flex", alignItems:"center", gap:"0.6rem" }}><YoichiMark size={36} /><span style={{ fontSize:"1.2rem", fontWeight:700, letterSpacing:"0.2em" }}>YOICHI<span style={{ color:C.accent }}>.</span></span></div>
          <span style={{ color:C.textMuted, fontSize:"0.85rem", letterSpacing:"0.15em" }}>/ TEMPLATE SAMPLES</span>
        </nav>
      </header>
      <div style={{ padding:"7rem 1.5rem 5rem", maxWidth:1000, margin:"0 auto" }}>
        <SectionHeading en="TEMPLATE DESIGN SAMPLES" ja="テンプレートデザインサンプル" />
        <p style={{ textAlign:"center", color:"#555", marginBottom:"4rem", lineHeight:1.9 }}>請求書・履歴書・プレゼン資料・ショップカードなど、<br />すぐに使えるテンプレートデザインのサンプルです。</p>
        <div style={{ display:"flex", flexDirection:"column", gap:"3rem" }}>
          {samples.map((s, i) => (
            <div key={i} className="anim-item" style={{ background:C.white, border:`1px solid ${C.border}`, overflow:"hidden", transition:"all 0.3s" }}
              onMouseEnter={e => { e.currentTarget.style.boxShadow="0 8px 32px rgba(0,0,0,0.1)"; e.currentTarget.style.transform="translateY(-2px)"; }}
              onMouseLeave={e => { e.currentTarget.style.boxShadow="none"; e.currentTarget.style.transform="none"; }}
            >
              <div style={{ padding:"1rem", background:"#f8f8f8" }}>
                <img src={s.img} alt={s.title} style={{ width:"100%", display:"block", maxHeight:600, objectFit:"contain" }} />
              </div>
              <div style={{ padding:"1.5rem 2rem" }}>
                <div style={{ display:"flex", alignItems:"center", gap:"0.75rem", marginBottom:"0.5rem" }}>
                  <span style={{ background:C.accent, color:"#fff", fontSize:"0.7rem", padding:"0.2rem 0.6rem", letterSpacing:"0.1em" }}>{s.tag}</span>
                  <span style={{ fontSize:"0.75rem", color:C.textMuted }}>SAMPLE {String(i+1).padStart(2,"0")}</span>
                </div>
                <h3 style={{ fontSize:"1.2rem", fontFamily:"serif", fontWeight:400, marginBottom:"0.5rem" }}>{s.title}</h3>
                <p style={{ fontSize:"0.9rem", color:"#777", lineHeight:1.8 }}>{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <div style={{ textAlign:"center", marginTop:"4rem" }}>
          <button onClick={() => { onBack(); setTimeout(() => document.getElementById("contact")?.scrollIntoView({ behavior:"smooth" }), 100); }} style={{ padding:"1rem 2.5rem", background:C.primary, color:"#fff", border:"none", cursor:"pointer", fontSize:"1rem", letterSpacing:"0.12em", fontFamily:"inherit", boxShadow:"0 4px 20px rgba(139,79,71,0.3)" }}>テンプレート制作のご相談はこちら →</button>
        </div>
      </div>
      <footer style={{ borderTop:`1px solid ${C.border}`, padding:"2rem 1.5rem", textAlign:"center", background:C.dark, color:C.bg }}>
        <p style={{ fontSize:"0.8rem", color:"#9ca3af", letterSpacing:"0.12em" }}>© 令和八年 YOICHI</p>
      </footer>
    </div>
  );
}

// ── アプリサンプルページ ──
function AppSamplesPage({ onBack }) {
  const samples = [
    { img: app01, title:"フードデリバリーアプリ", desc:"お店検索・カテゴリ分類・配達時間表示。直感的に注文できるUI設計。", tag:"フードデリバリー" },
    { img: app02, title:"家計簿アプリ", desc:"収支グラフ・カテゴリ別支出・予算管理。お金の流れを一目で把握。", tag:"ファイナンス" },
    { img: app03, title:"SNSアプリ", desc:"ストーリーズ・フィード投稿・リアクション。つながりを楽しむソーシャルアプリ。", tag:"SNS" },
    { img: app04, title:"タスク管理アプリ", desc:"チェックリスト・優先度管理・進捗表示。仕事の効率を最大化するUI。", tag:"ビジネス" },
    { img: app05, title:"天気アプリ", desc:"現在の天気・週間予報・気象情報。美しいグラデーションで見やすく表示。", tag:"ユーティリティ" },
  ];
  return (
    <div className="page-animate" style={{ minHeight:"100vh", background:C.bg, fontFamily:"'Georgia','Hiragino Mincho ProN',serif", color:C.dark }}>
      <header style={{ position:"fixed", top:0, left:0, right:0, zIndex:50, background:`${C.bg}f5`, backdropFilter:"blur(8px)", borderBottom:`2px solid ${C.primary}33` }}>
        <nav style={{ maxWidth:1200, margin:"0 auto", padding:"1rem 1.5rem", display:"flex", alignItems:"center", gap:"1rem" }}>
          <button onClick={onBack} style={{ background:"none", border:"none", cursor:"pointer", display:"flex", alignItems:"center", gap:"0.5rem", color:C.primary, fontSize:"0.9rem", letterSpacing:"0.1em" }}><IconArrowLeft /> ホームに戻る</button>
          <div style={{ width:1, height:20, background:C.border }} />
          <div style={{ display:"flex", alignItems:"center", gap:"0.6rem" }}><YoichiMark size={36} /><span style={{ fontSize:"1.2rem", fontWeight:700, letterSpacing:"0.2em" }}>YOICHI<span style={{ color:C.accent }}>.</span></span></div>
          <span style={{ color:C.textMuted, fontSize:"0.85rem", letterSpacing:"0.15em" }}>/ APP SAMPLES</span>
        </nav>
      </header>
      <div style={{ padding:"7rem 1.5rem 5rem", maxWidth:1100, margin:"0 auto" }}>
        <SectionHeading en="APP DESIGN SAMPLES" ja="アプリデザインサンプル" />
        <p style={{ textAlign:"center", color:"#555", marginBottom:"4rem", lineHeight:1.9 }}>モバイルアプリのUIデザインサンプルです。<br />iOS・Android両対応のデザインを制作いたします。</p>
        <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(280px,1fr))", gap:"2rem" }}>
          {samples.map((s, i) => (
            <div key={i} className="anim-item" style={{ background:C.white, border:`1px solid ${C.border}`, overflow:"hidden", transition:"all 0.3s" }}
              onMouseEnter={e => { e.currentTarget.style.borderColor=C.accent; e.currentTarget.style.transform="translateY(-4px)"; e.currentTarget.style.boxShadow="0 12px 32px rgba(0,0,0,0.12)"; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor=C.border; e.currentTarget.style.transform="none"; e.currentTarget.style.boxShadow="none"; }}
            >
              <div style={{ padding:"1rem", background:"#f8f8f8" }}>
                <img src={s.img} alt={s.title} style={{ width:"100%", display:"block", maxHeight:500, objectFit:"contain" }} />
              </div>
              <div style={{ padding:"1.2rem 1.5rem" }}>
                <div style={{ display:"flex", alignItems:"center", gap:"0.5rem", marginBottom:"0.4rem" }}>
                  <span style={{ background:C.accent, color:"#fff", fontSize:"0.65rem", padding:"0.15rem 0.5rem", letterSpacing:"0.08em" }}>{s.tag}</span>
                  <span style={{ fontSize:"0.7rem", color:C.textMuted }}>SAMPLE {String(i+1).padStart(2,"0")}</span>
                </div>
                <h3 style={{ fontSize:"1rem", fontFamily:"serif", fontWeight:400, marginBottom:"0.3rem" }}>{s.title}</h3>
                <p style={{ fontSize:"0.82rem", color:"#888", lineHeight:1.6 }}>{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <div style={{ textAlign:"center", marginTop:"4rem" }}>
          <button onClick={() => { onBack(); setTimeout(() => document.getElementById("contact")?.scrollIntoView({ behavior:"smooth" }), 100); }} style={{ padding:"1rem 2.5rem", background:C.primary, color:"#fff", border:"none", cursor:"pointer", fontSize:"1rem", letterSpacing:"0.12em", fontFamily:"inherit", boxShadow:"0 4px 20px rgba(139,79,71,0.3)" }}>アプリ制作のご相談はこちら →</button>
        </div>
      </div>
      <footer style={{ borderTop:`1px solid ${C.border}`, padding:"2rem 1.5rem", textAlign:"center", background:C.dark, color:C.bg }}>
        <p style={{ fontSize:"0.8rem", color:"#9ca3af", letterSpacing:"0.12em" }}>© 令和八年 YOICHI</p>
      </footer>
    </div>
  );
}

// ── Webサイトサンプルページ ──
function WebSamplesPage({ onBack }) {
  const samples = [
    { img: web01, title:"コーポレートサイト", desc:"信頼感と先進性を両立した企業サイト。事業内容を分かりやすくカード形式で紹介するデザイン。", tag:"企業サイト" },
    { img: web02, title:"旅行予約サイト", desc:"旅行先の魅力を写真とアイコンで伝える予約サイト。検索UIで快適なユーザー体験を実現。", tag:"予約サイト" },
    { img: web03, title:"クリニックサイト", desc:"安心感と清潔感を大切にした医療機関サイト。診療科目と予約導線を分かりやすく配置。", tag:"医療" },
    { img: web04, title:"ファッションECサイト", desc:"モノトーンで洗練されたファッションECサイト。商品の魅力を最大限引き出すレイアウト。", tag:"ECサイト" },
    { img: web05, title:"教育プラットフォーム", desc:"学びやすさを重視したオンライン学習サイト。講座カテゴリを直感的に探せるデザイン。", tag:"教育" },
  ];
  return (
    <div className="page-animate" style={{ minHeight:"100vh", background:C.bg, fontFamily:"'Georgia','Hiragino Mincho ProN',serif", color:C.dark }}>
      <header style={{ position:"fixed", top:0, left:0, right:0, zIndex:50, background:`${C.bg}f5`, backdropFilter:"blur(8px)", borderBottom:`2px solid ${C.primary}33` }}>
        <nav style={{ maxWidth:1200, margin:"0 auto", padding:"1rem 1.5rem", display:"flex", alignItems:"center", gap:"1rem" }}>
          <button onClick={onBack} style={{ background:"none", border:"none", cursor:"pointer", display:"flex", alignItems:"center", gap:"0.5rem", color:C.primary, fontSize:"0.9rem", letterSpacing:"0.1em" }}><IconArrowLeft /> ホームに戻る</button>
          <div style={{ width:1, height:20, background:C.border }} />
          <div style={{ display:"flex", alignItems:"center", gap:"0.6rem" }}><YoichiMark size={36} /><span style={{ fontSize:"1.2rem", fontWeight:700, letterSpacing:"0.2em" }}>YOICHI<span style={{ color:C.accent }}>.</span></span></div>
          <span style={{ color:C.textMuted, fontSize:"0.85rem", letterSpacing:"0.15em" }}>/ WEB SAMPLES</span>
        </nav>
      </header>
      <div style={{ padding:"7rem 1.5rem 5rem", maxWidth:1000, margin:"0 auto" }}>
        <SectionHeading en="WEB DESIGN SAMPLES" ja="Webサイトデザインサンプル" />
        <p style={{ textAlign:"center", color:"#555", marginBottom:"4rem", lineHeight:1.9 }}>企業サイト・ECサイト・予約サイトなど、<br />幅広いジャンルのWebデザインサンプルです。</p>
        <div style={{ display:"flex", flexDirection:"column", gap:"3rem" }}>
          {samples.map((s, i) => (
            <div key={i} className="anim-item" style={{ background:C.white, border:`1px solid ${C.border}`, overflow:"hidden", transition:"all 0.3s" }}
              onMouseEnter={e => { e.currentTarget.style.boxShadow="0 8px 32px rgba(0,0,0,0.1)"; e.currentTarget.style.transform="translateY(-2px)"; }}
              onMouseLeave={e => { e.currentTarget.style.boxShadow="none"; e.currentTarget.style.transform="none"; }}
            >
              <img src={s.img} alt={s.title} style={{ width:"100%", display:"block" }} />
              <div style={{ padding:"1.5rem 2rem" }}>
                <div style={{ display:"flex", alignItems:"center", gap:"0.75rem", marginBottom:"0.5rem" }}>
                  <span style={{ background:C.accent, color:"#fff", fontSize:"0.7rem", padding:"0.2rem 0.6rem", letterSpacing:"0.1em" }}>{s.tag}</span>
                  <span style={{ fontSize:"0.75rem", color:C.textMuted }}>SAMPLE {String(i+1).padStart(2,"0")}</span>
                </div>
                <h3 style={{ fontSize:"1.2rem", fontFamily:"serif", fontWeight:400, marginBottom:"0.5rem" }}>{s.title}</h3>
                <p style={{ fontSize:"0.9rem", color:"#777", lineHeight:1.8 }}>{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <div style={{ textAlign:"center", marginTop:"4rem" }}>
          <button onClick={() => { onBack(); setTimeout(() => document.getElementById("contact")?.scrollIntoView({ behavior:"smooth" }), 100); }} style={{ padding:"1rem 2.5rem", background:C.primary, color:"#fff", border:"none", cursor:"pointer", fontSize:"1rem", letterSpacing:"0.12em", fontFamily:"inherit", boxShadow:"0 4px 20px rgba(139,79,71,0.3)" }}>Webサイト制作のご相談はこちら →</button>
        </div>
      </div>
      <footer style={{ borderTop:`1px solid ${C.border}`, padding:"2rem 1.5rem", textAlign:"center", background:C.dark, color:C.bg }}>
        <p style={{ fontSize:"0.8rem", color:"#9ca3af", letterSpacing:"0.12em" }}>© 令和八年 YOICHI</p>
      </footer>
    </div>
  );
}

// ── UI/UXサンプルページ ──
function UiuxSamplesPage({ onBack }) {
  const samples = [
    { img: uiux01, title: "ECサイト管理画面", desc: "売上分析ダッシュボード。直感的なグラフとKPIカードで、ビジネスの状況を一目で把握できるデザイン。", tag: "Web管理画面" },
    { img: uiux02, title: "レストラン予約アプリ", desc: "和食レストランの予約画面。日付・時間・人数を簡単に選択できるモバイルUIデザイン。", tag: "モバイルアプリ" },
    { img: uiux03, title: "旅館サイト LP", desc: "老舗旅館のランディングページ。和の雰囲気を大切にしながら、予約への動線を分かりやすく設計。", tag: "ランディングページ" },
    { img: uiux04, title: "フィットネスアプリ", desc: "トレーニング管理アプリ。ダークモードで視認性を確保し、達成率をプログレスバーで可視化。", tag: "モバイルアプリ" },
    { img: uiux05, title: "美容院予約サイト", desc: "スタイリスト一覧から直接予約できるUI。洗練されたデザインでサロンのブランドイメージを表現。", tag: "予約サイト" },
  ];
  return (
    <div className="page-animate" style={{ minHeight:"100vh", background:C.bg, fontFamily:"'Georgia','Hiragino Mincho ProN',serif", color:C.dark }}>
      <header style={{ position:"fixed", top:0, left:0, right:0, zIndex:50, background:`${C.bg}f5`, backdropFilter:"blur(8px)", borderBottom:`2px solid ${C.primary}33` }}>
        <nav style={{ maxWidth:1200, margin:"0 auto", padding:"1rem 1.5rem", display:"flex", alignItems:"center", gap:"1rem" }}>
          <button onClick={onBack} style={{ background:"none", border:"none", cursor:"pointer", display:"flex", alignItems:"center", gap:"0.5rem", color:C.primary, fontSize:"0.9rem", letterSpacing:"0.1em" }}><IconArrowLeft /> ホームに戻る</button>
          <div style={{ width:1, height:20, background:C.border }} />
          <div style={{ display:"flex", alignItems:"center", gap:"0.6rem" }}><YoichiMark size={36} /><span style={{ fontSize:"1.2rem", fontWeight:700, letterSpacing:"0.2em" }}>YOICHI<span style={{ color:C.accent }}>.</span></span></div>
          <span style={{ color:C.textMuted, fontSize:"0.85rem", letterSpacing:"0.15em" }}>/ UI/UX SAMPLES</span>
        </nav>
      </header>
      <div style={{ padding:"7rem 1.5rem 5rem", maxWidth:1000, margin:"0 auto" }}>
        <SectionHeading en="UI/UX DESIGN SAMPLES" ja="UI/UXデザインサンプル" />
        <p style={{ textAlign:"center", color:"#555", marginBottom:"4rem", lineHeight:1.9 }}>使いやすさと美しさを両立したUI/UXデザインのサンプルです。<br />Webサイト・アプリ・管理画面など幅広く対応いたします。</p>
        <div style={{ display:"flex", flexDirection:"column", gap:"3rem" }}>
          {samples.map((s, i) => (
            <div key={i} className="anim-item" style={{ background:C.white, border:`1px solid ${C.border}`, overflow:"hidden", transition:"all 0.3s" }}
              onMouseEnter={e => { e.currentTarget.style.boxShadow="0 8px 32px rgba(0,0,0,0.1)"; e.currentTarget.style.transform="translateY(-2px)"; }}
              onMouseLeave={e => { e.currentTarget.style.boxShadow="none"; e.currentTarget.style.transform="none"; }}
            >
              <img src={s.img} alt={s.title} style={{ width:"100%", display:"block" }} />
              <div style={{ padding:"1.5rem 2rem" }}>
                <div style={{ display:"flex", alignItems:"center", gap:"0.75rem", marginBottom:"0.5rem" }}>
                  <span style={{ background:C.accent, color:"#fff", fontSize:"0.7rem", padding:"0.2rem 0.6rem", letterSpacing:"0.1em" }}>{s.tag}</span>
                  <span style={{ fontSize:"0.75rem", color:C.textMuted }}>SAMPLE {String(i+1).padStart(2,"0")}</span>
                </div>
                <h3 style={{ fontSize:"1.2rem", fontFamily:"serif", fontWeight:400, marginBottom:"0.5rem" }}>{s.title}</h3>
                <p style={{ fontSize:"0.9rem", color:"#777", lineHeight:1.8 }}>{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <div style={{ textAlign:"center", marginTop:"4rem" }}>
          <button onClick={() => { onBack(); setTimeout(() => document.getElementById("contact")?.scrollIntoView({ behavior:"smooth" }), 100); }} style={{ padding:"1rem 2.5rem", background:C.primary, color:"#fff", border:"none", cursor:"pointer", fontSize:"1rem", letterSpacing:"0.12em", fontFamily:"inherit", boxShadow:"0 4px 20px rgba(139,79,71,0.3)" }}>UI/UXデザインのご相談はこちら →</button>
        </div>
      </div>
      <footer style={{ borderTop:`1px solid ${C.border}`, padding:"2rem 1.5rem", textAlign:"center", background:C.dark, color:C.bg }}>
        <p style={{ fontSize:"0.8rem", color:"#9ca3af", letterSpacing:"0.12em" }}>© 令和八年 YOICHI</p>
      </footer>
    </div>
  );
}

// ── ロゴサンプルページ ──
function LogoSamplesPage({ onBack }) {
  const logos = [
    { img: logo01, title: "ミニマル・サークル", desc: "カフェ・コーヒーショップ向け", tag: "カフェ" },
    { img: logo02, title: "和風・家紋スタイル", desc: "和菓子・旅館・伝統工芸向け", tag: "和風" },
    { img: logo03, title: "シャープ・モダン", desc: "IT・テック企業向け", tag: "テック" },
    { img: logo04, title: "エレガント・ゴールド", desc: "美容室・ジュエリー向け", tag: "美容" },
    { img: logo05, title: "ナチュラル・リーフ", desc: "オーガニック・自然食品向け", tag: "ナチュラル" },
    { img: logo06, title: "太字・インパクト", desc: "ジム・スポーツ・アパレル向け", tag: "スポーツ" },
    { img: logo07, title: "幾何学・ヘキサゴン", desc: "建築・不動産向け", tag: "建築" },
    { img: logo08, title: "ポップ・カラフル", desc: "写真スタジオ・キッズ向け", tag: "キッズ" },
    { img: logo09, title: "高級・モノグラム", desc: "ホテル・レストラン・ブランド向け", tag: "高級" },
    { img: logo10, title: "和モダン・日本茶", desc: "和食・日本茶カフェ向け", tag: "和風" },
  ];
  return (
    <div className="page-animate" style={{ minHeight:"100vh", background:C.bg, fontFamily:"'Georgia','Hiragino Mincho ProN',serif", color:C.dark }}>
      <header style={{ position:"fixed", top:0, left:0, right:0, zIndex:50, background:`${C.bg}f5`, backdropFilter:"blur(8px)", borderBottom:`2px solid ${C.primary}33` }}>
        <nav style={{ maxWidth:1200, margin:"0 auto", padding:"1rem 1.5rem", display:"flex", alignItems:"center", gap:"1rem" }}>
          <button onClick={onBack} style={{ background:"none", border:"none", cursor:"pointer", display:"flex", alignItems:"center", gap:"0.5rem", color:C.primary, fontSize:"0.9rem", letterSpacing:"0.1em" }}><IconArrowLeft /> ホームに戻る</button>
          <div style={{ width:1, height:20, background:C.border }} />
          <div style={{ display:"flex", alignItems:"center", gap:"0.6rem" }}><YoichiMark size={36} /><span style={{ fontSize:"1.2rem", fontWeight:700, letterSpacing:"0.2em" }}>YOICHI<span style={{ color:C.accent }}>.</span></span></div>
          <span style={{ color:C.textMuted, fontSize:"0.85rem", letterSpacing:"0.15em" }}>/ LOGO SAMPLES</span>
        </nav>
      </header>
      <div style={{ padding:"7rem 1.5rem 5rem", maxWidth:1200, margin:"0 auto" }}>
        <SectionHeading en="LOGO DESIGN SAMPLES" ja="ロゴデザインサンプル" />
        <p style={{ textAlign:"center", color:"#555", marginBottom:"4rem", lineHeight:1.9 }}>さまざまな業種・テイストに対応したロゴデザインのサンプルです。<br />お客様のブランドに合わせたオリジナルロゴを制作いたします。</p>
        <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(280px,1fr))", gap:"2rem" }}>
          {logos.map((l, i) => (
            <div key={i} style={{ background:C.white, border:`1px solid ${C.border}`, overflow:"hidden", transition:"all 0.3s" }}
              onMouseEnter={e => { e.currentTarget.style.borderColor=C.accent; e.currentTarget.style.transform="translateY(-4px)"; e.currentTarget.style.boxShadow="0 12px 32px rgba(0,0,0,0.1)"; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor=C.border; e.currentTarget.style.transform="none"; e.currentTarget.style.boxShadow="none"; }}
            >
              <div style={{ padding:"1rem", background:"#fafafa" }}>
                <img src={l.img} alt={l.title} style={{ width:"100%", display:"block" }} />
              </div>
              <div style={{ padding:"1.2rem 1.5rem" }}>
                <div style={{ display:"flex", alignItems:"center", gap:"0.5rem", marginBottom:"0.4rem" }}>
                  <span style={{ background:C.accent, color:"#fff", fontSize:"0.65rem", padding:"0.15rem 0.5rem", letterSpacing:"0.08em" }}>{l.tag}</span>
                  <span style={{ fontSize:"0.7rem", color:C.textMuted }}>SAMPLE {String(i+1).padStart(2,"0")}</span>
                </div>
                <h3 style={{ fontSize:"1rem", fontFamily:"serif", fontWeight:400, marginBottom:"0.3rem" }}>{l.title}</h3>
                <p style={{ fontSize:"0.82rem", color:"#888", lineHeight:1.6 }}>{l.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <div style={{ textAlign:"center", marginTop:"4rem" }}>
          <button onClick={() => { onBack(); setTimeout(() => document.getElementById("contact")?.scrollIntoView({ behavior:"smooth" }), 100); }} style={{ padding:"1rem 2.5rem", background:C.primary, color:"#fff", border:"none", cursor:"pointer", fontSize:"1rem", letterSpacing:"0.12em", fontFamily:"inherit", boxShadow:"0 4px 20px rgba(139,79,71,0.3)" }}>ロゴ制作のご相談はこちら →</button>
        </div>
      </div>
      <footer style={{ borderTop:`1px solid ${C.border}`, padding:"2rem 1.5rem", textAlign:"center", background:C.dark, color:C.bg }}>
        <p style={{ fontSize:"0.8rem", color:"#9ca3af", letterSpacing:"0.12em" }}>© 令和八年 YOICHI</p>
      </footer>
    </div>
  );
}

// ── バナーサンプルページ ──
function BannerSamplesPage({ onBack }) {
  const banners = [
    { img: bannerCafe, title: "カフェ・オープン告知", desc: "ダーク×ゴールドの高級感あるデザイン。新規オープンの雰囲気を演出。", tag: "飲食店" },
    { img: bannerSale, title: "スプリングセール", desc: "赤×白のストライプで目を引くセールバナー。期間限定感を強調。", tag: "セール" },
    { img: bannerRestaurant, title: "和風レストラン", desc: "伝統的な和のテイストで高級感を演出。菱形パターンと金の装飾。", tag: "飲食店" },
    { img: bannerSalon, title: "ヘアサロン", desc: "モノトーン×ゴールドの洗練されたデザイン。美容室の上品さを表現。", tag: "美容" },
    { img: bannerEc, title: "ECサイト・新商品", desc: "ネイビー×ホワイトのクリーンなデザイン。商品カード付きで見やすく。", tag: "EC" },
  ];
  return (
    <div className="page-animate" style={{ minHeight:"100vh", background:C.bg, fontFamily:"'Georgia','Hiragino Mincho ProN',serif", color:C.dark }}>
      <header style={{ position:"fixed", top:0, left:0, right:0, zIndex:50, background:`${C.bg}f5`, backdropFilter:"blur(8px)", borderBottom:`2px solid ${C.primary}33` }}>
        <nav style={{ maxWidth:1200, margin:"0 auto", padding:"1rem 1.5rem", display:"flex", alignItems:"center", gap:"1rem" }}>
          <button onClick={onBack} style={{ background:"none", border:"none", cursor:"pointer", display:"flex", alignItems:"center", gap:"0.5rem", color:C.primary, fontSize:"0.9rem", letterSpacing:"0.1em" }}><IconArrowLeft /> ホームに戻る</button>
          <div style={{ width:1, height:20, background:C.border }} />
          <div style={{ display:"flex", alignItems:"center", gap:"0.6rem" }}><YoichiMark size={36} /><span style={{ fontSize:"1.2rem", fontWeight:700, letterSpacing:"0.2em" }}>YOICHI<span style={{ color:C.accent }}>.</span></span></div>
          <span style={{ color:C.textMuted, fontSize:"0.85rem", letterSpacing:"0.15em" }}>/ BANNER SAMPLES</span>
        </nav>
      </header>
      <div style={{ padding:"7rem 1.5rem 5rem", maxWidth:1000, margin:"0 auto" }}>
        <SectionHeading en="BANNER DESIGN SAMPLES" ja="バナーデザインサンプル" />
        <p style={{ textAlign:"center", color:"#555", marginBottom:"4rem", lineHeight:1.9 }}>YOICHIが制作した広告バナーのイメージサンプルです。<br />お客様のご要望に合わせてオリジナルデザインを制作いたします。</p>
        <div style={{ display:"flex", flexDirection:"column", gap:"3rem" }}>
          {banners.map((b, i) => (
            <div key={i} style={{ background:C.white, border:`1px solid ${C.border}`, overflow:"hidden", transition:"all 0.3s" }}
              onMouseEnter={e => { e.currentTarget.style.boxShadow="0 8px 32px rgba(0,0,0,0.1)"; e.currentTarget.style.transform="translateY(-2px)"; }}
              onMouseLeave={e => { e.currentTarget.style.boxShadow="none"; e.currentTarget.style.transform="none"; }}
            >
              <img src={b.img} alt={b.title} style={{ width:"100%", display:"block" }} />
              <div style={{ padding:"1.5rem 2rem" }}>
                <div style={{ display:"flex", alignItems:"center", gap:"0.75rem", marginBottom:"0.5rem" }}>
                  <span style={{ background:C.accent, color:"#fff", fontSize:"0.7rem", padding:"0.2rem 0.6rem", letterSpacing:"0.1em" }}>{b.tag}</span>
                  <span style={{ fontSize:"0.75rem", color:C.textMuted }}>SAMPLE {String(i+1).padStart(2,"0")}</span>
                </div>
                <h3 style={{ fontSize:"1.2rem", fontFamily:"serif", fontWeight:400, marginBottom:"0.5rem" }}>{b.title}</h3>
                <p style={{ fontSize:"0.9rem", color:"#777", lineHeight:1.8 }}>{b.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <div style={{ textAlign:"center", marginTop:"4rem" }}>
          <button onClick={() => { onBack(); setTimeout(() => document.getElementById("contact")?.scrollIntoView({ behavior:"smooth" }), 100); }} style={{ padding:"1rem 2.5rem", background:C.primary, color:"#fff", border:"none", cursor:"pointer", fontSize:"1rem", letterSpacing:"0.12em", fontFamily:"inherit", boxShadow:"0 4px 20px rgba(139,79,71,0.3)" }}>バナー制作のご相談はこちら →</button>
        </div>
      </div>
      <footer style={{ borderTop:`1px solid ${C.border}`, padding:"2rem 1.5rem", textAlign:"center", background:C.dark, color:C.bg }}>
        <p style={{ fontSize:"0.8rem", color:"#9ca3af", letterSpacing:"0.12em" }}>© 令和八年 YOICHI</p>
      </footer>
    </div>
  );
}

// ── サンプルページ ──
function SamplesPage({ onBack }) {
  const allSamples = [
    { img: meishiSampleImg, tag:"名刺", title:"シンプルと高級感を両立したデザイン", desc:"Hair Salon向けのシンプルかつ高級感のある名刺デザイン。" },
    { img: sakuraBoxImg, tag:"パッケージ", title:"桜が届ける、春の贈りもの", desc:"春の季節に合わせた桜模様のギフトボックスデザイン。" },
    { img: sample01, tag:"招待状", title:"ウェディング招待状", desc:"上品なゴールドのフレームで特別な日を演出する招待状デザイン。" },
    { img: sample02, tag:"ショップカード", title:"和菓子ショップカード", desc:"伝統的な和の雰囲気を活かした老舗和菓子店のショップカード。" },
    { img: sample03, tag:"ポスター", title:"スポーツイベントポスター", desc:"ダイナミックなレイアウトでイベントの活力を伝えるポスター。" },
    { img: sample04, tag:"ブランディング", title:"ナチュラルコスメ", desc:"自然派コスメブランドの世界観を表現したブランディングデザイン。" },
    { img: sample05, tag:"チラシ", title:"音楽教室チラシ", desc:"楽しさと本格的なレッスン内容を伝える音楽教室のチラシ。" },
    { img: sample06, tag:"チラシ", title:"不動産チラシ", desc:"物件の魅力を分かりやすく伝える不動産広告デザイン。" },
    { img: sample07, tag:"メニュー", title:"カフェメニューデザイン", desc:"木漏れ日のような温かさを感じるカフェのメニュー表。" },
    { img: sample08, tag:"フライヤー", title:"ヨガスタジオフライヤー", desc:"穏やかで心地よい雰囲気を伝えるヨガスタジオのフライヤー。" },
    { img: sample09, tag:"ポスター", title:"テックカンファレンス", desc:"先進的なテクノロジーイベントのポスターデザイン。" },
    { img: sample10, tag:"チラシ", title:"ペットサロンチラシ", desc:"かわいさと信頼感を両立したペットサロンの広告デザイン。" },
    { img: meishiImg, tag:"名刺", title:"あなたの想いをこの一枚に", desc:"こだわりの名刺をYOICHIで。お客様のブランドを一枚に凝縮。" },
  ];
  return (
    <div className="page-animate" style={{ minHeight:"100vh", background:C.bg, fontFamily:"'Georgia','Hiragino Mincho ProN',serif", color:C.dark }}>
      <header style={{ position:"fixed", top:0, left:0, right:0, zIndex:50, background:`${C.bg}f5`, backdropFilter:"blur(8px)", borderBottom:`2px solid ${C.primary}33` }}>
        <nav style={{ maxWidth:1200, margin:"0 auto", padding:"1rem 1.5rem", display:"flex", alignItems:"center", gap:"1rem" }}>
          <button onClick={onBack} style={{ background:"none", border:"none", cursor:"pointer", display:"flex", alignItems:"center", gap:"0.5rem", color:C.primary, fontSize:"0.9rem", letterSpacing:"0.1em" }}><IconArrowLeft /> ホームに戻る</button>
          <div style={{ width:1, height:20, background:C.border }} />
          <div style={{ display:"flex", alignItems:"center", gap:"0.6rem" }}><YoichiMark size={36} /><span style={{ fontSize:"1.2rem", fontWeight:700, letterSpacing:"0.2em" }}>YOICHI<span style={{ color:C.accent }}>.</span></span></div>
          <span style={{ color:C.textMuted, fontSize:"0.85rem", letterSpacing:"0.15em" }}>/ SAMPLES</span>
        </nav>
      </header>

      <div style={{ padding:"7rem 1.5rem 5rem", maxWidth:1200, margin:"0 auto" }}>
        <SectionHeading en="IMAGE SAMPLES" ja="イメージサンプル" />
        <p style={{ textAlign:"center", color:"#555", marginBottom:"4rem", lineHeight:1.9 }}>YOICHIが制作したデザインのイメージサンプルです。<br />実際の制作ではお客様のご要望に合わせてカスタマイズいたします。</p>

        <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(320px,1fr))", gap:"2rem" }}>
          {allSamples.map((s, i) => (
            <div key={i} className="anim-item" style={{ background:C.white, border:`1px solid ${C.border}`, overflow:"hidden", transition:"all 0.3s" }}
              onMouseEnter={e => { e.currentTarget.style.borderColor=C.accent; e.currentTarget.style.transform="translateY(-4px)"; e.currentTarget.style.boxShadow="0 12px 32px rgba(0,0,0,0.12)"; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor=C.border; e.currentTarget.style.transform="none"; e.currentTarget.style.boxShadow="none"; }}
            >
              <img src={s.img} alt={s.title} style={{ width:"100%", display:"block" }} />
              <div style={{ padding:"1.2rem 1.5rem" }}>
                <div style={{ display:"flex", alignItems:"center", gap:"0.5rem", marginBottom:"0.4rem" }}>
                  <span style={{ background:C.accent, color:"#fff", fontSize:"0.65rem", padding:"0.15rem 0.5rem", letterSpacing:"0.08em" }}>{s.tag}</span>
                  <span style={{ fontSize:"0.7rem", color:C.textMuted }}>SAMPLE {String(i+1).padStart(2,"0")}</span>
                </div>
                <h3 style={{ fontSize:"1rem", fontFamily:"serif", fontWeight:400, marginBottom:"0.3rem" }}>{s.title}</h3>
                <p style={{ fontSize:"0.82rem", color:"#888", lineHeight:1.6 }}>{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <footer style={{ borderTop:`1px solid ${C.border}`, padding:"2rem 1.5rem", textAlign:"center", background:C.dark, color:C.bg }}>
        <p style={{ fontSize:"0.8rem", color:"#9ca3af", letterSpacing:"0.12em" }}>© 令和八年 YOICHI</p>
      </footer>
    </div>
  );
}

// ── パッケージデザインページ ──
function PackagePage({ onBack, onContact }) {
  return (
    <div className="page-animate" style={{ minHeight:"100vh", background:"#fdf5f0", fontFamily:"'Georgia','Hiragino Mincho ProN',serif", color:"#3a3230" }}>
      <header style={{ position:"fixed", top:0, left:0, right:0, zIndex:50, background:"rgba(253,245,240,0.95)", backdropFilter:"blur(8px)", borderBottom:"2px solid #e8c0cc" }}>
        <nav style={{ maxWidth:1200, margin:"0 auto", padding:"1rem 1.5rem", display:"flex", alignItems:"center", gap:"1rem" }}>
          <button onClick={onBack} style={{ background:"none", border:"none", cursor:"pointer", display:"flex", alignItems:"center", gap:"0.5rem", color:"#8b4f47", fontSize:"0.9rem", letterSpacing:"0.1em" }}><IconArrowLeft /> ホームに戻る</button>
          <div style={{ width:1, height:20, background:"#e8c0cc" }} />
          <div style={{ display:"flex", alignItems:"center", gap:"0.6rem" }}><YoichiMark size={36} /><span style={{ fontSize:"1.2rem", fontWeight:700, letterSpacing:"0.2em" }}>YOICHI<span style={{ color:"#c4504a" }}>.</span></span></div>
          <span style={{ color:"#aaa", fontSize:"0.85rem", letterSpacing:"0.15em" }}>/ PACKAGE DESIGN</span>
        </nav>
      </header>

      <div style={{ paddingTop:"5rem" }}>
        <div style={{ maxWidth:700, margin:"0 auto", padding:"2rem 1.5rem" }}>
          <img
            src={sakuraBoxImg}
            alt="桜のパッケージデザイン"
            style={{ width:"100%", display:"block", boxShadow:"0 8px 40px rgba(0,0,0,0.12)" }}
          />
        </div>

        <div style={{ background:"#fff", padding:"5rem 1.5rem", position:"relative" }}>
          <div style={{ position:"absolute", top:0, left:0, right:0, height:3, background:"linear-gradient(to right,#e8a0b0,#c4504a)" }} />
          <div style={{ maxWidth:900, margin:"0 auto" }}>
            <div style={{ textAlign:"center", marginBottom:"4rem" }}>
              <p style={{ fontSize:"0.75rem", color:"#aaa", letterSpacing:"0.3em", marginBottom:"0.5rem" }}>PACKAGE DESIGN</p>
              <h2 style={{ fontSize:"clamp(1.8rem,4vw,2.8rem)", fontFamily:"serif", fontWeight:400, color:"#3a3230", lineHeight:1.7, marginBottom:"1rem" }}>想いを包む、特別なデザイン</h2>
              <div style={{ width:64, height:4, background:"#c4504a", margin:"0 auto" }} />
            </div>

            <p style={{ color:"#555", lineHeight:2.2, fontSize:"1rem", textAlign:"center", maxWidth:700, margin:"0 auto 3rem" }}>
              パッケージは商品の第一印象を決める大切な要素です。<br />
              YOICHIでは、お客様のブランドや想いを丁寧にヒアリングし、<br />
              心に残るパッケージデザインを制作いたします。
            </p>

            <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(260px,1fr))", gap:"1.5rem", marginBottom:"4rem" }}>
              {[
                { title:"オリジナルデザイン", desc:"ブランドの世界観を表現した唯一無二のパッケージをご提案します。" },
                { title:"用途に合わせた提案", desc:"ギフト・食品・雑貨など、用途に応じた最適なデザインをご提案。" },
                { title:"印刷データ納品", desc:"印刷に対応したデータを納品。印刷会社への入稿もサポートします。" },
                { title:"小ロット対応", desc:"少量からでもご相談可能。試作品のデザインも承ります。" },
              ].map((item, i) => (
                <div key={i} style={{ background:"#fdf5f0", border:"1px solid #e8c0cc", padding:"2rem", position:"relative", overflow:"hidden" }}>
                  <div style={{ width:32, height:3, background:"#c4504a", marginBottom:"1rem" }} />
                  <h4 style={{ fontSize:"1.1rem", fontFamily:"serif", fontWeight:400, color:"#3a3230", marginBottom:"0.75rem" }}>{item.title}</h4>
                  <p style={{ fontSize:"0.9rem", color:"#666", lineHeight:1.8 }}>{item.desc}</p>
                </div>
              ))}
            </div>

            <div style={{ textAlign:"center" }}>
              <button
                onClick={onContact}
                style={{ padding:"1rem 2.5rem", background:"#8b4f47", color:"#fff", border:"none", cursor:"pointer", fontSize:"1rem", letterSpacing:"0.12em", fontFamily:"inherit", transition:"background 0.2s", display:"inline-flex", alignItems:"center", gap:"0.5rem", boxShadow:"0 4px 20px rgba(139,79,71,0.3)" }}
                onMouseEnter={e => e.currentTarget.style.background="#6d3d37"}
                onMouseLeave={e => e.currentTarget.style.background="#8b4f47"}
              >パッケージデザインのご相談はこちら →</button>
            </div>
          </div>
        </div>

        <footer style={{ background:"#3a3230", padding:"2rem 1.5rem", textAlign:"center" }}>
          <p style={{ fontSize:"0.8rem", color:"#9ca3af", letterSpacing:"0.12em" }}>© 令和八年 YOICHI</p>
        </footer>
      </div>
    </div>
  );
}

// ── 名刺作成ページ ──
function MeishiPage({ onBack, onContact }) {
  return (
    <div className="page-animate" style={{ minHeight:"100vh", background:C.dark, fontFamily:"'Georgia','Hiragino Mincho ProN',serif", color:C.bg }}>
      <header style={{ position:"fixed", top:0, left:0, right:0, zIndex:50, background:`${C.dark}f5`, backdropFilter:"blur(8px)", borderBottom:`2px solid ${C.accent}33` }}>
        <nav style={{ maxWidth:1200, margin:"0 auto", padding:"1rem 1.5rem", display:"flex", alignItems:"center", gap:"1rem" }}>
          <button onClick={onBack} style={{ background:"none", border:"none", cursor:"pointer", display:"flex", alignItems:"center", gap:"0.5rem", color:C.accent, fontSize:"0.9rem", letterSpacing:"0.1em" }}><IconArrowLeft /> ホームに戻る</button>
          <div style={{ width:1, height:20, background:"rgba(255,255,255,0.2)" }} />
          <div style={{ display:"flex", alignItems:"center", gap:"0.6rem" }}><YoichiMark size={36} /><span style={{ fontSize:"1.2rem", fontWeight:700, letterSpacing:"0.2em", color:C.bg }}>YOICHI<span style={{ color:C.accent }}>.</span></span></div>
          <span style={{ color:"rgba(255,255,255,0.5)", fontSize:"0.85rem", letterSpacing:"0.15em" }}>/ BUSINESS CARD</span>
        </nav>
      </header>

      <div style={{ paddingTop:"6rem" }}>
        <div style={{ maxWidth:800, margin:"0 auto", padding:"2rem 1.5rem 4rem" }}>
          <div style={{ position:"relative" }}>
            <div style={{ position:"absolute", top:-12, left:-12, right:12, bottom:12, border:`2px solid ${C.accent}`, opacity:0.3 }} />
            <img src={meishiImg} alt="こだわりの名刺をYOICHIで" style={{ width:"100%", display:"block", position:"relative" }} />
          </div>
        </div>

        <div style={{ background:C.bg, padding:"5rem 1.5rem", position:"relative" }}>
          <div style={{ position:"absolute", top:0, left:0, right:0, height:3, background:`linear-gradient(to right,${C.accent},${C.primary})` }} />
          <div style={{ maxWidth:900, margin:"0 auto" }}>
            <div style={{ textAlign:"center", marginBottom:"4rem" }}>
              <p style={{ fontSize:"0.75rem", color:C.textMuted, letterSpacing:"0.3em", marginBottom:"0.5rem" }}>BUSINESS CARD DESIGN</p>
              <h2 style={{ fontSize:"clamp(1.8rem,4vw,2.8rem)", fontFamily:"serif", fontWeight:400, color:C.dark, lineHeight:1.7, marginBottom:"1rem" }}>あなたの想いを、この一枚に</h2>
              <div style={{ width:64, height:4, background:C.accent, margin:"0 auto" }} />
            </div>

            <p style={{ color:"#555", lineHeight:2.2, fontSize:"1rem", textAlign:"center", maxWidth:700, margin:"0 auto 3rem" }}>
              名刺はあなたの第一印象を決める大切なツールです。<br />
              YOICHIでは、お客様のブランドや想いを丁寧にヒアリングし、<br />
              こだわりの一枚を制作いたします。
            </p>

            <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(260px,1fr))", gap:"1.5rem", marginBottom:"4rem" }}>
              {[
                { title:"オリジナルデザイン", desc:"テンプレートではなく、お客様だけの唯一無二のデザインをご提案します。" },
                { title:"レイアウト提案", desc:"用途・業種に合わせた最適なレイアウトをご提案いたします。" },
                { title:"印刷データ納品", desc:"印刷データの作成・納品まで一貫して対応いたします。" },
                { title:"小ロット対応", desc:"少量からでもお気軽にご相談ください。個人の方も大歓迎です。" },
              ].map((item, i) => (
                <div key={i} style={{ background:C.white, border:`1px solid ${C.border}`, padding:"2rem", position:"relative", overflow:"hidden" }}>
                  <div style={{ position:"absolute", bottom:-20, right:-20, width:100, height:100, color:C.primary, opacity:0.04 }}><YagasuriBg /></div>
                  <div style={{ width:32, height:3, background:C.accent, marginBottom:"1rem" }} />
                  <h4 style={{ fontSize:"1.1rem", fontFamily:"serif", fontWeight:400, color:C.dark, marginBottom:"0.75rem" }}>{item.title}</h4>
                  <p style={{ fontSize:"0.9rem", color:"#666", lineHeight:1.8 }}>{item.desc}</p>
                </div>
              ))}
            </div>

            <div style={{ textAlign:"center" }}>
              <button
                onClick={onContact}
                style={{ padding:"1rem 2.5rem", background:C.primary, color:"#fff", border:"none", cursor:"pointer", fontSize:"1rem", letterSpacing:"0.12em", fontFamily:"inherit", transition:"background 0.2s", display:"inline-flex", alignItems:"center", gap:"0.5rem", boxShadow:"0 4px 20px rgba(139,79,71,0.3)" }}
                onMouseEnter={e => e.currentTarget.style.background=C.deep}
                onMouseLeave={e => e.currentTarget.style.background=C.primary}
              >名刺制作のご相談はこちら →</button>
            </div>
          </div>
        </div>

        <footer style={{ background:C.dark, padding:"2rem 1.5rem", textAlign:"center", borderTop:`1px solid rgba(255,255,255,0.1)` }}>
          <p style={{ fontSize:"0.8rem", color:"#9ca3af", letterSpacing:"0.12em" }}>© 令和八年 YOICHI</p>
        </footer>
      </div>
    </div>
  );
}

// ── レイアウトデザインサンプルページ ──
function LayoutSamplesPage({ onBack }) {
  const samples = [
    { img: layout01, title:"マガジンレイアウト", desc:"ヒーロー画像・サイドバー・3カラムグリッドを組み合わせた雑誌風レイアウト。ビジュアルと文章のバランスを重視した構成です。", tag:"マガジン" },
    { img: layout02, title:"コーポレートブロシュア", desc:"企業パンフレット向けの信頼感あるレイアウト。ミッション・サービス・実績を整理して伝える2カラム構成。", tag:"会社案内" },
    { img: layout03, title:"イベントフライヤー", desc:"ダーク背景×アクセントカラーで目を引くイベント告知レイアウト。日時・場所・CTAを分かりやすく配置。", tag:"イベント" },
    { img: layout04, title:"プロダクトカタログ", desc:"商品を大きく見せるメインビジュアルと、スペック・価格を整理したサイドパネル。商品一覧グリッド付き。", tag:"カタログ" },
    { img: layout05, title:"ニュースレター・レポート", desc:"リード記事・統計データ・3カラム記事を組み合わせた情報量の多いレイアウト。社内報や定期レポートに最適。", tag:"レポート" },
  ];
  return (
    <div className="page-animate" style={{ minHeight:"100vh", background:C.bg, fontFamily:"'Georgia','Hiragino Mincho ProN',serif", color:C.dark }}>
      <header style={{ position:"fixed", top:0, left:0, right:0, zIndex:50, background:`${C.bg}f5`, backdropFilter:"blur(8px)", borderBottom:`2px solid ${C.primary}33` }}>
        <nav style={{ maxWidth:1200, margin:"0 auto", padding:"1rem 1.5rem", display:"flex", alignItems:"center", gap:"1rem" }}>
          <button onClick={onBack} style={{ background:"none", border:"none", cursor:"pointer", display:"flex", alignItems:"center", gap:"0.5rem", color:C.primary, fontSize:"0.9rem", letterSpacing:"0.1em" }}><IconArrowLeft /> ホームに戻る</button>
          <div style={{ width:1, height:20, background:C.border }} />
          <div style={{ display:"flex", alignItems:"center", gap:"0.6rem" }}><YoichiMark size={36} /><span style={{ fontSize:"1.2rem", fontWeight:700, letterSpacing:"0.2em" }}>YOICHI<span style={{ color:C.accent }}>.</span></span></div>
          <span style={{ color:C.textMuted, fontSize:"0.85rem", letterSpacing:"0.15em" }}>/ LAYOUT SAMPLES</span>
        </nav>
      </header>
      <div style={{ padding:"7rem 1.5rem 5rem", maxWidth:1000, margin:"0 auto" }}>
        <SectionHeading en="LAYOUT DESIGN SAMPLES" ja="レイアウトデザインサンプル" />
        <p style={{ textAlign:"center", color:"#555", marginBottom:"4rem", lineHeight:1.9 }}>マガジン・カタログ・フライヤー・レポートなど、<br />用途に合わせた情報整理と視覚的な構成をご提案いたします。</p>
        <div style={{ display:"flex", flexDirection:"column", gap:"3rem" }}>
          {samples.map((s, i) => (
            <div key={i} className="anim-item" style={{ background:C.white, border:`1px solid ${C.border}`, overflow:"hidden", transition:"all 0.3s" }}
              onMouseEnter={e => { e.currentTarget.style.boxShadow="0 8px 32px rgba(0,0,0,0.1)"; e.currentTarget.style.transform="translateY(-2px)"; }}
              onMouseLeave={e => { e.currentTarget.style.boxShadow="none"; e.currentTarget.style.transform="none"; }}
            >
              <div style={{ padding:"1rem", background:"#f8f8f8" }}>
                <img src={s.img} alt={s.title} style={{ width:"100%", display:"block", maxHeight:600, objectFit:"contain" }} />
              </div>
              <div style={{ padding:"1.5rem 2rem" }}>
                <div style={{ display:"flex", alignItems:"center", gap:"0.75rem", marginBottom:"0.5rem" }}>
                  <span style={{ background:C.accent, color:"#fff", fontSize:"0.7rem", padding:"0.2rem 0.6rem", letterSpacing:"0.1em" }}>{s.tag}</span>
                  <span style={{ fontSize:"0.75rem", color:C.textMuted }}>SAMPLE {String(i+1).padStart(2,"0")}</span>
                </div>
                <h3 style={{ fontSize:"1.2rem", fontFamily:"serif", fontWeight:400, marginBottom:"0.5rem" }}>{s.title}</h3>
                <p style={{ fontSize:"0.9rem", color:"#777", lineHeight:1.8 }}>{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <div style={{ textAlign:"center", marginTop:"4rem" }}>
          <button onClick={() => { onBack(); setTimeout(() => document.getElementById("contact")?.scrollIntoView({ behavior:"smooth" }), 100); }} style={{ padding:"1rem 2.5rem", background:C.primary, color:"#fff", border:"none", cursor:"pointer", fontSize:"1rem", letterSpacing:"0.12em", fontFamily:"inherit", boxShadow:"0 4px 20px rgba(139,79,71,0.3)" }}>レイアウトデザインのご相談はこちら →</button>
        </div>
      </div>
      <footer style={{ borderTop:`1px solid ${C.border}`, padding:"2rem 1.5rem", textAlign:"center", background:C.dark, color:C.bg }}>
        <p style={{ fontSize:"0.8rem", color:"#9ca3af", letterSpacing:"0.12em" }}>© 令和八年 YOICHI</p>
      </footer>
    </div>
  );
}

// ── 図解デザインサンプルページ ──
function DiagramSamplesPage({ onBack }) {
  const samples = [
    { img: diagram01, title:"プロセスフロー図解", desc:"サービス提供やプロジェクト進行のステップを視覚的に表現。矢印と番号で流れを一目で把握できるフロー図です。", tag:"フロー図" },
    { img: diagram02, title:"比較チャート図解", desc:"プラン・商品・サービスの違いを横並びで比較。バーグラフとドット評価で定量的に差を見せるインフォグラフィック。", tag:"比較図" },
    { img: diagram03, title:"組織図・体制図", desc:"企業や団体の組織構造を階層的に表現。チーム構成・人員数・担当領域を一覧で把握できるデザイン。", tag:"組織図" },
    { img: diagram04, title:"タイムライン図解", desc:"プロジェクトのロードマップやスケジュールを時系列で表現。四半期ごとのマイルストーンを視覚化。", tag:"タイムライン" },
    { img: diagram05, title:"データダッシュボード", desc:"KPI・棒グラフ・ドーナツチャート・進捗バー・トレンドラインを組み合わせた総合的なデータ可視化デザイン。", tag:"データ可視化" },
  ];
  return (
    <div className="page-animate" style={{ minHeight:"100vh", background:C.bg, fontFamily:"'Georgia','Hiragino Mincho ProN',serif", color:C.dark }}>
      <header style={{ position:"fixed", top:0, left:0, right:0, zIndex:50, background:`${C.bg}f5`, backdropFilter:"blur(8px)", borderBottom:`2px solid ${C.primary}33` }}>
        <nav style={{ maxWidth:1200, margin:"0 auto", padding:"1rem 1.5rem", display:"flex", alignItems:"center", gap:"1rem" }}>
          <button onClick={onBack} style={{ background:"none", border:"none", cursor:"pointer", display:"flex", alignItems:"center", gap:"0.5rem", color:C.primary, fontSize:"0.9rem", letterSpacing:"0.1em" }}><IconArrowLeft /> ホームに戻る</button>
          <div style={{ width:1, height:20, background:C.border }} />
          <div style={{ display:"flex", alignItems:"center", gap:"0.6rem" }}><YoichiMark size={36} /><span style={{ fontSize:"1.2rem", fontWeight:700, letterSpacing:"0.2em" }}>YOICHI<span style={{ color:C.accent }}>.</span></span></div>
          <span style={{ color:C.textMuted, fontSize:"0.85rem", letterSpacing:"0.15em" }}>/ DIAGRAM SAMPLES</span>
        </nav>
      </header>
      <div style={{ padding:"7rem 1.5rem 5rem", maxWidth:1000, margin:"0 auto" }}>
        <SectionHeading en="DIAGRAM DESIGN SAMPLES" ja="図解デザインサンプル" />
        <p style={{ textAlign:"center", color:"#555", marginBottom:"4rem", lineHeight:1.9 }}>複雑な情報をわかりやすく伝える図解・インフォグラフィックのデザインサンプルです。<br />フロー図・比較表・組織図・タイムラインなど、用途に合わせてご提案いたします。</p>
        <div style={{ display:"flex", flexDirection:"column", gap:"3rem" }}>
          {samples.map((s, i) => (
            <div key={i} className="anim-item" style={{ background:C.white, border:`1px solid ${C.border}`, overflow:"hidden", transition:"all 0.3s" }}
              onMouseEnter={e => { e.currentTarget.style.boxShadow="0 8px 32px rgba(0,0,0,0.1)"; e.currentTarget.style.transform="translateY(-2px)"; }}
              onMouseLeave={e => { e.currentTarget.style.boxShadow="none"; e.currentTarget.style.transform="none"; }}
            >
              <div style={{ padding:"1rem", background:"#f8f8f8" }}>
                <img src={s.img} alt={s.title} style={{ width:"100%", display:"block", maxHeight:600, objectFit:"contain" }} />
              </div>
              <div style={{ padding:"1.5rem 2rem" }}>
                <div style={{ display:"flex", alignItems:"center", gap:"0.75rem", marginBottom:"0.5rem" }}>
                  <span style={{ background:C.accent, color:"#fff", fontSize:"0.7rem", padding:"0.2rem 0.6rem", letterSpacing:"0.1em" }}>{s.tag}</span>
                  <span style={{ fontSize:"0.75rem", color:C.textMuted }}>SAMPLE {String(i+1).padStart(2,"0")}</span>
                </div>
                <h3 style={{ fontSize:"1.2rem", fontFamily:"serif", fontWeight:400, marginBottom:"0.5rem" }}>{s.title}</h3>
                <p style={{ fontSize:"0.9rem", color:"#777", lineHeight:1.8 }}>{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <div style={{ textAlign:"center", marginTop:"4rem" }}>
          <button onClick={() => { onBack(); setTimeout(() => document.getElementById("contact")?.scrollIntoView({ behavior:"smooth" }), 100); }} style={{ padding:"1rem 2.5rem", background:C.primary, color:"#fff", border:"none", cursor:"pointer", fontSize:"1rem", letterSpacing:"0.12em", fontFamily:"inherit", boxShadow:"0 4px 20px rgba(139,79,71,0.3)" }}>図解デザインのご相談はこちら →</button>
        </div>
      </div>
      <footer style={{ borderTop:`1px solid ${C.border}`, padding:"2rem 1.5rem", textAlign:"center", background:C.dark, color:C.bg }}>
        <p style={{ fontSize:"0.8rem", color:"#9ca3af", letterSpacing:"0.12em" }}>© 令和八年 YOICHI</p>
      </footer>
    </div>
  );
}

const navLinks = [
  { label:"お仕事", id:"works_detail" },
  { label:"サンプル", id:"works" },
  { label:"自社ブランド", id:"brands" },
  { label:"ご納品の流れ", id:"flow" },
  { label:"会社概要", id:"about" },
  { label:"由来", id:"origin" },
  { label:"SNS", id:"sns" },
];

// 矢絣（やがすり）の帯
function YagasuriBand() {
  return (
    <svg width="100%" height="44" aria-hidden="true" style={{ display:"block" }}>
      <defs>
        <pattern id="yh-yagasuri" x="0" y="0" width="22" height="44" patternUnits="userSpaceOnUse">
          <path d="M0 11 L11 0 L22 11 M0 22 L11 11 L22 22 M0 33 L11 22 L22 33 M0 44 L11 33 L22 44" fill="none" stroke="currentColor" strokeWidth="1.4" />
          <path d="M11 0 V44" stroke="currentColor" strokeWidth="1.4" />
        </pattern>
      </defs>
      <rect width="100%" height="44" fill="url(#yh-yagasuri)" />
    </svg>
  );
}

// 的（まと）：朱と生成りの同心円
function TargetRings({ outline = false }) {
  const radii = [100, 78, 56, 34, 12];
  return (
    <svg viewBox="0 0 200 200" width="100%" height="100%" aria-hidden="true" style={{ display:"block" }}>
      {radii.map((r, i) => outline
        ? <circle key={r} cx="100" cy="100" r={r} fill="none" stroke="currentColor" strokeWidth="0.6" />
        : <circle key={r} cx="100" cy="100" r={r} fill={i % 2 === 0 ? "var(--shu)" : "var(--washi)"} />
      )}
    </svg>
  );
}

function HomeHeading({ children }) {
  return <h2 className="yh-h2"><span className="yh-dot" aria-hidden="true" />{children}</h2>;
}

export default function App() {
  const [page, setPage] = useState("home");
  const goToPage = (p) => { setPage(p); };
  // ページ切り替え後、必ず一番上から表示する
  useEffect(() => {
    window.scrollTo({ top:0, left:0, behavior:"instant" as ScrollBehavior });
  }, [page]);
  const [menuOpen, setMenuOpen] = useState(false);
  const [formData, setFormData] = useState({ name:"", furigana:"", company:"", email:"", message:"" });
  const [formStatus, setFormStatus] = useState("idle"); // idle | sending | sent | error
  const handleFormChange = (key, val) => setFormData(p => ({ ...p, [key]: val }));
  const handleFormSubmit = async () => {
    if (!formData.name || !formData.email || !formData.message) { alert("お名前・メールアドレス・お問い合わせ内容は必須です。"); return; }
    setFormStatus("sending");
    try {
      const res = await fetch("https://formsubmit.co/ajax/yoichi08107@gmail.com", {
        method: "POST",
        headers: { "Content-Type": "application/json", "Accept": "application/json" },
        body: JSON.stringify({
          _subject: `【YOICHI】${formData.name}様からのお問い合わせ`,
          "お名前": formData.name,
          "フリガナ": formData.furigana,
          "会社名": formData.company,
          "メールアドレス": formData.email,
          "お問い合わせ内容": formData.message,
        }),
      });
      if (res.ok) { setFormStatus("sent"); setFormData({ name:"", furigana:"", company:"", email:"", message:"" }); }
      else setFormStatus("error");
    } catch { setFormStatus("error"); }
  };

  if (page === "samples") return <SamplesPage onBack={() => goToPage("home")} />;
  if (page === "banners") return <BannerSamplesPage onBack={() => goToPage("home")} />;
  if (page === "logos") return <LogoSamplesPage onBack={() => goToPage("home")} />;
  if (page === "uiux") return <UiuxSamplesPage onBack={() => goToPage("home")} />;
  if (page === "websamples") return <WebSamplesPage onBack={() => goToPage("home")} />;
  if (page === "appsamples") return <AppSamplesPage onBack={() => goToPage("home")} />;
  if (page === "templates") return <TemplateSamplesPage onBack={() => goToPage("home")} />;
  if (page === "goods") return <GoodsSamplesPage onBack={() => goToPage("home")} />;
  if (page === "layouts") return <LayoutSamplesPage onBack={() => goToPage("home")} />;
  if (page === "diagrams") return <DiagramSamplesPage onBack={() => goToPage("home")} />;
  if (page === "meishi") return <MeishiPage onBack={() => goToPage("home")} onContact={() => { goToPage("home"); setTimeout(() => document.getElementById("contact")?.scrollIntoView({ behavior:"smooth" }), 100); }} />;
  if (page === "package") return <PackagePage onBack={() => goToPage("home")} onContact={() => { goToPage("home"); setTimeout(() => document.getElementById("contact")?.scrollIntoView({ behavior:"smooth" }), 100); }} />;
  if (page === "focus") return <FocusPage onBack={() => goToPage("home")} />;

  const scrollTo = (id) => { document.getElementById(id)?.scrollIntoView({ behavior:"smooth" }); setMenuOpen(false); };

  const works = [
    { label:"バナー作成", link:"banners" },
    { label:"名刺作成", link:"meishi" },
    { label:"ロゴ作成", link:"logos" },
    { label:"パッケージデザイン", link:"package" },
    { label:"UI/UXデザイン", link:"uiux" },
    { label:"ウェブサイト作成", link:"websamples" },
    { label:"アプリケーション作成", link:"appsamples" },
    { label:"テンプレート作成", link:"templates" },
    { label:"雑貨デザイン", link:"goods" },
    { label:"レイアウトデザイン", link:"layouts" },
    { label:"図解デザイン", link:"diagrams" },
  ];

  const originItems = [
    { letter:"Y", word:"Yume（夢）", desc:"お客様の夢やビジョンを共に描き、デザインの力で現実へと近づける存在でありたいという想いを込めています。" },
    { letter:"O", word:"Omoi（想い）", desc:"「想いをカタチに」というモットーの根幹。お客様一人ひとりの想いを丁寧に受け取り、形にすることを大切にしています。" },
    { letter:"I", word:"Ito（縁・糸）", desc:"人と人、人とデザインを結ぶ縁を大切に。日本の伝統文化における「縁」の概念をブランドの精神に取り入れています。" },
    { letter:"C", word:"Create（創造）", desc:"伝統と革新を融合させ、唯一無二の価値を創り出す。お客様とともに新しいものを生み出す創造の喜びを共有します。" },
    { letter:"H", word:"Harmony（調和）", desc:"美しさとは調和から生まれる。日本の美意識「和」を現代のデザインに昇華させ、すべての要素が響き合う作品を目指します。" },
    { letter:"I", word:"Ichi（一・市）", desc:"「一期一会」の精神で、お客様との出会いを唯一無二のものとして大切にします。すべての出会いが新たな物語の始まりです。" },
  ];

  const sns = [
    { name:"Instagram", handle:"@yoichi_design", href:"https://www.instagram.com/", Icon:IconInstagram, desc:"制作の舞台裏や完成作品を毎日更新。和の美意識を大切にしたビジュアルをお届けします。" },
    { name:"X (Twitter)", handle:"@yoichi_design", href:"https://twitter.com/", Icon:IconTwitter, desc:"デザインの考え方や業界の最新情報を発信。お気軽にリプライやDMもどうぞ。" },
    { name:"TikTok", handle:"@yoichi_design", href:"https://www.tiktok.com/", Icon:IconTikTok, desc:"デザインの制作過程やビフォーアフターを動画で公開中。ぜひチェックしてください。" },
  ];

  return (
    <div className="yh">
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Shippori+Mincho:wght@400;600;800&family=Zen+Kaku+Gothic+New:wght@400;500;700&display=swap');`}</style>
      <style>{`
        .yh{
          --washi:#f5f2ed; --paper:#fbfaf7; --sumi:#262120; --cha:#8b4f47; --shu:#c4504a; --line:#d9cfc0; --mute:#6f6660;
          --mincho:'Shippori Mincho','Hiragino Mincho ProN','Yu Mincho',serif;
          --gothic:'Zen Kaku Gothic New','Hiragino Kaku Gothic ProN','Noto Sans JP',sans-serif;
          --gutter:clamp(20px,5vw,64px);
          min-height:100vh; background:var(--washi); color:var(--sumi); font-family:var(--gothic); overflow-x:hidden;
          font-size:16px; line-height:1.9;
        }
        .yh :where(*){box-sizing:border-box;margin:0;padding:0;}
        .yh{scroll-behavior:smooth;}
        html{scroll-behavior:smooth;}
        .yh :where(button){font-family:inherit;color:inherit;cursor:pointer;background:none;border:none;text-align:left;}
        .yh :where(a){color:inherit;text-decoration:none;}
        .yh :focus-visible{outline:2px solid var(--shu);outline-offset:3px;}
        .yh ::placeholder{color:#aaa39b;}
        .yh-wrap{max-width:1180px;margin:0 auto;padding:0 var(--gutter);}
        .yh-section{padding:clamp(64px,10vw,128px) 0;position:relative;}
        .yh-section--paper{background:var(--paper);}
        .yh-grid{display:grid;grid-template-columns:minmax(0,5fr) minmax(0,7fr);gap:clamp(32px,6vw,96px);align-items:start;}
        .yh-side{position:sticky;top:112px;}
        .yh-h2{font-family:var(--mincho);font-weight:600;font-size:clamp(1.55rem,2.5vw,2.1rem);line-height:1.5;letter-spacing:0.06em;display:flex;align-items:center;gap:0.7em;}
        .yh-dot{width:0.55em;height:0.55em;border-radius:50%;background:var(--shu);flex-shrink:0;box-shadow:0 0 0 0.16em var(--washi),0 0 0 0.2em var(--shu);}
        .yh-section--paper .yh-dot{box-shadow:0 0 0 0.16em var(--paper),0 0 0 0.2em var(--shu);}
        .yh-lead{margin-top:1.4rem;color:var(--mute);font-size:0.95rem;line-height:2;max-width:26em;}
        .yh-btn{display:inline-flex;align-items:center;gap:0.6rem;padding:1rem 2.2rem;background:var(--sumi);color:#fff !important;letter-spacing:0.14em;font-size:0.92rem;transition:background .2s;}
        .yh-btn:hover{background:var(--shu);}
        .yh-link{display:inline-block;padding:0.2rem 0;border-bottom:1px solid currentColor;letter-spacing:0.12em;font-size:0.92rem;transition:color .2s;}
        .yh-link:hover{color:var(--shu);}

        /* header */
        .yh-header{position:fixed;top:0;left:0;right:0;z-index:50;background:rgba(245,242,237,0.92);backdrop-filter:blur(10px);border-bottom:1px solid var(--line);}
        .yh-nav{max-width:1180px;margin:0 auto;padding:0.8rem var(--gutter);display:flex;align-items:center;justify-content:space-between;}
        .yh-brand{display:flex;align-items:center;gap:0.7rem;}
        .yh-brand span{font-family:var(--mincho);font-weight:800;font-size:1.3rem;letter-spacing:0.22em;line-height:1;}
        .yh-links{display:flex;align-items:center;gap:1.7rem;}
        .yh-links button{font-size:0.86rem;letter-spacing:0.1em;transition:color .2s;}
        .yh-links button:hover{color:var(--shu);}
        .yh-links .yh-cta{padding:0.55rem 1.3rem;background:var(--sumi);color:#fff;}
        .yh-links .yh-cta:hover{background:var(--shu);color:#fff;}
        .yh-burger{display:none;}
        .yh-mobile{display:none;}

        /* hero */
        .yh-hero{position:relative;min-height:100vh;min-height:100svh;overflow:hidden;--T:min(74vh,52vw);}
        .yh-target{position:absolute;width:var(--T);height:var(--T);right:calc(var(--T) * -0.16);top:calc(34% - var(--T) / 2);}
        .yh-arrow{position:absolute;left:0;right:calc(var(--T) * 0.34);top:34%;height:2px;background:var(--sumi);animation:yh-shoot 1.3s cubic-bezier(.16,.8,.2,1) .25s both;}
        .yh-arrow::after{content:"";position:absolute;right:-2px;top:50%;transform:translateY(-50%);border-left:20px solid var(--sumi);border-top:7px solid transparent;border-bottom:7px solid transparent;}
        .yh-arrow svg{position:absolute;left:9%;top:50%;transform:translateY(-50%);}
        @keyframes yh-shoot{from{transform:translateX(-108%);}to{transform:translateX(0);}}
        .yh-hero-inner{position:relative;z-index:2;min-height:100vh;min-height:100svh;display:flex;flex-direction:column;justify-content:flex-end;padding:7rem var(--gutter) clamp(40px,7vh,88px);max-width:1180px;margin:0 auto;}
        .yh-kicker{font-size:0.88rem;color:var(--cha);letter-spacing:0.18em;margin-bottom:1.6rem;}
        .yh-h1{font-family:var(--mincho);font-weight:600;font-size:clamp(2rem,4.6vw,4.4rem);line-height:1.55;letter-spacing:0.1em;}
        .yh-hero-actions{display:flex;flex-wrap:wrap;align-items:center;gap:1.8rem;margin-top:2.6rem;}

        /* works */
        .yh-rows{border-top:1px solid var(--sumi);}
        .yh-row{display:flex;align-items:center;justify-content:space-between;width:100%;padding:1.15rem 0.2rem;border-bottom:1px solid var(--line);font-family:var(--mincho);font-weight:600;font-size:clamp(1.05rem,1.8vw,1.3rem);letter-spacing:0.1em;transition:padding .25s,color .2s,background .2s;}
        .yh-row svg{color:var(--shu);opacity:0;transform:translateX(-8px);transition:opacity .25s,transform .25s;}
        .yh-row:hover,.yh-row:focus-visible{padding-left:1rem;color:var(--shu);}
        .yh-row:hover svg,.yh-row:focus-visible svg{opacity:1;transform:none;}
        .yh-other{margin-top:2rem;display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:1rem;}
        .yh-other p{font-family:var(--mincho);font-size:1.05rem;letter-spacing:0.08em;}
        .yh-other small{display:block;color:var(--mute);font-family:var(--gothic);font-size:0.85rem;letter-spacing:0.04em;}

        /* samples */
        .yh-samples-img{display:block;width:100%;cursor:pointer;border:1px solid var(--line);background:#fff;transition:transform .35s,box-shadow .35s;}
        .yh-samples-img:hover{transform:translateY(-4px);box-shadow:0 18px 44px rgba(38,33,32,0.14);}
        .yh-samples-img img{display:block;width:100%;height:auto;}

        /* brands */
        .yh-brand-card{display:block;width:100%;padding:clamp(32px,5vw,64px) clamp(20px,4vw,48px);background:#fff;border:1px solid var(--sumi);text-align:center;transition:transform .3s,box-shadow .3s;}
        .yh-brand-card:hover{transform:translateY(-4px);box-shadow:0 18px 44px rgba(38,33,32,0.14);}
        .yh-brand-card img{display:block;width:min(300px,80%);height:auto;margin:0 auto 1.4rem;}
        .yh-brand-card .tag{font-family:'Helvetica Neue',Arial,sans-serif;color:#555;letter-spacing:0.12em;font-weight:300;margin-bottom:1.6rem;}
        .yh-brand-card .go{font-size:0.85rem;letter-spacing:0.16em;border-bottom:1px solid var(--sumi);padding-bottom:2px;}

        /* flow */
        .yh-steps{list-style:none;position:relative;}
        .yh-steps::before{content:"";position:absolute;left:19px;top:20px;bottom:20px;width:1px;background:var(--line);}
        .yh-step{position:relative;padding:0 0 2.8rem 4.2rem;}
        .yh-step:last-child{padding-bottom:0;}
        .yh-step-no{position:absolute;left:0;top:0;width:40px;height:40px;border-radius:50%;background:var(--paper);border:1px solid var(--sumi);display:flex;align-items:center;justify-content:center;font-family:var(--mincho);font-weight:600;font-size:0.95rem;}
        .yh-step--end .yh-step-no{background:var(--shu);border-color:var(--shu);color:#fff;}
        .yh-step h3{font-family:var(--mincho);font-weight:600;font-size:1.25rem;letter-spacing:0.08em;line-height:1.6;padding-top:0.3rem;}
        .yh-step p{color:var(--mute);font-size:0.92rem;margin-top:0.2rem;}
        .yh-branch{display:grid;grid-template-columns:1fr 1fr;gap:1rem;margin-top:1.2rem;}
        .yh-branch div{border:1px solid var(--line);background:#fff;padding:1rem 1.1rem;}
        .yh-branch b{display:block;font-weight:700;font-size:0.82rem;color:var(--cha);letter-spacing:0.08em;margin-bottom:0.4rem;}
        .yh-branch span{display:block;font-size:0.85rem;line-height:1.9;}
        .yh-note{margin-top:2.4rem;color:var(--shu);font-size:0.85rem;}

        /* about */
        .yh-creed{font-family:var(--mincho);font-weight:600;font-size:clamp(1.7rem,3.6vw,2.8rem);line-height:1.7;letter-spacing:0.1em;}
        .yh-creed span{display:block;}
        .yh-greet{display:grid;grid-template-columns:minmax(0,7fr) minmax(0,5fr);gap:clamp(32px,6vw,96px);margin-top:clamp(48px,7vw,88px);align-items:start;}
        .yh-greet p{margin-bottom:1.1rem;color:#4b433f;font-size:0.95rem;line-height:2.1;max-width:34em;}
        .yh-dl{border-top:1px solid var(--sumi);}
        .yh-dl div{display:flex;gap:1.5rem;padding:0.95rem 0;border-bottom:1px solid var(--line);}
        .yh-dl dt{min-width:5.5em;color:var(--mute);font-size:0.88rem;}
        .yh-dl dd{font-family:var(--mincho);font-weight:600;letter-spacing:0.06em;}
        .yh-logo-block{margin-top:2rem;background:var(--sumi);aspect-ratio:1.6;display:flex;align-items:center;justify-content:center;position:relative;overflow:hidden;}
        .yh-logo-block .yh-ya{position:absolute;inset:0;color:var(--shu);opacity:0.28;}
        .yh-logo-block .yh-badge{position:relative;background:var(--washi);padding:1.2rem;border-radius:50%;}

        /* origin */
        .yh-origin{background:var(--sumi);color:var(--washi);overflow:hidden;}
        .yh-origin .yh-dot{box-shadow:0 0 0 0.16em var(--sumi),0 0 0 0.2em var(--shu);}
        .yh-origin-ring{position:absolute;right:-12vw;top:-8vw;width:min(70vw,720px);aspect-ratio:1;color:rgba(245,242,237,0.12);pointer-events:none;}
        .yh-origin-head{position:relative;max-width:42rem;}
        .yh-origin-head h3{font-family:var(--mincho);font-weight:600;font-size:clamp(1.4rem,2.6vw,2rem);letter-spacing:0.08em;line-height:1.7;margin:1.8rem 0 1.6rem;}
        .yh-origin-head p{color:#d8d0c6;line-height:2.2;font-size:0.97rem;}
        .yh-origin-head strong{font-weight:700;color:#fff;}
        .yh-dist{display:flex;align-items:baseline;gap:1.4rem;margin:2.2rem 0;padding:1.4rem 0;border-top:1px solid rgba(245,242,237,0.25);border-bottom:1px solid rgba(245,242,237,0.25);}
        .yh-dist b{font-family:var(--mincho);font-weight:800;font-size:clamp(2.4rem,6vw,4rem);line-height:1;color:var(--shu);white-space:nowrap;}
        .yh-dist span{color:#d8d0c6;font-size:0.92rem;line-height:2;}
        .yh-letters{position:relative;margin-top:clamp(56px,8vw,104px);display:grid;grid-template-columns:1fr 1fr;column-gap:clamp(32px,6vw,96px);}
        .yh-letter{display:grid;grid-template-columns:3.4rem 1fr;gap:1.2rem;padding:1.6rem 0;border-top:1px solid rgba(245,242,237,0.25);}
        .yh-letter b{font-family:var(--mincho);font-weight:800;font-size:2.6rem;line-height:1;color:var(--shu);}
        .yh-letter h4{font-family:var(--mincho);font-weight:600;font-size:1.05rem;letter-spacing:0.08em;margin-bottom:0.4rem;}
        .yh-letter p{color:#c9c0b5;font-size:0.88rem;line-height:2;}
        .yh-oath{position:relative;margin-top:clamp(48px,7vw,88px);font-family:var(--mincho);font-weight:600;font-size:clamp(1.15rem,2.4vw,1.7rem);line-height:2;letter-spacing:0.08em;max-width:30em;}

        /* sns */
        .yh-sns a{display:grid;grid-template-columns:3rem minmax(0,1fr) auto;gap:1.2rem;align-items:center;padding:1.5rem 0.2rem;border-bottom:1px solid var(--line);transition:padding .25s,color .2s;}
        .yh-sns{border-top:1px solid var(--sumi);}
        .yh-sns a:hover{padding-left:1rem;color:var(--shu);}
        .yh-sns h3{font-family:var(--mincho);font-weight:600;font-size:1.15rem;letter-spacing:0.08em;}
        .yh-sns small{display:block;color:var(--mute);font-size:0.78rem;letter-spacing:0.06em;}
        .yh-sns p{color:#555;font-size:0.86rem;line-height:1.9;margin-top:0.3rem;}
        .yh-sns .ext{font-size:0.8rem;letter-spacing:0.1em;display:flex;align-items:center;gap:0.35rem;white-space:nowrap;}

        /* contact */
        .yh-contact-item{padding:1.2rem 0;border-bottom:1px solid var(--line);}
        .yh-contact-item:first-of-type{border-top:1px solid var(--sumi);}
        .yh-contact-item small{display:block;color:var(--mute);font-size:0.8rem;letter-spacing:0.08em;}
        .yh-contact-item a{font-family:var(--mincho);font-weight:600;font-size:1.2rem;letter-spacing:0.06em;word-break:break-all;}
        .yh-line{display:flex;align-items:center;gap:1rem;margin-top:1.6rem;padding:1.2rem 1.4rem;background:#06C755;color:#fff !important;transition:filter .2s;}
        .yh-line:hover{filter:brightness(0.95);}
        .yh-line b{display:block;letter-spacing:0.1em;}
        .yh-line span{font-size:0.82rem;opacity:0.92;}
        .yh-form{display:flex;flex-direction:column;gap:1.6rem;}
        .yh-field label{display:block;font-size:0.85rem;letter-spacing:0.08em;color:var(--mute);margin-bottom:0.3rem;}
        .yh-field input,.yh-field textarea{width:100%;padding:0.6rem 0.1rem;border:none;border-bottom:1px solid var(--sumi);background:transparent;font-family:inherit;font-size:1rem;color:var(--sumi);border-radius:0;outline:none;transition:border-color .2s;}
        .yh-field input:focus,.yh-field textarea:focus{border-bottom-color:var(--shu);box-shadow:0 1px 0 var(--shu);}
        .yh-field textarea{resize:vertical;min-height:7.5rem;}
        .yh-msg{padding:0.8rem 1rem;font-size:0.9rem;}
        .yh-msg--ok{background:#f0fdf4;border:1px solid #bbf7d0;color:#166534;}
        .yh-msg--ng{background:#fef2f2;border:1px solid #fecaca;color:#991b1b;}
        .yh-submit{align-self:flex-start;}
        .yh-submit:disabled{opacity:0.6;cursor:not-allowed;}

        /* footer */
        .yh-footer{background:var(--sumi);color:var(--washi);}
        .yh-footer-inner{max-width:1180px;margin:0 auto;padding:3rem var(--gutter);display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:1.5rem;}
        .yh-footer .yh-brand span{font-size:1.4rem;}
        .yh-footer-links{display:flex;flex-wrap:wrap;gap:0.4rem 1.4rem;}
        .yh-footer-links button{font-size:0.8rem;letter-spacing:0.1em;color:#b9afa4;}
        .yh-footer-links button:hover{color:#fff;}
        .yh-copy{width:100%;color:#8c8279;font-size:0.76rem;letter-spacing:0.12em;border-top:1px solid rgba(245,242,237,0.15);padding-top:1.4rem;}

        @media (max-width:900px){
          .yh-links{display:none;}
          .yh-burger{display:flex;align-items:center;}
          .yh-mobile{display:block;background:var(--washi);border-top:1px solid var(--line);padding:0.5rem var(--gutter) 1rem;}
          .yh-mobile button{display:block;width:100%;padding:0.9rem 0;border-bottom:1px solid var(--line);font-size:1rem;letter-spacing:0.1em;}
          .yh-grid,.yh-greet{grid-template-columns:1fr;}
          .yh-side{position:static;}
          .yh-letters{grid-template-columns:1fr;}
        }
        @media (max-width:768px){
          .about-grid{grid-template-columns:1fr !important;gap:2rem !important;}
            .philosophy-row{flex-direction:column !important;align-items:flex-start !important;gap:0.2rem !important;}
          .philosophy-sep{display:none !important;}
        }
        @media (max-width:720px){
          .yh-hero{--T:80vw;}
          .yh-target{top:calc(25% - var(--T) / 2);right:calc(var(--T) * -0.22);}
          .yh-arrow{top:25%;right:calc(var(--T) * 0.28);}
          .yh-hero-inner{padding-top:6rem;}
          .yh-branch{grid-template-columns:1fr;}
          .yh-dist{flex-direction:column;gap:0.6rem;}
          .yh-sns a{grid-template-columns:2.4rem minmax(0,1fr);}
          .yh-sns .ext{display:none;}
        }
        @media (prefers-reduced-motion:reduce){
          .yh-arrow{animation:none;}
          .yh-row,.yh-row svg,.yh-samples-img,.yh-brand-card,.yh-sns a{transition:none;}
          html,.yh{scroll-behavior:auto;}
        }
      `}</style>

      <header className="yh-header">
        <nav className="yh-nav" aria-label="メインメニュー">
          <button className="yh-brand" onClick={() => scrollTo("hero")} aria-label="トップへ戻る">
            <YoichiMark size={40} />
            <span>YOICHI</span>
          </button>
          <div className="yh-links">
            {navLinks.map(l => (<button key={l.id} onClick={() => scrollTo(l.id)}>{l.label}</button>))}
            <button className="yh-cta" onClick={() => scrollTo("contact")}>お問い合わせ</button>
          </div>
          <button className="yh-burger" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? "メニューを閉じる" : "メニューを開く"} aria-expanded={menuOpen}>
            {menuOpen ? <IconX /> : <IconMenu />}
          </button>
        </nav>
        {menuOpen && (
          <div className="yh-mobile">
            {[...navLinks, { label:"お問い合わせ", id:"contact" }].map(l => (
              <button key={l.id} onClick={() => scrollTo(l.id)}>{l.label}</button>
            ))}
          </div>
        )}
      </header>

      {/* ── ヒーロー：的と一本の矢 ── */}
      <section id="hero" className="yh-hero">
        <div className="yh-target"><TargetRings /></div>
        <div className="yh-arrow" aria-hidden="true">
          <svg width="46" height="26" viewBox="0 0 46 26" fill="none" stroke="#262120" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M2 2 L12 13 L2 24" /><path d="M14 2 L24 13 L14 24" /><path d="M26 2 L36 13 L26 24" />
          </svg>
        </div>
        <div className="yh-hero-inner">
          <p className="yh-kicker">栃木発のデザイン会社　YOICHI</p>
          <h1 className="yh-h1">
            想いをカタチに<br />笑顔をそばに<br />繋がりを大切に
          </h1>
          <div className="yh-hero-actions">
            <button className="yh-btn" onClick={() => scrollTo("contact")}>ご相談はこちら</button>
            <button className="yh-link" onClick={() => scrollTo("works")}>イメージサンプルを見る</button>
          </div>
        </div>
      </section>

      <div style={{ color:"var(--shu)", opacity:0.85 }}><YagasuriBand /></div>

      {/* ── YOICHIのお仕事 ── */}
      <section id="works_detail" className="yh-section">
        <div className="yh-wrap yh-grid">
          <div className="yh-side">
            <HomeHeading>YOICHIのお仕事</HomeHeading>
            <p className="yh-lead">デザインのお仕事をメインにしています。気になる項目を選ぶと、制作サンプルをご覧いただけます。</p>
          </div>
          <div>
            <div className="yh-rows">
              {works.map(w => (
                <button key={w.link} className="yh-row" onClick={() => goToPage(w.link)}>
                  <span>{w.label}</span>
                  <IconArrowRight />
                </button>
              ))}
            </div>
            <div className="yh-other">
              <p>その他、気軽にご相談ください<small>上記以外のご要望もお気軽にどうぞ</small></p>
              <button className="yh-link" onClick={() => scrollTo("contact")}>お問い合わせはこちら</button>
            </div>
          </div>
        </div>
      </section>

      {/* ── イメージサンプル ── */}
      <section id="works" className="yh-section yh-section--paper">
        <div className="yh-wrap">
          <HomeHeading>イメージサンプル</HomeHeading>
          <p className="yh-lead" style={{ maxWidth:"none", marginBottom:"2.4rem" }}>YOICHIが制作したデザインのイメージサンプルをご覧ください。</p>
          <button className="yh-samples-img" onClick={() => goToPage("samples")} aria-label="すべてのサンプルを見る">
            <img src={samplesHeroImg} alt="YOICHI デザインサンプル" />
          </button>
          <div style={{ marginTop:"2rem" }}>
            <button className="yh-link" onClick={() => goToPage("samples")}>すべてのサンプルを見る</button>
          </div>
        </div>
      </section>

      {/* ── 自社ブランド ── */}
      <section id="brands" className="yh-section">
        <div className="yh-wrap yh-grid">
          <div className="yh-side">
            <HomeHeading>自社ブランド</HomeHeading>
            <p className="yh-lead">YOICHIが展開するオリジナルブランドをご紹介します。</p>
          </div>
          <button className="yh-brand-card" onClick={() => goToPage("focus")}>
            <img src={focusLogo} alt="FOCUS" />
            <p className="tag">Focus point on life…</p>
            <span className="go">ブランドを見る</span>
          </button>
        </div>
      </section>

      {/* ── ご納品までの流れ ── */}
      <section id="flow" className="yh-section yh-section--paper">
        <div className="yh-wrap yh-grid">
          <div className="yh-side">
            <HomeHeading>ご納品までの流れ</HomeHeading>
            <p className="yh-lead">ご相談から納品まで、5つのステップで進めます。</p>
          </div>
          <div>
            <ol className="yh-steps">
              <li className="yh-step">
                <span className="yh-step-no">1</span>
                <h3>ヒアリング</h3>
                <p>ご要望・イメージをお伺いします</p>
              </li>
              <li className="yh-step">
                <span className="yh-step-no">2</span>
                <h3>イメージ確認・ラフ案の作成</h3>
                <p>ヒアリングをもとにデザインの方向性を決定します</p>
                <div className="yh-branch">
                  <div><b>お客様のイメージがある場合</b><span>イメージの合致<br />↓<br />注文内容の確認</span></div>
                  <div><b>こちらからご提案する場合</b><span>ご提案<br />↓<br />イメージの合致<br />↓<br />注文内容の確認</span></div>
                </div>
              </li>
              <li className="yh-step">
                <span className="yh-step-no">3</span>
                <h3>修正対応（最大4回まで）</h3>
                <p>デザインの微調整を行います</p>
              </li>
              <li className="yh-step">
                <span className="yh-step-no">4</span>
                <h3>最終デザイン確認</h3>
                <p>完成デザインを最終確認いただきます</p>
              </li>
              <li className="yh-step yh-step--end">
                <span className="yh-step-no">5</span>
                <h3>ご納品</h3>
                <p>完成データをお届けいたします</p>
              </li>
            </ol>
            <p className="yh-note">※製品や仕様によって流れが変わる場合がございます。</p>
          </div>
        </div>
      </section>

      {/* ── 会社概要（元のデザイン） ── */}
      <section id="about" style={{ padding:"5rem 1.5rem", background:C.white, position:"relative", overflow:"hidden", fontFamily:"'Georgia','Hiragino Mincho ProN',serif", lineHeight:"normal" }}>
        <div style={{ position:"absolute", top:0, left:0, right:0, height:1, background:`linear-gradient(to right,transparent,${C.accent}55,transparent)` }} />
        <div style={{ maxWidth:1200, margin:"0 auto", position:"relative" }}>
          <SectionHeading en="ABOUT US" ja="会社概要" />
          <div className="about-grid" style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(300px,1fr))", gap:"4rem", alignItems:"center" }}>
            <div style={{ borderLeft:`4px solid ${C.accent}`, paddingLeft:"1.5rem" }}>
              <p style={{ fontSize:"0.75rem", color:C.accent, letterSpacing:"0.3em", marginBottom:"0.8rem" }}>MANAGEMENT PHILOSOPHY</p>
              <h3 style={{ fontSize:"1.8rem", fontFamily:"serif", fontWeight:400, lineHeight:1.8, marginBottom:"1.5rem" }}>経営理念</h3>
              <div className="philosophy-row" style={{ display:"flex", flexDirection:"row", gap:"0.5rem", marginBottom:"1.5rem", alignItems:"center" }}>
                <p style={{ fontSize:"clamp(0.95rem,2vw,1.25rem)", fontFamily:"serif", fontWeight:400, lineHeight:1.8, color:C.dark, whiteSpace:"nowrap", margin:0 }}>発想で豊かに</p>
                <span className="philosophy-sep" style={{ color:C.accent, fontSize:"0.8rem" }}>／</span>
                <p style={{ fontSize:"clamp(0.95rem,2vw,1.25rem)", fontFamily:"serif", fontWeight:400, lineHeight:1.8, color:C.dark, whiteSpace:"nowrap", margin:0 }}>創造でユニークに</p>
                <span className="philosophy-sep" style={{ color:C.accent, fontSize:"0.8rem" }}>／</span>
                <p style={{ fontSize:"clamp(0.95rem,2vw,1.25rem)", fontFamily:"serif", fontWeight:400, lineHeight:1.8, color:C.dark, whiteSpace:"nowrap", margin:0 }}>ひらめきで笑顔に</p>
              </div>
              <h4 style={{ fontSize:"1.2rem", fontFamily:"serif", fontWeight:400, color:C.dark, letterSpacing:"0.15em", marginBottom:"1rem" }}>ご挨拶</h4>
              {["私たちYOICHIは、「想いをカタチに」をモットーに、お客様一人ひとりの想いをデザインとしてカタチにしています。","私たちの提供する商品・サービスは、その一つ一つに心を込め、お客様と共に作り上げる一つの芸術作品です。","お客様との出会いは私たちにとって新たな物語の始まりです。それぞれのお客様のビジョンを理解し、共に創造する過程は私たちにとって大きなやりがいであり、誇りです。","お客様の夢を実現するために、私たちは常に全力を尽くします。共に歩む中で築かれる信頼と絆は、私たちの大切な財産です。","これからも、お客様と共に新しい価値観を生み出し、感動を共有できる瞬間を創り続けていきます。"].map((p,i) => (<p key={i} style={{ color:"#555", lineHeight:2, marginBottom:"1rem", fontSize:"0.95rem" }}>{p}</p>))}
              <div style={{ background:C.bg, padding:"1.5rem", borderLeft:`2px solid ${C.accent}`, marginTop:"1.5rem" }}>
                {[["会社名","YOICHI"],["設立","2026年"],["代表","横山 真一郎"],["副代表","住谷 永人"]].map(([k,v]) => (<div key={k} style={{ display:"flex", gap:"1rem", marginBottom:"0.6rem", fontSize:"0.95rem" }}><span style={{ color:C.textMuted, minWidth:72 }}>{k}</span><span style={{ fontFamily:"'Helvetica Neue',Arial,sans-serif", letterSpacing:"0.03em" }}>{v}</span></div>))}
              </div>
            </div>
            <div className="about-logo-box" style={{ width:"100%", maxWidth:400, margin:"0 auto" }}>
              <div style={{ position:"relative" }}>
                <div style={{ position:"absolute", top:-16, left:-16, right:16, bottom:16, border:`2px solid ${C.accent}`, opacity:0.25, pointerEvents:"none" }} />
                <div style={{ position:"relative", background:C.primary, aspectRatio:"1", overflow:"hidden" }}>
                  <img src={representativePhoto} alt="代表 横山 真一郎" style={{ width:"100%", height:"100%", objectFit:"cover", objectPosition:"center 20%", display:"block" }} />
                </div>
              </div>
              <p style={{ marginTop:"1.2rem", textAlign:"right", fontSize:"0.85rem", color:C.textMuted, letterSpacing:"0.12em" }}>代表　横山 真一郎</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── YOICHIの由来 ── */}
      <section id="origin" className="yh-section yh-origin">
        <div className="yh-origin-ring"><TargetRings outline /></div>
        <div className="yh-wrap" style={{ position:"relative" }}>
          <HomeHeading>YOICHIの由来</HomeHeading>
          <div className="yh-origin-head">
            <h3>那須与一と、的を外さない精神</h3>
            <p>栃木県に、<strong>那須与一</strong>という弓の名手がいました。遠い距離（75m〜77mと言われています）の船の上にある<strong>扇の的</strong>を、見事に打ち抜いたという逸話があります。</p>
            <div className="yh-dist">
              <b>75〜77<small style={{ fontSize:"1rem", marginLeft:"0.3rem" }}>m</small></b>
              <span>揺れる船上の小さな扇を、この距離から一射で射抜いた。その精神は、私たちが目指すべき姿そのものです。</span>
            </div>
            <p>弊社は<strong>栃木県発祥の企業</strong>であり、与一のように的を外さない——お客様一人ひとりに<strong>的を得た商品・サービス</strong>をお届けしようという強い想いから、社名を <strong>YOICHI</strong> としました。</p>
          </div>
          <div className="yh-letters">
            {originItems.map((item, i) => (
              <div key={i} className="yh-letter">
                <b>{item.letter}</b>
                <div><h4>{item.word}</h4><p>{item.desc}</p></div>
              </div>
            ))}
          </div>
          <p className="yh-oath">「YOICHI」とは、夢・想い・縁・創造・調和・一期一会。六つの言葉が織りなす、私たちの誓いです。</p>
        </div>
      </section>

      {/* ── SNS ── */}
      <section id="sns" className="yh-section">
        <div className="yh-wrap yh-grid">
          <div className="yh-side">
            <HomeHeading>SNS</HomeHeading>
            <p className="yh-lead">日々の制作風景やデザインの想いを発信しています。ぜひフォローしてください。</p>
          </div>
          <div className="yh-sns">
            {sns.map(s => (
              <a key={s.name} href={s.href} target="_blank" rel="noopener noreferrer">
                <s.Icon size={26} />
                <div>
                  <h3>{s.name} <small style={{ display:"inline", marginLeft:"0.5rem" }}>{s.handle}</small></h3>
                  <p>{s.desc}</p>
                </div>
                <span className="ext">フォローする <IconExternalLink size={13} /></span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── お問い合わせ ── */}
      <section id="contact" className="yh-section yh-section--paper">
        <div className="yh-wrap yh-grid">
          <div>
            <HomeHeading>お問い合わせ</HomeHeading>
            <p className="yh-lead">ご相談、お見積もりなど、お気軽にお問い合わせくださいませ。</p>
            <div style={{ marginTop:"2.4rem" }}>
              <div className="yh-contact-item"><small>メールアドレス</small><a href="mailto:yoichi08107@gmail.com">yoichi08107@gmail.com</a></div>
              <div className="yh-contact-item"><small>代表携帯</small><a href="tel:080-1360-7951">080-1360-7951</a></div>
            </div>
            <a className="yh-line" href="https://line.me/" target="_blank" rel="noopener noreferrer">
              <IconLine color="#fff" size={26} />
              <div><b>公式LINE</b><span>友だち追加で、お気軽にご相談いただけます</span></div>
            </a>
          </div>
          <form className="yh-form" onSubmit={e => { e.preventDefault(); handleFormSubmit(); }} noValidate>
            {[
              { key:"name", label:"お名前（必須）", type:"text", ph:"山田 太郎", ac:"name" },
              { key:"furigana", label:"フリガナ", type:"text", ph:"ヤマダ タロウ", ac:"off" },
              { key:"company", label:"会社名", type:"text", ph:"株式会社〇〇", ac:"organization" },
              { key:"email", label:"メールアドレス（必須）", type:"email", ph:"example@email.com", ac:"email" },
            ].map(f => (
              <div className="yh-field" key={f.key}>
                <label htmlFor={`yh-${f.key}`}>{f.label}</label>
                <input id={`yh-${f.key}`} type={f.type} placeholder={f.ph} autoComplete={f.ac} value={formData[f.key]} onChange={e => handleFormChange(f.key, e.target.value)} />
              </div>
            ))}
            <div className="yh-field">
              <label htmlFor="yh-message">お問い合わせ内容（必須）</label>
              <textarea id="yh-message" rows={5} placeholder="ご相談内容をご記入ください" value={formData.message} onChange={e => handleFormChange("message", e.target.value)} />
            </div>
            {formStatus === "sent" && <p className="yh-msg yh-msg--ok" role="status">送信が完了しました。お問い合わせありがとうございます。</p>}
            {formStatus === "error" && <p className="yh-msg yh-msg--ng" role="alert">送信に失敗しました。時間をおいて再度お試しください。</p>}
            <button type="submit" className="yh-btn yh-submit" disabled={formStatus === "sending"}>{formStatus === "sending" ? "送信中..." : "送信する"}</button>
          </form>
        </div>
      </section>

      <footer className="yh-footer">
        <div className="yh-footer-inner">
          <div className="yh-brand"><YoichiMark size={44} /><span>YOICHI</span></div>
          <div className="yh-footer-links">
            {[...navLinks, { label:"お問い合わせ", id:"contact" }].map(l => (
              <button key={l.id} onClick={() => scrollTo(l.id)}>{l.label}</button>
            ))}
          </div>
          <p className="yh-copy">想いをカタチに、笑顔をそばに、繋がりを大切に　© 令和八年 YOICHI</p>
        </div>
      </footer>
    </div>
  );
}
