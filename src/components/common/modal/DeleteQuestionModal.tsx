'use client'

import Modal from '@/components/common/Modal'
import { ModalKey, useModalStore } from '@/store/modalStore'
import { Button } from '@/components/common'
import { useRouter } from 'next/navigation'
import { deleteQuestion } from '@/lib/client/question'
import { useToast } from '@/components/common/toast/ToastContext'

interface DeleteQuestionModalProps {
  questionId: number | string
}

export default function DeleteQuestionModal({ questionId }: DeleteQuestionModalProps) {
  const { toggleModal, modals } = useModalStore()
  return modals.isDeleteQuestionModalOpen ? (
    <Modal
      isOpen={modals.isDeleteQuestionModalOpen}
      onClose={() => toggleModal('isDeleteQuestionModalOpen')}
      title={'질문을 삭제할까요?'}
      footerButtons={<FooterButtons questionId={questionId} toggleModal={toggleModal} />}
    />
  ) : null
}
function FooterButtons({
  toggleModal,
  questionId,
}: {
  questionId: number | string
  toggleModal: (key: ModalKey) => void
}) {
  const router = useRouter()
  const { success, error } = useToast()

  return (
    <>
      <Button
        variant={'secondary'}
        onClick={() => {
          toggleModal('isDeleteQuestionModalOpen')
        }}
      >
        다음에
      </Button>
      <Button
        onClick={async () => {
          const result = await deleteQuestion(questionId)
          if (result.success) {
            success('질문 삭제 성공', '질문을 삭제했어요.')
            router.push('/question')
            router.refresh()
            toggleModal('isDeleteQuestionModalOpen')
          } else {
            error('질문 삭제 실패', '질문을 삭제하지 못했어요.')
            toggleModal('isDeleteQuestionModalOpen')
          }
        }}
      >
        네, 할래요
      </Button>
    </>
  )
}
