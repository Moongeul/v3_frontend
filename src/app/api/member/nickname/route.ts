// app/api/member/nickname/route.ts (예시 경로)

import { apiCallServer } from '@/lib/api.server'

export async function PATCH(request: Request) {
  try {
    const nickNameData: { nickname: string } = await request.json()

    // 유효성 검사 강화
    if (!nickNameData || !nickNameData.nickname) {
      return Response.json({ error: 'nickname이 필요합니다.' }, { status: 400 })
    }

    // 서버에서 백엔드 API 호출
    // 1. body는 nickNameData를 그대로 보냅니다 (이미 { nickname: "..." } 구조임)
    // 2. 메서드를 백엔드 스펙에 맞춰 수정 (PATCH 또는 POST)
    const { data, error } = await apiCallServer('/v2/member/nickname', {
      method: 'PATCH', // 백엔드가 PATCH를 지원한다면 PATCH로 통일
      body: JSON.stringify(nickNameData),
    })

    if (error) {
      return Response.json({ error }, { status: 400 })
    }

    return Response.json({ success: true, data })
  } catch (error) {
    return Response.json({ error: error instanceof Error ? error.message : 'Internal server error' }, { status: 500 })
  }
}
