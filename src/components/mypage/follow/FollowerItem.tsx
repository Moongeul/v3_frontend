'use client'

import { StyleFollowItemContainer, StyleUserInfo, StyleUserInfoContainer } from '@/styles/mypage/Follow.styles'
import { ProfileIcon } from '@/assets/svgComponents'
import { StyleContent } from '@/styles/common/Common.styles'
import { typography } from '@/styles/theme'
import { Badge, Button } from '@/components/common'
import { postFollow } from '@/lib/client/mypage'
import { TagType } from '@/types/user'
import Image from 'next/image'
import { convertTag } from '@/utils/user'
import { FollowStatusType } from '@/types/mypage'

interface FollowerItemProps {
  profileImage: string
  nickname: string
  readingTasteType: TagType
  id: number
  myFollowStatus: FollowStatusType
}
export default function FollowerItem({
  id,
  profileImage,
  readingTasteType,
  nickname,
  myFollowStatus,
}: FollowerItemProps) {
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
          <Badge badgeLabel={convertTag(readingTasteType)} />
        </StyleUserInfo>
      </StyleUserInfoContainer>

      <Button
        onClick={async () => {
          const result = await postFollow(id)
          console.log('result', result)
        }}
        variant={'primary'}
        size={'sm'}
        width={80}
      >
        맞팔로우
      </Button>
    </StyleFollowItemContainer>
  )
}
