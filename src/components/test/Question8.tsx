'use client'

import { BottomButtons, ProgressBar, TestCard } from '@/components/test/index'
import { Question8Graphic } from '@/assets/svgComponents/test'
import { Spacing } from '@/components/common'
import { StyleTestWrapper } from '@/styles/test/Test.styles'
import { TestStepType } from '@/app/test/page'
import { usePathname, useRouter } from 'next/navigation'
import { useTestStore } from '@/store/testStore'

export default function Question8() {
  const router = useRouter()
  const pathname = usePathname()

  const setTestAnswer = useTestStore((state) => state.setTestAnswer)

  const handleStepClick = (step: TestStepType) => {
    router.push(`${pathname}?step=${encodeURIComponent(step)}`)
  }

  const handleAButtonClick = () => {
    handleStepClick('9')
    setTestAnswer(8, 'A')
  }

  const handleBButtonClick = () => {
    handleStepClick('9')
    setTestAnswer(8, 'B')
  }

  return (
    <StyleTestWrapper>
      <Spacing height={20} />

      <ProgressBar progress={60} />
      <Spacing height={16} />

      <TestCard
        graphic={<Question8Graphic width={204} height={240} />}
        question={'내 기록을 남이 본다면?'}
        questionNumber={8}
      />

      <BottomButtons
        onClickA={handleAButtonClick}
        onClickB={handleBButtonClick}
        buttonContentA={'“안 돼! 이건 내 흑역사 노트야” 비공개파'}
        buttonContentB={'“봐줘! 칭찬해줘!” 공유덕후'}
      />
    </StyleTestWrapper>
  )
}
