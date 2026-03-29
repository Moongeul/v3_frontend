import { NextResponse } from 'next/server'
import { apiCallServer } from '@/lib/api.server'
import { WriteDataType } from '@/types/write'

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

export async function PUT(request: Request, { params }: { params: Promise<{ postId: string }> }) {
  try {
    const { postId } = await params
    console.log('postId', postId)
    const editData: WriteDataType = await request.json()

    if (!editData) {
      return Response.json({ error: 'editData 필요' }, { status: 400 })
    }

    if (!postId) {
      return NextResponse.json({ error: 'postId 필요합니다.' }, { status: 400 })
    }

    // 서버에서 백엔드 API 호출
    const { data, error } = await apiCallServer(`/v2/post/${postId}`, {
      method: 'PUT',
      body: JSON.stringify(editData),
    })

    if (error) {
      return Response.json({ error }, { status: 400 })
    }

    return Response.json({ success: true, data })
  } catch (error) {
    return Response.json({ error: error instanceof Error ? error.message : 'Internal server error' }, { status: 500 })
  }
}
