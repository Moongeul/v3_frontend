import { Header, PageLayout, Spacing } from '@/components/common'

export default async function MyPageRecordLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode
  params: Promise<{ id: string }>
}>) {
  const { id } = await params
  console.log('id', id)
  return (
    <div>
      <Header headerType={'dynamic'}>{id}</Header>
      <Spacing height={60} />
      <PageLayout>{children}</PageLayout>
    </div>
  )
}
