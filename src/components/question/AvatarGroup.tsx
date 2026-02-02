'use client'

import { StyleAvatar, StyleAvatarCount, StyleAvatarGroup } from '@/styles/question/Question.styles'
import Image from 'next/image'

interface AvatarGroupProps {
  participantProfileImages: string[] | undefined
  participantCount: number | undefined
}

export default function AvatarGroup({ participantProfileImages, participantCount }: AvatarGroupProps) {
  const totalCount = participantCount || 0
  // 최대 3명까지만 아바타 아이콘 표시
  const displayAvatars = participantProfileImages?.slice(0, 3)
  // 4명 이상일 때 표시할 추가 인원 수
  const extraCount = totalCount - 3

  return (
    <StyleAvatarGroup>
      {/* 1~3명까지의 아바타 렌더링 */}
      {displayAvatars?.map((src, index) => (
        <StyleAvatar key={index}>
          <Image src={src} alt={`참여 유저 ${index + 1}`} fill sizes="24px" />
        </StyleAvatar>
      ))}

      {/* 4명 이상일 때만 카운트 표시 */}
      {totalCount >= 4 && <StyleAvatarCount>+{extraCount}명 참여</StyleAvatarCount>}
    </StyleAvatarGroup>
  )
}
