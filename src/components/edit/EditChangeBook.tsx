'use client'

import Button from '@/components/common/Button'
import { ChangeIcon } from '@/assets/svgComponents'
import { baseColor } from '@/styles/theme'
import { useRouter } from 'next/navigation'

interface EditChangeBookProps {
  postId: string
}

export default function EditChangeBook({ postId }: EditChangeBookProps) {
  const router = useRouter()
  return (
    <Button
      onClick={() => {
        router.push(`/${postId}/edit/search`)
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
