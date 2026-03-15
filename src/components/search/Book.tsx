'use client'

import { useInfiniteQuery } from '@tanstack/react-query'
import { clientFetchBookResults } from '@/lib/client/book'
import { useInView } from 'react-intersection-observer'
import { useEffect, useMemo } from 'react' // useMemo 추가
import { BookInfoSummary, Spacing, Spinner } from '@/components/common'
import { useSearchStore } from '@/store/searchStore'
import NoSearchResult from '@/components/search/NoSearchResult' // 추가

const DEFAULT_SIZE = 20

export default function Book() {
  const { searchValue } = useSearchStore((state) => state)
  const filterParams = { query: searchValue }

  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading, // 로딩 상태 추가
  } = useInfiniteQuery({
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
      const pageData = lastPage?.data
      if (!pageData) return undefined
      return pageData.page < pageData.totalPages ? pageData.page + 1 : undefined
    },
  })

  const { ref, inView } = useInView()

  useEffect(() => {
    if (inView && hasNextPage && !isFetchingNextPage) {
      fetchNextPage()
    }
  }, [inView, hasNextPage, isFetchingNextPage, fetchNextPage])

  // 1. 중첩된 페이지 구조를 단일 배열로 정제
  const allBooks = useMemo(() => {
    return data?.pages.flatMap((page) => page.data?.data?.bookData || []) || []
  }, [data])

  // 2. 첫 로딩 중일 때 처리
  if (isLoading) return <Spinner />

  // 3. 결과가 없을 때 처리 (로딩 완료 후 데이터가 0개인 경우)
  if (allBooks.length === 0) {
    return <NoSearchResult />
  }

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
      <div ref={ref} style={{ height: 20 }}>
        {isFetchingNextPage && <Spinner />}
      </div>
    </>
  )
}
