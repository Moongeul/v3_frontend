'use client'

import { ReviewSummary, ReviewItem } from '@/components/book/index'
import { Spacing } from '@/components/common'

export default function BookReviews() {
  return (
    <>
      <Spacing height={4} />
      <ReviewSummary />

      <ReviewItem />
      <ReviewItem />
      <ReviewItem />
      <ReviewItem />
      <ReviewItem />
      <ReviewItem />
    </>
  )
}
