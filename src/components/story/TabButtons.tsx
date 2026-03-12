'use client'

import { StyledTabButton, StyledTabButtonWrapper } from '@/styles/story/Story.styles'
import { useStoryStore } from '@/store/storyStore'

export default function TabButtons() {
  const { menu, setMenu, setTab } = useStoryStore((state) => state)

  return (
    <StyledTabButtonWrapper>
      <StyledTabButton
        onClick={() => {
          setMenu('review')
          setTab('background')
        }}
        $isActive={menu === 'review'}
      >
        감상평
      </StyledTabButton>
      <StyledTabButton
        onClick={() => {
          setMenu('quote')
          setTab('quote')
        }}
        $isActive={menu === 'quote'}
      >
        인용구
      </StyledTabButton>
    </StyledTabButtonWrapper>
  )
}
