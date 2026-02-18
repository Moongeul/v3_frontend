import { APIResponseType, UserType } from '@/types/common'
interface AuthCallResult {
  success: boolean
  accessToken?: string
  refreshToken?: string | null
  role?: string
  error?: string
}

/**
 * 카카오 인증 - code를 받아 JWT 토큰 발급
 * PENDING 상태일 때는 accessToken만, APPROVED 상태일 때는 refreshToken도 반환
 * @param code - 카카오에서 받은 인증 코드
 * @param platform - 로그인 경로가 kakao 인 경우 kakao, google 인 경우 google
 // * @param env - 개발 환경일경우 (localhost3000-> LOCAL, 배포 url 일 경우 'DEV')
 *
 * 주의: 이 함수는 API 응답만 처리합니다.
 * 쿠키 설정은 백엔드의 Set-Cookie 헤더로 자동 처리됩니다.
 */
export const postAuth = async (code: string | null, platform: string | null): Promise<AuthCallResult> => {
  try {
    const type = process.env.NEXT_PUBLIC_URL === 'http://localhost:3000' ? 'local' : 'deploy'
    if (!code) {
      throw new Error('Authorization code not provided')
    }

    const jwtResponse = await fetch(
      platform === 'google'
        ? `${process.env.NEXT_PUBLIC_BASE_URL}/v2/member/google/login`
        : `${process.env.NEXT_PUBLIC_BASE_URL}/v2/member/kakao/login`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ code: code, type: type }),
        cache: 'no-store',
      }
    )
    if (!jwtResponse.ok) {
      const errorData = await jwtResponse.text()
      console.error('Auth error:', errorData)
      throw new Error(`Failed to authenticate: ${jwtResponse.status}`)
    }

    const jwtResponseData: APIResponseType<UserType> = await jwtResponse.json()
    console.log('jwtResponseData', jwtResponseData)
    // isSuccess 확인
    if (!jwtResponseData.success) {
      throw new Error(jwtResponseData.message || 'Authentication failed')
    }

    const { role, accessToken, refreshToken } = jwtResponseData.data

    console.log('로그인 하고 액세스토큰', accessToken)
    console.log('로그인 하고 리스레시 토큰', refreshToken)

    console.log('✅ authentication successful')

    return {
      success: true,
      accessToken,
      refreshToken,
      role,
    }
  } catch (error) {
    console.error('Authentication error:', error)
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Authentication failed',
    }
  }
}
