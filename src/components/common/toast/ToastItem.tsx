'use client'

import { useEffect } from 'react'
import { motion } from 'framer-motion'

import { Toast } from '@/components/common/toast/ToastContext'
import { AlertErrorIcon, AlertSuccessIcon, WhiteXIcon } from '@/assets/svgComponents'
import { useTheme } from '@emotion/react'
import {
  StyledToastItem,
  StyledToastItemContentWrapper,
  StyledToastItemIconBox,
  StyledToastItemTextBox,
} from '@/styles/common/Toast.styles'
import { Label } from '@/components/common'
import { typography } from '@/styles/theme'

interface ToastItemProps {
  toast: Toast
  onClose: () => void
}

export default function ToastItem({ toast, onClose }: ToastItemProps) {
  const theme = useTheme()
  useEffect(() => {
    if (!toast.duration || toast.duration <= 0) return

    const timer = setTimeout(onClose, toast.duration)
    return () => clearTimeout(timer)
  }, [toast.duration, onClose])

  const icon = {
    success: <AlertSuccessIcon width={24} height={24} />,
    error: <AlertErrorIcon width={24} height={24} />,
  }[toast.type]

  return (
    <StyledToastItem
      type={toast.type}
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 100 }}
      transition={{ type: 'tween', duration: 0.3, ease: 'easeOut' }}
      role="alert"
    >
      <StyledToastItemContentWrapper>
        <StyledToastItemIconBox>{icon}</StyledToastItemIconBox>

        <StyledToastItemTextBox>
          <Label labelStyle={typography.titleSm} labelColor={theme.colors.baseColor.lightYellow50}>
            {toast.title}
          </Label>

          {toast.description && (
            <Label labelStyle={typography.bodySm} labelColor={theme.colors.baseColor.lightYellow300}>
              {toast.description}
            </Label>
          )}
        </StyledToastItemTextBox>
      </StyledToastItemContentWrapper>

      <button onClick={onClose} className="transition-opacity hover:opacity-75">
        <WhiteXIcon width={24} height={24} />
      </button>
    </StyledToastItem>
  )
}
