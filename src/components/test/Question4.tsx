'use client'

import { BottomButtons, ProgressBar, TestCard } from '@/components/test/index'
import { Question4Graphic } from '@/assets/svgComponents/test'
import { Spacing } from '@/components/common'
import { StyleTestWrapper } from '@/styles/test/Test.styles'
import { TestStepType } from '@/app/test/page'
import { usePathname, useRouter } from 'next/navigation'
import { useTestStore } from '@/store/testStore'

export default function Question4() {
  const router = useRouter()
  const pathname = usePathname()

  const setTestAnswer = useTestStore((state) => state.setTestAnswer)

  const handleStepClick = (step: TestStepType) => {
    router.push(`${pathname}?step=${encodeURIComponent(step)}`)
  }

  const handleAButtonClick = () => {
    handleStepClick('5')
    setTestAnswer(4, 'A')
  }

  const handleBButtonClick = () => {
    handleStepClick('5')
    setTestAnswer(4, 'B')
  }

  return (
    <StyleTestWrapper>
      <Spacing height={20} />

      <ProgressBar progress={40} />
      <Spacing height={16} />

      <TestCard
        graphic={<Question4Graphic width={222} height={220} />}
        question={'지금 내 책장에 없는 분야의 책을 발견했다면?'}
        questionNumber={4}
      />

      <BottomButtons
        onClickA={handleAButtonClick}
        onClickB={handleBButtonClick}
        buttonContentA={'"도전!" 새로운 세상에 발을 들여놓는 것을 즐긴다.'}
        buttonContentB={'"PASS!" 내가 좋아하는 분야만 즐긴다.'}
      />
    </StyleTestWrapper>
  )
}
