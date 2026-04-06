'use client'

import { StyleRecordButton, StyleRecordButtonText } from '@/styles/home/Record.styles'
import { AddWhiteIcon } from '@/assets/svgComponents'
import { useRouter } from 'next/navigation'
import Cookies from 'js-cookie'
import { useModalStore } from '@/store/modalStore'
import { useBackPathStore } from '@/store/backPathStore'

export default function WriteRecordButton() {
  const router = useRouter()
  const loginMemberId = Cookies.get('memberId')
  const { setModal } = useModalStore()
  const { setBackPath } = useBackPathStore()

  return (
    <StyleRecordButton
      onClick={() => {
        if (loginMemberId) {
          router.push(`/mypage/${loginMemberId}/record`)
        } else {
          setModal('isRequiredLoginModalOpen', true)
          setBackPath('/home?tab=PUBLIC')
        }
      }}
    >
      <AddWhiteIcon width={18} height={18} />
      <StyleRecordButtonText>
        스토리
        <br /> 만들기
      </StyleRecordButtonText>
    </StyleRecordButton>
  )
}
