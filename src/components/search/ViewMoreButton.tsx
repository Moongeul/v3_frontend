'use client'

import { Button } from '@/components/common'
import { useRouter } from 'next/navigation'

interface ViewMoreButtonProps {
  path: string
}

export default function ViewMoreButton({ path }: ViewMoreButtonProps) {
  const router = useRouter()
  return (
    <Button
      width={64}
      variant={'ghost'}
      size={'sm'}
      onClick={() => {
        router.push(path)
      }}
    >
      더보기
    </Button>
  )
}
