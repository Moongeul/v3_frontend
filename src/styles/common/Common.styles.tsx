'use client'
import React from 'react'
import styled from '@emotion/styled'

import { CSSObject, keyframes } from '@emotion/react'
import { TypographyType } from '@/styles/emotion'

// 스피너
const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

export const Spinner = styled.div`
  width: 2rem; /* h-8 */
  height: 2rem; /* w-8 */
  border-radius: 9999px; /* rounded-full */
  border: 2px solid transparent;
  /* border-main 역할을 할 색상을 테마나 직접 지정 */
  border-bottom-color: ${({ theme }) => theme.colors.buttonActivePrimary};

  animation: ${spin} 1s linear infinite; /* animate-spin */
`
export const SpinnerWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 2rem; /* py-8 */
  padding-bottom: 2rem;
`

//spacing 여백
export const StyledSpacing = styled.div<{ $height?: number; $width?: number }>`
  flex: none;
  height: ${({ $height }) => ($height ? `${$height}px` : `0px`)};
  width: ${({ $width }) => ($width ? `${$width}px` : `0px`)};
  /* 테마 배경색을 직접 적용합니다. */
  background-color: ${({ theme }) => theme.colors.background};
  /* 텍스트 색상도 테마에 맞게 설정합니다. */
  color: ${({ theme }) => theme.colors.headerText};

  /* 배경색 변경 시 부드럽게 전환 */
  transition:
    background-color 0.2s ease,
    color 0.2s ease;
`
//border-b
export const BottomBorder = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.colors.iconStarFilled};
`
// 폰트 지정
export const StyleContent = styled.p<{ $typography: TypographyType; $textColor?: string }>`
  ${({ $typography }) => $typography as CSSObject}
  white-space: pre-wrap; /* 텍스트가 줄바꿈되어 찌그러지는 것 방지 */
  flex-shrink: 0; /* 공간이 부족해도 크기가 줄어들지 않게 고정 */
  color: ${({ theme, $textColor }) => ($textColor ? $textColor : theme.colors.textFieldFilledText)};
`

//연필효과
export const PencilSketchEffect = () => {
  return (
    <svg style={{ position: 'absolute', width: 0, height: 0 }}>
      <filter id="pencil-texture">
        <feTurbulence type="fractalNoise" baseFrequency="1" numOctaves="3" result="noise" />
        <feDisplacementMap in="SourceGraphic" in2="noise" scale="1.2" />
      </filter>
    </svg>
  )
}
