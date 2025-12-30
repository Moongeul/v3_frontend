'use client'

import { BottomBorder, Spacing } from '@/components/common'
import { StyleReviewContentContainer, StyleReviewItemContainer } from '@/styles/book/Review.styles'
import { ProfileIcon } from '@/assets/svgComponents'
import InteractionButton from '@/components/book/review/InteractionButton'
import ReviewContent from '@/components/book/review/ReviewContent'
import ReviewHeader from '@/components/book/review/ReviewHeader'

export default function ReviewItem() {
  return (
    <div>
      <Spacing height={20} />
      <StyleReviewItemContainer>
        <ProfileIcon width={32} height={32} />
        <StyleReviewContentContainer>
          <ReviewHeader />

          <Spacing height={8} />
          <ReviewContent content={'기록 어쩌구 저쩌그'} />

          <Spacing height={12} />
          <InteractionButton />
        </StyleReviewContentContainer>
      </StyleReviewItemContainer>
      <Spacing height={20} />
      <BottomBorder />
    </div>
  )
}
