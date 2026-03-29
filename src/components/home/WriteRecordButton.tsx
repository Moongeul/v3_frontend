'use client'

import { StyleRecordButton, StyleRecordButtonText } from '@/styles/home/Record.styles'
import { AddWhiteIcon } from '@/assets/svgComponents'
import { useRouter } from 'next/navigation'
import Cookies from 'js-cookie'

export default function WriteRecordButton() {
  const router = useRouter()
  const loginMemberId = Cookies.get('memberId')

  return loginMemberId ? (
    <StyleRecordButton
      onClick={() => {
        router.push(`/mypage/${loginMemberId}/record`)
      }}
    >
      <AddWhiteIcon width={18} height={18} />
      <StyleRecordButtonText>
        스토리
        <br /> 만들기
      </StyleRecordButtonText>
    </StyleRecordButton>
  ) : null
}
