'use client'

import { QuoteType } from '@/types/write'
import { StyledQuoteSelector } from '@/styles/story/Story.styles'
import { CheckIcon, UncheckIcon } from '@/assets/svgComponents'
import { BookQuote } from '@/components/book'
import { useStoryStore } from '@/store/storyStore'

interface QuoteOptionProps {
  quotes: QuoteType[]
}
export default function QuoteOption({ quotes }: QuoteOptionProps) {
  const { selectedQuotes, toggleQuote } = useStoryStore()
  return (
    <>
      {quotes.map((quote) => {
        // 현재 인용구가 선택된 상태인지 확인
        const isActive = selectedQuotes.some((q) => q.quoteContent === quote.quoteContent)

        return (
          <StyledQuoteSelector
            key={quote.quoteContent}
            $isActive={isActive}
            onClick={() => toggleQuote(quote)} // 클릭 시 토글
            style={{ cursor: 'pointer' }} // 클릭 가능함을 표시
          >
            {/* isActive 상태에 따라 체크 아이콘 색상 등을 변경할 수 있습니다 */}
            {isActive ? <CheckIcon width={24} height={24} /> : <UncheckIcon width={24} height={24} />}
            <BookQuote isBorderLeft={false} quoteContent={quote.quoteContent} page={quote.pageNumber} />
          </StyledQuoteSelector>
        )
      })}
    </>
  )
}
