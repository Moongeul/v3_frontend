'use client'

import {
  ReviewHeaderContainer,
  StyleReviewHeaderMetaContainer,
  StyleReviewHeaderMetaNickName,
  StyleReviewHeaderMetaTime,
  StyleReviewHeaderMetaUserInfo,
} from '@/styles/book/Review.styles'
import { Badge } from '@/components/common'
import { convertEnumToKorTag } from '@/utils/user'
import Image from 'next/image'
import { formatRelativeTime } from '@/utils/common'
import { ProfileInfoType } from '@/types/user'
import { useRouter } from 'next/navigation'
import ThemeOptionIcon from '@/components/common/icon/ThemeOptionIcon'
import { ReactNode, useState } from 'react'
import { ProfileIcon } from '@/assets/svgComponents'

interface ReviewHeaderProps {
  isProfile?: boolean
  memberInfo: ProfileInfoType
  created: string
  menu: ReactNode
  handleMenuClick: (e: React.MouseEvent) => void
  isMenuOpen: boolean
}

export default function ReviewHeader({
  isProfile = false,
  memberInfo,
  created,
  menu,
  handleMenuClick,
  isMenuOpen,
}: ReviewHeaderProps) {
  const router = useRouter()
  const [imgError, setImgError] = useState(false)

  console.log('memberInfo', memberInfo)

  return (
    <ReviewHeaderContainer
      onClick={(e) => {
        e.stopPropagation()
        router.push(`/profile/${memberInfo.memberId}`)
      }}
    >
      <StyleReviewHeaderMetaContainer>
        {isProfile ? (
          imgError || !memberInfo.profileImage ? (
            <ProfileIcon width={32} height={32} />
          ) : (
            <Image
              alt="프로필"
              src={memberInfo.profileImage}
              width={32}
              height={32}
              style={{ borderRadius: 999 }}
              onError={() => setImgError(true)}
            />
          )
        ) : null}
        <StyleReviewHeaderMetaUserInfo>
          <StyleReviewHeaderMetaNickName>{memberInfo.nickname}</StyleReviewHeaderMetaNickName>
          {memberInfo.readingTasteType ? <Badge badgeLabel={convertEnumToKorTag(memberInfo.readingTasteType)} /> : null}
        </StyleReviewHeaderMetaUserInfo>
        <StyleReviewHeaderMetaTime>{formatRelativeTime(created)}</StyleReviewHeaderMetaTime>
      </StyleReviewHeaderMetaContainer>
      <div style={{ position: 'relative' }}>
        <ThemeOptionIcon onClick={handleMenuClick} />
        {isMenuOpen && menu}
      </div>
    </ReviewHeaderContainer>
  )
}
