import { Header, PageLayout, Spacing } from '@/components/common'
export default function ThemeLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div>
      <Header headerType={'dynamic'}>테마</Header>

      <Spacing height={60} />
      <PageLayout>{children}</PageLayout>
    </div>
  )
}
