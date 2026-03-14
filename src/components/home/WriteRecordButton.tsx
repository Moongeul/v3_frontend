'use client'

import { StyleRecordButton, StyleRecordButtonText } from '@/styles/home/Record.styles'
import { AddWhiteIcon } from '@/assets/svgComponents'
import { useRouter } from 'next/navigation'

export default function WriteRecordButton() {
  const router = useRouter()

  return (
    <StyleRecordButton
      onClick={() => {
        router.push('/mypage/record')
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
