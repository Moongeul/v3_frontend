import { Spacing } from '@/components/common'
import { BookSearchField } from '@/components/book'

export default async function SearchPage() {
  return (
    <main>
      <Spacing height={72} />
      <BookSearchField />

      {/*<Spacing height={20} />*/}

      {/*<SearchResultContent />*/}
    </main>
  )
}
