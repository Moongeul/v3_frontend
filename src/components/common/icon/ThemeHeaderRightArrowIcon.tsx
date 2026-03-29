'use client'

import { useTheme } from '@emotion/react'
import { HeaderRightArrowIcon } from '@/assets/svgComponents'
import { DarkHeaderRightArrowIcon } from '@/assets/svgComponents/dark'

export default function ThemeHeaderRightArrowIcon() {
  const theme = useTheme()
  const isDarkMode = theme.colors.background !== '#FFFFFD'
  return isDarkMode ? (
    <DarkHeaderRightArrowIcon width={20} height={20} />
  ) : (
    <HeaderRightArrowIcon width={20} height={20} />
  )
}
