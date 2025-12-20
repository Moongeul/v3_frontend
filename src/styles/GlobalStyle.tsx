// src/styles/GlobalStyle.tsx
'use client'

import { Global, css } from '@emotion/react'

const globalStyles = css`
  :root {
    /* next/font에서 정의한 변수를 가져옵니다 */
    font-family: var(--font-suit), sans-serif;
  }

  body {
    font-family: var(--font-suit), sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`

export const GlobalStyle = () => <Global styles={globalStyles} />
