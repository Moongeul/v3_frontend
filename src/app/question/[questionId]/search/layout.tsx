import { Header, PageLayout, Spacing } from '@/components/common'

export default function QuestionDetailLayout({
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
