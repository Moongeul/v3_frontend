'use client'
import { useEffect } from 'react'
import Cookies from 'js-cookie'
import { useModalStore } from '@/store/modalStore'
import TestModal from '@/components/common/modal/TestModal'

export default function HomeModal() {
  const { setModal, modals } = useModalStore((state) => state)

  useEffect(() => {
    const isReadingTaste = Cookies.get('isReadingTaste')

    // 쿠키가 없으면 (테스트 미완료) 모달 열기
    if (!isReadingTaste) {
      setModal('isTestModalOpen', true)
    }
  }, []) // 빈 배열: 마운트 시 1번만 실행

  return modals.isTestModalOpen ? <TestModal /> : null
}
