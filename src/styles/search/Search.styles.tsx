import styled from '@emotion/styled'
import { CSSObject } from '@emotion/react'

export const StyledAllUserWrapper = styled.div`
  display: flex;
  column-gap: 12px;
`
export const StyledAllUserItem = styled.div``
export const StyledProfileImage = styled.div``
//////////////////////////////////////////////////////////////////////////////////////////
export const StyledUserListWrapper = styled.div``
export const StyledUserItem = styled.div`
  display: flex;
  flex-direction: column;
  column-gap: 12px;
  align-items: center;
`
export const StyledUserItemWrapper = styled.div`
  display: flex;
  align-items: center;
  column-gap: 12px;
`
export const StyledUserNickname = styled.div`
  ${({ theme }) => theme.typography.badgeMd as CSSObject}
  color: ${({ theme }) => theme.colors.headerText};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 60px; /* 프로필 이미지 너비와 맞추거나 적절한 너비 설정 */
  text-align: center;
`
export const StyledUserProfileImage = styled.div`
  width: 48px;
  height: 48px;
`
export const StyledNoSearchResult = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
