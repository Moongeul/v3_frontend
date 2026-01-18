'use client'

import Image from 'next/image'
import { StyleStoryCard, StyleStoryCardDateBadge } from '@/styles/mypage/MypageHome.styles'

interface StoryCardProps {
  bookImage: string
}

export default function StoryCard({ bookImage }: StoryCardProps) {
  return (
    <StyleStoryCard>
      <StyleStoryCardDateBadge>1월 3일</StyleStoryCardDateBadge>
      <Image src={bookImage} alt={'이미지'} width={72} height={108} style={{ borderRadius: 4 }} />
    </StyleStoryCard>
  )
}
