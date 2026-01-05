'use client'

import { QuestionCard } from '@/components/question/index'
import { Spacing } from '@/components/common'
import { StyleRecordListColumnWrapper } from '@/styles/question/Question.styles'

export default function QuestionCardColumnList() {
  return (
    <StyleRecordListColumnWrapper>
      <QuestionCard />
      <QuestionCard />
      <QuestionCard />
      <Spacing height={30} />
    </StyleRecordListColumnWrapper>
  )
}
