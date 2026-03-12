// src/app/policy/layout.tsx
import { Header, PageLayout, Spacing } from '@/components/common'
import SaveStoryButton from '@/components/story/SaveStoryButton'

export default function WriteStoryLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Header headerType={'dynamic'} rightIcon={<SaveStoryButton />}>
        스토리 제작
      </Header>

      <Spacing height={60} />
      <PageLayout>{children}</PageLayout>
    </div>
  )
}
