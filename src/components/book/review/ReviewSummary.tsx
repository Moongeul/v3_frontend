'use client'

import {
  StyleReviewSummaryContainer,
  StyleReviewSummaryContent,
  StyleReviewSummaryRating,
} from '@/styles/book/Review.styles'
import { StarFillGrayIcon } from '@/assets/svgComponents'

interface ReviewSummaryProps {
  total: number
}

export default function ReviewSummary({ total }: ReviewSummaryProps) {
  return (
    <StyleReviewSummaryContainer>
      <StarFillGrayIcon width={20} height={20} />
      <StyleReviewSummaryRating>4.9</StyleReviewSummaryRating>
      <StyleReviewSummaryContent>
        <p>|</p>
        <p>{total}개의 평가</p>
      </StyleReviewSummaryContent>
    </StyleReviewSummaryContainer>
  )
}
