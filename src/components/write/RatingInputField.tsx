import TextInput from '@/components/common/TextInput'
import { DotIcon } from '@/assets/svgComponents'
import * as Style from '@/styles/Write.styles'
import { ChangeEvent, useCallback, useState } from 'react'

export default function RatingInputField() {
  const [rating, setRating] = useState<number>(0)

  const ratingHandler = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setRating(parseInt(e.target.value))
  }, [])
  return (
    <Style.RatingInputColumn>
      <TextInput
        height={48}
        width={12}
        value={rating}
        onChange={ratingHandler}
        inputType={'number'}
        textType={'textField'}
        placeholder={'0'}
      />
      <DotIcon width={4} height={4} />
      <TextInput
        height={48}
        width={12}
        value={rating}
        onChange={ratingHandler}
        inputType={'number'}
        textType={'textField'}
        placeholder={'0'}
      />
    </Style.RatingInputColumn>
  )
}
