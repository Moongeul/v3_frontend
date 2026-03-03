'use client'

import { ChangeEvent } from 'react'
import {
  StyledSettingProfileImageButton,
  StyledSettingProfileImageContainer,
  StyledSettingProfileImageWrapper,
  PreviewImage,
} from '@/styles/onboarding/SettingProfile.styles'
import { AddWhiteIcon, ProfileIcon } from '@/assets/svgComponents'
import { useOnboardingStore } from '@/store/onboardingStore'

export default function ProfileImage() {
  // 스토어에서 상태와 함수 가져오기
  const { profilePreview, setProfileImage } = useOnboardingStore()

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]

    if (file) {
      // 1. 미리보기용 URL 생성
      const previewUrl = URL.createObjectURL(file)

      // 2. 스토어에 File 객체와 Preview URL 모두 저장
      setProfileImage(file, previewUrl)
    }
  }

  return (
    <StyledSettingProfileImageContainer>
      <StyledSettingProfileImageWrapper htmlFor="profile-upload">
        <StyledSettingProfileImageButton as="div">
          <AddWhiteIcon width={20} height={20} />
        </StyledSettingProfileImageButton>

        <input
          id="profile-upload"
          type="file"
          onChange={handleFileChange}
          accept="image/*"
          style={{ display: 'none' }}
        />

        {profilePreview ? (
          <PreviewImage src={profilePreview} alt="프로필 미리보기" />
        ) : (
          <ProfileIcon width={100} height={100} />
        )}
      </StyledSettingProfileImageWrapper>
    </StyledSettingProfileImageContainer>
  )
}
