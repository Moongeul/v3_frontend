'use client'

import { BookInfoSummary, Spacing } from '@/components/common'
import { ButtonTextSecondaryRightArrowIcon, OptionIcon } from '@/assets/svgComponents'
import { AvatarGroup, CommentSummary } from '@/components/question/index'
import { useRouter } from 'next/navigation'
import {
  StyleAnswerButton,
  StyleQuestionCard,
  StyleQuestionCardHeader,
  StyleQuestionCardText,
} from '@/styles/question/Question.styles'
import { QuestionType } from '@/types/question'

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

  return (
    <StyleQuestionCard onClick={() => router.push(`/question/${questionId}`)} $width={width}>
      <StyleQuestionCardHeader>
        <AvatarGroup participantProfileImages={participantProfileImages} participantCount={participantCount} />
        {myArticle && <OptionIcon width={24} height={24} />}
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
          <StyleAnswerButton>
            <p>이 질문에 답해볼래요</p>
            <ButtonTextSecondaryRightArrowIcon width={20} height={20} />
          </StyleAnswerButton>
        </>
      ) : null}
    </StyleQuestionCard>
  )
}
