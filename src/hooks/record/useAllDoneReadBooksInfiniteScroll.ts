import { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import { useInfiniteQuery } from '@tanstack/react-query'
import { clientFetchAllDoneReadBooks } from '@/lib/client/record' // 서버와 동일한 함수 혹은 동일한 인터페이스의 함수

const DEFAULT_SIZE = 20

export const useAllDoneReadBookInfiniteScroll = () => {
  const queryResult = useInfiniteQuery({
    queryKey: ['records'], // 서버의 prefetchInfiniteQuery 키와 일치해야 함
    queryFn: ({ pageParam }) => clientFetchAllDoneReadBooks({ page: pageParam as number, size: DEFAULT_SIZE }),
    initialPageParam: 0,
    getNextPageParam: (lastPage) => {
      // 서버 컴포넌트의 getNextPageParam 로직과 일치시킴
      if (!lastPage || !lastPage.data) return undefined
      const { page, totalPages } = lastPage.data
      return page < totalPages ? page + 1 : undefined
    },
    // 중요: 하이드레이션된 데이터를 활용하므로 staleTime을 설정하면 바로 다시 fetching하는 것을 방지합니다.
    staleTime: 1000 * 60,
  })

  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } = queryResult
  const { ref, inView } = useInView()

  // 데이터 존재 여부 체크 (구조에 따라 수정)
  const hasData = !!data?.pages[0]?.data?.books?.length

  useEffect(() => {
    if (inView && hasNextPage && !isFetchingNextPage) {
      fetchNextPage()
    }
  }, [inView, hasNextPage, isFetchingNextPage, fetchNextPage])

  return {
    books: data?.pages.flatMap((page) => page.data.books) ?? [], // 사용하기 편하게 평탄화
    hasData,
    bottomRef: ref,
    isFetchingNextPage,
  }
}
