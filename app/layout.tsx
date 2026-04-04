import type { Metadata } from 'next'
import { getSiteConfig } from '@/configs/sites'
import './globals.css'

export async function generateMetadata(): Promise<Metadata> {
  const site = getSiteConfig()
  return {
    title: `${site.name} | Derek Huit — Alaska Mortgage Expert`,
    description: site.metaDescription,
    keywords: site.keywords,
    robots: { index: true, follow: true },
    openGraph: {
      title: `${site.name} | Derek Huit`,
      description: site.metaDescription,
      type: 'website',
      locale: 'en_US',
    },
  }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const site = getSiteConfig()

  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'FinancialService',
        name: 'Derek Huit — Alaska Mortgage Lender',
        description: `Alaska mortgage specialist. ${site.tagline}`,
        url: `https://${site.domain}`,
        address: { '@type': 'PostalAddress', addressLocality: 'Anchorage', addressRegion: 'AK', addressCountry: 'US' },
        areaServed: [
          { '@type': 'State', name: 'Alaska' },
          { '@type': 'State', name: 'Washington' },
          { '@type': 'State', name: 'Montana' },
        ],
        serviceType: site.schemaServiceType,
        employee: {
          '@type': 'Person',
          name: 'Derek Huit',
          jobTitle: 'VP Retail Market Leader',
          worksFor: { '@type': 'Organization', name: 'Cardinal Financial', legalName: 'Cardinal Financial Company, NMLS #203980' },
        },
        sameAs: [
          'https://anchoragemortgageguide.com',
          'https://alaskainvestorguide.com',
          'https://akmilitaryhomeloans.com',
          'https://alaskamortgagedata.com',
          'https://alaskalenderrankings.com',
          'https://askalaskamortgage.ai',
        ],
      },
      {
        '@type': 'WebSite',
        name: site.name,
        url: `https://${site.domain}`,
        description: site.metaDescription,
      },
    ],
  }

  return (
    <html lang="en">
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
      </head>
      <body style={{ margin: 0, fontFamily: 'system-ui, -apple-system, sans-serif', background: '#F9FAFB', color: '#111827' }}>
        {children}
      </body>
    </html>
  )
}
