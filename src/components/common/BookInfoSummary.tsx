'use client'

import * as Style from '@/styles/common/Book.styles'
import Image from 'next/image'
import Spacing from '@/components/common/Spacing'

interface BookInfoSummaryProps {
  isbn: string
  title: string
  author: string
  bookImage: string
  publisher?: string
  pubdate?: string
  rightElement?: React.ReactNode
}
export default function BookInfoSummary({
  isbn,
  bookImage,
  pubdate,
  publisher,
  author,
  title,
  rightElement,
}: BookInfoSummaryProps) {
  return (
    <Style.BookInfoSummaryContainer>
      <Style.Row>
        <Style.BookImage>
          <Image src={bookImage} width={80} height={120} alt="이미지"></Image>
        </Style.BookImage>
        <Style.Column>
          <Style.Title>{title}</Style.Title>
          <Style.Info>{author}</Style.Info>
          <Style.Info>
            {publisher} | {pubdate}
          </Style.Info>
        </Style.Column>
      </Style.Row>
      <Style.RightButton>{rightElement && rightElement}</Style.RightButton>
    </Style.BookInfoSummaryContainer>
  )
}
