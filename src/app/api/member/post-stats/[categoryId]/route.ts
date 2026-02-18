import { apiCallServer } from '@/lib/api.server'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest, { params }: { params: Promise<{ categoryId: string }> }) {
  try {
    // 1. 경로 파라미터에서 categoryId 추출
    const { categoryId } = await params

    if (!categoryId) {
      return NextResponse.json({ error: 'categoryId가 필요합니다.' }, { status: 400 })
    }

    // 2. URL 쿼리 스트링에서 나머지 정보 추출
    const { searchParams } = request.nextUrl
    const sortBy = searchParams.get('sortBy') || 'LATEST'
    const page = searchParams.get('page') || '1'
    const size = searchParams.get('size') || '20'
    const userId = searchParams.get('userId')

    // 3. 백엔드 엔드포인트 조립
    // userId가 있으면 추가, 없으면 제외
    const userIdQuery = userId ? `&userId=${userId}` : ''
    const endpoint = `/v2/member/post-stats/${categoryId}?sortBy=${sortBy}&page=${page}&size=${size}${userIdQuery}`

    console.log('BFF Request to Backend:', endpoint)

    // 4. apiCallServer를 통한 백엔드 호출 (조회이므로 GET 사용)
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
