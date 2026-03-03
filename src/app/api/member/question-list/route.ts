import { NextRequest, NextResponse } from 'next/server'
import { apiCallServer } from '@/lib/api.server'

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const backendParams = new URLSearchParams()

    // 1. 필요한 값들을 가져옵니다.
    const userId = searchParams.get('userId')
    const page = searchParams.get('page') || '0'
    const size = searchParams.get('size') || '20'

    // 2. userId가 존재할 때만 추가합니다. (클라이언트에서 안 보냈으면 백엔드에도 안 보냄)
    if (userId && userId !== 'undefined') {
      backendParams.append('userId', userId)
    }

    backendParams.append('page', page)
    backendParams.append('size', size)

    // 3. 백엔드 엔드포인트 생성
    const endpoint = `/v2/member/question-list?${backendParams.toString()}`

    console.log('BFF Request to Backend:', endpoint)

    const { data, error, success } = await apiCallServer(endpoint, {
      method: 'GET',
    })

    if (!success || error) {
      return NextResponse.json({ error: error || '데이터 조회 실패' }, { status: 400 })
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
