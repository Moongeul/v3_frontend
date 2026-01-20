'use client'

import { BottomButtons, ProgressBar, TestCard } from '@/components/test/index'
import { Question5Graphic } from '@/assets/svgComponents/test'
import { Spacing } from '@/components/common'
import { StyleTestWrapper } from '@/styles/test/Test.styles'
import { TestStepType } from '@/app/test/page'
import { usePathname, useRouter } from 'next/navigation'
import { useTestStore } from '@/store/testStore'

export default function Question5() {
  const router = useRouter()
  const pathname = usePathname()

  const setTestAnswer = useTestStore((state) => state.setTestAnswer)

  const handleStepClick = (step: TestStepType) => {
    router.push(`${pathname}?step=${encodeURIComponent(step)}`)
  }

  const handleAButtonClick = () => {
    handleStepClick('6')
    setTestAnswer(5, 'A')
  }

  const handleBButtonClick = () => {
    handleStepClick('6')
    setTestAnswer(5, 'B')
  }

  return (
    <StyleTestWrapper>
      <Spacing height={20} />

      <ProgressBar progress={45} />
      <Spacing height={16} />

      <TestCard
        graphic={<Question5Graphic width={241} height={214} />}
        question={'책을 펼칠 시간! 언제 책 읽는 걸 제일 좋아해?'}
        questionNumber={5}
      />

      <BottomButtons
        onClickA={handleAButtonClick}
        onClickB={handleBButtonClick}
        buttonContentA={'해가 떠도, 졸려도… 밤에 본다'}
        buttonContentB={'햇살 맛집 카페, 아침·낮이 찐이지'}
      />
    </StyleTestWrapper>
  )
}
