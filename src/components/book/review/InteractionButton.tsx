'use client'
import { Button } from '@/components/common'
import { InteractionButtonIcon } from '@/assets/svgComponents'

export default function InteractionButton() {
  return (
    <Button category={'icon'} size={'sm'} variant={'outline'} isActive={false}>
      <InteractionButtonIcon width={20} height={20} />
    </Button>
  )
}
