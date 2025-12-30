'use client'

import { ReactNode } from 'react'

import { useBookStore } from '@/store/bookStore'
import { useBookInfiniteScroll } from '@/hooks/book/useBookInfiniteScroll'

import { Label, Spacing } from '@/components/common'
import { BestsellerList, BookSearchResults, BestSellerLoadMoreButton, PopularBook } from '@/components/book/index'

import { typography } from '@/styles/theme'

interface BookContentProps {
  children?: ReactNode
}
export default function BookContent({ children }: BookContentProps) {
  const { searchValue } = useBookStore((state) => state)
  const { books, hasData, bottomRef, isFetchingNextPage } = useBookInfiniteScroll(searchValue)
  return (
    <>
      {hasData ? (
        <>
          <BookSearchResults
            bookResponse={books?.pages}
            isFetchingNextPage={isFetchingNextPage}
            bottomRef={bottomRef}
          />
        </>
      ) : (
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
      )}
    </>
  )
}
