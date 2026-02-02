import BookInfo from '@/components/question/write/BookInfo' //서버 컴포넌트는 별도 import

import { BottomBorder, Spacing } from '@/components/common'
import { QuestionField } from '@/components/question'

export default async function QuestionWritePage({
  searchParams,
}: {
  // 2. 타입을 Promise로 감싸기
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
  const resolvedSearchParams = await searchParams
  const isbn = resolvedSearchParams.isbn || '0'
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
