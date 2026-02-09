'use client'

import { Button } from '@/components/common'
import { InteractionButtonIcon } from '@/assets/svgComponents'
import { LikesInfoType } from '@/types/record'

export default function InteractionButton({
  wantToReadCount,
  impressiveExpressionCount,
  relatableCount,
  sameTasteCount,
  helpfulCount,
}: LikesInfoType) {
  return (
    <Button category={'icon'} size={'sm'} variant={'outline'} isActive={false}>
      <InteractionButtonIcon width={20} height={20} />
    </Button>
  )
}
