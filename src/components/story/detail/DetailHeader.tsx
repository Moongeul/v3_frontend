'use client'
import { StyledDetailHeader } from '@/styles/story/Detail.styles'
import {
  ReviewHeaderContainer,
  StyleReviewHeaderMetaContainer,
  StyleReviewHeaderMetaTime,
  StyleReviewHeaderMetaUserInfo,
} from '@/styles/book/Review.styles'
import Image from 'next/image'
import { Badge } from '@/components/common'
import { convertEnumToKorTag } from '@/utils/user'
import { formatRelativeTime } from '@/utils/common'
import { GrayXIcon } from '@/assets/svgComponents'
import { useRouter } from 'next/navigation'
import { ProfileInfoType } from '@/types/user'
import { StyleContent } from '@/styles/common/Common.styles'
import { useTheme } from '@emotion/react'
import { typography } from '@/styles/theme'

interface DetailHeaderProps {
  memberInfo: ProfileInfoType
  created: string
}

export default function DetailHeader({ memberInfo, created }: DetailHeaderProps) {
  const router = useRouter()
  const theme = useTheme()

  return (
    <StyledDetailHeader>
      <ReviewHeaderContainer
        onClick={(e) => {
          e.stopPropagation()
          router.push(`/profile/${memberInfo.memberId}`)
        }}
      >
        <StyleReviewHeaderMetaContainer>
          <Image alt={'프로필'} src={memberInfo.profileImage} width={32} height={32} style={{ borderRadius: 999 }} />
          <StyleReviewHeaderMetaUserInfo>
            <StyleContent $typography={typography.badgeMd} $textColor={theme.colors.baseColor.lightYellow50}>
              {memberInfo.nickname}
            </StyleContent>
            <Badge badgeLabel={convertEnumToKorTag(memberInfo.readingTasteType)} />
          </StyleReviewHeaderMetaUserInfo>
          <StyleReviewHeaderMetaTime>{formatRelativeTime(created)}</StyleReviewHeaderMetaTime>
        </StyleReviewHeaderMetaContainer>
      </ReviewHeaderContainer>
      {/*<GrayOptionIcon width={36} height={36} />*/}
      <GrayXIcon
        onClick={() => {
          router.back()
        }}
        width={32}
        height={32}
      />
    </StyledDetailHeader>
  )
}
