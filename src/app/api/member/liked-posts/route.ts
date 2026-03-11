import { NextRequest, NextResponse } from 'next/server'
import { apiCallServer } from '@/lib/api.server'

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const backendParams = new URLSearchParams()

    const page = searchParams.get('page') || '0'
    const size = searchParams.get('size') || '20'
    const sortBy = searchParams.get('sortBy') || 'LATEST'
    const userId = searchParams.get('userId') // userId 가져오기

    backendParams.append('sortBy', sortBy)
    backendParams.append('page', page)
    backendParams.append('size', size)

    // userId가 존재할 때만 추가
    if (userId) {
      backendParams.append('userId', userId)
    }

    const endpoint = `/v2/member/liked-posts?${backendParams.toString()}`

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
