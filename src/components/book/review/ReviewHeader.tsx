'use client'

import {
  ReviewHeaderContainer,
  StyleReviewHeaderMetaContainer,
  StyleReviewHeaderMetaNickName,
  StyleReviewHeaderMetaTime,
  StyleReviewHeaderMetaUserInfo,
} from '@/styles/book/Review.styles'
import { OptionIcon, ProfileIcon } from '@/assets/svgComponents'
import { Badge } from '@/components/common'

interface ReviewHeaderProps {
  isProfile?: boolean
}

export default function ReviewHeader({ isProfile = false }: ReviewHeaderProps) {
  return (
    <ReviewHeaderContainer>
      <StyleReviewHeaderMetaContainer>
        {isProfile ? <ProfileIcon width={32} height={32} /> : null}
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
