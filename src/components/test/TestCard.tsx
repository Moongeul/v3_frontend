'use client'

import { StyleContentContainer, StyleTestCard } from '@/styles/test/Test.styles'
import { StyleContent } from '@/styles/common/Common.styles'
import { baseColor, typography } from '@/styles/theme'
import { ReactNode } from 'react'

interface TestCardProps {
  question: string
  questionNumber: number
  graphic: ReactNode
}

export default function TestCard({ question, questionNumber, graphic }: TestCardProps) {
  return (
    <div>
      <StyleTestCard>
        <StyleContentContainer>
          <StyleContent $textColor={baseColor.gray600} $typography={typography.bodySm}>
            Q.{questionNumber}
          </StyleContent>
          <StyleContent $textColor={baseColor.gray900} $typography={typography.titleSm} style={{ textAlign: 'center' }}>
            {question}
          </StyleContent>
        </StyleContentContainer>

        {graphic}
      </StyleTestCard>
    </div>
  )
}
