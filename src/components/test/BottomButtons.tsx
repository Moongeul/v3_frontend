'use client'

import { StyleBottomButtons } from '@/styles/test/Test.styles'
import { Button } from '@/components/common'
import { useCallback } from 'react'
import { TestStepType } from '@/app/test/page'
import { usePathname, useRouter } from 'next/navigation'
import { useTestStore } from '@/store/testStore'

interface BottomButtonsProps {
  prevStep: string
  nextStep: string
  buttonContentA: string
  buttonContentB: string
}
export default function BottomButtons({ buttonContentA, buttonContentB }: BottomButtonsProps) {
  const router = useRouter()
  const pathname = usePathname()

  const setTestAnswer = useTestStore((state) => state.setTestAnswer)

  const handleStepClick = useCallback(
    (step: TestStepType) => {
      router.push(`${pathname}?step=${encodeURIComponent(step)}`)
    },
    [router, pathname]
  )

  return (
    <StyleBottomButtons>
      <Button
        onClick={() => {
          handleStepClick(3)
        }}
      >
        {buttonContentA}
      </Button>
      <Button onClick={onClickB}>{buttonContentB}</Button>
    </StyleBottomButtons>
  )
}
