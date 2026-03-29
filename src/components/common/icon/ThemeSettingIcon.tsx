'use client'

import { SettingIcon } from '@/assets/svgComponents'
import { DarkSettingIcon } from '@/assets/svgComponents/dark'
import { useTheme } from '@emotion/react'

export default function ThemeSettingIcon() {
  const theme = useTheme()
  const isDarkMode = theme.colors.background !== '#FFFFFD'

  return isDarkMode ? <DarkSettingIcon width={36} height={36} /> : <SettingIcon width={36} height={36} />
}
