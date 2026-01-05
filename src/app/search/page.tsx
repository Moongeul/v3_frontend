import { Spacing } from '@/components/common'
import { BookContent, BookSearchField } from '@/components/book'
import { SearchParams } from 'next/dist/server/request/search-params'
import { SearchResultContent } from '@/components/search'

export default async function SearchPage({ searchParams }: { searchParams: SearchParams }) {
  const step = (searchParams.type as 'select' | 'default') || 'default'

  return (
    <main>
      <Spacing height={72} />
      <BookSearchField />

      <Spacing height={20} />

      {step === 'select' ? <SearchResultContent type={step} /> : <BookContent />}
    </main>
  )
}
