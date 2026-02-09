import { apiCallServer } from '@/lib/api.server'
import { WriteDataType } from '@/types/write'
import { PrivacyLevelType } from '@/types/setting'

export async function PUT(request: Request) {
  try {
    const privacyLevel: PrivacyLevelType = await request.json()

    if (!privacyLevel) {
      return Response.json({ error: 'privacyLevel 필요' }, { status: 400 })
    }

    // 서버에서 백엔드 API 호출
    const { data, error } = await apiCallServer('/v1/setting/privacy-level', {
      method: 'PUT',
      body: JSON.stringify(privacyLevel),
    })

    if (error) {
      return Response.json({ error }, { status: 400 })
    }

    return Response.json({ success: true, data })
  } catch (error) {
    return Response.json({ error: error instanceof Error ? error.message : 'Internal server error' }, { status: 500 })
  }
}
