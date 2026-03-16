'use client'

import { useBookStore } from '@/store/bookStore'
import { useBookInfiniteScroll } from '@/hooks/book/useBookInfiniteScroll'
import { BookInfoSummary, Spacing, Spinner } from '@/components/common'
import EditQuestionSelectBookButton from '@/components/question/search/EditQuestionSelectBookButton'

interface EditQuestionBookSearchContentProps {
  questionId: string
}

export default function EditQuestionBookSearchContent({ questionId }: EditQuestionBookSearchContentProps) {
  const { searchValue } = useBookStore((state) => state)

  const { books, bottomRef, isFetchingNextPage } = useBookInfiniteScroll(searchValue)
  console.log('questionId', questionId)

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
              rightElement={<EditQuestionSelectBookButton isbn={book.isbn} questionId={questionId} />}
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
