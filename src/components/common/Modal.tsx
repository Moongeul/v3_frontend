'use client'

import { AnimatePresence } from 'framer-motion'
import { ReactNode } from 'react'
import { Spacing } from '@/components/common/index'
import { StyleContent } from '@/styles/common/Common.styles'
import { baseColor, typography } from '@/styles/theme'
import {
  StyleAnimatedModal,
  StyleGraphicContainer,
  StyleModalFooter,
  StyleModalWrapper,
  StyleOverlay,
} from '@/styles/common/Modal.styles'
import { createPortal } from 'react-dom'

interface ModalProps {
  isOpen: boolean | undefined
  onClose: () => void
  title: string
  content?: string
  graphic?: ReactNode
  footerButtons: ReactNode
}

export default function Modal({ isOpen, onClose, footerButtons, graphic, content, title }: ModalProps) {
  if (typeof window === 'undefined') return null

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <StyleModalWrapper>
          <StyleOverlay initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose} />
          <StyleAnimatedModal
            // 애니메이션 Props
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            // 이벤트 Props
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <StyleContent $typography={typography.titleMd} $textColor={baseColor.gray900}>
              {title}
            </StyleContent>

            {/* Body */}
            {content ? (
              <>
                <Spacing height={4} />
                <StyleContent $typography={typography.bodySm} $textColor={baseColor.gray500}>
                  {content}
                </StyleContent>
              </>
            ) : null}

            {/* Graphic */}
            {graphic ? (
              <StyleGraphicContainer>
                <Spacing height={20} />
                {graphic}
              </StyleGraphicContainer>
            ) : null}

            {/* Footer Buttons */}
            <Spacing height={20} />
            <StyleModalFooter>{footerButtons}</StyleModalFooter>
          </StyleAnimatedModal>
        </StyleModalWrapper>
      )}
    </AnimatePresence>,
    document.body
  )
}
