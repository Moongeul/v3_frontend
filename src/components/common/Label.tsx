'use client'

import React from 'react'
import * as Style from '@/styles/common/Label.styles'
import { TypographyType } from '@/styles/emotion'
import { Theme } from '@emotion/react'

interface LabelProps {
  isRequired?: boolean
  children: React.ReactNode
  labelElement?: React.ReactNode // label 과 같이있는 버튼 컴포넌트
  labelStyle?: TypographyType
  labelColor?: string
}

export default function Label({ children, labelElement, isRequired = false, labelStyle, labelColor }: LabelProps) {
  return (
    <Style.ContainerRow>
      <Style.Row>
        <Style.Label $labelColor={labelColor} $labelStyle={labelStyle}>
          {children}
        </Style.Label>
        {isRequired && <Style.RequiredMark>*</Style.RequiredMark>}
      </Style.Row>
      {labelElement && labelElement}
    </Style.ContainerRow>
  )
}
