import { apiCallServer } from '@/lib/api.server'

export async function POST(request: Request) {
  try {
    const category: { category: string } = await request.json()

    if (!category) {
      console.log('category', category)
      return Response.json({ error: 'writeData 필요' }, { status: 400 })
    }

    // 서버에서 백엔드 API 호출
    const { data, error } = await apiCallServer('/v2/category/create', {
      method: 'POST',
      body: JSON.stringify(category),
    })

    if (error) {
      return Response.json({ error }, { status: 400 })
    }

    return Response.json({ success: true, data })
  } catch (error) {
    return Response.json({ error: error instanceof Error ? error.message : 'Internal server error' }, { status: 500 })
  }
}
