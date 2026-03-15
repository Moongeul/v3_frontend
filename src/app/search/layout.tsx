import { Header, PageLayout, Spacing } from '@/components/common'
import SearchHeader from '@/components/search/SearchHeader'
export default function BookLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div>
      <SearchHeader />

      <Spacing height={60} />
      <PageLayout>{children}</PageLayout>
    </div>
  )
}
