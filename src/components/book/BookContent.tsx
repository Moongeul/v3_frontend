'use client'

import { Label, Spacing } from '@/components/common'
import { BestsellerList, PopularBook } from '@/components/book/index'

import { typography } from '@/styles/theme'
import { WeeklyRecommendBookType } from '@/types/post'
import { BestSellerType, MostRecordedBookType } from '@/types/book'
import TestBanner from '@/components/book/TestBanner'
import Cookies from 'js-cookie'

interface BookContentProps {
  weeklyRecommendBook: WeeklyRecommendBookType | undefined
  bestSellers: BestSellerType[] | undefined
  mostRecordedBook: MostRecordedBookType | undefined
}

export default function BookContent({ weeklyRecommendBook, bestSellers, mostRecordedBook }: BookContentProps) {
  const isReadingTaste = Cookies.get('isReadingTaste')

  // 디버깅용 로그
  console.log('isReadingTaste', isReadingTaste)
  console.log('data', { weeklyRecommendBook, bestSellers, mostRecordedBook })

  return (
    <>
      <Spacing height={7} />
      <Label labelStyle={typography.subtitleLg}>지금 많이 읽는 책</Label>

      <Spacing height={4} />
      <BestsellerList bestSellers={bestSellers} />

      {/* 1. 취향이 닮은 사람들의 인기책 (mostRecordedBook이 있을 때) */}
      {mostRecordedBook && (
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

      {/* 2. Moongeul 에서 많이 기록한 책 (weeklyRecommendBook이 있을 때) */}
      {weeklyRecommendBook && (
        <>
          <Spacing height={36} />
          <Label labelStyle={typography.subtitleLg}>Moongeul 에서 많이 기록한 책</Label>
          <Spacing height={8} />
          <PopularBook {...weeklyRecommendBook} />
        </>
      )}

      <Spacing height={8} />
      <TestBanner />
    </>
  )
}
