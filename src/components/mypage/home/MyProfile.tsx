'use client'

import { Button, Spacing } from '@/components/common'
import ProfileInfo from '@/components/mypage/home/ProfileInfo'
import { UserInfoType } from '@/types/user'
import { useRouter } from 'next/navigation'

interface ProfileProps {
  userInfo: UserInfoType | undefined
}

export default function MyProfile({ userInfo }: ProfileProps) {
  const router = useRouter()

  return (
    <>
      <ProfileInfo
        profileImage={userInfo?.profileImage}
        readingTasteType={userInfo?.readingTasteType}
        nickname={userInfo?.nickname}
        followerCount={userInfo?.followerCount}
        followingCount={userInfo?.followingCount}
      />

      <Spacing height={20} />

      <Button
        onClick={() => {
          router.push(`/profile/edit`)
        }}
        variant={'outline'}
        size={'md'}
      >
        프로필 편집
      </Button>
    </>
  )
}
