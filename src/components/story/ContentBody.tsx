'use client'

import { StyleContent } from '@/styles/common/Common.styles'
import { useTheme } from '@emotion/react'
import { typography } from '@/styles/theme'
import { StoryFontType } from '@/store/storyStore'

interface ContentBodyProps {
  fontType: StoryFontType
  content: string
}

export default function ContentBody({ content, fontType }: ContentBodyProps) {
  const theme = useTheme()

  const renderFontType = (storyFontType: StoryFontType) => {
    switch (storyFontType) {
      case 'memoment':
        return typography.memomentBody
      case 'myeongjo':
        return typography.myeongjoBody
      case 'suit':
        return typography.badgeMd
    }
  }
  return (
    <StyleContent $typography={renderFontType(fontType)} $textColor={'#272725'}>
      {content}
    </StyleContent>
  )
}
