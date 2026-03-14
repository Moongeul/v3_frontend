import styled from '@emotion/styled'
import { CSSObject } from '@emotion/react'
import 'react-day-picker/dist/style.css' // 이 줄을 추가하세요!

export const DateInputBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.headerText} ${({ theme }) => theme.typography.subtitleSm as CSSObject};
`
export const CalendarWrapper = styled.div`
  position: absolute;
  z-index: 10;
  background: ${({ theme }) => theme.colors.modalFill};
  border: 1px solid ${({ theme }) => theme.colors.iconStarFilled};
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  margin-top: 8px;
  padding: 16px;

  /* 1. 테이블 레이아웃 고정: 이게 핵심입니다. */
  .rdp-table {
    display: table;
    table-layout: fixed; /* 각 열의 너비를 균등하게 강제 */
    border-collapse: separate;
    border-spacing: 0;
    width: calc(36px * 7); /* 36px * 7일 */
  }

  /* 2. 모든 셀(요일, 날짜) 크기 고정 */
  .rdp-head_cell,
  .rdp-cell {
    width: 36px !important;
    height: 36px !important;
    padding: 0 !important;
    text-align: center;
    vertical-align: middle;
    box-sizing: border-box;
  }

  /* 3. 실제 클릭되는 버튼 크기 고정 */
  .rdp-button {
    width: 36px !important;
    height: 36px !important;
    max-width: 36px !important;
    max-height: 36px !important;

    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 8px;
    background: transparent;
    border: none;
    cursor: pointer;
    margin: 0 auto; /* 셀 중앙 정렬 */
    ${({ theme }) => theme.typography.buttonMd as CSSObject};
  }

  /* 4. 선택된 날짜 배경색 유지 */
  .rdp-day_selected {
    background-color: #00c73c !important;
    color: white !important;
    border-radius: 8px;
  }

  .rdp-button:hover:not([disabled]):not(.rdp-day_selected) {
    background-color: #f0fff4;
    color: #00c73c;
  }

  /* (참고) 월 이동 화살표 등 내비게이션 정렬 */
  .rdp-nav {
    display: flex;
    justify-content: space-between;
  }

  /* 화살표 내비게이션 영역 */
  .rdp-nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 8px; /* 달력 본문과의 간격 */
  }

  /* 화살표 버튼 커스텀 */
  .rdp-nav_button {
    background: ${({ theme }) => theme.colors.modalFill} !important;
    border: 1px solid ${({ theme }) => theme.colors.iconStarFilled};
    border-radius: 8px;
    width: 32px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    color: ${({ theme }) => theme.colors.headerText}; /* 화살표 색상 */
    opacity: 1; /* 기본 투명도 해제 */
  }

  .rdp-nav_button:hover {
    background: ${({ theme }) => theme.colors.iconStarFilled} !important;
    color: white;
  }

  /* 화살표 아이콘(SVG) 크기나 색상을 직접 제어하고 싶을 때 */
  .rdp-nav_button svg {
    width: 20px;
    height: 20px;
    fill: currentColor; /* 상위 color 값을 따라감 */
  }
`
