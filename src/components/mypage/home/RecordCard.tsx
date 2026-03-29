'use client'

import { StyleContent } from '@/styles/common/Common.styles'
import { StyleRecordCard } from '@/styles/mypage/MypageHome.styles'
import { typography } from '@/styles/theme'
import { useRouter } from 'next/navigation'

interface RecordCardProps {
  id: number
  backgroundColor: string
  borderColor: string
  count: string
  title: string
  userId: number | undefined | string
}

export default function RecordCard({ id, backgroundColor, borderColor, count, title, userId }: RecordCardProps) {
  const router = useRouter()
  const formattedTitle = title.length >= 7 ? `${title.slice(0, 7)}...` : title

  return (
    <StyleRecordCard
      onClick={() => {
        router.push(`/mypage/${userId}/record/${id}`)
      }}
      $backgroundColor={backgroundColor}
      $borderColor={borderColor}
    >
      <StyleContent $typography={typography.badgeSm}>{formattedTitle}</StyleContent>
      <StyleContent $typography={typography.subtitleMd}>{count}</StyleContent>
    </StyleRecordCard>
  )
}
