'use client'

import { useBookStore } from '@/store/bookStore'
import { useBookInfiniteScroll } from '@/hooks/book/useBookInfiniteScroll'
import { BookInfoSummary, Spacing, Spinner } from '@/components/common'
import QuestionSelectBookButton from '@/components/question/search/QuestionSelectBookButton'

export default function QuestionBookSearchContent() {
  const { searchValue } = useBookStore((state) => state)

  const { books, bottomRef, isFetchingNextPage } = useBookInfiniteScroll(searchValue)

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
              rightElement={<QuestionSelectBookButton isbn={book.isbn} />}
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
