'use client'

import PostOptionMenu from '@/components/common/option/PostOptionMenu'
import { ReviewHeader } from '@/components/book'
import { useState } from 'react'
import Cookies from 'js-cookie'
import { ProfileInfoType } from '@/types/user'
import UserOptionMenu from '@/components/common/option/UserOptionMenu'

interface ReviewDetailHeaderProps {
  memberInfo: ProfileInfoType
  postId: string
  isbn: string
  created: string
}

export default function ReviewDetailHeader({ memberInfo, created, isbn, postId }: ReviewDetailHeaderProps) {
  const loginMemberId = Cookies.get('memberId')
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleMenuClick = (e: React.MouseEvent) => {
    e.stopPropagation() // 카드 클릭 이벤트(상세 이동)가 발생하지 않도록 방지
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <ReviewHeader
      menu={
        String(memberInfo.memberId) === loginMemberId ? (
          <PostOptionMenu postId={postId} isbn={isbn} handleMenuClick={handleMenuClick} />
        ) : (
          <UserOptionMenu handleMenuClick={handleMenuClick} />
        )
      }
      handleMenuClick={handleMenuClick}
      isMenuOpen={isMenuOpen}
      created={created}
      memberInfo={memberInfo}
      isProfile={true}
    />
  )
}
