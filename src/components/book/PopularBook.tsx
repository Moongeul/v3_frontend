'use client'

import { StylePopularBookLayout } from '@/styles/common/Book.styles'
import { PopularBookDescription } from '@/components/book/index'
import { BookInfoSummary } from '@/components/common'
import { PencilSketchEffect } from '@/styles/common/Common.styles'
import { TagEnumType } from '@/types/user'

interface PopularBookProps {
  postId: number
  bookImage: string
  bookTitle: string
  isbn: string
  author: string
  publisher: string
  pubdate: string
  bookRating: number
  rating: number
  content: string
  readingTasteType?: TagEnumType
}

export default function PopularBook({
  postId,
  bookImage,
  bookRating,
  rating,
  content,
  readingTasteType,
  bookTitle,
  isbn,
  pubdate,
  publisher,
  author,
}: PopularBookProps) {
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
