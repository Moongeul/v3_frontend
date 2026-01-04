import { AlarmIcon, SearchIcon } from '@/assets/svgComponents'
import { Header, PageLayout, Spacing } from '@/components/common'
export default function BookLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div>
      <Header
        headerType={'default'}
        leftIcon={<SearchIcon width={24} height={24} />}
        rightIcon={<AlarmIcon width={24} height={24} />}
      />

      <Spacing height={60} />
      <PageLayout>{children}</PageLayout>
    </div>
  )
}
