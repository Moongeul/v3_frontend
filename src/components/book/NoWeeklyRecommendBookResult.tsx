'use client'

import { StyleContent } from '@/styles/common/Common.styles'
import { typography } from '@/styles/theme'
import { StylePrivateNoticeContainer } from '@/styles/mypage/Privacy.styles'
import { useTheme } from '@emotion/react'
import { Spacing } from '@/components/common'

export default function NoWeeklyRecommendBookResult() {
  const theme = useTheme()

  return (
    <StylePrivateNoticeContainer>
      <StyleContent $textColor={theme.colors.headerText} $typography={typography.subtitleLg}>
        주간 추천 책이 없어요.
      </StyleContent>
      <Spacing height={8} />
      <StyleContent $textColor={theme.colors.headerText} $typography={typography.bodySm}>
        주간 추천 책이 등록될 때까지 잠시만 기다려주세요.
      </StyleContent>
    </StylePrivateNoticeContainer>
  )
}
