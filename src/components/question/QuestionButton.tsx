'use client'
import { WhiteRightArrowIcon } from '@/assets/svgComponents'
import { StyleQuestionButton, StyleQuestionCard } from '@/styles/question/Question.styles'
import { useRouter } from 'next/navigation'
import Cookies from 'js-cookie'
import { useModalStore } from '@/store/modalStore'
import { useBackPathStore } from '@/store/backPathStore'

interface QuestionButtonProps {
  width?: number
}

export default function QuestionButton({ width }: QuestionButtonProps) {
  const router = useRouter()
  const { setModal } = useModalStore()
  const { setBackPath } = useBackPathStore()
  const loginMemberId = Cookies.get('memberId')

  return (
    <StyleQuestionCard $width={width}>
      <StyleQuestionButton
        onClick={() => {
          if (loginMemberId) {
            router.push('/question/write')
          } else {
            setModal('isRequiredLoginModalOpen', true)
            setBackPath('/home?tab=PUBLIC')
          }
        }}
      >
        나도 질문 올리기
        <WhiteRightArrowIcon />
      </StyleQuestionButton>
    </StyleQuestionCard>
  )
}
