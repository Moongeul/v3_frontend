import styled from '@emotion/styled'

export const WritingGuide = styled.p`
  ${({ theme }) => theme.typography.badgeMd}
  color: ${({ theme }) => theme.colors.buttonActiveGhost};
`

export const StarRatingColumn = styled.div<{ $textColor?: string }>`
  display: flex;
  column-gap: 2px;
  color: ${({ $textColor }) => $textColor};
  ${({ theme }) => theme.typography.badgeMd};
  align-items: center;
`

export const QuoteTopElementContainer = styled.div`
  display: flex;
  position: relative;
  z-index: 1; // 텍스트가 연필 효과 위로 오도록
  justify-content: space-between;
  align-items: center;
  padding-top: 16px;
  padding-left: 12px;
  padding-right: 12px;
  ${({ theme }) => theme.typography.subtitleMd}
  color: ${({ theme }) => theme.colors.baseColor.gray300};
`
export const Column = styled.div`
  display: flex;
  column-gap: 2px;
`
export const QuotePageInput = styled.input`
  ${({ theme }) => theme.typography.subtitleMd}
  color: ${({ theme }) => theme.colors.baseColor.gray300};
  outline: none;
  width: fit-content;
`
export const RatingInputColumn = styled.div`
  display: flex;
  column-gap: 8px;
  align-items: end;
`
