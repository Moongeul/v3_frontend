'use client'

import { QuestionButton, QuestionCard } from '@/components/question/index'
import { StyleRecordListRowWrapper } from '@/styles/question/Question.styles'
import { QuestionType } from '@/types/question'
import { Spinner } from '@/components/common'
import Cookies from 'js-cookie'

interface QuestionCardRowListProps {
  questionList: QuestionType[] | undefined
}
export default function QuestionCardRowList({ questionList }: QuestionCardRowListProps) {
  const loginMemberId = Cookies.get('memberId')
  if (!questionList) return <Spinner size={'lg'} />

  return (
    <StyleRecordListRowWrapper>
      {questionList?.map((question) => (
        <QuestionCard key={question.questionId} isAnswerButton={true} width={237} {...question} />
      ))}
      <QuestionButton width={237} />
    </StyleRecordListRowWrapper>
  )
}
