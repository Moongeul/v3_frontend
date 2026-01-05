'use client'

import { ReactNode } from 'react'
import { PencilSketchEffect } from '@/styles/common/Common.styles'

import * as Style from '@/styles/common/Button.styles'

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'lg' | 'md' | 'sm'
  category?: 'text' | 'icon'
  width?: number
  isActive?: boolean
  children?: ReactNode
  onClick?: (e?: MouseEvent<HTMLButtonElement, MouseEvent> | undefined) => void
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
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (buttonType === 'button') {
      e.preventDefault()
    }
    if (!disabled && onClick) onClick()
  }

  return (
    <>
      <PencilSketchEffect />
      <Style.Button
        type={buttonType}
        disabled={disabled}
        onClick={handleClick}
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
