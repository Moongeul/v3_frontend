import styled from '@emotion/styled'

export const StyleBookListContainer = styled.div`
  display: flex;
  justify-content: space-between;
`

export const StyleShelf = styled.div`
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.buttonDefaultSecondary};
  height: 16px;
  width: 100%;
`
