'use client'

import { WhiteUpIcon } from '@/assets/svgComponents'
import { useTheme } from '@emotion/react'
import { DarkUpIcon } from '@/assets/svgComponents/dark'

export default function ThemeUpIcon() {
  const theme = useTheme()
  const isDarkMode = theme.colors.background !== '#FFFFFD'

  return isDarkMode ? <DarkUpIcon width={24} height={24} /> : <WhiteUpIcon width={24} height={24} />
}
