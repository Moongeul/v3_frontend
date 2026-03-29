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
      // page.data.data가 실제 배열인지 확인
      const bookList = page.data.data || []

      return bookList.map((book) => {
        // ✅ articleId 대신 postId를 사용하세요!
        // 만약 postId도 없을 경우를 대비해 기본값 0을 처리해주는 것이 안전합니다.
        const id = book.postId || 0
        const colorIndex = Math.abs(id) % SHELF_COLORS.length
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
