import styled from '@emotion/styled'

export const PageLayout = styled.div`
  padding-left: 20px;
  padding-right: 20px;

  /* 화면 전체 높이를 채우기 위한 설정 */
  min-height: 100vh; /* 구형 브라우저 대응 */
  min-height: 100dvh; /* 최신 모바일 브라우저의 주소창 높이 변화 대응 */

  /* 테마 배경색 적용 */
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.headerText};

  /* 배경색 변경 시 부드럽게 전환 */
  transition:
    background-color 0.2s ease,
    color 0.2s ease;

  /* 만약 내부 요소가 적어도 배경이 끊기지 않게 하려면 */
  display: flex;
  flex-direction: column;
`
