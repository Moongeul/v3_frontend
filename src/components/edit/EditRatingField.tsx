'use client'

import { Label, Spacing, StarRating } from '@/components/common'
import { useEditStore } from '@/store/editStore'
import EditRatingInputField from '@/components/edit/EditRatingInputField'

interface EditRatingFieldProps {
  selectedRating: number
}
export default function EditRatingField({ selectedRating }: EditRatingFieldProps) {
  const editData = useEditStore((state) => state.editData)
  return (
    <div>
      <Label>평점</Label>
      <Spacing height={8} />

      <EditRatingInputField selectedRating={selectedRating} />
      <Spacing height={8} />

      <StarRating rating={editData.rating} />
    </div>
  )
}
