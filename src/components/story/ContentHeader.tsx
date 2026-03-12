'use client'

import { StyledContentHeader, StyledRating } from '@/styles/story/Story.styles'
import { StyleContent } from '@/styles/common/Common.styles'
import { typography } from '@/styles/theme'
import { useTheme } from '@emotion/react'
import { StarFillGreenIcon } from '@/assets/svgComponents'
import { formatDate } from '@/utils/common'

interface ContentHeaderProps {
  rating: number
  created: string
}

export default function ContentHeader({ rating, created }: ContentHeaderProps) {
  const theme = useTheme()
  return (
    <StyledContentHeader>
      <StyledRating>
        <StarFillGreenIcon width={16} height={16} />
        <p>{rating}</p>
      </StyledRating>
      <StyleContent $textColor={theme.colors.textFieldDefaultText} $typography={typography.badgeSm}>
        |
      </StyleContent>
      <StyleContent $textColor={theme.colors.textFieldDefaultText} $typography={typography.badgeSm}>
        {formatDate(created)}
      </StyleContent>
    </StyledContentHeader>
  )
}
