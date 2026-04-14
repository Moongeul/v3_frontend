'use client'

import {
  PreviewImage,
  StyledSettingProfileImageButton,
  StyledSettingProfileImageContainer,
  StyledSettingProfileImageWrapper,
} from '@/styles/onboarding/SettingProfile.styles'
import { AddWhiteIcon, ProfileIcon } from '@/assets/svgComponents'
import { ChangeEvent, useEffect, useState } from 'react'
import { useMypageStore } from '@/store/mypageStore'
import heic2any from 'heic2any'

interface EditProfileImageProps {
  initialImageUrl?: string | null
}

export default function EditProfileImage({ initialImageUrl }: EditProfileImageProps) {
  const { profilePreview, setProfileImage } = useMypageStore()
  const [imgError, setImgError] = useState(false)

  useEffect(() => {
    if (initialImageUrl && !profilePreview) {
      setProfileImage(null, initialImageUrl)
      // setImgError(false) 제거
    }
  }, [initialImageUrl, setProfileImage, profilePreview])

  const compressImage = (blob: Blob, maxSize = 500, quality = 0.7): Promise<File> => {
    return new Promise((resolve, reject) => {
      const img = new window.Image()
      const url = URL.createObjectURL(blob)

      img.onload = () => {
        URL.revokeObjectURL(url)
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
            resolve(new File([compressed], 'profile.jpg', { type: 'image/jpeg' }))
          },
          'image/jpeg',
          quality
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
    const needsConversion =
      file.type === 'image/heic' ||
      file.type === 'image/heif' ||
      fileName.endsWith('.heic') ||
      fileName.endsWith('.heif')

    try {
      let blobToCompress: Blob = file

      if (needsConversion) {
        try {
          const converted = await heic2any({ blob: file, toType: 'image/jpeg', quality: 0.8 })
          blobToCompress = Array.isArray(converted) ? converted[0] : converted
        } catch {
          alert('이 HEIC 파일은 변환할 수 없어요. 다른 사진을 선택해주세요.')
          return
        }
      }

      const compressedFile = await compressImage(blobToCompress, 500, 0.7)
      const previewUrl = URL.createObjectURL(compressedFile)
      setProfileImage(compressedFile, previewUrl)
      setImgError(false)
    } catch {
      // HEIC 아닌 일반 이미지 실패 시 원본 폴백
      if (!needsConversion) {
        const previewUrl = URL.createObjectURL(file)
        setProfileImage(file, previewUrl)
      }
    }
  }

  const showPreview = profilePreview && !imgError

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

        {showPreview ? (
          <PreviewImage src={profilePreview} alt="프로필 미리보기" onError={() => setImgError(true)} />
        ) : (
          <ProfileIcon width={100} height={100} />
        )}
      </StyledSettingProfileImageWrapper>
    </StyledSettingProfileImageContainer>
  )
}
