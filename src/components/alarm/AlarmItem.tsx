'use client'

import { AlarmType } from '@/types/alarm'
import { StyledAlarmContainer, StyledContentWrapper, StyledProfileImageWrapper } from '@/styles/alarm/Alarm.styles'
import Image from 'next/image'
import { StyleContent } from '@/styles/common/Common.styles'
import { useTheme } from '@emotion/react'
import { typography } from '@/styles/theme'
import { formatDate } from '@/utils/common'
import { Spacing } from '@/components/common'
import AlarmButtons from '@/components/alarm/AlarmButtons'

export default function AlarmItem({
  id,
  content,
  notificationType,
  read,
  relatedId,
  profileImage,
  createdAt,
}: AlarmType) {
  const theme = useTheme()
  return (
    <StyledAlarmContainer $read={read}>
      {/* 1. 프로필 이미지 영역 */}
      {profileImage && (
        <StyledProfileImageWrapper>
          <Image src={profileImage} alt={'프로필 이미지'} width={40} height={40} style={{ borderRadius: 999 }} />
        </StyledProfileImageWrapper>
      )}

      {/* 2. 콘텐츠 영역 (여기 중복되었던 Wrapper를 하나로 합침) */}
      <StyledContentWrapper>
        <StyleContent $typography={typography.subtitleSm} $textColor={theme.colors.headerText}>
          {content}
        </StyleContent>
        <StyleContent $typography={typography.small} $textColor={theme.colors.textFieldDefaultText}>
          {formatDate(createdAt)}
        </StyleContent>

        {/* 팔로우 버튼 등 추가 요소 */}
        {notificationType === 'FOLLOW_PRIVATE' && (
          <>
            <Spacing height={8} />
            <AlarmButtons relatedId={relatedId} />
          </>
        )}
      </StyledContentWrapper>
    </StyledAlarmContainer>
  )
}
