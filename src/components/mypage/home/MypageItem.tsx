'use client'

import { HeaderRightArrowIcon } from '@/assets/svgComponents'
import { StyleContent } from '@/styles/common/Common.styles'
import { typography } from '@/styles/theme'
import { StyleMypageItem } from '@/styles/mypage/MypageHome.styles'
import { useRouter } from 'next/navigation'

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
      <HeaderRightArrowIcon width={20} height={20} />
    </StyleMypageItem>
  )
}
