'use client'

import { StyleCommentInputWrapper } from '@/styles/question/QuestionComment.styles'
import { Button, TextInput } from '@/components/common'
import { WhiteUpIcon } from '@/assets/svgComponents'
import { useAnswerStore } from '@/store/answerStore'
import { postCreateAnswer } from '@/lib/client/question'
import { CreateAnswerType } from '@/types/question'

interface CommentInputProps {
  questionId: number
}

export default function CommentInput({ questionId }: CommentInputProps) {
  const { updateAnswer, createAnswer } = useAnswerStore((state) => state)
  return (
    <StyleCommentInputWrapper>
      <TextInput
        value={createAnswer.content}
        height={48}
        placeholder={'답변을 남겨보아요.'}
        onChange={(e) => {
          updateAnswer('content', e.target.value)
          updateAnswer('questionId', questionId)
        }}
      />
      <Button
        onClick={async () => {
          if (createAnswer) {
            const result = await postCreateAnswer(createAnswer as CreateAnswerType)
            console.log('result', result)
          }
        }}
        rightIcon={<WhiteUpIcon width={24} height={24} />}
        category={'icon'}
      />
    </StyleCommentInputWrapper>
  )
}
