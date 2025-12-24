'use client'

import * as Style from '@/styles/common/DropDown.styles'

import { ReactNode } from 'react'

interface DropDownContainerProps {
  children: ReactNode
}

export default function DropDownContainer({ children }: DropDownContainerProps) {
  return <Style.DropDownContainer>{children}</Style.DropDownContainer>
}
