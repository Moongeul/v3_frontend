'use client'

import { StoryCard, WriteStoryButton } from '@/components/home/index'
import { StyleStoryList, StyleStoryListWrapper } from '@/styles/home/Record.styles'

interface StoryListProps {}
export default function StoryList({}: StoryListProps) {
  return (
    <StyleStoryListWrapper>
      <WriteStoryButton />
      <StyleStoryList>
        <StoryCard />
        <StoryCard />
        <StoryCard />
        <StoryCard />
        <StoryCard />
      </StyleStoryList>
    </StyleStoryListWrapper>
  )
}
