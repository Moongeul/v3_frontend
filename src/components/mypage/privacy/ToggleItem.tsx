'use client'

import { StylePrivacyItemContainer } from '@/styles/mypage/Privacy.styles'
import { Label } from '@/components/common'
import { typography } from '@/styles/theme'
import CustomSwitch from '@/components/common/CustomSwitch'

interface ToggleItemProps {
  content: string
  checked: boolean
  onClick: () => void
}

export default function ToggleItem({ content, checked, onClick }: ToggleItemProps) {
  return (
    <StylePrivacyItemContainer>
      <Label labelStyle={typography.bodyMd}>{content}</Label>
      <CustomSwitch checked={checked} onClick={onClick} />
    </StylePrivacyItemContainer>
  )
}
