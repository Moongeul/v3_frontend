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
import { GrayOptionIcon, GrayXIcon } from '@/assets/svgComponents'
import { useRouter } from 'next/navigation'
import { ProfileInfoType } from '@/types/user'
import { StyleContent } from '@/styles/common/Common.styles'
import { useTheme } from '@emotion/react'
import { typography } from '@/styles/theme'
import { useState } from 'react'
import ThemeOptionIcon from '@/components/common/icon/ThemeOptionIcon'
import StoryOptionsMenu from '@/components/common/option/StoryOptionMenu'

interface DetailHeaderProps {
  memberInfo: ProfileInfoType
  created: string
}

export default function DetailHeader({ memberInfo, created }: DetailHeaderProps) {
  const router = useRouter()
  const theme = useTheme()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleMenuClick = (e: React.MouseEvent) => {
    e.stopPropagation() // 카드 클릭 이벤트(상세 이동)가 발생하지 않도록 방지
    setIsMenuOpen(!isMenuOpen)
  }

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
      <div style={{ position: 'relative' }}>
        <GrayOptionIcon onClick={handleMenuClick} width={36} height={36} />
        {isMenuOpen && <StoryOptionsMenu />}
      </div>

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
