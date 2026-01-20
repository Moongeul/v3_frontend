'use client'

import { BottomButtons, ProgressBar, TestCard } from '@/components/test/index'
import { Spacing } from '@/components/common'
import { StyleTestWrapper } from '@/styles/test/Test.styles'
import { TestStepType } from '@/app/test/page'
import { Question2Graphic } from '@/assets/svgComponents/test'
import { usePathname, useRouter } from 'next/navigation'
import { useTestStore } from '@/store/testStore'

export default function Question2() {
  const router = useRouter()
  const pathname = usePathname()

  const setTestAnswer = useTestStore((state) => state.setTestAnswer)
  const testAnswers = useTestStore((state) => state.testAnswers)

  const handleStepClick = (step: TestStepType) => {
    router.push(`${pathname}?step=${encodeURIComponent(step)}`)
  }

  const handleAButtonClick = () => {
    handleStepClick('3')
    setTestAnswer(2, 'A')
  }

  const handleBButtonClick = () => {
    handleStepClick('3')
    setTestAnswer(2, 'B')
  }
  return (
    <StyleTestWrapper>
      <Spacing height={20} />

      <ProgressBar progress={20} />
      <Spacing height={16} />

      <TestCard
        graphic={<Question2Graphic width={262} height={220} />}
        question={'서점에 가면 제일 먼저 보는 건?'}
        questionNumber={2}
      />

      <BottomButtons
        clickNumber={testAnswers.answers['2']}
        onClickA={handleAButtonClick}
        onClickB={handleBButtonClick}
        buttonContentA={'장르 딱 보고 직진하는 “테마형 인간”'}
        buttonContentB={'남들이 좋다 한 책부터 보는 “인싸형 인간”'}
      />
    </StyleTestWrapper>
  )
}
