'use client'

import Label from '@/components/common/Label'
import Button from '@/components/common/Button'
import Spacing from '@/components/common/Spacing'
import TextInput from '@/components/common/TextInput'
import { baseColor } from '@/styles/theme'
import { ChangeEvent, useCallback, useState } from 'react'
import CountIndicator from '@/components/common/CountIndicator'
import * as Style from '@/styles/Write.styles'

export default function ReviewField() {
  const [value, setValue] = useState('')
  const inputHandler = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }, [])
  return (
    <div>
      <Label
        labelElement={
          <Button width={112} size={'sm'} onClick={() => {}} variant={'ghost'} textColor={baseColor.primary600}>
            글쓰기 도움받기
          </Button>
        }
      >
        나의 감상
      </Label>
      <Spacing height={4} />
      <Style.WritingGuide>책에서 가장 좋았던 캐릭터와 그 이유는?</Style.WritingGuide>
      <Spacing height={8} />
      <TextInput
        rightElement={
          <CountIndicator isError={false} textType={'textArea'} maxLength={2000} valueLength={value.length} />
        }
        status={'default'}
        value={value}
        onChange={inputHandler}
        placeholder={'책에 대한 감상평을 작성해 보아요.'}
        textType={'textArea'}
      />
    </div>
  )
}
