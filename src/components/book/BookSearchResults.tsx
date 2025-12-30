'use client'

import { BookInfoSummary, Spacing, Spinner } from '@/components/common'
import { BookType } from '@/types/book'
import { JSX } from 'react'
import { APIResponseType, Paging } from '@/types/common'

interface BookSearchResultsProps {
  bookResponse: APIResponseType<Paging<BookType[]>>[] | undefined
  bottomRef: (node?: Element | null) => void
  isFetchingNextPage: boolean
}

export default function BookSearchResults({
  bookResponse,
  isFetchingNextPage,
  bottomRef,
}: BookSearchResultsProps): JSX.Element {
  return (
    <>
      {bookResponse?.map((page, i) =>
        page.data?.books.map((book) => (
          <div key={book.isbn}>
            <BookInfoSummary
              title={book.title}
              bookImage={book.bookImage}
              rating={book.ratingAverage}
              isbn={book.isbn}
              author={book.author}
              pubdate={book.pubdate}
              publisher={book.publisher}
            />
            <Spacing height={20} />
          </div>
        ))
      )}

      {/* 스크롤 감지 영역 */}
      <div ref={bottomRef} style={{ height: 20 }}>
        {isFetchingNextPage && <Spinner />}
      </div>
    </>
  )
}
