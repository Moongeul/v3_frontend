'use client'

import * as S from '@/styles/common/Book.styles'
import Image from 'next/image'
import { StarFillGrayIcon, StarFillRatingIcon } from '@/assets/svgComponents'
import { useRouter } from 'next/navigation'

interface BookInfoSummaryProps {
  styleType?: 'transparent' | 'lightYellow'
  isbn: string | undefined
  title: string | undefined
  author: string | undefined
  bookImage: string | undefined
  publisher?: string
  pubdate?: string
  rightElement?: React.ReactNode
  rating?: number
  disable?: boolean
}
export default function BookInfoSummary({
  styleType = 'transparent',
  isbn,
  bookImage,
  pubdate,
  publisher,
  author,
  title,
  rightElement,
  rating,
  disable = false,
}: BookInfoSummaryProps) {
  const router = useRouter()

  const onNavigate = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.stopPropagation()
    router.push(`/book/${isbn}`)
  }

  return (
    <S.BookInfoSummaryContainer
      $styleType={styleType}
      onClick={(e) => {
        if (!disable) {
          onNavigate(e)
        }
      }}
    >
      <S.Row>
        <S.BookImage>
          <Image
            src={bookImage ?? '/bookimage.png'}
            width={styleType === 'transparent' ? 80 : 50}
            height={styleType === 'transparent' ? 120 : 76}
            alt="이미지"
            style={{ borderRadius: styleType === 'transparent' ? 6 : 4 }}
          />
        </S.BookImage>
        <S.Column>
          <S.Title $styleType={styleType}>{title}</S.Title>
          <S.Info $styleType={styleType}>{author}</S.Info>
          <S.Info $styleType={styleType}>
            {publisher} | {pubdate}
          </S.Info>
          {styleType === 'transparent' && rating ? (
            <S.Rating $styleType={styleType}>
              <StarFillGrayIcon width={12} height={12} />
              {rating}
            </S.Rating>
          ) : null}
        </S.Column>
      </S.Row>
      {styleType === 'lightYellow' && rating ? (
        <S.Rating $styleType={styleType}>
          {styleType === 'lightYellow' ? (
            <StarFillRatingIcon width={16} height={16} />
          ) : (
            <StarFillGrayIcon width={12} height={12} />
          )}
          {rating}
        </S.Rating>
      ) : null}
      <S.RightButton
        onClick={(e) => {
          e.stopPropagation()
        }}
      >
        {rightElement && rightElement}
      </S.RightButton>
    </S.BookInfoSummaryContainer>
  )
}
