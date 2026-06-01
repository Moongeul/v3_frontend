// components/onboarding/OnboardingButtons.tsx
'use client'

import { useState } from 'react'
import { StyleOnboardingButtons } from '@/styles/onboarding/Onboarding.styles'
import { Button } from '@/components/common'
import { AppleIcon, KakaoIcon } from '@/assets/svgComponents'
import { useRouter } from 'next/navigation'

const AUTH_URLS = {
  kakao: `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.NEXT_PUBLIC_KAKAO_REST_API_KEY}&redirect_uri=${process.env.NEXT_PUBLIC_KAKAO_REDIRECT_URI}&response_type=code`,
  apple: `https://appleid.apple.com/auth/authorize?response_type=code&response_mode=form_post&client_id=${process.env.NEXT_PUBLIC_APPLE_CLIENT_ID}&redirect_uri=${encodeURIComponent(process.env.NEXT_PUBLIC_APPLE_REDIRECT_URI ?? '')}&scope=name%20email`,
} as const

// ✅ 어떤 버튼이 로딩 중인지 타입으로 명시
type LoadingKey = 'guest' | 'kakao' | 'apple' | null

export default function OnboardingButtons() {
  const router = useRouter()
  const [loadingKey, setLoadingKey] = useState<LoadingKey>(null)

  const handleGuestStart = async () => {
    setLoadingKey('guest')
    try {
      await clearAppDataAndLogout()
      // clearAppDataAndLogout 내부에서 window.location.href 이동하므로
      // 여기서 setLoadingKey(null) 호출 불필요 (페이지 자체가 바뀜)
    } catch {
      setLoadingKey(null) // 에러 시엔 로딩 해제
    }
  }

  // ✅ OAuth redirect는 router.push 후 페이지가 이동하기 때문에
  //    로딩을 해제할 필요 없음 — 페이지가 바뀌면 상태도 사라짐
  const handleOAuthClick = (key: 'kakao' | 'apple', url: string) => {
    setLoadingKey(key)
    router.push(url)
  }

  return (
    <StyleOnboardingButtons>
      <Button
        onClick={handleGuestStart}
        size={'sm'}
        variant={'ghost'}
        isLoading={loadingKey === 'guest'}
        loadingText="잠깐만요..."
      >
        비회원으로 시작
      </Button>

      <Button
        leftIcon={<KakaoIcon width={20} height={20} />}
        variant={'outline'}
        size={'lg'}
        isLoading={loadingKey === 'kakao'}
        onClick={() => handleOAuthClick('kakao', AUTH_URLS.kakao)}
      >
        카카오로 시작하기
      </Button>

      <Button
        leftIcon={<AppleIcon width={20} height={20} />}
        variant={'outline'}
        size={'lg'}
        isLoading={loadingKey === 'apple'}
        onClick={() => handleOAuthClick('apple', AUTH_URLS.apple)}
      >
        애플로 시작하기
      </Button>
    </StyleOnboardingButtons>
  )
}

async function clearAppDataAndLogout() {
  const response = await fetch('/api/auth/cookies', { method: 'DELETE' })
  if (!response.ok) throw new Error('Logout API failed')

  localStorage.clear()
  sessionStorage.clear()

  if ('caches' in window) {
    const cacheNames = await caches.keys()
    await Promise.all(cacheNames.map((name) => caches.delete(name)))
  }

  window.location.href = '/home?tab=PUBLIC'
}
