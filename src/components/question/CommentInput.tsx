'use client'

import { StyleCommentInputWrapper } from '@/styles/question/QuestionComment.styles'
import { Button, TextInput } from '@/components/common'
import { WhiteUpIcon } from '@/assets/svgComponents'
import { useAnswerStore } from '@/store/answerStore'
import { postCreateAnswer, putAnswer } from '@/lib/client/question'
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

  // 스토어 상태
  const { updateAnswer, createAnswer } = useAnswerStore((state) => state)
  const { setAnswerEditField, answerEditData, resetEditData } = useEditStore((state) => state)

  // 1. 수정 모드 판별 (ID가 존재하거나, 특정 플래그를 통해 확인)
  // 만약 answerId가 처음에 ''(빈문자열)로 들어온다면, '내용이 있는지' 혹은 'ID가 존재하는지'를 엄격히 체크해야 합니다.
  const isEditMode = Boolean(answerEditData?.content)

  const handleSubmit = async () => {
    const currentContent = isEditMode ? answerEditData.content : createAnswer.content

    if (!currentContent?.trim()) {
      return error('알림', '내용을 입력해주세요.')
    }

    try {
      let result

      if (isEditMode) {
        // [수정 로직]
        result = await putAnswer(answerEditData.content, answerEditData.answerId)
        router.refresh()
      } else {
        // [생성 로직]
        result = await postCreateAnswer({
          ...createAnswer,
          questionId: questionId,
        } as CreateAnswerType)
        router.refresh()
      }

      if (result.success) {
        success(isEditMode ? '수정 완료' : '답변 성공', '성공적으로 반영되었습니다.')

        // 3. 초기화 로직 (중요)
        if (isEditMode) {
          resetEditData?.() // EditStore에 초기화 함수가 있다면 호출
          // 만약 reset함수가 없다면 직접 초기화:
          setAnswerEditField('answerId', '')
          setAnswerEditField('content', '')
        } else {
          updateAnswer('content', '')
        }

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
        // value 결정: 수정 모드일 때와 아닐 때를 명확히 구분
        value={isEditMode ? answerEditData.content : createAnswer.content}
        height={48}
        placeholder={'답변을 남겨보아요.'}
        onChange={(e) => {
          const val = e.target.value
          if (isEditMode) {
            setAnswerEditField('content', val)
          } else {
            updateAnswer('content', val)
            updateAnswer('questionId', questionId)
          }
        }}
      />
      <Button onClick={handleSubmit} rightIcon={<WhiteUpIcon width={24} height={24} />} category={'icon'} />
    </StyleCommentInputWrapper>
  )
}
