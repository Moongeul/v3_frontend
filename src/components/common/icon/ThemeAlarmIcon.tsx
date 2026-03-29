'use client'

import { AlarmIcon } from '@/assets/svgComponents'
import { DarkAlarmIcon } from '@/assets/svgComponents/dark'
import { useTheme } from '@emotion/react'

export default function ThemeAlarmIcon() {
  const theme = useTheme()
  const isDarkMode = theme.colors.background !== '#FFFFFD'

  return isDarkMode ? <DarkAlarmIcon width={32} height={32} /> : <AlarmIcon width={24} height={24} />
}
