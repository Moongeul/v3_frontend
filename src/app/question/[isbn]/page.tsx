import { BookInfoSummary, Header, PageLayout, Spacing } from '@/components/common'
import { ReviewContentText } from '@/components/book'
import { AvatarGroup, CommentSummary, Comment } from '@/components/question'
import { fetchQuestionDetail } from '@/lib/server/question'
import { OptionIcon } from '@/assets/svgComponents'

interface QuestionDetailPageProps {
  params: Promise<{ isbn: string }>
}

export default async function QuestionDetailPage({ params }: QuestionDetailPageProps) {
  const { isbn } = await params
  const result = await fetchQuestionDetail(isbn)
  const question = result.data

  return (
    <main>
      <Header headerType={'dynamic'} rightIcon={question?.myArticle ? <OptionIcon width={24} height={24} /> : null}>
        질문
      </Header>

      <Spacing height={60} />
      <PageLayout>
        <div>
          <AvatarGroup
            participantCount={question?.participantCount}
            participantProfileImages={question?.participantProfileImages}
          />
          <Spacing height={12} />

          <BookInfoSummary
            rating={question?.bookInfo.ratingAverage}
            styleType={'lightYellow'}
            publisher={question?.bookInfo.publisher}
            pubdate={question?.bookInfo.pubdate}
            isbn={question?.bookInfo.isbn}
            author={question?.bookInfo.author}
            title={question?.bookInfo.title}
            bookImage={question?.bookInfo.bookImage}
          />
          <Spacing height={12} />
          <ReviewContentText content={question?.content} />

          <Spacing height={12} />
          <CommentSummary count={question?.commentCnt} />

          {/*<Comment />*/}
          {/*<Comment />*/}
          {/*<Comment />*/}
        </div>
      </PageLayout>
    </main>
  )
}
