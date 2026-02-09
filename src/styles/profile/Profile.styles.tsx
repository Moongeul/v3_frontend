import styled from '@emotion/styled'

export const StyleUserProfileButtons = styled.div`
  display: flex;
  width: 100%; /* 컨테이너가 화면 가로를 꽉 채우도록 */
  column-gap: 12px; /* 버튼 사이 간격 */

  & > button,
  & > a,
  & > div {
    /* 버튼 컴포넌트의 최상위 태그에 맞춰 적용 */
    flex: 1; /* 핵심: 남은 공간을 1:1 비율로 똑같이 나눠 가짐 */
  }
`
