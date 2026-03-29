'use client'

import { ReviewContentText, ReviewHeader } from '@/components/book'
import { BottomBorder, Spacing } from '@/components/common'
import { ProfileImageWrapper, StyleReviewItemContainer } from '@/styles/book/Review.styles'
import { AnswerType } from '@/types/question'
import Image from 'next/image'
import AnswerOptionMenu from '@/components/common/option/AnswerOptionMenu'
import DeleteAnswerModal from '@/components/common/modal/DeleteAnswerModal'
import { useState } from 'react'
import UserOptionMenu from '@/components/common/option/UserOptionMenu'
import ReportModal from '@/components/common/modal/ReportModal'
import BlockModal from '@/components/common/modal/BlockModal'

export default function Comment({ memberInfo, createdAt, myAnswer, answerId, content }: AnswerType) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleMenuClick = (e: React.MouseEvent) => {
    e.stopPropagation() // 카드 클릭 이벤트(상세 이동)가 발생하지 않도록 방지
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <div>
      <Spacing height={16} />
      <DeleteAnswerModal answerId={answerId} />
      <ReportModal />
      <BlockModal />
      <StyleReviewItemContainer>
        <ProfileImageWrapper>
          <Image src={memberInfo.profileImage} alt={'프로필'} width={32} height={32} />
        </ProfileImageWrapper>
        <div style={{ width: '100%' }}>
          <ReviewHeader
            handleMenuClick={handleMenuClick}
            isMenuOpen={isMenuOpen}
            menu={
              myAnswer ? (
                <AnswerOptionMenu content={content} answerId={answerId} handleMenuClick={handleMenuClick} />
              ) : (
                <UserOptionMenu handleMenuClick={handleMenuClick} />
              )
            }
            memberInfo={memberInfo}
            created={createdAt}
          />
          <Spacing height={8} />
          <ReviewContentText content={content} />
        </div>
      </StyleReviewItemContainer>
      <Spacing height={16} />
      <BottomBorder />
    </div>
  )
}
