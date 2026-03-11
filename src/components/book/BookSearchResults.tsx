'use client'

import { BookInfoSummary, Spacing, Spinner } from '@/components/common'
import { BookType } from '@/types/book'
import { JSX } from 'react'
import { APIResponseType, Paging } from '@/types/common'
import { SelectBookButton } from '@/components/search'
import { SearchType } from '@/types/search'

interface BookSearchResultsProps {
  type?: 'default' | 'select' | 'wish' //wish
  onClick?: (isbn: string) => void
  bookResponse: APIResponseType<Paging<SearchType>>[] | undefined
  bottomRef: (node?: Element | null) => void
  isFetchingNextPage: boolean
}

export default function BookSearchResults({
  type = 'default',
  onClick,
  bookResponse,
  isFetchingNextPage,
  bottomRef,
}: BookSearchResultsProps): JSX.Element {
  return (
    <>
      {bookResponse?.map((page, i) =>
        page.data?.data?.bookData.map((book) => (
          <div key={book.isbn}>
            <BookInfoSummary
              title={book.title}
              bookImage={book.bookImage}
              rating={book.ratingAverage}
              isbn={book.isbn}
              author={book.author}
              pubdate={book.pubdate}
              publisher={book.publisher}
              rightElement={
                onClick ? (
                  type === 'default' ? (
                    <button />
                  ) : (
                    <SelectBookButton onClick={() => onClick(book.isbn)} />
                  )
                ) : null
              }
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
