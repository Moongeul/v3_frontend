import { apiCallServer } from '@/lib/api.server'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  try {
    // 2. URL 쿼리 스트링에서 나머지 정보 추출
    const { searchParams } = new URL(request.url)

    const backendParams = new URLSearchParams()
    const sortBy = searchParams.get('sortBy') || 'LATEST'
    const page = searchParams.get('page') || '1'
    const size = searchParams.get('size') || '20'
    const userId = searchParams.get('userId')
    const range = searchParams.get('range') || '4.5~5.0'

    if (userId) {
      backendParams.append('userId', userId)
    }

    backendParams.append('sortBy', sortBy)
    backendParams.append('page', page)
    backendParams.append('size', size)
    backendParams.append('range', range)

    const endpoint = `/v2/bookshelf/done-read/rating-summary/details?${backendParams.toString()}`

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
