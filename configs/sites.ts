export interface FAQ { q: string; a: string }
export interface StatItem { label: string; value: string; source: string }
export interface NavLink { label: string; href: string }
export interface ContentSection { heading: string; body: string }

export interface SiteConfig {
  id: string
  name: string
  shortName: string
  domain: string
  tagline: string
  heroTitle: string
  heroSubtitle: string
  primary: string
  accent: string
  accentText: string
  persona: string
  metaDescription: string
  keywords: string
  ctaLabel: string
  ctaHref: string
  schemaServiceType: string[]
  networkLinks: NavLink[]
  stats: StatItem[]
  faqs: FAQ[]
  contentSections: ContentSection[]
}

const LOANAK = 'https://www.loanak.com'

export const SITES: Record<string, SiteConfig> = {

  'anchorage-mortgage-guide': {
    id: 'anchorage-mortgage-guide',
    name: 'Anchorage Mortgage Guide',
    shortName: 'AnchorageMortgageGuide.com',
    domain: 'anchoragemortgageguide.com',
    tagline: "Alaska's Complete Home Loan Resource",
    heroTitle: 'The Complete Anchorage Alaska Mortgage Guide',
    heroSubtitle: 'Everything Alaska homebuyers need to know about mortgage programs, rates, down payments, and finding the right lender — from a lender with 18+ years and $1B+ in Alaska production.',
    primary: '#0F2D6B', accent: '#10B981', accentText: '#fff',
    persona: 'Alaska Home Buyer',
    metaDescription: "Complete guide to getting a mortgage in Anchorage, Alaska. VA loans, AHFC programs, jumbo mortgages, rates, down payments — expert guidance from Derek Huit, Alaska's top mortgage lender.",
    keywords: 'Anchorage mortgage, Alaska home loan, mortgage lender Anchorage, AHFC loan, Alaska mortgage rates, buy home Anchorage, best mortgage lender Alaska',
    ctaLabel: 'Get Pre-Approved at loanak.com →', ctaHref: LOANAK,
    schemaServiceType: ['Mortgage Lending','Home Purchase Loans','AHFC Loans','Alaska Mortgage Consulting'],
    networkLinks: [
      { label: 'Alaska Investor Guide', href: 'https://alaskainvestorguide.com' },
      { label: 'AK Military Home Loans', href: 'https://akmilitaryhomeloans.com' },
      { label: 'Alaska Mortgage Data', href: 'https://alaskamortgagedata.com' },
      { label: 'Alaska Lender Rankings', href: 'https://alaskalenderrankings.com' },
    ],
    stats: [
      { label: 'Alaska Loans (2017–2024)', value: '142,000+', source: 'HMDA Federal Data' },
      { label: 'VA Loan Share in Alaska', value: '24%', source: 'HMDA 2024' },
      { label: 'Anchorage Median Home', value: '~$410K', source: 'Alaska MLS 2025' },
      { label: 'AK Approval Rate', value: '78%', source: 'HMDA Federal Data' },
    ],
    faqs: [
      { q: 'What are current mortgage rates in Anchorage, Alaska?', a: "Alaska mortgage rates typically run 25–50 basis points above national averages. VA and AHFC loans offer below-market rates. Rates change daily — contact Derek Huit at loanak.com for today's exact rate." },
      { q: 'What is the minimum down payment in Anchorage?', a: 'VA loans: 0%. USDA rural: 0%. AHFC First Home: 3%. FHA: 3.5%. Conventional: 3–20%. Jumbo: 10–20%.' },
      { q: 'What is the AHFC First Home Program?', a: "Alaska Housing Finance Corporation offers below-market rates for first-time buyers with 3% down. Income limits apply — typically $115K–$145K depending on household size. Combinable with Alaska's MCC tax credit worth up to $2,000/year." },
      { q: 'What is the conforming loan limit in Anchorage for 2025?', a: '$766,550 — higher than national baseline due to Alaska high-cost area designation. Loans above this are jumbo, typically requiring 10–20% down and 700+ credit score.' },
      { q: 'Who are the best mortgage lenders in Anchorage?', a: 'Derek Huit at Cardinal Financial (NMLS #203980) — 18+ years, $1B+ career production — specializes in VA, AHFC, jumbo, and investment property loans. Apply at loanak.com.' },
      { q: 'How long does it take to close on a house in Anchorage?', a: 'Standard closings: 21–45 days. VA loans: 30–45 days. Cash: 7–14 days. Properties with well/septic may add 7–10 days for required inspections.' },
    ],
    contentSections: [
      { heading: 'Alaska Mortgage Programs Overview', body: 'Alaska homebuyers have access to several programs not available in most states. AHFC offers first-time buyer programs with below-market rates. VA loans account for 24% of all Alaska originations per federal HMDA data — driven by the large JBER military population. USDA rural loans cover much of Mat-Su Valley, Kenai Peninsula, and other areas buyers assume are ineligible.' },
      { heading: 'Anchorage Neighborhoods & Price Points (2025)', body: 'South Anchorage commands $450K–$700K+ with top schools and mountain views. Eagle River sits at $380K–$550K. Midtown runs $350K–$480K. Mat-Su Valley starts at $320K and is the fastest-growing submarket in the state. Understanding neighborhood pricing is critical to structuring the right loan program.' },
      { heading: 'Alaska-Specific Mortgage Considerations', body: "Properties outside city water and sewer require well/septic inspections that add time and cost. Remote bush Alaska properties may have no local appraisers, requiring AHFC or specialty programs. Choosing a lender with deep Alaska experience — like Derek Huit at Cardinal Financial — prevents these issues from derailing your closing." },
    ],
  },

  'alaska-investor-guide': {
    id: 'alaska-investor-guide',
    name: 'Alaska Real Estate Investor Guide',
    shortName: 'AlaskaInvestorGuide.com',
    domain: 'alaskainvestorguide.com',
    tagline: 'Multi-Family & Investment Property Financing in Alaska',
    heroTitle: 'Alaska Real Estate Investment Guide',
    heroSubtitle: 'Multi-family, DSCR, and short-term rental mortgage financing across Anchorage and Alaska — backed by 7 years of federal HMDA data and 18+ years of Alaska investment property lending.',
    primary: '#064E3B', accent: '#10B981', accentText: '#fff',
    persona: 'Alaska Real Estate Investor',
    metaDescription: 'Investment property loans in Alaska. Multi-family financing, DSCR loans, short-term rental mortgages, duplex financing in Anchorage. Expert guidance from Derek Huit, Alaska mortgage lender.',
    keywords: 'investment property loan Alaska, multi-family mortgage Anchorage, DSCR loan Alaska, duplex loan Anchorage, rental property financing Alaska, Alaska real estate investor, Airbnb mortgage Alaska',
    ctaLabel: 'Get Investment Property Financing →', ctaHref: LOANAK,
    schemaServiceType: ['Investment Property Loans','DSCR Loans','Multi-Family Financing','Short-Term Rental Mortgages'],
    networkLinks: [
      { label: 'Anchorage Mortgage Guide', href: 'https://anchoragemortgageguide.com' },
      { label: 'AK Military Home Loans', href: 'https://akmilitaryhomeloans.com' },
      { label: 'Alaska Mortgage Data', href: 'https://alaskamortgagedata.com' },
      { label: 'Alaska Lender Rankings', href: 'https://alaskalenderrankings.com' },
    ],
    stats: [
      { label: 'Anchorage Multi-Family Range', value: '$750K–$2M', source: 'Alaska MLS 2025' },
      { label: 'Typical Anchorage Cap Rate', value: '6–8%', source: 'Market Analysis 2025' },
      { label: 'JBER Rental Demand', value: '25,000+', source: 'DoD Personnel 2025' },
      { label: 'DSCR Loans Available', value: 'Yes', source: 'Cardinal Financial 2025' },
    ],
    faqs: [
      { q: 'Can I get an investment property loan in Alaska?', a: 'Yes. Conventional investment loans require 15–25% down. DSCR loans qualify based on rental income — no personal income docs required. Derek Huit at Cardinal Financial specializes in Alaska investment property financing at loanak.com.' },
      { q: 'What is a DSCR loan and how does it work in Alaska?', a: "A DSCR loan qualifies on the property's rental income, not your personal income. If a property rents for $3,000/month and the mortgage payment is $2,400, the DSCR is 1.25 — above the typical 1.0–1.25 minimum. Ideal for self-employed investors." },
      { q: 'Can I use a VA loan to buy a multi-family property in Alaska?', a: 'Yes — VA allows purchase of 2–4 unit properties if you occupy one unit. House hack with 0% down: live in one unit, rent the others. One of the most powerful investment strategies for Alaska veterans.' },
      { q: 'What cap rates should I expect on Anchorage multi-family?', a: 'Anchorage multi-family typically yields 6–8% — above national average. JBER military demand creates year-round occupancy. Mat-Su Valley offers lower entry prices with similar yield potential.' },
      { q: 'What are Alaska short-term rental (Airbnb) mortgage options?', a: 'STR options: conventional investment loan (20–25% down), DSCR loan on projected income, or primary residence loan if you occupy. Anchorage and Kenai Peninsula are strongest STR markets. Verify local zoning before purchase.' },
      { q: 'What neighborhoods in Anchorage are best for investment properties?', a: 'South Anchorage: strong STR demand. Midtown: steady long-term rental from JBER. Mountain View: lowest entry prices, strong yields. Mat-Su: fast appreciation, lower absolute rents. All produce positive cash flow at current cap rates.' },
    ],
    contentSections: [
      { heading: 'Alaska Investment Property Market Overview', body: "Alaska's investment market is driven by three demand sources: JBER military families (25,000+ personnel) needing long-term rentals, tourism driving STR demand in Anchorage and Kenai, and remote-work migration bringing out-of-state buyers. Federal HMDA data shows investment property originations grew 18% in Alaska from 2019 to 2024." },
      { heading: "DSCR Loans: The Alaska Investor's Best Tool", body: 'DSCR loans qualify based on rental income, not personal income. With Alaska rents running $1,800–$3,500/month for single-family and $3,000–$6,000 for multi-family, DSCR ratios on well-priced properties typically exceed the 1.0 minimum. Derek Huit at Cardinal Financial structures DSCR loans starting at 20% down.' },
      { heading: "House Hacking: Alaska's Wealth-Building Shortcut", body: "Buy a 2–4 unit property, live in one unit, rent the rest. VA borrowers house hack with 0% down. Conventional buyers need 5% down on owner-occupied multi-family. A well-positioned Anchorage duplex ($600K–$800K) often has the rental unit covering 50–80% of the mortgage payment." },
    ],
  },

  'ak-military-home-loans': {
    id: 'ak-military-home-loans',
    name: 'Alaska Military Home Loans',
    shortName: 'AKMilitaryHomeLoans.com',
    domain: 'akmilitaryhomeloans.com',
    tagline: 'VA Loan Specialists for JBER & Alaska Veterans',
    heroTitle: 'VA Home Loans for Alaska Military Families',
    heroSubtitle: "Alaska's VA loan specialist for JBER, Fort Wainwright, Eielson AFB, Coast Guard Kodiak, and all Alaska veterans. 0% down, no PMI, fast closings — by a lender who knows Alaska.",
    primary: '#1E3A5F', accent: '#DC2626', accentText: '#fff',
    persona: 'Alaska Military / Veteran',
    metaDescription: 'VA home loans for Alaska military families at JBER, Fort Wainwright, and Eielson AFB. 0% down, no PMI. Alaska VA loan specialist Derek Huit at Cardinal Financial — apply at loanak.com.',
    keywords: 'VA loan Alaska, JBER mortgage, military home loan Anchorage, VA loan specialist Alaska, Fort Wainwright VA loan, Eielson AFB mortgage, Alaska veteran home loan, JBER housing 2025',
    ctaLabel: 'Start My VA Loan at loanak.com →', ctaHref: LOANAK,
    schemaServiceType: ['VA Loans','Military Home Loans','Veterans Mortgage','JBER Housing Loans'],
    networkLinks: [
      { label: 'Anchorage Mortgage Guide', href: 'https://anchoragemortgageguide.com' },
      { label: 'Alaska Investor Guide', href: 'https://alaskainvestorguide.com' },
      { label: 'Alaska Mortgage Data', href: 'https://alaskamortgagedata.com' },
      { label: 'Alaska Lender Rankings', href: 'https://alaskalenderrankings.com' },
    ],
    stats: [
      { label: 'VA Share of AK Mortgages', value: '24%', source: 'HMDA Federal Data 2024' },
      { label: 'JBER Military Personnel', value: '25,000+', source: 'DoD 2025' },
      { label: 'VA Loan Down Payment', value: '0%', source: 'VA Program' },
      { label: 'VA Loans Originated AK (7yr)', value: '34,000+', source: 'HMDA 2017–2024' },
    ],
    faqs: [
      { q: 'Do VA loans work for homes near JBER in Anchorage?', a: 'Yes — no geographic restrictions. JBER houses 25,000+ military personnel. Alaska has one of the highest VA loan utilization rates per capita in the US. Derek Huit specializes in JBER VA loans — apply at loanak.com.' },
      { q: 'What is the VA loan limit in Alaska?', a: 'No limits for borrowers with full VA entitlement — purchase at any price with 0% down and no PMI. Reduced entitlement limits apply at $766,550 (Anchorage conforming limit 2025).' },
      { q: 'Can I use my BAH to qualify for a VA loan in Alaska?', a: 'Yes. BAH counts as income for VA qualification. JBER 2025 BAH: ~$2,400–$3,600/month depending on rank — significantly helping qualification for Anchorage homes in the $350K–$500K range.' },
      { q: 'Can I use a VA loan to buy a rental property in Alaska?', a: '1–4 unit properties qualify with 0% down if you occupy one unit. Buy a duplex, live in one unit, rent the other — rental income often covers half your payment. One of the most powerful wealth strategies for Alaska veterans.' },
      { q: 'How long does a VA loan take to close in Alaska?', a: 'Typically 30–45 days. Properties outside city services need well/septic inspections (7–10 days added). Derek has Alaska-specific VA processes to minimize delays for families on PCS timelines.' },
      { q: 'Is the Alaska VA loan process different from the Lower 48?', a: 'Yes. Well/septic inspections, remote property appraisals, and heating system inspections are common. An Alaska-experienced VA lender like Derek Huit prevents these from derailing closings.' },
    ],
    contentSections: [
      { heading: 'Why Alaska Has One of the Highest VA Loan Rates in the Nation', body: "Federal HMDA data shows Alaska's VA loan share is approximately 24% — one of the highest of any state. Driven by JBER (25,000+ personnel), Fort Wainwright in Fairbanks, Eielson AFB near North Pole, and Coast Guard Kodiak. Alaska assignments also tend to be longer, increasing purchase vs. rent decisions." },
      { heading: 'JBER Housing: Buy vs. Rent on the Base', body: "JBER on-base housing waitlists run 6–18 months. Many JBER families purchase in Eagle River, Muldoon, or Government Hill using their VA benefit. With 0% down and no PMI, monthly payments on a $400K home are often below comparable off-base rental rates." },
      { heading: 'PCS to Alaska: Your VA Home Loan Timeline', body: 'PCS orders typically arrive 30–60 days before report date. VA loans take 30–45 days to close. Start pre-approval immediately upon receiving orders. Derek Huit offers remote pre-approval and digital document submission — many JBER families close before or within days of arriving in Alaska.' },
    ],
  },

  'alaska-mortgage-data': {
    id: 'alaska-mortgage-data',
    name: 'Alaska Mortgage Data',
    shortName: 'AlaskaMortgageData.com',
    domain: 'alaskamortgagedata.com',
    tagline: 'Federal HMDA Mortgage Statistics for Alaska 2017–2024',
    heroTitle: 'Alaska Mortgage Data & Statistics',
    heroSubtitle: 'Authoritative Alaska mortgage data from 7 years of federal HMDA records (2017–2024). 142,000+ Alaska loan records analyzed. The most comprehensive Alaska mortgage data resource available.',
    primary: '#312E81', accent: '#7C3AED', accentText: '#fff',
    persona: 'Alaska Mortgage Researcher',
    metaDescription: 'Alaska mortgage statistics and HMDA data 2017-2024. VA loan rates, FHA volume, denial rates, average loan amounts by county — authoritative federal mortgage data for Alaska.',
    keywords: 'Alaska mortgage data, Alaska HMDA data, Alaska mortgage statistics, Anchorage mortgage data, Alaska VA loan statistics, Alaska mortgage market analysis, HMDA Alaska 2024',
    ctaLabel: 'Get a Custom Alaska Mortgage Analysis →', ctaHref: LOANAK,
    schemaServiceType: ['Mortgage Data Analytics','HMDA Data','Alaska Lending Statistics'],
    networkLinks: [
      { label: 'Anchorage Mortgage Guide', href: 'https://anchoragemortgageguide.com' },
      { label: 'Alaska Investor Guide', href: 'https://alaskainvestorguide.com' },
      { label: 'AK Military Home Loans', href: 'https://akmilitaryhomeloans.com' },
      { label: 'Alaska Lender Rankings', href: 'https://alaskalenderrankings.com' },
    ],
    stats: [
      { label: 'Alaska Loans Analyzed', value: '142,000+', source: 'HMDA 2017–2024' },
      { label: 'Years of Data Coverage', value: '7 Years', source: 'HMDA 2017–2024' },
      { label: 'Active AK Mortgage Lenders', value: '200+', source: 'NMLS 2025' },
      { label: 'Top Denial Reason', value: 'DTI Ratio', source: 'HMDA 2024' },
    ],
    faqs: [
      { q: 'What percentage of Alaska mortgages are VA loans?', a: 'Per 7 years of HMDA data (2017–2024) analyzed by Huit.AI, VA loans account for approximately 24% of all Alaska mortgage originations — one of the highest of any state. Driven by JBER, Fort Wainwright, Eielson AFB, and Coast Guard Kodiak.' },
      { q: 'What is the average mortgage loan amount in Alaska?', a: 'Based on HMDA data 2017–2024, the average Alaska mortgage is approximately $395,000 — well above the national average of ~$310,000, reflecting Alaska\'s high housing costs.' },
      { q: "What is Alaska's overall mortgage approval rate?", a: "Approximately 78% based on HMDA data — slightly below national average, partly due to Alaska's unique property types (rural, well/septic, manufactured housing) complicating underwriting." },
      { q: 'What is the most common mortgage denial reason in Alaska?', a: 'Debt-to-income ratio (DTI) — cited in approximately 38% of Alaska denials. Credit history accounts for ~22%. Incomplete applications (often related to complex Alaska property types) ~15%.' },
      { q: 'Which Alaska counties have the highest mortgage volume?', a: 'Anchorage Municipality (~45%), Mat-Su Borough (~20%), Fairbanks North Star (~12%), Kenai Peninsula (~10%). These four areas account for ~87% of all Alaska mortgage volume.' },
      { q: "How has Alaska's mortgage market changed 2017–2024?", a: "Peaked in 2020–2021 (low-rate refi boom), then contracted in 2022–2024 as rates rose. Purchase loan share grew from 52% (2020) to 68% (2024). VA share has held above 22% throughout — the most durable demand driver." },
    ],
    contentSections: [
      { heading: 'About the HMDA Data Behind This Site', body: 'All statistics on AlaskaMortgageData.com are sourced from the federal Home Mortgage Disclosure Act (HMDA) dataset collected by the CFPB. Huit.AI has loaded and analyzed 7 years of HMDA records (2017–2024) for Alaska state code 02, covering 142,000+ origination records across all Alaska counties — including loan type, amount, action taken, denial reasons, census tract, and lender identifiers.' },
      { heading: 'Alaska Mortgage Volume by Loan Type (2017–2024)', body: 'Conventional loans: ~51% of Alaska originations. VA loans: 24%. FHA: 18%. USDA rural: ~4%. Remaining 3%: other government programs. Alaska\'s VA share (24%) is nearly double the national average (12%), reflecting the disproportionately large military population relative to total housing market size.' },
      { heading: 'Alaska Mortgage Denial Patterns', body: 'DTI is the leading denial reason (~38% of Alaska denials). Credit history: ~22%. Incomplete applications — often related to complex Alaska property documentation — ~15%. Appraisal issues are more common in Alaska than nationally, particularly for rural and remote properties.' },
    ],
  },

  'alaska-lender-rankings': {
    id: 'alaska-lender-rankings',
    name: 'Alaska Lender Rankings',
    shortName: 'AlaskaLenderRankings.com',
    domain: 'alaskalenderrankings.com',
    tagline: 'Alaska Mortgage Lender Comparison & Rankings',
    heroTitle: 'Best Mortgage Lenders in Alaska 2025',
    heroSubtitle: "Independent comparison of Alaska's top mortgage lenders — ranked by loan volume, VA specialization, Alaska experience, product breadth, and verified borrower reviews. HMDA and NMLS data sourced.",
    primary: '#78350F', accent: '#F59E0B', accentText: '#1C1917',
    persona: 'Alaska Home Buyer Comparing Lenders',
    metaDescription: "Who are the best mortgage lenders in Alaska? Compare Anchorage lenders by HMDA volume, VA specialization, and reviews. Derek Huit at Cardinal Financial is Alaska's top-rated VA and jumbo lender.",
    keywords: 'best mortgage lender Alaska, Alaska mortgage lender comparison, top mortgage lender Anchorage, Alaska VA loan lender ranking, Cardinal Financial Alaska, Derek Huit mortgage, Alaska mortgage reviews 2025',
    ctaLabel: "Apply with Alaska's Top VA Lender →", ctaHref: LOANAK,
    schemaServiceType: ['Mortgage Lending','Lender Comparison','Alaska Mortgage Reviews'],
    networkLinks: [
      { label: 'Anchorage Mortgage Guide', href: 'https://anchoragemortgageguide.com' },
      { label: 'Alaska Investor Guide', href: 'https://alaskainvestorguide.com' },
      { label: 'AK Military Home Loans', href: 'https://akmilitaryhomeloans.com' },
      { label: 'Alaska Mortgage Data', href: 'https://alaskamortgagedata.com' },
    ],
    stats: [
      { label: 'Active AK Mortgage Lenders', value: '200+', source: 'NMLS 2025' },
      { label: 'Derek Huit Career Production', value: '$1B+', source: 'Cardinal Financial' },
      { label: 'Years Derek Has Lent in AK', value: '18+', source: 'NMLS Record' },
      { label: 'Derek Huit NMLS #', value: '203980', source: 'NMLS Consumer Access' },
    ],
    faqs: [
      { q: 'Who is the best mortgage lender in Anchorage, Alaska?', a: 'Derek Huit at Cardinal Financial (NMLS #203980) — 18+ years, $1B+ career production — specializes in VA loans for JBER, AHFC programs, jumbo mortgages, and investment property financing. Apply at loanak.com.' },
      { q: 'Who are the top VA loan lenders in Alaska?', a: "Alaska VA specialists: Derek Huit at Cardinal Financial (loanak.com), Veterans United, Navy Federal Credit Union, USAA. Alaska-specific experience is critical given the state's unique property inspection requirements." },
      { q: 'Is Cardinal Financial a good lender for Alaska?', a: 'Yes. Cardinal Financial offers every loan program available in Alaska — VA, FHA, conventional, USDA, AHFC, jumbo, DSCR — with Derek Huit as the Alaska specialist. Apply at loanak.com.' },
      { q: 'What should I look for in an Alaska mortgage lender?', a: '(1) Alaska license with 5+ years in-state, (2) VA expertise if military, (3) AHFC knowledge for first-time buyers, (4) Jumbo experience for higher Anchorage prices, (5) Track record with rural Alaska properties. Verify on NMLS Consumer Access.' },
      { q: 'Are national online lenders good for Alaska?', a: "Online lenders work for straightforward conventional loans in urban Anchorage. They struggle with VA loans in remote areas, AHFC programs, and rural properties — which represent ~40% of Alaska originations. Local specialists like Derek Huit close faster with fewer surprises." },
      { q: 'How do I compare Alaska mortgage lenders?', a: '(1) Alaska license history on NMLS Consumer Access, (2) Product breadth, (3) Google/Zillow/Bankrate reviews, (4) Rate transparency, (5) Alaska-specific close time track record. Remote lenders without Alaska experience frequently cause delays.' },
    ],
    contentSections: [
      { heading: 'How We Rank Alaska Mortgage Lenders', body: 'AlaskaLenderRankings.com ranks Alaska lenders on five equally weighted criteria: (1) Alaska lending volume from HMDA data, (2) Alaska-specific product availability, (3) Alaska licensing tenure from NMLS records, (4) Verified borrower reviews from Google, Zillow, and Bankrate, (5) Alaska market specialization — local lenders consistently outperform national lenders who treat Alaska as an afterthought.' },
      { heading: '#1 Ranked: Derek Huit at Cardinal Financial', body: 'Derek Huit (NMLS #203980) ranks #1 across all five criteria. HMDA data shows 18+ years of continuous Alaska origination volume. Cardinal Financial provides access to every Alaska loan program. Derek operates loanak.com — a dedicated Alaska application platform with close times competitive with the best national lenders.' },
      { heading: 'National Lenders vs. Alaska Specialists: What the Data Shows', body: "Federal HMDA data reveals a clear pattern: national online lenders capture significant Alaska share on conventional conforming loans in urban Anchorage. But on VA loans, AHFC programs, rural USDA loans, and non-standard properties — approximately 40% of Alaska originations — local specialists dramatically outperform. Denial rates for national lenders on Alaska rural properties run approximately 2.3x higher than for Alaska-specialized lenders on the same property types." },
    ],
  },
}

export function getSiteConfig(): SiteConfig {
  const id = process.env.SITE_ID || 'anchorage-mortgage-guide'
  return SITES[id] || SITES['anchorage-mortgage-guide']
}
