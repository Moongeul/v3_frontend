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

    const isHeicName = file.name.toLowerCase().endsWith('.heic') || file.name.toLowerCase().endsWith('.heif')

    const isHeicType = file.type === 'image/heic' || file.type === 'image/heif'

    // 파일명은 heic인데 type이 jpeg면 → iOS가 이미 변환한 것
    // → 그냥 원본 사용
    if (isHeicName && !isHeicType) {
      const previewUrl = URL.createObjectURL(file)
      setProfileImage(file, previewUrl)
      return
    }

    // type이 명확히 heic/heif일 때만 변환 시도
    if (isHeicType) {
      try {
        const convertedBlob = await heic2any({
          blob: file,
          toType: 'image/jpeg',
          quality: 0.8,
        })

        const blob = Array.isArray(convertedBlob) ? convertedBlob[0] : convertedBlob

        const convertedFile = new File([blob], file.name.replace(/\.(heic|heif)$/i, '.jpg'), { type: 'image/jpeg' })

        const previewUrl = URL.createObjectURL(convertedFile)
        setProfileImage(convertedFile, previewUrl)
      } catch (error) {
        console.error('HEIC 변환 실패 코드:', error)

        // 변환 실패해도 원본으로 시도 (iOS 자동변환 케이스 fallback)
        try {
          const previewUrl = URL.createObjectURL(file)
          setProfileImage(file, previewUrl)
        } catch {
          alert('이미지를 불러올 수 없어요. 다른 사진을 선택해주세요.')
        }
      }
      return
    }

    // 일반 이미지
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
