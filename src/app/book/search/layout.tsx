import PageLayout from '@/components/common/PageLayout'
import Header from '@/components/common/Header'
import { Spacing } from '@/components/common'

export default function BookSearchLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div>
      <Header headerType={'dynamic'}>도서 검색</Header>
      <Spacing height={60} />
      <PageLayout>{children}</PageLayout>
    </div>
  )
}
