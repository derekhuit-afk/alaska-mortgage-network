import { NextResponse } from 'next/server'
import { getAlaskaStats } from '@/lib/hmda'

export const runtime = 'nodejs'
export const revalidate = 3600 // cache 1 hour

export async function GET() {
  const stats = await getAlaskaStats()
  return NextResponse.json(stats)
}
