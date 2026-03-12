'use client'

import { useInfiniteQuery } from '@tanstack/react-query'
import { clientFetchBookResults } from '@/lib/client/book'
import { useInView } from 'react-intersection-observer'
import { useEffect } from 'react'
import { BookInfoSummary, Spacing, Spinner } from '@/components/common'
import { useSearchStore } from '@/store/searchStore'

const DEFAULT_SIZE = 20

export default function Book() {
  const { searchValue } = useSearchStore((state) => state)

  const filterParams = { query: searchValue }

  const queryResult = useInfiniteQuery({
    queryKey: ['books', filterParams],
    queryFn: ({ pageParam }) =>
      clientFetchBookResults({
        page: pageParam as number,
        size: DEFAULT_SIZE,
        type: 'book',
        ...filterParams,
      }),
    initialPageParam: 1,

    getNextPageParam: (lastPage) => {
      if (!lastPage?.data) return undefined
      const { page, totalPages } = lastPage.data
      return page < totalPages ? page + 1 : undefined
    },
  })
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } = queryResult
  const { ref, inView } = useInView()

  useEffect(() => {
    if (inView && hasNextPage && !isFetchingNextPage) {
      fetchNextPage()
    }
  }, [inView, hasNextPage, isFetchingNextPage, fetchNextPage])

  return (
    <>
      {data?.pages?.map((page, i) =>
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
            />
            <Spacing height={20} />
          </div>
        ))
      )}

      {/* 스크롤 감지 영역 */}
      <div ref={ref} style={{ height: 20 }}>
        {isFetchingNextPage && <Spinner />}
      </div>
    </>
  )
}
