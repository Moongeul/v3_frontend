'use client'

import { Button } from '@/components/common'
import { AddWhiteIcon } from '@/assets/svgComponents'
import { useRouter } from 'next/navigation'

interface StoryWriteButtonProps {
  recordId: string
}

export default function StoryWriteButton({ recordId }: StoryWriteButtonProps) {
  const router = useRouter()
  return (
    <Button
      onClick={() => {
        router.push(`/story/${recordId}/write`)
      }}
      width={110}
      size={'sm'}
      variant={'primary'}
      leftIcon={<AddWhiteIcon width={15} height={15} />}
    >
      스토리 추가
    </Button>
  )
}
