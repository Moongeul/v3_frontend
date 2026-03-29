'use client'

import { StyledOptionMenu, StyledOptionMenuItem } from '@/styles/common/OptionMenu.styles'
import { useTheme } from '@emotion/react'
import { useModalStore } from '@/store/modalStore'
import { useRouter } from 'next/navigation'

interface UserOptionMenuProps {
  handleMenuClick: (e: React.MouseEvent) => void
}

export default function UserOptionMenu({ handleMenuClick }: UserOptionMenuProps) {
  const theme = useTheme()
  const { toggleModal } = useModalStore((state) => state)
  const router = useRouter()

  return (
    <StyledOptionMenu>
      <StyledOptionMenuItem
        onClick={(e) => {
          e.stopPropagation() // 부모 카드 클릭 이벤트 방지
          handleMenuClick(e)
          toggleModal('isReportModalOpen')
        }}
        $color={theme.colors.textFieldDefaultText}
      >
        신고하기
      </StyledOptionMenuItem>
      <StyledOptionMenuItem
        onClick={(e) => {
          handleMenuClick(e)
          e.stopPropagation()
          toggleModal('isBlockModalOpen')
        }}
        $color={theme.colors.textFieldDefaultText}
      >
        차단하기
      </StyledOptionMenuItem>
    </StyledOptionMenu>
  )
}
