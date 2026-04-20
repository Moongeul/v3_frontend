'use client'

import { useInfiniteQuery } from '@tanstack/react-query'
import { clientBookShelfDoneReadPosts } from '@/lib/client/record'
import { useInView } from 'react-intersection-observer'
import { useEffect } from 'react'
import { ReviewItem } from '@/components/book'
import { Spinner } from '@/components/common'

const DEFAULT_SIZE = 20

interface BookShelfListProps {
  isbn: string
  userId?: string
}

export default function BookShelfList({ isbn, userId }: BookShelfListProps) {
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } = useInfiniteQuery({
    queryKey: ['bookshelf', isbn, userId],
    queryFn: ({ pageParam }) =>
      clientBookShelfDoneReadPosts({
        page: pageParam as number,
        size: DEFAULT_SIZE,
        isbn: isbn,
        userId: userId,
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
  })

  // 무한 스크롤 트리거
  const { ref, inView } = useInView()

  useEffect(() => {
    if (inView && hasNextPage && !isFetchingNextPage) {
      fetchNextPage()
    }
  }, [inView, hasNextPage, isFetchingNextPage, fetchNextPage])

  console.log('review데이터', data)

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
