'use client'

import { StyleAvatar, StyleAvatarCount, StyleAvatarGroup } from '@/styles/question/Question.styles'
import Image from 'next/image'
import { ProfileIcon } from '@/assets/svgComponents'
import { useState } from 'react'

interface AvatarGroupProps {
  participantProfileImages: string[] | undefined
  participantCount: number | undefined
}

function Avatar({ src, index }: { src: string; index: number }) {
  const [imgError, setImgError] = useState(false)

  return (
    <StyleAvatar>
      {imgError || !src ? (
        <ProfileIcon width={24} height={24} />
      ) : (
        <Image src={src} alt={`참여 유저 ${index + 1}`} fill sizes="24px" onError={() => setImgError(true)} />
      )}
    </StyleAvatar>
  )
}

export default function AvatarGroup({ participantProfileImages, participantCount }: AvatarGroupProps) {
  const totalCount = participantCount || 0
  const displayAvatars = participantProfileImages?.slice(0, 3)
  const extraCount = totalCount - 3

  return (
    <StyleAvatarGroup>
      {displayAvatars?.map((src, index) => (
        <Avatar key={index} src={src} index={index} />
      ))}
      {totalCount >= 4 && <StyleAvatarCount>+{extraCount}명 참여</StyleAvatarCount>}
    </StyleAvatarGroup>
  )
}
