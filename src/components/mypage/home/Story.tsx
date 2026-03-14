'use client'

import { Button, Label, Spacing, Spinner } from '@/components/common'
import { baseColor } from '@/styles/theme'
import { StyleStoryContainer } from '@/styles/mypage/MypageHome.styles'
import StoryCard from '@/components/mypage/home/StoryCard'
import { clientFetchMyStory } from '@/lib/client/mypage'
import { useInfiniteQuery } from '@tanstack/react-query'
import { useInView } from 'react-intersection-observer'
import { useEffect } from 'react'
import { StyleStoryList } from '@/styles/home/Record.styles'

const DEFAULT_SIZE = 20

export default function Story() {
  // 1. queryKey를 tab에 따라 분리하여 캐시 충돌 방지
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } = useInfiniteQuery({
    queryKey: ['stories'],
    queryFn: ({ pageParam }) =>
      clientFetchMyStory({
        page: pageParam as number,
        size: DEFAULT_SIZE,
      }),
    initialPageParam: 1,
    getNextPageParam: (lastPage) => {
      if (!lastPage || !lastPage.data) return undefined
      const { page, totalPages } = lastPage.data
      return page < totalPages ? page + 1 : undefined
    },
  })

  console.log('스토르 데이터', data)

  const { ref, inView } = useInView()

  useEffect(() => {
    if (inView && hasNextPage && !isFetchingNextPage) {
      fetchNextPage()
    }
  }, [inView, hasNextPage, isFetchingNextPage, fetchNextPage])

  return (
    <>
      <Label>스토리 보관함</Label>
      <Spacing height={4} />
      <StyleStoryList>
        {data?.pages.map((page) =>
          page.data?.data.map((story) => (
            <StoryCard
              storyId={story.storyId}
              created={story.created}
              key={story.storyId}
              bookImage={story.storyImage}
            />
          ))
        )}

        {/* 3. 무한 스크롤 감지 영역을 리스트 마지막에 배치 */}
        <div ref={ref} style={{ minWidth: '20px', display: 'flex', alignItems: 'center' }}>
          {isFetchingNextPage && <Spinner />}
        </div>
      </StyleStoryList>
    </>
  )
}
