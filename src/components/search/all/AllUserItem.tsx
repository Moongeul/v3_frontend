'use client'

import { StyledUserItem, StyledUserNickname, StyledUserProfileImage } from '@/styles/search/Search.styles'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

interface AllUserItemProps {
  nickname: string
  userId: number
  profileImage: string
}

export default function AllUserItem({ nickname, userId, profileImage }: AllUserItemProps) {
  const router = useRouter()
  // 5글자가 넘어가면 자르고 '...' 추가
  const truncatedNickname = nickname.length > 5 ? `${nickname.slice(0, 5)}...` : nickname

  return (
    <StyledUserItem
      onClick={() => {
        router.push(`/profile/${userId}`)
      }}
    >
      <StyledUserProfileImage>
        <Image
          width={60}
          height={60}
          style={{ borderRadius: 999, objectFit: 'cover' }} // 이미지 왜곡 방지
          alt="프로필"
          src={profileImage || '/default-profile.png'} // 기본 이미지 처리
        />
        {/* 가공된 닉네임 표시 */}
      </StyledUserProfileImage>
      <StyledUserNickname title={nickname}>{truncatedNickname}</StyledUserNickname>
    </StyledUserItem>
  )
}
