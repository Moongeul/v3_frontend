import { apiCallServer } from '@/lib/api.server'
import { FollowAcceptType } from '@/types/alarm'

export async function POST(request: Request) {
  try {
    const followAcceptData: FollowAcceptType = await request.json()

    if (!followAcceptData) {
      return Response.json({ error: 'followAcceptData 필요' }, { status: 400 })
    }

    // 서버에서 백엔드 API 호출
    const { data, error } = await apiCallServer('/v2/member/follow/accept', {
      method: 'POST',
      body: JSON.stringify(followAcceptData),
    })

    if (error) {
      return Response.json({ error }, { status: 400 })
    }

    return Response.json({ success: true, data })
  } catch (error) {
    return Response.json({ error: error instanceof Error ? error.message : 'Internal server error' }, { status: 500 })
  }
}
