'use client'

import { StyleContentContainer, StyleTestCard } from '@/styles/test/Test.styles'
import { StyleContent } from '@/styles/common/Common.styles'
import { typography } from '@/styles/theme'
import { ReactNode } from 'react'
import { useTheme } from '@emotion/react'

interface TestCardProps {
  question: string
  questionNumber: number
  graphic: ReactNode
}

export default function TestCard({ question, questionNumber, graphic }: TestCardProps) {
  const theme = useTheme()

  return (
    <div>
      <StyleTestCard>
        <StyleContentContainer>
          <StyleContent $textColor={theme.colors.textFieldFocusText} $typography={typography.bodySm}>
            Q.{questionNumber}
          </StyleContent>
          <StyleContent
            $textColor={theme.colors.headerText}
            $typography={typography.titleSm}
            style={{ textAlign: 'center' }}
          >
            {question}
          </StyleContent>
        </StyleContentContainer>

        {graphic}
      </StyleTestCard>
    </div>
  )
}
