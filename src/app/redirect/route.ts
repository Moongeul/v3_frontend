// app/api/auth/callback/route.ts
import { NextRequest, NextResponse } from 'next/server'
import { cookies } from 'next/headers'
import { postAuth } from '@/lib/auth'

// ✅ 쿠키 옵션 상수 분리 — 렌더링마다 객체 재생성 방지
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

// ✅ 쿠키 설정 로직 유틸 함수로 분리 — 단일 책임 원칙
async function setAuthCookies(result: {
  accessToken?: string | undefined
  refreshToken?: string | null | undefined
  role?: string | null | undefined
  isReadingTaste?: boolean | undefined
  memberId?: number | undefined
}) {
  const cookieStore = await cookies()
  const { accessToken, refreshToken, role, isReadingTaste, memberId } = result

  if (accessToken) cookieStore.set('accessToken', accessToken, HTTP_ONLY_COOKIE_OPTIONS)
  if (refreshToken) cookieStore.set('refreshToken', refreshToken, HTTP_ONLY_COOKIE_OPTIONS)
  if (role) cookieStore.set('role', role, BASE_COOKIE_OPTIONS)
  if (isReadingTaste !== undefined) cookieStore.set('isReadingTaste', String(isReadingTaste), BASE_COOKIE_OPTIONS)
  if (memberId !== undefined) cookieStore.set('memberId', String(memberId), BASE_COOKIE_OPTIONS)
}

// ✅ role 기반 리다이렉트 경로 결정 — 순수 함수로 분리
function getRedirectPathByRole(role: string | undefined): string {
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

// ✅ GET: 구글 / 카카오 OAuth 콜백 처리
//    platform은 백엔드 PR 기준 query param으로 전달됨
//    예: /redirect?platform=google&code=xxx
export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const code = searchParams.get('code')
  const platform = searchParams.get('platform')
  const errorParam = searchParams.get('error')
  const baseUrl = request.nextUrl.origin

  const redirect = (pathname: string) => NextResponse.redirect(new URL(pathname, baseUrl))

  // ✅ 가드절 — 주석 해제 (콘솔만 찍고 return 없으면 이후 코드가 undefined로 실행됨)
  if (errorParam) {
    console.error('Auth error:', errorParam)
    return redirect(`/login?error=${encodeURIComponent(errorParam)}`)
  }
  if (!code) {
    console.error('No authorization code provided')
    return redirect('/login?error=no_code')
  }
  if (!platform) {
    console.error('No platform provided')
    return redirect('/login?error=no_platform')
  }

  try {
    const result = await postAuth(code, platform)

    if (!result.success) {
      console.error('Authentication failed:', result.error)
      return redirect(`/login?error=${encodeURIComponent(result.error ?? 'auth_failed')}`)
    }

    await setAuthCookies(result)

    return redirect(getRedirectPathByRole(result.role))
  } catch (error) {
    console.error('GET callback route handler error:', error)
    const message = error instanceof Error ? error.message : 'server_error'
    return redirect(`/login?error=${encodeURIComponent(message)}`)
  }
}

// ✅ POST: 애플 OAuth 콜백 처리
//    백엔드 PR 기준:
//    - redirect_uri: https://moongeul.vercel.app/redirect?platform=apple
//    - response_mode: form_post → 애플이 POST body(FormData)로 code 전송
//    - GET으로는 code를 받을 수 없음
export async function POST(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const platform = searchParams.get('platform') // 'apple'
  const baseUrl = request.nextUrl.origin

  const redirect = (pathname: string) => NextResponse.redirect(new URL(pathname, baseUrl))

  // ✅ 애플은 form_post → FormData로 파싱
  const formData = await request.formData()

  // ✅ 이거 먼저 찍어보세요
  console.log('=== APPLE CALLBACK DEBUG ===')
  console.log('platform:', platform)
  console.log('code:', formData.get('code'))
  console.log('id_token:', formData.get('id_token')) // 애플은 id_token도 같이 옴
  console.log('user:', formData.get('user')) // 최초 로그인 시 user 정보도 옴
  console.log('error:', formData.get('error'))
  console.log('============================')

  const code = formData.get('code') as string | null
  const errorParam = formData.get('error') as string | null

  if (errorParam) {
    console.error('Apple auth error:', errorParam)
    return redirect(`/login?error=${encodeURIComponent(errorParam)}`)
  }
  if (!code) {
    console.error('Apple: No authorization code')
    return redirect('/login?error=no_code')
  }
  if (!platform) {
    console.error('Apple: No platform param')
    return redirect('/login?error=no_platform')
  }

  try {
    const result = await postAuth(code, platform)

    if (!result.success) {
      console.error('Apple authentication failed:', result.error)
      return redirect(`/login?error=${encodeURIComponent(result.error ?? 'auth_failed')}`)
    }

    await setAuthCookies(result)

    return redirect(getRedirectPathByRole(result.role))
  } catch (error) {
    console.error('POST(Apple) callback route handler error:', error)
    const message = error instanceof Error ? error.message : 'server_error'
    return redirect(`/login?error=${encodeURIComponent(message)}`)
  }
}
