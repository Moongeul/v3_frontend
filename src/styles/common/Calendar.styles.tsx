import styled from '@emotion/styled'
import { CSSObject } from '@emotion/react'

export const DateInputBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.headerText}
  ${({ theme }) => theme.typography.subtitleSm as CSSObject}
  background-color: #fff;

  &:hover {
    border-color: #00c73c; // 강조색
  }
`

export const CalendarWrapper = styled.div`
  position: absolute;
  z-index: 10;
  background: white;
  border: 1px solid #eee;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  margin-top: 8px;
  padding: 8px;

  /* react-day-picker의 내부 색상 커스텀 */
  .rdp-button:hover:not([disabled]):not(.rdp-day_selected) {
    background-color: #f0fff4;
    color: #00c73c;
  }
  .rdp-day_selected {
    background-color: #00c73c;
    font-weight: bold;
  }
`
