'use client'

import BestSellerItem from '@/components/book/BestSellerItem'
import { StyleBestSellerBookRowContainer } from '@/styles/common/Book.styles'

export default function BestsellerList() {
  return (
    <StyleBestSellerBookRowContainer>
      <BestSellerItem
        isbn={'1'}
        title={'책제목책제목책제목책제목책제목책제목'}
        author={'작가'}
        bookImage={'/bookimage.png'}
      />
      <BestSellerItem isbn={'1'} title={'책제목'} author={'작가'} bookImage={'/bookimage.png'} />
      <BestSellerItem isbn={'1'} title={'책제목'} author={'작가'} bookImage={'/bookimage.png'} />
      <BestSellerItem isbn={'1'} title={'책제목'} author={'작가'} bookImage={'/bookimage.png'} />
      <BestSellerItem isbn={'1'} title={'책제목'} author={'작가'} bookImage={'/bookimage.png'} />
    </StyleBestSellerBookRowContainer>
  )
}
