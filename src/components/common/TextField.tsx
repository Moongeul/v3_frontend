import * as Style from '@/styles/common/TextField.styles'
import { ChangeEventHandler, JSX, ReactNode } from 'react'
import Spacing from '@/components/common/Spacing'
import { PencilSketchEffect } from '@/styles/common/Common.styles'

interface TextFieldProps {
  value: string
  onChange: ChangeEventHandler<HTMLInputElement>
  status: 'default' | 'filled' | 'error'
  label?: string
  helperText?: string
  isRequired?: boolean
  isFocused?: boolean
  maxLength?: number
  isCountIndicator?: boolean
  rightElement?: ReactNode
}
export default function TextField({
  status = 'default',
  isFocused = false,
  label,
  isRequired = false,
  isCountIndicator = false,
  value,
  onChange,
  helperText,
  maxLength,
  rightElement, //버튼
}: TextFieldProps): JSX.Element {
  return (
    <>
      <PencilSketchEffect />
      {label && (
        <>
          <Style.StyledLabelRow>
            <Style.FieldLabel>{label}</Style.FieldLabel>

            {isRequired && <Style.RequiredMark>*</Style.RequiredMark>}
          </Style.StyledLabelRow>
          <Spacing height={8} />
        </>
      )}

      <Style.TextFieldWrapper>
        <Style.TextFieldContainer $isFocused={isFocused} $status={status}>
          <Style.Input $status={status} onChange={onChange} value={value}></Style.Input>
          {isCountIndicator && (
            <CountIndicator isError={status === 'error'} maxLength={maxLength} valueLength={value.length} />
          )}
        </Style.TextFieldContainer>
        {rightElement && rightElement}
      </Style.TextFieldWrapper>

      {helperText && (
        <>
          <Spacing height={8} />
          <Style.HelperText $isError={status === 'error'}>{helperText}</Style.HelperText>
        </>
      )}
    </>
  )
}

function CountIndicator({
  maxLength,
  valueLength,
  isError,
}: {
  maxLength?: number
  valueLength?: number
  isError?: boolean
}) {
  return (
    <Style.CountIndicator $isError={isError}>
      {valueLength}/{maxLength}
    </Style.CountIndicator>
  )
}
