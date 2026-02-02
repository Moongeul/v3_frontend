import { apiCallServer } from '@/lib/api.server'
import { CreateQuestionType } from '@/types/question'

export async function POST(request: Request) {
  try {
    const question: CreateQuestionType = await request.json()

    if (!question) {
      return Response.json({ error: 'writeData 필요' }, { status: 400 })
    }

    // 서버에서 백엔드 API 호출
    const { data, error } = await apiCallServer('/v2/question/create', {
      method: 'POST',
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
