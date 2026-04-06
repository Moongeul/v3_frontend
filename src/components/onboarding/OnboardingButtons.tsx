'use client'

import { StyleOnboardingButtons } from '@/styles/onboarding/Onboarding.styles'
import { Button } from '@/components/common'
import { GoogleIcon, KakaoIcon } from '@/assets/svgComponents'
import { useRouter } from 'next/navigation'

export default function OnboardingButtons() {
  const router = useRouter()

  const kakaoAuthUrl = `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.NEXT_PUBLIC_KAKAO_REST_API_KEY}&redirect_uri=${process.env.NEXT_PUBLIC_KAKAO_REDIRECT_URI}&response_type=code`
  const googleAuthUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID}&redirect_uri=${process.env.NEXT_PUBLIC_GOOGLE_REDIRECT_URI}&response_type=code&scope=email%20profile`

  const onNavigation = (path: string) => {
    router.push(path)
  }

  /**
   * 모든 로컬 데이터(Storage, Cache)를 삭제하고 로그아웃 처리하는 함수
   */
  const clearAppDataAndLogout = async () => {
    try {
      // 1. 서버 세션/쿠키 삭제 (API 호출)
      const response = await fetch('/api/auth/cookies', {
        method: 'DELETE',
      })

      if (!response.ok) {
        throw new Error('Logout API failed')
      }

      // 2. Local Storage & Session Storage 비우기
      localStorage.clear()
      sessionStorage.clear()

      // 3. 브라우저 Cache Storage 비우기
      if ('caches' in window) {
        const cacheNames = await caches.keys()
        await Promise.all(cacheNames.map((name) => caches.delete(name)))
      }

      // 4. (선택사항) IndexedDB까지 지워야 하는 경우
      // indexedDB.databases().then(dbs => {
      //   dbs.forEach(db => db.name && indexedDB.deleteDatabase(db.name));
      // });

      // 5. 페이지 강제 이동 및 새로고침
      window.location.href = '/home?tab=PUBLIC'
    } catch (error) {
      console.error('Logout & Clear Error:', error)
      alert('로그아웃 중 오류가 발생했습니다.')
    }
  }

  return (
    <StyleOnboardingButtons>
      <Button
        onClick={() => {
          clearAppDataAndLogout()
          onNavigation('/home?tab=PUBLIC')
        }}
        size={'sm'}
        variant={'ghost'}
      >
        비회원으로 시작
      </Button>
      <Button
        leftIcon={<GoogleIcon width={20} height={20} />}
        variant={'outline'}
        size={'lg'}
        onClick={() => onNavigation(googleAuthUrl)}
      >
        구글로 시작하기
      </Button>
      <Button
        leftIcon={<KakaoIcon width={20} height={20} />}
        variant={'outline'}
        size={'lg'}
        onClick={() => onNavigation(kakaoAuthUrl)}
      >
        카카오로 시작하기
      </Button>
    </StyleOnboardingButtons>
  )
}
