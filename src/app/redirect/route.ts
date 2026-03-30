import { NextRequest, NextResponse } from 'next/server'
import { cookies } from 'next/headers'
import { postAuth } from '@/lib/auth'

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  console.log('requestURL', request.url)
  const code = searchParams.get('code')
  const platform = searchParams.get('platform')
  const errorParam = searchParams.get('error')

  const baseUrl = request.nextUrl.origin

  const redirect = (pathname: string) => {
    return NextResponse.redirect(new URL(pathname, baseUrl))
  }

  if (errorParam) {
    console.error('Auth error:', errorParam)
    // return redirect(`/login?error=${encodeURIComponent(errorParam)}`)
  }

  if (!code) {
    console.error('No authorization code provided')
    // return redirect('/login?error=no_code')
  }

  if (!platform) {
    console.error('플랫폼 코드가 없습니다.')
    // return redirect('/login?error=no_platform')
  }

  try {
    const result = await postAuth(code, platform)
    console.log('로그인 결과', result)

    if (!result.success) {
      console.error('Authentication failed:', result.error)
      // return redirect(`/login?error=${encodeURIComponent(result.error || 'Authentication failed')}`)
    }

    const { role, accessToken, refreshToken, isReadingTaste, memberId } = result

    // 3. 쿠키 설정
    const cookieStore = await cookies()
    const cookieOptions = {
      maxAge: 7 * 24 * 60 * 60, // 7일
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax' as const,
      path: '/',
    }

    // accessToken, refreshToken은 httpOnly 유지
    const secureTokenOptions = {
      ...cookieOptions,
      httpOnly: true,
    }
    console.log('액세스 토큰', accessToken)
    console.log('리프레시 토큰', refreshToken)

    if (accessToken) {
      cookieStore.set('accessToken', accessToken, secureTokenOptions)
    }
    if (refreshToken) {
      cookieStore.set('refreshToken', refreshToken, secureTokenOptions)
    }
    if (role) {
      cookieStore.set('role', role, cookieOptions)
    }
    if (isReadingTaste) {
      cookieStore.set('isReadingTaste', String(isReadingTaste), cookieOptions)
    }

    if (memberId) {
      cookieStore.set('memberId', String(memberId), cookieOptions)
    }

    // 4. 사용자 상태에 따른 리다이렉트
    if (role === 'ROLE_GUEST') {
      return redirect('/onboarding?tab=terms')
    } else if (role === 'ROLE_USER') {
      return redirect('/home?tab=PUBLIC')
    } else if (role === 'ROLE_ADMIN') {
      return redirect('/home?tab=PUBLIC')
    }
    // 5. 예상치 못한 상태
    console.warn('Unexpected user status:', status)
    // return redirect('/login?error=unexpected_status')
  } catch (error) {
    // API 호출 또는 쿠키 설정 중 발생한 예외 처리
    console.error('Redirect route handler error:', error)
    const errorMessage = error instanceof Error ? error.message : 'server_error'
    // return redirect(`/login?error=${encodeURIComponent(errorMessage)}`)
  }
}
