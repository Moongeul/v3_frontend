'use client'

import * as Style from '@/styles/common/TextInput.styles'
import { ChangeEventHandler, JSX, KeyboardEventHandler, ReactNode, useState } from 'react'
import Spacing from '@/components/common/Spacing'
import { PencilSketchEffect } from '@/styles/common/Common.styles'

interface TextFieldProps {
  textType?: 'textField' | 'textArea'
  inputType?: 'number' | 'text'
  placeholder?: string
  value?: string | number
  onChange?: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>
  onKeyDown?: KeyboardEventHandler<HTMLInputElement | HTMLTextAreaElement> // 2. Props 정의 추가
  onClick?: () => void
  status?: 'default' | 'filled' | 'error'
  helperText?: string
  buttonElement?: ReactNode
  leftElement?: ReactNode
  rightElement?: ReactNode
  topElement?: ReactNode
  width?: number
  height?: number
  maxLength?: number
  wrapperWidth?: 'fit' | 'full' | string
}
export default function TextInput({
  textType = 'textField',
  inputType = 'text',
  placeholder,
  value,
  onChange,
  onKeyDown,
  onClick,
  status = 'default',
  helperText,
  buttonElement,
  leftElement,
  rightElement,
  topElement,
  width,
  wrapperWidth,
  height,
  maxLength,
}: TextFieldProps): JSX.Element {
  const [isFocused, setIsFocused] = useState(false)

  const currentStatus = status === 'error' ? 'error' : isFocused ? 'filled' : 'default'

  const handleFocus = () => setIsFocused(true)
  const handleBlur = () => setIsFocused(false)

  return (
    <>
      <PencilSketchEffect />
      <Style.TextInputWrapper width={wrapperWidth}>
        {textType === 'textField' ? (
          <Style.TextFieldWrapper $height={height} $width={width} $isFocused={isFocused} $status={status}>
            {topElement && topElement}
            <Style.TextFieldContainer>
              {leftElement && leftElement}
              <Style.Input
                $width={width}
                type={inputType}
                onFocus={handleFocus}
                onBlur={handleBlur}
                onKeyDown={onKeyDown}
                onClick={onClick}
                placeholder={placeholder}
                $status={currentStatus}
                onChange={onChange}
                value={value}
                maxLength={maxLength}
              />
              {rightElement && rightElement}
            </Style.TextFieldContainer>
          </Style.TextFieldWrapper>
        ) : (
          <Style.TextAreaContainer $isFocused={isFocused} $status={status}>
            <Style.TextArea
              onFocus={handleFocus}
              onBlur={handleBlur}
              onKeyDown={onKeyDown}
              placeholder={placeholder}
              $status={currentStatus}
              onChange={onChange}
              value={value}
            />
            {rightElement && rightElement}
          </Style.TextAreaContainer>
        )}

        {buttonElement && buttonElement}
      </Style.TextInputWrapper>

      {helperText && (
        <>
          <Spacing height={8} />

          <Style.HelperText $isError={status === 'error'}>{helperText}</Style.HelperText>
        </>
      )}
    </>
  )
}
