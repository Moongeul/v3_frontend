'use client'

import {
  StyleBestBookAuthor,
  StyleBestBookTitle,
  StyleBestSellerBookImage,
  StyleBestSellerItemContainer,
} from '@/styles/common/Book.styles'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

interface BestsellerHomeItemProps {
  isbn: string
  bookImage: string
  title: string
  author: string
}
export default function BestSellerItem({ isbn, bookImage, title, author }: BestsellerHomeItemProps) {
  const router = useRouter()
  return (
    <StyleBestSellerItemContainer
      onClick={() => {
        router.push(`/book/${isbn}`)
      }}
    >
      <StyleBestSellerBookImage>
        <Image src={bookImage} alt={'이미지'} width={92} height={138} style={{ borderRadius: 6 }}></Image>
      </StyleBestSellerBookImage>

      <StyleBestBookTitle>{title}</StyleBestBookTitle>
      <StyleBestBookAuthor>{author}</StyleBestBookAuthor>
    </StyleBestSellerItemContainer>
  )
}
