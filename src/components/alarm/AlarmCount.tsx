'use client'

import { StyledAlarmCount, StyledAlarmWrapper } from '@/styles/alarm/Alarm.styles'
import { AlarmIcon } from '@/assets/svgComponents'

interface AlarmCountProps {
  exist?: boolean
}

export default function AlarmCount({ exist }: AlarmCountProps) {
  return (
    <StyledAlarmWrapper>
      {exist ? <StyledAlarmCount /> : null}

      <AlarmIcon width={24} height={24} />
    </StyledAlarmWrapper>
  )
}
