'use client'

import { Badge, Button } from '@/components/common'
import { StyleFollowItemContainer, StyleUserInfo, StyleUserInfoContainer } from '@/styles/mypage/Follow.styles'
import { ProfileIcon } from '@/assets/svgComponents'
import { StyleContent } from '@/styles/common/Common.styles'
import { typography } from '@/styles/theme'
import { postFollow } from '@/lib/client/mypage'
import { TagEnumType } from '@/types/user'
import { FollowStatusType } from '@/types/mypage'
import Image from 'next/image'
import { convertEnumToKorTag } from '@/utils/user'

interface FollowingItemProps {
  id: number
  profileImage: string
  nickname: string
  readingTasteType: TagEnumType
  myFollowStatus: FollowStatusType
}

export default function FollowingItem({
  id,
  myFollowStatus,
  profileImage,
  readingTasteType,
  nickname,
}: FollowingItemProps) {
  return (
    <StyleFollowItemContainer>
      <StyleUserInfoContainer>
        {profileImage ? (
          <Image src={profileImage} alt={'프로필 사진'} height={48} width={48} style={{ borderRadius: 999 }} />
        ) : (
          <ProfileIcon width={48} height={48} />
        )}
        <StyleUserInfo>
          <StyleContent $typography={typography.badgeMd}>{nickname}</StyleContent>
          <Badge badgeLabel={convertEnumToKorTag(readingTasteType)} />
        </StyleUserInfo>
      </StyleUserInfoContainer>

      <Button
        onClick={async () => {
          const result = await postFollow(id)
          console.log('result', result)
        }}
        variant={'outline'}
        size={'sm'}
        width={80}
      >
        팔로잉
      </Button>
    </StyleFollowItemContainer>
  )
}
