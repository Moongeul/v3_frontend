'use client'

import { BookInfoSummary, Spacing } from '@/components/common'
import { ButtonTextSecondaryRightArrowIcon } from '@/assets/svgComponents'
import { AvatarGroup, CommentSummary } from '@/components/question/index'
import { useRouter } from 'next/navigation'
import {
  StyleAnswerButton,
  StyleQuestionCard,
  StyleQuestionCardHeader,
  StyleQuestionCardText,
} from '@/styles/question/Question.styles'
import { QuestionType } from '@/types/question'
import ThemeOptionIcon from '@/components/common/icon/ThemeOptionIcon'
import { useState } from 'react'
import { useEditStore } from '@/store/editStore'
import DeleteQuestionModal from '@/components/common/modal/DeleteQuestionModal'
import QuestionOptionsMenu from '@/components/common/option/QuestionOptionMenu'
import UserOptionMenu from '@/components/common/option/UserOptionMenu'
import Cookies from 'js-cookie'
import { useModalStore } from '@/store/modalStore'
import { useBackPathStore } from '@/store/backPathStore'

interface QuestionCardProps extends QuestionType {
  width?: number
  isAnswerButton?: boolean
}

export default function QuestionCard({
  width,
  isAnswerButton = false,
  questionId,
  bookInfo,
  commentCnt,
  createdAt,
  participantCount,
  participantProfileImages,
  myArticle,
  content,
}: QuestionCardProps) {
  const router = useRouter()
  const [isMenuOpen, setIsMenuOpen] = useState(false) // 메뉴 열림 상태
  const { setModal } = useModalStore()
  const { setQuestionField } = useEditStore((state) => state)
  const { setBackPath } = useBackPathStore()
  const loginMemberId = Cookies.get('memberId')

  const handleMenuClick = (e: React.MouseEvent) => {
    e.stopPropagation() // 카드 클릭 이벤트(상세 이동)가 발생하지 않도록 방지
    setIsMenuOpen(!isMenuOpen)
  }

  const onDeleteClick = () => {
    setIsMenuOpen(false)
  }

  const onEditClick = () => {
    setQuestionField('content', content)
    setQuestionField('isbn', bookInfo.isbn)
    setIsMenuOpen(false)
    router.push(`/question/${questionId}/edit?isbn=${bookInfo.isbn}`)
  }

  return (
    <StyleQuestionCard
      onClick={(e) => {
        if (loginMemberId) {
          e.stopPropagation()
          router.push(`/question/${questionId}`)
        }
      }}
      $width={width}
    >
      <DeleteQuestionModal questionId={questionId} />

      <StyleQuestionCardHeader>
        <AvatarGroup participantProfileImages={participantProfileImages} participantCount={participantCount} />
        {myArticle ? (
          <div style={{ position: 'relative' }}>
            <ThemeOptionIcon onClick={handleMenuClick} />
            {isMenuOpen && <QuestionOptionsMenu onDeleteClick={onDeleteClick} onEditClick={onEditClick} />}
          </div>
        ) : (
          <>
            <div style={{ position: 'relative' }}>
              <ThemeOptionIcon onClick={handleMenuClick} />
              {isMenuOpen && <UserOptionMenu handleMenuClick={handleMenuClick} />}
            </div>
          </>
        )}
      </StyleQuestionCardHeader>
      <Spacing height={8} />

      <BookInfoSummary
        disable={true}
        rating={bookInfo.ratingAverage}
        styleType={'lightYellow'}
        publisher={bookInfo.publisher}
        pubdate={bookInfo.pubdate}
        isbn={bookInfo.isbn}
        author={bookInfo.author}
        title={bookInfo.title}
        bookImage={bookInfo.bookImage}
      />
      <Spacing height={8} />

      <StyleQuestionCardText>{content}</StyleQuestionCardText>
      <Spacing height={12} />

      <CommentSummary count={commentCnt} />

      {isAnswerButton ? (
        <>
          <Spacing height={12} />
          <StyleAnswerButton
            onClick={() => {
              if (loginMemberId) {
                router.push(`/question/${questionId}`)
              } else {
                setModal('isRequiredLoginModalOpen', true)
                setBackPath('/home?tab=PUBLIC')
              }
            }}
          >
            <p>이 질문에 답해볼래요</p>
            <ButtonTextSecondaryRightArrowIcon width={20} height={20} />
          </StyleAnswerButton>
        </>
      ) : null}
    </StyleQuestionCard>
  )
}
