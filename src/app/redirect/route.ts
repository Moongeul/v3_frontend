// app/redirect/route.ts
import { NextRequest, NextResponse } from 'next/server'
import { postAuth } from '@/lib/auth'

const BASE_COOKIE_OPTIONS = {
  maxAge: 7 * 24 * 60 * 60,
  secure: process.env.NODE_ENV === 'production',
  sameSite: 'lax' as const,
  path: '/',
}

const HTTP_ONLY_COOKIE_OPTIONS = {
  ...BASE_COOKIE_OPTIONS,
  httpOnly: true,
}

// ✅ cookies() store 대신 response.cookies에 직접 set
//    redirect Response와 쿠키가 동일한 응답에 담겨서 나감 → 타이밍 문제 해결
function setAuthCookiesToResponse(
  response: NextResponse,
  result: {
    accessToken?: string
    refreshToken?: string | null
    role?: string | null
    isReadingTaste?: boolean
    memberId?: number
  }
) {
  const { accessToken, refreshToken, role, isReadingTaste, memberId } = result

  if (accessToken) response.cookies.set('accessToken', accessToken, HTTP_ONLY_COOKIE_OPTIONS)
  if (refreshToken) response.cookies.set('refreshToken', refreshToken, HTTP_ONLY_COOKIE_OPTIONS)
  if (role) response.cookies.set('role', role, BASE_COOKIE_OPTIONS)
  if (isReadingTaste !== undefined) response.cookies.set('isReadingTaste', String(isReadingTaste), BASE_COOKIE_OPTIONS)
  if (memberId !== undefined) response.cookies.set('memberId', String(memberId), BASE_COOKIE_OPTIONS)
}

function getRedirectPathByRole(role: string | undefined | null): string {
  switch (role) {
    case 'ROLE_GUEST':
      return '/onboarding?tab=terms'
    case 'ROLE_USER':
    case 'ROLE_ADMIN':
      return '/home?tab=PUBLIC'
    default:
      console.warn('Unexpected role:', role)
      return '/login?error=unexpected_role'
  }
}

// 구글 / 카카오 — GET으로 code 수신
export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const code = searchParams.get('code')
  const platform = searchParams.get('platform')
  const errorParam = searchParams.get('error')
  const baseUrl = request.nextUrl.origin

  const redirect = (pathname: string) => NextResponse.redirect(new URL(pathname, baseUrl))

  if (errorParam) return redirect(`/login?error=${encodeURIComponent(errorParam)}`)
  if (!code) return redirect('/login?error=no_code')
  if (!platform) return redirect('/login?error=no_platform')

  try {
    const result = await postAuth(code, platform)

    if (!result.success) {
      return redirect(`/login?error=${encodeURIComponent(result.error ?? 'auth_failed')}`)
    }

    // ✅ response 객체 먼저 생성 → 쿠키 담기 → 반환
    //    기존: setAuthCookies() → redirect() 순서로 타이밍 불일치 발생
    //    변경: 하나의 response에 쿠키 + redirect 함께 담아서 원자적으로 반환
    const response = redirect(getRedirectPathByRole(result.role))
    setAuthCookiesToResponse(response, result)
    return response
  } catch (error) {
    console.error('GET callback error:', error)
    const message = error instanceof Error ? error.message : 'server_error'
    return redirect(`/login?error=${encodeURIComponent(message)}`)
  }
}

export async function POST(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const platform = searchParams.get('platform')
  const baseUrl = request.nextUrl.origin

  // ✅ 에러 redirect는 302 유지 (GET 페이지로 가도 무방)
  const redirect = (pathname: string) => NextResponse.redirect(new URL(pathname, baseUrl))

  // ✅ 성공 redirect만 303 — POST → GET 전환 강제
  const redirectWithGet = (pathname: string) => NextResponse.redirect(new URL(pathname, baseUrl), 303)

  const formData = await request.formData()
  const code = formData.get('code') as string | null
  const errorParam = formData.get('error') as string | null

  if (errorParam) return redirect(`/login?error=${encodeURIComponent(errorParam)}`)
  if (!code) return redirect('/login?error=no_code')
  if (!platform) return redirect('/login?error=no_platform')

  try {
    const result = await postAuth(code, platform)
    console.log('애플로그인 API는 보냄', result)

    if (!result.success) {
      return redirect(`/login?error=${encodeURIComponent(result.error ?? 'auth_failed')}`)
    }

    // ✅ 303으로 response 생성 후 쿠키 담아서 반환
    const response = redirectWithGet(getRedirectPathByRole(result.role))
    setAuthCookiesToResponse(response, result)
    return response
  } catch (error) {
    console.error('POST(Apple) callback error:', error)
    const message = error instanceof Error ? error.message : 'server_error'
    return redirect(`/login?error=${encodeURIComponent(message)}`)
  }
}
