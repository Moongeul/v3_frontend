import styled from '@emotion/styled'

export const StyleTestCard = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  padding: 32px;
  border-radius: 12px;
  height: 384px;
  margin: 0 13px;
  background: ${({ theme }) => theme.colors.famousSection};
`

export const StyleBottomButtons = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  row-gap: 12px;
  position: fixed;
  left: 0;
  bottom: 21px;
  padding: 20px 20px;
  background: ${({ theme }) => theme.colors.background};
`
