'use client'

import { AlarmType } from '@/types/alarm'
import { StyledAlarmContainer, StyledContentWrapper, StyledProfileImageWrapper } from '@/styles/alarm/Alarm.styles'
import Image from 'next/image'
import { StyleContent } from '@/styles/common/Common.styles'
import { useTheme } from '@emotion/react'
import { typography } from '@/styles/theme'
import { formatRelativeTime } from '@/utils/common'

export default function AlarmItem({
  id,
  content,
  notificationType,
  read,
  relatedId,
  profileImage,
  created_at,
}: AlarmType) {
  const theme = useTheme()
  return (
    <StyledAlarmContainer>
      {profileImage ? (
        <StyledProfileImageWrapper>
          <Image src={profileImage} alt={'프로필 이미지'} />
        </StyledProfileImageWrapper>
      ) : null}
      <StyledContentWrapper>
        <StyledContentWrapper>
          <StyleContent $typography={typography.subtitleSm} $textColor={theme.colors.headerText}>
            {content}
          </StyleContent>
          <StyleContent $typography={typography.small} $textColor={theme.colors.textFieldDefaultText}>
            {formatRelativeTime(created_at)}
          </StyleContent>
        </StyledContentWrapper>
      </StyledContentWrapper>
    </StyledAlarmContainer>
  )
}
