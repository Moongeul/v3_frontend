'use client'
import { WhiteRightArrowIcon } from '@/assets/svgComponents'
import { StyleQuestionButton, StyleQuestionCard } from '@/styles/question/Question.styles'

interface QuestionButtonProps {
  width?: number
}

export default function QuestionButton({ width }: QuestionButtonProps) {
  return (
    <StyleQuestionCard $width={width}>
      <StyleQuestionButton>
        나도 질문 올리기
        <WhiteRightArrowIcon />
      </StyleQuestionButton>
    </StyleQuestionCard>
  )
}
