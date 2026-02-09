'use client'

import { StyledSwitch, StyledThumb } from '@/styles/common/Switch.styles'

interface CustomSwitchProps {
  checked: boolean
  onClick?: () => void
}

export default function CustomSwitch({ checked, onClick }: CustomSwitchProps) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
      <StyledSwitch id="custom-switch" checked={checked} onCheckedChange={onClick}>
        <StyledThumb />
      </StyledSwitch>
    </div>
  )
}
