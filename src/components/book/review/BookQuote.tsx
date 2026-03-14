'use client'

import {
  StyleBookQuoteColumnContainer,
  StyleBookQuoteRowContainer,
  StyleQuoteContent,
  StyleQuotePage,
} from '@/styles/book/Review.styles'
import { DoubleQuoteLeftIcon, DoubleQuoteRightIcon } from '@/assets/svgComponents'
import { Spacing } from '@/components/common'
import { StoryFontType } from '@/store/storyStore'
import { typography } from '@/styles/theme'
import QuoteIcon from '@/components/common/icon/QuoteIcon'

interface BookQuoteProps {
  fontType?: StoryFontType
  quoteContent: string
  page: number
  isBorderLeft?: boolean
}

export default function BookQuote({ quoteContent, page, isBorderLeft = true, fontType }: BookQuoteProps) {
  const renderFontType = (storyFontType: StoryFontType | undefined) => {
    switch (storyFontType) {
      case 'memoment':
        return typography.memomentBody
      case 'myeongjo':
        return typography.myeongjoBody
      case 'suit':
        return typography.badgeMd
      default:
        return typography.badgeMd
    }
  }
  return (
    <StyleBookQuoteRowContainer $isBorderLeft={isBorderLeft}>
      <QuoteIcon type={'left'} />
      <StyleBookQuoteColumnContainer>
        <StyleQuoteContent $typography={renderFontType(fontType)}>{quoteContent}</StyleQuoteContent>
        <Spacing height={4} />

        <StyleQuotePage>P.{page}</StyleQuotePage>
      </StyleBookQuoteColumnContainer>
      <QuoteIcon type={'right'} />
    </StyleBookQuoteRowContainer>
  )
}
