import { Header, PageLayout, Spacing } from '@/components/common'
import EditQuestionButton from '@/components/question/edit/EditQuestionButton'

export default async function EditQuestionPage({
  children,
  params,
}: Readonly<{
  children: React.ReactNode
  params: Promise<{ questionId: string }>
}>) {
  const { questionId } = await params
  return (
    <div>
      <Header headerType={'dynamic'} rightIcon={<EditQuestionButton questionId={questionId} />}>
        질문 수정하기
      </Header>
      <Spacing height={60} />
      <PageLayout>{children}</PageLayout>
    </div>
  )
}
