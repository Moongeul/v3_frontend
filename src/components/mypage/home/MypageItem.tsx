'use client'

import { StyleContent } from '@/styles/common/Common.styles'
import { typography } from '@/styles/theme'
import { StyleMypageItem } from '@/styles/mypage/MypageHome.styles'
import { useRouter } from 'next/navigation'
import ThemeHeaderRightArrowIcon from '@/components/common/icon/ThemeHeaderRightArrowIcon'

interface MypageItemProps {
  content: string
  path: string
}

export default function MypageItem({ content, path }: MypageItemProps) {
  const router = useRouter()

  const onNavigate = () => {
    router.push(path)
  }
  return (
    <StyleMypageItem onClick={onNavigate}>
      <StyleContent $typography={typography.subtitleLg}>{content}</StyleContent>
      <ThemeHeaderRightArrowIcon />
    </StyleMypageItem>
  )
}
