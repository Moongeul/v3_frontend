// styles/common/Button.styles.ts
import styled from '@emotion/styled'
import { css, CSSObject, keyframes } from '@emotion/react'

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'lg' | 'md' | 'sm'
  category?: 'text' | 'icon'
}

const spin = keyframes`
    from { transform: rotate(0deg); }
    to   { transform: rotate(360deg); }
`

export const Spinner = styled.span<{ $size: 'lg' | 'md' | 'sm' }>`
  display: inline-block;
  border-radius: 50%;
  border: 2px solid currentColor;
  border-top-color: transparent;
  animation: ${spin} 0.7s linear infinite;
  flex-shrink: 0; /* ✅ 추가: 부모 flex에서 찌그러지지 않도록 */

  ${({ $size }) => {
    switch ($size) {
      case 'lg':
        return css`
          width: 18px;
          height: 18px;
        `
      case 'md':
        return css`
          width: 15px;
          height: 15px;
        `
      case 'sm':
        return css`
          width: 12px;
          height: 12px;
        `
    }
  }}
`

export const Button = styled.button<{
  $variant: ButtonProps['variant']
  $size: ButtonProps['size']
  $category: ButtonProps['category']
  $isActive: boolean
  $width: number | undefined
  $textColor?: string
  $isLoading?: boolean
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  width: ${({ $width }) => ($width ? `${$width}px` : `100%`)};
  position: relative;
  z-index: 1;
  background-color: transparent;
  flex-shrink: 0;
  white-space: nowrap;
  column-gap: 8px; /* ✅ 스피너와 텍스트 사이 간격 (size별 override는 아래에서) */

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
    filter: url('#pencil-texture');
    pointer-events: none;
    box-sizing: border-box;
  }

  ${({ theme }) => theme.typography.buttonMd as CSSObject};

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }

  /* ✅ 로딩 중엔 cursor: wait으로 override */
  ${({ $isLoading }) =>
    $isLoading &&
    css`
      cursor: wait;
    `}

  ${({ $size, $category, $width }) => {
    const isIcon = $category === 'icon'
    let borderRadius = '8px'
    let height = '52px'

    if ($size === 'md') {
      borderRadius = '6px'
      height = '40px'
    }
    if ($size === 'sm') {
      borderRadius = '4px'
      height = '36px'
    }

    const finalWidth = $width ? `${$width}px` : isIcon ? height : '100%'

    return css`
      height: ${height};
      width: ${finalWidth};
      padding: ${isIcon ? '0' : '8px 16px'};
      column-gap: ${$size === 'sm' ? '4px' : '8px'};

      &::before {
        border-radius: ${borderRadius};
      }
    `
  }}

    ${({ theme, $variant, $isActive, $textColor }) => {
    switch ($variant) {
      case 'primary':
        const primaryBg = $isActive ? theme.colors.buttonActivePrimary : theme.colors.buttonDefaultPrimary
        return css`
          color: ${theme.colors.baseColor.lightYellow50};
          &::before {
            background-color: ${primaryBg};
            border: none;
          }
        `
      case 'secondary':
        const secondaryBg = $isActive ? theme.colors.buttonActiveSecondary : theme.colors.buttonDefaultSecondary
        const secondaryColor = $isActive ? theme.colors.buttonTextSecondary : theme.colors.rating
        return css`
          color: ${secondaryColor};
          &::before {
            background-color: ${secondaryBg};
            border: none;
          }
        `
      case 'outline':
        const outlineColor = $isActive ? theme.colors.buttonActivePrimary : theme.colors.buttonDefaultPrimary
        return css`
          color: ${outlineColor};
          &::before {
            background-color: transparent;
            border: 1px solid ${outlineColor};
          }
        `
      case 'ghost':
        const ghostColor = !$isActive
          ? theme.colors.buttonDefaultPrimary
          : $textColor
            ? $textColor
            : theme.colors.buttonActiveGhost
        return css`
          color: ${ghostColor};
          &::before {
            background-color: transparent;
            border: none;
          }
        `
      default:
        return css``
    }
  }}
`

// 아래는 기존 그대로 유지
export const StickyRoot = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  z-index: 999;
  padding-bottom: env(safe-area-inset-bottom);
`

export const ActionArea = styled.button`
  all: unset;
  box-sizing: border-box;
  width: 100%;
  height: 106px;
  position: relative;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;

  ${({ theme }) => theme.typography.buttonMd as CSSObject}
  color: ${({ theme }) => theme.colors.baseColor.lightYellow50};

  padding: 0;
`

export const VisualOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;

  svg {
    width: 100%;
    height: 100%;
    display: block;
  }
`
