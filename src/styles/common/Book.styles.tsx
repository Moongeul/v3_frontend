import styled from '@emotion/styled'
import { CSSObject } from '@emotion/react'
import BookIntroduction from '../../components/book/BookIntroduction'

export const BookInfoSummaryContainer = styled.div<{ $styleType: 'transparent' | 'lightYellow' }>`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: ${({ $styleType }) => ($styleType === 'transparent' ? '0px' : '8px')};

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
    border-radius: 12px;

    background-color: ${({ theme, $styleType }) =>
      $styleType === 'transparent' ? 'transparent' : theme.colors.famousSection};
  }
`
export const RightButton = styled.div`
  margin-top: auto;
`
export const Row = styled.div`
  display: flex;
  column-gap: 12px;
  width: 100%;
`
export const Column = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  row-gap: 8px;
`
export const Title = styled.p<{ $styleType: 'transparent' | 'lightYellow' }>`
  ${({ theme, $styleType }) =>
    $styleType === 'transparent' ? (theme.typography.titleSm as CSSObject) : (theme.typography.badgeMd as CSSObject)};
  color: ${({ theme }) => theme.colors.headerText};
  /* 여러 줄 말줄임 핵심 속성 */
  display: -webkit-box;
  -webkit-line-clamp: 2; /* 보여줄 줄 수 */
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;

  /* (선택 사항) 높이가 가변적일 경우 대비 */
  word-break: break-all;
`
export const Info = styled.p<{ $styleType: 'transparent' | 'lightYellow' }>`
  ${({ theme, $styleType }) =>
    $styleType === 'transparent' ? (theme.typography.buttonMd as CSSObject) : (theme.typography.small as CSSObject)};
  color: ${({ theme }) => theme.colors.textFieldDefaultText};
`
export const Rating = styled.div<{ $styleType: 'transparent' | 'lightYellow' }>`
  display: flex;
  column-gap: 2px;
  align-items: ${({ $styleType }) => ($styleType === 'lightYellow' ? 'start' : 'center')};
  ${({ theme }) => theme.typography.badgeSm as CSSObject};
  color: ${({ theme, $styleType }) =>
    $styleType === 'lightYellow' ? theme.colors.rating : theme.colors.textFieldFilledLine};
`
export const BookImage = styled.div`
  flex-shrink: 0;
`

// 인기 책
export const StylePopularBookLayout = styled.div`
  padding: 16px;
  display: flex;
  flex-direction: column;
  row-gap: 12px;
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
    border-radius: 12px;

    background: ${({ theme }) => theme.colors.famousSection};
  }
`

export const StylePopularBookInfo = styled.p`
  ${({ theme }) => theme.typography.subtitleMd as CSSObject};
  color: ${({ theme }) => theme.colors.textFieldFocusText};
`

// 베스트 셀러
export const StyleBestSellerItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 8px;
  width: 92px;
`

export const StyleBestSellerBookImage = styled.div`
  width: 92px; /* 부모 크기 고정 */
  height: 138px;
  flex-shrink: 0;
  border-radius: 6px;
  overflow: hidden; /* 이미지가 밖으로 나가지 않게 */

  img {
    width: 100%;
    height: 100%;
    object-fit: cover; /* 비율을 유지하며 영역을 꽉 채움 */
  }
`
export const StyleBestSellerBookRowContainer = styled.div`
  display: flex;
  flex-direction: row;
  column-gap: 12px;

  overflow-x: auto;
  white-space: nowrap;

  -webkit-overflow-scrolling: touch;

  /* 3. 스크롤바 숨기기 (디자인 깔끔하게) */
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE and Edge */
  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera */
  }

  /* 5. 내부 아이템들 설정 (가장 중요) */
  & > * {
    flex-shrink: 0;
  }
`

export const StyleBestSellerBookColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 12px;

  -webkit-overflow-scrolling: touch;

  /* 3. 스크롤바 숨기기 (디자인 깔끔하게) */
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE and Edge */
  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera */
  }

  /* 5. 내부 아이템들 설정 (가장 중요) */
  & > * {
    flex-shrink: 0;
  }
`

export const StyleBestBookTitle = styled.div`
  ${({ theme }) => theme.typography.subtitleSm as CSSObject};
  color: ${({ theme }) => theme.colors.headerText};
  /* 여러 줄 말줄임 핵심 속성 */
  display: -webkit-box;
  -webkit-line-clamp: 2; /* 보여줄 줄 수 */
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;

  /* (선택 사항) 높이가 가변적일 경우 대비 */
  word-break: break-all;
`
export const StyleBestBookAuthor = styled.div`
  ${({ theme }) => theme.typography.small as CSSObject};
  color: ${({ theme }) => theme.colors.textFieldDefaultText};
`
export const StyleBookIntroductionContent = styled.p`
  ${({ theme }) => theme.typography.bodyMd as CSSObject};
  color: ${({ theme }) => theme.colors.textFieldFilledLine};
`
