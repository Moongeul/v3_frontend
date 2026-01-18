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
import { TagType } from '@/types/user'
import { convertTag } from '@/utils/user'
import Image from 'next/image'

interface ProfileInfoProps {
  profileImage: string | undefined
  nickname: string | undefined
  readingTasteType: TagType | undefined
}

export default function ProfileInfo({ profileImage, readingTasteType, nickname }: ProfileInfoProps) {
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
          <Badge badgeLabel={convertTag(readingTasteType)} />
          <StyleContent $typography={typography.badgeMd}>{nickname}</StyleContent>
        </StyleProfileInfo>
      </StyleProfileInfoContainer>

      <StyleFollowContainer>
        <StyleFollowItem onClick={() => onNavigate('/follower')}>
          <StyleContent $typography={typography.small}>팔로워</StyleContent>
          <StyleContent $typography={typography.subtitleMd}>13</StyleContent>
        </StyleFollowItem>
        <StyleFollowItem onClick={() => onNavigate('/following')}>
          <StyleContent $typography={typography.small}>팔로잉</StyleContent>
          <StyleContent $typography={typography.subtitleMd}>13</StyleContent>
        </StyleFollowItem>
      </StyleFollowContainer>
    </StyleProfileContainer>
  )
}
