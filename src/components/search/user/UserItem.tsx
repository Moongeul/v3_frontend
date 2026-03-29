'use client'

import { StyleContent } from '@/styles/common/Common.styles'
import { typography } from '@/styles/theme'
import { Badge } from '@/components/common'
import { convertEnumToKorTag } from '@/utils/user'
import { StyleReviewHeaderMetaUserInfo } from '@/styles/book/Review.styles'
import { useTheme } from '@emotion/react'
import { TagEnumType } from '@/types/user'
import { StyledUserItemWrapper } from '@/styles/search/Search.styles'
import Image from 'next/image'

interface UserItemProps {
  userId: number
  readingTasteType: TagEnumType
  nickname: string
  profileImage: string
}

export default function UserItem({ readingTasteType, nickname, profileImage }: UserItemProps) {
  const theme = useTheme()

  return (
    <StyledUserItemWrapper>
      <Image alt={'프로필'} src={profileImage} width={48} height={48} style={{ borderRadius: 999 }} />
      <StyleReviewHeaderMetaUserInfo>
        <StyleContent $typography={typography.badgeMd} $textColor={theme.colors.headerText}>
          {nickname}
        </StyleContent>
        <Badge badgeLabel={convertEnumToKorTag(readingTasteType)} />
      </StyleReviewHeaderMetaUserInfo>
    </StyledUserItemWrapper>
  )
}
