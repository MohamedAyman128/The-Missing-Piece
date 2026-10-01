"use client"

import { useState } from "react"

const links = [
  ["الرئيسية", "/"],
  ["عن المبادرة", "/about"],
  ["الفرص", "/opportunities"],
  ["آلية العمل", "/how"],
  ["انضم إلينا", "/join"],
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)
  return <header className="glass-header"><div className="container header-inner">
    <a className="brand" href="/"><img src="/logo.jpg" alt="The Missing Piece - Empower Hub" /><span><b>The Missing Piece</b><small>Powered by Empower Hub</small></span></a>
    <nav className={open ? "nav mobile-open" : "nav"}>{links.map(([label, href]) => <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>)}</nav>
    <div className="header-actions"><span className="availability">● +45 فرصة نشطة هذا الأسبوع</span><a className="button gold" href="/join">ابدأ قصتك</a><button className="menu-button" aria-label="فتح القائمة" aria-expanded={open} onClick={() => setOpen(!open)}><i/><i/><i/></button></div>
  </div></header>
}

export function SiteFooter() { return <footer><div className="container footer-inner"><b>The Missing Piece / Empower Hub</b><span>من الشرقية، نكمل الصورة معًا.</span><span>© 2026 جميع الحقوق محفوظة</span></div></footer> }

export function PageShell({ children }: { children: React.ReactNode }) { return <div className="site-shell"><SiteHeader/><main>{children}</main><SiteFooter/></div> }

export function PageIntro({ eyebrow, title, children }: { eyebrow: string; title: React.ReactNode; children: React.ReactNode }) { return <section className="page-intro"><div className="container"><span className="eyebrow">{eyebrow}</span><h1>{title}</h1><p>{children}</p></div></section> }

export function OpportunityCard({ label, title, company, desc }: { label: string; title: string; company: string; desc: string }) { return <article className="glass-card opportunity"><span className="eyebrow">{label}</span><h3>{title}</h3><strong>{company}</strong><p>{desc}</p><a href="/join">اعرف التفاصيل <b>←</b></a></article> }
