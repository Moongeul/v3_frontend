'use client'

import {
  StyleBook,
  StyleBookContent,
  StylePostCountTag,
  StyleRatingContent,
  StyleTitle,
  StyleTitleGroup,
} from '@/styles/record/BookShelf.styles'
import { StyleContent } from '@/styles/common/Common.styles'
import { baseColor, typography } from '@/styles/theme'
import { WhiteStarIcon } from '@/assets/svgComponents'
import { useRouter } from 'next/navigation'

interface BookProps {
  backgroundColor: string
  borderColor: string
  articleId: number
  title: string
  ratingAverage: number
  weight: number
  height: number
  postCount: number
}
export default function Book({
  articleId,
  postCount,
  weight,
  ratingAverage,
  title,
  height,
  backgroundColor,
  borderColor,
}: BookProps) {
  const router = useRouter()

  return (
    <StyleBook
      onClick={() => {
        router.push(`/${articleId}`)
      }}
      $width={weight}
      $backgroundColor={backgroundColor}
      $height={height}
      $borderColor={borderColor}
    >
      <StyleBookContent>
        {/* 그룹으로 묶어서 가로 배치 후 회전 */}
        <StyleTitleGroup $parentHeight={height}>
          <StyleTitle $typography={typography.badgeSm}>{title}</StyleTitle>
          {postCount > 0 && <StylePostCountTag>+{postCount}</StylePostCountTag>}
        </StyleTitleGroup>
      </StyleBookContent>

      <StyleRatingContent>
        <WhiteStarIcon width={12} height={12} />
        <StyleContent $typography={typography.caption} $textColor={baseColor.lightYellow50}>
          {ratingAverage}
        </StyleContent>
      </StyleRatingContent>
    </StyleBook>
  )
}
