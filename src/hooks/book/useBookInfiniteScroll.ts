import { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import { useInfiniteQuery } from '@tanstack/react-query'
import { clientFetchBookResults } from '@/lib/client/book'

const DEFAULT_SIZE = 20

export const useBookInfiniteScroll = (searchValue: string) => {
  const filterParams = { query: searchValue }

  const queryResult = useInfiniteQuery({
    queryKey: ['books', filterParams],
    queryFn: ({ pageParam }) =>
      clientFetchBookResults({
        page: pageParam as number,
        size: DEFAULT_SIZE,
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

  const hasData = !!queryResult.data?.pages[0]?.data?.books.length

  useEffect(() => {
    if (inView && hasNextPage && !isFetchingNextPage) {
      fetchNextPage()
    }
  }, [inView, hasNextPage, isFetchingNextPage, fetchNextPage])

  return {
    books: data,
    hasData: hasData,
    bottomRef: ref,
    isFetchingNextPage: isFetchingNextPage,
  }
}
