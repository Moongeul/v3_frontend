'use client'

import { ReviewContentText, ReviewHeader } from '@/components/book'
import { BottomBorder, Spacing } from '@/components/common'
import { ProfileImageWrapper, StyleReviewItemContainer } from '@/styles/book/Review.styles'
import { AnswerType } from '@/types/question'
import Image from 'next/image'

export default function Comment({ memberInfo, createdAt, myAnswer, answerId, content }: AnswerType) {
  return (
    <div>
      <Spacing height={16} />
      <StyleReviewItemContainer>
        <ProfileImageWrapper>
          <Image src={memberInfo.profileImage} alt={'프로필'} width={32} height={32} />
        </ProfileImageWrapper>
        <div style={{ width: '100%' }}>
          <ReviewHeader memberInfo={memberInfo} created={createdAt} />
          <Spacing height={8} />
          <ReviewContentText content={content} />
        </div>
      </StyleReviewItemContainer>
      <Spacing height={16} />
      <BottomBorder />
    </div>
  )
}
