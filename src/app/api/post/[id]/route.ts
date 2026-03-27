import { NextResponse } from 'next/server'
import { apiCallServer } from '@/lib/api.server'

export async function DELETE(request: Request, { params }: { params: Promise<{ postId: string }> }) {
  try {
    const { postId } = await params

    if (!postId) {
      return NextResponse.json({ error: 'postId 필요합니다.' }, { status: 400 })
    }

    // 서버에서 백엔드 API 호출
    const { data, error } = await apiCallServer(`/v2/post/${postId}`, {
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
