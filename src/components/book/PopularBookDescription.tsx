'use client'

import { Badge, Spacing } from '@/components/common'
import { baseColor } from '@/styles/theme'
import StarRating from '@/components/write/StarRating'
import { StylePopularBookInfo } from '@/styles/common/Book.styles'

interface PopularBookDescriptionProps {
  description: string
}

export default function PopularBookDescription({ description }: PopularBookDescriptionProps) {
  return (
    <div>
      <Badge backgroundColor={'#3EDFBC'} textColor={baseColor.lightYellow50} badgeLabel={'신상헌터 유형의 인기책'} />
      <Spacing height={8} />
      <StarRating type={'short'} rating={4.9} />
      <Spacing height={8} />
      <StylePopularBookInfo>&#34;{description}&#34;</StylePopularBookInfo>
    </div>
  )
}
