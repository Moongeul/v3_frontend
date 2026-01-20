import { StyleTestButton, StyleTestButtonNumber } from '@/styles/test/Test.styles'
import { ReactNode } from 'react'
import { PencilSketchEffect } from '@/styles/common/Common.styles'

interface TestButtonProps {
  children: ReactNode
  buttonNumber: 'A' | 'B'
  onClick?: () => void
  clickNumber: 'A' | 'B' | null
}

export default function TestButton({ children, buttonNumber, onClick, clickNumber }: TestButtonProps) {
  return (
    <>
      <PencilSketchEffect />
      <StyleTestButton
        $variant={clickNumber === null ? 'default' : clickNumber === buttonNumber ? 'active' : 'disable'}
        onClick={onClick}
      >
        <StyleTestButtonNumber
          $variant={clickNumber === null ? 'default' : clickNumber === buttonNumber ? 'active' : 'disable'}
        >
          {buttonNumber}
        </StyleTestButtonNumber>
        {children}
      </StyleTestButton>
    </>
  )
}
