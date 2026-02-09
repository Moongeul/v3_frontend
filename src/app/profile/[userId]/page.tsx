import { Header, PageLayout, Spacing, Spinner } from '@/components/common'
import { fetchMyCategoryList, fetchUserInfo } from '@/lib/server/mypage'
import UserProfile from '@/components/profile/UserProfile'
import { Record } from '@/components/mypage'
import Story from '../../../components/mypage/home/Story'
import Question from '../../../components/mypage/home/Question'

export default async function UserProfilePage({ params }: { params: Promise<{ userId: string }> }) {
  const { userId } = await params
  const userInfoResult = await fetchUserInfo(userId)
  const userInfo = userInfoResult.data

  const categoryResult = await fetchMyCategoryList(userInfo?.id)
  const category = categoryResult.data
  console.log(categoryResult)

  if (!userInfo) {
    return <Spinner />
  }

  return (
    <main>
      <Header headerType={'dynamic'}>{userInfo.nickname}</Header>
      <Spacing height={60} />

      <PageLayout>
        <div>
          <UserProfile userInfo={userInfo} />
          <Spacing height={24} />

          <Record category={category} />
          <Spacing height={24} />
          <Story />

          <Spacing height={24} />
          <Question />
        </div>
      </PageLayout>
    </main>
  )
}
