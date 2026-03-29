'use client'

import { useEffect, ChangeEvent } from 'react'
import Label from '../common/Label'
import { Spacing, TextInput } from '@/components/common'
import { useEditStore } from '@/store/editStore'

interface EditPageFieldProps {
  selectedPage: number
}

export default function EditPageField({ selectedPage }: EditPageFieldProps) {
  // 1. useEditStore에서 데이터와 수정 함수를 가져옵니다.
  const { editData, setField } = useEditStore()

  // 2. 컴포넌트 마운트 시 외부에서 받은 selectedPage를 스토어에 동기화
  useEffect(() => {
    if (selectedPage !== undefined) {
      setField('page', selectedPage)
    }
  }, [selectedPage, setField])

  // 3. 입력 핸들러
  const inputHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    // 빈 값일 때는 빈 문자열 혹은 0으로 처리, 값이 있을 때는 숫자로 변환
    const numericValue = value === '' ? 0 : parseInt(value)

    setField('page', numericValue)
  }

  return (
    <div>
      <Label>책 페이지 수</Label>
      <Spacing height={8} />
      <TextInput
        // 스토어에 저장된 값을 우선적으로 보여줍니다.
        value={editData.page ?? ''}
        height={48}
        status={'default'}
        onChange={inputHandler}
        placeholder={'전체 페이지 수를 작성해주세요.'}
        inputType={'number'}
      />
    </div>
  )
}
