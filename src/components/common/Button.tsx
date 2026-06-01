// components/common/Button.tsx
'use client'

import React, { ReactNode } from 'react'
import { PencilSketchEffect } from '@/styles/common/Common.styles'
import * as Style from '@/styles/common/Button.styles'

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'lg' | 'md' | 'sm'
  category?: 'text' | 'icon'
  width?: number
  isActive?: boolean
  children?: ReactNode
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
  leftIcon?: ReactNode
  rightIcon?: ReactNode
  disabled?: boolean
  buttonType?: 'button' | 'submit'
  textColor?: string
  isLoading?: boolean // ✅ 추가
  loadingText?: string // ✅ 선택적: 로딩 중 텍스트 (없으면 스피너만)
}

const Button = ({
  children,
  variant = 'primary',
  textColor,
  size = 'lg',
  category = 'text',
  isActive = true,
  onClick,
  leftIcon,
  rightIcon,
  disabled,
  buttonType = 'button',
  width,
  isLoading = false,
  loadingText,
}: ButtonProps) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!disabled && !isLoading && onClick) {
      // ✅ 로딩 중엔 클릭 무시
      onClick(e)
    }
  }

  return (
    <>
      <PencilSketchEffect />
      <Style.Button
        type={buttonType}
        disabled={disabled || isLoading} // ✅ 로딩 중엔 disabled 처리
        onClick={handleClick}
        $variant={variant}
        $size={size}
        $category={category}
        $isActive={isActive}
        $width={width}
        $textColor={textColor}
        $isLoading={isLoading} // ✅ styled-component로 전달
      >
        {isLoading ? (
          // ✅ 로딩 상태 UI
          <>
            <Style.Spinner $size={size} />
            {loadingText && <span>{loadingText}</span>}
          </>
        ) : (
          // ✅ 기존 UI 그대로
          <>
            {leftIcon && <span>{leftIcon}</span>}
            {category === 'text' && children}
            {category === 'icon' && (children || leftIcon || rightIcon)}
            {rightIcon && category === 'text' && <span>{rightIcon}</span>}
          </>
        )}
      </Style.Button>
    </>
  )
}

export default Button
