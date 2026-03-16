'use client'

import { useTheme } from '@emotion/react'
import { OptionIcon } from '@/assets/svgComponents'
import { DarkOptionIcon } from '@/assets/svgComponents/dark'

interface ThemeOptionIconProps {
  onClick: (e: React.MouseEvent) => void
}

export default function ThemeOptionIcon({ onClick }: ThemeOptionIconProps) {
  const theme = useTheme()
  const isDarkMode = theme.colors.background !== '#FFFFFD'
  return isDarkMode ? (
    <DarkOptionIcon style={{ cursor: 'pointer' }} onClick={onClick} width={24} height={24} />
  ) : (
    <OptionIcon style={{ cursor: 'pointer' }} onClick={onClick} width={24} height={24} />
  )
}
