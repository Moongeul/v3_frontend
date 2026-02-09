'use client'

import ProfileInfo from '@/components/mypage/home/ProfileInfo'
import { Button, Spacing } from '@/components/common'
import { UserInfoType } from '@/types/user'
import { StyleUserProfileButtons } from '@/styles/profile/Profile.styles'

interface UserProfileProps {
  userInfo: UserInfoType
}

export default function UserProfile({ userInfo }: UserProfileProps) {
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
        <Button variant={'primary'} size={'md'}>
          팔로우
        </Button>
        <Button variant={'outline'} size={'md'}>
          책장 둘러보기
        </Button>
      </StyleUserProfileButtons>
    </>
  )
}
