import styled from '@emotion/styled'

export const PageLayout = styled.div`
  padding-left: 20px;
  padding-right: 20px;

  /* 테마 배경색을 직접 적용합니다. */
  background-color: ${({ theme }) => theme.colors.background};
  /* 텍스트 색상도 테마에 맞게 설정합니다. */
  color: ${({ theme }) => theme.colors.headerText};

  /* 배경색 변경 시 부드럽게 전환 */
  transition:
    background-color 0.2s ease,
    color 0.2s ease;
`
