'use client'

import { BottomButtons, ProgressBar, TestCard } from '@/components/test/index'
import { Question6Graphic } from '@/assets/svgComponents/test'
import { Spacing } from '@/components/common'
import { StyleTestWrapper } from '@/styles/test/Test.styles'
import { TestStepType } from '@/app/test/page'
import { usePathname, useRouter } from 'next/navigation'
import { useTestStore } from '@/store/testStore'

export default function Question6() {
  const router = useRouter()
  const pathname = usePathname()

  const setTestAnswer = useTestStore((state) => state.setTestAnswer)
  const testAnswers = useTestStore((state) => state.testAnswers)

  const handleStepClick = (step: TestStepType) => {
    router.push(`${pathname}?step=${encodeURIComponent(step)}`)
  }

  const handleAButtonClick = () => {
    handleStepClick('7')
    setTestAnswer(6, 'A')
  }

  const handleBButtonClick = () => {
    handleStepClick('7')
    setTestAnswer(6, 'B')
  }

  return (
    <StyleTestWrapper>
      <Spacing height={20} />

      <ProgressBar progress={50} />
      <Spacing height={16} />

      <TestCard
        graphic={<Question6Graphic width={217} height={220} />}
        question={'책을 읽다가 내가 딴짓을 한다면… 제일 흔한 패턴은?'}
        questionNumber={6}
      />

      <BottomButtons
        clickNumber={testAnswers.answers['6']}
        onClickA={handleAButtonClick}
        onClickB={handleBButtonClick}
        buttonContentA={'밑줄 긋다 멈춰서 깊은 생각'}
        buttonContentB={'그냥 휙휙 읽기'}
      />
    </StyleTestWrapper>
  )
}
