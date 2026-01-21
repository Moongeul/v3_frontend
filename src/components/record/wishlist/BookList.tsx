'use client'

import { StyleBookListContainer, StyleShelf } from '@/styles/record/WishList.styles'
import Book from '@/components/record/wishlist/Book'
import { Spacing } from '@/components/common'

interface BookListProps {}
export default function BookList({}: BookListProps) {
  return (
    <>
      <StyleBookListContainer>
        <Book bookImage={'/bookimage.png'} isbn={'1'} />
        <Book bookImage={'/bookimage.png'} isbn={'1'} />
        <Book bookImage={'/bookimage.png'} isbn={'1'} />
        <Book bookImage={'/bookimage.png'} isbn={'1'} />
      </StyleBookListContainer>
      <StyleShelf />
      <Spacing height={24} />
    </>
  )
}
