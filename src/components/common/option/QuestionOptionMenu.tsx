'use client'

import { StyledOptionMenu, StyledOptionMenuItem } from '@/styles/common/OptionMenu.styles'
import { useTheme } from '@emotion/react'
import { useModalStore } from '@/store/modalStore'

interface QuestionOptionsMenuProps {
  onEditClick: () => void
  onDeleteClick: () => void
}

export default function QuestionOptionsMenu({ onEditClick, onDeleteClick }: QuestionOptionsMenuProps) {
  const theme = useTheme()
  const { toggleModal } = useModalStore((state) => state)

  // 공통 핸들러: 이벤트를 멈추고 전달받은 함수를 실행합니다.
  const handleItemClick = (e: React.MouseEvent, callback: () => void) => {
    e.stopPropagation() // 부모 카드 클릭 이벤트 방지
    callback()
  }

  return (
    <StyledOptionMenu>
      <StyledOptionMenuItem
        onClick={(e) => {
          handleItemClick(e, onEditClick)
        }}
        $color={theme.colors.textFieldDefaultText}
      >
        수정
      </StyledOptionMenuItem>
      <StyledOptionMenuItem
        onClick={(e) => {
          handleItemClick(e, onDeleteClick)
          toggleModal('isDeleteQuestionModalOpen')
        }}
        $color={theme.colors.textFieldError}
      >
        삭제
      </StyledOptionMenuItem>
    </StyledOptionMenu>
  )
}
