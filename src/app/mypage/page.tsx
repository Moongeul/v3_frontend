import { Button, Spacing } from '@/components/common'
import { Banner } from '@/components/home'
import { TestBannerGraphic, WhiteRightArrowIcon } from '@/assets/svgComponents'
import { Record } from '@/components/mypage'
import Story from '@/components/mypage/home/Story'
import Question from '../../components/mypage/home/Question'
import Profile from '@/components/mypage/home/Profile'
import MypageItem from '@/components/mypage/home/MypageItem'
import { fetchUserInfo } from '@/lib/server/mypage'

export default async function MypagePage() {
  const result = await fetchUserInfo()
  const userInfo = result.data

  return (
    <main>
      <Spacing height={8} />
      <Profile userInfo={userInfo} />

      <Spacing height={24} />
      <Banner
        path={'/test?step=onboarding'}
        graphic={<TestBannerGraphic width={114} height={81} />}
        button={
          <Button size={'md'} width={139} rightIcon={<WhiteRightArrowIcon width={20} height={20} />}>
            독서 취향 테스트
          </Button>
        }
        content={'나의 독서 취향이 궁금하다면?'}
      />

      <Spacing height={24} />
      <Record />

      <Spacing height={24} />
      <Story />

      <Spacing height={24} />
      <Question />

      <Spacing height={24} />
      <MypageItem content={'독서 취향 테스트'} path={'/test'} />
      <MypageItem content={'내가 공감한 기록'} path={'/book'} />

      <Spacing height={80} />
    </main>
  )
}
