'use client'

import { useMemo } from 'react'
import { useRouter } from 'next/navigation'

import { useWriteStore } from '@/store/writeStore'

import { createPost } from '@/lib/client/write'

import Button from '@/components/common/Button'
import { useToast } from '@/components/common/toast/ToastContext'

export default function SubmitButton() {
  const router = useRouter()
  const { success, error } = useToast()
  const { writeData, resetWriteData } = useWriteStore((state) => state)

  const isActive = useMemo(() => {
    const hasRequiredFields =
      writeData.postVisibility !== null &&
      writeData.categoryId !== null &&
      writeData.readDate !== null &&
      writeData.isbn !== null

    const isContentValid = (writeData.content?.length ?? 0) <= 2000

    return hasRequiredFields && isContentValid
  }, [writeData])

  const handleSubmit = async () => {
    const result = await createPost(writeData)
    if (result.success) {
      success('게시글 생성 성공', '게시글 작성에 성공했어요.')
      router.push('/home?tab=PUBLIC')
      resetWriteData()
    } else {
      error('게시글 생성 실패', '게시글 작성에 실패했어요.')
    }
  }

  return (
    <Button
      onClick={handleSubmit}
      buttonType={'button'}
      width={65}
      disabled={!isActive}
      isActive={isActive}
      variant={'primary'}
      size={'sm'}
    >
      게시
    </Button>
  )
}
