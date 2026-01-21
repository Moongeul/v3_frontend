import { Spacing } from '@/components/common'
import { BookContent, BookSearchField } from '@/components/book'
import { SearchResultContent } from '@/components/search'

export default async function SearchPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
  const resolvedSearchParams = await searchParams

  const step = (resolvedSearchParams.type as 'select' | 'default') || 'default'

  return (
    <main>
      <Spacing height={72} />
      <BookSearchField />

      <Spacing height={20} />

      {step === 'select' ? <SearchResultContent type={step} /> : <BookContent />}
    </main>
  )
}
