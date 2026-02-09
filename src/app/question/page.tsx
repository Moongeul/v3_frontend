// app/question/page.tsx
import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query'
import { Header, PageLayout, Spacing } from '@/components/common'
import { AddQuestionButton, QuestionCardColumnList } from '@/components/question'
import { fetchQuestions } from '@/lib/server/question'

export const dynamic = 'force-dynamic'

export default async function QuestionPage() {
  const queryClient = new QueryClient()

  // 서버에서 첫 번째 페이지(0) 미리 가져오기
  await queryClient.prefetchInfiniteQuery({
    queryKey: ['questions'],
    queryFn: ({ pageParam }) => fetchQuestions(pageParam, 10),
    initialPageParam: 1,
  })

  return (
    <main>
      <Header headerType={'dynamic'} rightIcon={<AddQuestionButton />}>
        질문
      </Header>
      <Spacing height={60} />

      <PageLayout>
        {/* 서버에서 만든 상태를 클라이언트로 전달 */}
        <HydrationBoundary state={dehydrate(queryClient)}>
          <QuestionCardColumnList />
        </HydrationBoundary>
      </PageLayout>
    </main>
  )
}
