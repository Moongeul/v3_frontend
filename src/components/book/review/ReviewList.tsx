'use client'

import { ReviewItem } from '@/components/book'
import { useInfiniteQuery } from '@tanstack/react-query'
import { clientFetchAllPosts } from '@/lib/client/record'
import { useInView } from 'react-intersection-observer'
import { useEffect } from 'react'
import { Spinner } from '@/components/common'

const DEFAULT_SIZE = 20

interface ReviewListProps {
  tab: 'PUBLIC' | 'FOLLOWERS'
}

export default function ReviewList({ tab }: ReviewListProps) {
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } = useInfiniteQuery({
    queryKey: ['post'],
    queryFn: ({ pageParam }) =>
      clientFetchAllPosts({
        page: pageParam as number,
        size: DEFAULT_SIZE,
        postVisibility: tab,
      }),
    initialPageParam: 1,
    getNextPageParam: (lastPage) => {
      if (!lastPage || !lastPage.data) {
        return undefined
      }

      const { page, totalPages } = lastPage.data

      if (page < totalPages) {
        return page + 1
      }

      return undefined
    },

    staleTime: 1000 * 60 * 30,
    gcTime: 1000 * 60 * 60,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
  })

  // 무한 스크롤 트리거
  const { ref, inView } = useInView()

  useEffect(() => {
    if (inView && hasNextPage && !isFetchingNextPage) {
      fetchNextPage()
    }
  }, [inView, hasNextPage, isFetchingNextPage, fetchNextPage])

  return (
    <>
      {/* 데이터 렌더링 */}
      <div className="mt-5 flex flex-col gap-y-3">
        {data?.pages.map((page, i) =>
          page.data?.data.map((post, index) => (
            <ReviewItem
              postId={post.postId}
              memberInfo={post.memberInfo}
              created={post.created}
              key={index}
              quotes={post.quotes}
              bookInfo={post.bookInfo}
              rating={post.rating}
              content={post.content}
              readDate={post.readDate}
            />
          ))
        )}
      </div>

      {/* 스크롤 감지 영역 */}
      <div ref={ref} style={{ height: 20 }}>
        {isFetchingNextPage && <Spinner />}
      </div>
    </>
  )
}
