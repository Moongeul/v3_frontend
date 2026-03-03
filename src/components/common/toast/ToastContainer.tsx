'use client'

import { useContext, useSyncExternalStore } from 'react'
import { AnimatePresence } from 'framer-motion'
import ToastItem from './ToastItem'
import { ToastContext } from '@/components/common/toast/ToastContext'
import { StyledToastContainer, StyledToastMotionWrapper } from '@/styles/common/Toast.styles'

// 항상 서버에서는 false, 클라이언트에서는 true를 반환하도록 설정
const emptySubscribe = () => () => {}
function useIsHydrated() {
  return useSyncExternalStore(
    emptySubscribe,
    () => true, // 클라이언트 값
    () => false // 서버 값
  )
}

export default function ToastContainer() {
  const context = useContext(ToastContext)
  const isHydrated = useIsHydrated()

  // context가 없거나 아직 하이드레이션 전이면 렌더링하지 않음
  if (!context || !isHydrated) return null

  return (
    <StyledToastContainer>
      <AnimatePresence>
        {context.toasts.map((toast) => (
          <StyledToastMotionWrapper layout key={toast.id}>
            <ToastItem toast={toast} onClose={() => context.removeToast(toast.id)} />
          </StyledToastMotionWrapper>
        ))}
      </AnimatePresence>
    </StyledToastContainer>
  )
}
