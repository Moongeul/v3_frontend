import { Header, PageLayout, Spacing } from '@/components/common'
import WithDrawContent from '@/components/mypage/withdraw/WithDrawContent'
import Reason from '@/components/mypage/withdraw/Reason'
import WithDrawBottomButton from '@/components/mypage/withdraw/WithDrawBottomButton'

export default function WithDrawPage() {
  return (
    <main>
      <Header headerType={'dynamic'}>회원 탈퇴</Header>
      <Spacing height={80} />

      <PageLayout>
        <div>
          <WithDrawContent />
          <Spacing height={32} />
          <Reason />
          <WithDrawBottomButton />
        </div>
      </PageLayout>
    </main>
  )
}
