'use client'

import { BottomButtons, ProgressBar, TestCard } from '@/components/test/index'
import { Question7Graphic } from '@/assets/svgComponents/test'
import { Spacing } from '@/components/common'
import { StyleTestWrapper } from '@/styles/test/Test.styles'
import { TestStepType } from '@/app/test/page'
import { usePathname, useRouter } from 'next/navigation'
import { useTestStore } from '@/store/testStore'

export default function Question7() {
  const router = useRouter()
  const pathname = usePathname()

  const setTestAnswer = useTestStore((state) => state.setTestAnswer)

  const handleStepClick = (step: TestStepType) => {
    router.push(`${pathname}?step=${encodeURIComponent(step)}`)
  }

  const handleAButtonClick = () => {
    handleStepClick('8')
    setTestAnswer(7, 'A')
  }

  const handleBButtonClick = () => {
    handleStepClick('8')
    setTestAnswer(7, 'B')
  }

  return (
    <StyleTestWrapper>
      <Spacing height={20} />

      <ProgressBar progress={55} />
      <Spacing height={16} />

      <TestCard
        graphic={<Question7Graphic width={241} height={214} />}
        question={'기록 스타일, 뭐가 딱 내 취향?'}
        questionNumber={7}
      />

      <BottomButtons
        onClickA={handleAButtonClick}
        onClickB={handleBButtonClick}
        buttonContentA={'긴 글로 조목조목 써 내려가는 서평러'}
        buttonContentB={'한 줄 밑줄 긋고 “갓 구절”만 모으는 밈러'}
      />
    </StyleTestWrapper>
  )
}
