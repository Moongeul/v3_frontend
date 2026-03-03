'use client'

import { BottomButton, Header, PageLayout, Spacing } from '@/components/common'
import Content from '@/components/onboarding/terms-of-service/Content'
import TermsAgreement from '@/components/onboarding/terms-of-service/TermsAgreement'
import { useOnboardingStore } from '@/store/onboardingStore'
import { postSettingAgreeTerms } from '@/lib/client/onboarding'
import { useRouter } from 'next/navigation'
import { useToast } from '@/components/common/toast/ToastContext'

export default function TermsOfService() {
  const { agreeTerms } = useOnboardingStore()
  const { success, error } = useToast()
  const isRequiredAgreed = agreeTerms.serviceTermsAgree && agreeTerms.privatePolicyAgree
  const router = useRouter()

  const handleSubmit = async () => {
    const result = await postSettingAgreeTerms(agreeTerms)
    if (result.success) {
      // success('성공', '이용 약관 동의에 성공하였어요.')
      router.push('/onboarding?tab=profile')
    } else {
      error('실패', '이용 약관 동의에 실패하였어요.')
    }
  }

  return (
    <main>
      <Header headerType={'dynamic'}>이용 약관 동의</Header>
      <Spacing height={80} />
      <PageLayout>
        <Content />
        <TermsAgreement />
        <BottomButton isActive={isRequiredAgreed} onClick={handleSubmit}>
          동의하고 시작하기
        </BottomButton>
      </PageLayout>
    </main>
  )
}
