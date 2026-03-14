'use client'

import { Spacing } from '@/components/common'
import { ReviewContentMeta, BookQuote, ReviewContentText } from '@/components/book'
import { QuoteType } from '@/types/record'

interface ReviewContentProps {
  content: string
  createdAt: string
  rating: number
  quotes: QuoteType[]
}

export default function ReviewContent({ content, rating, createdAt, quotes }: ReviewContentProps) {
  return (
    <>
      <ReviewContentMeta rating={rating} createdAt={createdAt} />
      <Spacing height={12} />
      <ReviewContentText content={content} />
      <Spacing height={12} />

      {quotes.map((quote, index) => (
        <div key={index}>
          <BookQuote quoteContent={quote.quoteContent} page={quote.pageNumber} />
          <Spacing height={8} />
        </div>
      ))}
    </>
  )
}
