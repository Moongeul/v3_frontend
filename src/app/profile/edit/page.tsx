import { Spacing } from '@/components/common'
import EditProfileImage from '@/components/mypage/profile/EditProfileImage'
import EditNicknameField from '@/components/mypage/profile/EditNicknameField'
import EditRandomNicknameButton from '@/components/mypage/profile/EditRandomNicknameButton'
import { fetchUserInfo } from '@/lib/server/mypage'
import EditBottomButton from '@/components/mypage/profile/EditBottomButton'

export default async function EditProfilePage() {
  const userInfoResult = await fetchUserInfo()
  const userInfo = userInfoResult.data

  console.log('userInfo', userInfo)

  return (
    <main>
      <EditProfileImage initialImageUrl={userInfo?.profileImage} />
      <Spacing height={40} />
      <EditNicknameField initialNickname={userInfo?.nickname} />
      <EditRandomNicknameButton />
      <EditBottomButton />
    </main>
  )
}
