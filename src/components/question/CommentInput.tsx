'use client'

import { StyleCommentInputWrapper } from '@/styles/question/QuestionComment.styles'
import { Button, TextInput } from '@/components/common'
import { WhiteUpIcon } from '@/assets/svgComponents'
import { useAnswerStore } from '@/store/answerStore'
import { postCreateAnswer, putAnswer } from '@/lib/client/question' // 수정 API 추가 가정
import { CreateAnswerType } from '@/types/question'
import { useToast } from '@/components/common/toast/ToastContext'
import { useRouter } from 'next/navigation'
import { useEditStore } from '@/store/editStore'

interface CommentInputProps {
  questionId: number
}

export default function CommentInput({ questionId }: CommentInputProps) {
  const router = useRouter()
  const { success, error } = useToast()
  const { updateAnswer, createAnswer } = useAnswerStore((state) => state)
  const { setAnswerEditField, answerEditData } = useEditStore((state) => state)

  // 1. 현재 모드 확인 (수정할 데이터가 있으면 수정 모드)
  const isEditMode = !!answerEditData && answerEditData.answerId !== ''

  // 2. 통합 제출 핸들러
  const handleSubmit = async () => {
    // 내용이 비어있는지 체크
    const currentContent = (isEditMode ? answerEditData.content : createAnswer.content) || ''
    if (!currentContent.trim()) return error('알림', '내용을 입력해주세요.')

    try {
      let result

      if (isEditMode) {
        // [수정 로직]
        // patchUpdateAnswer API가 있다고 가정합니다.
        result = await putAnswer(answerEditData.content, answerEditData.answerId)
      } else {
        // [생성 로직]
        result = await postCreateAnswer({
          ...createAnswer,
          questionId: questionId,
        } as CreateAnswerType)
      }

      if (result.success) {
        success(isEditMode ? '수정 완료' : '답변 성공', '성공적으로 반영되었습니다.')

        // 초기화
        updateAnswer('content', '')
        setAnswerEditField('content', '') // 수정 데이터 비우기

        router.refresh()
      } else {
        error('실패', '요청을 처리하지 못했어요.')
      }
    } catch (err) {
      error('오류', '문제가 발생했습니다.')
    }
  }

  return (
    <StyleCommentInputWrapper>
      <TextInput
        // 수정 모드일 때는 answerEditData를, 아닐 때는 createAnswer.content를 보여줌
        value={isEditMode ? answerEditData.content : createAnswer.content}
        height={48}
        placeholder={'답변을 남겨보아요.'}
        onChange={(e) => {
          if (isEditMode) {
            setAnswerEditField('content', e.target.value)
          } else {
            updateAnswer('content', e.target.value)
            updateAnswer('questionId', questionId)
          }
        }}
      />
      <Button onClick={handleSubmit} rightIcon={<WhiteUpIcon width={24} height={24} />} category={'icon'} />
    </StyleCommentInputWrapper>
  )
}
