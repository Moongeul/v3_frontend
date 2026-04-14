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

  // 이미지 리사이징 + 압축 (Canvas API)
  const compressImage = (blob: Blob, maxSize = 500, quality = 0.7): Promise<File> => {
    return new Promise((resolve, reject) => {
      const img = new window.Image()
      const url = URL.createObjectURL(blob)

      img.onload = () => {
        URL.revokeObjectURL(url) // 메모리 해제

        // 비율 유지하면서 maxSize 이하로 축소
        let { width, height } = img
        if (width > height) {
          if (width > maxSize) {
            height = Math.round((height * maxSize) / width)
            width = maxSize
          }
        } else {
          if (height > maxSize) {
            width = Math.round((width * maxSize) / height)
            height = maxSize
          }
        }

        const canvas = document.createElement('canvas')
        canvas.width = width
        canvas.height = height

        const ctx = canvas.getContext('2d')
        if (!ctx) return reject(new Error('Canvas context 실패'))

        ctx.drawImage(img, 0, 0, width, height)

        canvas.toBlob(
          (compressed) => {
            if (!compressed) return reject(new Error('압축 실패'))
            const file = new File([compressed], 'profile.jpg', { type: 'image/jpeg' })
            resolve(file)
          },
          'image/jpeg',
          quality // 0.0 ~ 1.0
        )
      }

      img.onerror = () => {
        URL.revokeObjectURL(url)
        reject(new Error('이미지 로드 실패'))
      }

      img.src = url
    })
  }

  const handleFileChange = async (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    const fileName = file.name.toLowerCase()
    const isHeicName = fileName.endsWith('.heic') || fileName.endsWith('.heif')
    const isHeicType = file.type === 'image/heic' || file.type === 'image/heif'
    const needsConversion = isHeicType || isHeicName

    try {
      let blobToCompress: Blob | null = null

      if (needsConversion) {
        try {
          const converted = await heic2any({
            blob: file,
            toType: 'image/jpeg',
            quality: 0.8,
          })
          blobToCompress = Array.isArray(converted) ? converted[0] : converted
        } catch (heicError) {
          console.warn('heic2any 변환 실패:', heicError)
          // ❌ 원본 HEIC를 Canvas에 넘기지 않음
          alert('이 HEIC 파일은 변환할 수 없어요. 다른 사진을 선택해주세요.')
          return
        }
      } else {
        blobToCompress = file
      }

      const compressedFile = await compressImage(blobToCompress, 500, 0.7)

      console.log(`압축 전: ${(file.size / 1024).toFixed(1)}KB → 압축 후: ${(compressedFile.size / 1024).toFixed(1)}KB`)

      const previewUrl = URL.createObjectURL(compressedFile)
      setProfileImage(compressedFile, previewUrl)
    } catch (error) {
      console.error('이미지 처리 실패:', error)
      // HEIC가 아닌 일반 이미지 실패 시에만 원본으로 폴백
      if (!needsConversion) {
        try {
          const previewUrl = URL.createObjectURL(file)
          setProfileImage(file, previewUrl)
        } catch {
          alert('이미지를 불러올 수 없어요. 다른 사진을 선택해주세요.')
        }
      }
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
          accept="image/*,.heic,.heif"
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
