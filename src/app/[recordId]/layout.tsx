import { Header, PageLayout, Spacing } from '@/components/common'
import { StoryWriteButton } from '@/components/story'
export default async function RecordDetailLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode
  params: Promise<{ recordId: string }>
}>) {
  const { recordId } = await params
  return (
    <div>
      <Header headerType={'dynamic'} rightIcon={<StoryWriteButton recordId={recordId} />} />

      <Spacing height={60} />
      <PageLayout>{children}</PageLayout>
    </div>
  )
}
