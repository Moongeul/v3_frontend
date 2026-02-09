'use client'

import { Button } from '@/components/common'
import { InteractionButtonIcon } from '@/assets/svgComponents'
import { LikesInfoType } from '@/types/record'

interface InteractionButtonProps {
  likesInfo: LikesInfoType
}

export default function InteractionButton({ likesInfo }: InteractionButtonProps) {
  return (
    <Button category={'icon'} size={'sm'} variant={'outline'} isActive={false}>
      <InteractionButtonIcon width={20} height={20} />
    </Button>
  )
}
