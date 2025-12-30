'use client'
import { Button } from '@/components/common'

import { baseColor } from '@/styles/theme'
import { useRouter } from 'next/navigation'

export default function ViewAllReviewsButton() {
  const router = useRouter()
  return (
    <Button
      onClick={() => {
        router.push('/book/review')
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
