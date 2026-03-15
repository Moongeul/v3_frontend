'use client'

import {
  PreviewImage,
  StyledSettingProfileImageButton,
  StyledSettingProfileImageContainer,
  StyledSettingProfileImageWrapper,
} from '@/styles/onboarding/SettingProfile.styles'
import { AddWhiteIcon, ProfileIcon } from '@/assets/svgComponents'
import { ChangeEvent, useEffect } from 'react'
import { useMypageStore } from '@/store/mypageStore'

interface EditProfileImageProps {
  initialImageUrl?: string | null // 부모로부터 받을 초기 이미지 URL
}

export default function EditProfileImage({ initialImageUrl }: EditProfileImageProps) {
  const { profilePreview, setProfileImage } = useMypageStore()

  // 1. 컴포넌트 마운트 시 초기값 세팅
  useEffect(() => {
    if (initialImageUrl && !profilePreview) {
      // 이미 파일 선택으로 생성된 preview가 없을 때만 초기값 설정
      setProfileImage(null, initialImageUrl)
    }
  }, [initialImageUrl, setProfileImage, profilePreview])

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]

    if (file) {
      const previewUrl = URL.createObjectURL(file)
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

        {/* 2. profilePreview가 있으면 보여주고, 없으면 기본 아이콘 */}
        {profilePreview ? (
          <PreviewImage src={profilePreview} alt="프로필 미리보기" />
        ) : (
          <ProfileIcon width={100} height={100} />
        )}
      </StyledSettingProfileImageWrapper>
    </StyledSettingProfileImageContainer>
  )
}
