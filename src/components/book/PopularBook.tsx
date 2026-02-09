'use client'

import { StylePopularBookLayout } from '@/styles/common/Book.styles'
import { PopularBookDescription } from '@/components/book/index'
import { BookInfoSummary } from '@/components/common'
import { PencilSketchEffect } from '@/styles/common/Common.styles'
import { WeeklyRecommendBookType } from '@/types/post'

export default function PopularBook({
  postId,
  bookImage,
  profileImage,
  bookRating,
  rating,
  content,
  readingTasteType,
  bookTitle,
  isbn,
  pubdate,
  publisher,
  author,
}: WeeklyRecommendBookType) {
  return (
    <StylePopularBookLayout>
      <PencilSketchEffect />
      <BookInfoSummary
        publisher={publisher}
        pubdate={pubdate}
        isbn={isbn}
        author={author}
        title={bookTitle}
        bookImage={bookImage}
        rating={bookRating}
      />
      <PopularBookDescription tag={readingTasteType} rating={rating} description={content} />
    </StylePopularBookLayout>
  )
}
