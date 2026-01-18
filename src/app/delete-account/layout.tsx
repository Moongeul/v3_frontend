import { Header, PageLayout, Spacing } from '@/components/common'
export default function DeleteAccountLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div>
      <Header headerType={'dynamic'}>회원 탈퇴</Header>

      <Spacing height={60} />
      <PageLayout>{children}</PageLayout>
    </div>
  )
}
