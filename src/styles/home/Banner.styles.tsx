import styled from '@emotion/styled'
import { CSSObject } from '@emotion/react'

export const StyleBannerContainer = styled.div`
  padding: 12px;
  width: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 8px;
  position: relative;
  z-index: 1;

  transition: all 0.2s ease-in-out;
  background-color: transparent;

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
    border-radius: 6px;
    background-color: ${({ theme }) => theme.colors.buttonActiveSecondary};
  }
`
export const StyleBannerTitle = styled.h1`
  color: ${({ theme }) => theme.colors.headerText};
  ${({ theme }) => theme.typography.titleSm as CSSObject};
`
export const StyleBannerGraphic = styled.div`
  position: absolute;
  bottom: 2px;
  right: 12px;
`
