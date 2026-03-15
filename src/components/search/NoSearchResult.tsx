'use client'

import { StyleContent } from '@/styles/common/Common.styles'
import { useTheme } from '@emotion/react'
import { typography } from '@/styles/theme'
import { Spacing } from '@/components/common'
import { StylePrivateNoticeContainer } from '@/styles/mypage/Privacy.styles'

export default function NoSearchResult() {
  const theme = useTheme()

  return (
    <StylePrivateNoticeContainer>
      <StyleContent $textColor={theme.colors.headerText} $typography={typography.subtitleLg}>
        찾고 싶은 책이나 사람이 있나요?
      </StyleContent>
      <Spacing height={8} />
      <StyleContent $textColor={theme.colors.headerText} $typography={typography.bodySm}>
        책 제목, 작가, 사용자 이름으로 검색할 수 있어요.
      </StyleContent>
    </StylePrivateNoticeContainer>
  )
}
