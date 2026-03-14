'use client'

import { useRouter } from 'next/navigation'
import { BookInfoSummary, BottomBorder, Spacing } from '@/components/common'
import { ProfileImageWrapper, StyleReviewContentContainer, StyleReviewItemContainer } from '@/styles/book/Review.styles'
import { ReviewHeader, ReviewContent, InteractionButton } from '@/components/book'
import { BookType } from '@/types/book'
import { QuoteType } from '@/types/write'
import Image from 'next/image'
import { ProfileInfoType } from '@/types/user'
import { LikesCntType, MyLikesStatusType } from '@/types/record'
import InteractionButtons from '@/components/book/review/InteractionButtons'

interface ReviewItemProps {
  quotes: QuoteType[]
  bookInfo?: BookType
  rating: number
  content: string
  memberInfo: ProfileInfoType
  created: string
  readDate: string
  postId: number
  likesInfo: LikesCntType
  myLikesStatus: MyLikesStatusType
}

export default function ReviewItem({
  bookInfo,
  postId,
  quotes,
  rating,
  content,
  memberInfo,
  created,
  readDate,
  likesInfo,
  myLikesStatus,
}: ReviewItemProps) {
  const router = useRouter()
  return (
    <div
      onClick={(e) => {
        router.push(`/${postId}`)
      }}
    >
      <Spacing height={20} />
      <StyleReviewItemContainer>
        <ProfileImageWrapper>
          <Image
            onClick={() => {
              router.push(`/profile/${memberInfo.memberId}`)
            }}
            src={memberInfo.profileImage}
            alt={'프로필'}
            width={32}
            height={32}
          />
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
          <InteractionButtons postId={postId} likesCnt={likesInfo} myLikesStatus={myLikesStatus} />
        </StyleReviewContentContainer>
      </StyleReviewItemContainer>
      <Spacing height={20} />
      <BottomBorder />
    </div>
  )
}
