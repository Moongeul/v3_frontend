'use client'

import {
  StyleReviewSummaryContainer,
  StyleReviewSummaryContent,
  StyleReviewSummaryRating,
} from '@/styles/book/Review.styles'
import { StarFillGrayIcon } from '@/assets/svgComponents'

export default function ReviewSummary() {
  return (
    <StyleReviewSummaryContainer>
      <StarFillGrayIcon width={20} height={20} />
      <StyleReviewSummaryRating>4.9</StyleReviewSummaryRating>
      <StyleReviewSummaryContent>
        <p>|</p>
        <p>4개의 평가</p>
      </StyleReviewSummaryContent>
    </StyleReviewSummaryContainer>
  )
}
