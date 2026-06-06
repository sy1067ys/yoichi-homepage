import { useState } from "react";
import yoichiLogo from "../assets/yoichi-logo.png";
import meishiImg from "../assets/meishi.png";
import sakuraBoxImg from "../assets/sakura-box-ad.png";
import meishiSampleImg from "../assets/meishi-sample.png";
import samplesHeroImg from "../assets/samples-hero.png";

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
    <div style={{ minHeight:"100vh", background:C.bg, fontFamily:"'Georgia','Hiragino Mincho ProN',serif", color:C.dark }}>
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

// ── サンプルページ ──
function SamplesPage({ onBack }) {
  return (
    <div style={{ minHeight:"100vh", background:C.bg, fontFamily:"'Georgia','Hiragino Mincho ProN',serif", color:C.dark }}>
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

        {/* サンプル一覧 */}
        <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(340px,1fr))", gap:"2.5rem" }}>
          {/* 名刺サンプル */}
          <div style={{ background:C.white, border:`2px solid ${C.border}`, overflow:"hidden", transition:"all 0.3s" }}
            onMouseEnter={e => { e.currentTarget.style.borderColor=C.accent; e.currentTarget.style.transform="translateY(-4px)"; e.currentTarget.style.boxShadow="0 12px 32px rgba(0,0,0,0.12)"; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor=C.border; e.currentTarget.style.transform="none"; e.currentTarget.style.boxShadow="none"; }}
          >
            <img src={meishiSampleImg} alt="名刺デザインサンプル" style={{ width:"100%", display:"block" }} />
            <div style={{ padding:"1.5rem" }}>
              <div style={{ fontSize:"0.72rem", color:C.textMuted, letterSpacing:"0.2em", marginBottom:"0.5rem" }}>名刺デザイン</div>
              <h3 style={{ fontSize:"1.1rem", fontFamily:"serif", fontWeight:400, marginBottom:"0.8rem", lineHeight:1.5 }}>シンプルと高級感を両立したデザイン</h3>
              <p style={{ fontSize:"0.88rem", color:C.textMuted, lineHeight:1.8 }}>Hair Salon向けのシンプルかつ高級感のある名刺デザイン。ゴールドとシルバーの2パターンをご提案。</p>
            </div>
          </div>

          {/* パッケージサンプル */}
          <div style={{ background:C.white, border:`2px solid ${C.border}`, overflow:"hidden", transition:"all 0.3s" }}
            onMouseEnter={e => { e.currentTarget.style.borderColor=C.accent; e.currentTarget.style.transform="translateY(-4px)"; e.currentTarget.style.boxShadow="0 12px 32px rgba(0,0,0,0.12)"; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor=C.border; e.currentTarget.style.transform="none"; e.currentTarget.style.boxShadow="none"; }}
          >
            <img src={sakuraBoxImg} alt="パッケージデザインサンプル" style={{ width:"100%", display:"block" }} />
            <div style={{ padding:"1.5rem" }}>
              <div style={{ fontSize:"0.72rem", color:C.textMuted, letterSpacing:"0.2em", marginBottom:"0.5rem" }}>パッケージデザイン</div>
              <h3 style={{ fontSize:"1.1rem", fontFamily:"serif", fontWeight:400, marginBottom:"0.8rem", lineHeight:1.5 }}>桜が届ける、春の贈りもの</h3>
              <p style={{ fontSize:"0.88rem", color:C.textMuted, lineHeight:1.8 }}>春の季節に合わせた桜模様のギフトボックス。華やかさと上品さを兼ね備えたデザイン。</p>
            </div>
          </div>

          {/* 名刺イメージサンプル */}
          <div style={{ background:C.white, border:`2px solid ${C.border}`, overflow:"hidden", transition:"all 0.3s" }}
            onMouseEnter={e => { e.currentTarget.style.borderColor=C.accent; e.currentTarget.style.transform="translateY(-4px)"; e.currentTarget.style.boxShadow="0 12px 32px rgba(0,0,0,0.12)"; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor=C.border; e.currentTarget.style.transform="none"; e.currentTarget.style.boxShadow="none"; }}
          >
            <img src={meishiImg} alt="名刺作成イメージ" style={{ width:"100%", display:"block" }} />
            <div style={{ padding:"1.5rem" }}>
              <div style={{ fontSize:"0.72rem", color:C.textMuted, letterSpacing:"0.2em", marginBottom:"0.5rem" }}>名刺作成</div>
              <h3 style={{ fontSize:"1.1rem", fontFamily:"serif", fontWeight:400, marginBottom:"0.8rem", lineHeight:1.5 }}>あなたの想いをこの一枚に</h3>
              <p style={{ fontSize:"0.88rem", color:C.textMuted, lineHeight:1.8 }}>こだわりの名刺をYOICHIで。お客様のブランドを一枚に凝縮します。</p>
            </div>
          </div>
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
    <div style={{ minHeight:"100vh", background:"#fdf5f0", fontFamily:"'Georgia','Hiragino Mincho ProN',serif", color:"#3a3230" }}>
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
    <div style={{ minHeight:"100vh", background:C.dark, fontFamily:"'Georgia','Hiragino Mincho ProN',serif", color:C.bg }}>
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
  { label:"会社概要", id:"about" },
  { label:"由来", id:"origin" },
  { label:"SNS", id:"sns" },
];

export default function App() {
  const [page, setPage] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [hoveredWork, setHoveredWork] = useState(null);
  const [hoveredSns, setHoveredSns] = useState(null);

  if (page === "portfolio") return <PortfolioPage onBack={() => setPage("home")} />;
  if (page === "samples") return <SamplesPage onBack={() => setPage("home")} />;
  if (page === "meishi") return <MeishiPage onBack={() => setPage("home")} onContact={() => { setPage("home"); setTimeout(() => document.getElementById("contact")?.scrollIntoView({ behavior:"smooth" }), 100); }} />;
  if (page === "package") return <PackagePage onBack={() => setPage("home")} onContact={() => { setPage("home"); setTimeout(() => document.getElementById("contact")?.scrollIntoView({ behavior:"smooth" }), 100); }} />;

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
            <button onClick={() => setPage("portfolio")} style={{ background:"none", border:"none", cursor:"pointer", fontSize:"0.9rem", letterSpacing:"0.12em", color:C.dark, fontFamily:"inherit", transition:"color 0.2s" }} onMouseEnter={e => e.currentTarget.style.color=C.accent} onMouseLeave={e => e.currentTarget.style.color=C.dark}>Portfolio</button>
            <button onClick={() => scrollTo("contact")} style={{ padding:"0.55rem 1.4rem", background:C.primary, color:"#fff", border:"none", cursor:"pointer", letterSpacing:"0.12em", fontSize:"0.88rem", fontFamily:"inherit", transition:"background 0.2s" }} onMouseEnter={e => e.currentTarget.style.background=C.deep} onMouseLeave={e => e.currentTarget.style.background=C.primary}>お問い合わせ</button>
          </div>
          <button className="nav-hamburger" onClick={() => setMenuOpen(!menuOpen)} style={{ background:"none", border:"none", cursor:"pointer" }}>
            {menuOpen ? <IconX /> : <IconMenu />}
          </button>
        </nav>
        {menuOpen && (
          <div style={{ background:C.bg, borderTop:`1px solid ${C.border}`, padding:"1rem 1.5rem" }}>
            {[...navLinks, { label:"Portfolio", id:"portfolio" }, { label:"お問い合わせ", id:"contact" }].map(l => (
              <button key={l.id} onClick={() => l.id==="portfolio"?(setPage("portfolio"),setMenuOpen(false)):scrollTo(l.id)} style={{ display:"block", width:"100%", textAlign:"left", padding:"0.75rem 0", background:"none", border:"none", cursor:"pointer", fontSize:"1rem", letterSpacing:"0.1em", fontFamily:"inherit", color:C.dark, borderBottom:`1px solid ${C.border}` }}>{l.label}</button>
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
                { icon:"🖼️", label:"バナー作成", link:null },
                { icon:"💼", label:"名刺作成", link:"meishi" },
                { icon:"✏️", label:"ロゴ作成", link:null },
                { icon:"📦", label:"パッケージデザイン", link:"package" },
                { icon:"🖥️", label:"UI/UXデザイン", link:null },
                { icon:"🌐", label:"ウェブサイト作成", link:null },
                { icon:"📱", label:"アプリケーション作成", link:null },
                { icon:"📄", label:"テンプレート作成", link:null },
                { icon:"🎁", label:"雑貨デザイン", link:null },
                { icon:"📐", label:"レイアウトデザイン", link:null },
              ].map((item, i) => (
                <div key={i}
                  onClick={() => item.link && setPage(item.link)}
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
            onClick={() => setPage("samples")}
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
            <button onClick={() => setPage("samples")} style={{ padding:"1rem 2.5rem", background:"transparent", color:C.primary, border:`2px solid ${C.primary}`, cursor:"pointer", letterSpacing:"0.12em", fontSize:"0.95rem", fontFamily:"inherit", transition:"all 0.2s", display:"inline-flex", alignItems:"center", gap:"0.5rem" }} onMouseEnter={e => { e.currentTarget.style.background=C.primary; e.currentTarget.style.color="#fff"; }} onMouseLeave={e => { e.currentTarget.style.background="transparent"; e.currentTarget.style.color=C.primary; }}>すべてのサンプルを見る <IconArrowRight /></button>
          </div>
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
              <div style={{ display:"flex", flexDirection:"row", gap:"0.5rem", marginBottom:"1.5rem", alignItems:"center" }}>
                <p style={{ fontSize:"clamp(0.95rem,2vw,1.25rem)", fontFamily:"serif", fontWeight:400, lineHeight:1.8, color:C.dark, whiteSpace:"nowrap", margin:0 }}>発想で豊かに</p>
                <span style={{ color:C.accent, fontSize:"0.8rem" }}>／</span>
                <p style={{ fontSize:"clamp(0.95rem,2vw,1.25rem)", fontFamily:"serif", fontWeight:400, lineHeight:1.8, color:C.dark, whiteSpace:"nowrap", margin:0 }}>創造でユニークに</p>
                <span style={{ color:C.accent, fontSize:"0.8rem" }}>／</span>
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
                ? <button key="portfolio" onClick={() => setPage("portfolio")} style={{ background:"none", border:"none", color:"#9ca3af", cursor:"pointer", fontSize:"0.85rem", letterSpacing:"0.12em", fontFamily:"inherit" }}>Portfolio</button>
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
        .nav-desktop{display:flex;align-items:center;gap:1.8rem;}
        .nav-hamburger{display:none!important;}
        @media(max-width:768px){
          .nav-desktop{display:none!important;}
          .nav-hamburger{display:flex!important;}
          .hero-lockup{flex-direction:column!important;align-items:flex-start!important;gap:1rem!important;}
          .section-inner{padding:3rem 1rem!important;}
          .about-grid{grid-template-columns:1fr!important;gap:2rem!important;}
          .about-logo-box{display:none!important;}
          .contact-grid{grid-template-columns:1fr!important;gap:2rem!important;}
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
        }
      `}</style>
    </div>
  );
}
