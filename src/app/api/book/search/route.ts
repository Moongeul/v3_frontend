import { apiCallServer } from '@/lib/api.server'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)

    const backendParams = new URLSearchParams()

    const page = searchParams.get('page') || '0'
    const size = searchParams.get('size') || '20'
    const query = searchParams.get('query')

    backendParams.append('page', page)
    backendParams.append('size', size)

    if (query) backendParams.append('query', query)

    const endpoint = `/v2/book/search?${backendParams.toString()}`

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
