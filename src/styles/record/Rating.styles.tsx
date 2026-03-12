import styled from '@emotion/styled'
import { CSSObject } from '@emotion/react'

export const StyledRatingItem = styled.div<{ $color?: string; $width?: number | string }>`
  display: flex;
  justify-content: space-between;
  padding: 8px;

  position: relative;
  z-index: 1;

  /* $width가 숫자일 경우 px를 붙여주고, 없으면 100%로 설정 */
  width: ${({ $width }) => ($width ? (typeof $width === 'number' ? `${$width}px` : $width) : '100%')};

  transition: all 0.2s ease-in-out;
  background-color: transparent;

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
    border-radius: 4px;
    border: 1px solid ${({ $color }) => ($color ? $color : '#1ECB83')};
    background-color: ${({ $color }) => ($color ? $color : '#1ECB83')};
  }

  color: ${({ theme }) => theme.colors.background};
  ${({ theme }) => theme.typography.badgeMd as CSSObject};
`
