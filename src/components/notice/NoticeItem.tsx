'use client'

import { StyledNoticeItem, StyledNoticeItemContainer } from '@/styles/notice/Notice.styles'
import { Label } from '@/components/common'
import { typography } from '@/styles/theme'
import { useTheme } from '@emotion/react'
import { HeaderRightArrowIcon } from '@/assets/svgComponents'
import { useRouter } from 'next/navigation'

interface NoticeItemProps {
  noticeId: number
  title: string
  uploadDate: string
}
export default function NoticeItem({ noticeId, title, uploadDate }: NoticeItemProps) {
  const theme = useTheme()
  const router = useRouter()

  return (
    <StyledNoticeItemContainer
      onClick={() => {
        router.push(`/notice/${noticeId}`)
      }}
    >
      <StyledNoticeItem>
        <Label labelStyle={typography.buttonMd} labelColor={theme.colors.textFieldFilledText}>
          {title}
        </Label>
        <Label labelStyle={typography.caption} labelColor={theme.colors.textFieldFocusLine}>
          {uploadDate}
        </Label>
      </StyledNoticeItem>
      <HeaderRightArrowIcon width={20} height={20} />
    </StyledNoticeItemContainer>
  )
}
