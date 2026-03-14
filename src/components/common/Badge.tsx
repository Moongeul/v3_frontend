'use client'

import * as S from '@/styles/common/Badge.styles'
import { TagKorType } from '@/types/user'

interface BadgeProps {
  backgroundColor?: string
  textColor?: string
  badgeLabel: TagKorType | undefined | string
}
export default function Badge({ backgroundColor, badgeLabel, textColor }: BadgeProps) {
  const renderBadge = (badgeLabel: TagKorType | undefined | string) => {
    switch (badgeLabel) {
      case '신상 헌터':
        return '#3EDFBC'
      case '장르 고인물':
        return '#7AA0FF'
      case '수다쟁이 독서가':
        return '#FFC354'
      case '정리왕 서평러':
        return '#A9E179'
      case '비밀 일기장 주인':
        return '#EB7AFF'
      case '감성 사색 정리러':
        return '#FF927A'
      case '랜덤 피커':
        return '#FF96C0'
      case '넷플릭스급 몰입러':
        return '#68BDDC'
      default:
        return backgroundColor
    }
  }

  return (
    <div>
      <S.Badge $backgroundColor={renderBadge(badgeLabel)} $textColor={textColor}>
        {badgeLabel}
      </S.Badge>
    </div>
  )
}
