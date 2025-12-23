import Header from '@/components/common/Header'
import PageLayout from '@/components/common/PageLayout'
import SubmitButton from '@/components/write/SubmitButton'

export default function WriteLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div>
      <Header headerType={'dynamic'} rightIcon={<SubmitButton />}>
        글쓰기
      </Header>
      <PageLayout>{children}</PageLayout>
    </div>
  )
}
