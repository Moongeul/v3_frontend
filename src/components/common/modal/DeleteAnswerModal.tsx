'use client'

import Modal from '@/components/common/Modal'
import { ModalKey, useModalStore } from '@/store/modalStore'
import { Button } from '@/components/common'
import { useRouter } from 'next/navigation'
import { deleteAnswer } from '@/lib/client/question'
import { useToast } from '@/components/common/toast/ToastContext'

interface DeleteAnswerModalProps {
  answerId: number | string
}

export default function DeleteAnswerModal({ answerId }: DeleteAnswerModalProps) {
  const { toggleModal, modals } = useModalStore()
  return modals.isDeleteAnswerModalOpen ? (
    <Modal
      isOpen={modals.isDeleteAnswerModalOpen}
      onClose={() => toggleModal('isDeleteAnswerModalOpen')}
      title={'답변을 삭제할까요?'}
      footerButtons={<FooterButtons answerId={answerId} toggleModal={toggleModal} />}
    />
  ) : null
}
function FooterButtons({ toggleModal, answerId }: { answerId: number | string; toggleModal: (key: ModalKey) => void }) {
  const router = useRouter()
  const { success, error } = useToast()

  return (
    <>
      <Button
        variant={'secondary'}
        onClick={() => {
          toggleModal('isDeleteAnswerModalOpen')
        }}
      >
        다음에
      </Button>
      <Button
        onClick={async () => {
          const result = await deleteAnswer(answerId)
          if (result.success) {
            success('답변 삭제 성공', '답변을 삭제했어요.')
            router.push('/question')
            router.refresh()
            toggleModal('isDeleteAnswerModalOpen')
          } else {
            error('답변 삭제 실패', '답변을 삭제하지 못했어요.')
            toggleModal('isDeleteAnswerModalOpen')
          }
        }}
      >
        네, 할래요
      </Button>
    </>
  )
}
