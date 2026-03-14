import styled from '@emotion/styled'

export const StyledDetailHeader = styled.div`
  display: flex;
  align-items: center;
  column-gap: 8px;

  /* 🌟 수정: 100%는 부모(375px)를 기준으로 하게 됨 */
  width: 100%;
  max-width: 375px;
  padding: 8px 20px;

  position: fixed;
  top: 60px;
  /* 🌟 수정: 브라우저 왼쪽 끝이 아니라 컨테이너의 중앙에 맞춰야 함 */
  left: 50%;
  transform: translateX(-50%);

  z-index: 100;
  background-color: transparent;
  box-sizing: border-box; /* 패딩이 너비에 영향을 주지 않도록 설정 */
`

export const StyledBackground = styled.div`
  position: fixed;
  top: 0;
  /* 🌟 수정: 헤더와 마찬가지로 375px 컨테이너 안에 가둠 */
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  max-width: 375px;
  height: 100vh;
  background-color: #272725;

  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 50;

  & > * {
    z-index: 100;
    position: relative;
  }
`
