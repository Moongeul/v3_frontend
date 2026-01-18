import { Header, PageLayout, Spacing } from '@/components/common'

export default function FollowerLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div>
      <Header headerType={'dynamic'}>팔로워</Header>
      <Spacing height={60} />

      <PageLayout>{children}</PageLayout>
    </div>
  )
}
