import { Header, PageLayout, Spacing } from '@/components/common'
import { AddQuestionButton } from '@/components/question'
import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query'
import { fetchMyQuestions } from '@/lib/server/mypage'
import MyQuestionCardColumnList from '@/components/mypage/home/MyQuestionCardColumnList'

export default async function MyQuestionPage() {
  const queryClient = new QueryClient()

  // 서버에서 첫 번째 페이지(0) 미리 가져오기
  await queryClient.prefetchInfiniteQuery({
    queryKey: ['questions'],
    queryFn: ({ pageParam }) => fetchMyQuestions(pageParam, 10),
    initialPageParam: 1,
  })
  return (
    <main>
      <Header path={'/mypage'} headerType={'dynamic'} rightIcon={<AddQuestionButton />}>
        질문
      </Header>
      <Spacing height={60} />

      <PageLayout>
        {/* 서버에서 만든 상태를 클라이언트로 전달 */}
        <HydrationBoundary state={dehydrate(queryClient)}>
          <MyQuestionCardColumnList />
        </HydrationBoundary>
      </PageLayout>
    </main>
  )
}
