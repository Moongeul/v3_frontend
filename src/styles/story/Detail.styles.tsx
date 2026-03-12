import styled from '@emotion/styled'

export const StyledDetailHeader = styled.div`
  display: flex;
  align-items: center; /* 세로 중앙 정렬 추가 */
  column-gap: 8px;
  width: 100%;
  padding: 8px 20px;

  position: fixed;
  top: 60px; /* 상단에 딱 붙임 */
  left: 0;

  /* 배경(50)보다 높은 값을 주어야 위로 올라옵니다. */
  z-index: 100;

  /* 헤더가 배경색 때문에 안 보일 수 있으니 투명도를 조절하거나 확인하세요 */
  background-color: transparent;
`
export const StyledBackground = styled.div`
  /* 1. 화면 전체를 채우는 설정 */
  position: fixed; /* 또는 absolute (상황에 따라 선택) */
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: #272725;

  /* 2. 내부 콘텐츠 중앙 정렬 */
  display: flex;
  justify-content: center;
  align-items: center;

  /* 3. 내부 요소의 z-index 관리 */
  /* 부모인 StyledBackground에 z-index를 주면 내부 요소들은 자동으로 그 위에 위치합니다. */
  z-index: 50; /* 필요에 따라 조절 (Header보다 높게 하려면 100 이상 권장) */

  /* 내부 콘텐츠(자식 요소)에 직접 z-index를 부여하고 싶을 때 */
  & > * {
    z-index: 100;
    position: relative; /* z-index가 동작하려면 정적 위치(static)가 아니어야 합니다. */
  }
`
