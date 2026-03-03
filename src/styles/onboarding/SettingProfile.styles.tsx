import styled from '@emotion/styled'

export const StyledSettingProfileImageContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

// div에서 label로 변경하여 클릭 영역 확장
export const StyledSettingProfileImageWrapper = styled.label`
  width: 100px;
  height: 100px;
  position: relative;
  display: block;
  cursor: pointer;
  border-radius: 50%;

  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.02); // 살짝 커지는 효과로 클릭 가능함을 암시
  }
`

export const PreviewImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
`

export const StyledSettingProfileImageButton = styled.div`
  width: 24px;
  height: 24px;
  border-radius: 999px;
  background-color: ${({ theme }) => theme.colors.buttonActivePrimary};
  position: absolute;
  bottom: 0px;
  right: 0px;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: none; // 클릭 이벤트가 부모(label)로 전달되도록 설정
`

//////////////////////////////////////////////////////////////////////////////////////////////////

// styles/onboarding/SettingProfile.styles.ts

export const StyledNicknameWrapper = styled.div`
  display: flex;
  column-gap: 8px;
  width: 100%;
`
//////////////////////////////////////////////////////////////////////////////////////////////////
export const StyledRandomNicknameButtonWrapper = styled.div`
  position: fixed;
  bottom: 120px;
  left: 20px;
  right: 20px;
`
