import styled from '@emotion/styled'
import { CSSObject } from '@emotion/react'

export const StyleResultCard = styled.div<{ $backgroundColor: string }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border-radius: 12px;
  width: 100%;
  background-color: ${({ $backgroundColor }) => $backgroundColor};
`

export const StyleResultDescription = styled.div`
  border-radius: 16px;
`

// 설명 문구 리스트
export const StyleDescriptionList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 2px; // 리스트 아이템 간 간격
`

// 각 리스트 항목
export const StyleDescriptionItem = styled.li`
  display: flex;
  align-items: flex-start;
  gap: 4px;
  ${({ theme }) => theme.typography.subtitleSm as CSSObject}
  color: ${({ theme }) => theme.colors.baseColor.gray900};
  word-break: keep-all; // 한글 단어가 중간에 끊기지 않게 설정

  // 불렛 포인트(점) 디자인
  &::before {
    content: '•';
    font-weight: bold;
    font-size: 18px;
  }
`
export const StyleResultSummaryCard = styled.div<{ $backgroundColor: string }>`
  border-radius: 12px;
  padding: 16px 12px;
  width: 100%;
  align-items: center;
  display: flex;
  flex-direction: column;
  background-color: ${({ $backgroundColor }) => $backgroundColor};
`
export const StyleResultSummaryCardWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  width: 100%;
  gap: 14px;
`
/////////////////////////////////////////////////////////////////////////////////////////////

export const StyleResultBottomButtonContainer = styled.div`
  display: flex;
  position: fixed;
  bottom: 0;

  /* 1. 화면 중앙 정렬을 위한 설정 */
  left: 50%;
  transform: translateX(-50%);

  /* 2. 콘텐츠 너비와 동일하게 설정 (파란색 박스의 max-width와 맞추세요) */
  width: 100%;

  padding: 12px 20px;
  column-gap: 12px;
  background-color: ${({ theme }) => theme.colors.background};
  box-sizing: border-box;
  z-index: 100;
`
export const ShareButton = styled.div`
  flex: 1;
  min-width: 0; /* 중요: 내부 콘텐츠가 버튼을 늘리는 것을 방지 */
`
