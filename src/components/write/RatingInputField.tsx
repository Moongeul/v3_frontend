'use client'

import * as Style from '@/styles/Write.styles'
import TextInput from '@/components/common/TextInput'
import { DotIcon } from '@/assets/svgComponents'
import { ChangeEvent } from 'react'
import { useWriteStore } from '@/store/writeStore'

export default function RatingInputField() {
  const writeData = useWriteStore((state) => state.writeData)
  const setState = useWriteStore((state) => state.setState)

  const currentRating = writeData.rating ?? 0
  const integerPart = Math.floor(currentRating)
  const decimalPart = Math.round((currentRating % 1) * 10)

  const handleIntegerChange = (e: ChangeEvent<HTMLInputElement>) => {
    const rawValue = e.target.value

    // 1. 빈 문자열이면 0으로 간주하되, 일단 상태 업데이트
    if (rawValue === '') {
      setState({ writeData: { ...writeData, rating: 0 + decimalPart / 10 } })
      return
    }

    let val = parseInt(rawValue, 10)
    if (isNaN(val)) return
    if (val > 5) val = 5

    const newRating = val === 5 ? 5 : val + decimalPart / 10
    setState({ writeData: { ...writeData, rating: newRating } })
  }

  const handleDecimalChange = (e: ChangeEvent<HTMLInputElement>) => {
    const rawValue = e.target.value

    if (rawValue === '') {
      setState({ writeData: { ...writeData, rating: integerPart } })
      return
    }

    let val = parseInt(rawValue, 10)
    if (isNaN(val)) return
    if (val > 9) val = 9
    if (integerPart === 5) return

    const newRating = integerPart + val / 10
    setState({ writeData: { ...writeData, rating: newRating } })
  }

  return (
    <Style.RatingInputColumn>
      <TextInput
        wrapperWidth={'fit'}
        height={48}
        width={20}
        value={integerPart === 0 ? '' : integerPart}
        onChange={handleIntegerChange}
        inputType={'number'}
        textType={'textField'}
        placeholder={'0'}
      />
      <DotIcon width={4} height={4} />
      <TextInput
        wrapperWidth={'fit'}
        height={48}
        width={20}
        value={decimalPart === 0 ? '' : decimalPart}
        onChange={handleDecimalChange}
        inputType={'number'}
        textType={'textField'}
        placeholder={'0'}
      />
    </Style.RatingInputColumn>
  )
}
