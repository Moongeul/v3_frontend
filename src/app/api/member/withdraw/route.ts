import { apiCallServer } from '@/lib/api.server'
import { WithDrawType } from '@/types/mypage'

export async function POST(request: Request) {
  try {
    const withDrawData: WithDrawType = await request.json()

    if (!withDrawData) {
      return Response.json({ error: 'withDrawData 필요' }, { status: 400 })
    }

    // 서버에서 백엔드 API 호출
    const { data, error } = await apiCallServer('/v2/member/withdraw', {
      method: 'POST',
      body: JSON.stringify(withDrawData),
    })

    if (error) {
      return Response.json({ error }, { status: 400 })
    }

    return Response.json({ success: true, data })
  } catch (error) {
    return Response.json({ error: error instanceof Error ? error.message : 'Internal server error' }, { status: 500 })
  }
}
