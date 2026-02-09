import { NextRequest, NextResponse } from 'next/server' // 임포트 확인
import { apiCallServer } from '@/lib/api.server'

export async function POST(request: NextRequest) {
  // NextRequest로 통일
  try {
    const isbnData = await request.json()

    if (!isbnData || !isbnData.isbn) {
      // 데이터 검증 강화
      return NextResponse.json({ error: 'isbn이 필요합니다.' }, { status: 400 })
    }

    const { data, error } = await apiCallServer('/v2/bookshelf/wish-read', {
      method: 'POST',
      body: JSON.stringify(isbnData),
    })

    if (error) return NextResponse.json({ error }, { status: 400 })

    return NextResponse.json({ success: true, data })
  } catch (error) {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const page = searchParams.get('page') || '0'
    const size = searchParams.get('size') || '20'

    // URLSearchParams를 활용해 깔끔하게 쿼리 스트링 생성
    const queryString = new URLSearchParams({ page, size }).toString()
    const endpoint = `/v2/bookshelf/wish-read?${queryString}`

    const { data, error } = await apiCallServer(endpoint, { method: 'GET' })

    if (error) return NextResponse.json({ error }, { status: 400 })

    return NextResponse.json({ success: true, data })
  } catch (error) {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}
