import { Header, PageLayout, Spacing } from '@/components/common'

export default function MyPageLikeLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Header headerType={'dynamic'}>내가 공감한 기록</Header>

      <Spacing height={60} />
      <PageLayout>{children}</PageLayout>
    </div>
  )
}
