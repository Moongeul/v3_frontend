'use client'

import { useMemo } from 'react'
import { useRouter } from 'next/navigation'

import { editPost } from '@/lib/client/write'

import Button from '@/components/common/Button'
import { useToast } from '@/components/common/toast/ToastContext'
import { useEditStore } from '@/store/editStore'

interface EditButtonProps {
  postId: number
}

export default function EditButton({ postId }: EditButtonProps) {
  const router = useRouter()
  const { success, error } = useToast()
  const { editData, resetEditData } = useEditStore((state) => state)

  const isActive = useMemo(() => {
    const hasRequiredFields = editData.readDate !== null && editData.isbn !== null

    const isContentValid = (editData.content?.length ?? 0) <= 2000

    return hasRequiredFields && isContentValid
  }, [editData])

  const handleSubmit = async () => {
    const result = await editPost(editData, postId)
    if (result.success) {
      success('게시글 수정 성공', '게시글 수정에 성공했어요.')
      router.push('/home?tab=PUBLIC')
      resetEditData()
    } else {
      error('게시글 수정 실패', '게시글 수정에 실패했어요.')
    }
  }

  return (
    <Button onClick={handleSubmit} buttonType={'button'} width={65} isActive={true} variant={'primary'} size={'sm'}>
      게시
    </Button>
  )
}
