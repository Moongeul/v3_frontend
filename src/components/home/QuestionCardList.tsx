'use client'

import { StyleRecordListWrapper } from '@/styles/home/Question.styles'
import { QuestionButton, QuestionCard } from '@/components/home/index'

export default function QuestionCardList() {
  return (
    <StyleRecordListWrapper>
      <QuestionCard />
      <QuestionCard />
      <QuestionButton />
    </StyleRecordListWrapper>
  )
}
