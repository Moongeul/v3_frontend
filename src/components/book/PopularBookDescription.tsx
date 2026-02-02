'use client'

import { Badge, Spacing, StarRating } from '@/components/common'
import { baseColor } from '@/styles/theme'
import { StylePopularBookInfo } from '@/styles/common/Book.styles'
import { TagEnumType } from '@/types/user'
import { convertEnumToKorTag } from '@/utils/user'
import { ReactNode } from 'react'

interface PopularBookDescriptionProps {
  description: string
  tag: TagEnumType
  rating: number
}

export default function PopularBookDescription({ description, tag, rating }: PopularBookDescriptionProps) {
  const renderColor = (children: ReactNode) => {
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
        return '#3EDFBC'
    }
  }

  return (
    <div>
      <Badge
        backgroundColor={renderColor(convertEnumToKorTag(tag))}
        badgeLabel={`${convertEnumToKorTag(tag)} 유형의 인기책`}
      />
      <Spacing height={8} />
      <StarRating type={'short'} rating={rating} />
      <Spacing height={8} />
      <StylePopularBookInfo>&#34;{description}&#34;</StylePopularBookInfo>
    </div>
  )
}
