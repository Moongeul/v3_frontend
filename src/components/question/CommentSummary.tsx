'use client'

import { StyleComment } from '@/styles/question/Question.styles'
import ThemeCommentIcon from '@/components/common/icon/ThemeCommentIcon'
import { StyleContent } from '@/styles/common/Common.styles'
import { typography } from '@/styles/theme'
import { useTheme } from '@emotion/react'

interface CommentSummaryProps {
  count: number | undefined
}

export default function CommentSummary({ count }: CommentSummaryProps) {
  const theme = useTheme()

  return (
    <StyleComment>
      <ThemeCommentIcon />
      <StyleContent $textColor={theme.colors.textFieldDefaultText} $typography={typography.badgeSm}>
        댓글 {count}
      </StyleContent>
    </StyleComment>
  )
}
