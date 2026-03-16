'use client'

import { StyledOptionMenu, StyledOptionMenuItem } from '@/styles/common/OptionMenu.styles'
import { useTheme } from '@emotion/react'
import { useModalStore } from '@/store/modalStore'

export default function StoryOptionsMenu() {
  const theme = useTheme()
  const { toggleModal } = useModalStore((state) => state)

  return (
    <StyledOptionMenu>
      <StyledOptionMenuItem
        onClick={(e) => {
          e.stopPropagation()
          toggleModal('isDeleteStoryModalOpen')
        }}
        $color={theme.colors.textFieldError}
      >
        삭제
      </StyledOptionMenuItem>
    </StyledOptionMenu>
  )
}
