import { Header, PageLayout, Spacing } from '@/components/common'
import AddRecordButton from '@/components/record/AddRecordButton'

export default function ReportLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div>
      <Header headerType={'title'} rightIcon={<AddRecordButton />}>
        책장 및 리포트
      </Header>
      <Spacing height={60} />

      <PageLayout>{children}</PageLayout>
    </div>
  )
}
