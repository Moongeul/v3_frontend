'use client'

import { Label, Spacing } from '@/components/common'
import { BestsellerList, PopularBook } from '@/components/book/index'

import { typography } from '@/styles/theme'
import { WeeklyRecommendBookType } from '@/types/post'
import { BestSellerType } from '@/types/book'
import TestBanner from '@/components/book/TestBanner'

interface BookContentProps {
  weeklyRecommendBook: WeeklyRecommendBookType | undefined
  bestSellers: BestSellerType[] | undefined
}

export default function BookContent({ weeklyRecommendBook, bestSellers }: BookContentProps) {
  return (
    <>
      <Spacing height={7} />
      <Label labelStyle={typography.subtitleLg}>지금 많이 읽는 책</Label>

      <Spacing height={4} />
      <BestsellerList bestSellers={bestSellers} />

      {weeklyRecommendBook ? (
        <>
          <Spacing height={36} />
          <Label labelStyle={typography.subtitleLg}>Moongeul 에서 많이 기록한 책</Label>

          <Spacing height={8} />
          <PopularBook {...weeklyRecommendBook} />
        </>
      ) : null}

      <Spacing height={8} />
      <TestBanner />
    </>
  )
}
