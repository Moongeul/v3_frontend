'use client'

import Image from 'next/image'
import { StyleStoryCard, StyleStoryCardDateBadge } from '@/styles/mypage/MypageHome.styles'
import { formatKoreanDate } from '@/utils/common'
import { useRouter } from 'next/navigation'

interface StoryCardProps {
  created: string
  storyId: number
  bookImage: string
}

export default function StoryCard({ bookImage, storyId, created }: StoryCardProps) {
  const router = useRouter()

  return (
    <StyleStoryCard
      onClick={() => {
        router.push(`/story/detail/${storyId}`)
      }}
    >
      <StyleStoryCardDateBadge>{formatKoreanDate(created)}</StyleStoryCardDateBadge>
      <Image src={bookImage} alt={'이미지'} width={72} height={108} style={{ borderRadius: 4 }} />
    </StyleStoryCard>
  )
}
