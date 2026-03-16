import { apiCallServer } from '@/lib/api.server'
import { CreateQuestionType } from '@/types/question'
import { NextResponse } from 'next/server'

export async function PUT(request: Request, { params }: { params: Promise<{ questionId: string }> }) {
  try {
    const { questionId } = await params

    if (!questionId) {
      return NextResponse.json({ error: 'questionId 필요합니다.' }, { status: 400 })
    }

    const question: CreateQuestionType = await request.json()

    if (!question) {
      return Response.json({ error: 'question 필요' }, { status: 400 })
    }

    // 서버에서 백엔드 API 호출
    const { data, error } = await apiCallServer(`/v2/question/${questionId}`, {
      method: 'PUT',
      body: JSON.stringify(question),
    })

    if (error) {
      return Response.json({ error }, { status: 400 })
    }

    return Response.json({ success: true, data })
  } catch (error) {
    return Response.json({ error: error instanceof Error ? error.message : 'Internal server error' }, { status: 500 })
  }
}

export async function DELETE(request: Request, { params }: { params: Promise<{ questionId: string }> }) {
  try {
    const { questionId } = await params

    if (!questionId) {
      return NextResponse.json({ error: 'questionId 필요합니다.' }, { status: 400 })
    }

    // 서버에서 백엔드 API 호출
    const { data, error } = await apiCallServer(`/v2/question/${questionId}`, {
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
