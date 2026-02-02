import BookSearchInputField from '@/components/book/search/BookSearchInputField'
import { Spacing } from '@/components/common'
import WriteBookSearchContent from '@/components/write/WriteBookSearchContent'

export default function WriteSearchPage() {
  return (
    <main>
      <BookSearchInputField />

      <Spacing height={20} />
      <WriteBookSearchContent />
    </main>
  )
}
