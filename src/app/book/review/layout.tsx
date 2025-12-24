import PageLayout from '@/components/common/PageLayout'
import Header from '@/components/common/Header'

export default function BookReviewLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div>
      <Header headerType={'dynamic'}>리뷰</Header>
      <PageLayout>{children}</PageLayout>
    </div>
  )
}
