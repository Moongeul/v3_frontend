import { TagEnumType } from '@/types/user'
import { SearchParams } from 'next/dist/server/request/search-params'
import TrendHunterCard from '@/components/test/result/TrendHunterCard'
import EmotionalReflectorCard from '@/components/test/result/EmotionalReflectorCard'
import RandomPickerCard from '@/components/test/result/RandomPickerCard'
import GenreSpecialistCard from '@/components/test/result/GenreSpecialistCard'
import SecretDiaristCard from '@/components/test/result/SecretDiaristCard'
import ImmersiveReaderCard from '@/components/test/result/ImmersiveReaderCard'
import SystematicReaderCard from '@/components/test/result/SystematicReaderCard'
import ChattyReaderCard from '@/components/test/result/ChattyReaderCard'
import ResultBottomButton from '@/components/test/result/ResultBottomButton'
import { Spacing } from '@/components/common'

function FindResultSwitcher({ type }: { type: TagEnumType }) {
  if (type === 'TREND_HUNTER') return <TrendHunterCard />
  if (type === 'EMOTIONAL_REFLECTOR') return <EmotionalReflectorCard />
  if (type === 'CHATTY_READER') return <ChattyReaderCard />
  if (type === 'SYSTEMATIC_READER') return <SystematicReaderCard />
  if (type === 'IMMERSIVE_READER') return <ImmersiveReaderCard />
  if (type === 'SECRET_DIARIST') return <SecretDiaristCard />
  if (type === 'GENRE_SPECIALIST') return <GenreSpecialistCard />
  if (type === 'RANDOM_PICKER') return <RandomPickerCard />

  return <TrendHunterCard />
}

interface TestPageProps {
  searchParams: SearchParams
}

export default function ResultPage({ searchParams }: TestPageProps) {
  const type = (searchParams.type as TagEnumType) || 'TREND_HUNTER'

  return (
    <main>
      <FindResultSwitcher type={type} />

      <Spacing height={80} />
      <ResultBottomButton />
    </main>
  )
}
