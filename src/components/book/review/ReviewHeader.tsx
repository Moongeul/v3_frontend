'use client'
import {
  ReviewHeaderContainer,
  StyleReviewHeaderMetaContainer,
  StyleReviewHeaderMetaNickName,
  StyleReviewHeaderMetaTime,
  StyleReviewHeaderMetaUserInfo,
} from '@/styles/book/Review.styles'
import { OptionIcon } from '@/assets/svgComponents'
import { Badge } from '@/components/common'

export default function ReviewHeader() {
  return (
    <ReviewHeaderContainer>
      <StyleReviewHeaderMetaContainer>
        <StyleReviewHeaderMetaUserInfo>
          <StyleReviewHeaderMetaNickName>닉네임</StyleReviewHeaderMetaNickName>
          <Badge badgeLabel={'신상헌터'} />
        </StyleReviewHeaderMetaUserInfo>
        <StyleReviewHeaderMetaTime>1분전</StyleReviewHeaderMetaTime>
      </StyleReviewHeaderMetaContainer>
      <OptionIcon width={24} height={24} />
    </ReviewHeaderContainer>
  )
}
