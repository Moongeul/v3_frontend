import { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import { useInfiniteQuery } from '@tanstack/react-query'
import { clientFetchAllWishReadBooks } from '@/lib/client/record' // 서버와 동일한 함수 혹은 동일한 인터페이스의 함수

const DEFAULT_SIZE = 20

export const useAllWishReadBookInfiniteScroll = () => {
  const queryResult = useInfiniteQuery({
    queryKey: ['wish'],
    queryFn: ({ pageParam }) => clientFetchAllWishReadBooks({ page: pageParam as number, size: DEFAULT_SIZE }),
    initialPageParam: 1,
    getNextPageParam: (lastPage) => {
      if (!lastPage || !lastPage.data) return undefined
      const { page, totalPages } = lastPage.data
      return page < totalPages ? page + 1 : undefined
    },
    staleTime: 1000 * 60,
  })

  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } = queryResult
  const { ref, inView } = useInView()

  // 1. 모든 페이지 데이터를 합치고 가공
  const books =
    data?.pages.flatMap((page) => {
      // page.data.books가 배열인지 확인 (API 구조에 따라 contents일 수도 있음)
      const bookList = page.data.data || []

      return bookList
    }) ?? []

  const hasData = books.length > 0

  useEffect(() => {
    if (inView && hasNextPage && !isFetchingNextPage) {
      fetchNextPage()
    }
  }, [inView, hasNextPage, isFetchingNextPage, fetchNextPage])

  return {
    books: books,
    hasData,
    bottomRef: ref,
    isFetchingNextPage,
  }
}
