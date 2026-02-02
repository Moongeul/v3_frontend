'use client'

import {
  StyleMoongeulLogo,
  StyleMoongeulText,
  StyleOnboardingContainer,
  StyleOnboardingContent,
} from '@/styles/onboarding/Onboarding.styles'

export default function OnboardingContent() {
  return (
    <StyleOnboardingContainer>
      <StyleOnboardingContent>
        <StyleMoongeulLogo>MOONGEUL</StyleMoongeulLogo>
        <StyleMoongeulText>“읽고, 느끼고, 남기는 나만의 기록”</StyleMoongeulText>
      </StyleOnboardingContent>
    </StyleOnboardingContainer>
  )
}
