'use client'

import Label from '@/components/common/Label'
import Spacing from '@/components/common/Spacing'
import StarRating from '@/components/write/StarRating'
import RatingInputField from '@/components/write/RatingInputField'

export default function RatingField() {
  return (
    <div>
      <Label isRequired={true}>평점</Label>
      <Spacing height={8} />

      <RatingInputField />
      <Spacing height={8} />

      <StarRating />
    </div>
  )
}
