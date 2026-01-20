'use client'

import { OnboardingGraphic } from '@/assets/svgComponents'
import { BottomButton, Spacing } from '@/components/common'
import { StyleContent } from '@/styles/common/Common.styles'
import { typography } from '@/styles/theme'
import { StyleOnboardingContainer } from '@/styles/test/Test.styles'
import { useRouter } from 'next/navigation'

export default function Onboarding() {
  const router = useRouter()

  const onNavigator = () => {
    router.push('/test?step=1')
  }

  return (
    <div>
      <StyleOnboardingContainer>
        <StyleContent $typography={typography.memomentTitle}>독서 취향 테스트</StyleContent>
        <Spacing height={8} />

        <StyleContent $typography={typography.subtitleLg}>나는 어떤 독서 취향일까?</StyleContent>

        <Spacing height={31} />
        <OnboardingGraphic width={308} height={312} />
      </StyleOnboardingContainer>

      <BottomButton onClick={onNavigator} isActive={true}>
        테스트 시작하기
      </BottomButton>
    </div>
  )
}
