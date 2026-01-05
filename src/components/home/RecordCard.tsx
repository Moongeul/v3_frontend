'use client'

import {
  StyleProfileContainer,
  StyleRecordCard,
  StyleRecordCardContainer,
  StyleRecordCardCountIndicator,
  StyleRecordCardText,
} from '@/styles/home/Record.styles'
import { ProfileIcon } from '@/assets/svgComponents'

export default function RecordCard() {
  return (
    <StyleRecordCardContainer>
      <StyleRecordCard>
        <StyleProfileContainer>
          <ProfileIcon />
        </StyleProfileContainer>

        <StyleRecordCardCountIndicator>+3</StyleRecordCardCountIndicator>
      </StyleRecordCard>
      <StyleRecordCardText>동해밤바다동해밤바다동해밤바다</StyleRecordCardText>
    </StyleRecordCardContainer>
  )
}
