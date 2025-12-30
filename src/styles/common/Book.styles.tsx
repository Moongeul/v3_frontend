import styled from '@emotion/styled'

export const BookInfoSummaryContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`
export const RightButton = styled.div`
  margin-top: auto;
`
export const Row = styled.div`
  display: flex;
  column-gap: 12px;
  width: 100%;
`
export const Column = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  row-gap: 8px;
`
export const Title = styled.p`
  ${({ theme }) => theme.typography.titleSm};
  color: ${({ theme }) => theme.colors.headerText};
  /* 여러 줄 말줄임 핵심 속성 */
  display: -webkit-box;
  -webkit-line-clamp: 2; /* 보여줄 줄 수 */
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;

  /* (선택 사항) 높이가 가변적일 경우 대비 */
  word-break: break-all;
`
export const Info = styled.p`
  ${({ theme }) => theme.typography.buttonMd};
  color: ${({ theme }) => theme.colors.textFieldDefaultText};
`
export const Rating = styled.div`
  display: flex;
  column-gap: 2px;
  align-items: center;
  ${({ theme }) => theme.typography.badgeSm};
  color: ${({ theme }) => theme.colors.textFieldFilledLine};
`
export const BookImage = styled.div`
  border-radius: 6px;
  flex-shrink: 0;
`
