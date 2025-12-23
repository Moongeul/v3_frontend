import styled from '@emotion/styled'

export const BookInfoSummaryContainer = styled.div`
  display: flex;
  justify-content: space-between;
`
export const RightButton = styled.div`
  margin-top: auto;
`
export const Row = styled.div`
  display: flex;
  column-gap: 12px;
`
export const Column = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  row-gap: 8px;
  width: 150px;
`
export const Title = styled.p`
  ${({ theme }) => theme.typography.titleSm};
  color: ${({ theme }) => theme.colors.headerText};
`
export const Info = styled.p`
  ${({ theme }) => theme.typography.buttonMd};
  color: ${({ theme }) => theme.colors.textFieldDefaultText};
`
export const BookImage = styled.div`
  border-radius: 6px;
`
