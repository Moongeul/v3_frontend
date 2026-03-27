import { NextResponse } from 'next/server'
import { apiCallServer } from '@/lib/api.server'

export async function PUT(request: Request, { params }: { params: Promise<{ answerId: string }> }) {
  try {
    const { answerId } = await params

    if (!answerId) {
      return NextResponse.json({ error: 'answerId 필요합니다.' }, { status: 400 })
    }

    const answer: { content: string } = await request.json()

    if (!answer) {
      return Response.json({ error: 'answer 필요' }, { status: 400 })
    }

    // 서버에서 백엔드 API 호출
    const { data, error } = await apiCallServer(`/v2/answer/${answerId}`, {
      method: 'PUT',
      body: JSON.stringify(answer),
    })

    if (error) {
      return Response.json({ error }, { status: 400 })
    }

    return Response.json({ success: true, data })
  } catch (error) {
    return Response.json({ error: error instanceof Error ? error.message : 'Internal server error' }, { status: 500 })
  }
}

export async function DELETE(request: Request, { params }: { params: Promise<{ answerId: string }> }) {
  try {
    const { answerId } = await params

    if (!answerId) {
      return NextResponse.json({ error: 'answerId 필요합니다.' }, { status: 400 })
    }

    // 서버에서 백엔드 API 호출
    const { data, error } = await apiCallServer(`/v2/answer/${answerId}`, {
      method: 'DELETE',
    })

    if (error) {
      return Response.json({ error }, { status: 400 })
    }

    return Response.json({ success: true, data })
  } catch (error) {
    return Response.json({ error: error instanceof Error ? error.message : 'Internal server error' }, { status: 500 })
  }
}
