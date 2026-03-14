import { Header, PageLayout, Spacing, Spinner } from '@/components/common'
import { fetchMyCategoryList, fetchMyQuestions, fetchUserInfo } from '@/lib/server/mypage'
import UserProfile from '@/components/profile/UserProfile'
import { Record } from '@/components/mypage'
import Story from '../../../components/mypage/home/Story'
import Question from '../../../components/mypage/home/Question'
import PrivateNotice from '@/components/mypage/setting/PrivateNotice'

export default async function UserProfilePage({ params }: { params: Promise<{ userId: string }> }) {
  const { userId } = await params
  const userInfoResult = await fetchUserInfo(userId)
  const userInfo = userInfoResult.data

  const categoryResult = await fetchMyCategoryList(userInfo?.id)
  const category = categoryResult.data

  const myQuestionResult = await fetchMyQuestions(1, 3, userId)
  const myQuestions = myQuestionResult.data?.data

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

          {userInfo.privacyLevel === 'PUBLIC' ? (
            <>
              <Record category={category} />
              <Spacing height={24} />
              <Story />

              <Spacing height={24} />
              <Question myQuestions={myQuestions} />
            </>
          ) : (
            <PrivateNotice />
          )}
        </div>
      </PageLayout>
    </main>
  )
}
