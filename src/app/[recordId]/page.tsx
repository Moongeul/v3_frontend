import { BookQuote, InteractionButton, ReviewContentMeta, ReviewContentText, ReviewHeader } from '@/components/book'
import { BookInfoSummary, Spacing } from '@/components/common'
import { serverFetchPostDetail } from '@/lib/server/record'

export default async function RecordDetailPage({ params }: { params: Promise<{ recordId: number }> }) {
  const { recordId } = await params

  const result = await serverFetchPostDetail(recordId)
  const postData = result.data

  return (
    <main>
      <Spacing height={12} />

      <ReviewHeader created={postData.created} memberInfo={postData.memberInfo} isProfile={true} />
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
      <InteractionButton likesInfo={postData.likesInfo} />
    </main>
  )
}
