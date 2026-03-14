'use client'
import { useEffect } from 'react'
import Cookies from 'js-cookie'
import { useModalStore } from '@/store/modalStore'
import TestModal from '@/components/common/modal/TestModal'

export default function HomeModal() {
  const { setModal, modals } = useModalStore((state) => state)

  useEffect(() => {
    // 1. 쿠키에서 isReadingTaste 가져오기 (문자열 'true'로 저장됨)
    const isReadingTaste = Cookies.get('isReadingTaste')

    // 2. 값이 'true'인 경우 모달 열기
    if (isReadingTaste === 'false') {
      setModal('isTestModalOpen', true)
    }
  }, [modals.isTestModalOpen])

  return modals.isTestModalOpen ? <TestModal /> : null
}
