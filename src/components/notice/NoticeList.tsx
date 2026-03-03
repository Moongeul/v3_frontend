'use client'

import { useInfiniteQuery } from '@tanstack/react-query'
import { useInView } from 'react-intersection-observer'
import { useEffect } from 'react'
import { clientFetchAllNotices } from '@/lib/client/notice'
import { Spinner } from '@/components/common'
import NoticeItem from '@/components/notice/NoticeItem'

const DEFAULT_SIZE = 20

export default function NoticeList() {
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } = useInfiniteQuery({
    queryKey: ['notice'],
    queryFn: ({ pageParam }) =>
      clientFetchAllNotices({
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
  })

  // 무한 스크롤 트리거
  const { ref, inView } = useInView()

  useEffect(() => {
    if (inView && hasNextPage && !isFetchingNextPage) {
      fetchNextPage()
    }
  }, [inView, hasNextPage, isFetchingNextPage, fetchNextPage])

  console.log('공지사항 데이터', data)

  return (
    <>
      {/* 데이터 렌더링 */}
      <div className="mt-5 flex flex-col gap-y-3">
        {data?.pages.map((page) =>
          page.data?.data.map((notice) => (
            <NoticeItem
              key={notice.noticeId}
              noticeId={notice.noticeId}
              title={notice.title}
              uploadDate={notice.uploadDate}
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
