'use client'

import { ReviewSummary, ReviewItem } from '@/components/book/index'
import { Spacing } from '@/components/common'
import { BookReviewType } from '@/types/book'

interface BookReviewsProps {
  reviews: BookReviewType[]
  total: number
}

export default function BookReviews({ reviews, total }: BookReviewsProps) {
  return (
    <>
      <Spacing height={4} />
      <ReviewSummary total={total} />

      {reviews.map((review) => (
        <ReviewItem
          key={review.postId}
          readDate={review.createdAt}
          postId={review.postId}
          rating={review.rating}
          likesInfo={review.likesInfo}
          content={review.content}
          created={review.createdAt}
          memberInfo={{
            memberId: 1,
            readingTasteType: review.readingTasteType,
            profileImage: review.profileImage,
            nickname: review.nickname,
          }}
          quotes={review.quotes}
        />
      ))}
    </>
  )
}
