import { Button, Header, NavBar, PageLayout, Spacing } from '@/components/common'
import { Banner } from '@/components/home'
import { AlarmIcon, SettingIcon, TestBannerGraphic, WhiteRightArrowIcon } from '@/assets/svgComponents'
import { Record } from '@/components/mypage'
import Story from '@/components/mypage/home/Story'
import Question from '../../components/mypage/home/Question'
import MyProfile from '@/components/mypage/home/MyProfile'
import MypageItem from '@/components/mypage/home/MypageItem'
import { fetchMyCategoryList, fetchMyQuestions, fetchUserInfo } from '@/lib/server/mypage'
import Link from 'next/link'
import AuthWatcher from '@/components/common/AuthWatcher'
import HomeBanner from '@/components/home/HomeBanner'
import MypageBanner from '@/components/mypage/home/MypageBanner'

export const dynamic = 'force-dynamic'

export default async function MypagePage() {
  const userInfoResult = await fetchUserInfo()
  const initialError = userInfoResult?.success ? undefined : userInfoResult?.error

  const userInfo = userInfoResult.data
  const categoryResult = await fetchMyCategoryList(userInfo?.id)
  const category = categoryResult.data
  const myQuestionResult = await fetchMyQuestions(1, 3)
  const myQuestions = myQuestionResult.data?.data

  return (
    <main>
      <AuthWatcher error={initialError} results={userInfoResult} />
      <Header
        headerType={'title'}
        leftIcon={
          <Link href={'/alarm'}>
            <AlarmIcon width={24} height={24} />
          </Link>
        }
        rightIcon={
          <Link href={'/setting'}>
            <SettingIcon width={36} height={36} />
          </Link>
        }
      >
        마이페이지
      </Header>

      <Spacing height={60} />
      <PageLayout>
        <div>
          <Spacing height={8} />
          <MyProfile userInfo={userInfo} />

          <Spacing height={24} />
          <MypageBanner />

          <Spacing height={24} />
          <Record category={category} userId={userInfo?.id} />

          <Spacing height={24} />
          <Story userId={userInfo?.id} />

          <Spacing height={24} />
          <Question userId={userInfo?.id} nickname={userInfo?.nickname} myQuestions={myQuestions} />

          <Spacing height={24} />
          <MypageItem content={'독서 취향 테스트'} path={'/test'} />
          <MypageItem content={'내가 공감한 기록'} path={`/mypage/${userInfo?.id}/like`} />

          <Spacing height={300} />
        </div>
      </PageLayout>

      <Spacing height={80} />
      <NavBar />
    </main>
  )
}
