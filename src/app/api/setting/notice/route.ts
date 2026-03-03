import { NextRequest, NextResponse } from 'next/server'
import { apiCallServer } from '@/lib/api.server'
import { WriteDataType } from '@/types/write'
import { WriteNoticeType } from '@/types/notice'

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)

    const backendParams = new URLSearchParams()

    const page = searchParams.get('page') || '0'
    const size = searchParams.get('size') || '20'

    backendParams.append('page', page)
    backendParams.append('size', size)

    const endpoint = `/v2/setting/notice?${backendParams.toString()}`

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

export async function POST(request: Request) {
  try {
    const writeNoticeData: WriteNoticeType = await request.json()

    if (!writeNoticeData) {
      return Response.json({ error: 'writeNoticeData 필요' }, { status: 400 })
    }

    // 서버에서 백엔드 API 호출
    const { data, error } = await apiCallServer('/v2/setting/notice', {
      method: 'POST',
      body: JSON.stringify(writeNoticeData),
    })

    if (error) {
      return Response.json({ error }, { status: 400 })
    }

    return Response.json({ success: true, data })
  } catch (error) {
    return Response.json({ error: error instanceof Error ? error.message : 'Internal server error' }, { status: 500 })
  }
}
