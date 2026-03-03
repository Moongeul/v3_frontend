import styled from '@emotion/styled'

export const StyledNoticeItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 0;
`
export const StyledNoticeItem = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 8px;
`
export const StyledUploadDateWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end; /* 우측 정렬 */
  align-items: center; /* 세로 중앙 정렬 (필요에 따라 flex-end) */

  /* 만약 내부 Label에 기본 마진이 있다면 제거 */
  & > * {
    margin-right: 0;
  }
`
