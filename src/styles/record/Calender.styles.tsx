import styled from '@emotion/styled'
import { CSSObject } from '@emotion/react'

// 간단한 그리드 스타일링
export const StyledCalendarContainer = styled.div``

export const StyledCalendarHeader = styled.h2`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`

export const StyledCalendarGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr); // 7열 고정
  gap: 8px;
`

export const StyledDayHeader = styled.div`
  text-align: center;
  font-weight: bold;
  padding-bottom: 8px;
  font-size: 12px;
  color: #888;
`

export const StyledCalendarItem = styled.div<{ imageUrl?: string; isCurrentMonth?: boolean }>`
  border-radius: 4px;
  width: 100%;
  height: 66px;
  position: relative;
  overflow: hidden;
  transition: all 0.2s ease;

  /* 🌟 핵심: 이미지 유무에 따른 레이아웃 변경 */
  display: flex;
  align-items: center;
  justify-content: center;

  /* 배경 설정 */
  ${({ imageUrl }) =>
    imageUrl
      ? `
    background-image: url(${imageUrl});
    background-size: cover;
    background-position: center;
    `
      : `
    background-color: transparent; /* 이미지 없으면 투명 */
    `}
  ${({ theme }) => theme.typography.badgeSm as CSSObject}
    color: ${({ theme }) => theme.colors.textFieldFocusText};

  /* 이번 달 여부에 따른 스타일 */
  opacity: ${({ isCurrentMonth }) => (isCurrentMonth ? 1 : 0.3)};
  filter: ${({ isCurrentMonth }) => (isCurrentMonth ? 'none' : 'grayscale(100%)')};

  /* 🌟 이미지가 있을 때만 어두운 오버레이 적용 */
  &::before {
    content: '';
    display: ${({ imageUrl }) => (imageUrl ? 'block' : 'none')};
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.4);
    z-index: 1;
  }
`

export const StyledDate = styled.span<{ hasImage?: boolean; isCurrentMonth?: boolean }>`
  z-index: 2;
  font-size: 14px;
  font-weight: 500;
  transition: all 0.2s ease;

  /* 🌟 이미지 유무에 따른 위치 설정 */
  ${({ hasImage }) =>
    hasImage
      ? `
    position: absolute;
    top: 8px;
    left: 8px;
  `
      : `
    position: static; /* 부모의 Flex 영향으로 중앙 배치됨 */
  `}

  /* 전달받은 hasImage 프롭에 따라 색상 변경 */
    color: ${({ hasImage, theme }) =>
    hasImage ? theme.colors.baseColor.lightYellow50 : theme.colors.textFieldFocusText};

  /* 이번 달이 아니면서 이미지가 없으면 숫자를 더 흐리게 */
  ${({ hasImage, isCurrentMonth, theme }) =>
    !hasImage && !isCurrentMonth && `color: ${theme.colors.textFieldDefaultLine};`}
`

export const StylePostCountTag = styled.div`
  position: absolute;
  bottom: 4px;
  right: 4px;
  z-index: 10;
  background-color: ${({ theme }) => theme.colors.modalBackground};
  padding: 2px 4px;
  border-radius: 2px;
  color: ${({ theme }) => theme.colors.baseColor.lightYellow50};
  ${({ theme }) => theme.typography.caption as CSSObject};
  display: flex;
  align-items: center;
  justify-content: center;
`
