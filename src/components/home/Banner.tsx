'use client'

import { useRouter } from 'next/navigation'
import { StyleBannerContainer, StyleBannerGraphic, StyleBannerTitle } from '@/styles/home/Banner.styles'

interface BannerProps {
  graphic: React.ReactNode
  button: React.ReactNode
  path: string
  content: string
}

export default function Banner({ graphic, button, path, content }: BannerProps) {
  const router = useRouter()

  const handlePath = () => router.push(path)
  return (
    <StyleBannerContainer onClick={handlePath}>
      <StyleBannerTitle>{content}</StyleBannerTitle>
      {button}
      <StyleBannerGraphic>{graphic}</StyleBannerGraphic>
    </StyleBannerContainer>
  )
}
