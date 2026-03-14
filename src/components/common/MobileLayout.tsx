/** @jsxImportSource @emotion/react */
'use client'

import { ReactNode } from 'react'
import styled from '@emotion/styled'

const StyledLayoutWrapper = styled.div`
  background-color: #f5f5f5;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: flex-start; /* 콘텐츠가 길어질 때 상단부터 시작 */
`

const StyledMobileContainer = styled.div`
  width: 375px;
  /* min-height를 100vh로 잡으면 화면에 꽉 차는 기준점이 됩니다 */
  min-height: 100vh;
  background-color: #ffffff;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.05);

  /* 🌟 하위 요소들이 width: 100%를 안정적으로 계산하도록 설정 */
  position: relative;
  display: flex;
  flex-direction: column; /* 자식들이 세로로 쌓이며 부모 너비를 채우도록 함 */

  /* 스크롤바가 생겨도 너비 375px이 깨지지 않게 방지 */
  box-sizing: border-box;
  overflow-x: hidden;
`

export default function MobileLayout({ children }: { children: ReactNode }) {
  return (
    <StyledLayoutWrapper>
      <StyledMobileContainer>{children}</StyledMobileContainer>
    </StyledLayoutWrapper>
  )
}
