'use client'

import { StyledAlarmCount, StyledAlarmWrapper } from '@/styles/alarm/Alarm.styles'
import { AlarmIcon } from '@/assets/svgComponents'
import { useTheme } from '@emotion/react'
import { DarkAlarmIcon } from '@/assets/svgComponents/dark'

interface AlarmCountProps {
  exist?: boolean
}

export default function AlarmCount({ exist }: AlarmCountProps) {
  const theme = useTheme()

  // 현재 테마가 다크모드인지 확인 (테마 구조에 따라 theme.isDark 혹은 theme.mode === 'dark' 등으로 변경)
  const isDarkMode = theme.colors.background !== '#FFFFFD'

  return (
    <StyledAlarmWrapper>
      {exist ? <StyledAlarmCount /> : null}

      {isDarkMode ? <DarkAlarmIcon width={32} height={32} /> : <AlarmIcon width={24} height={24} />}
    </StyledAlarmWrapper>
  )
}
