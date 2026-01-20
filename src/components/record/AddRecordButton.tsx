'use client'

import { Button } from '@/components/common'
import { AddWhiteIcon } from '@/assets/svgComponents'

export default function AddRecordButton() {
  return (
    <Button width={100} size={'sm'} variant={'primary'} leftIcon={<AddWhiteIcon height={20} width={20} />}>
      기록 추가
    </Button>
  )
}
