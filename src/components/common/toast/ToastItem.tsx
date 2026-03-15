'use client'

import { useEffect } from 'react'

import { Toast } from '@/components/common/toast/ToastContext'
import { AlertErrorIcon, AlertSuccessIcon } from '@/assets/svgComponents'
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

  const getIcon = () => {
    if (toast.type === 'interaction') {
      return toast.icon // interaction 타입은 주입받은 icon 사용
    }

    return {
      success: <AlertSuccessIcon width={24} height={24} />,
      error: <AlertErrorIcon width={24} height={24} />,
    }[toast.type]
  }

  return (
    <StyledToastItem
      type={toast.type}
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 100 }}
      transition={{ type: 'tween', duration: 0.3, ease: 'easeOut' }}
      role="alert"
    >
      <StyledToastItemContentWrapper type={toast.type}>
        <StyledToastItemIconBox>{getIcon()}</StyledToastItemIconBox>

        <StyledToastItemTextBox>
          <Label
            labelStyle={typography.titleSm}
            labelColor={toast.type === 'interaction' ? theme.colors.headerText : theme.colors.baseColor.lightYellow50}
          >
            {toast.title}
          </Label>

          {toast.description && (
            <Label
              labelStyle={typography.bodySm}
              labelColor={
                toast.type === 'interaction' ? theme.colors.textFieldFilledLine : theme.colors.baseColor.lightYellow300
              }
            >
              {toast.description}
            </Label>
          )}
        </StyledToastItemTextBox>
      </StyledToastItemContentWrapper>
    </StyledToastItem>
  )
}
