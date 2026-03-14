'use client'

import styled from '@emotion/styled'
import { css, CSSObject, SerializedStyles, Theme } from '@emotion/react'

export const HelperText = styled.p<{ $isError?: boolean }>`
  color: ${({ theme, $isError }) => ($isError ? theme.colors.textFieldError : theme.colors.baseColor.gray400)};
  ${({ theme }) => theme.typography.badgeSm as CSSObject}
`
export const CountTextFieldIndicator = styled.p<{ $isError: boolean | undefined }>`
  position: relative;
  z-index: 1; // 텍스트가 연필 효과 위로 오도록
  right: 12px;
  color: ${({ theme, $isError }) => ($isError ? theme.colors.textFieldError : theme.colors.textFieldDefaultText)};
  ${({ theme }) => theme.typography.badgeSm as CSSObject}
`

interface StatusStyleProps {
  theme: Theme
  status: 'default' | 'filled' | 'error'
  isFocused?: boolean
}

function getStatusStyle({ theme, status = 'default', isFocused }: StatusStyleProps): (SerializedStyles | string)[] {
  const styles = {
    default: css`
      border: 1px solid ${theme.colors.textFieldDefaultLine};
      color: ${theme.colors.textFieldDefaultText};
      background-color: ${theme.colors.textFieldFill};
    `,
    filled: css`
      border: 1px solid ${theme.colors.textFieldFilledText};
      color: ${theme.colors.textFieldFilledLine};
      background-color: ${theme.colors.textFieldFill};
    `,
    error: css`
      border: 1px solid ${theme.colors.textFieldError};
      color: ${theme.colors.textFieldError};
      background-color: ${theme.colors.textFieldFill};
    `,
  }

  const focusStyle = isFocused
    ? css`
        border: 1px solid ${theme.colors.textFieldFilledText};
        color: ${theme.colors.textFieldFilledLine};
        background-color: ${theme.colors.textFieldFill};
      `
    : ''

  return [styles[status] || styles.default, focusStyle]
}

export const TextInputWrapper = styled.div<{ width?: 'fit' | 'full' | string }>`
  display: flex;
  column-gap: 8px;
  align-items: center;

  /* props에 따른 width 결정 로직 */
  width: ${({ width }) => {
    if (width === 'fit') return 'fit-content'
    if (width === 'full') return '100%'
    return width || '100%' // 기본값은 100%
  }};
`
export const TextFieldWrapper = styled.div<{
  $status: 'default' | 'filled' | 'error'
  $isFocused?: boolean
  $width?: number
  $height?: number
}>`
  display: flex;
  flex-direction: column;
  row-gap: 4px;
  justify-content: center;
  position: relative;
  width: ${({ $width }) => ($width ? `fit-content` : `100%`)};
  height: ${({ $height }) => ($height ? `${$height}px` : `100%`)};
  border-radius: 6px;
  overflow: hidden;

  /* 연필 효과를 위한 가상 요소 (Border 역할) */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 0;

    border: 1px solid black;
    border-radius: 6px;

    /* 연필 효과 필터 적용 */
    filter: url('#pencil-texture');
    pointer-events: none;

    ${({ theme, $status, $isFocused }) =>
      getStatusStyle({
        theme: theme,
        status: $status,
        isFocused: $isFocused,
      })}
  }
`
export const TextFieldContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  column-gap: 8px;
  padding: 8px 12px;
`

export const Input = styled.input<{
  $status: 'default' | 'filled' | 'error'
  $width: number | undefined
}>`
  /* Chrome, Safari, Edge, Opera에서 화살표 제거 */
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox에서 화살표 제거 */
  &[type='number'] {
    -moz-appearance: textfield;
  }
  width: ${({ $width }) => ($width ? `${$width}px` : `100%`)};
  background: ${({ theme }) => theme.colors.textFieldFill};
  border: ${({ theme }) => theme.colors.textFieldDefaultLine};
  outline: none;
  position: relative;
  z-index: 1; // 텍스트가 연필 효과 위로 오도록
  color: ${({ theme, $status }) =>
    $status === 'error'
      ? theme.colors.textFieldError
      : $status === 'filled'
        ? theme.colors.textFieldFilledLine
        : theme.colors.textFieldDefaultText};

  ${({ theme }) => theme.typography.subtitleMd as CSSObject}

  &:focus {
    outline: none;
  }
`
export const TextAreaContainer = styled.div<{ $status: 'default' | 'filled' | 'error'; $isFocused?: boolean }>`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  row-gap: 8px;
  width: 100%;
  height: 90px;
  border-radius: 6px;
  overflow: hidden;
  padding: 8px 12px;

  /* 연필 효과를 위한 가상 요소 (Border 역할) */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 0;

    border: 1px solid black;
    border-radius: 6px;

    /* 연필 효과 필터 적용 */
    filter: url('#pencil-texture');
    pointer-events: none;

    ${({ theme, $status, $isFocused }) =>
      getStatusStyle({
        theme: theme,
        status: $status,
        isFocused: $isFocused,
      })}
  }
`

export const TextArea = styled.textarea<{ $status: 'default' | 'filled' | 'error' }>`
  width: 100%;
  height: 52px;
  background: ${({ theme }) => theme.colors.textFieldFill};
  border: ${({ theme }) => theme.colors.textFieldDefaultLine};
  outline: none;
  position: relative;
  z-index: 1; // 텍스트가 연필 효과 위로 오도록
  color: ${({ theme, $status }) =>
    $status === 'error'
      ? theme.colors.textFieldError
      : $status === 'filled'
        ? theme.colors.textFieldFilledLine
        : theme.colors.textFieldDefaultText};

  ${({ theme }) => theme.typography.subtitleMd as CSSObject}

  &:focus {
    outline: none;
  }
`
export const CountTextAreaIndicator = styled.p<{ $isError: boolean | undefined }>`
  position: relative;
  z-index: 1; // 텍스트가 연필 효과 위로 오도록
  align-self: flex-end;
  color: ${({ theme, $isError }) => ($isError ? theme.colors.textFieldError : theme.colors.textFieldDefaultText)};
  ${({ theme }) => theme.typography.badgeSm as CSSObject}
`
