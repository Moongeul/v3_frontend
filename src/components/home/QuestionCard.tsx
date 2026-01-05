'use client'

import {
  StyleAnswerButton,
  StyleComment,
  StyleQuestionCard,
  StyleQuestionCardText,
} from '@/styles/home/Question.styles'
import { BookInfoSummary, Spacing } from '@/components/common'
import { ButtonTextSecondaryRightArrowIcon, CommentIcon } from '@/assets/svgComponents'
import { AvatarGroup } from '@/components/home/index'

export default function QuestionCard() {
  return (
    <StyleQuestionCard>
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

      <StyleComment>
        <CommentIcon width={20} height={20} />
        <p>3</p>
      </StyleComment>
      <Spacing height={12} />

      <StyleAnswerButton>
        <p>이 질문에 답해볼래요</p>
        <ButtonTextSecondaryRightArrowIcon width={20} height={20} />
      </StyleAnswerButton>
    </StyleQuestionCard>
  )
}
