import styled from '@emotion/styled'

export const StyleContent = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 4px;
`

export const StyleContainer = styled.div`
  display: flex;
  flex-direction: column;

  /* 🌟 absolute로 변경하여 부모(375px) 하단에 박아버립니다. */
  position: absolute;
  bottom: 180px; /* 바닥에서 120px 띄움 */
  left: 0;

  /* 부모 너비를 다 채우되, 내부 여백을 위해 100% 사용 */
  width: 100%;
  padding: 0 20px;
  box-sizing: border-box;

  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.headerText};

  transition:
    background-color 0.2s ease,
    color 0.2s ease;
`

export const StyleAllAgreementBox = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  cursor: pointer;
`

export const StyleDivider = styled.div`
  height: 1px;
  background-color: ${({ theme }) => theme.colors.baseColor.gray300 || '#eee'};
  margin-bottom: 8px;
  margin-top: 12px;
`

export const StyleList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`

export const StyleTermItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  height: 52px;
`
export const StyleTermItem = styled.div`
  display: flex;
  justify-content: space-between;

  align-items: center;
  gap: 8px;
  cursor: pointer;
`

// 임시 체크박스 UI (실제 이미지나 아이콘으로 대체하세요)
export const StyleCheckbox = styled.div<{ isChecked: boolean }>`
  width: 20px;
`
