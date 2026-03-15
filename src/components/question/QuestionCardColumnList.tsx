'use client'

import { QuestionCard } from '@/components/question/index'
import { Spacing, Spinner } from '@/components/common'
import { StyleRecordListColumnWrapper } from '@/styles/question/Question.styles'
import { useInView } from 'react-intersection-observer'
import { useInfiniteQuery } from '@tanstack/react-query'
import { useEffect } from 'react'
import { clientFetchQuestions } from '@/lib/client/question'

export default function QuestionCardColumnList() {
  const { ref, inView } = useInView()

  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } = useInfiniteQuery({
    queryKey: ['questions'],
    queryFn: ({ pageParam }) => clientFetchQuestions({ page: pageParam, size: 20 }),
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
  const allQuestions = data?.pages.flatMap((page) => page.data.data) ?? []

  console.log('allQuestions', allQuestions)

  if (!allQuestions) return <Spinner size={'lg'} />

  return (
    <StyleRecordListColumnWrapper>
      {allQuestions.map((question) => (
        <QuestionCard key={question.questionId} {...question} />
      ))}
      <Spacing height={30} />
    </StyleRecordListColumnWrapper>
  )
}
