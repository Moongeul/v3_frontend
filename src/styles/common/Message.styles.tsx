import styled from '@emotion/styled'
import { CSSObject } from '@emotion/react'

export const StyledSuccessMessage = styled.div`
  ${({ theme }) => theme.typography.badgeSm as CSSObject};
  color: ${({ theme }) => theme.colors.baseColor.gray400};
`
export const StyledErrorMessage = styled.div`
  ${({ theme }) => theme.typography.badgeSm as CSSObject};
  color: ${({ theme }) => theme.colors.textFieldError};
`
