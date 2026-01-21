import BookSearchInputField from '@/components/book/search/BookSearchInputField'
import BookSearchContent from '@/components/book/search/BookSearchContent'
import { Spacing } from '@/components/common'

export default function BookSearchPage() {
  return (
    <main>
      <BookSearchInputField />

      <Spacing height={20} />
      <BookSearchContent />
    </main>
  )
}
