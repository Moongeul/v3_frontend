'use client'

import { ChangeEvent, useState, useEffect } from 'react'
import * as Style from '@/styles/Write.styles'
import { baseColor } from '@/styles/theme'
import { useEditStore } from '@/store/editStore' // Edit 전용 스토어 사용

import Label from '../common/Label'
import Button from '@/components/common/Button'
import Spacing from '@/components/common/Spacing'
import TextInput from '@/components/common/TextInput'
import CountIndicator from '@/components/common/CountIndicator'
import { clientWritingGuide } from '@/lib/client/post'
import { Spinner } from '@/components/common'

interface EditReviewFieldProps {
  selectedReview: string
}

export default function EditReviewField({ selectedReview }: EditReviewFieldProps) {
  const [isLoading, setIsLoading] = useState(false)
  const [writingGuide, setWritingGuide] = useState<string | undefined>()

  // 1. useEditStore에서 데이터와 수정 함수 가져오기
  const { editData, setField } = useEditStore()

  // 2. 초기 데이터 동기화
  useEffect(() => {
    if (selectedReview !== undefined) {
      setField('content', selectedReview)
    }
  }, [selectedReview, setField])

  const contentLength = editData.content?.length ?? 0
  const MAX_LENGTH = 2000
  const isError = contentLength > MAX_LENGTH

  // 3. 입력 핸들러 (setField 사용)
  const inputHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setField('content', e.target.value)
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
              try {
                const result = await clientWritingGuide()
                if (result.data) {
                  setWritingGuide(result.data)
                }
              } finally {
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
        maxLength={MAX_LENGTH}
        status={isError ? 'error' : 'default'}
        // 스토어의 데이터를 바인딩합니다.
        value={editData.content ?? ''}
        onChange={inputHandler}
        placeholder={'책에 대한 감상평을 작성해 보아요.'}
        textType={'textArea'}
      />
    </div>
  )
}
