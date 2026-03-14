'use client'

import styled from '@emotion/styled'
import { CSSObject } from '@emotion/react'

type HeaderType = 'default' | 'dynamic' | 'title'

export const Header = styled.header<{ $isBottomBorder?: boolean }>`
  position: fixed;
  z-index: 70;
  top: 0; /* fixed 사용 시 top 설정 권장 */

  /* 🌟 해결 방법: 부모 컨테이너 너비와 일치시킴 */
  width: 375px;

  /* 만약 중앙 정렬된 MobileLayout 안에 있다면 left/right 설정이 필요할 수 있음 */
  /* 조상 중 relative가 있어도 fixed는 window 기준이라 아래 방식이 가장 안전함 */

  padding: 8px 20px;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.background};

  /* border 관련 로직 유지 */
  border-bottom: ${({ $isBottomBorder, theme }) =>
    $isBottomBorder ? `1px solid ${theme.colors.baseColor.gray200}` : 'none'};

  /* 패딩이 너비에 포함되도록 설정 (필수) */
  box-sizing: border-box;
`

export const Title = styled.h1<{ $headerType: HeaderType }>`
  color: ${({ theme }) => theme.colors.headerText};
  ${({ theme, $headerType }) =>
    $headerType === 'default'
      ? (theme.typography.titleLg as CSSObject)
      : $headerType === 'title'
        ? (theme.typography.titleMd as CSSObject)
        : (theme.typography.subtitleMd as CSSObject)}
`
export const IconColumn = styled.div`
  display: flex;
  column-gap: 12px;
  align-items: center;
`
export const EmptyIcon = styled.div`
  width: 20px;
  height: 20px;
`
export const HeaderLeftArrowIconPadding = styled.div`
  padding-right: 28px;
`
