import { apiCallServer } from '@/lib/api.server'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  try {
    // 1. 클라이언트 요청에서 쿼리 파라미터 추출
    const { searchParams } = request.nextUrl
    const nickname = searchParams.get('nickname')

    if (!nickname) {
      return NextResponse.json({ error: 'Nickname is required' }, { status: 400 })
    }

    // 2. 백엔드 엔드포인트에 쿼리 스트링 결합
    const endpoint = `/v2/member/nickname/check?nickname=${encodeURIComponent(nickname)}`

    console.log('BFF Request to Backend:', endpoint)

    // 서버에서 백엔드 API 호출
    const { data, error } = await apiCallServer(endpoint, {
      method: 'GET',
    })

    if (error) {
      return NextResponse.json({ error }, { status: 400 })
    }

    return NextResponse.json({ success: true, data })
  } catch (error) {
    console.error('BFF Route Handler Error:', error)
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Internal Server Error' },
      { status: 500 }
    )
  }
}
