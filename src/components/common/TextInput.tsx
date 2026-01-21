'use client'

import * as Style from '@/styles/common/TextInput.styles'
import { ChangeEventHandler, JSX, ReactNode, useState } from 'react'
import Spacing from '@/components/common/Spacing'
import { PencilSketchEffect } from '@/styles/common/Common.styles'

interface TextFieldProps {
  textType?: 'textField' | 'textArea'
  inputType?: 'number' | 'text'
  placeholder?: string
  value?: string | number
  onChange?: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>
  onClick?: () => void
  status?: 'default' | 'filled' | 'error'
  helperText?: string
  buttonElement?: ReactNode
  leftElement?: ReactNode
  rightElement?: ReactNode
  topElement?: ReactNode
  width?: number
  height?: number
}
export default function TextInput({
  textType = 'textField',
  inputType = 'text',
  placeholder,
  value,
  onChange,
  onClick,
  status = 'default',
  helperText,
  buttonElement,
  leftElement,
  rightElement,
  topElement,
  width,
  height,
}: TextFieldProps): JSX.Element {
  const [isFocused, setIsFocused] = useState(false)

  const currentStatus = status === 'error' ? 'error' : isFocused ? 'filled' : 'default'

  const handleFocus = () => setIsFocused(true)
  const handleBlur = () => setIsFocused(false)

  return (
    <>
      <PencilSketchEffect />
      <Style.TextInputWrapper>
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
                onClick={onClick}
                placeholder={placeholder}
                $status={currentStatus}
                onChange={onChange}
                value={value}
              />
              {rightElement && rightElement}
            </Style.TextFieldContainer>
          </Style.TextFieldWrapper>
        ) : (
          <Style.TextAreaContainer $isFocused={isFocused} $status={status}>
            <Style.TextArea
              onFocus={handleFocus}
              onBlur={handleBlur}
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
