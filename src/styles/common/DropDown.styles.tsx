import styled from '@emotion/styled'
import { CSSObject } from '@emotion/react'

export const DropDownContainer = styled.div`
  padding-top: 68px;
  display: flex;
  column-gap: 8px;
  width: 100%;
`

export const DropDown = styled.div<{ $width?: number }>`
  position: relative;
  width: ${({ $width }) => ($width ? `${$width}px` : `100%`)};
`

export const SelectBox = styled.div<{ $isFocus: boolean; $isSelectedValue: boolean }>`
    width: 100%;
    padding: 12px;
    display: flex;
    row-gap: 8px;
    justify-items: center;
    justify-content: space-between;
    align-items: center;
    position: relative;
    border-radius: 6px;
    ${({ theme }) => theme.typography.buttonMd as CSSObject}
    border: ${({ $isFocus, $isSelectedValue, theme }) => (!$isSelectedValue ? theme.colors.textFieldDefaultLine : $isFocus ? theme.colors.textFieldFocusLine : theme.colors.textFieldDefaultLine)};
    background-color: ${({ theme }) => theme.colors.textFieldFill};
    color: ${({ $isFocus, $isSelectedValue, theme }) => (!$isSelectedValue ? theme.colors.textFieldDefaultText : $isFocus ? theme.colors.textFieldFocusText : theme.colors.textFieldFocusText)};
    /* 연필 효과를 위한 가상 요소 (Border 역할) */
    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 0;

        border: 1px solid;
        border-radius: 6px;

        /* 연필 효과 필터 적용 */
        filter: url('#pencil-texture');
        pointer-events: none;
`
// 4. 드롭다운 메뉴 (Absolute 적용)
export const SelectOption = styled.div`
  position: absolute;
  top: calc(100% + 8px); /* SelectBox 바로 아래에 8px 간격 */
  left: 0;
  width: 100%;
  z-index: 50; /* 다른 요소보다 위에 떠야 함 */
  padding: 8px; /* 내부 아이템 간격 */
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.textFieldFill};
  border-radius: 6px;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
    border: 1px solid ${({ theme }) => theme.colors.textFieldDefaultLine};
    border-radius: 6px;
    filter: url('#pencil-texture');
    pointer-events: none;
  }
`
export const SelectOptionItem = styled.div`
  padding-top: 9px;
  padding-bottom: 9px;
  ${({ theme }) => theme.typography.buttonMd as CSSObject};
  color: ${({ theme }) => theme.colors.textFieldDefaultText};
`
export const SelectOptionInputContainer = styled.div`
  display: flex;
  justify-content: space-between;
  justify-items: center;
  column-gap: 8px;
`
export const SelectOptionInput = styled.input`
  width: 100%;
  outline: none;
  color: ${({ theme }) => theme.colors.textFieldDefaultText};
  ${({ theme }) => theme.typography.buttonMd as CSSObject};
`
