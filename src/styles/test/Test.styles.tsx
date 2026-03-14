import styled from '@emotion/styled'
import { CSSObject } from '@emotion/react'

export const StyledPeopleCountBadge = styled.div<{}>`
  display: inline-flex;
  align-items: center;
  height: 32px;
  padding: 8px 16px;
  position: relative;
  z-index: 1;
  transition: all 0.2s ease-in-out;
  background-color: transparent;

  color: ${({ theme }) => theme.colors.textFieldFill};
  ${({ theme }) => theme.typography.titleSm as CSSObject};

  /* 연필 효과를 입힐 가상 요소 */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
    filter: url('#pencil-texture');
    pointer-events: none;
    box-sizing: border-box;
    border-radius: 6px;

    background: ${({ theme }) => theme.colors.baseColor.secondary300};
  }
`

export const StyleOnboardingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center; /* 세로 중앙 정렬 */

  /* 헤더 높이(예: 60px)와 Spacing 높이 등을 제외한 최소 높이 설정 */
  min-height: calc(100vh - 120px);

  /* 만약 부모(PageLayout)가 이미 height를 가지고 있다면 100%로 충분합니다 */
  width: 100%;
`
export const StyleTestWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const StyleTestCard = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  padding: 32px;
  align-items: center;
  justify-content: space-between;
  border-radius: 12px;
  height: 384px;
  width: 308px;
  margin: 0 13px;
  background: ${({ theme }) => theme.colors.famousSection};
`
export const StyleContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 12px;
  align-items: center;
`

export const StyleBottomButtons = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 12px;
  position: fixed; /* 화면 하단에 고정 */
  bottom: 21px;

  /* 너비 및 중앙 정렬 수정 */
  width: 375px; /* 부모인 StyledMobileContainer와 동일한 너비 */
  left: 50%;
  transform: translateX(-50%); /* 브라우저 중앙 기준으로 375px의 절반만큼 왼쪽으로 이동 */

  padding: 20px 20px;
  background: ${({ theme }) => theme.colors.background};
  box-sizing: border-box; /* 패딩이 375px 너비 안으로 포함되게 설정 */
  z-index: 50; /* 다른 요소보다 위에 오도록 설정 */

  /* (선택 사항) 화면이 375px보다 작아질 경우 대비 */
  @media (max-width: 375px) {
    width: 100%;
  }
`

//////////////////////////////////////////////////////////////////////////////////////////////////////

export const StyleProgressBarContainer = styled.div`
  width: 84px;
  height: 4px;
  background-color: ${({ theme }) => theme.colors.buttonDefaultSecondary};
  border-radius: 999px;
  overflow: hidden;
`
export const StyleProgressFill = styled.div<{ width: number }>`
  height: 100%;
  /* props로 받은 width 값을 적용 */
  width: ${({ width }) => width}%;
  background-color: ${({ theme }) => theme.colors.buttonActiveGhost};
  border-radius: 999px;
  /* 부드러운 애니메이션 효과 추가 */
  transition: width 0.3s ease-in-out;
`
//////////////////////////////////////////////////////////////////////////////////////////////////////
export const StyleTestButton = styled.div<{ $variant: 'default' | 'active' | 'disable' }>`
  flex-shrink: 0;
  white-space: nowrap;
  column-gap: 8px;
  align-items: center;
  display: flex;
  padding: 8px 16px;

  position: relative;
  z-index: 1;

  transition: all 0.2s ease-in-out;
  background-color: transparent;

  /* 연필 효과를 입힐 가상 요소 */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
    filter: url('#pencil-texture');
    pointer-events: none;
    box-sizing: border-box;
    border-radius: 8px;
    border: 1px solid
      ${({ theme, $variant }) =>
        $variant === 'default'
          ? theme.colors.buttonActivePrimary
          : $variant === 'active'
            ? theme.colors.buttonTextSecondary
            : theme.colors.buttonDefaultPrimary};
    background-color: ${({ theme, $variant }) =>
      $variant === 'default'
        ? theme.colors.background
        : $variant === 'active'
          ? theme.colors.buttonActiveSecondary
          : theme.colors.background};
  }

  color: ${({ theme, $variant }) =>
    $variant === 'default'
      ? theme.colors.buttonActivePrimary
      : $variant === 'active'
        ? theme.colors.buttonTextSecondary
        : theme.colors.buttonDefaultPrimary};
  ${({ theme }) => theme.typography.buttonMd as CSSObject};
`
export const StyleTestButtonNumber = styled.div<{ $variant: 'default' | 'active' | 'disable' }>`
  width: 32px;
  height: 32px;
  flex-shrink: 0;
  border-radius: 999px;
  background-color: ${({ theme, $variant }) =>
    $variant === 'default'
      ? theme.colors.buttonActivePrimary
      : $variant === 'active'
        ? theme.colors.buttonTextSecondary
        : theme.colors.buttonDefaultPrimary};
  color: ${({ theme, $variant }) =>
    $variant === 'active' ? theme.colors.buttonActivePrimary : theme.colors.baseColor.lightYellow50};
  display: flex;
  align-items: center;
  justify-content: center;
`
