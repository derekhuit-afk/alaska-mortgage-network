import { getSiteConfig } from '@/configs/sites'
export { generateMetadata } from '../layout'

export default function About() {
  const site = getSiteConfig()
  const P = site.primary; const A = site.accent; const AT = site.accentText
  const creds = [
    {label:"NMLS License",value:"#203980",note:"Active — verify at NMLS Consumer Access"},
    {label:"Alaska Experience",value:"18+ Years",note:"Continuous Alaska origination since 2006"},
    {label:"Career Production",value:"$1B+",note:"Over $1 billion in career loan closings"},
    {label:"Employer",value:"Cardinal Financial",note:"NMLS #66247 — Top 10 independent lender"},
    {label:"Specialties",value:"VA, AHFC, Jumbo, DSCR",note:"Full product shelf across all Alaska programs"},
    {label:"License States",value:"Alaska + Others",note:"Licensed in Alaska and additional states"},
  ]
  const timeline = [
    {year:"2006",event:"Began mortgage career in Anchorage, Alaska"},
    {year:"2008-2015",event:"Senior Mortgage Loan Originator, Global Credit Union"},
    {year:"2015+",event:"Branch Manager across multiple Alaska operations"},
    {year:"2024",event:"Joined Cardinal Financial as VP Retail Market Leader"},
    {year:"2025",event:"18+ years, $1B+ career production, Founder Huit.AI"},
  ]
  return (
    <main style={{minHeight:'100vh',fontFamily:'system-ui,sans-serif',background:'#F9FAFB'}}>
      <nav style={{background:'#fff',borderBottom:'1px solid #F3F4F6',padding:'12px 20px',display:'flex',alignItems:'center',justifyContent:'space-between',position:'sticky',top:0,zIndex:40,boxShadow:'0 1px 4px rgba(0,0,0,.06)'}}>
        <div style={{display:'flex',alignItems:'center',gap:10}}>
          <div style={{width:32,height:32,borderRadius:8,background:P,display:'flex',alignItems:'center',justifyContent:'center'}}>
            <span style={{color:'#fff',fontSize:10,fontWeight:800}}>AK</span>
          </div>
          <div>
            <div style={{fontWeight:800,color:'#111827',fontSize:14,lineHeight:1}}>{site.shortName}</div>
            <div style={{fontSize:10,color:'#6B7280'}}>{site.tagline}</div>
          </div>
        </div>
        <a href={site.ctaHref} target="_blank" rel="noopener noreferrer"
          style={{background:P,color:'#fff',fontSize:12,fontWeight:700,padding:'8px 16px',borderRadius:8,textDecoration:'none'}}>Apply Now →</a>
      </nav>

      <section style={{background:`linear-gradient(135deg,${P} 0%,#0a1428 100%)`,color:'#fff',padding:'64px 20px 48px',textAlign:'center'}}>
        <div style={{maxWidth:760,margin:'0 auto'}}>
          <div style={{width:80,height:80,borderRadius:'50%',background:'rgba(255,255,255,.12)',border:'2px solid rgba(255,255,255,.3)',display:'flex',alignItems:'center',justifyContent:'center',margin:'0 auto 20px',fontSize:28}}>DH</div>
          <h1 style={{fontSize:'clamp(2rem,4vw,2.8rem)',fontWeight:800,lineHeight:1.15,marginBottom:12}}>Derek Huit</h1>
          <p style={{color:'rgba(255,255,255,.8)',fontSize:16,marginBottom:6}}>VP Retail Market Leader &middot; Cardinal Financial &middot; NMLS #203980</p>
          <p style={{color:'rgba(255,255,255,.6)',fontSize:14}}>18+ Years in Alaska &middot; $1B+ Career Production &middot; Built from Alaska</p>
        </div>
      </section>

      <section style={{padding:'64px 20px',maxWidth:1000,margin:'0 auto'}}>
        <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:48,alignItems:'start'}}>
          <div>
            <h2 style={{fontSize:'clamp(1.5rem,3vw,2rem)',fontWeight:800,color:'#111827',marginBottom:16}}>About Derek</h2>
            <p style={{color:'#6B7280',lineHeight:1.78,marginBottom:16,fontSize:15}}>
              I&apos;ve been closing mortgages in Alaska since 2006. Nearly two decades in this market means I&apos;ve seen every scenario Alaska can throw at a loan — oil boom rate spikes, military base expansions, rural property challenges, and the seasonal timing that makes Alaska real estate unlike anywhere else in the country.
            </p>
            <p style={{color:'#6B7280',lineHeight:1.78,marginBottom:16,fontSize:15}}>
              I specialize in VA loans for Alaska&apos;s large military population, AHFC programs for first-time buyers and veterans, jumbo loans for higher-value Alaska properties, and DSCR loans for real estate investors who want to build portfolios without income documentation headaches.
            </p>
            <p style={{color:'#6B7280',lineHeight:1.78,fontSize:15}}>
              At Cardinal Financial, I have access to every loan program available in Alaska — backed by one of the nation&apos;s top independent mortgage lenders. My Alaska experience combined with Cardinal Financial&apos;s product depth means I can close loans that other lenders decline or delay.
            </p>
          </div>
          <div>
            <h2 style={{fontSize:'1.2rem',fontWeight:800,color:'#111827',marginBottom:16}}>Credentials</h2>
            <div style={{display:'flex',flexDirection:'column' as const,gap:12,marginBottom:32}}>
              {creds.map(c=>(
                <div key={c.label} style={{background:'#fff',border:'1px solid #E5E7EB',borderRadius:8,padding:'12px 16px',display:'grid',gridTemplateColumns:'1fr auto',gap:8}}>
                  <div>
                    <div style={{fontSize:11,color:'#9CA3AF',textTransform:'uppercase' as const,letterSpacing:'.1em',marginBottom:2}}>{c.label}</div>
                    <div style={{fontWeight:700,color:'#111827',fontSize:15}}>{c.value}</div>
                  </div>
                  <div style={{fontSize:11,color:'#6B7280',textAlign:'right' as const,lineHeight:1.4,maxWidth:140}}>{c.note}</div>
                </div>
              ))}
            </div>
            <h2 style={{fontSize:'1.2rem',fontWeight:800,color:'#111827',marginBottom:16}}>Career Timeline</h2>
            <div style={{display:'flex',flexDirection:'column' as const,gap:0}}>
              {timeline.map((t,i)=>(
                <div key={t.year} style={{display:'grid',gridTemplateColumns:'64px 1fr',gap:12,paddingBottom:i<timeline.length-1?16:0,marginBottom:i<timeline.length-1?16:0,borderBottom:i<timeline.length-1?'1px solid #F3F4F6':'none'}}>
                  <div style={{fontWeight:700,color:P,fontSize:13}}>{t.year}</div>
                  <div style={{fontSize:13,color:'#6B7280',lineHeight:1.5}}>{t.event}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section style={{background:`${P}08`,borderTop:`1px solid ${P}22`,padding:'48px 20px',textAlign:'center'}}>
        <div style={{maxWidth:600,margin:'0 auto'}}>
          <h2 style={{fontSize:'clamp(1.4rem,3vw,2rem)',fontWeight:800,color:'#111827',marginBottom:12}}>Work With Derek</h2>
          <p style={{color:'#6B7280',marginBottom:24,lineHeight:1.7}}>18 years. $1B+ in closings. Honest advice on every call. If it doesn&apos;t make financial sense for you, I&apos;ll tell you that.</p>
          <div style={{display:'flex',gap:12,justifyContent:'center',flexWrap:'wrap' as const}}>
            <a href="tel:9072449368" style={{background:P,color:'#fff',fontWeight:700,padding:'12px 24px',borderRadius:8,textDecoration:'none',fontSize:14}}>Call (907) 244-9368</a>
            <a href={site.ctaHref} target="_blank" rel="noopener noreferrer" style={{border:`1px solid ${P}`,color:P,fontWeight:600,padding:'12px 24px',borderRadius:8,textDecoration:'none',fontSize:14}}>{site.ctaLabel}</a>
          </div>
        </div>
      </section>

      <div style={{background:'#F9FAFB',borderTop:'1px solid #E5E7EB',padding:'16px 20px',textAlign:'center'}}>
        <div style={{display:'flex',gap:16,justifyContent:'center',flexWrap:'wrap' as const,marginBottom:8}}>
          <a href="/" style={{color:P,textDecoration:'none',fontSize:13,fontWeight:600}}>Home</a>
          <a href="/loan-programs" style={{color:'#6B7280',textDecoration:'none',fontSize:13}}>Loan Programs</a>
          {site.networkLinks.map(l=>(<a key={l.href} href={l.href} style={{color:'#6B7280',textDecoration:'none',fontSize:13}}>{l.label}</a>))}
        </div>
        <p style={{fontSize:11,color:'#9CA3AF',lineHeight:1.6}}>Derek Huit &middot; NMLS #203980 &middot; Cardinal Financial, NMLS #66247 &middot; Equal Housing Lender &middot; Licensed in Alaska</p>
      </div>
    </main>
  )
}
