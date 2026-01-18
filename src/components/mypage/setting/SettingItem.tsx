'use client'

import { StyleMypageItem } from '@/styles/mypage/MypageHome.styles'
import { StyleContent } from '@/styles/common/Common.styles'
import { typography } from '@/styles/theme'
import { ReactNode } from 'react'

interface SettingItemProps {
  content: string
  rightElement?: ReactNode
}
export default function SettingItem({ content, rightElement }: SettingItemProps) {
  return (
    <StyleMypageItem>
      <StyleContent $typography={typography.buttonMd}>{content}</StyleContent>
      {rightElement && rightElement}
    </StyleMypageItem>
  )
}
