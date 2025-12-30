'use client'

import * as Style from '@/styles/common/Button.styles'

import React from 'react'
import { ActiveBottomButton, DefaultBottomButton } from '@/assets/svgComponents'

interface BottomButtonProps {
  isActive?: boolean
  children: React.ReactNode
  onClick?: () => void
}

export default function BottomButton({ isActive = true, children, onClick }: BottomButtonProps) {
  return (
    <Style.StickyRoot>
      <Style.ActionArea onClick={onClick}>
        <Style.VisualOverlay>{isActive ? <ActiveBottomButton /> : <DefaultBottomButton />}</Style.VisualOverlay>
        <span style={{ position: 'relative', zIndex: 3 }}>{children}</span>
      </Style.ActionArea>
    </Style.StickyRoot>
  )
}
