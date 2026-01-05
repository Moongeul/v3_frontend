'use client'

import { StyleAvatar, StyleAvatarCount, StyleAvatarGroup } from '@/styles/question/Question.styles'

export default function AvatarGroup() {
  return (
    <StyleAvatarGroup>
      <StyleAvatar></StyleAvatar>
      <StyleAvatar></StyleAvatar>
      <StyleAvatar></StyleAvatar>
      <StyleAvatarCount>+8명 참여</StyleAvatarCount>
    </StyleAvatarGroup>
  )
}
