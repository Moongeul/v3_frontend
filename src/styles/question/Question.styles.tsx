import styled from '@emotion/styled'
import { CSSObject } from '@emotion/react'

export const StyleRecordListRowWrapper = styled.div`
  display: flex;
  column-gap: 12px;
  overflow-x: scroll;
`
export const StyleRecordListColumnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 12px;
`
export const StyleQuestionCard = styled.div<{ $width: number | undefined }>`
  padding: 12px;
  width: ${({ $width }) => ($width ? `${$width}px` : `100%`)};
  height: 254px;
  flex-shrink: 0;
  display: flex;
  justify-content: center;
  flex-direction: column;
  position: relative;
  z-index: 1;

  transition: all 0.2s ease-in-out;
  background-color: transparent;

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
    border-radius: 12px;
    border: 1px solid ${({ theme }) => theme.colors.iconStarFilled};
  }
`
export const StyleQuestionCardText = styled.p`
  color: ${({ theme }) => theme.colors.headerText};
  ${({ theme }) => theme.typography.subtitleSm as CSSObject};
`
export const StyleComment = styled.div`
  display: flex;
  column-gap: 3px;
  align-items: center;
  color: ${({ theme }) => theme.colors.textFieldDefaultText};
  ${({ theme }) => theme.typography.badgeSm as CSSObject};
`

export const StyleQuestionButton = styled.button`
  width: 100%;
  align-items: center;

  justify-content: space-between;
  display: flex;
  height: 36px;
  padding: 0 12px;
  color: ${({ theme }) => theme.colors.baseColor.lightYellow50};
  ${({ theme }) => theme.typography.buttonMd as CSSObject};

  position: relative;
  z-index: 1;

  transition: all 0.2s ease-in-out;
  background-color: transparent;

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
    border-radius: 4px;
    background-color: ${({ theme }) => theme.colors.buttonActivePrimary};
  }
`

export const StyleAnswerButton = styled.button`
  width: 100%;
  align-items: center;

  justify-content: space-between;
  display: flex;
  height: 36px;
  padding: 0 12px;
  color: ${({ theme }) => theme.colors.buttonTextSecondary};
  ${({ theme }) => theme.typography.buttonMd as CSSObject};

  position: relative;
  z-index: 1;

  transition: all 0.2s ease-in-out;
  background-color: transparent;

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
    border-radius: 4px;
    background-color: ${({ theme }) => theme.colors.buttonActiveSecondary};
  }
`

export const StyleAvatarGroup = styled.div`
  display: flex;
  align-items: center;
  /* 왼쪽으로 정렬하되, 자식들이 겹치도록 설정 */

  & > div:not(:first-child) {
    margin-left: -8px; /* 이 수치를 조절해서 겹치는 정도를 결정하세요 */
  }
`

export const StyleAvatar = styled.div`
  width: 24px;
  height: 24px;

  position: relative;
  z-index: 1;

  transition: all 0.2s ease-in-out;
  background-color: transparent;

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
    border-radius: 999px;
    border: 1px solid ${({ theme }) => theme.colors.headerText};
    background-color: #ededed;
  }
`
export const StyleAvatarCount = styled.div`
  width: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.baseColor.lightYellow50};
  ${({ theme }) => theme.typography.badgeSm as CSSObject};
  height: 24px;
  padding: 0 8px;

  position: relative;
  z-index: 1;

  transition: all 0.2s ease-in-out;
  background-color: transparent;

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
    border-radius: 999px;
    background-color: ${({ theme }) => theme.colors.textFieldFilledLine};
    border: 1px solid ${({ theme }) => theme.colors.headerText};
  }
`
