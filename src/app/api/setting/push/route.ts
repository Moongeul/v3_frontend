import { apiCallServer } from '@/lib/api.server'

export async function PATCH(request: Request) {
  try {
    const pushData: { isPushEnabled: boolean } = await request.json()

    if (!pushData) {
      return Response.json({ error: 'pushData 필요' }, { status: 400 })
    }

    // 서버에서 백엔드 API 호출
    const { data, error } = await apiCallServer('/v2/setting/push', {
      method: 'PATCH',
      body: JSON.stringify(pushData),
    })

    if (error) {
      return Response.json({ error }, { status: 400 })
    }

    return Response.json({ success: true, data })
  } catch (error) {
    return Response.json({ error: error instanceof Error ? error.message : 'Internal server error' }, { status: 500 })
  }
}
