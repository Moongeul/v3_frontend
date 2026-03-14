import { Header, PageLayout, Spacing } from '@/components/common'
import { StoryWriteButton } from '@/components/story'
import { serverFetchPostDetail } from '@/lib/server/record'
import { cookies } from 'next/headers'

export default async function RecordDetailLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode
  params: Promise<{ recordId: string }>
}>) {
  const { recordId } = await params

  // 2. 쿠키 인스턴스 가져오기 (비동기 처리 필요 - Next.js 15 기준)
  const cookieStore = await cookies()
  const memberId = cookieStore.get('memberId')?.value

  const result = await serverFetchPostDetail(Number(recordId))
  const postData = result.data

  return (
    <div>
      <Header
        headerType={'dynamic'}
        rightIcon={Number(memberId) === postData.memberInfo.memberId ? <StoryWriteButton recordId={recordId} /> : null}
      />
      <Spacing height={60} />
      <PageLayout>{children}</PageLayout>
    </div>
  )
}
