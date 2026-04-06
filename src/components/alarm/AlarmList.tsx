'use client'

import AlarmItem from '@/components/alarm/AlarmItem'
import { useInfiniteQuery } from '@tanstack/react-query'
import { useInView } from 'react-intersection-observer'
import { useEffect } from 'react'
import { clientFetchAllAlarms } from '@/lib/client/alarm'
import { Spinner } from '@/components/common'
import { useRouter } from 'next/navigation'

const DEFAULT_SIZE = 20

export default function AlarmList() {
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } = useInfiniteQuery({
    queryKey: ['alarm'],
    queryFn: ({ pageParam }) =>
      clientFetchAllAlarms({
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

  console.log('알람 데이터', data)

  const router = useRouter()

  useEffect(() => {
    // 사용자가 알림 페이지를 나갈 때 서버 컴포넌트 데이터를 최신화하도록 요청
    return () => {
      router.refresh()
    }
  }, [router])

  if (!data) return <Spinner />

  return (
    <>
      <div>{data?.pages.map((page) => page.data.data.map((alarm) => <AlarmItem key={alarm.id} {...alarm} />))}</div>
      {/* 스크롤 감지 영역 */}
      <div ref={ref}>{isFetchingNextPage && <Spinner />}</div>
    </>
  )
}
