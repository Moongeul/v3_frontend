'use client'

import { StylePrivateNoticeContainer } from '@/styles/mypage/Privacy.styles'
import { LockIcon } from '@/assets/svgComponents'
import { Spacing } from '@/components/common'
import { typography } from '@/styles/theme'
import { StyleContent } from '@/styles/common/Common.styles'

export default function PrivateNotice() {
  return (
    <StylePrivateNoticeContainer>
      <LockIcon height={26} width={24} />
      <Spacing height={8} />
      <StyleContent $typography={typography.subtitleLg}>비공개 계정입니다.</StyleContent>
      <Spacing height={8} />
      <StyleContent $typography={typography.bodySm}>기록과 책장을 보려면 팔로우 하세요.</StyleContent>
    </StylePrivateNoticeContainer>
  )
}
