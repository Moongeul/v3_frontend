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
import { useEffect, useState } from 'react'
import StoryOptionsMenu from '@/components/common/option/StoryOptionMenu'
import Cookies from 'js-cookie'
import UserOptionMenu from '@/components/common/option/UserOptionMenu'

interface DetailHeaderProps {
  memberInfo: ProfileInfoType
  created: string
}

export default function DetailHeader({ memberInfo, created }: DetailHeaderProps) {
  const router = useRouter()
  const theme = useTheme()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const loginMemberId = Cookies.get('memberId')
  const [imgSrc, setImgSrc] = useState(memberInfo.profileImage)

  const handleMenuClick = (e: React.MouseEvent) => {
    e.stopPropagation() // 카드 클릭 이벤트(상세 이동)가 발생하지 않도록 방지
    setIsMenuOpen(!isMenuOpen)
  }

  useEffect(() => {
    setImgSrc(memberInfo.profileImage)
  }, [memberInfo.profileImage])

  return (
    <StyledDetailHeader>
      <ReviewHeaderContainer
        onClick={(e) => {
          e.stopPropagation()
          router.push(`/profile/${memberInfo.memberId}`)
        }}
      >
        <StyleReviewHeaderMetaContainer>
          <Image
            alt={'프로필'}
            src={imgSrc}
            width={32}
            height={32}
            style={{ borderRadius: 999 }}
            onError={() => setImgSrc('/default-profile.png')} // 👈 이거 추가
          />
          <StyleReviewHeaderMetaUserInfo>
            <StyleContent $typography={typography.badgeMd} $textColor={theme.colors.baseColor.lightYellow50}>
              {memberInfo.nickname}
            </StyleContent>
            <Badge badgeLabel={convertEnumToKorTag(memberInfo.readingTasteType)} />
          </StyleReviewHeaderMetaUserInfo>
          <StyleReviewHeaderMetaTime>{formatRelativeTime(created)}</StyleReviewHeaderMetaTime>
        </StyleReviewHeaderMetaContainer>
      </ReviewHeaderContainer>
      {Number(loginMemberId) === memberInfo.memberId ? (
        <div style={{ position: 'relative' }}>
          <GrayOptionIcon onClick={handleMenuClick} width={36} height={36} />
          {isMenuOpen && <StoryOptionsMenu />}
        </div>
      ) : (
        <div style={{ position: 'relative' }}>
          <GrayOptionIcon onClick={handleMenuClick} width={36} height={36} />
          {isMenuOpen && <UserOptionMenu handleMenuClick={handleMenuClick} />}
        </div>
      )}

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
