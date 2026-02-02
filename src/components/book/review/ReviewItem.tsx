'use client'

import { useRouter } from 'next/navigation'
import { BookInfoSummary, BottomBorder, Spacing } from '@/components/common'
import { ProfileImageWrapper, StyleReviewContentContainer, StyleReviewItemContainer } from '@/styles/book/Review.styles'
import { ProfileIcon } from '@/assets/svgComponents'
import { ReviewHeader, ReviewContent, InteractionButton } from '@/components/book'
import { BookType } from '@/types/book'
import { QuoteType } from '@/types/write'
import Image from 'next/image'
import { ProfileInfoType } from '@/types/user'

interface ReviewItemProps {
  quotes: QuoteType[]
  bookInfo: BookType
  rating: number
  content: string
  memberInfo: ProfileInfoType
  created: string
  readDate: string
}

export default function ReviewItem({
  bookInfo,
  quotes,
  rating,
  content,
  memberInfo,
  created,
  readDate,
}: ReviewItemProps) {
  const router = useRouter()
  return (
    <div onClick={() => router.push(`/${1}`)}>
      <Spacing height={20} />
      <StyleReviewItemContainer>
        <ProfileImageWrapper>
          <Image src={memberInfo.profileImage} alt={'프로필'} width={32} height={32} />
        </ProfileImageWrapper>

        <StyleReviewContentContainer>
          <ReviewHeader memberInfo={memberInfo} created={created} />

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
          <ReviewContent createdAt={readDate} rating={rating} quotes={quotes} content={content} />

          <Spacing height={12} />
          <InteractionButton />
        </StyleReviewContentContainer>
      </StyleReviewItemContainer>
      <Spacing height={20} />
      <BottomBorder />
    </div>
  )
}
