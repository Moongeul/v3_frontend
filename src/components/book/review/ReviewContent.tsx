'use client'
import BookQuote from '@/components/book/review/BookQuote'
import { Spacing, StarRating } from '@/components/common'
import { StyleReviewContent, StyleReviewContentMeta, StyleReviewContentMetaDate } from '@/styles/book/Review.styles'

interface ReviewContentProps {
  content: string
}

export default function ReviewContent({ content }: ReviewContentProps) {
  return (
    <>
      <StyleReviewContentMeta>
        <StarRating size={'sm'} type={'short'} rating={4.9} />
        <StyleReviewContentMetaDate>
          <p>|</p>
          <p>2025.12.29</p>
        </StyleReviewContentMetaDate>
      </StyleReviewContentMeta>
      <Spacing height={12} />

      <StyleReviewContent>{content}</StyleReviewContent>
      <Spacing height={12} />

      <BookQuote quoteContent={'인상깊은구절이란 인상깊은구절이 아닐까 하는 생각이다.'} page={'01'} />
      <Spacing height={8} />

      <BookQuote quoteContent={'인상깊은구절이란 인상깊은구절이 아닐까 하는 생각이다.'} page={'01'} />
    </>
  )
}
