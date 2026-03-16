import styled from '@emotion/styled'
import { CSSObject } from '@emotion/react'

export const StyledOptionMenu = styled.div`
  padding: 12px;

  /* 수정: 부모(Icon)를 기준으로 절대 위치 지정 */
  position: absolute;
  top: 100%; /* 아이콘 바로 아래 */
  right: 0; /* 오른쪽 정렬 */
  margin-top: 8px; /* 아이콘과의 간격 */

  z-index: 10; /* 다른 요소보다 위에 보이도록 상향 */
  width: 116px;
  display: flex;
  flex-direction: column;
  row-gap: 4px;

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
    border: 1px solid ${({ theme }) => theme.colors.textFieldDefaultLine};
    border-radius: 6px;
    background-color: ${({ theme }) => theme.colors.textFieldFill};
  }
`
export const StyledOptionMenuItem = styled.div<{ $color: string }>`
  padding: 8px 0;
  cursor: pointer;
  ${({ theme }) => theme.typography.buttonMd as CSSObject};
  color: ${({ theme, $color }) => ($color ? $color : theme.colors.textFieldDefaultText)};
`
