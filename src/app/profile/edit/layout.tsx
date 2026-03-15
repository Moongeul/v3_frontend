import { Header, PageLayout, Spacing } from '@/components/common'
import AddRecordButton from '@/components/record/AddRecordButton'

export default function EditProfileLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div>
      <Header headerType={'dynamic'} path={'/mypage'}>
        프로필 수정
      </Header>
      <Spacing height={60} />
      <PageLayout>{children}</PageLayout>
    </div>
  )
}
