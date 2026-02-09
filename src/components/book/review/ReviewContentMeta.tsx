'use client'

import { StarRating } from '@/components/common'
import { StyleReviewContentMeta, StyleReviewContentMetaDate } from '@/styles/book/Review.styles'
import { formatDate } from '@/utils/common'

interface ReviewContentMetaProps {
  rating: number
  createdAt: string
}

export default function ReviewContentMeta({ rating, createdAt }: ReviewContentMetaProps) {
  return (
    <StyleReviewContentMeta>
      <StarRating size={'sm'} type={'short'} rating={rating} />
      <StyleReviewContentMetaDate>
        <p>|</p>
        <p>{formatDate(createdAt)}</p>
      </StyleReviewContentMetaDate>
    </StyleReviewContentMeta>
  )
}
