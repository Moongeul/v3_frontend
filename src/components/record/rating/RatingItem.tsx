'use client'
import { StylePostCountTag } from '@/styles/record/BookShelf.styles'
import { StyledRatingItem } from '@/styles/record/Rating.styles'

interface RatingItemProps {
  label: string // 예: "4.5 ~ 5.0"
  count: number // 해당 범위의 데이터 개수
  color: string // 지정된 색상
  width: number | string // 단계별 너비
}

export default function RatingItem({ label, count, color, width }: RatingItemProps) {
  // 너비가 68px(가장 작은 단계)이거나 count가 없을 때 태그를 숨깁니다.
  const isSmallest = width === 68 || width === '68px'

  return (
    <StyledRatingItem $color={color} $width={width}>
      {label}
      {/* 가장 작은 너비가 아닐 때만 개수 태그 표시 */}
      {!isSmallest && count > 0 && <StylePostCountTag>+{count}</StylePostCountTag>}
    </StyledRatingItem>
  )
}
