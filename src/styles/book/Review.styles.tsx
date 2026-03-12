import styled from '@emotion/styled'
import { CSSObject } from '@emotion/react'
import { StoryFontType } from '@/store/storyStore'
import { TypographyType } from '@/styles/emotion'

//summary
export const StyleReviewSummaryContainer = styled.div`
  display: flex;
  column-gap: 4px;
`

export const StyleReviewSummaryContent = styled.div`
  display: flex;
  column-gap: 4px;
  align-items: center;
  ${({ theme }) => theme.typography.buttonMd as CSSObject}
  color: ${({ theme }) => theme.colors.textFieldDefaultText};
`

export const StyleReviewSummaryRating = styled.p`
  ${({ theme }) => theme.typography.subtitleMd as CSSObject}
  color: ${({ theme }) => theme.colors.headerText};
`

export const StyleReviewItemContainer = styled.div`
  display: flex;
  column-gap: 12px;
  width: 100%;
`
export const ProfileImageWrapper = styled.div`
  width: 32px;
  height: 32px;
  flex-shrink: 0; /* 컨텐츠가 많아도 크기 유지 */
  align-self: flex-start; /* 부모 높이에 따라 늘어나지 않음 */
  border-radius: 999px;
  overflow: hidden;
  position: relative; /* Image 컴포넌트 제어용 */

  img {
    object-fit: cover; /* 이미지 비율 유지하며 채움 */
  }
`

//header
export const ReviewHeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`
export const StyleReviewHeaderMetaNickName = styled.p`
  ${({ theme }) => theme.typography.badgeMd as CSSObject}
  color: ${({ theme }) => theme.colors.headerText};
`
export const StyleReviewHeaderMetaTime = styled.p`
  ${({ theme }) => theme.typography.small as CSSObject}
  color: ${({ theme }) => theme.colors.textFieldDefaultText};
`

export const StyleReviewHeaderMetaContainer = styled.div`
  display: flex;
  align-items: center;
  column-gap: 8px;
`
export const StyleReviewHeaderMetaUserInfo = styled.div`
  display: flex;
  align-items: center;
  column-gap: 4px;
`

//content
export const StyleReviewContentContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const StyleReviewContent = styled.div`
  ${({ theme }) => theme.typography.subtitleMd as CSSObject}
  color: ${({ theme }) => theme.colors.headerText};
`

export const StyleReviewContentMeta = styled.div`
  display: flex;
  column-gap: 8px;
  align-items: center;
  ${({ theme }) => theme.typography.badgeSm as CSSObject}
`

export const StyleReviewContentMetaDate = styled.div`
  display: flex;
  column-gap: 8px;
  ${({ theme }) => theme.typography.badgeSm as CSSObject}
  color: ${({ theme }) => theme.colors.textFieldDefaultText};
`

//인용구
export const StyleBookQuoteRowContainer = styled.div<{ $isBorderLeft?: boolean }>`
  display: flex;
  column-gap: 4px;
  margin-left: 2px;
  padding-left: 8px;
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
    border-left: 1px solid ${({ theme, $isBorderLeft }) => ($isBorderLeft ? theme.colors.textFieldFilledLine : 0)};
  }
`
export const StyleBookQuoteColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
`
export const StyleQuoteContent = styled.div<{ $typography: TypographyType }>`
  ${({ theme, $typography }) => ($typography ? ($typography as CSSObject) : (theme.typography.badgeMd as CSSObject))}
  color: ${({ theme }) => theme.colors.textFieldFilledLine};
`
export const StyleQuotePage = styled.div`
  ${({ theme }) => theme.typography.badgeSm as CSSObject}
  color: ${({ theme }) => theme.colors.textFieldDefaultLine};
`
