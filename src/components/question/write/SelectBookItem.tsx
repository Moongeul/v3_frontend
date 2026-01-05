'use client'

import { useRouter } from 'next/navigation'
import { StyleButton, StyleSelectBookItemContainer, StyleText } from '@/styles/question/Write.styles'
import { AddBlackIcon } from '@/assets/svgComponents'

export default function SelectBookItem() {
  const router = useRouter()

  const onNavigate = () => {
    router.push('/search?type=select')
  }

  return (
    <StyleSelectBookItemContainer onClick={onNavigate}>
      <StyleButton>
        <AddBlackIcon width={20} height={20} />
      </StyleButton>
      <StyleText>어떤 책을 읽으셨나요?</StyleText>
    </StyleSelectBookItemContainer>
  )
}
