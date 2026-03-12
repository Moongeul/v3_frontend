'use client'

import {
  StyleProfileContainer,
  StyleRecordCard,
  StyleRecordCardContainer,
  StyleRecordCardText,
  StyleImageWrapper,
  StyleImageOverlay, // 새로 추가한 스타일
} from '@/styles/home/Record.styles'
import Image from 'next/image'

interface StoryCardProps {
  storyImage: string
  profileImage: string
  nickname: string
}

export default function RecordCard({ storyImage, profileImage, nickname }: StoryCardProps) {
  return (
    <StyleRecordCardContainer>
      <StyleRecordCard>
        {/* 1. 어둡게 덮는 레이어 (이미지보다 위에, 프로필보다 아래에 위치) */}
        <StyleImageOverlay />
        {/* 상단 프로필 이미지 */}
        <StyleProfileContainer>
          <Image
            alt={'프로필'}
            src={profileImage}
            width={20}
            height={20}
            style={{ borderRadius: 999, objectFit: 'cover' }}
          />
        </StyleProfileContainer>

        {/* 중앙 스토리 이미지 */}
        <StyleImageWrapper>
          <Image
            alt={'스토리'}
            src={storyImage}
            width={64} // (카드너비 72) - (StyleRecordCard 패딩 4*2) = 64
            height={0} // 비율에 맞게 조절되도록 설정
            sizes="100vw"
            style={{
              width: '100%',
              height: 'auto', // 비율 유지
              borderRadius: '2px', // 이미지 끝 살짝 굴림 (선택)
            }}
          />
        </StyleImageWrapper>
      </StyleRecordCard>

      <StyleRecordCardText>{nickname}</StyleRecordCardText>
    </StyleRecordCardContainer>
  )
}
