'use client'

import { StyledOptionSelectorContainer } from '@/styles/story/Story.styles'
import OptionTab from '@/components/story/OptionTab'
import FontOption from '@/components/story/option/FontOption'
import BackgroundOption from '@/components/story/option/BackgroundOption'
import QuoteOption from '@/components/story/option/QuoteOption'
import { useStoryStore } from '@/store/storyStore'
import { QuoteType } from '@/types/write'

export type OptionTabType = 'quote' | 'font' | 'background'
export type StoryFontType = 'suit' | 'myeongjo' | 'memoment'

interface OptionSelectorProps {
  quotes: QuoteType[]
}

export default function OptionSelector({ quotes }: OptionSelectorProps) {
  const { menu, tab, setTab, fontType, bgColor, setBgColor, setFontType } = useStoryStore((state) => state)

  const tabClick = (tab: OptionTabType) => {
    setTab(tab)
  }

  const selectBgColor = (bgColor: string) => {
    setBgColor(bgColor)
  }

  const selectFontType = (fontType: StoryFontType) => {
    setFontType(fontType)
  }

  const renderOptionTab = (tab: OptionTabType) => {
    switch (tab) {
      case 'background':
        return <BackgroundOption selectBgColor={selectBgColor} bgColor={bgColor} />
      case 'quote':
        return <QuoteOption quotes={quotes} />
      case 'font':
        return <FontOption fontType={fontType} selectFontType={selectFontType} />
      default:
        return <BackgroundOption selectBgColor={selectBgColor} bgColor={bgColor} />
    }
  }

  return (
    <StyledOptionSelectorContainer>
      <OptionTab isQuote={menu === 'quote'} currentTab={tab} onClick={tabClick} />
      {renderOptionTab(tab)}
    </StyledOptionSelectorContainer>
  )
}
