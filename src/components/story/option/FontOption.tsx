'use client'

import { StyledFontList } from '@/styles/story/Story.styles'
import { useTheme } from '@emotion/react'
import FontSelector from '@/components/story/option/FontSelector'
import { StoryFontType } from '@/components/story/OptionSelector'

interface FontOptionType {
  fontType: StoryFontType
  selectFontType: (fontType: StoryFontType) => void
}

export default function FontOption({ fontType, selectFontType }: FontOptionType) {
  const theme = useTheme()

  return (
    <StyledFontList>
      <FontSelector onClick={() => selectFontType('suit')} isActive={fontType === 'suit'} storyFontType={'suit'} />
      <FontSelector
        onClick={() => selectFontType('myeongjo')}
        isActive={fontType === 'myeongjo'}
        storyFontType={'myeongjo'}
      />
      <FontSelector
        onClick={() => selectFontType('memoment')}
        isActive={fontType === 'memoment'}
        storyFontType={'memoment'}
      />
    </StyledFontList>
  )
}
