'use client'

import { Button, Label, Spacing } from '@/components/common'
import { baseColor } from '@/styles/theme'
import { StyleStoryContainer } from '@/styles/mypage/MypageHome.styles'
import StoryCard from '@/components/mypage/home/StoryCard'

export default function Story() {
  return (
    <>
      <Label
        labelElement={
          <Button variant={'ghost'} size={'sm'} width={85} textColor={baseColor.primary500}>
            전체보기
          </Button>
        }
      >
        스토리 보관함
      </Label>
      <Spacing height={4} />

      <StyleStoryContainer>
        <StoryCard bookImage={'/bookimage.png'} />
        <StoryCard bookImage={'/bookimage.png'} />
        <StoryCard bookImage={'/bookimage.png'} />
        <StoryCard bookImage={'/bookimage.png'} />
        <StoryCard bookImage={'/bookimage.png'} />
        <StoryCard bookImage={'/bookimage.png'} />
        <StoryCard bookImage={'/bookimage.png'} />
      </StyleStoryContainer>
    </>
  )
}
