'use client'

import { useRouter } from 'next/navigation'
import { StyleButton, StyleSelectBookItemContainer, StyleText } from '@/styles/question/Write.styles'
import { AddBlackIcon } from '@/assets/svgComponents'

interface SelectBookItemProps {
  path: string
}

export default function SelectBookItem({ path }: SelectBookItemProps) {
  const router = useRouter()

  const onNavigate = () => {
    router.push(path)
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
