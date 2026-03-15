'use client'
import { WhiteRightArrowIcon } from '@/assets/svgComponents'
import { StyleQuestionButton, StyleQuestionCard } from '@/styles/question/Question.styles'
import { useRouter } from 'next/navigation'

interface QuestionButtonProps {
  width?: number
}

export default function QuestionButton({ width }: QuestionButtonProps) {
  const router = useRouter()

  return (
    <StyleQuestionCard $width={width}>
      <StyleQuestionButton
        onClick={() => {
          router.push('/question/write')
        }}
      >
        나도 질문 올리기
        <WhiteRightArrowIcon />
      </StyleQuestionButton>
    </StyleQuestionCard>
  )
}
