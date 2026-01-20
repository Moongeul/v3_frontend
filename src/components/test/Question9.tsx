'use client'

import { BottomButtons, ProgressBar, TestCard } from '@/components/test/index'
import { Question9Graphic } from '@/assets/svgComponents/test'
import { Spacing } from '@/components/common'
import { StyleTestWrapper } from '@/styles/test/Test.styles'
import { TestStepType } from '@/app/test/page'
import { usePathname, useRouter } from 'next/navigation'
import { useTestStore } from '@/store/testStore'

export default function Question9() {
  const router = useRouter()
  const pathname = usePathname()

  const setTestAnswer = useTestStore((state) => state.setTestAnswer)

  const handleStepClick = (step: TestStepType) => {
    router.push(`${pathname}?step=${encodeURIComponent(step)}`)
  }

  const handleAButtonClick = () => {
    handleStepClick('10')
    setTestAnswer(9, 'A')
  }

  const handleBButtonClick = () => {
    handleStepClick('10')
    setTestAnswer(9, 'B')
  }

  return (
    <StyleTestWrapper>
      <Spacing height={20} />

      <ProgressBar progress={70} />
      <Spacing height={16} />

      <TestCard
        graphic={<Question9Graphic width={209} height={220} />}
        question={'친구가 “좋은 책 없어?”라고 물었어. 나의 답은?'}
        questionNumber={9}
      />

      <BottomButtons
        onClickA={handleAButtonClick}
        onClickB={handleBButtonClick}
        buttonContentA={'“이거 무조건 읽어야 해!!” 강추'}
        buttonContentB={'“너 취향에 맞을진 모르겠는데…” 조심스러운 추천'}
      />
    </StyleTestWrapper>
  )
}
