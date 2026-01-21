import styled from '@emotion/styled'

export const StyleNavContainer = styled.div`
  padding: 10px 32px 20px 20px;
  display: flex;
  justify-content: space-evenly;
  column-gap: 28px;
  position: fixed;
  bottom: 0;
  z-index: 100;

  transition: all 0.2s ease-in-out;
  background-color: transparent;
  /* 연필 효과를 입힐 가상 요소 */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
    filter: url('#pencil-texture');
    pointer-events: none;
    box-sizing: border-box;
    background-color: ${({ theme }) => theme.colors.background};
  }
`
export const StyleNavItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 2px;
`
export const StyleWriteItem = styled.div`
  border-radius: 999px;
  background-color: ${({ theme }) => theme.colors.buttonActivePrimary};
  height: 48px;
  width: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
`
export const StyleProfileItem = styled.div`
  height: 40px;
  width: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
`
