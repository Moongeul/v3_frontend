'use client'

import ProfileInfo from '@/components/mypage/home/ProfileInfo'
import { Button, Spacing } from '@/components/common'
import { UserInfoType } from '@/types/user'
import { StyleUserProfileButtons } from '@/styles/profile/Profile.styles'
import { postFollow, postUnFollow } from '@/lib/client/mypage'
import { useRouter } from 'next/navigation'

interface UserProfileProps {
  userInfo: UserInfoType
}

export default function UserProfile({ userInfo }: UserProfileProps) {
  const router = useRouter()
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
              console.log('언팔', result)
              router.refresh()
            } else {
              const result = await postFollow(userInfo.id)
              console.log('팔로우', result)
              router.refresh()
            }
          }}
          variant={userInfo.myFollowStatus === 'ACCEPTED' ? 'secondary' : 'primary'}
          size={'md'}
        >
          {userInfo.myFollowStatus === 'ACCEPTED' ? '팔로잉' : '팔로우'}
        </Button>
        {userInfo.privacyLevel === 'PUBLIC' && (
          <Button variant={'outline'} size={'md'}>
            책장 둘러보기
          </Button>
        )}
      </StyleUserProfileButtons>
    </>
  )
}
