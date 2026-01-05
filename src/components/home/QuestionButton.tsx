'use client'
import { StyleQuestionButton, StyleQuestionCard } from '@/styles/home/Question.styles'
import { WhiteRightArrowIcon } from '@/assets/svgComponents'

export default function QuestionButton() {
  return (
    <StyleQuestionCard>
      <StyleQuestionButton>
        나도 질문 올리기
        <WhiteRightArrowIcon />
      </StyleQuestionButton>
    </StyleQuestionCard>
  )
}
