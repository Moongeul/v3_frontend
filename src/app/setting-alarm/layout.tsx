import { Header, PageLayout, Spacing } from '@/components/common'
export default function SettingAlarmLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div>
      <Header headerType={'dynamic'}>알림설정</Header>

      <Spacing height={60} />
      <PageLayout>{children}</PageLayout>
    </div>
  )
}
