import { apiCallServer } from '@/lib/api.server'
import { AgreeTermsType } from '@/types/onboarding'

export async function POST(request: Request) {
  try {
    const agreeTerms: AgreeTermsType = await request.json()

    if (!agreeTerms) {
      return Response.json({ error: 'agreeTerms 필요' }, { status: 400 })
    }

    // 서버에서 백엔드 API 호출
    const { data, error } = await apiCallServer('/v2/setting/agree-terms', {
      method: 'POST',
      body: JSON.stringify(agreeTerms),
    })

    if (error) {
      return Response.json({ error }, { status: 400 })
    }

    return Response.json({ success: true, data })
  } catch (error) {
    return Response.json({ error: error instanceof Error ? error.message : 'Internal server error' }, { status: 500 })
  }
}
