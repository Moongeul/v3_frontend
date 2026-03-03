'use client'
import { Label, Spacing } from '@/components/common'
import { typography } from '@/styles/theme'
import { useTheme } from '@emotion/react'
import { StyledUploadDateWrapper } from '@/styles/notice/Notice.styles'
import { StyleContent } from '@/styles/common/Common.styles'

interface NoticeDetailContentProps {
  title: string
  content: string
  uploadDate: string
}
export default function NoticeDetailContent({ title, content, uploadDate }: NoticeDetailContentProps) {
  const theme = useTheme()

  return (
    <div>
      <Spacing height={20} />
      <Label labelStyle={typography.titleSm} labelColor={theme.colors.headerText}>
        {title}
      </Label>
      <Spacing height={10} />
      <Label labelStyle={typography.bodySm} labelColor={theme.colors.headerText}>
        {content}
      </Label>
      <Spacing height={10} />
      <StyledUploadDateWrapper>
        <StyleContent $typography={typography.badgeSm} $textColor={theme.colors.textFieldFocusLine}>
          {uploadDate}
        </StyleContent>
      </StyledUploadDateWrapper>
    </div>
  )
}
