'use client'

import BestSellerItem from '@/components/book/BestSellerItem'
import { StyleBestSellerBookRowContainer } from '@/styles/common/Book.styles'
import { BestSellerType } from '@/types/book'

interface BestSellerListProps {
  bestSellers: BestSellerType[] | undefined
}

export default function BestsellerList({ bestSellers }: BestSellerListProps) {
  return (
    <StyleBestSellerBookRowContainer>
      {bestSellers?.map((bestSeller) => (
        <BestSellerItem
          key={bestSeller.isbn}
          isbn={bestSeller.isbn}
          title={bestSeller.title}
          author={bestSeller.author}
          bookImage={bestSeller.bookImage}
        />
      ))}
    </StyleBestSellerBookRowContainer>
  )
}
