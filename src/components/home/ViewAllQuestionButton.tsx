'use client'

import { Button } from '@/components/common'
import { baseColor } from '@/styles/theme'
import { useRouter } from 'next/navigation'

export default function ViewAllQuestionButton() {
  const router = useRouter()
  return (
    <Button
      width={73}
      onClick={() => router.push('/question')}
      textColor={baseColor.primary500}
      size={'sm'}
      variant={'ghost'}
    >
      전체보기
    </Button>
  )
}
