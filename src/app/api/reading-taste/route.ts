import { apiCallServer } from '@/lib/api.server'

export async function POST(request: Request) {
  try {
    const testData: TestAnswerType = await request.json()

    if (!testData) {
      return Response.json({ error: 'testData 필요' }, { status: 400 })
    }

    // 서버에서 백엔드 API 호출
    const { data, error } = await apiCallServer('/v2/reading-taste', {
      method: 'POST',
      body: JSON.stringify(testData),
    })

    if (error) {
      return Response.json({ error }, { status: 400 })
    }

    return Response.json({ success: true, data })
  } catch (error) {
    return Response.json({ error: error instanceof Error ? error.message : 'Internal server error' }, { status: 500 })
  }
}
