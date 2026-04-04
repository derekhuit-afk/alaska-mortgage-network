import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'

export const runtime = 'nodejs'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { name, email, phone, loanType, purchasePrice, siteId } = body

    if (!email && !phone) {
      return NextResponse.json({ error: 'Email or phone required' }, { status: 400 })
    }

    const nameParts = (name || '').trim().split(' ')
    const firstName = nameParts[0] || 'Unknown'
    const lastName = nameParts.slice(1).join(' ') || 'Network Lead'

    const supabase = createClient(
      process.env.SUPABASE_URL || 'https://vvkdnzqgtajeouxlliuk.supabase.co',
      process.env.SUPABASE_SERVICE_ROLE_KEY || ''
    )

    const record = {
      first_name: firstName,
      last_name: lastName,
      email: email || null,
      phone: phone || null,
      source: siteId || process.env.SITE_ID || 'alaska-mortgage-network',
      status: 'new',
      utm_source: 'geo_ai',
      loan_purpose: loanType || null,
      est_purchase_price: purchasePrice ? parseFloat(String(purchasePrice).replace(/[$,]/g, '')) || null : null,
      notes: `GEO Network Lead — ${siteId || 'alaska-mortgage-network'}`,
      tags: ['geo-ai', 'alaska-network', siteId || ''],
      raw_payload: JSON.stringify({ siteId, loanType, purchasePrice }),
    }

    const { error } = await supabase.from('leads').insert(record)
    if (error) console.error('Lead error:', error.message)

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Lead error:', err)
    return NextResponse.json({ success: true, note: 'queued' })
  }
}
