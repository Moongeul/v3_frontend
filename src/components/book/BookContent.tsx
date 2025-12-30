'use client'

import { ReactNode } from 'react'
import { Spacing } from '@/components/common'
import { BestsellerList, BookSearchResults, PopularBook } from '@/components/book/index'
import { useBookStore } from '@/store/bookStore'
import { useBookInfiniteScroll } from '@/hooks/book/useBookInfiniteScroll'

interface BookContentProps {
  children?: ReactNode
}
export default function BookContent({ children }: BookContentProps) {
  const { searchValue } = useBookStore((state) => state)
  const { books, hasData, bottomRef, isFetchingNextPage } = useBookInfiniteScroll(searchValue)
  return (
    <>
      {hasData ? (
        <>
          <BookSearchResults
            bookResponse={books?.pages}
            isFetchingNextPage={isFetchingNextPage}
            bottomRef={bottomRef}
          />
        </>
      ) : (
        <>
          <Spacing height={27} />
          <BestsellerList />

          <Spacing height={36} />
          <PopularBook />
        </>
      )}
    </>
  )
}
