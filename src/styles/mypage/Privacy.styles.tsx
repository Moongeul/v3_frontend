import styled from '@emotion/styled'

export const StylePrivacyItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
  height: 52px;
  padding: 0 12px;
`
export const StylePrivateNoticeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  /* 남은 높이를 채우기 위한 설정 */
  width: 100%;
  min-height: 40vh; /* 화면의 40% 정도를 최소 높이로 확보 (UserProfile 아래 중앙 배치) */
  padding: 40px 0;

  /* 만약 페이지 전체에서 Header 등을 제외한 공간을 다 쓰게 하고 싶다면 */
  /* flex: 1; */
`
