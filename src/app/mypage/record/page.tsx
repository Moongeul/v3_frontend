import { Header, NavBar, PageLayout, Spacing } from '@/components/common'
import { RecordCards } from '@/components/mypage'
import { fetchMyCategoryList, fetchUserInfo } from '@/lib/server/mypage'

export default async function MypageRecordPage() {
  const userInfoResult = await fetchUserInfo()
  const userInfo = userInfoResult.data

  const categoryResult = await fetchMyCategoryList(userInfo?.id)
  const category = categoryResult.data

  return (
    <main>
      <Header headerType={'dynamic'}>기록</Header>

      <Spacing height={60} />
      <PageLayout>
        <div>
          <Spacing height={20} />
          <RecordCards category={category} />
        </div>
      </PageLayout>

      <Spacing height={80} />
      <NavBar />
    </main>
  )
}
