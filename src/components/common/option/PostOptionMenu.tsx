'use client'

import { StyledOptionMenu, StyledOptionMenuItem } from '@/styles/common/OptionMenu.styles'
import { useTheme } from '@emotion/react'
import { useModalStore } from '@/store/modalStore'

export default function PostOptionMenu() {
  const theme = useTheme()
  const { toggleModal } = useModalStore((state) => state)

  return (
    <StyledOptionMenu>
      <StyledOptionMenuItem
        onClick={(e) => {
          e.stopPropagation() // 부모 카드 클릭 이벤트 방지
        }}
        $color={theme.colors.textFieldDefaultText}
      >
        수정
      </StyledOptionMenuItem>
      <StyledOptionMenuItem
        onClick={(e) => {
          e.stopPropagation()
          toggleModal('isDeleteQuestionModalOpen')
        }}
        $color={theme.colors.textFieldError}
      >
        삭제
      </StyledOptionMenuItem>
    </StyledOptionMenu>
  )
}
