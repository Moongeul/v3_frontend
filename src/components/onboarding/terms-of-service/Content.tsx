'use client'

import { StyleContent } from '@/styles/onboarding/TermsOfService.styles'
import Label from '../../common/Label'
import { typography } from '@/styles/theme'
import { useTheme } from '@emotion/react'

export default function Content() {
  const theme = useTheme()
  return (
    <StyleContent>
      <Label labelStyle={typography.titleMd} labelColor={theme.colors.headerText}>
        약관동의가 필요해요.
      </Label>
      <Label labelStyle={typography.bodyMd} labelColor={theme.colors.buttonActiveGhost}>
        {`Moongle 서비스 시작 및 가입을 위해\n먼저 정보제공 및 필수 약관에 동의해주세요.`}
      </Label>
    </StyleContent>
  )
}
