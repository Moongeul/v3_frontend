'use client'

import { StylePrivateNoticeContainer } from '@/styles/mypage/Privacy.styles'
import { StyleContent } from '@/styles/common/Common.styles'
import { typography } from '@/styles/theme'
import { Spacing } from '@/components/common'
import { useTheme } from '@emotion/react'

export default function PrepareService() {
  const theme = useTheme()

  return (
    <StylePrivateNoticeContainer>
      <StyleContent $textColor={theme.colors.headerText} $typography={typography.subtitleLg}>
        서비스 준비중에 있어요.
      </StyleContent>
      <Spacing height={8} />
      <StyleContent $textColor={theme.colors.headerText} $typography={typography.bodySm}>
        조금만 기달려주세요!
      </StyleContent>
    </StylePrivateNoticeContainer>
  )
}
