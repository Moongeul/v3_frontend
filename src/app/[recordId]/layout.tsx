import { Header, PageLayout, Spacing } from '@/components/common'
import { StoryWriteButton } from '@/components/story'
export default function BookLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div>
      <Header headerType={'dynamic'} rightIcon={<StoryWriteButton />} />

      <Spacing height={60} />
      <PageLayout>{children}</PageLayout>
    </div>
  )
}
