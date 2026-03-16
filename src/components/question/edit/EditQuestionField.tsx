'use client'

import { useEffect } from 'react'
import { CountIndicator, Label, Spacing, TextInput } from '@/components/common'
import { typography } from '@/styles/theme'
import { StyleHelperText } from '@/styles/question/Write.styles'
import { useEditStore } from '@/store/editStore'

interface EditQuestionFieldProps {
  isbn: string
}

export default function EditQuestionField({ isbn }: EditQuestionFieldProps) {
  const { setQuestionField, questionEditData } = useEditStore((state) => state)

  return (
    <div>
      <Label labelStyle={typography.subtitleMd} isRequired={true}>
        질문 작성
      </Label>
      <Spacing height={8} />

      <TextInput
        maxLength={2000}
        textType={'textArea'}
        height={90}
        onChange={(e) => {
          setQuestionField('content', e.target.value)
        }}
        // 스토어의 값을 우선적으로 보여줌으로써 수정 가능하게 함
        value={questionEditData.content ?? ''}
        inputType={'text'}
        placeholder={'질문을 남겨주세요.'}
        rightElement={
          <CountIndicator maxLength={2000} valueLength={questionEditData.content?.length ?? 0} textType={'textArea'} />
        }
      />
      <Spacing height={20} />

      <StyleHelperText>*질문 게시글은 익명으로 등록됩니다.</StyleHelperText>
    </div>
  )
}
