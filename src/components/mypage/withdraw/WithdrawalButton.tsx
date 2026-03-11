'use client'

import { CheckIcon, UncheckIcon } from '@/assets/svgComponents'
import { StyleContent } from '@/styles/common/Common.styles'
import { typography } from '@/styles/theme'
import { useTheme } from '@emotion/react'
import { StyledWithdrawalButton } from '@/styles/mypage/Withdraw.styles'

interface WithdrawalButtonProps {
  isAgreed: boolean
  toggleAgreed: () => void
}

export default function WithdrawalButton({ isAgreed, toggleAgreed }: WithdrawalButtonProps) {
  const theme = useTheme()

  return (
    <StyledWithdrawalButton onClick={toggleAgreed}>
      {isAgreed ? <CheckIcon width={24} height={24} /> : <UncheckIcon width={24} height={24} />}

      <StyleContent $typography={typography.buttonMd} $textColor={theme.colors.buttonActiveGhost}>
        회원 탈퇴 유의 사항을 확인했으며 동의합니다.
      </StyleContent>
    </StyledWithdrawalButton>
  )
}
