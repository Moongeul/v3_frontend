'use client'

import { CommentIcon } from '@/assets/svgComponents'
import { StyleComment } from '@/styles/question/Question.styles'

interface CommentSummaryProps {
  count: number
}

export default function CommentSummary({ count }: CommentSummaryProps) {
  return (
    <StyleComment>
      <CommentIcon width={20} height={20} />
      <p>{count}</p>
    </StyleComment>
  )
}
