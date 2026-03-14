'use client'

import {
  StyleFollowContainer,
  StyleFollowItem,
  StyleProfileContainer,
  StyleProfileInfo,
  StyleProfileInfoContainer,
} from '@/styles/mypage/MypageHome.styles'
import { StyleContent } from '@/styles/common/Common.styles'
import { typography } from '@/styles/theme'
import { Badge } from '@/components/common'
import { ProfileIcon } from '@/assets/svgComponents'
import { useRouter } from 'next/navigation'
import { TagEnumType } from '@/types/user'
import { convertEnumToKorTag } from '@/utils/user'
import Image from 'next/image'
import { useTheme } from '@emotion/react'

interface ProfileInfoProps {
  profileImage: string | undefined
  nickname: string | undefined
  readingTasteType: TagEnumType | undefined
  followerCount: number | undefined
  followingCount: number | undefined
}

export default function ProfileInfo({
  profileImage,
  readingTasteType,
  nickname,
  followingCount,
  followerCount,
}: ProfileInfoProps) {
  const theme = useTheme()
  const router = useRouter()
  const onNavigate = (path: string) => {
    router.push(path)
  }
  return (
    <StyleProfileContainer>
      <StyleProfileInfoContainer>
        {profileImage ? (
          <div style={{ width: 48, height: 48, overflow: 'hidden', borderRadius: 999, flexShrink: 0 }}>
            <Image src={profileImage} width={48} height={48} alt="프로필 사진" style={{ objectFit: 'cover' }} />
          </div>
        ) : (
          <ProfileIcon width={48} height={48} />
        )}

        <StyleProfileInfo>
          {readingTasteType ? <Badge badgeLabel={convertEnumToKorTag(readingTasteType)} /> : null}
          <StyleContent $typography={typography.badgeMd} $textColor={theme.colors.headerText}>
            {nickname}
          </StyleContent>
        </StyleProfileInfo>
      </StyleProfileInfoContainer>

      <StyleFollowContainer>
        <StyleFollowItem onClick={() => onNavigate('/follower')}>
          <StyleContent $typography={typography.small}>팔로워</StyleContent>
          <StyleContent $typography={typography.subtitleMd}>{followerCount ? followerCount : 0}</StyleContent>
        </StyleFollowItem>
        <StyleFollowItem onClick={() => onNavigate('/following')}>
          <StyleContent $typography={typography.small}>팔로잉</StyleContent>
          <StyleContent $typography={typography.subtitleMd}>{followingCount ? followingCount : 0}</StyleContent>
        </StyleFollowItem>
      </StyleFollowContainer>
    </StyleProfileContainer>
  )
}
