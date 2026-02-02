import styled from '@emotion/styled'

export const StyleCommentInputWrapper = styled.div`
  display: flex;
  align-items: center; /* 버튼과 인풋의 세로 중앙 정렬 */
  column-gap: 8px;
  padding: 12px 20px 42px 20px; /* 오른쪽 패딩을 44에서 20으로 조절 (버튼 위치 고려) */
  position: fixed;
  background-color: ${({ theme }) => theme.colors.background};
  bottom: 0;
  left: 0;
  width: 100%;
  z-index: 10;

  /* TextInput 컴포넌트의 최상위 div를 꽉 채우게 만듦 */
  & > div:first-of-type {
    flex: 1;
  }
`
