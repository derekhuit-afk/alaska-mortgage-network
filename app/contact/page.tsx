import { getSiteConfig } from '@/configs/sites'
import LeadForm from '@/components/LeadForm'
export { generateMetadata } from '../layout'

export default function Contact() {
  const site = getSiteConfig()
  const P = site.primary; const A = site.accent; const AT = site.accentText
  return (
    <main style={{minHeight:'100vh',fontFamily:'system-ui,sans-serif',background:'#F9FAFB'}}>
      <nav style={{background:'#fff',borderBottom:'1px solid #F3F4F6',padding:'12px 20px',display:'flex',alignItems:'center',justifyContent:'space-between',position:'sticky',top:0,zIndex:40,boxShadow:'0 1px 4px rgba(0,0,0,.06)'}}>
        <div style={{display:'flex',alignItems:'center',gap:10}}>
          <div style={{width:32,height:32,borderRadius:8,background:P,display:'flex',alignItems:'center',justifyContent:'center'}}><span style={{color:'#fff',fontSize:10,fontWeight:800}}>AK</span></div>
          <div><div style={{fontWeight:800,color:'#111827',fontSize:14,lineHeight:1}}>{site.shortName}</div><div style={{fontSize:10,color:'#6B7280'}}>{site.tagline}</div></div>
        </div>
        <a href="tel:9072449368" style={{background:P,color:'#fff',fontSize:12,fontWeight:700,padding:'8px 16px',borderRadius:8,textDecoration:'none'}}>(907) 244-9368</a>
      </nav>

      <section style={{background:`linear-gradient(135deg,${P} 0%,#0a1428 100%)`,color:'#fff',padding:'48px 20px 40px',textAlign:'center'}}>
        <div style={{maxWidth:600,margin:'0 auto'}}>
          <h1 style={{fontSize:'clamp(1.8rem,4vw,2.6rem)',fontWeight:800,lineHeight:1.15,marginBottom:12}}>Contact Derek Huit</h1>
          <p style={{color:'rgba(255,255,255,.78)',fontSize:'clamp(14px,2vw,16px)',lineHeight:1.65,fontWeight:300}}>Alaska mortgage questions, pre-approvals, rate quotes, or just straight advice. Same-day response guaranteed.</p>
        </div>
      </section>

      <section style={{padding:'48px 20px',maxWidth:900,margin:'0 auto',display:'grid',gridTemplateColumns:'1fr 1fr',gap:48,alignItems:'start'}}>
        <div>
          <h2 style={{fontSize:'1.3rem',fontWeight:800,color:'#111827',marginBottom:20}}>Reach Derek Directly</h2>
          <div style={{display:'flex',flexDirection:'column' as const,gap:16,marginBottom:32}}>
            <a href="tel:9072449368" style={{background:P,color:'#fff',fontWeight:700,padding:'16px 20px',borderRadius:10,textDecoration:'none',display:'flex',alignItems:'center',gap:12,fontSize:16}}>
              <span style={{fontSize:22}}>📞</span>
              <div><div style={{fontSize:18,fontWeight:800}}>(907) 244-9368</div><div style={{fontSize:12,opacity:.85}}>Call or text — same-day response</div></div>
            </a>
            <a href="mailto:derekhuit@gmail.com" style={{background:'#fff',border:'1px solid #E5E7EB',color:'#111827',fontWeight:600,padding:'14px 20px',borderRadius:10,textDecoration:'none',display:'flex',alignItems:'center',gap:12,fontSize:14}}>
              <span style={{fontSize:20}}>✉️</span>
              <div><div style={{fontWeight:700}}>derekhuit@gmail.com</div><div style={{fontSize:12,color:'#6B7280'}}>Email for detailed questions</div></div>
            </a>
            <a href={site.ctaHref} target="_blank" rel="noopener noreferrer" style={{background:A,color:AT,fontWeight:700,padding:'14px 20px',borderRadius:10,textDecoration:'none',display:'flex',alignItems:'center',gap:12,fontSize:14}}>
              <span style={{fontSize:20}}>🏡</span>
              <div><div style={{fontWeight:700}}>{site.ctaLabel}</div><div style={{fontSize:12,opacity:.85}}>Secure online application</div></div>
            </a>
          </div>
          <div style={{background:`${P}0d`,border:`1px solid ${P}22`,borderRadius:10,padding:20}}>
            <div style={{fontWeight:800,color:'#111827',fontSize:14,marginBottom:8}}>Derek Huit &middot; NMLS #203980</div>
            <div style={{fontSize:13,color:'#6B7280',lineHeight:1.65}}>
              Cardinal Financial Company, NMLS #66247<br/>
              VP Retail Market Leader<br/>
              Anchorage, Alaska<br/>
              18+ Years &middot; $1B+ Career Production<br/>
              VA &middot; AHFC &middot; Conventional &middot; Jumbo &middot; DSCR
            </div>
          </div>
        </div>
        <div>
          <h2 style={{fontSize:'1.3rem',fontWeight:800,color:'#111827',marginBottom:8}}>Send a Message</h2>
          <p style={{color:'#6B7280',fontSize:13,marginBottom:20,lineHeight:1.55}}>Fill out the form and Derek responds the same day with answers to your questions and your pre-approval options.</p>
          <LeadForm primary={P} accent={A} accentText={AT} siteId={site.id} />
        </div>
      </section>

      <div style={{background:'#F3F4F6',borderTop:'1px solid #E5E7EB',padding:'16px 20px',textAlign:'center'}}>
        <div style={{display:'flex',gap:16,justifyContent:'center',flexWrap:'wrap' as const,marginBottom:8}}>
          <a href="/" style={{color:P,textDecoration:'none',fontSize:13,fontWeight:600}}>Home</a>
          <a href="/loan-programs" style={{color:'#6B7280',textDecoration:'none',fontSize:13}}>Loan Programs</a>
          <a href="/about" style={{color:'#6B7280',textDecoration:'none',fontSize:13}}>About</a>
          <a href="/apply" style={{color:'#6B7280',textDecoration:'none',fontSize:13}}>Apply</a>
          <a href="/resources" style={{color:'#6B7280',textDecoration:'none',fontSize:13}}>Resources</a>
        </div>
        <p style={{fontSize:11,color:'#9CA3AF',lineHeight:1.6}}>Derek Huit &middot; NMLS #203980 &middot; Cardinal Financial, NMLS #66247 &middot; Equal Housing Lender &middot; Licensed in Alaska</p>
      </div>
    </main>
  )
}
