'use client'

import React, { ReactNode } from 'react' // React 추가
import { PencilSketchEffect } from '@/styles/common/Common.styles'
import * as Style from '@/styles/common/Button.styles'

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'lg' | 'md' | 'sm'
  category?: 'text' | 'icon'
  width?: number
  isActive?: boolean
  children?: ReactNode
  // 타입을 React.MouseEvent로 변경하고 선택적(?)으로 수정
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
  leftIcon?: ReactNode
  rightIcon?: ReactNode
  disabled?: boolean
  buttonType?: 'button' | 'submit'
  textColor?: string
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
}: ButtonProps) => {
  // 핸들러 내부에서도 타입을 맞춰줍니다.
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (buttonType === 'button') {
      // e.preventDefault()는 여기서 멈추면 안 될 때가 있으므로 필요에 따라 사용
    }

    if (!disabled && onClick) {
      onClick(e)
    }
  }

  return (
    <>
      <PencilSketchEffect />
      <Style.Button
        type={buttonType}
        disabled={disabled}
        onClick={handleClick} // 이제 타입 에러가 발생하지 않습니다.
        $variant={variant}
        $size={size}
        $category={category}
        $isActive={isActive}
        $width={width}
        $textColor={textColor}
      >
        {leftIcon && <span>{leftIcon}</span>}
        {category === 'text' && children}
        {category === 'icon' && (children || leftIcon || rightIcon)}
        {rightIcon && category === 'text' && <span>{rightIcon}</span>}
      </Style.Button>
    </>
  )
}

export default Button
