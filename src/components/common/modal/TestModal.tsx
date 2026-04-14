'use client'

import Modal from '@/components/common/Modal'
import { TestBannerGraphic } from '@/assets/svgComponents'
import { useModalStore } from '@/store/modalStore'
import { Button } from '@/components/common'
import { useRouter } from 'next/navigation'

export default function TestModal() {
  const { modals, setModal } = useModalStore((state) => state)
  const router = useRouter() // 여기서 관리

  const handleSkip = () => {
    setModal('isTestModalOpen', false)
    router.push('/home?tab=PUBLIC')
  }

  const handleStart = () => {
    setModal('isTestModalOpen', false)
    router.push('/test?step=onboarding')
  }

  return (
    <Modal
      isOpen={modals.isTestModalOpen}
      onClose={() => setModal('isTestModalOpen', false)}
      title={'독서 취향 테스트를 해볼까요?'}
      content={`독서취향 테스트를 통해 \n나와 비슷한 취향을 추천받을 수 있어요.`}
      graphic={<TestBannerGraphic width={175} height={160} />}
      footerButtons={
        <>
          <Button variant={'secondary'} onClick={handleSkip}>
            다음에
          </Button>
          <Button onClick={handleStart}>네, 할래요</Button>
        </>
      }
    />
  )
}
