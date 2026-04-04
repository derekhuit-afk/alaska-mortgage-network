import { getSiteConfig } from '@/configs/sites'
import { getAlaskaStats } from '@/lib/hmda'
import LeadForm from '@/components/LeadForm'

export const revalidate = 3600

export default async function Page() {
  const site = getSiteConfig()
  const stats = await getAlaskaStats()

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: site.faqs.map(f => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  }

  const P = site.primary
  const A = site.accent
  const AT = site.accentText

  return (
    <main style={{ minHeight: '100vh' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* ── NAV ─────────────────────────────────────── */}
      <nav style={{
        background: '#fff', borderBottom: '1px solid #F3F4F6',
        padding: '12px 20px', display: 'flex', alignItems: 'center',
        justifyContent: 'space-between', position: 'sticky', top: 0, zIndex: 40,
        boxShadow: '0 1px 4px rgba(0,0,0,0.06)',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <div style={{ width: 32, height: 32, borderRadius: 8, background: P, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span style={{ color: '#fff', fontSize: 10, fontWeight: 800 }}>AK</span>
          </div>
          <div>
            <div style={{ fontWeight: 800, color: '#111827', fontSize: 14, lineHeight: 1 }}>{site.shortName}</div>
            <div style={{ fontSize: 10, color: '#6B7280' }}>{site.tagline}</div>
          </div>
        </div>
        <a href={site.ctaHref} target="_blank" rel="noopener noreferrer"
          style={{ background: P, color: '#fff', fontSize: 12, fontWeight: 700, padding: '8px 16px', borderRadius: 8, textDecoration: 'none' }}>
          Apply Now →
        </a>
      </nav>

      {/* ── HERO ────────────────────────────────────── */}
      <section style={{ background: `linear-gradient(135deg, ${P} 0%, ${P}dd 100%)`, color: '#fff', padding: 'clamp(40px,6vw,72px) 20px' }}>
        <div style={{ maxWidth: 800, margin: '0 auto', textAlign: 'center' }}>
          <div style={{
            display: 'inline-block', background: `${A}33`, border: `1px solid ${A}66`,
            color: A, fontSize: 11, fontWeight: 700, padding: '4px 14px', borderRadius: 20, marginBottom: 20,
          }}>
            Backed by 7 Years of Federal HMDA Data · Derek Huit · Huit.AI
          </div>
          <h1 style={{ fontSize: 'clamp(26px,4.5vw,50px)', fontWeight: 800, lineHeight: 1.15, margin: '0 0 16px' }}>
            {site.heroTitle}
          </h1>
          <p style={{ fontSize: 'clamp(15px,2vw,18px)', opacity: 0.85, maxWidth: 620, margin: '0 auto 32px', lineHeight: 1.65 }}>
            {site.heroSubtitle}
          </p>
          <a href={site.ctaHref} target="_blank" rel="noopener noreferrer"
            style={{ display: 'inline-block', background: A, color: AT, fontWeight: 800, padding: '16px 32px', borderRadius: 12, textDecoration: 'none', fontSize: 'clamp(14px,1.8vw,17px)' }}>
            {site.ctaLabel}
          </a>
          <div style={{ marginTop: 10, fontSize: 12, opacity: 0.6 }}>
            Derek Huit · Cardinal Financial · NMLS #203980 · Licensed AK · WA · MT
          </div>
        </div>
      </section>

      {/* ── STATS BAR ───────────────────────────────── */}
      <section style={{ background: '#111827', padding: '32px 20px' }}>
        <div style={{ maxWidth: 960, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(180px,1fr))', gap: 16 }}>
          {site.stats.map(s => (
            <div key={s.label} style={{ background: 'rgba(255,255,255,0.07)', borderRadius: 12, padding: '20px 16px', textAlign: 'center' }}>
              <div style={{ fontSize: 28, fontWeight: 800, color: A }}>{s.value}</div>
              <div style={{ fontSize: 12, color: '#D1D5DB', fontWeight: 600, marginTop: 4 }}>{s.label}</div>
              <div style={{ fontSize: 10, color: '#6B7280', marginTop: 2 }}>Source: {s.source}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── CONTENT SECTIONS ────────────────────────── */}
      <section style={{ maxWidth: 900, margin: '0 auto', padding: '56px 20px 20px' }}>
        <div style={{ display: 'grid', gap: 32 }}>
          {site.contentSections.map((sec, i) => (
            <div key={i} style={{
              background: '#fff', borderRadius: 16, padding: '28px 32px',
              boxShadow: '0 1px 8px rgba(0,0,0,0.06)', borderLeft: `4px solid ${A}`,
            }}>
              <h2 style={{ fontSize: 20, fontWeight: 700, color: P, margin: '0 0 12px' }}>{sec.heading}</h2>
              <p style={{ fontSize: 15, color: '#374151', lineHeight: 1.75, margin: 0 }}>{sec.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── HMDA DATA HIGHLIGHT ─────────────────────── */}
      <section style={{ background: `linear-gradient(135deg, #1E293B, ${P})`, color: '#fff', padding: '52px 20px', marginTop: 40 }}>
        <div style={{ maxWidth: 900, margin: '0 auto', textAlign: 'center' }}>
          <div style={{ fontSize: 11, fontWeight: 700, color: '#6B7280', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 8 }}>
            Federal HMDA Data · Alaska · {stats.yearRange} · {stats.totalLoans.toLocaleString()} Loans Analyzed
          </div>
          <h2 style={{ fontSize: 22, fontWeight: 800, margin: '0 0 28px' }}>Alaska Mortgage Market at a Glance</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(160px,1fr))', gap: 14, marginBottom: 16 }}>
            {[
              { v: `${stats.vaLoanPct}%`, l: 'VA Loan Share' },
              { v: `$${(stats.avgLoanAmount / 1000).toFixed(0)}K`, l: 'Avg Loan Amount' },
              { v: `${stats.approvalRate}%`, l: 'Approval Rate' },
              { v: `${stats.purchasePct}%`, l: 'Purchase Loans' },
              { v: `${stats.fhaLoanPct}%`, l: 'FHA Loan Share' },
              { v: `${stats.conventionalPct}%`, l: 'Conventional Share' },
            ].map(d => (
              <div key={d.l} style={{ background: 'rgba(255,255,255,0.1)', borderRadius: 10, padding: '16px 12px' }}>
                <div style={{ fontSize: 26, fontWeight: 800, color: A }}>{d.v}</div>
                <div style={{ fontSize: 11, color: '#CBD5E1', marginTop: 4 }}>{d.l}</div>
              </div>
            ))}
          </div>
          <p style={{ fontSize: 11, color: '#475569', margin: 0 }}>
            Source: Federal HMDA 2017–2024, Alaska state code 02. Data analyzed by Huit.AI.
          </p>
        </div>
      </section>

      {/* ── FAQ ─────────────────────────────────────── */}
      <section style={{ maxWidth: 800, margin: '0 auto', padding: '56px 20px' }}>
        <h2 style={{ fontSize: 24, fontWeight: 800, textAlign: 'center', marginBottom: 8, color: '#111827' }}>
          {site.persona} — Frequently Asked Questions
        </h2>
        <p style={{ textAlign: 'center', color: '#6B7280', fontSize: 14, marginBottom: 36 }}>
          Answers sourced from 18+ years of Alaska lending experience and federal HMDA data
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          {site.faqs.map((f, i) => (
            <details key={i} style={{ background: '#fff', border: '1px solid #E5E7EB', borderRadius: 12, overflow: 'hidden' }}>
              <summary style={{
                padding: '16px 20px', cursor: 'pointer', fontWeight: 600,
                fontSize: 14, color: '#111827', listStyle: 'none',
                display: 'flex', justifyContent: 'space-between', alignItems: 'center',
              }}>
                <span style={{ paddingRight: 12 }}>{f.q}</span>
                <span style={{ color: A, flexShrink: 0 }}>▼</span>
              </summary>
              <div style={{ padding: '4px 20px 16px', fontSize: 14, color: '#4B5563', lineHeight: 1.75, borderTop: '1px solid #F3F4F6' }}>
                {f.a}
              </div>
            </details>
          ))}
        </div>
      </section>

      {/* ── LEAD FORM ───────────────────────────────── */}
      <section style={{ background: '#fff', padding: '52px 20px', borderTop: '1px solid #E5E7EB' }}>
        <div style={{ maxWidth: 560, margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: 22, fontWeight: 800, color: P, marginBottom: 8 }}>Get a Free Alaska Mortgage Quote</h2>
          <p style={{ color: '#6B7280', fontSize: 14, marginBottom: 28 }}>
            Derek Huit personally reviews every Alaska inquiry. Response within 1 hour.
          </p>
          <LeadForm primary={P} accent={A} accentText={AT} siteId={site.id} />
        </div>
      </section>

      {/* ── NETWORK LINKS ───────────────────────────── */}
      <section style={{ background: '#F3F4F6', padding: '40px 20px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', textAlign: 'center' }}>
          <div style={{ fontSize: 11, fontWeight: 700, color: '#9CA3AF', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 16 }}>
            Alaska Mortgage Authority Network — Powered by Huit.AI
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 10 }}>
            {site.networkLinks.map(l => (
              <a key={l.label} href={l.href}
                style={{
                  background: '#fff', border: `1px solid #E5E7EB`, borderRadius: 8,
                  padding: '8px 16px', fontSize: 13, fontWeight: 600, color: P,
                  textDecoration: 'none',
                }}>
                {l.label} →
              </a>
            ))}
            <a href="https://askalaskamortgage.ai"
              style={{
                background: P, borderRadius: 8, padding: '8px 16px',
                fontSize: 13, fontWeight: 600, color: '#fff', textDecoration: 'none',
              }}>
              AskAlaskaMortgage.ai — AI Chat →
            </a>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ───────────────────────────────── */}
      <section style={{ background: P, color: '#fff', padding: '60px 20px', textAlign: 'center' }}>
        <h2 style={{ fontSize: 'clamp(22px,4vw,34px)', fontWeight: 800, margin: '0 0 12px' }}>Ready to Move Forward?</h2>
        <p style={{ opacity: 0.8, marginBottom: 28, fontSize: 16 }}>
          Start your application in 3 minutes. Derek personally reviews every Alaska loan.
        </p>
        <a href={site.ctaHref} target="_blank" rel="noopener noreferrer"
          style={{ display: 'inline-block', background: A, color: AT, fontWeight: 800, padding: '18px 36px', borderRadius: 14, textDecoration: 'none', fontSize: 17 }}>
          {site.ctaLabel}
        </a>
        <div style={{ marginTop: 20, fontSize: 12, opacity: 0.5 }}>
          Derek Huit · Cardinal Financial · NMLS #203980 · Equal Housing Lender · Licensed AK · WA · MT
        </div>
      </section>

      {/* ── FOOTER ──────────────────────────────────── */}
      <footer style={{ background: '#0F172A', color: '#475569', fontSize: 11, padding: '20px', textAlign: 'center' }}>
        <p style={{ margin: '0 0 4px' }}>
          © 2026 {site.name} — A Huit.AI Network Property | Derek Huit, Cardinal Financial NMLS #203980
        </p>
        <p style={{ margin: 0 }}>
          This site provides general mortgage information only. Not a loan commitment or rate lock. Rates and program availability change daily. Not affiliated with AHFC or any government agency.
        </p>
      </footer>
    </main>
  )
}
