'use client'

import { StyledOptionMenu, StyledOptionMenuItem } from '@/styles/common/OptionMenu.styles'
import { useTheme } from '@emotion/react'
import { useModalStore } from '@/store/modalStore'
import { useRouter } from 'next/navigation'
import { useEditStore } from '@/store/editStore'

interface AnswerOptionMenuProps {
  handleMenuClick: (e: React.MouseEvent) => void
  content: string
  answerId: number
}

export default function AnswerOptionMenu({ handleMenuClick, content, answerId }: AnswerOptionMenuProps) {
  const theme = useTheme()
  const router = useRouter()
  const { toggleModal } = useModalStore((state) => state)
  const { setAnswerEditField } = useEditStore((state) => state)

  return (
    <StyledOptionMenu>
      <StyledOptionMenuItem
        onClick={(e) => {
          handleMenuClick(e)
          setAnswerEditField('content', content)
          setAnswerEditField('answerId', String(answerId))
        }}
        $color={theme.colors.textFieldDefaultText}
      >
        수정
      </StyledOptionMenuItem>
      <StyledOptionMenuItem
        onClick={(e) => {
          handleMenuClick(e)
          toggleModal('isDeleteAnswerModalOpen')
        }}
        $color={theme.colors.textFieldError}
      >
        삭제
      </StyledOptionMenuItem>
    </StyledOptionMenu>
  )
}
