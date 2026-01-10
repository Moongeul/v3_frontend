'use client'

import { StyleBottomButtons } from '@/styles/test/Test.styles'
import { Button } from '@/components/common'

interface BottomButtonsProps {
  buttonContentA: string
  buttonContentB: string
  onClickA: () => void
  onClickB: () => void
}
export default function BottomButtons({ buttonContentA, buttonContentB, onClickA, onClickB }: BottomButtonsProps) {
  return (
    <StyleBottomButtons>
      <Button onClick={onClickA}>{buttonContentA}</Button>
      <Button onClick={onClickB}>{buttonContentB}</Button>
    </StyleBottomButtons>
  )
}
