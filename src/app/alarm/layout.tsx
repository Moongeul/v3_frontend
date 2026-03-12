import { Header, Spacing } from '@/components/common'
import AlarmPageLayout from '@/components/alarm/AlarmPageLayout'
export default function AlarmLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div>
      <Header headerType={'dynamic'}>알림</Header>

      <Spacing height={60} />
      <AlarmPageLayout>{children}</AlarmPageLayout>
    </div>
  )
}
