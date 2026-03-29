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

  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, isLoading } = useInfiniteQuery({
    queryKey: ['questions'],
    queryFn: ({ pageParam = 1 }) => clientFetchQuestions({ page: pageParam, size: 20 }),
    initialPageParam: 1,
    getNextPageParam: (lastPage) => {
      // API 응답 구조에 맞게 수정 (lastPage?.data 존재 여부 확인)
      return lastPage?.data?.isLast ? undefined : (lastPage?.data?.page ?? 0) + 1
    },
  })

  useEffect(() => {
    if (inView && hasNextPage && !isFetchingNextPage) {
      fetchNextPage()
    }
  }, [inView, hasNextPage, fetchNextPage, isFetchingNextPage])

  // 데이터 평탄화 시 안전하게 접근
  const allQuestions = data?.pages.flatMap((page) => page?.data?.data ?? []) ?? []

  // 로딩 중이면서 데이터가 아직 없을 때 스피너 표시
  if (isLoading && allQuestions.length === 0) return <Spinner size={'lg'} />

  return (
    <StyleRecordListColumnWrapper>
      {allQuestions.map((question, index) => {
        // 데이터가 유효하지 않거나 ID가 없는 경우를 대비
        if (!question || !question.questionId) return null

        return (
          <QuestionCard
            key={`${question.questionId}-${index}`} // ID 중복 방지를 위해 index 조합 (권장되진 않으나 에러 회피용)
            {...question}
          />
        )
      })}

      {/* 스크롤 감지 포인트 */}
      <div ref={ref} style={{ height: '10px' }} />

      {isFetchingNextPage && <Spinner size={'sm'} />}
      <Spacing height={30} />
    </StyleRecordListColumnWrapper>
  )
}
