import BookInfo from '@/components/question/write/BookInfo' //서버 컴포넌트는 별도 import

import { BottomBorder, Spacing } from '@/components/common'
import { SearchParams } from 'next/dist/server/request/search-params'
import { QuestionField } from '@/components/question'

export default async function QuestionWritePage({ searchParams }: { searchParams: SearchParams }) {
  const isbn = (searchParams.isbn as string) || '0'
  return (
    <main>
      <Spacing height={20} />
      <BookInfo isbn={isbn} />

      <Spacing height={20} />
      <BottomBorder />

      <Spacing height={20} />
      <QuestionField />
    </main>
  )
}
