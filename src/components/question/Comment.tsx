'use client'

import { ReviewContentText, ReviewHeader } from '@/components/book'
import { BottomBorder, Spacing } from '@/components/common'
import { StyleReviewItemContainer } from '@/styles/book/Review.styles'
import { ProfileIcon } from '@/assets/svgComponents'

export default function Comment() {
  return (
    <div>
      <Spacing height={16} />
      <StyleReviewItemContainer>
        <ProfileIcon width={32} height={32} />
        <div>
          <ReviewHeader />
          <Spacing height={8} />
          <ReviewContentText content={'djWj'} />
        </div>
      </StyleReviewItemContainer>
      <Spacing height={16} />
      <BottomBorder />
    </div>
  )
}
