'use client'

import { StyledBackground } from '@/styles/story/Detail.styles'

interface DetailLayoutProps {
  children: React.ReactNode
}

export default function DetailLayout({ children }: DetailLayoutProps) {
  return <StyledBackground>{children}</StyledBackground>
}
