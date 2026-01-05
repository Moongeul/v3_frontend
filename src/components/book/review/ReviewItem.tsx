'use client'

import { useRouter } from 'next/navigation'
import { BookInfoSummary, BottomBorder, Spacing } from '@/components/common'
import { StyleReviewContentContainer, StyleReviewItemContainer } from '@/styles/book/Review.styles'
import { ProfileIcon } from '@/assets/svgComponents'
import { ReviewHeader, ReviewContent, InteractionButton } from '@/components/book'
import { BookType } from '@/types/book'
import { QuoteType } from '@/types/write'

interface ReviewItemProps {
  quotes: QuoteType[]
  bookInfo: BookType
  rating: number
  content: string
}

export default function ReviewItem({ bookInfo, quotes, rating, content }: ReviewItemProps) {
  const router = useRouter()
  return (
    <div onClick={() => router.push('/1')}>
      <Spacing height={20} />
      <StyleReviewItemContainer>
        <ProfileIcon width={32} height={32} />
        <StyleReviewContentContainer>
          <ReviewHeader />

          {bookInfo && (
            <>
              <Spacing height={8} />
              <BookInfoSummary
                rating={bookInfo.ratingAverage}
                styleType={'lightYellow'}
                publisher={bookInfo.publisher}
                pubdate={bookInfo.pubdate}
                isbn={bookInfo.isbn}
                author={bookInfo.author}
                title={bookInfo.title}
                bookImage={bookInfo.bookImage}
              />
            </>
          )}

          <Spacing height={8} />
          <ReviewContent createdAt={'2025.03.04'} rating={rating} quotes={quotes} content={content} />

          <Spacing height={12} />
          <InteractionButton />
        </StyleReviewContentContainer>
      </StyleReviewItemContainer>
      <Spacing height={20} />
      <BottomBorder />
    </div>
  )
}
