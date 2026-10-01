"use client"

import { useState } from "react"

const opportunities = [
  ["الزقازيق · دوام جزئي", "مساعد تسويق رقمي", "استوديو نقطة", "استوديو نقطة يحتاج إلى شخص يحول قصص العلامات المحلية إلى محتوى يصل للناس."],
  ["العاشر من رمضان · تدريب صيفي", "متدرب جودة وتصنيع", "مصنع النور للصناعات", "تجربة عملية داخل خط إنتاج حقيقي، من قراءة معايير الجودة حتى إعداد التقارير."],
  ["الزقازيق · تدريب صيفي", "مطور واجهات مبتدئ", "حلول دلتا الرقمية", "ساهم في بناء أدوات رقمية تخدم الشركات الصغيرة ضمن فريق يشاركك المعرفة."],
]

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  return <div className="site-shell">
    <header className="glass-header"><div className="container header-inner">
      <a className="brand" href="#top"><img src="/logo.jpg" alt="The Missing Piece - Empower Hub" /><span><b>The Missing Piece</b><small>Powered by Empower Hub</small></span></a>
      <nav className={menuOpen ? "nav mobile-open" : "nav"}><a href="#top">الرئيسية</a><a href="#about">عن المبادرة</a><a href="#opportunities">الفرص</a><a href="#how">آلية العمل</a><a href="#join">انضم إلينا</a></nav>
      <div className="header-actions"><span className="availability">● +45 فرصة نشطة هذا الأسبوع</span><a className="button gold" href="#join">ابدأ قصتك</a><button className="menu-button" aria-label="فتح القائمة" onClick={() => setMenuOpen(!menuOpen)}><i/><i/><i/></button></div>
    </div></header>

    <main id="top">
      <section className="hero"><div className="container hero-content"><span className="eyebrow">THE MISSING PIECE / EMPOWER HUB</span><h1>نحن لا نرى المشكلة فقط.<br/><em>نكتشف ما يكمن تحتها.</em></h1><p>نربط طلاب وخريجي الشرقية بفرص محلية حقيقية، ونساعد الشركات على الوصول إلى المواهب الأقرب لفريقها واحتياجها.</p><div className="actions"><a className="button dark" href="#opportunities">استكشف الفرص المتاحة ←</a><a className="button outline" href="#join">سجل اهتمامك</a></div><div className="metrics"><div><b>45+</b><span>شركة ومؤسسة محلية</span></div><div><b>180+</b><span>طالب وخريج بدأوا من هنا</span></div><div><b>2</b><span>مدينتان في قلب الشرقية</span></div></div></div></section>
      <section id="about" className="section"><div className="container"><div className="section-head"><div><span className="eyebrow">THE GAP WE SEE</span><h2>الفرصة موجودة.<br/>لكن الطريق إليها غير واضح.</h2></div><p>بين قاعة المحاضرات وخط الإنتاج، توجد أسئلة كثيرة. نحن نبني الإجابة في مكان واحد.</p></div><div className="two-grid"><article className="glass-card"><span className="number">01</span><h3>على السطح</h3><ul><li>إعلانات كثيرة بلا تفاصيل كافية عن التجربة.</li><li>فرص بعيدة تزيد تكلفة أول خطوة.</li><li>طالب يملك مهارة، لكن لا يملك طريقة لإثباتها.</li></ul></article><article className="dark-card"><span className="number">02</span><h3>ما تحت السطح</h3><ul><li>فرص مرتبطة بمكانك ووقتك وتخصصك.</li><li>ملف مهارات قائم على مشاريع وأدلة حقيقية.</li><li>تواصل مباشر مع شركة تعرف ما تحتاجه.</li></ul></article></div></div></section>
      <section id="opportunities" className="section tinted"><div className="container"><div className="section-head"><div><span className="eyebrow">SELECTED OPPORTUNITIES</span><h2>فرص تستحق<br/>خطوتك الأولى.</h2></div><a className="button outline" href="#join">شاهد كل الفرص</a></div><div className="three-grid">{opportunities.map(([label,title,company,desc]) => <article className="glass-card opportunity" key={title}><span className="eyebrow">{label}</span><h3>{title}</h3><strong>{company}</strong><p>{desc}</p><a href="#join">اعرف التفاصيل <b>←</b></a></article>)}</div></div></section>
      <section id="how" className="section"><div className="container"><div className="section-head"><div><span className="eyebrow">HOW WE MOVE</span><h2>خطوة واضحة<br/>تغيّر شكل البداية.</h2></div><p>من أول تعريف بسيط إلى فرصة تناسبك، نترك لك مساحة الحركة ونزيل ضوضاء الطريق.</p></div><div className="three-grid steps"><article><b>01</b><h3>عرّف نفسك</h3><p>ما الذي تعرفه؟ وما المجال الذي تريد أن تختبره؟</p></article><article><b>02</b><h3>اختر بوعي</h3><p>قارن المكان والمدة والمهارات وما ستخرج به من التجربة.</p></article><article><b>03</b><h3>ابدأ واترك أثرًا</h3><p>تقدم بخطوة حقيقية، وتعلم من تجربة تقودك لما بعدها.</p></article></div></div></section>
      <section id="join" className="section join"><div className="container join-grid"><div><span className="eyebrow">MAKE THE FIRST MOVE</span><h2>قطعتك موجودة.<br/><em>ابدأ بوضعها.</em></h2><p>اترك بياناتك وسنخبرك عندما نفتح فرصة تناسب خطوتك القادمة في الشرقية.</p></div><form className="form glass-card" onSubmit={(e) => {e.preventDefault(); setSubmitted(true)}}><label>الاسم بالكامل<input required placeholder="مثال: سلمى عبد الرحمن" /></label><label>البريد الإلكتروني<input required type="email" placeholder="name@email.com" /></label><label>الجامعة / التخصص أو اسم الشركة<input required placeholder="جامعة الزقازيق - نظم ومعلومات" /></label><button className="button gold" type="submit">{submitted ? "تم تسجيل اهتمامك" : "سجل اهتمامك الآن ←"}</button></form></div></section>
    </main><footer><div className="container footer-inner"><b>The Missing Piece / Empower Hub</b><span>من الشرقية، نكمل الصورة معًا.</span><span>© 2026 جميع الحقوق محفوظة</span></div></footer>
  </div>
}
