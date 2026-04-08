import { getSiteConfig } from '@/configs/sites'
export { generateMetadata } from '../layout'

export default function Resources() {
  const site = getSiteConfig()
  const P = site.primary; const A = site.accent

  const resources = [
    {cat:"Alaska-Specific",items:[
      {name:"AHFC — Alaska Housing Finance Corporation",url:"https://www.ahfc.us",desc:"Official source for First Home, Veterans Mortgage, Supplemental Loan, and energy efficiency programs."},
      {name:"NMLS Consumer Access",url:"https://nmlsconsumeraccess.org",desc:"Verify any Alaska mortgage lender or loan originator. Look up Derek Huit at NMLS #203980."},
      {name:"Alaska Department of Commerce — Mortgage Licensing",url:"https://www.commerce.alaska.gov/web/dbs/ConsumerFinance/MortgageBrokerLendersOriginators.aspx",desc:"Official Alaska mortgage broker and lender licensing database."},
      {name:"Alaska Division of Motor Vehicles (for ID requirements)",url:"https://doa.alaska.gov/dmv",desc:"Required identification documents for Alaska mortgage applications."},
    ]},
    {cat:"VA & Military",items:[
      {name:"VA Home Loans — Official VA Site",url:"https://www.va.gov/housing-assistance/home-loans",desc:"Official VA home loan program information, eligibility, and Certificate of Eligibility (COE) requests."},
      {name:"JBER — Joint Base Elmendorf-Richardson Housing",url:"https://www.jber.jb.mil/Services/Housing",desc:"On-base housing information, waitlists, and off-base housing allowances for JBER military families."},
      {name:"BAH Calculator — DoD",url:"https://www.travel.dod.mil/Allowances/Basic-Allowance-for-Housing",desc:"Official Basic Allowance for Housing calculator for Alaska military locations."},
      {name:"SCRA — Servicemembers Civil Relief Act",url:"https://www.militaryonesource.mil/legal",desc:"Legal protections for active duty servicemembers including mortgage interest rate caps."},
    ]},
    {cat:"Federal Mortgage Programs",items:[
      {name:"FHA — Federal Housing Administration",url:"https://www.hud.gov/buying/loans",desc:"FHA loan program overview, lender lookup, and borrower resources."},
      {name:"USDA Rural Development",url:"https://www.rd.usda.gov/programs-services/single-family-housing-programs",desc:"USDA loan eligibility maps and program details for rural Alaska properties."},
      {name:"CFPB — Consumer Financial Protection Bureau",url:"https://www.consumerfinance.gov/owning-a-home",desc:"Homebuying guides, mortgage explainers, and Know Before You Owe resources."},
      {name:"Fannie Mae — HomeReady Program",url:"https://singlefamily.fanniemae.com/originating-underwriting/mortgage-products/homeready-mortgage",desc:"HomeReady 3% down program for low-to-moderate income buyers. Available in Alaska."},
    ]},
    {cat:"Alaska Real Estate",items:[
      {name:"Alaska MLS — Alaska Multiple Listing Service",url:"https://www.alaskamls.com",desc:"Alaska MLS listings and market data for Anchorage and statewide Alaska."},
      {name:"Alaska Association of Realtors",url:"https://www.alaskarealtors.com",desc:"Find a licensed Alaska real estate agent. Market reports and statistics."},
      {name:"Municipality of Anchorage — Property Search",url:"https://www.muni.org/Departments/finance/Pages/Assessment_PropertySearch.aspx",desc:"Anchorage property assessments, tax records, and parcel information."},
      {name:"Mat-Su Borough — Property Records",url:"https://www.matsugov.us/community-development/property-records",desc:"Wasilla and Palmer area property records, assessments, and zoning information."},
    ]},
  ]

  return (
    <main style={{minHeight:'100vh',fontFamily:'system-ui,sans-serif',background:'#F9FAFB'}}>
      <nav style={{background:'#fff',borderBottom:'1px solid #F3F4F6',padding:'12px 20px',display:'flex',alignItems:'center',justifyContent:'space-between',position:'sticky',top:0,zIndex:40,boxShadow:'0 1px 4px rgba(0,0,0,.06)'}}>
        <div style={{display:'flex',alignItems:'center',gap:10}}>
          <div style={{width:32,height:32,borderRadius:8,background:P,display:'flex',alignItems:'center',justifyContent:'center'}}><span style={{color:'#fff',fontSize:10,fontWeight:800}}>AK</span></div>
          <div><div style={{fontWeight:800,color:'#111827',fontSize:14,lineHeight:1}}>{site.shortName}</div><div style={{fontSize:10,color:'#6B7280'}}>{site.tagline}</div></div>
        </div>
        <a href={site.ctaHref} target="_blank" rel="noopener noreferrer" style={{background:P,color:'#fff',fontSize:12,fontWeight:700,padding:'8px 16px',borderRadius:8,textDecoration:'none'}}>Apply Now →</a>
      </nav>

      <section style={{background:`linear-gradient(135deg,${P} 0%,#0a1428 100%)`,color:'#fff',padding:'48px 20px 40px',textAlign:'center'}}>
        <div style={{maxWidth:640,margin:'0 auto'}}>
          <h1 style={{fontSize:'clamp(1.8rem,4vw,2.6rem)',fontWeight:800,lineHeight:1.15,marginBottom:12}}>Alaska Mortgage Resources</h1>
          <p style={{color:'rgba(255,255,255,.78)',fontSize:'clamp(14px,2vw,16px)',lineHeight:1.65,fontWeight:300}}>Every official resource Alaska homebuyers, veterans, and investors need — curated by Derek Huit with 18+ years of Alaska mortgage experience.</p>
        </div>
      </section>

      <section style={{padding:'48px 20px',maxWidth:1100,margin:'0 auto'}}>
        {resources.map(cat=>(
          <div key={cat.cat} style={{marginBottom:48}}>
            <h2 style={{fontSize:'1.2rem',fontWeight:800,color:'#111827',marginBottom:4,display:'flex',alignItems:'center',gap:10}}>
              <span style={{width:4,height:20,background:A,borderRadius:2,display:'inline-block'}}></span>
              {cat.cat}
            </h2>
            <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(280px,1fr))',gap:14,marginTop:16}}>
              {cat.items.map(item=>(
                <a key={item.name} href={item.url} target="_blank" rel="noopener noreferrer"
                  style={{background:'#fff',border:'1px solid #E5E7EB',borderRadius:8,padding:'16px 18px',textDecoration:'none',transition:'all .2s',display:'block'}}>
                  <div style={{fontWeight:700,color:P,fontSize:14,marginBottom:6,lineHeight:1.3}}>{item.name} ↗</div>
                  <div style={{fontSize:13,color:'#6B7280',lineHeight:1.55}}>{item.desc}</div>
                </a>
              ))}
            </div>
          </div>
        ))}
      </section>

      <section style={{background:`${P}08`,borderTop:`1px solid ${P}22`,padding:'40px 20px',textAlign:'center'}}>
        <div style={{maxWidth:600,margin:'0 auto'}}>
          <h2 style={{fontSize:'1.4rem',fontWeight:800,color:'#111827',marginBottom:10}}>Have Questions? Call Derek Directly.</h2>
          <p style={{color:'#6B7280',marginBottom:20,lineHeight:1.65,fontSize:14}}>18+ years Alaska experience. I explain every program, answer every question, and give you straight advice on what works for your situation.</p>
          <div style={{display:'flex',gap:12,justifyContent:'center',flexWrap:'wrap' as const}}>
            <a href="tel:9072449368" style={{background:P,color:'#fff',fontWeight:700,padding:'12px 24px',borderRadius:8,textDecoration:'none',fontSize:14}}>(907) 244-9368</a>
            <a href={site.ctaHref} target="_blank" rel="noopener noreferrer" style={{border:`1px solid ${P}`,color:P,fontWeight:600,padding:'12px 24px',borderRadius:8,textDecoration:'none',fontSize:14}}>{site.ctaLabel}</a>
          </div>
        </div>
      </section>

      <div style={{background:'#F9FAFB',borderTop:'1px solid #E5E7EB',padding:'16px 20px',textAlign:'center'}}>
        <div style={{display:'flex',gap:16,justifyContent:'center',flexWrap:'wrap' as const,marginBottom:8}}>
          <a href="/" style={{color:P,textDecoration:'none',fontSize:13,fontWeight:600}}>Home</a>
          <a href="/loan-programs" style={{color:'#6B7280',textDecoration:'none',fontSize:13}}>Loan Programs</a>
          <a href="/about" style={{color:'#6B7280',textDecoration:'none',fontSize:13}}>About Derek</a>
          <a href="/apply" style={{color:'#6B7280',textDecoration:'none',fontSize:13}}>Apply</a>
        </div>
        <p style={{fontSize:11,color:'#9CA3AF',lineHeight:1.6}}>Derek Huit &middot; NMLS #203980 &middot; Cardinal Financial, NMLS #66247 &middot; Equal Housing Lender &middot; Licensed in Alaska</p>
      </div>
    </main>
  )
}
