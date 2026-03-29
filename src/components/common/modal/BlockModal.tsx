'use client'

import Modal from '@/components/common/Modal'
import { ModalKey, useModalStore } from '@/store/modalStore'
import { Button } from '@/components/common'
import { useRouter } from 'next/navigation'
import { useToast } from '@/components/common/toast/ToastContext'
import { useEditStore } from '@/store/editStore'

export default function BlockModal() {
  const { toggleModal, modals } = useModalStore()
  const { deletePostId } = useEditStore((state) => state)
  return modals.isBlockModalOpen ? (
    <Modal
      isOpen={modals.isBlockModalOpen}
      onClose={() => toggleModal('isBlockModalOpen')}
      title={'차단하시겠습니까?'}
      footerButtons={<FooterButtons postId={deletePostId} toggleModal={toggleModal} />}
    />
  ) : null
}
function FooterButtons({ toggleModal }: { postId: number | string; toggleModal: (key: ModalKey) => void }) {
  const router = useRouter()
  const { success, error } = useToast()

  return (
    <>
      <Button
        variant={'secondary'}
        onClick={() => {
          toggleModal('isBlockModalOpen')
        }}
      >
        다음에
      </Button>
      <Button
        onClick={() => {
          toggleModal('isBlockModalOpen')
          success('차단 완료', '해당 사용자가 차단되었습니다.')
        }}
      >
        네, 할래요
      </Button>
    </>
  )
}
