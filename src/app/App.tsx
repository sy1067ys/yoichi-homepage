import { useState } from "react";
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

const PORTFOLIO_ITEMS = [
  { id:1, title:"老舗和菓子店のブランド刷新", category:"意匠", tag:"Branding", grad:"linear-gradient(135deg,#8b4f47,#6d3d37)", desc:"創業100年の和菓子店のロゴ・パッケージを全面リニューアル。伝統を守りながら現代的な感覚を取り入れたデザインに。" },
  { id:2, title:"旅館予約サイトの体験設計", category:"図案", tag:"UI/UX", grad:"linear-gradient(135deg,#5e8c6a,#4a6e56)", desc:"老舗旅館のオンライン予約システムをゼロから設計。ユーザー離脱率を40%改善。" },
  { id:3, title:"日本酒メーカーのVI開発", category:"意匠", tag:"Branding", grad:"linear-gradient(135deg,#c4504a,#9d3f36)", desc:"蔵元の世界観をビジュアルに落とし込んだVI。海外展開を見据えたバイリンガル対応。" },
  { id:4, title:"伝統工芸ECの利用体験改善", category:"図案", tag:"UI/UX", grad:"linear-gradient(135deg,#6b5d4f,#554a3f)", desc:"職人の技を伝えるECサイトのUX改善。購入率が2.3倍に向上。" },
  { id:5, title:"茶道具メーカーのカタログ", category:"装飾", tag:"Print", grad:"linear-gradient(135deg,#4a6e6b,#3a5856)", desc:"和の美意識を活かしたプロダクトカタログ。余白と素材感を大切にしたデザイン。" },
  { id:6, title:"神社の御朱印帳デザイン", category:"装飾", tag:"Print", grad:"linear-gradient(135deg,#7a5c3a,#5e4528)", desc:"地域の神社向けに特別デザインした御朱印帳。伝統文様を現代的にアレンジ。" },
];
const FILTERS = ["すべて","意匠","図案","装飾"];

function PortfolioPage({ onBack }) {
  const [active, setActive] = useState("すべて");
  const [hovered, setHovered] = useState(null);
  const filtered = active === "すべて" ? PORTFOLIO_ITEMS : PORTFOLIO_ITEMS.filter(p => p.category === active);
  return (
    <div className="page-animate" style={{ minHeight:"100vh", background:C.bg, fontFamily:"'Georgia','Hiragino Mincho ProN',serif", color:C.dark }}>
      <header style={{ position:"fixed", top:0, left:0, right:0, zIndex:50, background:`${C.bg}f5`, backdropFilter:"blur(8px)", borderBottom:`2px solid ${C.primary}33` }}>
        <nav style={{ maxWidth:1200, margin:"0 auto", padding:"1rem 1.5rem", display:"flex", alignItems:"center", gap:"1rem" }}>
          <button onClick={onBack} style={{ background:"none", border:"none", cursor:"pointer", display:"flex", alignItems:"center", gap:"0.5rem", color:C.primary, fontSize:"0.9rem", letterSpacing:"0.1em" }}><IconArrowLeft /> ホームに戻る</button>
          <div style={{ width:1, height:20, background:C.border }} />
          <div style={{ display:"flex", alignItems:"center", gap:"0.6rem" }}><YoichiMark size={36} /><span style={{ fontSize:"1.2rem", fontWeight:700, letterSpacing:"0.2em" }}>YOICHI<span style={{ color:C.accent }}>.</span></span></div>
          <span style={{ color:C.textMuted, fontSize:"0.85rem", letterSpacing:"0.15em" }}>/ PORTFOLIO</span>
        </nav>
      </header>
      <div style={{ padding:"7rem 1.5rem 5rem", maxWidth:1200, margin:"0 auto" }}>
        <SectionHeading en="PORTFOLIO" ja="制作実績" />
        <div style={{ display:"flex", justifyContent:"center", gap:"0.75rem", marginBottom:"3rem", flexWrap:"wrap" }}>
          {FILTERS.map(f => (<button key={f} onClick={() => setActive(f)} style={{ padding:"0.5rem 1.4rem", border:`2px solid ${active===f?C.accent:C.border}`, background:active===f?C.accent:"transparent", color:active===f?"#fff":C.dark, cursor:"pointer", fontSize:"0.85rem", letterSpacing:"0.12em", transition:"all 0.2s", fontFamily:"serif" }}>{f}</button>))}
        </div>
        <div className="portfolio-grid" style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(300px,1fr))", gap:"2rem" }}>
          {filtered.map(p => (
            <div key={p.id} onMouseEnter={() => setHovered(p.id)} onMouseLeave={() => setHovered(null)} style={{ background:C.white, border:`2px solid ${hovered===p.id?C.accent:C.border}`, transition:"all 0.3s", transform:hovered===p.id?"translateY(-4px)":"none", boxShadow:hovered===p.id?"0 12px 32px rgba(0,0,0,0.12)":"none", overflow:"hidden" }}>
              <div style={{ height:200, background:p.grad, position:"relative", overflow:"hidden" }}>
                <div style={{ position:"absolute", top:0, right:0, width:160, height:160, color:"#fff", opacity:0.1 }}><YagasuriBg /></div>
                <div style={{ position:"absolute", top:16, right:16, width:40, height:40, border:"1px solid rgba(255,255,255,0.3)", transform:"rotate(45deg)" }} />
                <div style={{ position:"absolute", bottom:16, left:16 }}><span style={{ background:"rgba(255,255,255,0.2)", color:"#fff", fontSize:"0.72rem", padding:"0.2rem 0.6rem", letterSpacing:"0.12em" }}>{p.tag}</span></div>
              </div>
              <div style={{ padding:"1.5rem" }}>
                <div style={{ fontSize:"0.72rem", color:C.textMuted, letterSpacing:"0.2em", marginBottom:"0.5rem" }}>{p.category}</div>
                <h3 style={{ fontSize:"1.1rem", fontFamily:"serif", fontWeight:400, marginBottom:"0.8rem", lineHeight:1.5 }}>{p.title}</h3>
                <p style={{ fontSize:"0.88rem", color:C.textMuted, lineHeight:1.8 }}>{p.desc}</p>
                <div style={{ marginTop:"1rem", display:"flex", alignItems:"center", gap:"0.4rem", color:C.accent, fontSize:"0.82rem", letterSpacing:"0.1em", opacity:hovered===p.id?1:0, transition:"opacity 0.3s" }}><IconExternalLink size={14} /> 詳細を見る</div>
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
        {/* ヒーロー：実写写真 */}
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

        {/* 制作実績 */}
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

        {/* デザインサンプル一覧（コラージュ画像） */}
        <div style={{ background:C.bg, padding:"4rem 1.5rem" }}>
          <div style={{ maxWidth:1100, margin:"0 auto" }}>
            <SectionHeading en="DESIGN SAMPLES" ja="雑貨デザインサンプル" />
            <p style={{ textAlign:"center", color:"#555", marginBottom:"3rem", lineHeight:1.9 }}>キーホルダー以外にも、さまざまな雑貨のデザインに対応しています。<br />下記はYOICHIが制作したデザインサンプルの一覧です。</p>

            {/* コラージュ画像 */}
            <div className="anim-item" style={{ background:C.white, border:`1px solid ${C.border}`, overflow:"hidden", marginBottom:"3rem" }}>
              <img src={goodsCollage} alt="YOICHIの雑貨デザインサンプル一覧" style={{ width:"100%", display:"block" }} />
            </div>

            {/* 各アイテム説明 */}
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

        {/* 対応可能な雑貨一覧 */}
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

        {/* CTA */}
        <div style={{ background:C.primary, padding:"3rem 1.5rem", textAlign:"center", position:"relative", overflow:"hidden" }}>
          <div style={{ position:"absolute", inset:0, color:"#fff", opacity:0.06 }}><YagasuriBg /></div>
          <div style={{ position:"relative" }}>
            <p style={{ color:"#fff", fontSize:"1.2rem", fontFamily:"serif", marginBottom:"0.5rem" }}>オリジナル雑貨、作りませんか？</p>
            <p style={{ color:"rgba(255,255,255,0.7)", fontSize:"0.88rem", marginBottom:"1.5rem" }}>ノベルティ・販促品・記念品など、お気軽にご相談ください</p>
            <button onClick={() => { onBack(); setTimeout(() => document.getElementById("contact")?.scrollIntoView({ behavior:"smooth" }), 100); }} style={{ padding:"1rem 2.5rem", background:"#fff", color:C.primary, border:"none", cursor:"pointer", fontSize:"1rem", letterSpacing:"0.12em", fontFamily:"inherit", fontWeight:700 }}>雑貨デザインのご相談はこちら →</button>
          </div>
        </div>

        <footer style={{ background:C.dark, padding:"2rem 1.5rem", textAlign:"center" }}>
          <p style={{ fontSize:"0.8rem", color:"#9ca3af", letterSpacing:"0.12em" }}>© 令和八年 株式会社YOICHI</p>
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
        <p style={{ fontSize:"0.8rem", color:"#9ca3af", letterSpacing:"0.12em" }}>© 令和八年 株式会社YOICHI</p>
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
        <p style={{ fontSize:"0.8rem", color:"#9ca3af", letterSpacing:"0.12em" }}>© 令和八年 株式会社YOICHI</p>
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
        <p style={{ fontSize:"0.8rem", color:"#9ca3af", letterSpacing:"0.12em" }}>© 令和八年 株式会社YOICHI</p>
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
        <p style={{ fontSize:"0.8rem", color:"#9ca3af", letterSpacing:"0.12em" }}>© 令和八年 株式会社YOICHI</p>
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
        <p style={{ fontSize:"0.8rem", color:"#9ca3af", letterSpacing:"0.12em" }}>© 令和八年 株式会社YOICHI</p>
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
        <p style={{ fontSize:"0.8rem", color:"#9ca3af", letterSpacing:"0.12em" }}>© 令和八年 株式会社YOICHI</p>
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
        <p style={{ fontSize:"0.8rem", color:"#9ca3af", letterSpacing:"0.12em" }}>© 令和八年 株式会社YOICHI</p>
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
        {/* 広告画像をそのまま大きく表示 */}
        <div style={{ maxWidth:700, margin:"0 auto", padding:"2rem 1.5rem" }}>
          <img
            src={sakuraBoxImg}
            alt="桜のパッケージデザイン"
            style={{ width:"100%", display:"block", boxShadow:"0 8px 40px rgba(0,0,0,0.12)" }}
          />
        </div>

        {/* 詳細コンテンツ */}
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

            {/* 特徴カード */}
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

            {/* CTA */}
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
          <p style={{ fontSize:"0.8rem", color:"#9ca3af", letterSpacing:"0.12em" }}>© 令和八年 株式会社YOICHI</p>
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
        {/* ヒーロー：画像を大きく */}
        <div style={{ maxWidth:800, margin:"0 auto", padding:"2rem 1.5rem 4rem" }}>
          <div style={{ position:"relative" }}>
            <div style={{ position:"absolute", top:-12, left:-12, right:12, bottom:12, border:`2px solid ${C.accent}`, opacity:0.3 }} />
            <img src={meishiImg} alt="こだわりの名刺をYOICHIで" style={{ width:"100%", display:"block", position:"relative" }} />
          </div>
        </div>

        {/* 詳細コンテンツ */}
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

            {/* 特徴カード */}
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

            {/* CTA */}
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

        {/* フッター */}
        <footer style={{ background:C.dark, padding:"2rem 1.5rem", textAlign:"center", borderTop:`1px solid rgba(255,255,255,0.1)` }}>
          <p style={{ fontSize:"0.8rem", color:"#9ca3af", letterSpacing:"0.12em" }}>© 令和八年 株式会社YOICHI</p>
        </footer>
      </div>
    </div>
  );
}

const navLinks = [
  { label:"お仕事", id:"works_detail" },
  { label:"サンプル", id:"works" },
  { label:"ご納品の流れ", id:"flow" },
  { label:"会社概要", id:"about" },
  { label:"由来", id:"origin" },
  { label:"SNS", id:"sns" },
];

export default function App() {
  const [page, setPage] = useState("home");
  const goToPage = (p) => { setPage(p); window.scrollTo(0, 0); };
  const [menuOpen, setMenuOpen] = useState(false);
  const [hoveredWork, setHoveredWork] = useState(null);
  const [hoveredSns, setHoveredSns] = useState(null);

  if (page === "portfolio") return <PortfolioPage onBack={() => goToPage("home")} />;
  if (page === "samples") return <SamplesPage onBack={() => goToPage("home")} />;
  if (page === "banners") return <BannerSamplesPage onBack={() => goToPage("home")} />;
  if (page === "logos") return <LogoSamplesPage onBack={() => goToPage("home")} />;
  if (page === "uiux") return <UiuxSamplesPage onBack={() => goToPage("home")} />;
  if (page === "websamples") return <WebSamplesPage onBack={() => goToPage("home")} />;
  if (page === "appsamples") return <AppSamplesPage onBack={() => goToPage("home")} />;
  if (page === "templates") return <TemplateSamplesPage onBack={() => goToPage("home")} />;
  if (page === "goods") return <GoodsSamplesPage onBack={() => goToPage("home")} />;
  if (page === "meishi") return <MeishiPage onBack={() => goToPage("home")} onContact={() => { goToPage("home"); setTimeout(() => document.getElementById("contact")?.scrollIntoView({ behavior:"smooth" }), 100); }} />;
  if (page === "package") return <PackagePage onBack={() => goToPage("home")} onContact={() => { goToPage("home"); setTimeout(() => document.getElementById("contact")?.scrollIntoView({ behavior:"smooth" }), 100); }} />;

  const scrollTo = (id) => { document.getElementById(id)?.scrollIntoView({ behavior:"smooth" }); setMenuOpen(false); };

  const originItems = [
    { letter:"Y", word:"Yume（夢）", desc:"お客様の夢やビジョンを共に描き、デザインの力で現実へと近づける存在でありたいという想いを込めています。" },
    { letter:"O", word:"Omoi（想い）", desc:"「想いをカタチに」というモットーの根幹。お客様一人ひとりの想いを丁寧に受け取り、形にすることを大切にしています。" },
    { letter:"I", word:"Ito（縁・糸）", desc:"人と人、人とデザインを結ぶ縁を大切に。日本の伝統文化における「縁」の概念をブランドの精神に取り入れています。" },
    { letter:"C", word:"Create（創造）", desc:"伝統と革新を融合させ、唯一無二の価値を創り出す。お客様とともに新しいものを生み出す創造の喜びを共有します。" },
    { letter:"H", word:"Harmony（調和）", desc:"美しさとは調和から生まれる。日本の美意識「和」を現代のデザインに昇華させ、すべての要素が響き合う作品を目指します。" },
    { letter:"I", word:"Ichi（一・市）", desc:"「一期一会」の精神で、お客様との出会いを唯一無二のものとして大切にします。すべての出会いが新たな物語の始まりです。" },
  ];

  return (
    <div style={{ minHeight:"100vh", background:C.bg, fontFamily:"'Georgia','Hiragino Mincho ProN',serif", color:C.dark, overflowX:"hidden" }}>
      <div style={{ position:"fixed", inset:0, pointerEvents:"none", opacity:0.4, color:C.primary, zIndex:0 }}><YagasuriBg /></div>

      <header style={{ position:"fixed", top:0, left:0, right:0, zIndex:50, background:`${C.bg}f5`, backdropFilter:"blur(8px)", borderBottom:`2px solid ${C.primary}33` }}>
        <nav style={{ maxWidth:1200, margin:"0 auto", padding:"1rem 1.5rem", display:"flex", alignItems:"center", justifyContent:"space-between" }}>
          <div style={{ display:"flex", alignItems:"center", gap:"0.75rem", cursor:"pointer" }} onClick={() => scrollTo("hero")}>
            <YoichiMark size={44} />
            <div style={{ fontSize:"1.4rem", letterSpacing:"0.2em", fontWeight:700, lineHeight:1 }}>YOICHI</div>
          </div>
          <div className="nav-desktop">
            {navLinks.map(l => (<button key={l.id} onClick={() => scrollTo(l.id)} style={{ background:"none", border:"none", cursor:"pointer", fontSize:"0.9rem", letterSpacing:"0.12em", color:C.dark, fontFamily:"inherit", transition:"color 0.2s" }} onMouseEnter={e => e.currentTarget.style.color=C.accent} onMouseLeave={e => e.currentTarget.style.color=C.dark}>{l.label}</button>))}
            <button onClick={() => goToPage("portfolio")} style={{ background:"none", border:"none", cursor:"pointer", fontSize:"0.9rem", letterSpacing:"0.12em", color:C.dark, fontFamily:"inherit", transition:"color 0.2s" }} onMouseEnter={e => e.currentTarget.style.color=C.accent} onMouseLeave={e => e.currentTarget.style.color=C.dark}>Portfolio</button>
            <button onClick={() => scrollTo("contact")} style={{ padding:"0.55rem 1.4rem", background:C.primary, color:"#fff", border:"none", cursor:"pointer", letterSpacing:"0.12em", fontSize:"0.88rem", fontFamily:"inherit", transition:"background 0.2s" }} onMouseEnter={e => e.currentTarget.style.background=C.deep} onMouseLeave={e => e.currentTarget.style.background=C.primary}>お問い合わせ</button>
          </div>
          <button className="nav-hamburger" onClick={() => setMenuOpen(!menuOpen)} style={{ background:"none", border:"none", cursor:"pointer" }}>
            {menuOpen ? <IconX /> : <IconMenu />}
          </button>
        </nav>
        {menuOpen && (
          <div style={{ background:C.bg, borderTop:`1px solid ${C.border}`, padding:"1rem 1.5rem" }}>
            {[...navLinks, { label:"Portfolio", id:"portfolio" }, { label:"お問い合わせ", id:"contact" }].map(l => (
              <button key={l.id} onClick={() => l.id==="portfolio"?(goToPage("portfolio"),setMenuOpen(false)):scrollTo(l.id)} style={{ display:"block", width:"100%", textAlign:"left", padding:"0.75rem 0", background:"none", border:"none", cursor:"pointer", fontSize:"1rem", letterSpacing:"0.1em", fontFamily:"inherit", color:C.dark, borderBottom:`1px solid ${C.border}` }}>{l.label}</button>
            ))}
          </div>
        )}
      </header>

      <section id="hero" style={{ minHeight:"100vh", display:"flex", alignItems:"center", position:"relative", overflow:"hidden" }}>
        <div style={{ position:"absolute", top:"20%", left:"20%", width:320, height:320, color:C.accent, opacity:0.12, pointerEvents:"none" }}><YagasuriBg /></div>
        <div style={{ position:"absolute", bottom:"5%", right:"5%", width:200, height:200, color:C.primary, opacity:0.08, pointerEvents:"none" }}><YagasuriBg /></div>
        <div style={{ position:"absolute", top:0, right:"40%", width:1, height:"100%", background:`linear-gradient(to bottom,transparent,${C.accent}30,transparent)`, transform:"rotate(15deg)", pointerEvents:"none" }} />
        <div style={{ maxWidth:1200, margin:"0 auto", padding:"8rem 1.5rem 5rem", position:"relative", zIndex:1, width:"100%" }}>
          <div style={{ maxWidth:780 }}>
            <div className="hero-lockup" style={{ display:"flex", alignItems:"center", gap:"1.5rem", marginBottom:"3rem" }}>
              <YoichiMark size={250} />
              <div>
                <h1 style={{ fontSize:"clamp(2.5rem,6vw,4.5rem)", letterSpacing:"0.2em", fontWeight:700, marginBottom:"0.4rem", lineHeight:1 }}>YOICHI</h1>
                <div style={{ height:4, width:96, background:C.accent }} />
              </div>
            </div>
            <div style={{ position:"relative", marginBottom:"2.5rem" }}>
              <div style={{ position:"absolute", left:-8, top:-8, width:80, height:80, color:C.accent, opacity:0.15 }}><YagasuriBg /></div>
              <div style={{ borderLeft:`4px solid ${C.accent}`, paddingLeft:"1.2rem", position:"relative" }}>
                {["想いをカタチに","笑顔をそばに","繋がりを大切に"].map((line,i) => (<p key={i} style={{ fontSize:"clamp(1.6rem,4vw,2.8rem)", fontFamily:"serif", fontWeight:400, lineHeight:1.75, color:C.dark, margin:0 }}>{line}</p>))}
              </div>
            </div>
            <div className="cta-group" style={{ display:"flex", flexWrap:"wrap", gap:"1rem", paddingLeft:"1.2rem" }}>
              <button onClick={() => scrollTo("contact")} style={{ padding:"1rem 2rem", background:C.primary, color:"#fff", border:"none", cursor:"pointer", display:"flex", alignItems:"center", gap:"0.5rem", letterSpacing:"0.12em", fontSize:"0.95rem", fontFamily:"inherit", transition:"background 0.2s", boxShadow:"0 4px 20px rgba(139,79,71,0.3)" }} onMouseEnter={e => e.currentTarget.style.background=C.deep} onMouseLeave={e => e.currentTarget.style.background=C.primary}>ご相談はこちら <IconArrowRight /></button>
              <button onClick={() => scrollTo("works")} style={{ padding:"1rem 2rem", background:"transparent", color:C.primary, border:`2px solid ${C.primary}`, cursor:"pointer", letterSpacing:"0.12em", fontSize:"0.95rem", fontFamily:"inherit", transition:"all 0.2s" }} onMouseEnter={e => { e.currentTarget.style.background=C.primary; e.currentTarget.style.color="#fff"; }} onMouseLeave={e => { e.currentTarget.style.background="transparent"; e.currentTarget.style.color=C.primary; }}>イメージサンプル</button>
            </div>
          </div>
        </div>
      </section>

      {/* ── YOICHIのお仕事 ── */}
      <section id="works_detail" style={{ padding:"5rem 1.5rem", background:C.white, position:"relative", overflow:"hidden" }}>
        <div style={{ position:"absolute", top:0, left:0, right:0, height:1, background:`linear-gradient(to right,transparent,${C.accent}55,transparent)` }} />
        <div style={{ position:"absolute", top:10, right:10, width:200, height:200, color:C.primary, opacity:0.06 }}><YagasuriBg /></div>
        <div style={{ maxWidth:1200, margin:"0 auto", position:"relative", zIndex:1 }}>
          <SectionHeading en="WHAT WE DO" ja="YOICHIのお仕事" />
          <div style={{ maxWidth:860, margin:"0 auto" }}>
            <p style={{ textAlign:"center", color:"#555", lineHeight:1.9, marginBottom:"3rem", fontSize:"1rem" }}>
              デザインのお仕事をメインにしています。
            </p>
            {/* お仕事グリッド */}
            <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(200px,1fr))", gap:"1.2rem", marginBottom:"3rem" }}>
              {[
                { icon:"🖼️", label:"バナー作成", link:"banners" },
                { icon:"💼", label:"名刺作成", link:"meishi" },
                { icon:"✏️", label:"ロゴ作成", link:"logos" },
                { icon:"📦", label:"パッケージデザイン", link:"package" },
                { icon:"🖥️", label:"UI/UXデザイン", link:"uiux" },
                { icon:"🌐", label:"ウェブサイト作成", link:"websamples" },
                { icon:"📱", label:"アプリケーション作成", link:"appsamples" },
                { icon:"📄", label:"テンプレート作成", link:"templates" },
                { icon:"🎁", label:"雑貨デザイン", link:"goods" },
                { icon:"📐", label:"レイアウトデザイン", link:null },
              ].map((item, i) => (
                <div key={i}
                  onClick={() => item.link && goToPage(item.link)}
                  style={{ background:C.bg, border:`1px solid ${item.link ? C.accent : C.border}`, padding:"1.2rem 1rem", display:"flex", alignItems:"center", gap:"0.75rem", transition:"all 0.2s", position:"relative", overflow:"hidden", cursor:item.link?"pointer":"default" }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor=C.accent; e.currentTarget.style.background=C.white; e.currentTarget.style.transform="translateY(-2px)"; e.currentTarget.style.boxShadow="0 6px 20px rgba(0,0,0,0.08)"; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor=item.link?C.accent:C.border; e.currentTarget.style.background=C.bg; e.currentTarget.style.transform="none"; e.currentTarget.style.boxShadow="none"; }}
                >
                  <span style={{ fontSize:"1.5rem" }}>{item.icon}</span>
                  <span style={{ fontSize:"0.9rem", color:item.link?C.accent:C.dark, letterSpacing:"0.05em", fontFamily:"serif", fontWeight:item.link?700:400 }}>{item.label}</span>
                  {item.link && <span style={{ marginLeft:"auto", fontSize:"0.75rem", color:C.accent }}>→</span>}
                </div>
              ))}
            </div>
            {/* その他ご相談 */}
            <div style={{ background:C.primary, padding:"2rem 2.5rem", display:"flex", alignItems:"center", justifyContent:"space-between", flexWrap:"wrap", gap:"1rem", position:"relative", overflow:"hidden" }}>
              <div style={{ position:"absolute", inset:0, color:"#fff", opacity:0.08 }}><YagasuriBg /></div>
              <div style={{ position:"relative" }}>
                <p style={{ color:"#fff", fontSize:"1.1rem", fontFamily:"serif", fontWeight:400, letterSpacing:"0.08em" }}>その他、気軽にご相談ください‼</p>
                <p style={{ color:"rgba(255,255,255,0.75)", fontSize:"0.85rem", marginTop:"0.3rem" }}>上記以外のご要望もお気軽にどうぞ</p>
              </div>
              <button
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior:"smooth" })}
                style={{ padding:"0.75rem 1.8rem", background:"#fff", color:C.primary, border:"none", cursor:"pointer", fontSize:"0.9rem", letterSpacing:"0.12em", fontFamily:"inherit", fontWeight:700, transition:"all 0.2s", position:"relative", flexShrink:0 }}
                onMouseEnter={e => { e.currentTarget.style.background=C.bg; }}
                onMouseLeave={e => { e.currentTarget.style.background="#fff"; }}
              >お問い合わせはこちら →</button>
            </div>
          </div>
        </div>
      </section>

      {/* ── イメージサンプル ── */}
      <section id="works" style={{ padding:"5rem 1.5rem", background:C.bg, position:"relative", overflow:"hidden" }}>
        <div style={{ position:"absolute", top:0, left:0, right:0, height:1, background:`linear-gradient(to right,transparent,${C.accent}55,transparent)` }} />
        <div style={{ maxWidth:1100, margin:"0 auto", position:"relative", zIndex:1 }}>
          <SectionHeading en="IMAGE SAMPLE" ja="イメージサンプル" />
          <p style={{ textAlign:"center", color:"#555", marginBottom:"3rem", lineHeight:1.9 }}>YOICHIが制作したデザインのイメージサンプルをご覧ください。</p>

          {/* サンプル画像を大きく表示 */}
          <div style={{ maxWidth:900, margin:"0 auto 3rem", cursor:"pointer", position:"relative" }}
            onClick={() => goToPage("samples")}
            onMouseEnter={e => { e.currentTarget.style.transform="translateY(-4px)"; e.currentTarget.style.boxShadow="0 16px 48px rgba(0,0,0,0.15)"; }}
            onMouseLeave={e => { e.currentTarget.style.transform="none"; e.currentTarget.style.boxShadow="0 4px 20px rgba(0,0,0,0.1)"; }}
          >
            <img
              src={samplesHeroImg}
              alt="YOICHI デザインサンプル"
              style={{ width:"100%", display:"block", position:"relative", boxShadow:"0 4px 20px rgba(0,0,0,0.1)", transition:"all 0.3s" }}
            />
          </div>

          <div style={{ textAlign:"center" }}>
            <button onClick={() => goToPage("samples")} style={{ padding:"1rem 2.5rem", background:"transparent", color:C.primary, border:`2px solid ${C.primary}`, cursor:"pointer", letterSpacing:"0.12em", fontSize:"0.95rem", fontFamily:"inherit", transition:"all 0.2s", display:"inline-flex", alignItems:"center", gap:"0.5rem" }} onMouseEnter={e => { e.currentTarget.style.background=C.primary; e.currentTarget.style.color="#fff"; }} onMouseLeave={e => { e.currentTarget.style.background="transparent"; e.currentTarget.style.color=C.primary; }}>すべてのサンプルを見る <IconArrowRight /></button>
          </div>
        </div>
      </section>

      {/* ── ご納品までの流れ ── */}
      <section id="flow" style={{ padding:"5rem 1.5rem", background:C.white, position:"relative", overflow:"hidden" }}>
        <div style={{ position:"absolute", top:0, left:0, right:0, height:1, background:`linear-gradient(to right,transparent,${C.accent}55,transparent)` }} />
        <div style={{ maxWidth:900, margin:"0 auto", position:"relative", zIndex:1 }}>
          <SectionHeading en="DELIVERY FLOW" ja="ご納品までの流れ" />

          {/* フローチャート */}
          <div style={{ display:"flex", flexDirection:"column", alignItems:"center", gap:0 }}>

            {/* STEP 1 */}
            <div className="flow-step" style={{ width:"100%", maxWidth:500, background:C.bg, border:`2px solid ${C.primary}`, padding:"1.5rem 2rem", textAlign:"center", position:"relative" }}>
              <span style={{ position:"absolute", top:-12, left:20, background:C.accent, color:"#fff", fontSize:"0.7rem", padding:"0.15rem 0.6rem", letterSpacing:"0.1em" }}>STEP 01</span>
              <h4 style={{ fontSize:"1.2rem", fontFamily:"serif", fontWeight:400, color:C.dark }}>ヒアリング</h4>
              <p style={{ fontSize:"0.85rem", color:"#777", marginTop:"0.4rem" }}>ご要望・イメージをお伺いします</p>
            </div>

            {/* 矢印 */}
            <div style={{ width:2, height:30, background:C.accent }} />
            <div style={{ width:0, height:0, borderLeft:"8px solid transparent", borderRight:"8px solid transparent", borderTop:`10px solid ${C.accent}` }} />

            {/* STEP 2 */}
            <div className="flow-step flow-step-wide" style={{ width:"100%", maxWidth:600, background:C.bg, border:`2px solid ${C.primary}`, padding:"1.5rem 2rem", textAlign:"center", position:"relative", marginTop:4 }}>
              <span style={{ position:"absolute", top:-12, left:20, background:C.accent, color:"#fff", fontSize:"0.7rem", padding:"0.15rem 0.6rem", letterSpacing:"0.1em" }}>STEP 02</span>
              <h4 style={{ fontSize:"1.2rem", fontFamily:"serif", fontWeight:400, color:C.dark }}>イメージ確認・ラフ案の作成</h4>
              <p style={{ fontSize:"0.85rem", color:"#777", marginTop:"0.4rem" }}>ヒアリングをもとにデザインの方向性を決定します</p>
            </div>

            {/* 分岐矢印 */}
            <div style={{ width:2, height:20, background:C.accent }} />
            <div className="flow-branch" style={{ display:"flex", width:"100%", maxWidth:600, gap:"2rem", justifyContent:"center" }}>

              {/* 左ルート：イメージ合致 */}
              <div style={{ flex:1, display:"flex", flexDirection:"column", alignItems:"center", gap:0 }}>
                <div style={{ width:0, height:0, borderLeft:"8px solid transparent", borderRight:"8px solid transparent", borderTop:`10px solid ${C.accent}` }} />
                <div style={{ width:"100%", background:"#fff", border:`2px solid ${C.border}`, padding:"1rem", textAlign:"center", marginTop:4 }}>
                  <p style={{ fontSize:"0.85rem", color:C.primary, fontWeight:700 }}>イメージの合致</p>
                </div>
                <div style={{ width:2, height:20, background:C.accent }} />
                <div style={{ width:0, height:0, borderLeft:"8px solid transparent", borderRight:"8px solid transparent", borderTop:`10px solid ${C.accent}` }} />
                <div style={{ width:"100%", background:"#fff", border:`2px solid ${C.border}`, padding:"1rem", textAlign:"center", marginTop:4 }}>
                  <p style={{ fontSize:"0.85rem", color:C.dark }}>注文内容の確認</p>
                </div>
              </div>

              {/* 右ルート：ご提案 */}
              <div style={{ flex:1, display:"flex", flexDirection:"column", alignItems:"center", gap:0 }}>
                <div style={{ width:0, height:0, borderLeft:"8px solid transparent", borderRight:"8px solid transparent", borderTop:`10px solid ${C.accent}` }} />
                <div style={{ width:"100%", background:"#fff", border:`2px solid ${C.border}`, padding:"1rem", textAlign:"center", marginTop:4 }}>
                  <p style={{ fontSize:"0.85rem", color:C.primary, fontWeight:700 }}>ご提案</p>
                </div>
                <div style={{ width:2, height:20, background:C.accent }} />
                <div style={{ width:0, height:0, borderLeft:"8px solid transparent", borderRight:"8px solid transparent", borderTop:`10px solid ${C.accent}` }} />
                <div style={{ width:"100%", background:"#fff", border:`2px solid ${C.border}`, padding:"1rem", textAlign:"center", marginTop:4 }}>
                  <p style={{ fontSize:"0.85rem", color:C.dark }}>イメージの合致</p>
                </div>
                <div style={{ width:2, height:20, background:C.accent }} />
                <div style={{ width:0, height:0, borderLeft:"8px solid transparent", borderRight:"8px solid transparent", borderTop:`10px solid ${C.accent}` }} />
                <div style={{ width:"100%", background:"#fff", border:`2px solid ${C.border}`, padding:"1rem", textAlign:"center", marginTop:4 }}>
                  <p style={{ fontSize:"0.85rem", color:C.dark }}>注文内容の確認</p>
                </div>
              </div>
            </div>

            {/* 合流矢印 */}
            <div style={{ width:2, height:30, background:C.accent, marginTop:4 }} />
            <div style={{ width:0, height:0, borderLeft:"8px solid transparent", borderRight:"8px solid transparent", borderTop:`10px solid ${C.accent}` }} />

            {/* STEP 3 */}
            <div className="flow-step flow-step-wide" style={{ width:"100%", maxWidth:600, background:C.bg, border:`2px solid ${C.primary}`, padding:"1.5rem 2rem", textAlign:"center", position:"relative", marginTop:4 }}>
              <span style={{ position:"absolute", top:-12, left:20, background:C.accent, color:"#fff", fontSize:"0.7rem", padding:"0.15rem 0.6rem", letterSpacing:"0.1em" }}>STEP 03</span>
              <h4 style={{ fontSize:"1.2rem", fontFamily:"serif", fontWeight:400, color:C.dark }}>修正対応（最大4回まで）</h4>
              <p style={{ fontSize:"0.85rem", color:"#777", marginTop:"0.4rem" }}>デザインの微調整を行います</p>
            </div>

            <div style={{ width:2, height:30, background:C.accent }} />
            <div style={{ width:0, height:0, borderLeft:"8px solid transparent", borderRight:"8px solid transparent", borderTop:`10px solid ${C.accent}` }} />

            {/* STEP 4 */}
            <div className="flow-step" style={{ width:"100%", maxWidth:500, background:C.bg, border:`2px solid ${C.primary}`, padding:"1.5rem 2rem", textAlign:"center", position:"relative", marginTop:4 }}>
              <span style={{ position:"absolute", top:-12, left:20, background:C.accent, color:"#fff", fontSize:"0.7rem", padding:"0.15rem 0.6rem", letterSpacing:"0.1em" }}>STEP 04</span>
              <h4 style={{ fontSize:"1.2rem", fontFamily:"serif", fontWeight:400, color:C.dark }}>最終デザイン確認</h4>
              <p style={{ fontSize:"0.85rem", color:"#777", marginTop:"0.4rem" }}>完成デザインを最終確認いただきます</p>
            </div>

            <div style={{ width:2, height:30, background:C.accent }} />
            <div style={{ width:0, height:0, borderLeft:"8px solid transparent", borderRight:"8px solid transparent", borderTop:`10px solid ${C.accent}` }} />

            {/* STEP 5 */}
            <div className="flow-step" style={{ width:"100%", maxWidth:500, background:C.primary, padding:"1.5rem 2rem", textAlign:"center", position:"relative", marginTop:4 }}>
              <span style={{ position:"absolute", top:-12, left:20, background:C.dark, color:"#fff", fontSize:"0.7rem", padding:"0.15rem 0.6rem", letterSpacing:"0.1em" }}>STEP 05</span>
              <h4 style={{ fontSize:"1.3rem", fontFamily:"serif", fontWeight:400, color:"#fff" }}>ご納品</h4>
              <p style={{ fontSize:"0.85rem", color:"rgba(255,255,255,0.8)", marginTop:"0.4rem" }}>完成データをお届けいたします</p>
            </div>
          </div>

          {/* 注釈 */}
          <p style={{ textAlign:"center", color:C.accent, fontSize:"0.85rem", marginTop:"2.5rem", lineHeight:1.8 }}>※製品や仕様によって流れが変わる場合がございます。</p>
        </div>
      </section>

      <section id="about" style={{ padding:"5rem 1.5rem", background:C.white, position:"relative", overflow:"hidden" }}>
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
                {[["会社名","YOICHI"],["設立","2026年"],["代表","横山 真一郎"],["副代表","住谷 永人"]].map(([k,v]) => (<div key={k} style={{ display:"flex", gap:"1rem", marginBottom:"0.6rem", fontSize:"0.95rem" }}><span style={{ color:C.textMuted, minWidth:72 }}>{k}</span><span>{v}</span></div>))}
              </div>
            </div>
            <div className="about-logo-box" style={{ position:"relative", maxWidth:400, margin:"0 auto" }}>
              <div style={{ position:"absolute", top:-16, left:-16, right:16, bottom:16, border:`2px solid ${C.accent}`, opacity:0.25 }} />
              <div style={{ position:"relative", background:C.primary, padding:"4rem", display:"flex", alignItems:"center", justifyContent:"center", aspectRatio:"1" }}>
                <div style={{ position:"absolute", inset:0, color:"#fff", opacity:0.1 }}><YagasuriBg /></div>
                <YoichiMark size={160} dark={true} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="origin" style={{ padding:"5rem 1.5rem", background:C.bg, position:"relative", overflow:"hidden" }}>
        <div style={{ position:"absolute", top:0, left:0, right:0, height:1, background:`linear-gradient(to right,transparent,${C.accent}55,transparent)` }} />
        <div style={{ position:"absolute", inset:0, color:C.primary, opacity:0.04, pointerEvents:"none" }}><YagasuriBg /></div>
        <div style={{ maxWidth:1200, margin:"0 auto", position:"relative", zIndex:1 }}>
          <SectionHeading en="ORIGIN OF NAME" ja="YOICHIの由来" />
          <div style={{ maxWidth:900, margin:"0 auto 5rem", position:"relative" }}>
            <div style={{ position:"absolute", left:0, top:0, bottom:0, width:4, background:`linear-gradient(to bottom,${C.accent},${C.primary})` }} />
            <div className="origin-card" style={{ background:C.white, border:`1px solid ${C.border}`, padding:"3rem 3rem 3rem 3.5rem", position:"relative", overflow:"hidden" }}>
              <div style={{ fontSize:"8rem", lineHeight:1, color:C.accent, opacity:0.08, position:"absolute", top:0, left:"3rem", fontFamily:"serif", pointerEvents:"none" }}>"</div>
              <div style={{ position:"relative" }}>
                <div style={{ display:"flex", alignItems:"center", gap:"1rem", marginBottom:"2rem" }}>
                  <div style={{ width:48, height:48, background:C.primary, display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0 }}>
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8h1a4 4 0 0 1 0 8h-1"/><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/><line x1="6" y1="1" x2="6" y2="4"/><line x1="10" y1="1" x2="10" y2="4"/><line x1="14" y1="1" x2="14" y2="4"/></svg>
                  </div>
                  <div>
                    <p style={{ fontSize:"0.7rem", color:C.textMuted, letterSpacing:"0.25em", marginBottom:"0.2rem" }}>ORIGIN STORY</p>
                    <h3 className="origin-heading" style={{ fontSize:"1.4rem", fontFamily:"serif", fontWeight:400, color:C.dark, letterSpacing:"0.08em" }}>那須与一と、的を外さない精神</h3>
                  </div>
                </div>
                <div style={{ display:"flex", flexDirection:"column", gap:"1.2rem" }}>
                  <p style={{ fontSize:"1rem", color:"#444", lineHeight:2.1, fontFamily:"serif" }}>栃木県に、<strong style={{ color:C.dark }}>那須与一</strong>という弓の名手がいました。遠い距離（75m〜77mと言われています）の船の上にある<strong style={{ color:C.dark }}>扇の的</strong>を、見事に打ち抜いたという逸話があります。</p>
                  <div className="distance-box" style={{ background:C.bg, border:`1px solid ${C.border}`, borderLeft:`3px solid ${C.accent}`, padding:"1rem 1.5rem", display:"flex", alignItems:"center", gap:"1.5rem" }}>
                    <div style={{ textAlign:"center", flexShrink:0 }}>
                      <div style={{ fontSize:"2.2rem", fontWeight:700, color:C.accent, lineHeight:1, fontFamily:"serif" }}>75<span style={{ fontSize:"1rem" }}>〜</span>77</div>
                      <div style={{ fontSize:"0.75rem", color:C.textMuted, letterSpacing:"0.1em" }}>メートル</div>
                    </div>
                    <div className="distance-divider" style={{ width:1, height:40, background:C.border, flexShrink:0 }} />
                    <p style={{ fontSize:"0.88rem", color:"#666", lineHeight:1.8 }}>揺れる船上の小さな扇を、この距離から一射で射抜いた。<br />その精神は、私たちが目指すべき姿そのものです。</p>
                  </div>
                  <p style={{ fontSize:"1rem", color:"#444", lineHeight:2.1, fontFamily:"serif" }}>弊社は<strong style={{ color:C.dark }}>栃木県発祥の企業</strong>であり、与一のように的を外さない——お客様一人ひとりに<strong style={{ color:C.dark }}>的を得た商品・サービス</strong>をお届けしようという強い想いから、社名を <strong style={{ color:C.accent, letterSpacing:"0.15em" }}>YOICHI</strong> としました。</p>
                </div>
                <div style={{ display:"flex", alignItems:"center", gap:"1rem", marginTop:"2rem" }}>
                  <div style={{ flex:1, height:1, background:C.border }} />
                  <span style={{ fontSize:"0.75rem", color:C.textMuted, letterSpacing:"0.2em" }}>TOCHIGI, JAPAN</span>
                  <div style={{ flex:1, height:1, background:C.border }} />
                </div>
              </div>
            </div>
          </div>
          <div className="letter-grid" style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(280px,1fr))", gap:"2rem", marginBottom:"4rem" }}>
            {originItems.map((item,i) => (
              <div key={i} className="letter-card" style={{ background:C.white, border:`1px solid ${C.border}`, padding:"2rem", position:"relative", overflow:"hidden", transition:"box-shadow 0.3s" }} onMouseEnter={e => e.currentTarget.style.boxShadow="0 8px 28px rgba(0,0,0,0.08)"} onMouseLeave={e => e.currentTarget.style.boxShadow="none"}>
                <div style={{ display:"flex", alignItems:"flex-end", gap:"0.75rem", marginBottom:"1rem" }}>
                  <span style={{ fontSize:"3.5rem", fontWeight:700, color:C.accent, lineHeight:1, fontFamily:"serif" }}>{item.letter}</span>
                  <span style={{ fontSize:"0.85rem", color:C.primary, letterSpacing:"0.1em", marginBottom:"0.4rem", fontStyle:"italic" }}>{item.word}</span>
                </div>
                <div style={{ width:32, height:3, background:C.accent, marginBottom:"1rem" }} />
                <p style={{ fontSize:"0.9rem", color:"#555", lineHeight:1.9 }}>{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="summary-box" style={{ background:C.dark, padding:"3rem 2.5rem", position:"relative", overflow:"hidden", maxWidth:800, margin:"0 auto" }}>
            <div style={{ position:"absolute", inset:0, color:C.primary, opacity:0.12 }}><YagasuriBg /></div>
            <div style={{ position:"absolute", top:0, left:0, right:0, height:3, background:`linear-gradient(to right,${C.accent},${C.primary})` }} />
            <div style={{ position:"relative", textAlign:"center" }}>
              <p style={{ fontSize:"0.75rem", color:C.accent, letterSpacing:"0.3em", marginBottom:"1.2rem" }}>NAME MEANING</p>
              <p style={{ fontSize:"clamp(1.2rem,3vw,1.6rem)", fontFamily:"serif", fontWeight:400, color:C.bg, lineHeight:1.9, marginBottom:"1.2rem" }}>「YOICHI」とは、<br />夢・想い・縁・創造・調和・一期一会。<br />六つの言葉が織りなす、私たちの誓いです。</p>
              <div style={{ width:48, height:2, background:C.accent, margin:"0 auto" }} />
            </div>
          </div>
        </div>
      </section>

      <section id="sns" style={{ padding:"5rem 1.5rem", background:C.bg, position:"relative", overflow:"hidden" }}>
        <div style={{ position:"absolute", top:0, left:0, right:0, height:1, background:`linear-gradient(to right,transparent,${C.accent}55,transparent)` }} />
        <div style={{ maxWidth:1200, margin:"0 auto", position:"relative", zIndex:1 }}>
          <SectionHeading en="FOLLOW US" ja="SNS" />
          <p style={{ textAlign:"center", color:C.textMuted, marginBottom:"3rem", lineHeight:1.9 }}>日々の制作風景やデザインの想いを発信しています。<br />ぜひフォローしてください。</p>
          <div className="sns-grid" style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(280px,1fr))", gap:"2rem", maxWidth:1100, margin:"0 auto" }}>
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" onMouseEnter={() => setHoveredSns("ig")} onMouseLeave={() => setHoveredSns(null)} style={{ textDecoration:"none", display:"block" }}>
              <div style={{ background:hoveredSns==="ig"?"linear-gradient(135deg,#833ab4,#fd1d1d,#fcb045)":C.white, border:`2px solid ${hoveredSns==="ig"?"transparent":C.border}`, padding:"2.5rem 2rem", transition:"all 0.3s", position:"relative", overflow:"hidden", transform:hoveredSns==="ig"?"translateY(-4px)":"none", boxShadow:hoveredSns==="ig"?"0 12px 32px rgba(131,58,180,0.25)":"none" }}>
                <div style={{ display:"flex", alignItems:"center", gap:"1rem", marginBottom:"1rem" }}>
                  <div style={{ width:52, height:52, background:hoveredSns==="ig"?"rgba(255,255,255,0.2)":"linear-gradient(135deg,#833ab4,#fd1d1d,#fcb045)", borderRadius:"12px", display:"flex", alignItems:"center", justifyContent:"center" }}><IconInstagram color="#fff" size={26} /></div>
                  <div><div style={{ fontWeight:700, fontSize:"1.1rem", color:hoveredSns==="ig"?"#fff":C.dark }}>Instagram</div><div style={{ fontSize:"0.8rem", color:hoveredSns==="ig"?"rgba(255,255,255,0.8)":C.textMuted }}>@yoichi_design</div></div>
                </div>
                <p style={{ fontSize:"0.88rem", color:hoveredSns==="ig"?"rgba(255,255,255,0.9)":"#555", lineHeight:1.8 }}>制作の舞台裏や完成作品を毎日更新。和の美意識を大切にしたビジュアルをお届けします。</p>
                <div style={{ marginTop:"1.2rem", display:"flex", alignItems:"center", gap:"0.4rem", color:hoveredSns==="ig"?"#fff":C.accent, fontSize:"0.82rem", letterSpacing:"0.1em" }}>フォローする <IconExternalLink size={13} /></div>
              </div>
            </a>
            <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" onMouseEnter={() => setHoveredSns("x")} onMouseLeave={() => setHoveredSns(null)} style={{ textDecoration:"none", display:"block" }}>
              <div style={{ background:hoveredSns==="x"?"#000":C.white, border:`2px solid ${hoveredSns==="x"?"#000":C.border}`, padding:"2.5rem 2rem", transition:"all 0.3s", position:"relative", overflow:"hidden", transform:hoveredSns==="x"?"translateY(-4px)":"none", boxShadow:hoveredSns==="x"?"0 12px 32px rgba(0,0,0,0.2)":"none" }}>
                <div style={{ display:"flex", alignItems:"center", gap:"1rem", marginBottom:"1rem" }}>
                  <div style={{ width:52, height:52, background:hoveredSns==="x"?"rgba(255,255,255,0.15)":"#000", borderRadius:"12px", display:"flex", alignItems:"center", justifyContent:"center" }}><IconTwitter color="#fff" size={26} /></div>
                  <div><div style={{ fontWeight:700, fontSize:"1.1rem", color:hoveredSns==="x"?"#fff":C.dark }}>X (Twitter)</div><div style={{ fontSize:"0.8rem", color:hoveredSns==="x"?"rgba(255,255,255,0.6)":C.textMuted }}>@yoichi_design</div></div>
                </div>
                <p style={{ fontSize:"0.88rem", color:hoveredSns==="x"?"rgba(255,255,255,0.85)":"#555", lineHeight:1.8 }}>デザインの考え方や業界の最新情報を発信。お気軽にリプライやDMもどうぞ。</p>
                <div style={{ marginTop:"1.2rem", display:"flex", alignItems:"center", gap:"0.4rem", color:hoveredSns==="x"?"#fff":C.accent, fontSize:"0.82rem", letterSpacing:"0.1em" }}>フォローする <IconExternalLink size={13} /></div>
              </div>
            </a>
            <a href="https://www.tiktok.com/" target="_blank" rel="noopener noreferrer" onMouseEnter={() => setHoveredSns("tk")} onMouseLeave={() => setHoveredSns(null)} style={{ textDecoration:"none", display:"block" }}>
              <div style={{ background:hoveredSns==="tk"?"linear-gradient(135deg,#00f2ea,#ff0050)":C.white, border:`2px solid ${hoveredSns==="tk"?"transparent":C.border}`, padding:"2.5rem 2rem", transition:"all 0.3s", position:"relative", overflow:"hidden", transform:hoveredSns==="tk"?"translateY(-4px)":"none", boxShadow:hoveredSns==="tk"?"0 12px 32px rgba(255,0,80,0.25)":"none" }}>
                <div style={{ display:"flex", alignItems:"center", gap:"1rem", marginBottom:"1rem" }}>
                  <div style={{ width:52, height:52, background:hoveredSns==="tk"?"rgba(255,255,255,0.2)":"linear-gradient(135deg,#00f2ea,#ff0050)", borderRadius:"12px", display:"flex", alignItems:"center", justifyContent:"center" }}><IconTikTok color="#fff" size={26} /></div>
                  <div><div style={{ fontWeight:700, fontSize:"1.1rem", color:hoveredSns==="tk"?"#fff":C.dark }}>TikTok</div><div style={{ fontSize:"0.8rem", color:hoveredSns==="tk"?"rgba(255,255,255,0.8)":C.textMuted }}>@yoichi_design</div></div>
                </div>
                <p style={{ fontSize:"0.88rem", color:hoveredSns==="tk"?"rgba(255,255,255,0.9)":"#555", lineHeight:1.8 }}>デザインの制作過程やビフォーアフターを動画で公開中。ぜひチェックしてください。</p>
                <div style={{ marginTop:"1.2rem", display:"flex", alignItems:"center", gap:"0.4rem", color:hoveredSns==="tk"?"#fff":C.accent, fontSize:"0.82rem", letterSpacing:"0.1em" }}>フォローする <IconExternalLink size={13} /></div>
              </div>
            </a>
          </div>
        </div>
      </section>

      <section id="contact" style={{ padding:"5rem 1.5rem", background:C.white, position:"relative", overflow:"hidden" }}>
        <div style={{ position:"absolute", top:0, left:0, right:0, height:1, background:`linear-gradient(to right,transparent,${C.accent}55,transparent)` }} />
        <div style={{ maxWidth:1200, margin:"0 auto", position:"relative", zIndex:1 }}>
          <SectionHeading en="CONTACT" ja="お問い合わせ" />
          <p style={{ textAlign:"center", color:"#555", maxWidth:600, margin:"0 auto 3rem", lineHeight:1.9 }}>ご相談、お見積もりなど、お気軽にお問い合わせくださいませ</p>
          <div className="contact-grid" style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(280px,1fr))", gap:"3rem" }}>
            <div style={{ display:"flex", flexDirection:"column", gap:"1.5rem" }}>
              <ContactCard icon={IconMail} title="電子郵便"><a href="mailto:info@yoichi.co.jp" style={{ color:"#555", textDecoration:"none" }}>info@yoichi.co.jp</a></ContactCard>
              <ContactCard icon={IconPhone} title="電話番号"><a href="tel:+81-3-1234-5678" style={{ color:"#555", textDecoration:"none" }}>〇三（一二三四）五六七八</a><p style={{ fontSize:"0.85rem", color:C.textMuted, marginTop:4 }}>営業時間：平日 9:00 - 18:00</p></ContactCard>
              <ContactCard icon={IconMapPin} title="所在地"><p style={{ color:"#555", lineHeight:1.8, fontSize:"0.95rem" }}>〒150-0001<br />東京都渋谷区神宮前一丁目二番三号<br />和デザインビルディング 五階</p></ContactCard>
              {/* 公式LINE */}
              <a href="https://line.me/" target="_blank" rel="noopener noreferrer" style={{ textDecoration:"none", display:"block" }}>
                <div style={{ display:"flex", gap:"1rem", background:"#06C755", padding:"1.5rem", position:"relative", overflow:"hidden", transition:"all 0.2s", cursor:"pointer" }}
                  onMouseEnter={e => { e.currentTarget.style.transform="translateY(-2px)"; e.currentTarget.style.boxShadow="0 6px 20px rgba(6,199,85,0.3)"; }}
                  onMouseLeave={e => { e.currentTarget.style.transform="none"; e.currentTarget.style.boxShadow="none"; }}
                >
                  <div style={{ width:48, height:48, background:"rgba(255,255,255,0.2)", display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0, borderRadius:"12px" }}>
                    <IconLine color="#fff" size={24} />
                  </div>
                  <div>
                    <h3 style={{ fontSize:"1.1rem", marginBottom:"0.3rem", letterSpacing:"0.1em", color:"#fff" }}>公式LINE</h3>
                    <p style={{ color:"rgba(255,255,255,0.9)", fontSize:"0.88rem", lineHeight:1.6 }}>お気軽にお問い合わせ・ご相談ください</p>
                    <p style={{ color:"rgba(255,255,255,0.7)", fontSize:"0.78rem", marginTop:"0.3rem" }}>友だち追加で簡単にやり取りできます →</p>
                  </div>
                </div>
              </a>
            </div>
            <div style={{ background:C.bg, padding:"2rem", border:`2px solid ${C.border}`, position:"relative", overflow:"hidden" }}>
              <div style={{ display:"flex", flexDirection:"column", gap:"1.2rem", position:"relative" }}>
                {[{ label:"お名前", type:"text", ph:"山田 太郎" },{ label:"メールアドレス", type:"email", ph:"example@email.com" }].map(f => (
                  <div key={f.label}><label style={{ display:"block", marginBottom:"0.5rem", letterSpacing:"0.1em", fontSize:"0.95rem" }}>{f.label}</label><input type={f.type} placeholder={f.ph} style={{ width:"100%", padding:"0.75rem 1rem", border:`2px solid ${C.border}`, background:C.white, fontSize:"0.95rem", outline:"none", boxSizing:"border-box", transition:"border-color 0.2s", fontFamily:"inherit" }} onFocus={e => e.target.style.borderColor=C.accent} onBlur={e => e.target.style.borderColor=C.border} /></div>
                ))}
                <div><label style={{ display:"block", marginBottom:"0.5rem", letterSpacing:"0.1em", fontSize:"0.95rem" }}>お問い合わせ内容</label><textarea rows={5} placeholder="ご相談内容をご記入ください" style={{ width:"100%", padding:"0.75rem 1rem", border:`2px solid ${C.border}`, background:C.white, fontSize:"0.95rem", outline:"none", resize:"vertical", fontFamily:"inherit", boxSizing:"border-box", transition:"border-color 0.2s" }} onFocus={e => e.target.style.borderColor=C.accent} onBlur={e => e.target.style.borderColor=C.border} /></div>
                <button style={{ padding:"1rem", background:C.primary, color:"#fff", border:"none", cursor:"pointer", display:"flex", alignItems:"center", justifyContent:"center", gap:"0.5rem", letterSpacing:"0.12em", fontSize:"0.95rem", fontFamily:"inherit", transition:"background 0.2s" }} onMouseEnter={e => e.currentTarget.style.background=C.deep} onMouseLeave={e => e.currentTarget.style.background=C.primary}><span>送信する</span><IconArrowRight /></button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer style={{ background:C.dark, color:C.bg, padding:"3rem 1.5rem", position:"relative", overflow:"hidden" }}>
        <div style={{ position:"absolute", top:0, left:0, right:0, height:1, background:`linear-gradient(to right,transparent,${C.accent},transparent)` }} />
        <div style={{ position:"absolute", inset:0, color:C.primary, opacity:0.1 }}><YagasuriBg /></div>
        <div style={{ maxWidth:1200, margin:"0 auto", position:"relative", display:"flex", flexDirection:"column", alignItems:"center", gap:"1.5rem" }}>
          <div style={{ display:"flex", alignItems:"center", gap:"1rem" }}><YoichiMark size={52} dark={true} /><span style={{ fontSize:"1.8rem", letterSpacing:"0.2em", fontWeight:700 }}>YOICHI</span></div>
          <p style={{ fontSize:"0.85rem", color:"#9ca3af", letterSpacing:"0.05em" }}>想いをカタチに、笑顔をそばに、繋がりを大切に</p>
          <div className="footer-links" style={{ display:"flex", gap:"2rem", flexWrap:"wrap", justifyContent:"center" }}>
            {[...navLinks,{ label:"Portfolio", id:"portfolio" },{ label:"お問い合わせ", id:"contact" }].map(l => (
              l.id==="portfolio"
                ? <button key="portfolio" onClick={() => goToPage("portfolio")} style={{ background:"none", border:"none", color:"#9ca3af", cursor:"pointer", fontSize:"0.85rem", letterSpacing:"0.12em", fontFamily:"inherit" }}>Portfolio</button>
                : <button key={l.id} onClick={() => scrollTo(l.id)} style={{ background:"none", border:"none", color:"#9ca3af", cursor:"pointer", fontSize:"0.85rem", letterSpacing:"0.12em", fontFamily:"inherit" }}>{l.label}</button>
            ))}
          </div>
          <div style={{ display:"flex", gap:"1rem" }}>
            {[{ href:"https://www.instagram.com/", Icon:IconInstagram },{ href:"https://twitter.com/", Icon:IconTwitter },{ href:"https://www.tiktok.com/", Icon:IconTikTok }].map(({ href, Icon }) => (
              <a key={href} href={href} target="_blank" rel="noopener noreferrer" style={{ width:36, height:36, background:"rgba(255,255,255,0.1)", borderRadius:"50%", display:"flex", alignItems:"center", justifyContent:"center" }}><Icon color="#fff" size={16} /></a>
            ))}
          </div>
          <div style={{ width:64, height:1, background:C.accent, opacity:0.4 }} />
          <p style={{ fontSize:"0.8rem", color:"#6b7280", letterSpacing:"0.12em" }}>© 令和八年 株式会社YOICHI</p>
        </div>
      </footer>

      <style>{`
        html{scroll-behavior:smooth;}
        *{box-sizing:border-box;margin:0;padding:0;}
        ::placeholder{color:#aaa;}
        body{overflow-x:hidden;}

        @keyframes fadeInUp{
          from{opacity:0;transform:translateY(30px);}
          to{opacity:1;transform:translateY(0);}
        }
        @keyframes fadeIn{
          from{opacity:0;}
          to{opacity:1;}
        }
        @keyframes slideInLeft{
          from{opacity:0;transform:translateX(-30px);}
          to{opacity:1;transform:translateX(0);}
        }
        .page-animate{animation:fadeIn 0.5s ease-out;}
        .page-animate .anim-item{animation:fadeInUp 0.6s ease-out both;}
        .page-animate .anim-item:nth-child(1){animation-delay:0.1s;}
        .page-animate .anim-item:nth-child(2){animation-delay:0.2s;}
        .page-animate .anim-item:nth-child(3){animation-delay:0.3s;}
        .page-animate .anim-item:nth-child(4){animation-delay:0.4s;}
        .page-animate .anim-item:nth-child(5){animation-delay:0.5s;}
        .page-animate .anim-item:nth-child(6){animation-delay:0.6s;}
        .page-animate .anim-item:nth-child(7){animation-delay:0.7s;}
        .page-animate .anim-item:nth-child(8){animation-delay:0.8s;}
        .page-animate .anim-item:nth-child(9){animation-delay:0.9s;}
        .page-animate .anim-item:nth-child(10){animation-delay:1.0s;}
        .nav-desktop{display:flex;align-items:center;gap:1.8rem;}
        .nav-hamburger{display:none!important;}
        @media(max-width:768px){
          .nav-desktop{display:none!important;}
          .nav-hamburger{display:flex!important;}
          .hero-lockup{flex-direction:column!important;align-items:flex-start!important;gap:1rem!important;}
          .section-inner{padding:3rem 1rem!important;}
          .about-grid{grid-template-columns:1fr!important;gap:2rem!important;}
          .about-logo-box{display:none!important;}
          .philosophy-row{flex-direction:column!important;align-items:flex-start!important;gap:0.2rem!important;}
          .philosophy-sep{display:none!important;}
          .contact-grid{grid-template-columns:1fr!important;gap:2rem!important;}
          .flow-branch{gap:0.8rem!important;padding:0!important;}
          .flow-branch p{font-size:0.75rem!important;}
          .flow-step{max-width:100%!important;padding:1rem 0.8rem!important;}
          .flow-step-wide{max-width:100%!important;padding:1rem 0.8rem!important;}
          .flow-step h4{font-size:0.95rem!important;}
          .flow-step p{font-size:0.75rem!important;}
          .cta-group{flex-direction:column!important;}
          .cta-group button{width:100%!important;justify-content:center!important;}
          .sns-grid{max-width:100%!important;}
          .origin-card{padding:2rem 1.5rem 2rem 2rem!important;}
          .distance-box{flex-direction:column!important;gap:0.75rem!important;}
          .distance-divider{width:100%!important;height:1px!important;}
          .summary-box{padding:2rem 1.2rem!important;}
          .letter-grid{grid-template-columns:1fr!important;}
          .works-grid{grid-template-columns:1fr!important;}
          .services-grid{grid-template-columns:1fr!important;}
          .portfolio-grid{grid-template-columns:1fr!important;}
          .footer-links{gap:1rem!important;}
        }
        @media(max-width:480px){
          .origin-card{padding:1.5rem 1rem 1.5rem 1.5rem!important;}
          .origin-heading{font-size:1.1rem!important;}
          .letter-card{padding:1.5rem!important;}
          .flow-step{padding:0.8rem 0.6rem!important;}
          .flow-step h4{font-size:0.85rem!important;}
          .flow-branch p{font-size:0.7rem!important;}
        }
      `}</style>
    </div>
  );
}
