import { MetadataRoute } from 'next'
import { getSiteConfig } from '@/configs/sites'

export default function robots(): MetadataRoute.Robots {
  const site = getSiteConfig()
  return {
    rules: [
      { userAgent: '*', allow: '/' },
      { userAgent: 'GPTBot', allow: '/' },
      { userAgent: 'ClaudeBot', allow: '/' },
      { userAgent: 'PerplexityBot', allow: '/' },
      { userAgent: 'Google-Extended', allow: '/' },
      { userAgent: 'Bytespider', allow: '/' },
    ],
    sitemap: `https://${site.domain}/sitemap.xml`,
  }
}
