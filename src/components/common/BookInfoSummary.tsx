'use client'

import * as S from '@/styles/common/Book.styles'
import Image from 'next/image'
import { StarFillGrayIcon } from '@/assets/svgComponents'
import { useRouter } from 'next/navigation'

interface BookInfoSummaryProps {
  isbn: string
  title: string
  author: string
  bookImage: string
  publisher?: string
  pubdate?: string
  rightElement?: React.ReactNode
  rating?: number
}
export default function BookInfoSummary({
  isbn,
  bookImage,
  pubdate,
  publisher,
  author,
  title,
  rightElement,
  rating,
}: BookInfoSummaryProps) {
  const router = useRouter()
  return (
    <S.BookInfoSummaryContainer
      onClick={() => {
        router.push(`/book/${isbn}`)
      }}
    >
      <S.Row>
        <S.BookImage>
          <Image src={bookImage} width={80} height={120} alt="이미지" style={{ borderRadius: 6 }}></Image>
        </S.BookImage>
        <S.Column>
          <S.Title>{title}</S.Title>
          <S.Info>{author}</S.Info>
          <S.Info>
            {publisher} | {pubdate}
          </S.Info>
          {rating ? (
            <S.Rating>
              <StarFillGrayIcon width={12} height={12} />
              {rating}
            </S.Rating>
          ) : null}
        </S.Column>
      </S.Row>
      <S.RightButton>{rightElement && rightElement}</S.RightButton>
    </S.BookInfoSummaryContainer>
  )
}
