import { Header, PageLayout, Spacing } from '@/components/common'
import AddRecordButton from '@/components/record/AddRecordButton'

export default function RatingDetailLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div>
      <Header headerType={'dynamic'} rightIcon={<AddRecordButton />}>
        별점
      </Header>
      <Spacing height={60} />
      <PageLayout>{children}</PageLayout>
    </div>
  )
}
