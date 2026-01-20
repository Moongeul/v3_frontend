import { TagEnumType, TagKorType } from '@/types/user'
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
import { StyleResultSummaryCard } from '@/styles/test/Result.styles'
import { StyleContent } from '@/styles/common/Common.styles'
import { baseColor, typography } from '@/styles/theme'
import { Spacing } from '@/components/common'
import { useRouter } from 'next/navigation'
import { convertKorToEnumTag } from '@/utils/user'

interface ResultCardProps {
  readingTasteType: TagKorType
  intro: string
  description: string
}

export default function ResultSummaryCard({ readingTasteType, intro, description }: ResultCardProps) {
  const router = useRouter()

  const onNavigate = (path: string, type: TagEnumType | undefined) => {
    router.push(`/${path}?type=${type}`)
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
        return <TrendHunterGraphic width={96} height={115} />
      case '장르 고인물':
        return <GenreSpecialistGraphic width={109} height={119} />
      case '수다쟁이 독서가':
        return <ChattyReaderGraphic width={103} height={94} />
      case '정리왕 서평러':
        return <SystematicReaderGraphic width={100} height={120} />
      case '비밀 일기장 주인':
        return <SecretDiaristGraphic width={112} height={85} />
      case '감성 사색 정리러':
        return <EmotionalReflectorGraphic width={110} height={115} />
      case '랜덤 피커':
        return <RandomPickerGraphic width={116} height={112} />
      case '넷플릭스급 몰입러':
        return <ImmersiveReaderGraphic width={100} height={117} />
    }
  }
  return (
    <StyleResultSummaryCard
      onClick={() => onNavigate('result', convertKorToEnumTag(readingTasteType))}
      $backgroundColor={convertBgColor(readingTasteType)}
    >
      <StyleContent $typography={typography.badgeSm} $textColor={baseColor.gray900}>
        {readingTasteType}
      </StyleContent>
      <StyleContent $typography={typography.badgeSm} $textColor={baseColor.gray900}>
        {intro}
      </StyleContent>
      <Spacing height={12} />
      {convertGraphic(readingTasteType)}
      <Spacing height={12} />
      <StyleContent $typography={typography.small} $textColor={baseColor.gray900} style={{ textAlign: 'center' }}>
        {description}
      </StyleContent>
    </StyleResultSummaryCard>
  )
}
