'use client'

import { BookInfoSummary, Spacing, Spinner } from '@/components/common'
import { BookType } from '@/types/book'

interface AllBookListProps {
  allBooks: BookType[]
  isFetchingNextPage?: boolean
  scrollRef?: (node?: Element | null) => void
}

export default function AllBookList({ allBooks, isFetchingNextPage, scrollRef }: AllBookListProps) {
  return (
    <>
      {allBooks.map((book) => (
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
      ))}

      {/* 스크롤 감지 영역 */}
      {scrollRef && (
        <div ref={scrollRef} style={{ height: 20 }}>
          {isFetchingNextPage && <Spinner />}
        </div>
      )}
    </>
  )
}
