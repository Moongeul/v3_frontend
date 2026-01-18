'use client'
import { StyleContent } from '@/styles/common/Common.styles'
import { baseColor, typography } from '@/styles/theme'

interface VersionProps {
  version: string
}

export default function Version({ version }: VersionProps) {
  return (
    <StyleContent $typography={typography.buttonMd} $textColor={baseColor.gray300}>
      v.{version}
    </StyleContent>
  )
}
