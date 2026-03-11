import SettingItem from '@/components/mypage/setting/SettingItem'
import SettingLogoutItem from '@/components/mypage/setting/SettingLogoutItem'
import SettingDeleteAccountItem from '@/components/mypage/setting/SettingDeleteAccountItem'
import { HeaderRightArrowIcon } from '@/assets/svgComponents'
import Version from '@/components/mypage/setting/Version'
import Link from 'next/link'

export default function SettingPage() {
  return (
    <main>
      <SettingItem
        content={'계정 공개 범위 설정'}
        rightElement={
          <Link href={'/privacy'}>
            <HeaderRightArrowIcon width={20} height={20} />
          </Link>
        }
      />
      <SettingItem
        content={'알림'}
        rightElement={
          <Link href={'/setting-alarm'}>
            <HeaderRightArrowIcon width={20} height={20} />
          </Link>
        }
      />
      <SettingItem
        content={'테마'}
        rightElement={
          <Link href={'/theme'}>
            <HeaderRightArrowIcon width={20} height={20} />
          </Link>
        }
      />
      <SettingItem
        content={'이용 약관'}
        rightElement={
          <Link href={'/policy?type=home'}>
            <HeaderRightArrowIcon width={20} height={20} />
          </Link>
        }
      />
      <SettingItem content={'버전'} rightElement={<Version version={'1.0'}></Version>} />
      <SettingLogoutItem />
      <SettingDeleteAccountItem />
    </main>
  )
}
