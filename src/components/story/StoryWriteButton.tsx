'use client'

import { Button } from '@/components/common'
import { AddWhiteIcon } from '@/assets/svgComponents'
import { useRouter } from 'next/navigation'

export default function StoryWriteButton() {
  const router = useRouter()
  return (
    <Button
      onClick={() => {
        router.push('/write')
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
