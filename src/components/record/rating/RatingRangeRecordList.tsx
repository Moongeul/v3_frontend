'use client'

import { ReviewItem } from '@/components/book'
import { useInfiniteQuery } from '@tanstack/react-query'
import { useInView } from 'react-intersection-observer'
import { useEffect, useState } from 'react'
import { Spinner } from '@/components/common'
import { CategoryRecordSortByType } from '@/types/mypage'
import SortByDropDown from '@/components/mypage/record/SortByDropDown'
import { clientFetchAllRatingRangeRecords } from '@/lib/client/record'

const DEFAULT_SIZE = 20

interface RatingRangeRecordListProps {
  range: string
}

export default function RatingRangeRecordList({ range }: RatingRangeRecordListProps) {
  const [sortBy, setSortBy] = useState<CategoryRecordSortByType>('LATEST')
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } = useInfiniteQuery({
    queryKey: ['ratingRecords'],
    queryFn: ({ pageParam }) =>
      clientFetchAllRatingRangeRecords({
        sortBy: sortBy,
        range: range,
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

  console.log('별점 기록 데이터', data)

  return (
    <div>
      <div>
        <></>
        <SortByDropDown setSortBy={setSortBy} />
      </div>

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
