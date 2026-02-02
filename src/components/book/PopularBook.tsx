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
  rating,
  content,
  readingTasteType,
  authorName,
}: WeeklyRecommendBookType) {
  return (
    <StylePopularBookLayout>
      <PencilSketchEffect />
      <BookInfoSummary
        publisher={'korfit'}
        pubdate={'2025'}
        isbn={'1'}
        author={authorName}
        title={'책 제목이 길어질 경우에'}
        bookImage={bookImage}
      />
      <PopularBookDescription tag={readingTasteType} rating={rating} description={content} />
    </StylePopularBookLayout>
  )
}
