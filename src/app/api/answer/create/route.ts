import { apiCallServer } from '@/lib/api.server'
import { CreateAnswerType } from '@/types/question'

export async function POST(request: Request) {
  try {
    const answer: CreateAnswerType = await request.json()

    if (!answer) {
      return Response.json({ error: 'answer 필요' }, { status: 400 })
    }

    // 서버에서 백엔드 API 호출
    const { data, error } = await apiCallServer('/v2/answer/create', {
      method: 'POST',
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
