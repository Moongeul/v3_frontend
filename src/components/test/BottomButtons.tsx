'use client'

import { StyleBottomButtons } from '@/styles/test/Test.styles'
import TestButton from '@/components/test/TestButton'

interface BottomButtonsProps {
  buttonContentA: string
  buttonContentB: string
  onClickA: () => void
  onClickB: () => void
  clickNumber: 'A' | 'B' | null
}
export default function BottomButtons({
  buttonContentA,
  buttonContentB,
  onClickA,
  onClickB,
  clickNumber,
}: BottomButtonsProps) {
  return (
    <StyleBottomButtons>
      <TestButton clickNumber={clickNumber} buttonNumber={'A'} onClick={onClickA}>
        {buttonContentA}
      </TestButton>
      <TestButton clickNumber={clickNumber} buttonNumber={'B'} onClick={onClickB}>
        {buttonContentB}
      </TestButton>
    </StyleBottomButtons>
  )
}
