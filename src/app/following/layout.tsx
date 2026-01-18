import { Header, PageLayout, Spacing } from '@/components/common'

export default function FollowingLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div>
      <Header headerType={'dynamic'}>팔로잉</Header>
      <Spacing height={60} />

      <PageLayout>{children}</PageLayout>
    </div>
  )
}
