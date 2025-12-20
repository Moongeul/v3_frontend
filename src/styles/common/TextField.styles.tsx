'use client'

import styled from '@emotion/styled'
import { css, SerializedStyles, Theme } from '@emotion/react'

export const FieldLabel = styled.div`
  color: ${({ theme }) => theme.colors.headerText};
  ${({ theme }) => theme.typography.subtitleMd}
`
export const RequiredMark = styled.span`
  color: ${({ theme }) => theme.colors.baseColor.secondary500};
  ${({ theme }) => theme.typography.subtitleMd}
`
export const HelperText = styled.p<{ $isError?: boolean }>`
  color: ${({ theme, $isError }) => ($isError ? theme.colors.textFieldError : theme.colors.baseColor.gray400)};
  ${({ theme }) => theme.typography.badgeSm}
`
export const CountIndicator = styled.p<{ $isError?: boolean }>`
  position: relative;
  z-index: 1; // 텍스트가 연필 효과 위로 오도록
  right: 12px;
  color: ${({ theme, $isError }) => ($isError ? theme.colors.textFieldError : theme.colors.textFieldDefaultText)};
  ${({ theme }) => theme.typography.badgeSm}
`
export const StyledLabelRow = styled.div`
  display: flex;
  row-gap: 4px;
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
      background-color: ${theme.colors.background};
    `,
    filled: css`
      border: 1px solid ${theme.colors.textFieldFilledText};
      color: ${theme.colors.textFieldFilledLine};
      background-color: ${theme.colors.background};
    `,
    error: css`
      border: 1px solid ${theme.colors.textFieldError};
      color: ${theme.colors.textFieldError};
      background-color: ${theme.colors.background};
    `,
  }

  const focusStyle = isFocused
    ? css`
        outline: 1px solid ${theme.colors.textFieldFilledText};
        border-color: ${theme.colors.textFieldFilledText};
        color: ${theme.colors.textFieldFilledLine};
      `
    : ''

  return [styles[status] || styles.default, focusStyle]
}

export const TextFieldWrapper = styled.div`
  display: flex;
  column-gap: 8px;
  align-items: center;
`
export const TextFieldContainer = styled.div<{ $status: 'default' | 'filled' | 'error'; $isFocused?: boolean }>`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  column-gap: 8px;
  width: 100%;
  height: 48px;
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

    ${({ theme, $status }) =>
      getStatusStyle({
        theme: theme,
        status: $status,
      })}
  }
`

export const Input = styled.input<{ $status: 'default' | 'filled' | 'error' }>`
  width: 100%;
  padding: 8px 12px;
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

  ${({ theme }) => theme.typography.subtitleMd}

  &:focus {
    outline: none;
  }
`
