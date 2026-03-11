// src/components/policy/PolicyHeader.tsx
'use client'

import { useSearchParams } from 'next/navigation'
import { Header } from '@/components/common'

export default function PolicyHeader() {
  const searchParams = useSearchParams()
  const type = searchParams.get('type') || 'home'

  const renderHeaderTitle = () => {
    switch (type) {
      case 'home':
        return '이용약관'
      case 'service':
        return '서비스 이용약관'
      case 'info':
        return '개인정보 수집·이용 동의'
      default:
        return '마케팅 정보 수신 동의(선택)'
    }
  }

  return <Header headerType={'dynamic'}>{renderHeaderTitle()}</Header>
}
