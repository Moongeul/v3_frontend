import { Header, PageLayout, Spacing } from '@/components/common'
export default function TestLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div>
      <Header headerType={'dynamic'}>취향테스트</Header>

      <Spacing height={60} />
      <PageLayout>{children}</PageLayout>
    </div>
  )
}
