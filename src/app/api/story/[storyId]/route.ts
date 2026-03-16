import { NextResponse } from 'next/server'
import { apiCallServer } from '@/lib/api.server'

export async function DELETE(request: Request, { params }: { params: Promise<{ storyId: string }> }) {
  try {
    const { storyId } = await params

    if (!storyId) {
      return NextResponse.json({ error: 'storyId 필요합니다.' }, { status: 400 })
    }

    // 서버에서 백엔드 API 호출
    const { data, error } = await apiCallServer(`/v2/story/${storyId}`, {
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
