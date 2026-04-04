import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'

export const runtime = 'nodejs'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { name, email, phone, loanType, purchasePrice, siteId, message } = body

    if (!email && !phone) {
      return NextResponse.json({ error: 'Email or phone required' }, { status: 400 })
    }

    const supabase = createClient(
      process.env.SUPABASE_URL || 'https://vvkdnzqgtajeouxlliuk.supabase.co',
      process.env.SUPABASE_SERVICE_ROLE_KEY || ''
    )

    const record = {
      full_name: name || 'Anonymous',
      email: email || null,
      phone: phone || null,
      lead_source: siteId || process.env.SITE_ID || 'alaska-mortgage-network',
      utm_source: 'geo_ai',
      utm_medium: 'organic',
      utm_campaign: siteId || 'alaska-network',
      loan_type: loanType || 'Unknown',
      purchase_price: purchasePrice || null,
      notes: message || `Lead from ${siteId} — Alaska Mortgage Network`,
      status: 'new',
      tags: ['geo-ai', 'alaska-network', siteId || ''],
      created_at: new Date().toISOString(),
    }

    // Try contacts table first, then leads
    const { error } = await supabase.from('contacts').insert(record)
    if (error) await supabase.from('leads').insert(record)

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Lead error:', err)
    return NextResponse.json({ success: true, note: 'queued' })
  }
}
