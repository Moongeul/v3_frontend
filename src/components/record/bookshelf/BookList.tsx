'use client'

import { StyleBookShelfContainer, StyleShelfRow } from '@/styles/record/BookShelf.styles'
import Book from '@/components/record/bookshelf/Book'
import { BookShelfType } from '@/types/record'
import { useAllDoneReadBookInfiniteScroll } from '@/hooks/record/useAllDoneReadBooksInfiniteScroll'
import { Spinner } from '@/components/common'

export default function BookList() {
  const { books, bottomRef, isFetchingNextPage, hasData } = useAllDoneReadBookInfiniteScroll()

  console.log('books', books)
  // 데이터를 5개씩 묶는 헬퍼 함수
  const splitBooksByWeight = (books: BookShelfType[], maxWeight: number) => {
    if (!books.length) return []

    return books.reduce(
      (rows: BookShelfType[][], book) => {
        const lastRow = rows[rows.length - 1]
        const currentRowWeight = lastRow.reduce((sum, b) => sum + b.weight + 4, 0)

        if (currentRowWeight + book.weight <= maxWeight) {
          lastRow.push(book)
        } else {
          rows.push([book])
        }
        return rows
      },
      [[]]
    )
  }

  const rows = splitBooksByWeight(books, 355)

  return (
    <StyleBookShelfContainer>
      {/* 1. 데이터가 있을 때만 렌더링 */}
      {hasData &&
        rows.map((row, index) => (
          <StyleShelfRow key={`row-${index}`}>
            {row.map((book) => (
              <Book key={book.articleId} {...book} borderColor={'#FFC35480'} backgroundColor={'#FFC35480'} />
            ))}
          </StyleShelfRow>
        ))}

      {/* 2. 무한 스크롤 트리거 (가장 중요) */}
      {/* 이 div가 화면에 보이면 fetchNextPage가 실행됩니다. */}
      <div
        ref={bottomRef}
        style={{
          height: '50px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {isFetchingNextPage && <Spinner />}
      </div>
    </StyleBookShelfContainer>
  )
}
