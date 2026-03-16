'use client'

import * as Style from '@/styles/Write.styles'
import TextInput from '@/components/common/TextInput'
import { DotIcon } from '@/assets/svgComponents'
import { ChangeEvent, useEffect } from 'react'
import { useEditStore } from '@/store/editStore'

interface EditRatingInputFieldProps {
  selectedRating: number // 예: 4.5
}

export default function EditRatingInputField({ selectedRating }: EditRatingInputFieldProps) {
  // 스토어 상태 명칭에 맞춰 writeData로 수정 (useEditStore 정의에 따라)
  const { editData, setField } = useEditStore()

  // 1. 초기 진입 시 props로 받은 별점을 스토어에 저장
  useEffect(() => {
    // 스토어에 값이 없을 때만 초기값 설정 (사용자 수정을 보존하기 위함)
    if (selectedRating !== undefined && editData.rating === null) {
      setField('rating', selectedRating)
    }
  }, [selectedRating, editData.rating, setField])

  // 현재 값 계산 (스토어 우선, 없으면 props)
  const currentRating = editData.rating ?? selectedRating ?? 0
  const integerPart = Math.floor(currentRating)
  const decimalPart = Math.round((currentRating % 1) * 10)

  const handleIntegerChange = (e: ChangeEvent<HTMLInputElement>) => {
    const rawValue = e.target.value

    if (rawValue === '') {
      setField('rating', 0 + decimalPart / 10)
      return
    }

    let val = parseInt(rawValue, 10)
    if (isNaN(val)) return
    if (val > 5) val = 5

    // 만약 5를 입력하면 소수점은 자동으로 0이 됨
    const newRating = val === 5 ? 5 : val + decimalPart / 10
    setField('rating', newRating)
  }

  const handleDecimalChange = (e: ChangeEvent<HTMLInputElement>) => {
    const rawValue = e.target.value

    if (rawValue === '') {
      setField('rating', integerPart)
      return
    }

    let val = parseInt(rawValue, 10)
    if (isNaN(val)) return
    if (val > 9) val = 9

    // 정수 부분이 5라면 소수점 수정 불가 (최대 5.0)
    if (integerPart === 5) return

    const newRating = integerPart + val / 10
    setField('rating', newRating)
  }

  return (
    <Style.RatingInputColumn>
      <TextInput
        wrapperWidth={'fit'}
        height={48}
        width={20}
        // 사용자가 0을 직접 입력할 수 있도록 0일 때 빈 문자열 처리를 유연하게 조정 가능
        value={integerPart === 0 && editData.rating === null ? '' : integerPart}
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
        value={decimalPart === 0 && editData.rating === null ? '' : decimalPart}
        onChange={handleDecimalChange}
        inputType={'number'}
        textType={'textField'}
        placeholder={'0'}
      />
    </Style.RatingInputColumn>
  )
}
