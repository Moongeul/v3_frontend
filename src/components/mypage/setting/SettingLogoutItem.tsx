'use client'

import { StyleSettingItem } from '@/styles/mypage/Setting.styles'
import { StyleContent } from '@/styles/common/Common.styles'
import { typography } from '@/styles/theme'

export default function SettingLogoutItem() {
  const handleLogout = async () => {
    if (!confirm('로그아웃 하시겠습니까?')) return //modal

    try {
      const response = await fetch('/api/auth/cookies', {
        method: 'DELETE',
      })

      if (response.ok) {
        window.location.href = '/'
      } else {
        alert('로그아웃에 실패했습니다.')
      }
    } catch (error) {
      console.error('Logout error:', error)
      alert('오류가 발생했습니다.')
    }
  }

  return (
    <StyleSettingItem onClick={handleLogout}>
      <StyleContent $typography={typography.buttonMd}>로그아웃</StyleContent>
    </StyleSettingItem>
  )
}
