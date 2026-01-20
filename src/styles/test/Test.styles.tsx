import styled from '@emotion/styled'
import { css, CSSObject } from '@emotion/react'

export const StyleTestWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const StyleTestCard = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  padding: 32px;
  align-items: center;
  justify-content: space-between;
  border-radius: 12px;
  height: 384px;
  margin: 0 13px;
  background: ${({ theme }) => theme.colors.famousSection};
`
export const StyleContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 12px;
  align-items: center;
`

export const StyleGraphic = styled.div``

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

//////////////////////////////////////////////////////////////////////////////////////////////////////

export const StyleProgressBarContainer = styled.div`
  width: 84px;
  height: 4px;
  background-color: ${({ theme }) => theme.colors.buttonDefaultSecondary};
  border-radius: 999px;
  overflow: hidden;
`
export const StyleProgressFill = styled.div<{ width: number }>`
  height: 100%;
  /* props로 받은 width 값을 적용 */
  width: ${({ width }) => width}%;
  background-color: ${({ theme }) => theme.colors.buttonActiveGhost};
  border-radius: 999px;
  /* 부드러운 애니메이션 효과 추가 */
  transition: width 0.3s ease-in-out;
`
//////////////////////////////////////////////////////////////////////////////////////////////////////
export const StyleTestButton = styled.div`
  flex-shrink: 0;
  white-space: nowrap;
  column-gap: 8px;
  align-items: center;
  display: flex;
  padding: 8px 16px;

  position: relative;
  z-index: 1;

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
    border-radius: 8px;
    border: 1px solid ${({ theme }) => theme.colors.buttonActivePrimary};
  }

  color: ${({ theme }) => theme.colors.buttonActivePrimary};
  ${({ theme }) => theme.typography.buttonMd as CSSObject};
`
export const StyleTestButtonNumber = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 999px;
  background-color: ${({ theme }) => theme.colors.buttonActivePrimary};
  color: ${({ theme }) => theme.colors.iconStarFilled};
  display: flex;
  align-items: center;
  justify-content: center;
`
