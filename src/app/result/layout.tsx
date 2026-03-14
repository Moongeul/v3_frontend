import { Header, PageLayout, Spacing } from '@/components/common'
export default function ResultLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div>
      <Header headerType={'dynamic'} path={'/home?tab=PUBLIC'}>
        취향 테스트 결과
      </Header>

      <Spacing height={60} />
      <PageLayout>{children}</PageLayout>
    </div>
  )
}
