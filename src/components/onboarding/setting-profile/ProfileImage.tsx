'use client'

import { ChangeEvent } from 'react'
import heic2any from 'heic2any'
import {
  StyledSettingProfileImageButton,
  StyledSettingProfileImageContainer,
  StyledSettingProfileImageWrapper,
  PreviewImage,
} from '@/styles/onboarding/SettingProfile.styles'
import { AddWhiteIcon, ProfileIcon } from '@/assets/svgComponents'
import { useOnboardingStore } from '@/store/onboardingStore'

export default function ProfileImage() {
  const { profilePreview, setProfileImage } = useOnboardingStore()

  const handleFileChange = async (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    // HEIC/HEIF 파일인지 확인
    const isHeic =
      file.type === 'image/heic' ||
      file.type === 'image/heif' ||
      file.name.toLowerCase().endsWith('.heic') ||
      file.name.toLowerCase().endsWith('.heif')

    if (isHeic) {
      try {
        // HEIC → JPEG Blob으로 변환
        const convertedBlob = await heic2any({
          blob: file,
          toType: 'image/jpeg',
          quality: 0.8,
        })

        // heic2any는 Blob | Blob[] 반환하므로 배열 처리 필요
        const blob = Array.isArray(convertedBlob) ? convertedBlob[0] : convertedBlob

        // Blob → File 객체로 변환 (파일명 .jpg로 교체)
        const convertedFile = new File([blob], file.name.replace(/\.heic$/i, '.jpg').replace(/\.heif$/i, '.jpg'), {
          type: 'image/jpeg',
        })

        const previewUrl = URL.createObjectURL(convertedFile)
        setProfileImage(convertedFile, previewUrl)
      } catch (error) {
        console.error('HEIC 변환 실패:', error)
        alert('이미지 변환에 실패했어요. 다른 형식의 사진을 사용해주세요.')
      }
      return
    }

    // 일반 이미지 (기존 로직 유지)
    const previewUrl = URL.createObjectURL(file)
    setProfileImage(file, previewUrl)
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
          accept="image/*,.heic,.heif" // HEIC 명시적으로 추가
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
