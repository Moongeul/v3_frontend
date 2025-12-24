import PageLayout from '@/components/common/PageLayout'
import Header from '@/components/common/Header'

export default function BestSellerLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div>
      <Header headerType={'dynamic'}>베스트셀러</Header>
      <PageLayout>{children}</PageLayout>
    </div>
  )
}
