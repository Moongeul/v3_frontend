'use client'

import Button from '@/components/common/Button'
import { ChangeIcon } from '@/assets/svgComponents'
import { baseColor } from '@/styles/theme'

export default function ChangeBook() {
  return (
    <Button
      textColor={baseColor.primary600}
      leftIcon={<ChangeIcon width={20} height={20} />}
      size={'sm'}
      variant={'ghost'}
    >
      책 변경
    </Button>
  )
}
