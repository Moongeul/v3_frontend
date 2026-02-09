import { Button, Spacing } from '@/components/common'
import ProfileInfo from '@/components/mypage/home/ProfileInfo'
import { UserInfoType } from '@/types/user'

interface ProfileProps {
  userInfo: UserInfoType | undefined
}

export default async function MyProfile({ userInfo }: ProfileProps) {
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

      <Button variant={'outline'} size={'md'}>
        프로필 편집
      </Button>
    </>
  )
}
