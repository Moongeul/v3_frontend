import styled from '@emotion/styled'
import { CSSObject } from '@emotion/react'

////////////////////////////////////////////////////////////////////////////////

export const StyleMypageItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 52px;
`

////////////////////////////////////////////////////////////////////////////////

export const StyleProfileContainer = styled.div`
  display: flex;
  justify-content: space-between;
`
export const StyleProfileInfoContainer = styled.div`
  display: flex;
  column-gap: 12px;
  align-items: center;
  justify-content: center;
`
export const StyleProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 8px;
`
export const StyleFollowContainer = styled.div`
  display: flex;
  column-gap: 24px;
`
export const StyleFollowItem = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 6px;
  align-items: center;
`

////////////////////////////////////////////////////////////////////////////////

export const StyleRecordCard = styled.div<{ $backgroundColor: string; $borderColor: string }>`
  padding: 12px 10px;
  width: 100%;
  height: 68px;
  display: flex;
  flex-direction: column;
  row-gap: 8px;
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
    border: 1px solid ${({ $borderColor }) => $borderColor};
    background-color: ${({ $backgroundColor }) => $backgroundColor};
  }
`
export const StyleGridRecordContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  width: 100%;
  gap: 12px;
`

////////////////////////////////////////////////////////////////////////////////

export const StyleQuestionContainer = styled.div`
  display: flex;
  column-gap: 12px;
  overflow-x: scroll;
`

////////////////////////////////////////////////////////////////////////////////

export const StyleStoryContainer = styled.div`
  display: flex;
  column-gap: 8px;
  overflow-x: auto; /* 스크롤이 필요할 때만 노출 */
  width: 100%;

  /* 스크롤바 숨기기 (선택 사항) */
  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none; /* IE, Edge */
  scrollbar-width: none; /* Firefox */
`
export const StyleStoryCard = styled.div`
  position: relative;
  width: 72px;
  flex-shrink: 0;
`
export const StyleStoryCardDateBadge = styled.div`
  position: absolute;
  top: 8px;
  left: 8px;
  color: ${({ theme }) => theme.colors.baseColor.lightYellow50};
  ${({ theme }) => theme.typography.badgeSm as CSSObject};
  padding: 3px 4px;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.modalBackground};
`
////////////////////////////////////////////////////////////////////////////////
