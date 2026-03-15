import BookSearchInputField from '@/components/book/search/BookSearchInputField'
import { Spacing } from '@/components/common'
import QuestionBookSearchContent from '@/components/question/search/QuestionBookSearchContent'

export default function QuestionSearchPage() {
  return (
    <main>
      <BookSearchInputField />

      <Spacing height={20} />
      <QuestionBookSearchContent />
    </main>
  )
}
