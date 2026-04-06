'use client'

import { Label, Spacing } from '@/components/common'
import { BestsellerList, BestSellerLoadMoreButton, PopularBook } from '@/components/book/index'

import { typography } from '@/styles/theme'
import { WeeklyRecommendBookType } from '@/types/post'
import { BestSellerType, MostRecordedBookType } from '@/types/book'
import TestBanner from '@/components/book/TestBanner'
import Cookies from 'js-cookie'
import NoWeeklyRecommendBookResult from '@/components/book/NoWeeklyRecommendBookResult'
import BookHomeBestsellerList from '@/components/book/BookHomeBestsellerList'

interface BookContentProps {
  weeklyRecommendBook: WeeklyRecommendBookType | undefined
  bestSellers: BestSellerType[] | undefined
  mostRecordedBook: MostRecordedBookType | undefined
}

export default function BookContent({ weeklyRecommendBook, bestSellers, mostRecordedBook }: BookContentProps) {
  // 쿠키 값은 문자열로 반환됩니다 ('true' or 'false')
  const isReadingTaste = Cookies.get('isReadingTaste')

  console.log('isReadingTaste', isReadingTaste)
  console.log('weeklyRecommendBook', weeklyRecommendBook)

  return (
    <>
      <Spacing height={7} />
      <Label labelStyle={typography.subtitleLg} labelElement={<BestSellerLoadMoreButton />}>
        지금 많이 읽는 책
      </Label>
      <Spacing height={4} />
      <BookHomeBestsellerList bestSellers={bestSellers} />
      {/* 1. 취향이 닮은 사람들의 인기책:
          isReadingTaste가 'false' 문자열이고 데이터가 있을 때만 렌더링 */}
      {isReadingTaste === 'false' && mostRecordedBook && (
        <>
          <Spacing height={36} />
          <Label labelStyle={typography.subtitleLg}>취향이 닮은 사람들의 인기책</Label>
          <Spacing height={8} />
          <PopularBook
            content={mostRecordedBook.content}
            bookImage={mostRecordedBook.bookImage}
            rating={mostRecordedBook.rating}
            isbn={mostRecordedBook.isbn}
            bookRating={mostRecordedBook.bookRating}
            bookTitle={mostRecordedBook.bookTitle}
            pubdate={mostRecordedBook.pubdate}
            author={mostRecordedBook.author}
            postId={mostRecordedBook.postId}
            publisher={mostRecordedBook.publisher}
          />
        </>
      )}
      {/* 2. Moongeul 에서 많이 기록한 책:
          데이터가 있을 때 항상 렌더링 (isReadingTaste 값과 무관하게 노출됨) */}
      <Spacing height={36} />
      <Label labelStyle={typography.subtitleLg}>Moongeul 에서 많이 기록한 책</Label>
      {weeklyRecommendBook ? (
        <>
          <Spacing height={8} />
          <PopularBook {...weeklyRecommendBook} />
        </>
      ) : (
        <NoWeeklyRecommendBookResult />
      )}
      <Spacing height={8} />
      <TestBanner />
    </>
  )
}
