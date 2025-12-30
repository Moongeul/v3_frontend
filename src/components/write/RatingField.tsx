'use client'

import RatingInputField from '@/components/write/RatingInputField'
import { useWriteStore } from '@/store/writeStore'
import { StarRating, Label, Spacing } from '@/components/common'

export default function RatingField() {
  const writeData = useWriteStore((state) => state.writeData)
  return (
    <div>
      <Label>평점</Label>
      <Spacing height={8} />

      <RatingInputField />
      <Spacing height={8} />

      <StarRating rating={writeData.rating} />
    </div>
  )
}
