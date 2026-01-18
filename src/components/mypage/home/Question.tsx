'use client'

import { Button, Label } from '@/components/common'
import { baseColor } from '@/styles/theme'
import { StyleQuestionContainer } from '@/styles/mypage/MypageHome.styles'
import { QuestionCard } from '@/components/question'

export default function Question() {
  return (
    <>
      <Label
        labelElement={
          <Button variant={'ghost'} size={'sm'} width={85} textColor={baseColor.primary500}>
            전체보기
          </Button>
        }
      >
        내가 올린 질문카드
      </Label>

      <StyleQuestionContainer>
        <QuestionCard width={237} />
        <QuestionCard width={237} />
        <QuestionCard width={237} />
      </StyleQuestionContainer>
    </>
  )
}
