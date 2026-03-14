'use client'

import { ChangeEvent, useState } from 'react'

import * as Style from '@/styles/Write.styles'

import { baseColor } from '@/styles/theme'
import { useWriteStore } from '@/store/writeStore'

import Label from '@/components/common/Label'
import Button from '@/components/common/Button'
import Spacing from '@/components/common/Spacing'
import TextInput from '@/components/common/TextInput'
import CountIndicator from '@/components/common/CountIndicator'
import { clientWritingGuide } from '@/lib/client/post'
import { Spinner } from '@/components/common'

export default function ReviewField() {
  const [isLoading, setIsLoading] = useState(false)
  const [writingGuide, setWritingGuide] = useState<string | undefined>()
  const writeData = useWriteStore((state) => state.writeData)
  const setState = useWriteStore((state) => state.setState)

  const contentLength = writeData.content?.length ?? 0
  const MAX_LENGTH = 2000
  const isError = contentLength > MAX_LENGTH

  const inputHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setState({
      ...writeData,
      writeData: { ...writeData, content: e.target.value },
    })
  }

  return (
    <div>
      <Label
        labelElement={
          <Button
            leftIcon={isLoading ? <Spinner size={'sm'} /> : null}
            width={isLoading ? 130 : 112}
            size={'sm'}
            onClick={async () => {
              setIsLoading(true)
              const result = await clientWritingGuide()

              if (result.data) {
                setIsLoading(false)
                setWritingGuide(result.data)
              } else {
                setIsLoading(false)
              }
            }}
            variant={'ghost'}
            textColor={baseColor.primary600}
          >
            글쓰기 도움받기
          </Button>
        }
      >
        나의 감상
      </Label>
      <Spacing height={4} />
      {writingGuide && <Style.WritingGuide>{writingGuide}</Style.WritingGuide>}
      <Spacing height={8} />
      <TextInput
        rightElement={
          <CountIndicator isError={isError} textType={'textArea'} maxLength={MAX_LENGTH} valueLength={contentLength} />
        }
        status={isError ? 'error' : 'default'}
        value={writeData.content ?? ''}
        onChange={inputHandler}
        placeholder={'책에 대한 감상평을 작성해 보아요.'}
        textType={'textArea'}
      />
    </div>
  )
}
