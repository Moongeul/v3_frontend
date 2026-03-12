import styled from '@emotion/styled'

export const StyledAlarmContainer = styled.div`
  padding-bottom: 24px;
  padding-top: 20px;
  display: flex;
  column-gap: 12px;
  align-items: center;
  border-bottom: 1px solid ${({ theme }) => theme.colors.iconStarFilled};
`
export const StyledProfileImageWrapper = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 999px;
`
export const StyledContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`
export const StyledButtonWrapper = styled.div`
  display: flex;
  column-gap: 8px;
`
// 아이콘과 점을 묶어주는 부모 컨테이너
export const StyledAlarmWrapper = styled.div`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`

// 오른쪽 위에 붙는 4px 원
export const StyledAlarmCount = styled.div`
  position: absolute;
  top: 2px;
  right: 2px;
  width: 6px;
  height: 6px;
  border-radius: 999px;
  background-color: ${({ theme }) => theme.colors.textFieldError || '#FF4D4D'}; // 테마의 포인트 컬러 사용

  /* 아이콘 너머로 살짝 나가게 하고 싶다면 마진이나 좌표 조정 */
  transform: translate(20%, -20%);
  z-index: 10;
`
