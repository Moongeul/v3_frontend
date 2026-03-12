'use client'

import { StyledAlarmBackground } from '@/styles/alarm/Alarm.styles'
import { ReactNode } from 'react'

export default function AlarmPageLayout({ children }: { children: ReactNode }) {
  return <StyledAlarmBackground>{children}</StyledAlarmBackground>
}
