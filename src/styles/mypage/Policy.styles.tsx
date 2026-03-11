import styled from '@emotion/styled'

export const TableContainer = styled.div`
  width: 100%;
  overflow-x: auto;
  margin: 0 -4px; /* 살짝의 여백 조정 */
`

export const PolicyTable = styled.table<{ $textColor: string; $borderColor: string }>`
  width: 100%;
  border-collapse: collapse;
  /* 폰트 사이즈를 전체적으로 소폭 조정 (기존 14px -> 13px) */
  font-size: 13px;
  line-height: 1.5;
  color: ${({ $textColor }) => $textColor};
  border: 1px solid ${({ $borderColor }) => $borderColor};

  th,
  td {
    padding: 10px 12px;
    border: 1px solid ${({ $borderColor }) => $borderColor};
    text-align: left;
    vertical-align: middle;
    word-break: keep-all; /* 단어 단위 줄바꿈으로 깔끔하게 */
  }

  th {
    background-color: ${({ $borderColor }) => $borderColor}15;
    font-weight: 600;
    /* 항목 컬럼 너비를 최소한으로 줄임 */
    width: 50px;
    white-space: nowrap; /* 항목명이 줄바꿈되지 않도록 설정 */
    font-size: 12px; /* 항목 타이틀은 조금 더 작게 */
  }

  td {
    /* 나머지 공간을 설명 컬럼이 차지 */
    width: auto;
    font-size: 13px;
  }
`
