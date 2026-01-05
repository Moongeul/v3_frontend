'use client'

import { useRouter } from 'next/navigation'
import { useBookStore } from '@/store/bookStore'
import { useQuestionStore } from '@/store/questionStore'
import { useBookInfiniteScroll } from '@/hooks/book/useBookInfiniteScroll'
import { BookSearchResults } from '@/components/book'

interface SearchResultContentProps {
  type: 'select' | 'default'
}

export default function SearchResultContent({ type }: SearchResultContentProps) {
  const router = useRouter()
  const setQuestion = useQuestionStore((state) => state.setQuestion)
  const { searchValue } = useBookStore((state) => state)
  const { books, bottomRef, isFetchingNextPage } = useBookInfiniteScroll(searchValue)

  const onClick = (isbn: string) => {
    selectIsbn(isbn)
    onNavigate(isbn)
  }

  const selectIsbn = (isbn: string) => {
    setQuestion({ isbn: isbn })
  }

  const onNavigate = (isbn: string) => {
    router.push(`/question/write?isbn=${isbn}`)
  }

  return (
    <BookSearchResults
      type={type}
      onClick={onClick}
      bookResponse={books?.pages}
      isFetchingNextPage={isFetchingNextPage}
      bottomRef={bottomRef}
    />
  )
}
