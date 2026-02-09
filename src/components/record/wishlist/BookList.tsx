'use client'

import Book from '@/components/record/wishlist/Book'
import { Spinner } from '@/components/common'
import { StyleBookShelfContainer, StyleShelfRow } from '@/styles/record/BookShelf.styles'
import { useAllWishReadBookInfiniteScroll } from '@/hooks/record/useAllWishReadBooksInfiniteScroll'
import { BookType } from '@/types/book'

export default function BookList() {
  const { books, bottomRef, isFetchingNextPage, hasData } = useAllWishReadBookInfiniteScroll()

  /**
   * 📚 배열을 특정 개수(size)만큼 청크(chunk)로 나누는 함수
   */
  const splitBooksIntoRows = (books: BookType[], size: number = 4) => {
    const rows = []
    for (let i = 0; i < books.length; i += size) {
      rows.push(books.slice(i, i + size))
    }
    return rows
  }

  // 4개씩 자르기
  const rows = splitBooksIntoRows(books, 4)
  console.log('rows', rows)

  return (
    <StyleBookShelfContainer>
      {hasData &&
        rows.map((row, index) => (
          <StyleShelfRow $gap={'16px'} key={`row-${index}`}>
            {row.map((book) => (
              <Book key={book.isbn} {...book} />
            ))}
          </StyleShelfRow>
        ))}

      {/* 무한 스크롤 트리거 */}
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
