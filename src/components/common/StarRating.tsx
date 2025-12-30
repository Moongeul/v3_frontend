'use client'

import * as S from '@/styles/Write.styles'
import {
  StarFillOrangeIcon,
  StarHalfOrangeIcon,
  StarNoneOrangeIcon,
  StarFillYellowIcon,
  StarHalfYellowIcon,
  StarNoneYellowIcon,
  StarFillGreenIcon,
  StarHalfGreenIcon,
  StarNoneGreenIcon,
  StarNoneGrayIcon,
  StarFillGrayIcon,
} from '@/assets/svgComponents'

interface StarRatingProps {
  type?: 'default' | 'short'
  rating?: number | null
  size?: 'md' | 'sm'
}

export default function StarRating({ type = 'default', rating, size = 'md' }: StarRatingProps) {
  const currentRating = rating ?? 0

  const renderStarIcon = (index: number) => {
    let Icons = { fill: StarFillGrayIcon, half: StarNoneGrayIcon, none: StarNoneGrayIcon }

    if (currentRating > 0) {
      if (currentRating < 2) {
        Icons = { fill: StarFillOrangeIcon, half: StarHalfOrangeIcon, none: StarNoneOrangeIcon }
      } else if (currentRating < 4) {
        Icons = { fill: StarFillYellowIcon, half: StarHalfYellowIcon, none: StarNoneYellowIcon }
      } else {
        Icons = { fill: StarFillGreenIcon, half: StarHalfGreenIcon, none: StarNoneGreenIcon }
      }
    }

    if (currentRating >= index) return <Icons.fill key={index} width={24} height={24} />
    if (currentRating >= index - 0.5) return <Icons.half key={index} width={24} height={24} />
    return <Icons.none key={index} width={24} height={24} />
  }

  const iconSize = size === 'md' ? 20 : 16

  const renderShortIcon = () => {
    if (currentRating === 0) return <StarFillGrayIcon width={iconSize} height={iconSize} />
    if (currentRating < 2) return <StarFillOrangeIcon width={iconSize} height={iconSize} />
    if (currentRating < 4) return <StarFillYellowIcon width={iconSize} height={iconSize} />
    return <StarFillGreenIcon width={iconSize} height={iconSize} />
  }

  const renderColor = () => {
    if (currentRating === 0) return '#5C5C59'
    if (currentRating < 2) return '#FF5C39'
    if (currentRating < 4) return '#FFA600'
    return '#1ECB83'
  }

  return type === 'default' ? (
    <S.StarRatingColumn>{[1, 2, 3, 4, 5].map((index) => renderStarIcon(index))}</S.StarRatingColumn>
  ) : (
    <S.StarRatingColumn $size={size} $textColor={renderColor()}>
      {renderShortIcon()}
      {rating}
    </S.StarRatingColumn>
  )
}
