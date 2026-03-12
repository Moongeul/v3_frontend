import styled from '@emotion/styled'
import { CSSObject } from '@emotion/react'
import { StoryFontType } from '@/components/story/OptionSelector'

export const StyledTabButtonWrapper = styled.div`
  display: flex;
  width: 100%;
  padding: 4px;
  border-radius: 6px;
  background-color: ${({ theme }) => theme.colors.iconStarFilled};
`
export const StyledTabButton = styled.div<{ $isActive: boolean }>`
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;

  position: relative;
  z-index: 1;
  width: 100%;

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
    border-radius: 6px;
    background-color: ${({ theme, $isActive }) => ($isActive ? theme.colors.buttonActivePrimary : 'transparent')};
  }

  color: ${({ theme, $isActive }) => ($isActive ? theme.colors.baseColor.lightYellow50 : theme.colors.rating)};
  ${({ theme }) => theme.typography.bodySm as CSSObject};
`

export const StyledContent = styled.div<{ $bgColor: string }>`
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  padding: 20px;

  position: relative;
  z-index: 1;
  width: 100%;

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
    border: 1px solid ${({ theme }) => theme.colors.iconStarFilled};
    background-color: ${({ theme, $bgColor }) => ($bgColor ? $bgColor : '#FFFEF6')};
  }

  color: ${({ theme }) => theme.colors.headerText};
  ${({ theme }) => theme.typography.bodyMd as CSSObject};
`
export const StyledContentHeader = styled.div`
  display: flex;
  column-gap: 8px;
`
export const StyledRating = styled.div`
  display: flex;
  column-gap: 2px;
  align-items: center;
  color: ${({ theme }) => theme.colors.baseColor.gray500};
  ${({ theme }) => theme.typography.badgeSm as CSSObject};
`
export const StyledOptionSelectorContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 12px;
  position: fixed;
  bottom: 0;
  padding: 20px;
  width: 100%;
  left: 0;
`
export const StyledFontList = styled.div`
  display: flex;
  column-gap: 8px;
`
export const StyledFontSelector = styled.div<{
  $isActive: boolean
  $fontType: StoryFontType
}>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  row-gap: 8px;
  padding: 12px 8px;

  position: relative;
  z-index: 1;
  width: 100%;
  height: 190px;

  transition: all 0.2s ease-in-out;
  background-color: transparent;

  /* 1. 기본 타이포그래피 스타일을 먼저 선언 */
  ${({ theme }) => theme.typography.badgeMd as CSSObject};

  /* 2. props에 따른 폰트 패밀리 덮어쓰기 (중요: badgeMd보다 아래에 위치) */
  font-family: ${({ $fontType }) => {
    switch ($fontType) {
      case 'suit':
        return 'var(--font-suit)'
      case 'memoment':
        return 'var(--font-memoment)'
      case 'myeongjo':
        return 'var(--font-myeongjo)'
      default:
        return 'var(--font-suit)'
    }
  }};

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

    /* 두께(1.5px 등)와 스타일(solid)을 명시해야 테두리가 보입니다 */
    border: 1.5px solid
      ${({ theme, $isActive }) => ($isActive ? theme.colors.buttonActivePrimary : theme.colors.iconStarFilled)};

    background-color: ${({ theme, $isActive }) =>
      $isActive ? theme.colors.famousSection : theme.colors.textFieldFill};

    transition: all 0.2s ease-in-out;
  }
`
export const StyledBackGroundList = styled.div`
  display: flex;
  column-gap: 8px;
  overflow-x: scroll;
`

export const StyledBackGroundSelector = styled.div<{ $isActive: boolean; $background: string }>`
  display: flex;
  flex-shrink: 0;
  flex-direction: column;
  row-gap: 8px;
  padding: 12px 8px;
  height: 190px;
  width: 106px;

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
    border: ${({ theme, $isActive }) =>
      $isActive ? theme.colors.buttonActivePrimary : theme.colors.buttonDefaultPrimary};
    background-color: ${({ theme, $background }) => ($background ? $background : theme.colors.textFieldFill)};
  }
`
export const StyledQuoteSelector = styled.div<{
  $isActive: boolean
}>`
  display: flex;
  column-gap: 8px;
  align-items: center;
  padding: 12px 8px;

  position: relative;
  z-index: 1;
  width: 100%;

  transition: all 0.2s ease-in-out;
  background-color: transparent;

  /* 1. 기본 타이포그래피 스타일을 먼저 선언 */
  ${({ theme }) => theme.typography.badgeMd as CSSObject};

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

    /* 두께(1.5px 등)와 스타일(solid)을 명시해야 테두리가 보입니다 */
    border: 1.5px solid
      ${({ theme, $isActive }) => ($isActive ? theme.colors.buttonActivePrimary : theme.colors.iconStarFilled)};

    background-color: ${({ theme, $isActive }) =>
      $isActive ? theme.colors.famousSection : theme.colors.textFieldFill};

    transition: all 0.2s ease-in-out;
  }
`
