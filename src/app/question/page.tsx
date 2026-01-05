import { Header, PageLayout, Spacing } from '@/components/common'
import { AddQuestionButton, QuestionCardColumnList } from '@/components/question'

export default function QuestionPage() {
  return (
    <main>
      <Header headerType={'dynamic'} rightIcon={<AddQuestionButton />}>
        질문
      </Header>
      <Spacing height={60} />

      <PageLayout>
        <QuestionCardColumnList />
      </PageLayout>
    </main>
  )
}
