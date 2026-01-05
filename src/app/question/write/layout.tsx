import { Header, PageLayout, Spacing } from '@/components/common'
import { WriteQuestionButton } from '@/components/question'

export default function WriteQuestion({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div>
      <Header headerType={'dynamic'} rightIcon={<WriteQuestionButton />}>
        질문 만들기
      </Header>
      <Spacing height={60} />
      <PageLayout>{children}</PageLayout>
    </div>
  )
}
