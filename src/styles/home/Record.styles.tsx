import styled from '@emotion/styled'
import { CSSObject } from '@emotion/react'

export const StyleRecordListWrapper = styled.div`
  display: flex;
  column-gap: 8px;
  overflow-x: scroll;
`

export const StyleRecordList = styled.div`
  display: flex;
  column-gap: 8px;
  overflow-x: scroll;
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

export const StyleRecordCard = styled.div`
  height: 96px;
  width: 72px;
  padding: 4px;
  border-radius: 4px;
  position: relative;
  background-color: ${({ theme }) => theme.colors.baseColor.gray50};
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
export const StyleProfileContainer = styled.div`
  position: absolute;
  top: 4px;
  left: 4px;
`
