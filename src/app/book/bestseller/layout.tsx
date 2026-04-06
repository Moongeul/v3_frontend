import PageLayout from '@/components/common/PageLayout'
import Header from '@/components/common/Header'
import WriteButton from '@/components/book/WriteButton'
import { Spacing } from '@/components/common'

export default async function BookDetailLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode
  params: Promise<{ isbn: string }>
}>) {
  const { isbn } = await params
  return (
    <div>
      <Header headerType={'dynamic'}>지금 많이 읽는 책</Header>
      <Spacing height={60} />
      <PageLayout>{children}</PageLayout>
    </div>
  )
}
