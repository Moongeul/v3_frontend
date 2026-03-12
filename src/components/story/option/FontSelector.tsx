import { StyledFontSelector } from '@/styles/story/Story.styles'
import { CheckIcon, UncheckIcon } from '@/assets/svgComponents'
import { StyleContent } from '@/styles/common/Common.styles'
import { typography } from '@/styles/theme'
import { useTheme } from '@emotion/react'
import { StoryFontType } from '@/components/story/OptionSelector'

interface FontSelectorProps {
  storyFontType: StoryFontType
  isActive: boolean
  onClick: () => void
}

export default function FontSelector({ storyFontType, isActive, onClick }: FontSelectorProps) {
  const theme = useTheme()

  const renderFontContent = (storyFontType: StoryFontType) => {
    switch (storyFontType) {
      case 'memoment':
        return '메모먼트 꾹꾹체'
      case 'myeongjo':
        return '나눔 명조체'
      case 'suit':
        return 'SUIT(기본)'
    }
  }

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
    <StyledFontSelector onClick={onClick} $fontType={storyFontType} $isActive={isActive}>
      {isActive ? <CheckIcon width={24} height={24} /> : <UncheckIcon width={24} height={24} />}
      <StyleContent $textColor={theme.colors.textFieldFilledLine} $typography={renderFontType(storyFontType)}>
        당신에게 가장 필요한 책은 당신으로 하여금 가장 많이 생각하게 만드는 책이다.
      </StyleContent>
      <StyleContent $textColor={theme.colors.textFieldDefaultLine} $typography={typography.badgeSm}>
        {renderFontContent(storyFontType)}
      </StyleContent>
    </StyledFontSelector>
  )
}
