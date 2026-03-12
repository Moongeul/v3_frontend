'use client'

import { useInfiniteQuery } from '@tanstack/react-query'
import { clientFetchBookResults } from '@/lib/client/book'
import { useInView } from 'react-intersection-observer'
import { useEffect } from 'react'
import { Spacing, Spinner } from '@/components/common'
import UserItem from '@/components/search/user/UserItem'
import { useSearchStore } from '@/store/searchStore'

const DEFAULT_SIZE = 20

export default function User() {
  const { searchValue } = useSearchStore((state) => state)
  const filterParams = { query: searchValue }

  const queryResult = useInfiniteQuery({
    queryKey: ['users', filterParams],
    queryFn: ({ pageParam }) =>
      clientFetchBookResults({
        page: pageParam as number,
        size: DEFAULT_SIZE,
        type: 'user',
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
        page.data?.data?.userData.map((user) => (
          <div key={user.userId}>
            <UserItem
              userId={user.userId}
              readingTasteType={user.readingTasteType}
              nickname={user.nickname}
              profileImage={user.profileImage}
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
