import SettingItem from '@/components/mypage/setting/SettingItem'
import Link from 'next/link'
import { HeaderRightArrowIcon } from '@/assets/svgComponents'

export default function PolicyHome() {
  return (
    <div>
      <SettingItem
        content={'서비스 이용약관'}
        rightElement={
          <Link href={'/policy?type=service'}>
            <HeaderRightArrowIcon width={20} height={20} />
          </Link>
        }
      />
      <SettingItem
        content={'개인정보 수집·이용 동의'}
        rightElement={
          <Link href={'/policy?type=info'}>
            <HeaderRightArrowIcon width={20} height={20} />
          </Link>
        }
      />
      <SettingItem
        content={'마케팅 정보 수신 동의(선택)'}
        rightElement={
          <Link href={'/policy?type=marketing'}>
            <HeaderRightArrowIcon width={20} height={20} />
          </Link>
        }
      />
    </div>
  )
}
