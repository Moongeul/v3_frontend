import styled from '@emotion/styled'

export const StyledAlarmContainer = styled.div`
  padding-bottom: 24px;
  padding-top: 20px;
  display: flex;
  row-gap: 12px;
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
`
