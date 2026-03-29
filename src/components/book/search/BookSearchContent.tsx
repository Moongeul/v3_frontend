'use client'

import { useBookStore } from '@/store/bookStore'
import { useBookInfiniteScroll } from '@/hooks/book/useBookInfiniteScroll'
import WishBookButton from '@/components/common/button/WishBookButton'
import { BookInfoSummary, Spacing, Spinner } from '@/components/common'
import { useMemo } from 'react'
import NoSearchResult from '@/components/book/search/NoSearchResult'

export default function BookSearchContent() {
  const { searchValue } = useBookStore((state) => state)

  const { books, hasData, bottomRef, isFetchingNextPage } = useBookInfiniteScroll(searchValue)

  // 1. 중첩된 페이지 구조를 단일 배열로 정제
  const allBooks = useMemo(() => {
    return books?.pages.flatMap((page) => page.data?.data?.bookData || []) || []
  }, [books])

  // 3. 결과가 없을 때 처리 (로딩 완료 후 데이터가 0개인 경우)
  if (allBooks.length === 0) {
    return <NoSearchResult />
  }

  return (
    <>
      {books?.pages?.map((page, i) =>
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
              rightElement={<WishBookButton isbn={book.isbn} />}
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
