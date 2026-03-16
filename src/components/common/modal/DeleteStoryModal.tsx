'use client'

import Modal from '@/components/common/Modal'
import { ModalKey, useModalStore } from '@/store/modalStore'
import { Button } from '@/components/common'
import { useRouter } from 'next/navigation'
import { useToast } from '@/components/common/toast/ToastContext'
import { deleteStory } from '@/lib/client/story'

interface DeleteStoryModalProps {
  storyId: number | string
}

export default function DeleteStoryModal({ storyId }: DeleteStoryModalProps) {
  const { toggleModal, modals } = useModalStore()
  return modals.isDeleteStoryModalOpen ? (
    <Modal
      isOpen={modals.isDeleteStoryModalOpen}
      onClose={() => toggleModal('isDeleteStoryModalOpen')}
      title={'스토리를 삭제할까요?'}
      footerButtons={<FooterButtons storyId={storyId} toggleModal={toggleModal} />}
    />
  ) : null
}
function FooterButtons({ toggleModal, storyId }: { storyId: number | string; toggleModal: (key: ModalKey) => void }) {
  const router = useRouter()
  const { success, error } = useToast()

  return (
    <>
      <Button
        variant={'secondary'}
        onClick={() => {
          toggleModal('isDeleteStoryModalOpen')
        }}
      >
        다음에
      </Button>
      <Button
        onClick={async () => {
          const result = await deleteStory(storyId)
          if (result.success) {
            success('스토리 삭제 성공', '스토리를 삭제했어요.')
            router.back()
            router.refresh()
            toggleModal('isDeleteStoryModalOpen')
          } else {
            error('스토리 삭제 실패', '스토리를 삭제하지 못했어요.')
            toggleModal('isDeleteStoryModalOpen')
          }
        }}
      >
        네, 할래요
      </Button>
    </>
  )
}
