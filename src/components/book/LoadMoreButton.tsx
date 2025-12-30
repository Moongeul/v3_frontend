'use client'

import { Button } from '@/components/common'
import { baseColor } from '@/styles/theme'
import { useRouter } from 'next/navigation'

export default function LoadMoreButton() {
  const router = useRouter()
  return (
    <Button
      onClick={() => {
        router.push('/book/bestseller')
      }}
      variant={'ghost'}
      size={'sm'}
      width={64}
      textColor={baseColor.primary500}
    >
      더보기
    </Button>
  )
}
