import styled from '@emotion/styled'
import { CSSObject } from '@emotion/react'

export const StyleTabContainer = styled.div`
  display: flex;
`

export const StyleTabButton = styled.button<{ $selectedButton: boolean }>`
  padding: 8px 0;
  width: 100%;
  color: ${({ theme, $selectedButton }) =>
    $selectedButton ? theme.colors.buttonActivePrimary : theme.colors.buttonDefaultPrimary};
  position: relative;
  z-index: 1;
  transition: all 0.2s ease-in-out;
  background-color: transparent;

  ${({ theme }) => theme.typography.badgeMd as CSSObject};

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

    /* 방법 1: 속성 전체를 조건부로 처리 (권장) */
    ${({ theme, $selectedButton }) =>
      $selectedButton ? `border-bottom: 2px solid ${theme.colors.buttonActivePrimary};` : 'border-bottom: none;'}
  }
`
