'use client'

import Label from '../common/Label'
import { Spacing, TextInput } from '@/components/common'
import { ChangeEvent } from 'react'
import { useWriteStore } from '@/store/writeStore'

export default function PageField() {
  const { setState, writeData } = useWriteStore((state) => state)
  const inputHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setState({
      ...writeData,
      writeData: { ...writeData, page: parseInt(e.target.value) },
    })
  }

  return (
    <div>
      <Label>책 페이지 수</Label>
      <Spacing height={8} />
      <TextInput
        height={48}
        status={'default'}
        onChange={inputHandler}
        placeholder={'전체 페이지 수를 작성해주세요.'}
        inputType={'number'}
      />
    </div>
  )
}
