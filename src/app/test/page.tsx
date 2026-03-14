import { fetchReadingTasteTotalCount } from '@/lib/server/test'

export const dynamic = 'force-dynamic'

import {
  Question1,
  Question10,
  Question11,
  Question12,
  Question2,
  Question3,
  Question4,
  Question5,
  Question6,
  Question7,
  Question8,
  Question9,
} from '@/components/test'
import Onboarding from '@/components/test/Onboarding'

export type TestStepType = 'onboarding' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | '11' | '12'

function FindTestProcessStepSwitcher({
  step,
  totalParticipants,
}: {
  step: TestStepType
  totalParticipants: number | undefined
}) {
  if (step === 'onboarding') return <Onboarding totalParticipants={totalParticipants} />
  if (step === '1') return <Question1 />
  if (step === '2') return <Question2 />
  if (step === '3') return <Question3 />
  if (step === '4') return <Question4 />
  if (step === '5') return <Question5 />
  if (step === '6') return <Question6 />
  if (step === '7') return <Question7 />
  if (step === '8') return <Question8 />
  if (step === '9') return <Question9 />
  if (step === '10') return <Question10 />
  if (step === '11') return <Question11 />
  if (step === '12') return <Question12 />

  return <Question1 />
}

export default async function TestPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
  const resolvedSearchParams = await searchParams
  const step = (resolvedSearchParams.step as TestStepType) || 'onboarding'
  const result = await fetchReadingTasteTotalCount()

  const totalParticipants = result.data?.totalParticipants

  return (
    <main>
      <FindTestProcessStepSwitcher step={step} totalParticipants={totalParticipants} />
    </main>
  )
}
