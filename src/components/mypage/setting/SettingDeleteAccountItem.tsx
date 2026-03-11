'use client'

import { StyleContent } from '@/styles/common/Common.styles'
import { baseColor, typography } from '@/styles/theme'
import { StyleSettingItem } from '@/styles/mypage/Setting.styles'
import { useRouter } from 'next/navigation'

export default function SettingDeleteAccountItem() {
  const router = useRouter()
  const onNavigate = () => {
    router.push('/mypage/withdraw')
  }
  return (
    <StyleSettingItem onClick={onNavigate}>
      <StyleContent $typography={typography.buttonMd} $textColor={baseColor.red500}>
        탈퇴하기
      </StyleContent>
    </StyleSettingItem>
  )
}
