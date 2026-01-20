'use client'

import { BottomButtons, ProgressBar, TestCard } from '@/components/test/index'
import { Question10Graphic } from '@/assets/svgComponents/test'
import { Spacing } from '@/components/common'
import { StyleTestWrapper } from '@/styles/test/Test.styles'
import { TestStepType } from '@/app/test/page'
import { usePathname, useRouter } from 'next/navigation'
import { useTestStore } from '@/store/testStore'

export default function Question10() {
  const router = useRouter()
  const pathname = usePathname()

  const setTestAnswer = useTestStore((state) => state.setTestAnswer)

  const handleStepClick = (step: TestStepType) => {
    router.push(`${pathname}?step=${encodeURIComponent(step)}`)
  }

  const handleAButtonClick = () => {
    handleStepClick('11')
    setTestAnswer(10, 'A')
  }

  const handleBButtonClick = () => {
    handleStepClick('11')
    setTestAnswer(10, 'B')
  }

  return (
    <StyleTestWrapper>
      <Spacing height={20} />

      <ProgressBar progress={80} />
      <Spacing height={16} />

      <TestCard
        graphic={<Question10Graphic width={211} height={220} />}
        question={'읽다 말고 포기한 책이 있으면?'}
        questionNumber={10}
      />

      <BottomButtons
        onClickA={handleAButtonClick}
        onClickB={handleBButtonClick}
        buttonContentA={'“쿨하게 손절” → 서재에서 증발'}
        buttonContentB={'“너 언젠가 다시 보자…” → 보관함행'}
      />
    </StyleTestWrapper>
  )
}
