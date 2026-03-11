// src/styles/GlobalStyle.tsx
'use client'

import { Global, css, useTheme } from '@emotion/react'

export const GlobalStyle = () => {
  const theme = useTheme()

  return (
    <Global
      styles={css`
        /* html과 body 모두에 테마 배경색을 적용해야 여백 없이 바뀝니다 */
        html,
        body {
          background-color: ${theme.colors.background} !important;
          color: ${theme.colors.headerText};
          transition:
            background-color 0.3s ease,
            color 0.3s ease;
          margin: 0;
          padding: 0;
        }

        /* Geist 폰트 변수와 Suit 폰트 변수를 안전하게 선언 */
        :root {
          --background: ${theme.colors.background};
          --foreground: ${theme.colors.headerText};
        }
      `}
    />
  )
}
