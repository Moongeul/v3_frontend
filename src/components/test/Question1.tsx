'use client'

import { BottomButtons, ProgressBar, TestCard } from '@/components/test/index'
import { Question1Graphic } from '@/assets/svgComponents/test'
import { Spacing } from '@/components/common'
import { StyleTestWrapper } from '@/styles/test/Test.styles'
import { TestStepType } from '@/app/test/page'
import { usePathname, useRouter } from 'next/navigation'
import { useTestStore } from '@/store/testStore'
import { useEffect } from 'react'

export default function Question1() {
  const router = useRouter()
  const pathname = usePathname()

  const setTestAnswer = useTestStore((state) => state.setTestAnswer)
  const testAnswers = useTestStore((state) => state.testAnswers)

  const handleStepClick = (step: TestStepType) => {
    router.push(`${pathname}?step=${encodeURIComponent(step)}`)
  }

  const handleAButtonClick = () => {
    handleStepClick('2')
    setTestAnswer(1, 'A')
  }

  const handleBButtonClick = () => {
    handleStepClick('2')
    setTestAnswer(1, 'B')
  }

  useEffect(() => {
    console.log('testAnswers', testAnswers)
  }, [testAnswers])

  return (
    <StyleTestWrapper>
      <Spacing height={20} />

      <ProgressBar progress={10} />
      <Spacing height={16} />

      <TestCard
        graphic={<Question1Graphic width={195} height={220} />}
        question={`오늘따라 괜히 책이 읽고 싶다!\n손이 간다면?`}
        questionNumber={1}
      />

      <BottomButtons
        clickNumber={testAnswers.answers['1']}
        onClickB={handleBButtonClick}
        onClickA={handleAButtonClick}
        buttonContentA={'마음 세탁용 힐링책'}
        buttonContentB={'영화보다는 재밌는 스토리 책'}
      />
    </StyleTestWrapper>
  )
}
