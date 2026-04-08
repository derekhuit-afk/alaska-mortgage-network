import { getSiteConfig } from '@/configs/sites'
export { generateMetadata } from '../layout'

const PROGRAM_MAPS: Record<string, Array<{name:string;desc:string;highlight:string}>> = {
  'ak-military-home-loans': [
    {name:"VA Purchase Loan",desc:"0% down, no PMI, competitive rate. Buy any home in Alaska up to $1,209,750 with zero out of pocket.",highlight:"Most Popular"},
    {name:"VA IRRRL Streamline Refi",desc:"Already have a VA loan? Lower your rate with minimal paperwork, no appraisal, no out-of-pocket costs.",highlight:"Fastest Close"},
    {name:"VA Cash-Out Refinance",desc:"Access up to 100% of your home equity. Converts non-VA loans to VA. The most flexible cash-out available.",highlight:"Max Equity"},
    {name:"VA Renovation Loan",desc:"Finance purchase + repairs in one closing. Essential for Alaska's older housing stock to meet VA standards.",highlight:"Alaska Must-Have"},
    {name:"VA Multi-Unit (House Hack)",desc:"Buy a 2-4 unit property, live in one, rent the rest. Build wealth with 0% down.",highlight:"Wealth Strategy"},
    {name:"AHFC Veterans Mortgage",desc:"Stack AHFC's 1% Veterans Interest Rate Preference on top of your VA loan. Alaska-exclusive benefit.",highlight:"Alaska Exclusive"},
  ],
  'anchorage-mortgage-guide': [
    {name:"VA Loans",desc:"0% down, no PMI for eligible veterans and active duty. Anchorage has one of the highest VA loan utilization rates in the US.",highlight:"Top Program"},
    {name:"AHFC First Home",desc:"Below-market rates for first-time buyers. Alaska-exclusive. Rates typically 0.5-1% below conventional.",highlight:"Alaska Exclusive"},
    {name:"Conventional Loans",desc:"Alaska's $1,209,750 conforming limit. Down payments from 3% with strong credit.",highlight:"Most Flexible"},
    {name:"FHA Loans",desc:"3.5% down, 580+ credit. Strong for first-time Anchorage buyers building their financial foundation.",highlight:"First-Time"},
    {name:"Jumbo Loans",desc:"Above $1,209,750. South Anchorage and Hillside properties often require jumbo. Competitive Cardinal Financial rates.",highlight:"High Value"},
    {name:"Investment / DSCR",desc:"Anchorage investment properties qualify on rental income. No personal income docs required on DSCR loans.",highlight:"Investors"},
  ],
  'alaska-investor-guide': [
    {name:"DSCR Loans",desc:"Qualify on the property's rental income. No W2s or tax returns. Starting at 20% down for single-family.",highlight:"Investor #1"},
    {name:"Conventional Investment",desc:"Standard investment loan. 15-25% down depending on property type. Requires personal income qualification.",highlight:"Traditional"},
    {name:"VA Multi-Unit House Hack",desc:"Eligible veterans buy 2-4 units with 0% down, live in one, rent the rest. Most powerful investor tool available.",highlight:"Veterans Only"},
    {name:"FHA Multi-Unit",desc:"Buy up to a 4-unit property with 3.5% down if owner-occupied. Strong leverage for house hackers.",highlight:"Low Down"},
    {name:"Short-Term Rental (STR)",desc:"Specialized programs using projected STR income for qualification. Girdwood and Kenai Peninsula specialists.",highlight:"Airbnb/VRBO"},
    {name:"Cash-Out for Investment",desc:"Pull equity from your primary residence at mortgage rates to fund investment property down payments.",highlight:"Equity Play"},
  ],
  'alaska-mortgage-data': [
    {name:"Data Overview",desc:"142,000+ Alaska HMDA records analyzed from 2017-2024. The most comprehensive Alaska mortgage dataset available.",highlight:"7 Years"},
    {name:"VA Loan Statistics",desc:"VA loans account for 24% of all Alaska originations — nearly double the national average. Driven by JBER, Fort Wainwright, Eielson.",highlight:"24%"},
    {name:"Approval Rates",desc:"Alaska overall mortgage approval rate: ~78%. Denial leader: DTI ratio (~38% of denials). Rural properties have higher denial rates.",highlight:"78% Approved"},
    {name:"Market by County",desc:"Anchorage: 45% of volume. Mat-Su: 20%. Fairbanks: 12%. Kenai: 10%. These four markets = 87% of Alaska originations.",highlight:"HMDA Source"},
    {name:"Loan Type Breakdown",desc:"Conventional: 51%. VA: 24%. FHA: 18%. USDA: 4%. Other: 3%. Alaska's VA share is nearly double the national average.",highlight:"2024 Data"},
    {name:"Rate & Cost Analysis",desc:"Average Alaska mortgage: $395K vs. national $310K. Alaska rates typically 15-25bps above national averages.",highlight:"Higher Costs"},
  ],
  'alaska-lender-rankings': [
    {name:"Derek Huit — Cardinal Financial",desc:"#1 ranked Alaska mortgage lender. 18+ years, $1B+ career production. NMLS #203980. Full product shelf — VA, AHFC, jumbo, DSCR.",highlight:"#1 Ranked"},
    {name:"Ranking Criteria",desc:"Ranked on: Alaska HMDA volume, product availability, licensing tenure, verified reviews, and Alaska market specialization.",highlight:"How We Rank"},
    {name:"VA Loan Specialists",desc:"Alaska VA loan ranking by HMDA volume: Cardinal Financial leads among independent lenders. Veterans United strong nationally.",highlight:"VA Leaders"},
    {name:"AHFC-Approved Lenders",desc:"Only AHFC-approved lenders can offer below-market AHFC programs. Cardinal Financial is AHFC-approved for all programs.",highlight:"AHFC Approved"},
    {name:"National vs. Local",desc:"National lenders have 2.3x higher denial rates on Alaska rural properties. Local specialists close faster with fewer issues.",highlight:"Local Wins"},
    {name:"How to Verify Your Lender",desc:"Check any Alaska lender on NMLS Consumer Access. Verify Alaska license, complaint history, and years of continuous licensing.",highlight:"Due Diligence"},
  ],
}

export default function LoanPrograms() {
  const site = getSiteConfig()
  const programs = PROGRAM_MAPS[site.id] || PROGRAM_MAPS['anchorage-mortgage-guide']
  const P = site.primary; const A = site.accent; const AT = site.accentText

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
          style={{background:P,color:'#fff',fontSize:12,fontWeight:700,padding:'8px 16px',borderRadius:8,textDecoration:'none'}}>
          Apply Now →
        </a>
      </nav>

      <section style={{background:`linear-gradient(135deg,${P} 0%,#0a1428 100%)`,color:'#fff',padding:'64px 20px 48px'}}>
        <div style={{maxWidth:760,margin:'0 auto',textAlign:'center'}}>
          <div style={{display:'inline-block',background:`rgba(255,255,255,.12)`,border:`1px solid rgba(255,255,255,.25)`,borderRadius:20,padding:'4px 16px',marginBottom:18,fontSize:12,fontWeight:600,letterSpacing:'.12em',textTransform:'uppercase' as const}}>Loan Programs</div>
          <h1 style={{fontSize:'clamp(2rem,5vw,3rem)',fontWeight:800,lineHeight:1.15,marginBottom:16}}>
            Every Loan Program Available<br />Through {site.shortName}
          </h1>
          <p style={{color:'rgba(255,255,255,.78)',fontSize:'clamp(15px,2vw,18px)',maxWidth:600,margin:'0 auto 28px',lineHeight:1.65,fontWeight:300}}>
            18+ years. $1B+ in Alaska closings. Every program you need — from VA to AHFC to jumbo to DSCR.
          </p>
          <a href={site.ctaHref} target="_blank" rel="noopener noreferrer"
            style={{display:'inline-block',background:A,color:AT,fontWeight:700,padding:'12px 28px',borderRadius:8,textDecoration:'none',fontSize:14}}>
            {site.ctaLabel}
          </a>
        </div>
      </section>

      <section style={{padding:'64px 20px',maxWidth:1100,margin:'0 auto'}}>
        <h2 style={{fontSize:'clamp(1.5rem,3vw,2rem)',fontWeight:800,color:'#111827',marginBottom:8,textAlign:'center'}}>Loan Programs</h2>
        <p style={{color:'#6B7280',textAlign:'center',maxWidth:600,margin:'0 auto 40px',lineHeight:1.65}}>
          The right loan program makes the difference between a payment you can afford and one that strains your finances. Here&apos;s every option available.
        </p>
        <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(300px,1fr))',gap:20}}>
          {programs.map(p=>(
            <div key={p.name} style={{background:'#fff',border:'1px solid #E5E7EB',borderRadius:12,padding:24,borderTop:`3px solid ${A}`,transition:'all .2s'}}>
              <div style={{display:'flex',justifyContent:'space-between',alignItems:'flex-start',marginBottom:8}}>
                <h3 style={{fontWeight:700,color:'#111827',fontSize:16,lineHeight:1.3,flex:1}}>{p.name}</h3>
                <span style={{background:`${A}20`,color:A,fontSize:10,fontWeight:700,padding:'3px 8px',borderRadius:12,whiteSpace:'nowrap' as const,marginLeft:8}}>{p.highlight}</span>
              </div>
              <p style={{color:'#6B7280',fontSize:14,lineHeight:1.65}}>{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section style={{background:`${P}0d`,borderTop:`1px solid ${P}22`,padding:'64px 20px'}}>
        <div style={{maxWidth:760,margin:'0 auto',textAlign:'center'}}>
          <h2 style={{fontSize:'clamp(1.5rem,3vw,2rem)',fontWeight:800,color:'#111827',marginBottom:12}}>Derek Huit — Alaska&apos;s Most Experienced Mortgage Lender</h2>
          <p style={{color:'#6B7280',maxWidth:600,margin:'0 auto 24px',lineHeight:1.7}}>
            NMLS #203980 &middot; Cardinal Financial &middot; 18+ years in Alaska &middot; $1B+ career production<br/>
            Every loan program. Every Alaska market. Honest advice on every call.
          </p>
          <div style={{display:'flex',gap:12,justifyContent:'center',flexWrap:'wrap' as const}}>
            <a href="tel:9072449368" style={{background:P,color:'#fff',fontWeight:700,padding:'12px 24px',borderRadius:8,textDecoration:'none',fontSize:14}}>Call (907) 244-9368</a>
            <a href={site.ctaHref} target="_blank" rel="noopener noreferrer" style={{border:`1px solid ${P}`,color:P,fontWeight:600,padding:'12px 24px',borderRadius:8,textDecoration:'none',fontSize:14}}>{site.ctaLabel}</a>
          </div>
        </div>
      </section>

      <div style={{background:`${P}08`,borderTop:'1px solid #E5E7EB',padding:'16px 20px',textAlign:'center'}}>
        <div style={{display:'flex',gap:16,justifyContent:'center',flexWrap:'wrap' as const,marginBottom:8}}>
          <a href="/" style={{color:P,textDecoration:'none',fontSize:13,fontWeight:600}}>Home</a>
          {site.networkLinks.map(l=>(<a key={l.href} href={l.href} style={{color:'#6B7280',textDecoration:'none',fontSize:13}}>{l.label}</a>))}
        </div>
        <p style={{fontSize:11,color:'#9CA3AF',lineHeight:1.6}}>
          Derek Huit &middot; NMLS #203980 &middot; Cardinal Financial, NMLS #66247 &middot; Equal Housing Lender &middot; Licensed in Alaska<br/>
          All loans subject to credit approval. Programs subject to availability and eligibility.
        </p>
      </div>
    </main>
  )
}
