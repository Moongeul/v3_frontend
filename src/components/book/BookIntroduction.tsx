'use client'

import { StyleBookIntroductionContent } from '@/styles/common/Book.styles'
import { Label, Spacing } from '@/components/common'
import { typography } from '@/styles/theme'

interface BookIntroductionProps {
  description: string
}

export default function BookIntroduction({ description }: BookIntroductionProps) {
  return (
    <div>
      <Label labelStyle={typography.subtitleMd}>책소개</Label>
      <Spacing height={8} />
      <StyleBookIntroductionContent>{description}</StyleBookIntroductionContent>
    </div>
  )
}
