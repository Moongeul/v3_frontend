import { BookReviews } from '@/components/book'
import { fetchBookReview } from '@/lib/server/book'
import { Spinner } from '@/components/common'

interface BookReviewProps {
  params: Promise<{ isbn: string }>
}

export default async function BookReview({ params }: BookReviewProps) {
  const { isbn } = await params
  const bookReviewResult = await fetchBookReview(isbn)
  const reviewData = bookReviewResult.data
  if (!reviewData) {
    return <Spinner />
  }

  return (
    <main>
      <BookReviews reviews={reviewData.data} total={reviewData.total} />
    </main>
  )
}
