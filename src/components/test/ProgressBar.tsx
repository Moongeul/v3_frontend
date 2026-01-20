'use client'
import { StyleProgressBarContainer, StyleProgressFill } from '@/styles/test/Test.styles'

interface ProgressBarProps {
  progress: number
}

export default function ProgressBar({ progress }: ProgressBarProps) {
  return (
    <StyleProgressBarContainer>
      <StyleProgressFill width={progress} />
    </StyleProgressBarContainer>
  )
}
