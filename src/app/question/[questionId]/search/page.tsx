import BookSearchInputField from '@/components/book/search/BookSearchInputField'
import { Spacing } from '@/components/common'
import EditQuestionBookSearchContent from '@/components/question/search/EditQuestionBookSearchContent'

export default async function QuestionDetailSearchPage({ params }: { params: Promise<{ questionId: string }> }) {
  const { questionId } = await params
  console.log('questionId', questionId)
  return (
    <main>
      <BookSearchInputField />

      <Spacing height={20} />
      <EditQuestionBookSearchContent questionId={questionId} />
    </main>
  )
}
