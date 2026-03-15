'use client'

import { Label, Spacing, Spinner } from '@/components/common'
import { typography } from '@/styles/theme'
import { useTheme } from '@emotion/react'
import ViewMoreButton from '@/components/search/ViewMoreButton'
import AllUserList from '@/components/search/all/AllUserList'
import AllBookList from '@/components/search/all/AllBookList'
import { useSearchStore } from '@/store/searchStore'
import { useInfiniteQuery } from '@tanstack/react-query'
import { clientFetchBookResults } from '@/lib/client/book'
import { useMemo, useEffect } from 'react' // useEffect 추가
import { useInView } from 'react-intersection-observer' // 추가
import NoSearchResult from '@/components/search/NoSearchResult'

const DEFAULT_SIZE = 20

export default function All() {
  const theme = useTheme()
  const { searchValue } = useSearchStore((state) => state)
  const filterParams = { query: searchValue }

  const {
    data,
    isLoading,
    isFetchingNextPage,
    fetchNextPage, // 추가
    hasNextPage, // 추가
  } = useInfiniteQuery({
    queryKey: ['all', filterParams],
    queryFn: ({ pageParam }) =>
      clientFetchBookResults({
        page: pageParam as number,
        size: DEFAULT_SIZE,
        type: 'all',
        ...filterParams,
      }),
    initialPageParam: 1,
    getNextPageParam: (lastPage) => {
      const pageData = lastPage?.data
      if (!pageData) return undefined
      return pageData.page < pageData.totalPages ? pageData.page + 1 : undefined
    },
  })

  // 1. 무한 스크롤 감지 훅
  const { ref, inView } = useInView()

  // 2. 스크롤이 하단에 닿으면 다음 페이지 호출
  useEffect(() => {
    if (inView && hasNextPage && !isFetchingNextPage) {
      fetchNextPage()
    }
  }, [inView, hasNextPage, isFetchingNextPage, fetchNextPage])

  const users = useMemo(() => {
    return data?.pages.flatMap((page) => page.data?.data?.userData || []) || []
  }, [data])

  const books = useMemo(() => {
    return data?.pages.flatMap((page) => page.data?.data?.bookData || []) || []
  }, [data])

  if (isLoading) return <Spinner />

  if (users.length === 0 && books.length === 0) {
    return <NoSearchResult />
  }

  return (
    <main>
      {users.length > 0 && (
        <>
          <Label
            labelElement={<ViewMoreButton path={'/search?tab=USER'} />}
            labelColor={theme.colors.headerText}
            labelStyle={typography.subtitleMd}
          >
            사용자
          </Label>
          <Spacing height={4} />
          <AllUserList allUsers={users} />
          <Spacing height={20} />
        </>
      )}

      {books.length > 0 && (
        <>
          <Label
            labelElement={<ViewMoreButton path={'/search?tab=BOOK'} />}
            labelColor={theme.colors.headerText}
            labelStyle={typography.subtitleMd}
          >
            도서
          </Label>
          <Spacing height={4} />
          {/* 하단 리스트의 끝에 ref를 전달하여 무한 스크롤 트리거 */}
          <AllBookList allBooks={books} isFetchingNextPage={isFetchingNextPage} scrollRef={ref} />
        </>
      )}
    </main>
  )
}
