'use client'

import { StyleCommentInputWrapper } from '@/styles/question/QuestionComment.styles'
import { Button, TextInput } from '@/components/common'
import { WhiteUpIcon } from '@/assets/svgComponents'
import { useAnswerStore } from '@/store/answerStore'
import { postCreateAnswer } from '@/lib/client/question'
import { CreateAnswerType } from '@/types/question'
import { useToast } from '@/components/common/toast/ToastContext'
import { useRouter } from 'next/navigation'

interface CommentInputProps {
  questionId: number
}

export default function CommentInput({ questionId }: CommentInputProps) {
  const router = useRouter()
  const { success, error } = useToast()
  const { updateAnswer, createAnswer } = useAnswerStore((state) => state)

  const handlePostAnswer = async () => {
    const result = await postCreateAnswer({
      ...createAnswer,
      questionId: questionId,
    } as CreateAnswerType)

    if (result.success) {
      success('답변 성공', '답변을 남겼어요.')
      updateAnswer('content', '')

      // 3. ✨ 서버 컴포넌트 데이터를 다시 불러와서 화면을 갱신합니다.
      router.refresh()
    } else {
      error('답변 실패', '답변을 하지 못했어요.')
    }
  }

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
      <Button onClick={handlePostAnswer} rightIcon={<WhiteUpIcon width={24} height={24} />} category={'icon'} />
    </StyleCommentInputWrapper>
  )
}
