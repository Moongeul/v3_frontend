import { AlarmIcon, SettingIcon } from '@/assets/svgComponents'
import { Header, PageLayout, Spacing } from '@/components/common'
import Link from 'next/link'
export default function MypageLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div>
      <Header
        headerType={'title'}
        leftIcon={
          <Link href={'/alarm'}>
            <AlarmIcon width={24} height={24} />
          </Link>
        }
        rightIcon={
          <Link href={'/setting'}>
            <SettingIcon width={36} height={36} />
          </Link>
        }
      >
        마이페이지
      </Header>

      <Spacing height={60} />
      <PageLayout>{children}</PageLayout>
    </div>
  )
}
