import styled from '@emotion/styled'
import { css, CSSObject } from '@emotion/react'

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'lg' | 'md' | 'sm'
  category?: 'text' | 'icon'
}

export const Button = styled.button<{
  $variant: ButtonProps['variant']
  $size: ButtonProps['size']
  $category: ButtonProps['category']
  $isActive: boolean
  $width: number | undefined
  $textColor?: string
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

  /* 연필 효과를 입힐 가상 요소 */
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
            border: 1px solid ${outlineColor}; /* 테두리에 연필 효과 적용 */
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
