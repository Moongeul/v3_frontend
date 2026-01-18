'use client'

import { StyleContent } from '@/styles/common/Common.styles'
import { baseColor, typography } from '@/styles/theme'
import { Spacing } from '@/components/common'

export default function Content() {
  return (
    <div>
      <StyleContent $typography={typography.subtitleLg}>정말 탈퇴하실껀가요?</StyleContent>
      <Spacing height={12} />
      <StyleContent $typography={typography.bodyMd}>탈퇴 시 유의사항</StyleContent>
      <StyleContent $typography={typography.bodySm} $textColor={baseColor.gray600}>
        • 탈퇴 시 moongeul 계정이 삭제되며 해당 계정은{' '}
        <span style={{ color: '#FF626D' }}>1개월 간 서비스 재가입이 불가능</span>합니다.
      </StyleContent>
    </div>
  )
}
