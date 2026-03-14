'use client'

import { StoryCard, WriteStoryButton } from '@/components/home/index'
import { StyleStoryList, StyleStoryListWrapper } from '@/styles/home/Record.styles'
import { useInfiniteQuery } from '@tanstack/react-query'
import { useInView } from 'react-intersection-observer'
import { useEffect } from 'react'
import { clientFetchAllStory } from '@/lib/client/story'
import { Spinner } from '@/components/common'

const DEFAULT_SIZE = 20

interface StoryListProps {
  tab: 'PUBLIC' | 'FOLLOWERS'
}

export default function StoryList({ tab }: StoryListProps) {
  // 1. queryKey를 tab에 따라 분리하여 캐시 충돌 방지
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } = useInfiniteQuery({
    queryKey: ['stories', tab],
    queryFn: ({ pageParam }) =>
      clientFetchAllStory({
        page: pageParam as number,
        size: DEFAULT_SIZE,
        postVisibility: tab,
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
    <StyleStoryListWrapper>
      <WriteStoryButton />

      {/* 2. StyleStoryList 내부에서 스크롤이 발생하도록 구조 변경 */}
      <StyleStoryList>
        {data?.pages.map((page) =>
          page.data?.data.map((story) => (
            <StoryCard
              key={story.storyInfo.storyId}
              storyId={story.storyInfo.storyId}
              storyImage={story.storyInfo.storyImage}
              profileImage={story.memberInfo.profileImage}
              nickname={story.memberInfo.nickname}
            />
          ))
        )}

        {/* 3. 무한 스크롤 감지 영역을 리스트 마지막에 배치 */}
        <div ref={ref} style={{ minWidth: '20px', display: 'flex', alignItems: 'center' }}>
          {isFetchingNextPage && <Spinner />}
        </div>
      </StyleStoryList>
    </StyleStoryListWrapper>
  )
}
