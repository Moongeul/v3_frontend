'use client'

import { BookInfoSummary, Spacing } from '@/components/common'
import { ButtonTextSecondaryRightArrowIcon } from '@/assets/svgComponents'
import { AvatarGroup, CommentSummary } from '@/components/question/index'
import { useRouter } from 'next/navigation'
import { StyleAnswerButton, StyleQuestionCard, StyleQuestionCardText } from '@/styles/question/Question.styles'

interface QuestionCardProps {
  width?: number
  isAnswerButton?: boolean
}

export default function QuestionCard({ width, isAnswerButton = false }: QuestionCardProps) {
  const router = useRouter()
  return (
    <StyleQuestionCard onClick={() => router.push('/question/1')} $width={width}>
      <AvatarGroup />
      <Spacing height={8} />

      <BookInfoSummary
        rating={4.9}
        styleType={'lightYellow'}
        publisher={'korfit'}
        pubdate={'2025'}
        isbn={'1'}
        author={'황유림'}
        title={'책 제목이 길어질 경우에'}
        bookImage={'/bookimage.png'}
      />
      <Spacing height={8} />

      <StyleQuestionCardText>질문 입니다.</StyleQuestionCardText>
      <Spacing height={12} />

      <CommentSummary count={3} />

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
