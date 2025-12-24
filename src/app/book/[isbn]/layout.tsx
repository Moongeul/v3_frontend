import PageLayout from '@/components/common/PageLayout'
import Header from '@/components/common/Header'
import WriteButton from '@/components/book/WriteButton'

export default function BookDetailLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div>
      <Header headerType={'dynamic'} rightIcon={<WriteButton />}></Header>
      <PageLayout>{children}</PageLayout>
    </div>
  )
}
