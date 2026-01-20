import AllResultList from '@/components/test/result/AllResultList'
import { Spacing } from '@/components/common'
import AllResultShareButton from '@/components/test/result/AllResultShareButton'

export default function TestResultAllPage() {
  return (
    <main>
      <AllResultList />
      <Spacing height={80} />
      <AllResultShareButton />
    </main>
  )
}
