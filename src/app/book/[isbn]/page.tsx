import { Label, Spacing, BottomBorder, BookInfoSummary, Spinner } from '@/components/common'
import { BookIntroduction, BookReviews, ViewAllReviewsButton } from '@/components/book'
import { typography } from '@/styles/theme'
import { fetchBookDetailInfo } from '@/lib/server/book'
import WishBookButton from '@/components/common/button/WishBookButton'

interface BookDetailPageProps {
  params: Promise<{ isbn: string }>
}
export default async function BookDetailPage({ params }: BookDetailPageProps) {
  const { isbn } = await params
  const result = await fetchBookDetailInfo(isbn)
  const book = result.data

  if (!book) {
    return <Spinner />
  }

  return (
    <main>
      <Spacing height={68} />
      <BookInfoSummary
        publisher={book.publisher}
        pubdate={book.pubdate}
        isbn={book.isbn}
        author={book.author}
        title={book.title}
        bookImage={book.bookImage}
        rating={book.ratingAverage}
        rightElement={<WishBookButton isbn={book.isbn} />}
      />
      <Spacing height={20} />
      <BookIntroduction description={book.description} />

      <Spacing height={20} />
      <BottomBorder />
      <Spacing height={20} />

      <Label labelStyle={typography.subtitleMd} labelElement={<ViewAllReviewsButton />}>
        기록
      </Label>
      <BookReviews />
    </main>
  )
}
