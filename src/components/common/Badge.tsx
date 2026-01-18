'use client'

import * as S from '@/styles/common/Badge.styles'
import { ReactNode } from 'react'

interface BadgeProps {
  backgroundColor?: string
  textColor?: string
  badgeLabel:
    | '신상헌터'
    | '장르고인물'
    | '수다쟁이 책러'
    | '정리왕 서평러'
    | '비밀일기장 주인'
    | '감성사색  정리형'
    | '랜덤 피커'
    | '넷플릭급 몰입러'
    | string
}
export default function Badge({ backgroundColor, badgeLabel, textColor }: BadgeProps) {
  const renderBadge = (children: ReactNode) => {
    switch (children) {
      case '신상헌터':
        return '#3EDFBC'
      case '장르고인물':
        return '#7AA0FF'
      case '수다쟁이 책러':
        return '#FFC354'
      case '정리왕 서평러':
        return '#A9E179'
      case '비밀일기장 주인':
        return '#EB7AFF'
      case '감성사색  정리형':
        return '#FF927A'
      case '랜덤 피커':
        return '#FF96C0'
      case '넷플릭급 몰입러':
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
