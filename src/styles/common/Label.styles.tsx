import styled from '@emotion/styled'

export const ContainerRow = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
`
export const Label = styled.div`
  flex-shrink: 0;
  white-space: nowrap;
  color: ${({ theme }) => theme.colors.headerText};
  ${({ theme }) => theme.typography.subtitleMd}
`
export const RequiredMark = styled.span`
  color: ${({ theme }) => theme.colors.baseColor.secondary500};
  ${({ theme }) => theme.typography.subtitleMd}
`

export const Row = styled.div`
  display: flex;
  row-gap: 4px;
  align-items: start;
`
