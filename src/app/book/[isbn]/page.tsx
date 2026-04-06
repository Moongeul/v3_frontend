import { Label, Spacing, BottomBorder, BookInfoSummary, Spinner } from '@/components/common'
import { BookIntroduction, BookReviews, ViewAllReviewsButton } from '@/components/book'
import { typography } from '@/styles/theme'
import { fetchBookDetailInfo, fetchBookReview } from '@/lib/server/book'
import WishBookButton from '@/components/common/button/WishBookButton'
import Header from '../../../components/common/Header'
import WriteButton from '../../../components/book/WriteButton'
import PageLayout from '../../../components/common/PageLayout'
import ReportModal from '@/components/common/modal/ReportModal'
import BlockModal from '@/components/common/modal/BlockModal'

interface BookDetailPageProps {
  params: Promise<{ isbn: string }>
}
export default async function BookDetailPage({ params }: BookDetailPageProps) {
  const { isbn } = await params
  const bookDetailResult = await fetchBookDetailInfo(isbn)
  const bookReviewResult = await fetchBookReview(isbn)

  const book = bookDetailResult.data
  const reviewData = bookReviewResult.data

  if (!book || !reviewData) {
    return <Spinner />
  }

  return (
    <main>
      <Header headerType={'dynamic'} rightIcon={<WriteButton isbn={isbn} />} />
      <PageLayout>
        <div>
          <ReportModal />
          <BlockModal />
          <Spacing height={68} />
          <BookInfoSummary
            publisher={book.publisher}
            pubdate={book.pubdate}
            isbn={book.isbn}
            author={book.author}
            title={book.title}
            bookImage={book.bookImage}
            rating={book.ratingAverage}
            rightElement={<WishBookButton isWishRead={book.isWishRead} isbn={book.isbn} />}
          />
          <Spacing height={20} />
          <BookIntroduction description={book.description} />

          <Spacing height={20} />
          <BottomBorder />
          <Spacing height={20} />

          <Label labelStyle={typography.subtitleMd} labelElement={<ViewAllReviewsButton isbn={isbn} />}>
            기록
          </Label>
          <BookReviews total={reviewData.total} reviews={reviewData.data} />
        </div>
      </PageLayout>
    </main>
  )
}
