'use client'

import { StyleRecordButton, StyleRecordButtonText } from '@/styles/home/Record.styles'
import { AddWhiteIcon } from '@/assets/svgComponents'

export default function WriteRecordButton() {
  return (
    <StyleRecordButton>
      <AddWhiteIcon width={18} height={18} />
      <StyleRecordButtonText>
        스토리
        <br /> 만들기
      </StyleRecordButtonText>
    </StyleRecordButton>
  )
}
