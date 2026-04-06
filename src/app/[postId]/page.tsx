import { BookQuote, InteractionButton, ReviewContentMeta, ReviewContentText } from '@/components/book'
import { BookInfoSummary, Header, PageLayout, Spacing } from '@/components/common'
import { serverFetchPostDetail } from '@/lib/server/record'
import { StoryWriteButton } from '@/components/story'
import { cookies } from 'next/headers'
import ReviewDetailHeader from '@/components/post/ReviewDetailHeader'
import DeletePostModal from '@/components/common/modal/DeletePostModal'
import ReportModal from '@/components/common/modal/ReportModal'
import BlockModal from '@/components/common/modal/BlockModal'

export default async function RecordDetailPage({ params }: { params: Promise<{ postId: string }> }) {
  const { postId } = await params

  const result = await serverFetchPostDetail(Number(postId))
  const postData = result.data

  // 2. 쿠키 인스턴스 가져오기 (비동기 처리 필요 - Next.js 15 기준)
  const cookieStore = await cookies()
  const memberId = cookieStore.get('memberId')?.value

  return (
    <main>
      <Header
        headerType={'dynamic'}
        rightIcon={Number(memberId) === postData.memberInfo.memberId ? <StoryWriteButton recordId={postId} /> : null}
      />
      <Spacing height={60} />
      <PageLayout>
        <DeletePostModal />
        <ReportModal />
        <BlockModal />
        <Spacing height={12} />

        <ReviewDetailHeader
          isbn={postData.bookInfo.isbn}
          postId={postId}
          created={postData.created}
          memberInfo={postData.memberInfo}
        />
        <Spacing height={12} />

        <BookInfoSummary
          rating={postData.bookInfo.ratingAverage}
          styleType={'lightYellow'}
          publisher={postData.bookInfo.publisher}
          pubdate={postData.bookInfo.pubdate}
          isbn={postData.bookInfo.isbn}
          author={postData.bookInfo.author}
          title={postData.bookInfo.title}
          bookImage={postData.bookInfo.bookImage}
        />

        <Spacing height={12} />
        <ReviewContentMeta rating={postData.rating} createdAt={postData.created} />

        <Spacing height={12} />
        <ReviewContentText content={postData.content} />

        <Spacing height={12} />
        {postData.quotes.map((quote, index) => {
          const isLast = postData.quotes.length - 1 === index
          return (
            <>
              <BookQuote quoteContent={quote.quoteContent} page={quote.pageNumber} />
              {isLast ? null : <Spacing height={8} />}
            </>
          )
        })}

        <Spacing height={40} />
        {memberId ? (
          <InteractionButton
            content={postData.content}
            postId={postData.postId}
            likesCnt={postData.likesCnt}
            myLikesStatus={postData.myLikesStatus}
          />
        ) : null}
      </PageLayout>
    </main>
  )
}
