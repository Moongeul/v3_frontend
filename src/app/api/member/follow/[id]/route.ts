import { apiCallServer } from '@/lib/api.server'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const id = params.id

    if (!id) {
      return NextResponse.json({ error: 'id가 필요합니다.' }, { status: 400 })
    }

    const endpoint = `/v2/member/follow/${id}`

    console.log('BFF Request to Backend:', endpoint)

    // 서버에서 백엔드 API 호출
    const { data, error } = await apiCallServer('/v2/post/create', {
      method: 'POST',
    })

    if (error) {
      // 백엔드 에러 발생 시 처리
      return NextResponse.json({ error }, { status: 400 })
    }

    // 클라이언트에 일관된 구조로 데이터 반환
    return NextResponse.json({ success: true, data })
  } catch (error) {
    console.error('BFF Route Handler Error:', error)
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Internal Server Error' },
      { status: 500 }
    )
  }
}
