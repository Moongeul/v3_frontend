'use client'
import { Button } from '@/components/common'

import { baseColor } from '@/styles/theme'
import { useRouter } from 'next/navigation'

interface ViewAllReviewsButtonProps {
  isbn: string
}

export default function ViewAllReviewsButton({ isbn }: ViewAllReviewsButtonProps) {
  const router = useRouter()
  return (
    <Button
      onClick={() => {
        router.push(`/book/${isbn}/review`)
      }}
      variant={'ghost'}
      size={'sm'}
      width={64}
      textColor={baseColor.primary500}
    >
      전체보기
    </Button>
  )
}
