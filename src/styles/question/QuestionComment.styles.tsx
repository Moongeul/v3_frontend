import styled from '@emotion/styled'

export const StyleCommentInputWrapper = styled.div`
  display: flex;
  align-items: center;
  column-gap: 8px;
  padding: 12px 20px 42px 20px;

  /* 수정된 부분 */
  position: absolute; /* fixed 대신 absolute를 사용하면 부모의 375px 기준이 됩니다 */
  bottom: 0;
  left: 0;
  width: 100%; /* 이제 부모인 375px의 100%가 됩니다 */

  background-color: ${({ theme }) => theme.colors.background};
  z-index: 10;

  & > div:first-of-type {
    flex: 1;
  }
`
