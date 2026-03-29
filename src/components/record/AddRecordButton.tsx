'use client'

import { Button } from '@/components/common'
import { AddWhiteIcon } from '@/assets/svgComponents'
import { useRouter } from 'next/navigation'

export default function AddRecordButton() {
  const router = useRouter()

  return (
    <Button
      onClick={() => {
        router.push('/write')
      }}
      width={100}
      size={'sm'}
      variant={'primary'}
      leftIcon={<AddWhiteIcon height={20} width={20} />}
    >
      기록 추가
    </Button>
  )
}
