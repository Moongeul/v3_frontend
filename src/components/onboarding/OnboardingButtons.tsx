// components/onboarding/OnboardingButtons.tsx
'use client'

import { StyleOnboardingButtons } from '@/styles/onboarding/Onboarding.styles'
import { Button } from '@/components/common'
import { GoogleIcon, KakaoIcon } from '@/assets/svgComponents'
import { useRouter } from 'next/navigation'

// ✅ 환경변수 + URL 조립 로직을 컴포넌트 외부 상수로 분리
//    렌더링마다 재생성되는 것 방지
const AUTH_URLS = {
  kakao: `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.NEXT_PUBLIC_KAKAO_REST_API_KEY}&redirect_uri=${process.env.NEXT_PUBLIC_KAKAO_REDIRECT_URI}&response_type=code`,
  google: `https://accounts.google.com/o/oauth2/v2/auth?client_id=${process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID}&redirect_uri=${process.env.NEXT_PUBLIC_GOOGLE_REDIRECT_URI}&response_type=code&scope=email%20profile`,
  // ✅ 애플: response_mode=form_post 필수, scope에 name email
  apple: `https://appleid.apple.com/auth/authorize?response_type=code&response_mode=form_post&client_id=${process.env.NEXT_PUBLIC_APPLE_CLIENT_ID}&redirect_uri=${encodeURIComponent(process.env.NEXT_PUBLIC_APPLE_REDIRECT_URI ?? '')}&scope=name%20email`,
} as const

export default function OnboardingButtons() {
  const router = useRouter()

  // ✅ clearAppDataAndLogout이랑 navigate를 동시에 호출하는 건 위험
  //    logout이 완료되기 전에 navigate가 먼저 실행될 수 있음
  //    → clearAppDataAndLogout 내부에서 redirect 처리하도록 위임
  const handleGuestStart = async () => {
    await clearAppDataAndLogout()
    // clearAppDataAndLogout 내부에서 window.location.href로 이동하므로 여기선 불필요
  }

  return (
    <StyleOnboardingButtons>
      <Button onClick={handleGuestStart} size={'sm'} variant={'ghost'}>
        비회원으로 시작
      </Button>
      <Button
        leftIcon={<GoogleIcon width={20} height={20} />}
        variant={'outline'}
        size={'lg'}
        onClick={() => router.push(AUTH_URLS.google)}
      >
        구글로 시작하기
      </Button>
      <Button
        leftIcon={<KakaoIcon width={20} height={20} />}
        variant={'outline'}
        size={'lg'}
        onClick={() => router.push(AUTH_URLS.kakao)}
      >
        카카오로 시작하기
      </Button>
      {/* ✅ 애플 버튼 — 아이콘, URL 모두 교체 */}
      <Button variant={'outline'} size={'lg'} onClick={() => router.push(AUTH_URLS.apple)}>
        애플로 시작하기
      </Button>
    </StyleOnboardingButtons>
  )
}

// ✅ 컴포넌트 파일 내 private 유틸 — 재사용 안 하면 굳이 분리 안 해도 됨
async function clearAppDataAndLogout() {
  try {
    const response = await fetch('/api/auth/cookies', { method: 'DELETE' })
    if (!response.ok) throw new Error('Logout API failed')

    localStorage.clear()
    sessionStorage.clear()

    if ('caches' in window) {
      const cacheNames = await caches.keys()
      await Promise.all(cacheNames.map((name) => caches.delete(name)))
    }

    window.location.href = '/home?tab=PUBLIC'
  } catch (error) {
    console.error('Logout & Clear Error:', error)
    alert('로그아웃 중 오류가 발생했습니다.')
  }
}
