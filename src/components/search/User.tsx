'use client'

import { useInfiniteQuery } from '@tanstack/react-query'
import { clientFetchBookResults } from '@/lib/client/book'
import { useInView } from 'react-intersection-observer'
import { useEffect, useMemo } from 'react'
import { Spacing, Spinner } from '@/components/common'
import UserItem from '@/components/search/user/UserItem'
import { useSearchStore } from '@/store/searchStore'
import NoSearchResult from '@/components/search/NoSearchResult'

const DEFAULT_SIZE = 20

export default function User() {
  const { searchValue } = useSearchStore((state) => state)
  const filterParams = { query: searchValue }

  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading, // 로딩 상태 추가
  } = useInfiniteQuery({
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

  // 1. 모든 페이지의 유저 데이터를 하나로 합침 (가독성 및 체크 용이)
  const allUsers = useMemo(() => {
    return data?.pages.flatMap((page) => page.data?.data?.userData || []) || []
  }, [data])

  // 2. 초기 로딩 중일 때는 스피너 표시
  if (isLoading) return <Spinner />

  // 3. 검색 결과가 없을 때 (로딩이 끝났는데 데이터가 0개인 경우)
  if (allUsers.length === 0) {
    return <NoSearchResult />
  }

  return (
    <>
      {allUsers.map((user) => (
        <div key={user.userId}>
          <UserItem
            userId={user.userId}
            readingTasteType={user.readingTasteType}
            nickname={user.nickname}
            profileImage={user.profileImage}
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
