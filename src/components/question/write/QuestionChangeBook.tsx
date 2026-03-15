'use client'

import { useRouter } from 'next/navigation'
import { baseColor } from '@/styles/theme'
import { ChangeIcon } from '@/assets/svgComponents'
import Button from '../../common/Button'

export default function QuestionChangeBook() {
  const router = useRouter()

  return (
    <Button
      onClick={() => {
        router.push('/question/search')
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
