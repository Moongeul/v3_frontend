'use client'

import Modal from '@/components/common/Modal'
import { ModalKey, useModalStore } from '@/store/modalStore'
import { Button } from '@/components/common'
import { useRouter } from 'next/navigation'

export default function RequiredLoginModal() {
  const { toggleModal, modals } = useModalStore()
  return (
    <Modal
      isOpen={modals.isRequiredLoginModalOpen}
      title={'로그인을 진행해주세요.'}
      content={`로그인이 필요한 서비스에요.`}
      footerButtons={<FooterButtons toggleModal={toggleModal} />}
    />
  )
}
function FooterButtons({ toggleModal }: { toggleModal: (key: ModalKey) => void }) {
  const router = useRouter()

  return (
    <>
      <Button
        variant={'secondary'}
        onClick={() => {
          toggleModal('isRequiredLoginModalOpen')
          router.back()
        }}
      >
        다음에
      </Button>
      <Button
        onClick={() => {
          toggleModal('isRequiredLoginModalOpen')
          router.push('/')
        }}
      >
        로그인
      </Button>
    </>
  )
}
