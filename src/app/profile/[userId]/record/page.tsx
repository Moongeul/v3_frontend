import UserBookShelfRecord from '@/components/mypage/profile/record/UserBookShelfRecord'
import { Header, PageLayout, Spacing } from '@/components/common'
import { fetchUserInfo } from '@/lib/server/mypage'

interface UserRecordPageProps {
  params: Promise<{ userId: string }>
}

export default async function UserRecordPage({ params }: UserRecordPageProps) {
  const { userId } = await params

  const result = await fetchUserInfo(userId)
  const userData = result.data

  return (
    <main>
      <Header headerType={'dynamic'}>{userData?.nickname}님의 책장</Header>
      <Spacing height={60} />
      <PageLayout>
        <UserBookShelfRecord userId={userId} />
      </PageLayout>
    </main>
  )
}
