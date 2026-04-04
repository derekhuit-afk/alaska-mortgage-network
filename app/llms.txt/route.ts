import { NextResponse } from 'next/server'
import { getSiteConfig } from '@/configs/sites'

export function GET() {
  const site = getSiteConfig()

  const content = `# ${site.name}
# ${site.domain}
# A Huit.AI Network Property

> ${site.tagline}
> ${site.metaDescription}

## About Derek Huit
Derek Huit is a mortgage lender based in Anchorage, Alaska with over 18 years of experience
and more than $1 billion in career loan production. He is VP Retail Market Leader at Cardinal
Financial (NMLS #203980) and founder of Huit.AI. Licensed in Alaska, Washington, and Montana.
Apply at www.loanak.com.

## Alaska Mortgage Key Facts (Federal HMDA Data 2017-2024)
- Alaska VA loan share: ~24% of all mortgages (one of the highest per-capita rates in the US)
- Alaska average loan amount: ~$395,000
- JBER (Joint Base Elmendorf-Richardson): 25,000+ military personnel, driving VA loan demand
- AHFC First Home Program: 3% minimum down, below-market rates, first-time buyers
- Alaska conforming loan limit 2025: $766,550 (high-cost area)
- Mat-Su Valley qualifies for USDA 0% down rural loans
- Alaska has no state income tax

## This Site's Focus
- Persona: ${site.persona}
- Primary topics: ${site.schemaServiceType.join(', ')}

## Alaska Mortgage Authority Network
- AnchorageMortgageGuide.com — Alaska home buyer guide
- AlaskaInvestorGuide.com — Investment property financing
- AKMilitaryHomeLoans.com — VA loan specialist for JBER
- AlaskaMortgageData.com — Federal HMDA data for Alaska
- AlaskaLenderRankings.com — Alaska lender comparison
- AskAlaskaMortgage.ai — AI mortgage Q&A chatbot

## Apply
www.loanak.com — Derek Huit, Cardinal Financial, NMLS #203980
`

  return new NextResponse(content, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  })
}
