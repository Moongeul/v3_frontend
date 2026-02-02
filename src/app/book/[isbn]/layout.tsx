import PageLayout from '@/components/common/PageLayout'
import Header from '@/components/common/Header'
import WriteButton from '@/components/book/WriteButton'

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
      <Header headerType={'dynamic'} rightIcon={<WriteButton isbn={isbn} />}></Header>
      <PageLayout>{children}</PageLayout>
    </div>
  )
}
