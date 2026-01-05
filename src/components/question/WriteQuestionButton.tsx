'use client'

import { Button } from '@/components/common'
import { useQuestionStore } from '@/store/questionStore'
import { createQuestion } from '@/lib/client/question'
import { useRouter } from 'next/navigation'

export default function WriteQuestionButton() {
  const question = useQuestionStore((state) => state.question)
  const isActive = question.isbn !== '' && question.content !== ''
  const router = useRouter()

  const handleSubmit = async () => {
    const result = await createQuestion(question)
    if (result.data && result.data.data) {
      router.push(`/question/${result.data.data.questionId}`)
    }
  }
  return (
    <Button onClick={handleSubmit} variant={'primary'} size={'sm'} isActive={isActive} disabled={!isActive} width={65}>
      게시
    </Button>
  )
}
