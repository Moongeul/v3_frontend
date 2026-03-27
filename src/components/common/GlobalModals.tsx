'use client'

import React from 'react'
import { useModalStore } from '@/store/modalStore'
import RequiredLoginModal from '@/components/common/modal/RequiredLoginModal'

export default function GlobalModals() {
  const modals = useModalStore((state) => state.modals)
  return <>{modals.isRequiredLoginModalOpen && <RequiredLoginModal />}</>
}
