'use client'

import { useRouter } from 'next/navigation'
import { BookInfoSummary, BottomBorder, Spacing } from '@/components/common'
import { ProfileImageWrapper, StyleReviewContentContainer, StyleReviewItemContainer } from '@/styles/book/Review.styles'
import { ReviewHeader, ReviewContent } from '@/components/book'
import { BookType } from '@/types/book'
import { QuoteType } from '@/types/write'
import Image from 'next/image'
import { ProfileInfoType } from '@/types/user'
import { LikesCntType, MyLikesStatusType } from '@/types/record'
import InteractionButtons from '@/components/book/review/InteractionButtons'
import { useState } from 'react'
import Cookies from 'js-cookie'
import PostOptionMenu from '@/components/common/option/PostOptionMenu'
import UserOptionMenu from '@/components/common/option/UserOptionMenu'

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
  const loginMemberId = Cookies.get('memberId')
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleMenuClick = (e: React.MouseEvent) => {
    e.stopPropagation() // 카드 클릭 이벤트(상세 이동)가 발생하지 않도록 방지
    setIsMenuOpen(!isMenuOpen)
  }

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
          <ReviewHeader
            menu={
              String(memberInfo.memberId) === loginMemberId ? (
                <PostOptionMenu postId={postId} isbn={bookInfo?.isbn} handleMenuClick={handleMenuClick} />
              ) : (
                <UserOptionMenu handleMenuClick={handleMenuClick} />
              )
            }
            handleMenuClick={handleMenuClick}
            isMenuOpen={isMenuOpen}
            memberInfo={memberInfo}
            created={created}
          />
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

          {loginMemberId ? (
            <>
              <Spacing height={12} />
              <InteractionButtons
                content={content}
                postId={postId}
                likesCnt={likesInfo}
                myLikesStatus={myLikesStatus}
              />
            </>
          ) : null}
        </StyleReviewContentContainer>
      </StyleReviewItemContainer>
      <Spacing height={20} />
      <BottomBorder />
    </div>
  )
}
