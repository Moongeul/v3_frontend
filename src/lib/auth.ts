import { APIResponseType, UserType } from '@/types/common'

interface AuthCallResult {
  success: boolean
  isReadingTaste?: boolean
  memberId?: number
  accessToken?: string
  refreshToken?: string | null
  role?: string
  error?: string
}

// ✅ platform → 엔드포인트 매핑을 상수로 분리
//    새 플랫폼 추가 시 여기만 수정하면 됨
const AUTH_ENDPOINTS: Record<string, string> = {
  kakao: '/v2/member/kakao/login',
  google: '/v2/member/google/login',
  apple: '/v2/member/apple/login',
}

// ✅ type 결정 로직도 상수로 분리
const getEnvType = () => (process.env.NEXT_PUBLIC_URL === 'http://localhost:3000' ? 'local' : 'deploy')

export const postAuth = async (code: string | null, platform: string | null): Promise<AuthCallResult> => {
  try {
    if (!code) throw new Error('Authorization code not provided')
    if (!platform) throw new Error('Platform not provided')

    // ✅ 지원하지 않는 플랫폼 early return — 기존엔 잘못된 URL로 요청 나가던 버그 수정
    const endpoint = AUTH_ENDPOINTS[platform]
    if (!endpoint) throw new Error(`Unsupported platform: ${platform}`)

    const jwtResponse = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}${endpoint}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ code, type: getEnvType() }),
      cache: 'no-store',
    })

    if (!jwtResponse.ok) {
      const errorData = await jwtResponse.text()
      console.error('Auth API error:', errorData)
      throw new Error(`Failed to authenticate: ${jwtResponse.status}`)
    }

    const jwtResponseData: APIResponseType<UserType> = await jwtResponse.json()

    console.log('jwtResponseData', jwtResponseData)

    if (!jwtResponseData.success) {
      throw new Error(jwtResponseData.message || 'Authentication failed')
    }

    const { role, accessToken, refreshToken, isReadingTaste, memberId } = jwtResponseData.data

    return {
      success: true,
      accessToken,
      refreshToken,
      role,
      isReadingTaste,
      memberId,
    }
  } catch (error) {
    console.error('Authentication error:', error)
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Authentication failed',
    }
  }
}
