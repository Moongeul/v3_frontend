import TermsOfService from '@/components/onboarding/TermsOfService'
import SettingProfile from '@/components/onboarding/SettingProfile'

export type OnboardingTabType = 'terms' | 'profile'

function FindOnboardingSwitcher({ tab }: { tab: OnboardingTabType }) {
  if (tab === 'terms') return <TermsOfService />
  if (tab === 'profile') return <SettingProfile />
  return <TermsOfService />
}
export default async function OnboardingPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
  const resolvedSearchParams = await searchParams

  const tab = (resolvedSearchParams.tab as OnboardingTabType) || 'terms'

  return (
    <main>
      <FindOnboardingSwitcher tab={tab} />
    </main>
  )
}
