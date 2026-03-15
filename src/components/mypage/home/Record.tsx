'use client'

import { Button, Label, Spacing } from '@/components/common'
import { baseColor, typography } from '@/styles/theme'
import { RecordCards } from '@/components/mypage'
import { MyCategoryResponseType } from '@/types/mypage'
import { useRouter } from 'next/navigation'

interface RecordProps {
  category: MyCategoryResponseType | undefined
  userId: number | undefined
}

export default function Record({ category, userId }: RecordProps) {
  const router = useRouter()

  return (
    <>
      <Label
        labelStyle={typography.subtitleLg}
        labelElement={
          <Button
            onClick={() => {
              router.push(`/mypage/${userId}/record`)
            }}
            variant={'ghost'}
            size={'sm'}
            width={85}
            textColor={baseColor.primary500}
          >
            전체보기
          </Button>
        }
      >
        기록
      </Label>
      <Spacing height={4} />
      <RecordCards category={category} />
    </>
  )
}
