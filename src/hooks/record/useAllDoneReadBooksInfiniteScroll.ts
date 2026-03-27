import { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import { useInfiniteQuery } from '@tanstack/react-query'
import { clientFetchAllDoneReadBooks } from '@/lib/client/record' // 서버와 동일한 함수 혹은 동일한 인터페이스의 함수

const DEFAULT_SIZE = 20

const SHELF_COLORS = [
  '#7AA0FF80',
  '#68BDDC80',
  '#FF96C080',
  '#FF927A80',
  '#EB7AFF80',
  '#A9E17980',
  '#3EDFBC80',
  '#FFC35480',
]
export const useAllDoneReadBookInfiniteScroll = () => {
  const queryResult = useInfiniteQuery({
    queryKey: ['records'],
    queryFn: ({ pageParam }) => clientFetchAllDoneReadBooks({ page: pageParam as number, size: DEFAULT_SIZE }),
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
  const booksWithColor =
    data?.pages.flatMap((page) => {
      // page.data.books가 배열인지 확인 (API 구조에 따라 contents일 수도 있음)
      const bookList = page.data.data || []

      return bookList.map((book) => {
        // 2. articleId를 색상 배열의 길이로 나눈 나머지를 인덱스로 사용
        // articleId가 고유하므로 해당 책은 언제나 같은 색상을 가짐
        const colorIndex = Math.abs(book.articleId) % SHELF_COLORS.length
        const assignedColor = SHELF_COLORS[colorIndex]

        return {
          ...book,
          borderColor: assignedColor,
          backgroundColor: assignedColor,
        }
      })
    }) ?? []

  const hasData = booksWithColor.length > 0

  useEffect(() => {
    if (inView && hasNextPage && !isFetchingNextPage) {
      fetchNextPage()
    }
  }, [inView, hasNextPage, isFetchingNextPage, fetchNextPage])

  return {
    data: data,
    books: booksWithColor,
    hasData,
    bottomRef: ref,
    isFetchingNextPage,
  }
}
