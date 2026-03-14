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

interface ReviewHeaderProps {
  isProfile?: boolean
  memberInfo: ProfileInfoType
  created: string
}

export default function ReviewHeader({ isProfile = false, memberInfo, created }: ReviewHeaderProps) {
  const router = useRouter()
  return (
    <ReviewHeaderContainer
      onClick={(e) => {
        e.stopPropagation()
        router.push(`/profile/${memberInfo.memberId}`)
      }}
    >
      <StyleReviewHeaderMetaContainer>
        {isProfile ? (
          <Image alt={'프로필'} src={memberInfo.profileImage} width={32} height={32} style={{ borderRadius: 999 }} />
        ) : null}
        <StyleReviewHeaderMetaUserInfo>
          <StyleReviewHeaderMetaNickName>{memberInfo.nickname}</StyleReviewHeaderMetaNickName>
          {memberInfo.readingTasteType ? <Badge badgeLabel={convertEnumToKorTag(memberInfo.readingTasteType)} /> : null}
        </StyleReviewHeaderMetaUserInfo>
        <StyleReviewHeaderMetaTime>{formatRelativeTime(created)}</StyleReviewHeaderMetaTime>
      </StyleReviewHeaderMetaContainer>
      <ThemeOptionIcon />
    </ReviewHeaderContainer>
  )
}
