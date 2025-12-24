'use client'

import * as Style from '@/styles/Write.styles'
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
} from '@/assets/svgComponents'
import { useWriteStore } from '@/store/writeStore'

export default function StarRating() {
  const writeData = useWriteStore((state) => state.writeData)

  const currentRating = writeData.rating ?? 0

  const getThemeIcons = () => {
    if (currentRating === 0) {
      return { fill: StarNoneGrayIcon, half: StarNoneGrayIcon, none: StarNoneGrayIcon }
    }

    if (currentRating < 2) {
      return { fill: StarFillOrangeIcon, half: StarHalfOrangeIcon, none: StarNoneOrangeIcon }
    } else if (currentRating < 4) {
      return { fill: StarFillYellowIcon, half: StarHalfYellowIcon, none: StarNoneYellowIcon }
    } else {
      return { fill: StarFillGreenIcon, half: StarHalfGreenIcon, none: StarNoneGreenIcon }
    }
  }

  const { fill: Fill, half: Half, none: None } = getThemeIcons()

  return (
    <Style.StarRatingColumn>
      {[1, 2, 3, 4, 5].map((index) => {
        if (currentRating >= index) {
          return <Fill key={index} width={24} height={24} />
        } else if (currentRating >= index - 0.5) {
          return <Half key={index} width={24} height={24} />
        } else {
          return <None key={index} width={24} height={24} />
        }
      })}
    </Style.StarRatingColumn>
  )
}
