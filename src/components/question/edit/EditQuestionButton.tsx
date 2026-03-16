'use client'

import { Button } from '@/components/common'
import { putQuestion } from '@/lib/client/question'
import { useRouter } from 'next/navigation'
import { useToast } from '@/components/common/toast/ToastContext'
import { useEditStore } from '@/store/editStore'

interface EditQuestionButtonProps {
  questionId: string
}

export default function EditQuestionButton({ questionId }: EditQuestionButtonProps) {
  const { success, error } = useToast()
  const { questionEditData } = useEditStore((state) => state)
  const isActive = questionEditData.isbn !== '' && questionEditData.content !== ''
  const router = useRouter()

  const handleSubmit = async () => {
    const result = await putQuestion(questionEditData, questionId)
    if (result.success) {
      success('질문 수정 성공', '질문을 수정했어요.')
      if (result.data && result.data.data) {
        router.push(`/question/${result.data.data.questionId}`)
      }
    } else {
      error('질문 수정 실패', '질문을 수정하지 못헀어요.')
    }
  }

  return (
    <Button onClick={handleSubmit} variant={'primary'} size={'sm'} isActive={isActive} disabled={!isActive} width={65}>
      게시
    </Button>
  )
}
