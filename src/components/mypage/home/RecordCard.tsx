'use client'

import { StyleContent } from '@/styles/common/Common.styles'
import { StyleRecordCard } from '@/styles/mypage/MypageHome.styles'
import { typography } from '@/styles/theme'

interface RecordCardProps {
  backgroundColor: string
  borderColor: string
  count: string
  title: string
}

export default function RecordCard({ backgroundColor, borderColor, count, title }: RecordCardProps) {
  return (
    <StyleRecordCard $backgroundColor={backgroundColor} $borderColor={borderColor}>
      <StyleContent $typography={typography.badgeSm}>{title}</StyleContent>
      <StyleContent $typography={typography.subtitleMd}>{count}</StyleContent>
    </StyleRecordCard>
  )
}
