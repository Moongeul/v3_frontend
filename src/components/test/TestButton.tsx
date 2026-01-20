import { StyleTestButton, StyleTestButtonNumber } from '@/styles/test/Test.styles'
import { ReactNode } from 'react'
import { PencilSketchEffect } from '@/styles/common/Common.styles'

interface TestButtonProps {
  children: ReactNode
  buttonNumber: 'A' | 'B'
  onClick?: () => void
}

export default function TestButton({ children, buttonNumber, onClick }: TestButtonProps) {
  return (
    <>
      <PencilSketchEffect />
      <StyleTestButton onClick={onClick}>
        <StyleTestButtonNumber>{buttonNumber}</StyleTestButtonNumber>
        {children}
      </StyleTestButton>
    </>
  )
}
