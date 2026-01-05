import styled from '@emotion/styled'
import { CSSObject } from '@emotion/react'

export const StyleSelectBookItemContainer = styled.div`
  display: flex;
  column-gap: 12px;
  align-items: center;
`
export const StyleText = styled.p`
  color: ${({ theme }) => theme.colors.headerText};
  ${({ theme }) => theme.typography.titleSm as CSSObject};
`
export const StyleButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 120px;
  border-radius: 6px;
  background: ${({ theme }) => theme.colors.iconStarFilled};
`
export const StyleHelperText = styled.p`
  color: ${({ theme }) => theme.colors.textFieldDefaultText};
  ${({ theme }) => theme.typography.badgeSm as CSSObject};
`
