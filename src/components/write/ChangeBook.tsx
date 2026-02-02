'use client'

import Button from '@/components/common/Button'
import { ChangeIcon } from '@/assets/svgComponents'
import { baseColor } from '@/styles/theme'
import { useRouter } from 'next/navigation'

export default function ChangeBook() {
  const router = useRouter()
  return (
    <Button
      onClick={() => {
        router.push('/write/search')
      }}
      textColor={baseColor.primary600}
      leftIcon={<ChangeIcon width={20} height={20} />}
      size={'sm'}
      variant={'ghost'}
    >
      책 변경
    </Button>
  )
}
