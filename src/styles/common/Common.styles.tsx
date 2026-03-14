'use client'
import React from 'react'
import styled from '@emotion/styled'

import { css, CSSObject, keyframes } from '@emotion/react'
import { TypographyType } from '@/styles/emotion'

const spin = keyframes`
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
`

// 사이즈별 스타일 정의
const sizeStyles = {
  // 버튼 내부 텍스트 옆에 적당한 사이즈
  sm: css`
    width: 16px;
    height: 16px;
    border-width: 2px;
  `,
  // 기존 2rem (약 32px) - 리스트 로딩용
  m: css`
    width: 2rem;
    height: 2rem;
    border-width: 3px; /* 두께도 조금 키워야 m사이즈답게 보입니다 */
  `,
  // sm보다 크고 m보다 작은 사이즈 (약 24px)
  lg: css`
    width: 24px;
    height: 24px;
    border-width: 2.5px;
  `,
}

export const Spinner = styled.div<{ size?: 'sm' | 'm' | 'lg' }>`
  border-radius: 9999px;
  border-style: solid;
  border-color: transparent;
  border-bottom-color: ${({ theme }) => theme.colors.buttonActivePrimary};
  animation: ${spin} 1s linear infinite;

  /* size prop에 따른 스타일 적용 (기본값 m) */
  ${({ size = 'm' }) => sizeStyles[size]}
`

export const SpinnerWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
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
