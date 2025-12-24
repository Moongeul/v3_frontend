'use client'

import { useCallback, useMemo } from 'react'
import { useRouter } from 'next/navigation'

import { useWriteStore } from '@/store/writeStore'

import { createPost } from '@/lib/client/write'

import Button from '@/components/common/Button'

export default function SubmitButton() {
  const router = useRouter()
  const writeData = useWriteStore((state) => state.writeData)

  const isActive = useMemo(() => {
    const hasRequiredFields =
      writeData.postVisibility !== null &&
      writeData.categoryId !== null &&
      writeData.readDate !== null &&
      writeData.isbn !== null

    const isContentValid = (writeData.content?.length ?? 0) <= 2000

    return hasRequiredFields && isContentValid
  }, [writeData])

  const handleSubmit = useCallback(async () => {
    const result = await createPost(writeData)
    console.log('글쓰기 제출', result)
    if (result.success) {
      router.back()
    }
  }, [])

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
