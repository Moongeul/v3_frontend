'use client'

import { ReviewItem } from '@/components/book'
import { useInfiniteQuery } from '@tanstack/react-query'
import { clientFetchAllPosts } from '@/lib/client/record'
import { useInView } from 'react-intersection-observer'
import { useEffect, useState } from 'react'
import { clientFetchAllCategoryRecords } from '@/lib/client/mypage'
import { Spinner } from '@/components/common'
import { CategoryRecordSortByType } from '@/types/mypage'
import SortByDropDown from '@/components/mypage/record/SortByDropDown'

const DEFAULT_SIZE = 20

interface MyPageCategoryRecordListProps {
  categoryId: string
}

export default function MyPageCategoryRecordList({ categoryId }: MyPageCategoryRecordListProps) {
  const [sortBy, setSortBy] = useState<CategoryRecordSortByType>('LATEST')
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } = useInfiniteQuery({
    queryKey: ['categoryRecords'],
    queryFn: ({ pageParam }) =>
      clientFetchAllCategoryRecords({
        sortBy: sortBy,
        categoryId: categoryId,
        page: pageParam as number,
        size: DEFAULT_SIZE,
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

  console.log('review데이터', data)

  return (
    <div>
      <SortByDropDown setSortBy={setSortBy} />
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
    </div>
  )
}
