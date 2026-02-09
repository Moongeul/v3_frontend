'use client'

import { Button, Label, Spacing } from '@/components/common'
import { BestsellerList, BestSellerLoadMoreButton, PopularBook } from '@/components/book/index'

import { typography } from '@/styles/theme'
import { TestBannerGraphic, WhiteRightArrowIcon } from '@/assets/svgComponents'
import { Banner } from '@/components/home'
import { WeeklyRecommendBookType } from '@/types/post'

interface BookContentProps {
  weeklyRecommendBook: WeeklyRecommendBookType | undefined
}

export default function BookContent({ weeklyRecommendBook }: BookContentProps) {
  return (
    <>
      <Spacing height={7} />
      <Label labelStyle={typography.subtitleLg} labelElement={<BestSellerLoadMoreButton />}>
        지금 많이 읽는 책
      </Label>

      <Spacing height={4} />
      <BestsellerList />

      {weeklyRecommendBook ? (
        <>
          <Spacing height={36} />
          <Label labelStyle={typography.subtitleLg}>Moongeul 에서 많이 기록한 책</Label>

          <Spacing height={8} />
          <PopularBook {...weeklyRecommendBook} />
        </>
      ) : null}

      <Spacing height={8} />
      <Banner
        path={'/test?step=onboarding'}
        graphic={<TestBannerGraphic width={114} height={81} />}
        button={
          <Button size={'md'} width={139} rightIcon={<WhiteRightArrowIcon width={20} height={20} />}>
            독서 취향 테스트
          </Button>
        }
        content={'나의 독서 취향이 궁금하다면?'}
      />
    </>
  )
}
