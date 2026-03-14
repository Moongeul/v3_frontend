'use client'

import { useTheme } from '@emotion/react'
import { OptionIcon } from '@/assets/svgComponents'
import { DarkOptionIcon } from '@/assets/svgComponents/dark'

export default function ThemeOptionIcon() {
  const theme = useTheme()
  const isDarkMode = theme.colors.background !== '#FFFFFD'
  return isDarkMode ? <DarkOptionIcon width={24} height={24} /> : <OptionIcon width={24} height={24} />
}
