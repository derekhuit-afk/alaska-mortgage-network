'use client'

import { useState } from 'react'

const LOAN_TYPES = ['Purchase','Refinance','VA Purchase','VA Refi','Investment Property','Jumbo','AHFC / First Time Buyer','DSCR / Investor']

interface Props {
  primary: string
  accent: string
  accentText: string
  siteId: string
}

export default function LeadForm({ primary, accent, accentText, siteId }: Props) {
  const [form, setForm] = useState({ name: '', email: '', phone: '', loanType: '', purchasePrice: '' })
  const [loading, setLoading] = useState(false)
  const [done, setDone] = useState(false)
  const [error, setError] = useState('')

  const set = (k: string, v: string) => setForm(p => ({ ...p, [k]: v }))

  const submit = async () => {
    if (!form.email && !form.phone) { setError('Email or phone is required.'); return }
    setError('')
    setLoading(true)
    try {
      await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, siteId }),
      })
      setDone(true)
    } catch { setError('Something went wrong. Please try again.') }
    finally { setLoading(false) }
  }

  if (done) {
    return (
      <div style={{ background: '#ECFDF5', border: '1px solid #6EE7B7', borderRadius: 12, padding: '28px 24px', textAlign: 'center' }}>
        <div style={{ fontSize: 32, marginBottom: 10 }}>✅</div>
        <div style={{ fontWeight: 700, fontSize: 16, color: '#065F46', marginBottom: 6 }}>
          {form.name ? `Got it, ${form.name.split(' ')[0]}!` : "Got it!"}
        </div>
        <div style={{ color: '#047857', fontSize: 14 }}>
          Derek will be in touch within the hour. In the meantime, you can start your application at{' '}
          <a href="https://www.loanak.com" target="_blank" rel="noopener noreferrer" style={{ fontWeight: 700 }}>loanak.com</a>.
        </div>
      </div>
    )
  }

  const inputStyle = {
    width: '100%', border: '1px solid #E5E7EB', borderRadius: 8,
    padding: '10px 13px', fontSize: 14, fontFamily: 'inherit',
    outline: 'none', boxSizing: 'border-box' as const,
  }
  const labelStyle = { fontSize: 11, fontWeight: 700, color: '#6B7280', textTransform: 'uppercase' as const, letterSpacing: '0.05em', display: 'block', marginBottom: 5 }

  return (
    <div style={{ background: '#fff', border: '1px solid #E5E7EB', borderRadius: 16, padding: '28px 24px', textAlign: 'left' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
        <div>
          <label style={labelStyle}>Your Name</label>
          <input type="text" placeholder="First & Last" value={form.name} onChange={e => set('name', e.target.value)} style={inputStyle} />
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
          <div>
            <label style={labelStyle}>Email *</label>
            <input type="email" placeholder="your@email.com" value={form.email} onChange={e => set('email', e.target.value)} style={inputStyle} />
          </div>
          <div>
            <label style={labelStyle}>Phone</label>
            <input type="tel" placeholder="(907) 555-0100" value={form.phone} onChange={e => set('phone', e.target.value)} style={inputStyle} />
          </div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
          <div>
            <label style={labelStyle}>Loan Type</label>
            <select value={form.loanType} onChange={e => set('loanType', e.target.value)}
              style={{ ...inputStyle, background: '#fff' }}>
              <option value="">Select...</option>
              {LOAN_TYPES.map(t => <option key={t} value={t}>{t}</option>)}
            </select>
          </div>
          <div>
            <label style={labelStyle}>Purchase Price</label>
            <input type="text" placeholder="$400,000" value={form.purchasePrice} onChange={e => set('purchasePrice', e.target.value)} style={inputStyle} />
          </div>
        </div>
        {error && <div style={{ fontSize: 13, color: '#DC2626' }}>{error}</div>}
        <button onClick={submit} disabled={loading}
          style={{ background: loading ? '#D1D5DB' : accent, color: loading ? '#9CA3AF' : accentText, border: 'none', borderRadius: 10, padding: '14px', fontSize: 15, fontWeight: 700, cursor: loading ? 'wait' : 'pointer', width: '100%' }}>
          {loading ? 'Sending...' : 'Get My Free Quote →'}
        </button>
        <div style={{ textAlign: 'center', fontSize: 12, color: '#9CA3AF' }}>
          Or apply now at{' '}
          <a href="https://www.loanak.com" target="_blank" rel="noopener noreferrer" style={{ color: primary, fontWeight: 600 }}>loanak.com</a>
        </div>
      </div>
    </div>
  )
}
