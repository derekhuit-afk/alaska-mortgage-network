import { getSiteConfig } from '@/configs/sites'
import LeadForm from '@/components/LeadForm'
export { generateMetadata } from '../layout'

export default function Apply() {
  const site = getSiteConfig()
  const P = site.primary; const A = site.accent; const AT = site.accentText
  const steps = [
    {n:"1",title:"Submit Your Info",body:"Fill out the form on this page. Takes 2 minutes. No hard credit pull yet — just the basics to get started."},
    {n:"2",title:"Same-Day Response",body:"Derek calls or texts within hours. He reviews your situation and tells you exactly what you qualify for."},
    {n:"3",title:"Pre-Approval in 24hrs",body:"Once you decide to move forward, your pre-approval letter is ready in 24 hours — strong enough to compete in Alaska's market."},
    {n:"4",title:"Find Your Home",body:"Shop with confidence knowing exactly what you can buy. Derek works alongside your agent throughout the process."},
    {n:"5",title:"Close in 21-30 Days",body:"Cardinal Financial's in-house underwriting moves fast. Derek's target: 21-30 days from complete application to keys."},
  ]
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
        <div style={{maxWidth:640,margin:'0 auto'}}>
          <h1 style={{fontSize:'clamp(1.8rem,4vw,2.6rem)',fontWeight:800,lineHeight:1.15,marginBottom:12}}>Get Pre-Approved for an Alaska Mortgage</h1>
          <p style={{color:'rgba(255,255,255,.78)',fontSize:'clamp(14px,2vw,16px)',lineHeight:1.65,fontWeight:300}}>Same-day response. Pre-approval in 24 hours. 18+ years Alaska experience. Zero pressure.</p>
        </div>
      </section>

      <section style={{padding:'48px 20px',maxWidth:1000,margin:'0 auto',display:'grid',gridTemplateColumns:'1fr 1fr',gap:48,alignItems:'start'}}>
        <div>
          <h2 style={{fontSize:'1.3rem',fontWeight:800,color:'#111827',marginBottom:8}}>Start Your Application</h2>
          <p style={{color:'#6B7280',fontSize:14,lineHeight:1.65,marginBottom:24}}>Fill out the form and Derek will reach out same day. No hard credit pull until you&apos;re ready to move forward.</p>
          <LeadForm primary={P} accent={A} accentText={AT} siteId={site.id} />
          <p style={{fontSize:11,color:'#9CA3AF',marginTop:12,lineHeight:1.5}}>Or call directly: <a href="tel:9072449368" style={{color:P,textDecoration:'none',fontWeight:700}}>(907) 244-9368</a>. Derek Huit &middot; NMLS #203980 &middot; Cardinal Financial, NMLS #66247 &middot; Equal Housing Lender</p>
        </div>
        <div>
          <h2 style={{fontSize:'1.3rem',fontWeight:800,color:'#111827',marginBottom:20}}>What Happens Next</h2>
          <div style={{display:'flex',flexDirection:'column' as const,gap:0}}>
            {steps.map((s,i)=>(
              <div key={s.n} style={{display:'grid',gridTemplateColumns:'48px 1fr',gap:12,paddingBottom:i<steps.length-1?20:0,marginBottom:i<steps.length-1?20:0,borderBottom:i<steps.length-1?'1px solid #F3F4F6':'none'}}>
                <div style={{width:40,height:40,borderRadius:'50%',background:P,display:'flex',alignItems:'center',justifyContent:'center',fontWeight:800,color:'#fff',fontSize:16,flexShrink:0}}>{s.n}</div>
                <div><div style={{fontWeight:700,color:'#111827',fontSize:14,marginBottom:4}}>{s.title}</div><div style={{fontSize:13,color:'#6B7280',lineHeight:1.55}}>{s.body}</div></div>
              </div>
            ))}
          </div>
          <div style={{background:`${P}0d`,border:`1px solid ${P}22`,borderRadius:10,padding:20,marginTop:24}}>
            <div style={{fontWeight:700,color:'#111827',fontSize:14,marginBottom:6}}>Why Derek Huit?</div>
            <div style={{fontSize:13,color:'#6B7280',lineHeight:1.65}}>18+ years &middot; $1B+ closed &middot; VA specialist &middot; AHFC expert &middot; Cardinal Financial product depth &middot; Alaska-only experience &middot; Honest advice every call</div>
          </div>
        </div>
      </section>

      <div style={{background:'#F3F4F6',borderTop:'1px solid #E5E7EB',padding:'16px 20px',textAlign:'center'}}>
        <div style={{display:'flex',gap:16,justifyContent:'center',flexWrap:'wrap' as const,marginBottom:8}}>
          <a href="/" style={{color:P,textDecoration:'none',fontSize:13,fontWeight:600}}>Home</a>
          <a href="/loan-programs" style={{color:'#6B7280',textDecoration:'none',fontSize:13}}>Loan Programs</a>
          <a href="/about" style={{color:'#6B7280',textDecoration:'none',fontSize:13}}>About Derek</a>
          {site.networkLinks.slice(0,2).map(l=>(<a key={l.href} href={l.href} style={{color:'#6B7280',textDecoration:'none',fontSize:13}}>{l.label}</a>))}
        </div>
        <p style={{fontSize:11,color:'#9CA3AF',lineHeight:1.6}}>Derek Huit &middot; NMLS #203980 &middot; Cardinal Financial, NMLS #66247 &middot; Equal Housing Lender &middot; Licensed in Alaska. All loans subject to credit approval.</p>
      </div>
    </main>
  )
}
