'use client'

import { StyleResultCard } from '@/styles/test/Result.styles'
import { StyleContent } from '@/styles/common/Common.styles'
import { baseColor, typography } from '@/styles/theme'
import { TagEnumType, TagKorType } from '@/types/user'
import { Button, Spacing } from '@/components/common'
import {
  ChattyReaderGraphic,
  EmotionalReflectorGraphic,
  GenreSpecialistGraphic,
  ImmersiveReaderGraphic,
  RandomPickerGraphic,
  SecretDiaristGraphic,
  SystematicReaderGraphic,
  TrendHunterGraphic,
} from '@/assets/svgComponents/result'
import ResultDescription from '@/components/test/result/ResultDescription'
import { useRouter } from 'next/navigation'

interface ResultCardProps {
  readingTasteType: TagKorType
  intro: string
}

export default function ResultCard({ readingTasteType, intro }: ResultCardProps) {
  const router = useRouter()

  const onNavigate = () => {
    router.push(`/result/all`)
  }

  const convertBgColor = (tagType: TagKorType) => {
    switch (tagType) {
      case '신상 헌터':
        return '#3EDFBC'
      case '장르 고인물':
        return '#7AA0FF'
      case '수다쟁이 독서가':
        return '#FFC354'
      case '정리왕 서평러':
        return '#A9E179'
      case '비밀 일기장 주인':
        return '#EB7AFF'
      case '감성 사색 정리러':
        return '#FF927A'
      case '랜덤 피커':
        return '#FF96C0'
      case '넷플릭스급 몰입러':
        return '#68BDDC'
    }
  }

  const convertGraphic = (tagType: TagKorType) => {
    switch (tagType) {
      case '신상 헌터':
        return <TrendHunterGraphic width={199} height={239} />
      case '장르 고인물':
        return <GenreSpecialistGraphic width={218} height={239} />
      case '수다쟁이 독서가':
        return <ChattyReaderGraphic width={234} height={212} />
      case '정리왕 서평러':
        return <SystematicReaderGraphic width={200} height={240} />
      case '비밀 일기장 주인':
        return <SecretDiaristGraphic width={263} height={200} />
      case '감성 사색 정리러':
        return <EmotionalReflectorGraphic width={219} height={229} />
      case '랜덤 피커':
        return <RandomPickerGraphic width={226} height={219} />
      case '넷플릭스급 몰입러':
        return <ImmersiveReaderGraphic width={204} height={240} />
    }
  }

  return (
    <StyleResultCard $backgroundColor={convertBgColor(readingTasteType)}>
      <StyleContent $typography={typography.bodySm} $textColor={baseColor.lightYellow50}>
        당신의 취향은?
      </StyleContent>
      <Spacing height={12} />
      <StyleContent $typography={typography.titleMd} $textColor={baseColor.gray900}>
        {readingTasteType}
      </StyleContent>
      <StyleContent $typography={typography.subtitleLg} $textColor={baseColor.gray900}>
        &#34;{intro}&#34;
      </StyleContent>
      <Spacing height={24} />
      {convertGraphic(readingTasteType)}
      <Spacing height={24} />
      <ResultDescription readingTasteType={readingTasteType} />
      <Spacing height={16} />
      <Button textColor={baseColor.lightYellow50} onClick={onNavigate} width={127} variant={'ghost'} size={'sm'}>
        모든 결과 유형보기
      </Button>
    </StyleResultCard>
  )
}
