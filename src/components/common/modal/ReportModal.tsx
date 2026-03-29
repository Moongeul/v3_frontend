'use client'

import Modal from '@/components/common/Modal'
import { ModalKey, useModalStore } from '@/store/modalStore'
import { Button } from '@/components/common'
import { useRouter } from 'next/navigation'
import { useToast } from '@/components/common/toast/ToastContext'

export default function ReportModal() {
  const { toggleModal, modals } = useModalStore()
  return modals.isReportModalOpen ? (
    <Modal
      isOpen={modals.isReportModalOpen}
      onClose={() => toggleModal('isReportModalOpen')}
      title={`신고하시겠습니까?`}
      footerButtons={<FooterButtons toggleModal={toggleModal} />}
    />
  ) : null
}
function FooterButtons({ toggleModal }: { toggleModal: (key: ModalKey) => void }) {
  const router = useRouter()
  const { success, error } = useToast()

  return (
    <>
      <Button
        variant={'secondary'}
        onClick={() => {
          toggleModal('isReportModalOpen')
        }}
      >
        다음에
      </Button>
      <Button
        onClick={() => {
          toggleModal('isReportModalOpen')
          success('신고 완료', '해당 게시글이 신고되었습니다.')
        }}
      >
        네, 할래요
      </Button>
    </>
  )
}
