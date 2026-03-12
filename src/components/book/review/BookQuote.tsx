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
      <DoubleQuoteLeftIcon width={8} height={8} />
      <StyleBookQuoteColumnContainer>
        <StyleQuoteContent $typography={renderFontType(fontType)}>{quoteContent}</StyleQuoteContent>
        <Spacing height={4} />

        <StyleQuotePage>P.{page}</StyleQuotePage>
      </StyleBookQuoteColumnContainer>
      <DoubleQuoteRightIcon width={8} height={8} />
    </StyleBookQuoteRowContainer>
  )
}
