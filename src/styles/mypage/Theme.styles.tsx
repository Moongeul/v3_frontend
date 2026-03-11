import styled from '@emotion/styled'
import { CSSObject } from '@emotion/react'

export const StyledThemeButtonList = styled.div`
  display: flex;
  column-gap: 12px;
`

export const StyleThemeButton = styled.div<{ $isActive: boolean }>`
  align-items: center;
  display: flex;
  flex-direction: column;
  row-gap: 12px;
  padding: 20px;
  width: 100%;

  position: relative;
  z-index: 1;

  transition: all 0.2s ease-in-out;
  background-color: transparent;

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
    border-radius: 12px;
    border: 1px solid
      ${({ theme, $isActive }) => ($isActive ? theme.colors.buttonActivePrimary : theme.colors.iconStarFilled)};
    background-color: ${({ theme, $isActive }) =>
      $isActive ? theme.colors.buttonActiveSecondary : theme.colors.textFieldFill};
  }

  color: ${({ theme, $isActive }) => ($isActive ? theme.colors.buttonTextSecondary : theme.colors.buttonActiveGhost)};
  ${({ theme }) => theme.typography.buttonMd as CSSObject};
`
