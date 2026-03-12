import styled from '@emotion/styled'
import { CSSObject } from '@emotion/react'

export const StyleStoryListWrapper = styled.div`
  display: flex;
  column-gap: 8px;
  overflow-x: scroll;
`

export const StyleStoryList = styled.div`
  display: flex;
  column-gap: 8px;
  overflow-x: auto; /* scroll 대신 auto 권장 (스크롤 필요시에만 활성화) */
  width: 100%;

  /* 1. 자식 요소(StoryCard)가 찌그러지지 않도록 설정 */
  & > * {
    flex-shrink: 0;
  }

  /* 2. 스크롤바 숨기기 (선택 사항 - 디자인에 따라 적용) */
  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none; /* IE, Edge */
  scrollbar-width: none; /* Firefox */
`

export const StyleRecordButton = styled.div`
  height: 96px;
  width: 72px;
  padding: 4px;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  row-gap: 4px;
  justify-content: center;
  align-items: center;
  white-space: wrap;
  flex-shrink: 0;
  background-color: ${({ theme }) => theme.colors.buttonActivePrimary};
`

export const StyleRecordButtonText = styled.p`
  color: ${({ theme }) => theme.colors.baseColor.lightYellow50};
  ${({ theme }) => theme.typography.badgeMd as CSSObject};
  text-align: center;
`
export const StyleRecordCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 4px;
`

export const StyleImageOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4); // 0.4 부분을 조절해서 어두운 정도를 설정하세요
  z-index: 5; // 이미지(기본)보다는 높고, 프로필(10)보다는 낮게
  pointer-events: none; // 클릭 이벤트가 아래 이미지로 전달되게 함
`

export const StyleRecordCard = styled.div`
  height: 96px;
  width: 72px;
  padding: 2px;
  border-radius: 4px;
  position: relative;
  background-color: #272725; /* 배경색 변경 */

  /* 내부 이미지 중앙 배치를 위한 설정 */
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden; /* 이미지가 카드 밖으로 나가지 않도록 설정 */
`

export const StyleImageWrapper = styled.div`
  width: 100%;
  padding: 0 4px; /* 좌우 px-[4px] 적용 */
  display: flex;
  justify-content: center;
`

export const StyleProfileContainer = styled.div`
  position: absolute;
  top: 4px;
  left: 4px;
  z-index: 10;
`
export const StyleRecordCardText = styled.p`
  color: ${({ theme }) => theme.colors.textFieldFocusText};
  ${({ theme }) => theme.typography.small as CSSObject};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  width: 72px;
`

export const StyleRecordCardCountIndicator = styled.div`
  background-color: ${({ theme }) => theme.colors.modalBackground};
  color: ${({ theme }) => theme.colors.baseColor.lightYellow50};
  ${({ theme }) => theme.typography.caption as CSSObject};
  padding: 0 4px;
  border-radius: 2px;
  position: absolute;
  bottom: 4px;
  right: 4px;
`
