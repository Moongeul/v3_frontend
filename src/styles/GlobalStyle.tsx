// src/styles/GlobalStyle.tsx (수정본)
'use client'

import { Global, css, useTheme } from '@emotion/react'

export const GlobalStyle = () => {
  const theme = useTheme()

  return (
    <Global
      styles={css`
        /* 1. 최상위 요소 강제 고정 */
        html,
        body {
          background-color: ${theme.colors.background} !important;
          color: ${theme.colors.headerText} !important;
          margin: 0;
          padding: 0;
          min-height: 100vh;
          width: 100%;
          transition:
            background-color 0.2s ease,
            color 0.2s ease;
        }

        /* 2. 메인 페이지 컨테이너들이 배경색을 가로채지 못하도록 투명화 */
        main,
        #theme-wrapper,
        #__next {
          background-color: transparent !important;
          min-height: 100vh;
        }

        /* 3. 혹시나 각 페이지 컴포넌트 최상단에 bg-white 같은 클래스가 있다면 
             이것이 우선순위에서 밀리도록 설정합니다. */
      `}
    />
  )
}
