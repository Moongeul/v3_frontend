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

  return (
    <StyleOnboardingButtons>
      <Button onClick={() => onNavigation('/home?tab=PUBLIC')} size={'sm'} variant={'ghost'}>
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
