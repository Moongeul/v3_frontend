'use client'

import { useRouter } from 'next/navigation'
import Button from '@/components/common/Button'
import { AddWhiteIcon } from '@/assets/svgComponents'

export default function WriteButton() {
  const router = useRouter()
  return (
    <Button
      onClick={() => {
        router.push('/write')
      }}
      width={81}
      size={'sm'}
      variant={'primary'}
      leftIcon={<AddWhiteIcon width={15} height={15} />}
    >
      기록
    </Button>
  )
}
