import { Header, PageLayout, Spacing } from '@/components/common'
import { fetchCategoryName } from '@/lib/server/mypage'

export default async function MyPageRecordLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode
  params: Promise<{ id: string }>
}>) {
  const { id } = await params
  const result = await fetchCategoryName(id)
  const categoryName = result.data?.title

  console.log('result', result)
  console.log('id', id)

  return (
    <div>
      <Header headerType={'dynamic'}>{categoryName}</Header>
      <Spacing height={60} />
      <PageLayout>{children}</PageLayout>
    </div>
  )
}
