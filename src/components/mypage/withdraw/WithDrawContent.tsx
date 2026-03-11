'use client'

import { StyledContentContainer, StyledDescriptionContainer } from '@/styles/mypage/Withdraw.styles'
import { StyleContent } from '@/styles/common/Common.styles'
import { typography } from '@/styles/theme'
import { useTheme } from '@emotion/react'
import { Spacing } from '@/components/common'

export default function WithDrawContent() {
  const theme = useTheme()

  return (
    <StyledContentContainer>
      <StyleContent $textColor={theme.colors.headerText} $typography={typography.subtitleLg}>
        정말 탈퇴하실껀가요?
      </StyleContent>
      <Spacing height={12} />
      <StyleContent $textColor={theme.colors.headerText} $typography={typography.bodyMd}>
        탈퇴 시 유의사항
      </StyleContent>
      <Spacing height={4} />
      <StyledDescriptionContainer>
        <StyleContent $textColor={theme.colors.buttonActiveGhost} $typography={typography.bodySm}>
          탈퇴시 moongeul 계정이 삭제되며 해당 계정은{' '}
          <span style={{ color: '#FF626D' }}>1개월 간 서비스 재가입이 불가능</span> 합니다.
        </StyleContent>
        <StyleContent $textColor={theme.colors.buttonActiveGhost} $typography={typography.bodySm}>
          수집된 개인정보 및 moongeul 계정에 저장된 모든 정보(설정, 게시글, 추천 정보, 알림, 읽은 책기록 등) 삭제되어
          복구할 수 없고 연결된 기기의 연결이 해제됩니다.
        </StyleContent>
      </StyledDescriptionContainer>
    </StyledContentContainer>
  )
}
