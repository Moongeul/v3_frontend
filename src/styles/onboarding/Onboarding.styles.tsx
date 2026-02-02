import styled from '@emotion/styled'
import { CSSObject } from '@emotion/react'

export const StyleOnboardingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
  row-gap: 8px;
`

export const StyleOnboardingContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  row-gap: 8px;
  padding-bottom: 100px;
`
export const StyleMoongeulLogo = styled.div`
  ${({ theme }) => theme.typography.memomentTitle as CSSObject};
`
export const StyleMoongeulText = styled.p`
  ${({ theme }) => theme.typography.subtitleMd as CSSObject};
`
export const StyleOnboardingButtons = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  row-gap: 12px;
  align-items: center;
  position: fixed;
  bottom: 0;
  width: 100%;
`
