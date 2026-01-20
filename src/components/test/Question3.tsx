'use client'

import { BottomButtons, ProgressBar, TestCard } from '@/components/test/index'
import { Question3Graphic } from '@/assets/svgComponents/test'
import { Spacing } from '@/components/common'
import { StyleTestWrapper } from '@/styles/test/Test.styles'
import { TestStepType } from '@/app/test/page'
import { usePathname, useRouter } from 'next/navigation'
import { useTestStore } from '@/store/testStore'

export default function Question3() {
  const router = useRouter()
  const pathname = usePathname()

  const setTestAnswer = useTestStore((state) => state.setTestAnswer)
  const testAnswers = useTestStore((state) => state.testAnswers)

  const handleStepClick = (step: TestStepType) => {
    router.push(`${pathname}?step=${encodeURIComponent(step)}`)
  }

  const handleAButtonClick = () => {
    handleStepClick('4')
    setTestAnswer(3, 'A')
  }

  const handleBButtonClick = () => {
    handleStepClick('4')
    setTestAnswer(3, 'B')
  }
  return (
    <StyleTestWrapper>
      <Spacing height={20} />

      <ProgressBar progress={30} />
      <Spacing height={16} />

      <TestCard
        graphic={<Question3Graphic width={241} height={192} />}
        question={'책 표지와 제목이 나를 유혹할 때, 나의 반응은?'}
        questionNumber={3}
      />

      <BottomButtons
        clickNumber={testAnswers.answers['3']}
        onClickA={handleAButtonClick}
        onClickB={handleBButtonClick}
        buttonContentA={'표지가 예쁘면 무조건 "홀린 듯이" 바로 구매한다.'}
        buttonContentB={'철저한 사전 조사 후 결정! 목차와 서평 정독은 기본'}
      />
    </StyleTestWrapper>
  )
}
