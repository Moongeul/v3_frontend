'use client'

import { QuestionButton, QuestionCard } from '@/components/question/index'
import { StyleRecordListRowWrapper } from '@/styles/question/Question.styles'

export default function QuestionCardRowList() {
  return (
    <StyleRecordListRowWrapper>
      <QuestionCard isAnswerButton={true} width={237} />
      <QuestionCard isAnswerButton={true} width={237} />
      <QuestionButton width={237} />
    </StyleRecordListRowWrapper>
  )
}
