import styled from '@emotion/styled'
import { CSSObject } from '@emotion/react'
import { TypographyType } from '@/styles/emotion'

export const StyleBook = styled.div<{
  $backgroundColor: string
  $borderColor: string
  $height: number
  $width: number
}>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 8px;
  border-radius: 4px;
  border: 1px solid ${({ $borderColor }) => $borderColor};
  background-color: ${({ $backgroundColor }) => $backgroundColor};
  //row-gap: 4px;
  width: ${({ $width }) => `${$width}px`};
  height: ${({ $height }) => `${$height}px`};
`
export const StyleBookContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-grow: 1;
  width: 100%;
  position: relative;

  /* overflow를 지워야 회전된 요소가 잘리지 않습니다. */
`

export const StyleTitleGroup = styled.div<{ $parentHeight: number }>`
  display: flex;
  flex-direction: row;
  align-items: center;
  //justify-content: center; /* 중앙 정렬 유지 */
  gap: 8px;
  white-space: nowrap;

  position: absolute;
  /* 부모 높이에서 별점 영역(약 40~50px)을 제외한 나머지를 차지하게 설정 */
  /* padding 등을 고려하여 적절히 계산합니다. */
  width: ${({ $parentHeight }) => `${$parentHeight - 50}px`};

  left: 50%;
  top: 0;

  transform: rotate(90deg) translateY(-50%);
  transform-origin: left top;

  /* 영역 확인용 (작업 완료 후 제거) */
  /* border: 1px solid #171717; */
`
export const StyleRatingContent = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 4px;
  align-items: center;
`
export const StyleTitle = styled.p<{ $typography: TypographyType; $textColor?: string }>`
  ${({ $typography }) => $typography as CSSObject}
  color: ${({ theme, $textColor }) => ($textColor ? $textColor : theme.colors.textFieldFilledText)};
  margin: 0;

  flex-shrink: 1; /* 공간이 부족하면 줄어들게 설정 */
  max-width: 100%; /* 그룹 면적의 80%를 넘지 않게 설정 */
  overflow: hidden;
  //text-overflow: ellipsis;
  white-space: nowrap;
`

export const StylePostCountTag = styled.div`
  background-color: ${({ theme }) => theme.colors.modalBackground};
  padding: 2px 4px;
  border-radius: 2px;
  color: ${({ theme }) => theme.colors.baseColor.lightYellow50};
  ${({ theme }) => theme.typography.caption as CSSObject};
  display: flex;
  align-items: center;
  justify-content: center;
`
////////////////////////////////////////////////////////////////////////////////

export const StyleShelfRow = styled.div<{ $gap: string }>`
  display: flex;
  align-items: flex-end; /* 책들을 바닥에 밀착 */
  gap: ${({ $gap }) => $gap};
  width: 100%;
  position: relative;
  margin-bottom: 40px; /* 다음 선반과의 간격 */

  /* 선반 바닥 디자인 */
  &::after {
    content: '';
    position: absolute;
    bottom: -16px; /* 책 바로 밑에 붙임 */
    left: 0;
    right: 0;
    height: 16px;
    background-color: ${({ theme }) => theme.colors.buttonDefaultSecondary};
    border-radius: 4px; /* 요청하신 전체 4px 라운드 */
  }
`
export const StyleBookShelfContainer = styled.div`
  display: flex;
  flex-direction: column; /* 줄(Row)들을 세로로 쌓음 */
  width: 100%;
`
