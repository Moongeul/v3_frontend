'use client'

import React from 'react'
import * as Style from '@/styles/common/Label.styles'

interface LabelProps {
  isRequired?: boolean
  children: React.ReactNode
  labelElement?: React.ReactNode // label 과 같이있는 버튼 컴포넌트
}

export default function Label({ children, labelElement, isRequired = false }: LabelProps) {
  return (
    <Style.ContainerRow>
      <Style.Row>
        <Style.Label>{children}</Style.Label>
        {isRequired && <Style.RequiredMark>*</Style.RequiredMark>}
      </Style.Row>
      {labelElement && labelElement}
    </Style.ContainerRow>
  )
}
