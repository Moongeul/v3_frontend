'use client'

import { StyleBestSellerBookColumnContainer, StyleBestSellerBookRowContainer } from '@/styles/common/Book.styles'
import { BestSellerType, BookType } from '@/types/book'
import { BookInfoSummary } from '@/components/common'
import WishBookButton from '@/components/common/button/WishBookButton'

interface BestSellerListProps {
  bestSellers: BookType[] | undefined
}

export default function BestsellerList({ bestSellers }: BestSellerListProps) {
  return (
    <StyleBestSellerBookColumnContainer>
      {bestSellers?.map((bestSeller) => (
        <BookInfoSummary
          key={bestSeller.isbn}
          isbn={bestSeller.isbn}
          title={bestSeller.title}
          author={bestSeller.author}
          bookImage={bestSeller.bookImage}
          pubdate={bestSeller.pubdate}
          rating={bestSeller.ratingCount}
          publisher={bestSeller.publisher}
          // rightElement={<WishBookButton isWishRead={bestSeller.isWishRead} isbn={bestSeller.isbn} />}
        />
      ))}
    </StyleBestSellerBookColumnContainer>
  )
}
