'use client'

import {
  StyleBestBookAuthor,
  StyleBestBookTitle,
  StyleBestSellerBookImage,
  StyleBestSellerItemContainer,
} from '@/styles/common/Book.styles'
import Image from 'next/image'

interface BestsellerHomeItemProps {
  bookImage: string
  title: string
  author: string
}
export default function BestSellerItem({ bookImage, title, author }: BestsellerHomeItemProps) {
  return (
    <StyleBestSellerItemContainer>
      <StyleBestSellerBookImage>
        <Image src={bookImage} alt={'이미지'} width={92} height={138} style={{ borderRadius: 6 }}></Image>
      </StyleBestSellerBookImage>

      <StyleBestBookTitle>{title}</StyleBestBookTitle>
      <StyleBestBookAuthor>{author}</StyleBestBookAuthor>
    </StyleBestSellerItemContainer>
  )
}
