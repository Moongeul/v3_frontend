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

  /* 테마 배경색을 직접 적용합니다. */
  background-color: ${({ theme }) => theme.colors.background};
  /* 텍스트 색상도 테마에 맞게 설정합니다. */
  color: ${({ theme }) => theme.colors.headerText};

  /* 배경색 변경 시 부드럽게 전환 */
  transition:
    background-color 0.2s ease,
    color 0.2s ease;
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

  /* 🌟 해결 방법 A: 컨테이너 내부 절대 위치 */
  position: absolute;
  bottom: 0;
  width: 100%;
  left: 0;
  box-sizing: border-box; /* 패딩이 너비에 포함되도록 설정 */
`
