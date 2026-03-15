'use client'

import { CountIndicator, Label, Spacing, TextInput } from '@/components/common'
import { typography } from '@/styles/theme'
import { StyleHelperText } from '@/styles/question/Write.styles'
import { useQuestionStore } from '@/store/questionStore'

export default function QuestionField() {
  const { setQuestion, question } = useQuestionStore((state) => state)

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
          setQuestion({ content: e.target.value })
        }}
        value={question.content}
        inputType={'text'}
        placeholder={'질문을 남겨주세요.'}
        rightElement={<CountIndicator maxLength={2000} valueLength={question.content.length} textType={'textArea'} />}
      />
      <Spacing height={20} />

      <StyleHelperText>*질문 게시글은 익명으로 등록됩니다.</StyleHelperText>
    </div>
  )
}
