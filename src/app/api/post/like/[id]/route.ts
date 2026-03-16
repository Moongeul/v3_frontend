import { apiCallServer } from '@/lib/api.server'
import { NextRequest, NextResponse } from 'next/server'
import { LikeType } from '@/types/record'

// [questionId] 파라미터를 받아오기 위해 params 타입을 지정합니다.
export async function POST(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params

    if (!id) {
      return NextResponse.json({ error: 'questionId 필요합니다.' }, { status: 400 })
    }

    const responseData: { likeType: LikeType } = await request.json()

    if (!responseData) {
      return Response.json({ error: 'responseData 필요' }, { status: 400 })
    }

    // 백엔드 API 엔드포인트 구성 (예: /v2/book/detail/{isbn})
    const endpoint = `/v2/post/like/${id}`

    console.log('BFF Request to Backend:', endpoint)

    const { data, error } = await apiCallServer(endpoint, {
      method: 'POST',
      body: JSON.stringify(responseData),
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
