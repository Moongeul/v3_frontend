'use client'

import {
  StyleBookQuoteColumnContainer,
  StyleBookQuoteRowContainer,
  StyleQuoteContent,
  StyleQuotePage,
} from '@/styles/book/Review.styles'
import { DoubleQuoteLeftIcon, DoubleQuoteRightIcon } from '@/assets/svgComponents'
import { Spacing } from '@/components/common'

interface BookQuoteProps {
  quoteContent: string
  page: number
}

export default function BookQuote({ quoteContent, page }: BookQuoteProps) {
  return (
    <StyleBookQuoteRowContainer>
      <DoubleQuoteLeftIcon width={8} height={8} />
      <StyleBookQuoteColumnContainer>
        <StyleQuoteContent>{quoteContent}</StyleQuoteContent>
        <Spacing height={4} />

        <StyleQuotePage>P.{page}</StyleQuotePage>
      </StyleBookQuoteColumnContainer>
      <DoubleQuoteRightIcon width={8} height={8} />
    </StyleBookQuoteRowContainer>
  )
}
