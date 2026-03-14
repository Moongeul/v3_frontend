'use client'

import { useTheme } from '@emotion/react'
import { SearchIcon } from '@/assets/svgComponents'
import { DarkSearchIcon } from '@/assets/svgComponents/dark'

interface Props {
  width?: number
  height?: number
}

export default function ThemeSearchIcon({ width = 24, height = 24 }: Props) {
  const theme = useTheme()
  // 이전에 정의한 조건 (배경색이 lightTheme 기본값이 아니면 다크)
  const isDarkMode = theme.colors.background !== '#FFFFFD'

  return isDarkMode ? <DarkSearchIcon width={32} height={32} /> : <SearchIcon width={width} height={height} />
}
