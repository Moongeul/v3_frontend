'use client'

import { BottomButtons, ProgressBar, TestCard } from '@/components/test/index'
import { Question11Graphic } from '@/assets/svgComponents/test'
import { Spacing } from '@/components/common'
import { StyleTestWrapper } from '@/styles/test/Test.styles'
import { TestStepType } from '@/app/test/page'
import { usePathname, useRouter } from 'next/navigation'
import { useTestStore } from '@/store/testStore'

export default function Question11() {
  const router = useRouter()
  const pathname = usePathname()

  const setTestAnswer = useTestStore((state) => state.setTestAnswer)

  const handleStepClick = (step: TestStepType) => {
    router.push(`${pathname}?step=${encodeURIComponent(step)}`)
  }

  const handleAButtonClick = () => {
    handleStepClick('12')
    setTestAnswer(11, 'A')
  }

  const handleBButtonClick = () => {
    handleStepClick('12')
    setTestAnswer(11, 'B')
  }

  return (
    <StyleTestWrapper>
      <Spacing height={20} />

      <ProgressBar progress={90} />
      <Spacing height={16} />

      <TestCard
        graphic={<Question11Graphic width={244} height={160} />}
        question={'드디어 책을 다 읽었어. \n' + '마지막 장을 덮은 내 모습은?'}
        questionNumber={11}
      />

      <BottomButtons
        onClickA={handleAButtonClick}
        onClickB={handleBButtonClick}
        buttonContentA={'눈물 혹은 감탄… 감정 폭발형'}
        buttonContentB={'담담하게 정리… 차분한 사색형'}
      />
    </StyleTestWrapper>
  )
}
