'use client'

import { StyleFollowItemContainer, StyleUserInfo, StyleUserInfoContainer } from '@/styles/mypage/Follow.styles'
import { ProfileIcon } from '@/assets/svgComponents'
import { StyleContent } from '@/styles/common/Common.styles'
import { typography } from '@/styles/theme'
import { Badge, Button } from '@/components/common'
import { postFollow, postUnFollow } from '@/lib/client/mypage'
import { TagEnumType } from '@/types/user'
import Image from 'next/image'
import { convertEnumToKorTag } from '@/utils/user'
import { FollowStatusType } from '@/types/mypage'
import { useRouter } from 'next/navigation'
import { useToast } from '@/components/common/toast/ToastContext'

interface FollowerItemProps {
  profileImage: string
  nickname: string
  readingTasteType: TagEnumType
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
  const router = useRouter()
  const { success, error } = useToast()

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
          if (myFollowStatus === 'ACCEPTED') {
            const result = await postUnFollow(id)
            if (result.success) {
              success('성공', '팔로우를 취소했어요.')
            } else {
              error('실패', '팔로우를 취소하지 못했어요.')
            }
            router.refresh()
          } else {
            const result = await postFollow(id)
            if (result.success) {
              success('성공', '팔로우에 성공하였어요.')
            } else {
              error('실패', '팔로우를 하지 못했어요.')
            }
            router.refresh()
          }
        }}
        variant={myFollowStatus === 'ACCEPTED' ? 'outline' : 'primary'}
        size={'sm'}
        width={80}
      >
        {myFollowStatus === 'ACCEPTED' ? '팔로잉' : '맞팔로우'}
      </Button>
    </StyleFollowItemContainer>
  )
}
