'use client'

import { StyleReviewContent } from '@/styles/book/Review.styles'

interface ReviewContentTextProps {
  content: string | undefined
}

export default function ReviewContentText({ content }: ReviewContentTextProps) {
  return <StyleReviewContent>{content}</StyleReviewContent>
}
