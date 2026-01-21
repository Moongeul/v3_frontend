'use client'

import { Label, Spacing } from '@/components/common'
import { BestsellerList, BestSellerLoadMoreButton, PopularBook } from '@/components/book/index'

import { typography } from '@/styles/theme'

export default function BookContent() {
  return (
    <>
      <Spacing height={7} />
      <Label labelStyle={typography.subtitleLg} labelElement={<BestSellerLoadMoreButton />}>
        베스트셀러
      </Label>

      <Spacing height={4} />
      <BestsellerList />

      <Spacing height={36} />
      <Label labelStyle={typography.subtitleLg}>같은 취향 사람들의 인기책</Label>

      <Spacing height={8} />
      <PopularBook />
    </>
  )
}
