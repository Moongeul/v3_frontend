import styled from '@emotion/styled'

export const StyleContent = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 4px;
`

// --- Styles (프로젝트 컨벤션에 맞춰 조정하세요) ---

export const StyleContainer = styled.div`
  display: flex;
  position: fixed;
  bottom: 120px;
  flex-direction: column;
  left: 20px; /* 좌측 여백 추가 */
  right: 20px; /* 우측 여백 추가 */

  /* 테마 배경색을 직접 적용합니다. */
  background-color: ${({ theme }) => theme.colors.background};
  /* 텍스트 색상도 테마에 맞게 설정합니다. */
  color: ${({ theme }) => theme.colors.headerText};

  /* 배경색 변경 시 부드럽게 전환 */
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
