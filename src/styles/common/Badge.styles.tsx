import styled from '@emotion/styled'
import { CSSObject } from '@emotion/react'

export const Badge = styled.div<{
  $backgroundColor: string | undefined
  $textColor: string | undefined
}>`
  display: inline-flex;
  align-items: center;
  height: 20px;
  padding: 0 6px;
  position: relative;
  z-index: 1;
  transition: all 0.2s ease-in-out;
  background-color: transparent;

  color: ${({ theme, $textColor }) => ($textColor ? $textColor : theme.colors.background)};
  ${({ theme }) => theme.typography.badgeSm as CSSObject};

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
    border-radius: 4px;

    background: ${({ $backgroundColor }) => $backgroundColor};
  }
`
