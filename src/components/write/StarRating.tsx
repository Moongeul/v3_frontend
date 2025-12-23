import * as Style from '@/styles/Write.styles'
import { StarNoneGrayIcon } from '@/assets/svgComponents'

export default function StarRating() {
  return (
    <Style.StarRatingColumn>
      <StarNoneGrayIcon width={24} height={24} />
      <StarNoneGrayIcon width={24} height={24} />
      <StarNoneGrayIcon width={24} height={24} />
      <StarNoneGrayIcon width={24} height={24} />
      <StarNoneGrayIcon width={24} height={24} />
    </Style.StarRatingColumn>
  )
}
