'use client'

import { StyleBottomButtons } from '@/styles/test/Test.styles'
import TestButton from '@/components/test/TestButton'

interface BottomButtonsProps {
  buttonContentA: string
  buttonContentB: string
  onClickA: () => void
  onClickB: () => void
}
export default function BottomButtons({ buttonContentA, buttonContentB, onClickA, onClickB }: BottomButtonsProps) {
  return (
    <StyleBottomButtons>
      <TestButton buttonNumber={'A'} onClick={onClickA}>
        {buttonContentA}
      </TestButton>
      <TestButton buttonNumber={'B'} onClick={onClickB}>
        {buttonContentB}
      </TestButton>
    </StyleBottomButtons>
  )
}
