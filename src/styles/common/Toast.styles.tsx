import styled from '@emotion/styled'
import { motion } from 'framer-motion'
import { Toast } from '@/components/common/toast/ToastContext'

export const StyledToastContainer = styled.div`
  pointer-events: none;
  position: fixed;
  top: 60px;
  left: 50%;
  z-index: 50;
  display: flex;
  transform: translateX(-50%);
  flex-direction: column;
  align-items: center;
  gap: 8px;
`

export const StyledToastMotionWrapper = styled(motion.div)`
  pointer-events: auto;
  display: contents;
`

export const StyledToastItem = styled(motion.div)<{ type: Toast['type'] }>`
  display: flex;
  width: 335px;
  items-align: flex-start;
  justify-content: space-between;
  border-radius: 10px;
  padding: 12px;

  // 테마와 타입에 따른 배경색 처리
  background-color: ${({ theme, type }) => {
    switch (type) {
      case 'success':
        return theme.colors.baseColor.primary500
      case 'error':
        return theme.colors.textFieldError
      case 'interaction':
        return theme.colors.modalFill
    }
  }};
`

export const StyledToastItemContentWrapper = styled.div<{ type: Toast['type'] }>`
  display: flex;
  column-gap: 8px;
  align-items: ${({ type }) => {
    switch (type) {
      case 'success':
        return 'start'
      case 'error':
        return 'start'
      case 'interaction':
        return 'center'
    }
  }};
`

export const StyledToastItemIconBox = styled.span`
  margin-top: 4px;
`

export const StyledToastItemTextBox = styled.div`
  display: flex;
  flex-direction: column;
`

export const StyledToastItemTitle = styled.span`
  // 기존 kr-subtitle-lg 스타일을 여기에 작성하거나 mixin 사용
  font-size: 16px;
  font-weight: 600;
  color: white;
`

const StyledToastItemDescription = styled.span`
  // 기존 kr-body-md 스타일을 여기에 작성하거나 mixin 사용
  font-size: 14px;
  color: white;
`

export const StyledToastItemCloseButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  transition: opacity 0.2s;
  &:hover {
    opacity: 0.75;
  }
`
