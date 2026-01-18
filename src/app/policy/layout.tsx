import { Header, PageLayout, Spacing } from '@/components/common'
export default function PolicyLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div>
      <Header headerType={'dynamic'}>이용약관</Header>

      <Spacing height={60} />
      <PageLayout>{children}</PageLayout>
    </div>
  )
}
