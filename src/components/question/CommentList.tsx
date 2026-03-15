'use client'

import { useInView } from 'react-intersection-observer'
import { useInfiniteQuery } from '@tanstack/react-query'
import { clientFetchAnswers } from '@/lib/client/question'
import { useEffect } from 'react'
import { Comment } from '@/components/question/index'

interface CommentListProps {
  questionId: number
}

export default function CommentList({ questionId }: CommentListProps) {
  const { ref, inView } = useInView()

  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } = useInfiniteQuery({
    queryKey: ['answers'],
    queryFn: ({ pageParam }) => clientFetchAnswers({ page: pageParam, size: 20, questionId: questionId }),
    initialPageParam: 1,
    getNextPageParam: (lastPage) => {
      // 서버 응답(Paging 구조)에 따라 다음 페이지 번호 계산
      // 예: 현재 페이지가 마지막이 아니면 page + 1 반환
      return lastPage.data.isLast ? undefined : lastPage.data.page + 1
    },
  })

  // 스크롤이 하단에 닿으면 다음 페이지 호출
  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage()
    }
  }, [inView, hasNextPage, fetchNextPage])

  // 2차원 배열로 오는 data.pages를 평탄화하여 리스트에 전달
  const allAnswers = data?.pages.flatMap((page) => page.data.data) ?? []

  return (
    <div>
      {allAnswers.map((answer) => (
        <Comment {...answer} key={answer.answerId} />
      ))}
    </div>
  )
}
