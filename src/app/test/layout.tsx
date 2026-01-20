import { PageLayout, Spacing } from '@/components/common'
import { TestHeader } from '@/components/test/TestHeader'
export default function TestLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div>
      <TestHeader />

      <Spacing height={60} />
      <PageLayout>{children}</PageLayout>
    </div>
  )
}
