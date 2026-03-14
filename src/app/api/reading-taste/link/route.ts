import { apiCallServer } from '@/lib/api.server'

export async function POST(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const guestUuid = searchParams.get('guestUuid') || ''

    // URLSearchParams를 활용해 깔끔하게 쿼리 스트링 생성
    const queryString = new URLSearchParams({ guestUuid }).toString()
    const endpoint = `/v2/reading-taste/link?${queryString}`

    // 서버에서 백엔드 API 호출
    const { data, error } = await apiCallServer(endpoint, {
      method: 'POST',
    })

    if (error) {
      return Response.json({ error }, { status: 400 })
    }

    return Response.json({ success: true, data })
  } catch (error) {
    return Response.json({ error: error instanceof Error ? error.message : 'Internal server error' }, { status: 500 })
  }
}
