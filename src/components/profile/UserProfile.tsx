'use client'

import ProfileInfo from '@/components/mypage/home/ProfileInfo'
import { Button, Spacing } from '@/components/common'
import { UserInfoType } from '@/types/user'
import { StyleUserProfileButtons } from '@/styles/profile/Profile.styles'
import { postFollow, postUnFollow } from '@/lib/client/mypage'
import { useRouter } from 'next/navigation'
import { useToast } from '@/components/common/toast/ToastContext'

interface UserProfileProps {
  userInfo: UserInfoType
}

export default function UserProfile({ userInfo }: UserProfileProps) {
  const router = useRouter()
  const { success, error } = useToast()
  return (
    <>
      <ProfileInfo
        profileImage={userInfo.profileImage}
        readingTasteType={userInfo.readingTasteType}
        nickname={userInfo.nickname}
        followerCount={userInfo.followerCount}
        followingCount={userInfo.followingCount}
      />

      <Spacing height={20} />

      <StyleUserProfileButtons>
        <Button
          onClick={async () => {
            if (userInfo.myFollowStatus === 'ACCEPTED') {
              const result = await postUnFollow(userInfo.id)
              if (result.success) {
                success('팔로우 취소 성공', '팔로우를 취소했어요')
              } else {
                error('팔로우 취소 실패', '팔로우를 취소하지 못헀어요.')
              }
              router.refresh()
            } else {
              const result = await postFollow(userInfo.id)
              if (result.success) {
                success('팔로우 성공', '팔로우를 했어요')
              } else {
                error('팔로우 실패', '팔로우를 하지 못헀어요.')
              }
              router.refresh()
            }
          }}
          variant={userInfo.myFollowStatus === 'ACCEPTED' ? 'secondary' : 'primary'}
          size={'md'}
        >
          {userInfo.myFollowStatus === 'ACCEPTED' ? '팔로잉' : '팔로우'}
        </Button>
        {userInfo.privacyLevel === 'PUBLIC' && (
          <Button
            onClick={() => {
              router.push(`/profile/${userInfo.id}/record`)
            }}
            variant={'outline'}
            size={'md'}
          >
            책장 둘러보기
          </Button>
        )}
      </StyleUserProfileButtons>
    </>
  )
}
