import { BookInfoSummary, PageLayout, Spacing, Spinner } from '@/components/common'
import { ReviewContentText } from '@/components/book'
import { AvatarGroup, CommentSummary } from '@/components/question'
import { fetchAnswers, fetchQuestionDetail } from '@/lib/server/question'
import CommentInput from '@/components/question/CommentInput'
import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query'
import CommentList from '@/components/question/CommentList'
import DeleteQuestionModal from '@/components/common/modal/DeleteQuestionModal'
import QuestionDetailHeader from '@/components/question/QuestionDetailHeader'

export default async function QuestionDetailPage({ params }: { params: Promise<{ questionId: string }> }) {
  const { questionId } = await params
  console.log('questionId', questionId)
  const result = await fetchQuestionDetail(questionId)
  const question = result.data

  const queryClient = new QueryClient()

  if (!question) {
    return <Spinner />
  }

  // 서버에서 첫 번째 페이지(0) 미리 가져오기
  await queryClient.prefetchInfiniteQuery({
    queryKey: ['questions'],
    queryFn: ({ pageParam }) => fetchAnswers(pageParam, 10, question?.questionId),
    initialPageParam: 1,
  })

  return (
    <main>
      <DeleteQuestionModal questionId={questionId} />
      <QuestionDetailHeader question={question} />

      <Spacing height={60} />
      <PageLayout>
        <div>
          <AvatarGroup
            participantCount={question?.participantCount}
            participantProfileImages={question?.participantProfileImages}
          />
          <Spacing height={12} />

          <BookInfoSummary
            rating={question.bookInfo.ratingAverage}
            styleType={'lightYellow'}
            publisher={question.bookInfo.publisher}
            pubdate={question.bookInfo.pubdate}
            isbn={question.bookInfo.isbn}
            author={question.bookInfo.author}
            title={question.bookInfo.title}
            bookImage={question.bookInfo.bookImage}
          />
          <Spacing height={12} />
          <ReviewContentText content={question.content} />

          <Spacing height={12} />
          <CommentSummary count={question.commentCnt} />

          <HydrationBoundary state={dehydrate(queryClient)}>
            <CommentList questionId={question.questionId} />
          </HydrationBoundary>
          <Spacing height={100} />
          <CommentInput questionId={question.questionId} />
        </div>
      </PageLayout>
    </main>
  )
}
