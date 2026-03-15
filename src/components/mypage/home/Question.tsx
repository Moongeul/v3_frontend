'use client'

import { Button, Label, Spacing } from '@/components/common'
import { baseColor } from '@/styles/theme'
import { StyleQuestionContainer } from '@/styles/mypage/MypageHome.styles'
import { QuestionCard } from '@/components/question'
import { QuestionType } from '@/types/question'
import { useRouter } from 'next/navigation'
interface MyQuestionType {
  userId: number | undefined
  nickname: string | undefined
  myQuestions: QuestionType[] | undefined
}
export default function Question({ userId, nickname, myQuestions }: MyQuestionType) {
  const router = useRouter()
  return (
    <>
      <Label
        labelElement={
          <Button
            onClick={() => {
              router.push(`/mypage/${userId}/question`)
            }}
            variant={'ghost'}
            size={'sm'}
            width={85}
            textColor={baseColor.primary500}
          >
            전체보기
          </Button>
        }
      >
        {nickname}님이 올린 질문카드
      </Label>
      <Spacing height={4} />

      <StyleQuestionContainer>
        {myQuestions?.map((myQuestion) => (
          <QuestionCard
            key={myQuestion.questionId}
            questionId={myQuestion.questionId}
            content={myQuestion.content}
            bookInfo={myQuestion.bookInfo}
            participantProfileImages={myQuestion.participantProfileImages}
            participantCount={myQuestion.participantCount}
            createdAt={myQuestion.createdAt}
            commentCnt={myQuestion.commentCnt}
            myArticle={myQuestion.myArticle}
            isAnswerButton={false}
            width={237}
          />
        ))}
      </StyleQuestionContainer>
    </>
  )
}
