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
    // 탭 변경 시 즉시 'stale' 상태로 간주하여 백그라운드 리페치 유도
    staleTime: 0,
    // 컴포넌트가 마운트될 때(탭 전환 시) 항상 새로고침
    refetchOnMount: true,
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
              likesInfo={post.likesCnt}
              myLikesStatus={post.myLikesStatus}
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
