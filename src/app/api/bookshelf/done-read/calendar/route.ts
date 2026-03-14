import { NextRequest, NextResponse } from 'next/server'
import { apiCallServer } from '@/lib/api.server'

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)

    const backendParams = new URLSearchParams()

    const page = searchParams.get('year') || '0'
    const size = searchParams.get('month') || '20'
    const userId = searchParams.get('userId')

    if (userId) {
      backendParams.append('userId', userId)
    }

    backendParams.append('year', page)
    backendParams.append('month', size)

    const endpoint = `/v2/bookshelf/done-read/calendar?${backendParams.toString()}`

    console.log('Backend Request Endpoint:', endpoint) // 디버깅용 로그

    const { data, error } = await apiCallServer(endpoint, {
      method: 'GET',
    })

    if (error) {
      return NextResponse.json({ error }, { status: 400 })
    }

    return NextResponse.json({ success: true, data })
  } catch (error) {
    console.error('Route Handler Error:', error)
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Internal server error' },
      { status: 500 }
    )
  }
}
