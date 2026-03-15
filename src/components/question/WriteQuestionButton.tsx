'use client'

import { Button } from '@/components/common'
import { createQuestion } from '@/lib/client/question'
import { useRouter } from 'next/navigation'
import { useToast } from '@/components/common/toast/ToastContext'
import { useQuestionStore } from '@/store/questionStore'

export default function WriteQuestionButton() {
  const { success, error } = useToast()
  const question = useQuestionStore((state) => state.question)
  const isActive = question.isbn !== '' && question.content !== ''
  const router = useRouter()

  const handleSubmit = async () => {
    const result = await createQuestion(question)
    if (result.success) {
      success('질문 생성 성공', '질문을 생성했어요.')
      if (result.data && result.data.data) {
        router.push(`/question/${result.data.data.questionId}`)
      }
    } else {
      error('질문 생성 실패', '질문을 생성하지 못헀어요.')
    }
  }

  return (
    <Button onClick={handleSubmit} variant={'primary'} size={'sm'} isActive={isActive} disabled={!isActive} width={65}>
      게시
    </Button>
  )
}
